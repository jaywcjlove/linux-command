(function(){
    function Commands(){
        var $$ = this.$$;
        this.commands = linux_commands || [];
        this.elm_query = $$('query');
        this.elm_btn = $$('search_btn');
        this.elm_info = $$('commands_info');
        this.elm_result = $$('result');
        this.elm_search_result = $$('search_list_result');

        // 获取根路径
        this.root_path = (function(){
            var elm_path = $$('current_path');
            var url = window.location.origin+window.location.pathname;
            return elm_path?url.replace(elm_path.value,''):'';
        })();

        this.query = '';     //
        this.query_size = 5; //搜索框结果显示5条
        this.page_size = 20; //每页显示20条

        this.elm_info.innerHTML = this.commands.length;

        this.init()
        this.goToIndex()
    }

    Commands.prototype = {
        $$:function(id){
            return document.getElementById(id)
        },
        goToIndex(){
            var elma = document.getElementsByTagName('A');
            for (var i = 0; i < elma.length; i++) {
                if(elma[i].pathname==='/') elma[i].href = this.root_path.replace(/\/$/,'')+'/';
            }
        },
        bindEvent:function(elm,type,handle){
            if (elm.addEventListener) {
                elm.addEventListener(type, handle, false); 
            } else if (elm.attachEvent)  {
                elm.attachEvent('on'+type, handle);
            }
        },
        isSreachIndexOF:function(oldstr,kw){
            var istrue = false;
            if(oldstr&&toString.call(oldstr) === '[object Array]'){
                for (var i = 0; i < oldstr.length; i++) {
                    oldstr[i].toLowerCase()===kw.toLowerCase()?istrue=true:null;
                }
                return istrue;
            }
            if(!oldstr || !kw) return false;
            return oldstr.toLowerCase().indexOf(kw.toLowerCase()) > -1 ? true : false;
        },
        //获取URL上面的参数
        getQueryString:function(name) { 
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
            var r = decodeURIComponent(window.location.hash.replace(/^(\#\!|\#)/,'')).match(reg);
            if (r != null) return unescape(r[2]); return null; 
        },
        pushState:function(){
            if(window.history&&window.history.pushState)
                this.query ? history.pushState({},"linux_commands","#!kw="+this.query):
                    history.pushState({},"linux_commands",window.location.pathname);
        },
        //简单模版
        simple:function(str,obj){
            return str.replace(/\$\w+\$/gi, function(matchs) {
                var returns = obj[matchs.replace(/\$/g, "")];
                return typeof returns === "undefined" ? "" : returns;
            })
        },
        createKeyworldsHTML:function(json,keywolds,islist){
            var name = json.n,des = json.d,self = this,
                reg = new RegExp("("+keywolds+")","ig"),
                str = '';
            if(keywolds){
                name = json.n.replace(reg,'<i class="kw">'+"$1"+"</i>");
                des = json.d.replace(reg,'<i class="kw">'+"$1"+"</i>") || '';
            }

            str = islist ? '<a href="'+this.root_path+'/c$url$.html"><strong>$name$</strong> - $des$</a><p></p>' : '<a href="'+this.root_path+'/c$url$.html"><strong>$name$</strong> - $des$</a>';
            return this.simple(str,{
                name:name,
                url:json.p,
                des:des
            });
        },
        searchResult:function(islist){
            var arr = this.commands,self = this,i=0,
                page_size = islist?this.page_size:this.query_size,
                arrResultHTML = [];
            if(arr&&arr.length&&toString.call(arr).indexOf('Array')>-1){
                for (; i < page_size; i++) {
                    if(!arr[i]) break;
                    if(self.isSreachIndexOF(arr[i].n,self.query)
                     || self.isSreachIndexOF(arr[i].d,self.query) 
                    ){
                        arrResultHTML.push(self.createKeyworldsHTML(arr[i],self.query,islist));
                    }
                }
            }

            var elm = islist?this.elm_search_result:this.elm_result;
            elm.innerHTML='';
            for (var i = 0; i < arrResultHTML.length; i++) {
                var myLi = document.createElement("LI");
                myLi.innerHTML = arrResultHTML[i];
                elm.appendChild(myLi);
            }
            if(arrResultHTML.length === 0){
                var myLi = document.createElement("LI");
                myLi.innerHTML = '<span>'+this.query?'请尝试输入一些字符，进行搜素！'+'</span>':'没有搜索到任何内容，请尝试输入其它字符！';
                elm.appendChild(myLi);
            }
        },
        init:function(){
            var self = this;
            var kw = self.getQueryString('kw');
            var  timer = null
            this.elm_query.value = kw;
            this.query = kw;
            if(this.elm_search_result) self.searchResult(true);
            this.bindEvent(this.elm_query,'input',function(e){
                self.query = e.target.value;
                self.pushState()
                self.searchResult();
                self.elm_result.style.display = self.query?'block':'none';
            })
            this.bindEvent(this.elm_btn,'click',function(e){
                    console.log("---->")
                if(self.elm_search_result){
                    self.searchResult(true);  
                } 
                else{
                    window.location.href = self.root_path + '/list.html#!kw='+self.query;
                }
            })
            this.bindEvent(this.elm_query,'focus',function(e){
                self.searchResult();
                self.elm_result.style.display = 'block';
            })
            this.bindEvent(this.elm_query,'blur',function(e){
                timer = setTimeout(function(){
                    self.elm_result.style.display = 'none';
                },600)
            })
            if(kw) self.searchResult();
        }
    }

    new Commands()

})()
(function(){
    function Commands(){
        var $$ = this.$$;
        this.commands = linux_commands || [];
        this.elm_query = $$('query');
        this.elm_btn = $$('search_btn');
        this.elm_info = $$('commands_info');
        this.elm_result = $$('result');

        this.query = '';     //
        this.page_size = 10; //每页显示10条

        this.init()
    }

    Commands.prototype = {
        $$:function(id){
            return document.getElementById(id)
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
            console.log("reg1:",reg);
            var r = decodeURIComponent(window.location.hash.replace(/^(\#\!|\#)/,'')).match(reg);
            console.log("reg2:",r);
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
        createKeyworldsHTML:function(json,keywolds){
            var name = json.n,des = json.d,self = this,
                reg = new RegExp("("+keywolds+")","ig");
            if(keywolds){
                name = json.n.replace(reg,'<i class="kw">'+"$1"+"</i>");
                des = json.d.replace(reg,'<i class="kw">'+"$1"+"</i>") || '';
            }

            return this.simple('<a href="/c$url$.html"><strong>$name$</strong> - $des$</a>',{
                name:name,
                url:json.p,
                des:des
            })

        },
        // 获取根路径
        getRootPath(){

        },
        createListHTML:function(){
            var arr = this.commands,self = this,page_size = this.page_size,i=0;
            if(arr&&arr.length&&toString.call(arr).indexOf('Array')>-1){
                self.elm_result.innerHTML='';
                var relese = 0
                for (; i < page_size; i++) {
                    if(!arr[i]) break;
                    var myLi = document.createElement("LI");
                    if(self.isSreachIndexOF(arr[i].n,self.query) 
                        || self.isSreachIndexOF(arr[i].d,self.query) 
                    ){
                        relese += 1
                        myLi.innerHTML = self.createKeyworldsHTML(arr[i],self.query)
                        self.elm_result.appendChild(myLi);
                    }
                    if(relese ===0){
                        myLi.innerHTML = '<span>没有任何内容，请尝试输入其它字符！</span>';
                        self.elm_result.innerHTML = myLi.outerHTML;
                    }
                }
            }
        },
        init:function(){
            var self = this;
            var kw = self.getQueryString('kw');
            var  timer = null
            this.elm_query.value = kw;
            this.query = kw;
            this.bindEvent(this.elm_query,'input',function(e){
                self.query = e.target.value;
                self.pushState()
                self.createListHTML();
                self.elm_result.style.display = self.query?'block':'none';
            })
            this.bindEvent(this.elm_btn,'click',function(e){
                self.createListHTML();
            })
            this.bindEvent(this.elm_query,'focus',function(e){
                self.createListHTML();
                self.elm_result.style.display = 'block';
            })
            this.bindEvent(this.elm_query,'blur',function(e){
                timer = setTimeout(function(){
                    self.elm_result.style.display = 'none';
                },600)
            })
            if(kw) self.createListHTML();
        }
    }

    new Commands()

})()
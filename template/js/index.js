(function () {
  function Commands() {
    var $$ = this.$$;
    this.commands = linux_commands || [];
    this.elm_query = $$('query');
    this.elm_btn = $$('search_btn');
    this.elm_result = $$('result');
    this.elm_search_result = $$('search_list_result');

    // 获取根路径
    this.root_path = (function () {
      var elm_path = $$('current_path');
      var url = window.location.origin + window.location.pathname;
      return elm_path ? url.replace(/\/(c\/)?\w+\.html/, '').replace(/\/$/, '') : '';
    })();

    this.query = '';     //
    this.query_size = 5; //搜索框结果显示5条
    this.page_size = 50; //每页显示20条

    this.init()
    this.goToIndex()
  }

  Commands.prototype = {
    $$: function (id) {
      return document.getElementById(id)
    },
    goToIndex: function () {
      var elma = document.getElementsByTagName('A');
      for (var i = 0; i < elma.length; i++) {
        if (elma[i].pathname === '/') elma[i].href = this.root_path + '/';
      }
    },
    bindEvent: function (elm, type, handle) {
      if (elm.addEventListener) {
        elm.addEventListener(type, handle, false);
      } else if (elm.attachEvent) {
        elm.attachEvent('on' + type, handle);
      }
    },
    isSreachIndexOF: function (oldstr, kw) {
      if (!oldstr || !kw) return -1;
      return oldstr.toLowerCase().indexOf(kw.toLowerCase());
    },
    //获取URL上面的参数
    getQueryString: function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = decodeURIComponent(window.location.hash.replace(/^(\#\!|\#)/, '')).match(reg);
      if (r != null) return unescape(r[2]); return null;
    },
    pushState: function () {
      if (window.history && window.history.pushState)
        this.query ? history.pushState({}, "linux_commands", "#!kw=" + this.query) :
          history.pushState({}, "linux_commands", window.location.pathname);
    },
    //简单模版
    simple: function (str, obj) {
      return str.replace(/\$\w+\$/gi, function (matchs) {
        var returns = obj[matchs.replace(/\$/g, "")];
        return typeof returns === "undefined" ? "" : returns;
      })
    },
    createKeyworldsHTML: function (json, keywolds, islist) {
      var name = json.n, des = json.d, self = this,
        reg = new RegExp("(" + keywolds + ")", "ig"),
        str = '';
      if (keywolds) {
        name = json.n.replace(reg, '<i class="kw">' + "$1" + "</i>");
        des = json.d.replace(reg, '<i class="kw">' + "$1" + "</i>") || '';
      }

      var rootp = this.root_path.replace(/\/$/, '');
      str = islist ? '<a href="' + rootp + '/c$url$.html"><strong>$name$</strong> - $des$</a><p></p>' : '<a href="' + rootp + '/c$url$.html"><strong>$name$</strong> - $des$</a>';
      return this.simple(str, {
        name: name,
        url: json.p,
        des: des
      });
    },
    /**
     * [searchResult ]
     * @param  {[type]} islist [是否为列表]
     */
    searchResult: function (islist) {
      var arr = this.commands, self = this, i = 0,
        page_size = arr.length,
        arrResultHTML = [],
        resultData = [],
        show_list_count = islist ? this.page_size : this.query_size;
      if (arr && arr.length && toString.call(arr).indexOf('Array') > -1) {
        for (; i < page_size; i++) {
          if (!arr[i]) break;
          var nIdx = self.isSreachIndexOF(arr[i].n, self.query);
          var dIdx = self.isSreachIndexOF(arr[i].d, self.query);
          if (nIdx > -1 || dIdx > -1) {
            var json = arr[i];
            json.nIdx = nIdx;
            json.dIdx = dIdx;
            resultData.push(json);
          }
        }
      }
      resultData.sort(function (a, b) {
        return a.nIdx - b.nIdx
      }).sort(function(a, b) {
        return a.n.length - b.n.length;
      }).sort(function (a, b) {
        if (b.n.indexOf(self.query) < 0) {
          return -1;
        }
        return a.n.indexOf(self.query) - b.n.indexOf(self.query);
      });
      resultData = resultData.slice(0, show_list_count);

      for (i = 0; i < resultData.length; i++) {
        arrResultHTML.push(self.createKeyworldsHTML(resultData[i], self.query, islist));
      }
      var elm = islist ? this.elm_search_result : this.elm_result;
      elm.innerHTML = '';
      for (var i = 0; i < arrResultHTML.length; i++) {
        var myLi = document.createElement("LI");
        myLi.innerHTML = arrResultHTML[i];
        elm.appendChild(myLi);
      }
      if (arrResultHTML.length === 0) {
        var myLi = document.createElement("LI");
        myLi.innerHTML = '<span>' + this.query ? '请尝试输入一些字符，进行搜索！' + '</span>' : '没有搜索到任何内容，请尝试输入其它字符！';
        elm.appendChild(myLi);
      }
    },
    // 选中搜索结果效果
    selectedResult: function (type) {
      var items = this.elm_result.children;
      var index = 0;
      for (var i = 0; i < items.length; i++) {
        if (items[i].className == 'ok') {
          items[i].className = '';
          if (type == 'up') index = i - 1;
          else index = i + 1;
          break;
        };
      };
      if (items[index]) items[index].className = 'ok';
    },
    // 是否选中搜索结果
    isSelectedResult: function () {
      var items = this.elm_result.children;
      var isSel = false;
      for (var i = 0; i < items.length; i++) {
        if (items[i].className == 'ok') {
          isSel = items[i];
          break;
        };
      };
      return isSel;
    },
    init: function () {
      var self = this;
      var kw = self.getQueryString('kw');
      var timer = null
      this.elm_query.value = kw;
      this.query = kw || '';
      if (this.elm_search_result) self.searchResult(true);
      this.bindEvent(this.elm_query, 'input', function (e) {
        self.query = e.target.value;

        self.pushState()
        if (self.query) {
          self.searchResult();
        } else {
          self.elm_result.style.display = 'none';
        }
        if (!self.elm_search_result) {
          self.elm_result.style.display = self.query ? 'block' : 'none';
        } else {
          self.elm_btn.click();
        }
      })
      this.bindEvent(this.elm_btn, 'click', function (e) {
        self.elm_result.style.display = 'none';
        if (self.elm_search_result) self.searchResult(true);
        else {
          window.location.href = self.root_path + '/list.html#!kw=' + self.query;
        }
      })
      this.bindEvent(this.elm_query, 'focus', function (e) {
        self.searchResult();
        if (self.query) self.elm_result.style.display = 'block';
      })
      this.bindEvent(this.elm_query, 'blur', function (e) {
        timer = setTimeout(function () {
          self.elm_result.style.display = 'none';
        }, 300)
      })
      // 输入Enter键
      this.bindEvent(document, 'keyup', function (e) {
        if (e.key == 'Enter') {
          var item = self.isSelectedResult();
          if (!item) return self.elm_btn.click();
          if (item.children[0]) {
            item.children[0].click();
          }
        } else if (e.keyCode === 40) {
          // ArrowDown
          self.selectedResult()
        } else if (e.keyCode === 38) {
          // ArrowUp
          self.selectedResult("up");
        }
      })

      if (kw) self.searchResult();
    }
  }

  new Commands()

})()
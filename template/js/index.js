/**
* 对数组进行排序，作为 Array.sort() 回调函数使用
*/
const sortArray = function (a, b) {
  return a.nIdx - b.nIdx;
}
/**
 * 判断 indexOf() 是否捕获到了搜索词
 * @returns {boolean} 是否捕获
 */
function indexOfCatch(a) {
  return a > -1
}
(function () {
  class Commands {
    query = ''
    query_size = 5 //搜索框结果显示5条
    page_size = 50 //每页显示20条
    $$(id) {
      return document.getElementById(id)
    }
    constructor() {
      function $$(id) {
        return document.getElementById(id)
      }
      this.commands = linux_commands || [];
      this.elm_query = $$('query');
      this.elm_btn = $$('search_btn');
      this.elm_result = $$('result');
      this.elm_search_result = $$('search_list_result');

      // 获取根路径
      this.root_path = (function () {
        let elm_path = $$('current_path');
        let url = window.location.origin + window.location.pathname;
        return elm_path ? url.replace(/\/(c\/)?(\w|-)+\.html/, '').replace(/\/$/, '') : '';
      })();

      this.init();
      this.goToIndex();
    }
    /**
     * 前往主页
     * @memberof Commands
     */
    goToIndex() {
      let elma = document.getElementsByTagName('A');
      for (let i = 0; i < elma.length; i++) {
        if (elma[i].pathname === '/' && !/^https?:/i.test(elma[i].protocol)) {
          elma[i].href = this.root_path + '/';
        }
      }
    }
    /**
     * 绑定事件
     * 该函数有兼容性处理
     * @param {HTMLElement} element 需要绑定事件的元素
     * @param {*} type 需要绑定的类型
     * @param {*} callback 事件触发回调
     * @memberof Commands
     */
    bindEvent(element, type, callback) {
      if (element.addEventListener) {
        element.addEventListener(type, callback, false);
      } else if (element.attachEvent) {
        element.attachEvent('on' + type, callback);
      }
    }
    isSreachIndexOF(oldstr, kw) {
      if (!oldstr || !kw) return -1;
      return oldstr.toLowerCase().indexOf(kw.toLowerCase());
    }
    //获取URL上面的参数
    getQueryString(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      let r = decodeURIComponent(window.location.hash.replace(/^(\#\!|\#)/, '')).match(reg);
      if (r != null) return unescape(r[2]); return null;
    }
    /**
     * 通过 window.history 设置地址栏的地址
     * @memberof Commands
     */
    pushState() {
      if (window.history && window.history.pushState)
        if (this.query) {
          history.pushState({}, "linux_commands", `#!kw=${this.query}`)
        } else {
          history.pushState({}, "linux_commands", window.location.pathname);
        }
    }
    /**
     * 一个简单的模板函数
     *
     * @param {string} str 传入的 HTML 模板
     * @param {object} obj 一个对象，用于放置在 HTML 模板中
     * @return {string} 经过处理的 HTML 模板 
     * @memberof Commands
     */
    simple(str, obj) {
      return str.replace(/\$\w+\$/gi, function (matchs) {
        let returns = obj[matchs.replace(/\$/g, "")];
        return typeof returns === "undefined" ? "" : returns;
      })
    }
    /**创建 keyworlds HTML
     * @param {*} json 根据这段 JSON 生成
     * @param {*} keywolds 关键字
     * @param {*} islist 表示这是否是一个列表
     * @return {*} 返回一个 HTML 字符串
     */
    createKeyworldsHTML(json, keywolds, islist) {
      const listHTML = '<p></p>'
      const replaceHTML = `<i class="kw">$1</i>`
      let name = json.n
      let des = json.d
      let reg = new RegExp(`(${keywolds})`, "ig")
      if (keywolds) {
        name = json.n.replace(reg, replaceHTML);
        des = json.d.replace(reg, replaceHTML) || '';
      }
      let rootp = this.root_path.replace(/\/$/, '');
      const str = `<a href="${rootp}/c$url$.html"><strong>$name$</strong> - $des$</a>${islist ? listHTML : ''}`
      return this.simple(str, {
        name,
        url: json.p,
        des
      });
    }
    /**搜索结果
     * @param  {boolean} islist 是否为列表*/
    searchResult(islist = false) {
      let arr = this.commands
      const self = this
      let page_size = arr.length
      let arrResultHTML = []
      const show_list_count = islist ? this.page_size : this.query_size;
      let nameArr = [], desArr = [];
      if (indexOfCatch(arr && arr.length && toString.call(arr).indexOf('Array'))) {
        for (let i = 0; i < page_size; i++) {
          if (!arr[i]) break;
          const nIdx = self.isSreachIndexOF(arr[i].n, self.query);
          const dIdx = self.isSreachIndexOF(arr[i].d, self.query);
          let json = arr[i];
          if (indexOfCatch(nIdx)) {
            json.nIdx = nIdx;
            nameArr.push(json);
          } else if (indexOfCatch(dIdx)) {
            json.dIdx = dIdx;
            desArr.push(json);
          }
        }
      }
      nameArr.sort(sortArray);
      desArr.sort(sortArray);


      const resultData = nameArr.concat(desArr).slice(0, show_list_count);
      resultData.forEach(a => {
        arrResultHTML.push(self.createKeyworldsHTML(a, self.query, islist));
      })

      /** @type {HTMLElement} */
      let elm = islist ? this.elm_search_result : this.elm_result;
      elm.innerHTML = ''
      arrResultHTML.forEach((result, i) => {
        const el = document.createElement('li')
        el.innerHTML = result
        elm.appendChild(el);
      })
      if (!arrResultHTML.length) {
        const noResultTipHTML = document.createElement("LI");
        const tipSpan = document.createElement("span")
        const nullQueryStringTips = `请尝试输入一些字符，进行搜索！`
        const undefinedQueryTips = `没有搜索到任何内容，请尝试输入其它字符！`
        tipSpan.innerText = this.query ? undefinedQueryTips : nullQueryStringTips
        noResultTipHTML.appendChild(tipSpan);
        elm.appendChild(noResultTipHTML);
      }
    }
    /**
     * 移动搜索结果的光标
     * @param {"up"|"down"} type 触发事件类型
     * @memberof Commands
     */
    selectedResult(type) {
      /** @type {Array} */
      let items = this.elm_result.children;
      let index = 0;
      for (var i = 0; i < items.length; i++) {
        if (items[i].className == 'ok') {
          items[i].className = '';
          if (type == 'up') index = i - 1;
          else index = i + 1;
          break;
        };
      };
      if (items[index]) items[index].className = 'ok';
    }
    // 是否选中搜索结果
    isSelectedResult() {
      let items = this.elm_result.children;
      let isSel = false;
      for (let i = 0; i < items.length; i++) {
        if (items[i].className == 'ok') {
          isSel = items[i];
          break;
        };
      };
      return isSel;
    }
    init() {
      /**
       * 设定搜索结果的 CSS display 属性
       *
       * @param {string} [inputDisplay='none']
       */
      function setdisplay(inputDisplay) {
        self.elm_result.style.display = inputDisplay || 'none'
      }
      let self = this;
      let kw = self.getQueryString('kw');
      this.elm_query.value = kw;
      this.query = kw || '';
      if (this.elm_search_result) self.searchResult(true);
      this.bindEvent(this.elm_query, 'input', function (e) {
        self.query = e.target.value;
        self.pushState()
        if (self.query) {
          self.searchResult();
        } else {
          setdisplay()
        }
        if (!self.elm_search_result) {
          setdisplay(self.query ? 'block' : 'none')
        } else {
          self.elm_btn.click();
        }
      })
      this.bindEvent(this.elm_btn, 'click', function (e) {
        setdisplay();
        if (self.elm_search_result) self.searchResult(true);
        else window.location.href = self.root_path + '/list.html#!kw=' + self.query;
      })
      this.bindEvent(this.elm_query, 'focus', function (e) {
        self.searchResult();
        if (self.query) setdisplay('block');
      })
      this.bindEvent(this.elm_query, 'blur', function (e) {
        setTimeout(function () {
          setdisplay();
        }, 300)
      })
      // 输入Enter键
      this.bindEvent(document, 'keyup', function (e) {
        if (e.keyCode === 40) self.selectedResult("down");
        if (e.keyCode === 38) self.selectedResult("up");
        if (e.key == 'Enter') {
          let item = self.isSelectedResult();
          if (!item) return self.elm_btn.click();
          if (item.children[0]) item.children[0].click();
        }
      })
      if (kw) self.searchResult();
    }
  }
  new Commands()
})()
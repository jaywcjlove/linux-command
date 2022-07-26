/**
 * @package @wcj/dark-mode
 * Web Component that toggles dark mode 🌒
 * Github: https://github.com/jaywcjlove/dark-mode.git
 * Website: https://jaywcjlove.github.io/dark-mode
 * 
 * Licensed under the MIT license.
 * @license Copyright © 2022. Licensed under the MIT License
 * @author kenny wong <wowohoo@qq.com>
 */
const doc = document;
const LOCAL_NANE = '_dark_mode_theme_'
const PERMANENT = 'permanent';
const COLOR_SCHEME_CHANGE = 'colorschemechange';
const PERMANENT_COLOR_SCHEME = 'permanentcolorscheme';
const LIGHT = 'light';
const DARK = 'dark';

// See https://html.spec.whatwg.org/multipage/common-dom-interfaces.html ↵
// #reflecting-content-attributes-in-idl-attributes.
const installStringReflection = (obj, attrName, propName = attrName) => {
  Object.defineProperty(obj, propName, {
    enumerable: true,
    get() {
      const value = this.getAttribute(attrName);
      return value === null ? '' : value;
    },
    set(v) {
      this.setAttribute(attrName, v);
    },
  });
};

const installBoolReflection = (obj, attrName, propName = attrName) => {
  Object.defineProperty(obj, propName, {
    enumerable: true,
    get() {
      return this.hasAttribute(attrName);
    },
    set(v) {
      if (v) {
        this.setAttribute(attrName, '');
      } else {
        this.removeAttribute(attrName);
      }
    },
  });
};

class DarkMode extends HTMLElement {
  static get observedAttributes() {
    return ['mode', LIGHT, DARK, PERMANENT];
  }
  LOCAL_NANE = LOCAL_NANE;
  constructor() {
    super();
    this._initializeDOM();
  }
  connectedCallback() {
    installStringReflection(this, 'mode');
    installStringReflection(this, DARK);
    installStringReflection(this, LIGHT);
    installBoolReflection(this, PERMANENT);

    const rememberedValue = localStorage.getItem(LOCAL_NANE);
    if (rememberedValue && [LIGHT, DARK].includes(rememberedValue)) {
      this.mode = rememberedValue;
      this.permanent = true;
    }
    if (this.permanent && !rememberedValue) {
      localStorage.setItem(LOCAL_NANE, this.mode);
    }
    const hasNativePrefersColorScheme = [LIGHT, DARK].includes(rememberedValue);

    if (this.permanent && rememberedValue) {
      this._changeThemeTag();
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.mode = DARK;
        this._changeThemeTag();
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        this.mode = LIGHT;
        this._changeThemeTag();
      }
    }
    if (!this.permanent && !hasNativePrefersColorScheme) {
      window.matchMedia('(prefers-color-scheme: light)').onchange = (event) => {
        this.mode = event.matches ? LIGHT : DARK;
        this._changeThemeTag();
      }
      window.matchMedia('(prefers-color-scheme: dark)').onchange = (event) => {
        this.mode = event.matches ? DARK : LIGHT;
        this._changeThemeTag();
      }
    }
    const observer = new MutationObserver((mutationsList, observer) => {
      this.mode = doc.documentElement.dataset.colorMode;
      if (this.permanent && hasNativePrefersColorScheme) {
        localStorage.setItem(LOCAL_NANE, this.mode);
        this._dispatchEvent(PERMANENT_COLOR_SCHEME, {
          permanent: this.permanent,
        });
      }
      this._changeContent();
      this._dispatchEvent(COLOR_SCHEME_CHANGE, { colorScheme: this.mode });
    });
    // Start observing the target node with the above configuration
    observer.observe(doc.documentElement, { attributes: true });
    // After that, stop observing
    // observer.disconnect();
    this._dispatchEvent(COLOR_SCHEME_CHANGE, { colorScheme: this.mode });

    this._changeContent();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'mode' && oldValue !== newValue && [LIGHT, DARK].includes(newValue)) {
      const rememberedValue = localStorage.getItem(LOCAL_NANE);
      if (this.mode === rememberedValue) {
        this.mode = newValue;
        this._changeContent();
        this._changeThemeTag();
      } else if (this.mode && this.mode !== rememberedValue) {
        this._changeContent();
        this._changeThemeTag();
      }
    } else if ((name === LIGHT || name === DARK) && oldValue !== newValue) {
      this._changeContent();
    }
    if (name === 'permanent' && typeof this.permanent === 'boolean') {
      this.permanent ? localStorage.setItem(LOCAL_NANE, this.mode) : localStorage.removeItem(LOCAL_NANE);
    }
  }
  _changeThemeTag() {
    doc.documentElement.setAttribute('data-color-mode', this.mode);
  }
  _changeContent() {
    this.icon.textContent = this.mode === LIGHT ? '🌒' : '🌞';
    this.text.textContent = this.mode === LIGHT ? this.getAttribute(DARK) : this.getAttribute(LIGHT);
    if (!this.text.textContent && this.text.parentElement && this.text) {
      this.text.parentElement.removeChild(this.text)
    }
  }
  _initializeDOM() {
    var shadow = this.attachShadow({ mode: 'open' });
    this.label = doc.createElement('span');
    this.label.setAttribute('class', 'wrapper');
    this.label.onclick = () => {
      this.mode = this.mode === LIGHT ? DARK : LIGHT;
      if (this.permanent) {
        localStorage.setItem(LOCAL_NANE, this.mode);
      }
      this._changeThemeTag();
      this._changeContent();
    }
    shadow.appendChild(this.label);
    this.icon = doc.createElement('span');
    this.label.appendChild(this.icon);

    this.text = doc.createElement('span');
    this.label.appendChild(this.text);

    const textContent = `
[data-color-mode*='dark'], [data-color-mode*='dark'] body {
  color-scheme: dark;
  --color-theme-bg: #0d1117;
  --color-theme-text: #c9d1d9;
  background-color: var(--color-theme-bg);
  color: var(--color-theme-text);
}

[data-color-mode*='light'], [data-color-mode*='light'] body {
  color-scheme: light;
  --color-theme-bg: #fff;
  --color-theme-text: #24292f;
  background-color: var(--color-theme-bg);
  color: var(--color-theme-text);
}`;

    const STYLE_ID = '_dark_mode_style_';
    const styleDom = doc.getElementById(STYLE_ID);
    
    if (!styleDom) {
      var initstyle = doc.createElement('style');
      initstyle.id = STYLE_ID;
      initstyle.textContent = textContent;
      doc.head.appendChild(initstyle);
    }

    var style = doc.createElement('style');
    style.textContent = `
    .wrapper { cursor: pointer; user-select: none; position: relative; }
    .wrapper > span + span { margin-left: .4rem; }
    `;
    shadow.appendChild(style);
  }
  _dispatchEvent(type, value) {
    this.dispatchEvent(new CustomEvent(type, {
      bubbles: true,
      composed: true,
      detail: value,
    }));
  }
}

customElements.define('dark-mode', DarkMode);
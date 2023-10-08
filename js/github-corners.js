const GITHUB_CORNERS_TEMPLATE = document.createElement("template");
GITHUB_CORNERS_TEMPLATE.innerHTML = `
<style>
:host a:hover .octo-arm { animation: octocat-wave 560ms ease-in-out; }
@keyframes octocat-wave {
  0%, 100% { transform: rotate(0); }
  20%, 60% { transform: rotate(-25deg); }
  40%, 80% { transform: rotate(10deg); }
}
@media (max-width:500px) {
  :host a:hover .octo-arm { animation: none; }
  :host .octo-arm { animation: octocat-wave 560ms ease-in-out; }
}
:host svg {
  z-index: 99;
  position: fixed;
  border: 0px;
  top: 0px;
}
</style>
<svg width="54" height="54" viewBox="0 0 250 250" aria-hidden="true">
  <a xlink:href="https://github.com/uiwjs/react-github-corners" target="_blank" rel="nofollow sponsored" style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255);">
    <g>
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>
      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
    </g>
  </a>
</svg>
`;
export class GithubCorners extends HTMLElement {
    static get observedAttributes() {
        return ['style', 'z-index', 'target', 'height', 'width', 'href', 'color', 'fill', 'position', 'top', 'left', 'right', 'bottom', 'transform'];
    }
    constructor() {
        super();
        this.right = '0';
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(this.ownerDocument.importNode(GITHUB_CORNERS_TEMPLATE.content, true));
        this.update();
    }
    setAttr(name, value) {
        const svg = this.shadow.querySelector('svg');
        if (/(href)/.test(name.toLocaleLowerCase())) {
            svg.lastElementChild.setAttribute('xlink:href', value);
        }
        else if (/(color|fill)/.test(name.toLocaleLowerCase())) {
            svg.firstElementChild.style[name] = value;
        }
        else if (/(z-index|position|top|left|right|bottom|transform)/.test(name.toLocaleLowerCase())) {
            svg.style[name] = value;
        }
        else {
            svg.setAttribute(name, value);
        }
    }
    update() {
        ;
        [...this.getAttributeNames(), 'right'].forEach((name) => {
            const value = this.getAttribute(name) || this[name] || '';
            this.setAttr(name, value);
        });
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.setAttr(name, newValue);
        }
    }
}
customElements.define('github-corners', GithubCorners);
//# sourceMappingURL=index.js.map
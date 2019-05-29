/*!
 * vue-typed-text v1.0.0
 * (c) Roberto Gallea
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));

//
//
//
//
//
//
//
//
var script = {
  props: {
    'fixedText': {
      type: String
    },
    'texts': {
      type: Array
    },
    'speed': {
      type: Number,
      "default": 100
    },
    'delay': {
      type: Number,
      "default": 3000
    },
    'fixedTextClass': {
      "default": ''
    },
    'dynamicTextClass': {
      "default": ''
    },
    'caretClass': {
      "default": ''
    }
  },
  data: function data() {
    return {
      currentText: '',
      currentIndex: 0,
      cursor: 0,
      blinking: false,
      currentDelay: 0
    };
  },
  mounted: function mounted() {
    window.setInterval(this.update, this.speed);
  },
  methods: {
    update: function update() {
      this.blinking = !this.blinking;

      if (this.cursor < this.texts[this.currentIndex].length) {
        this.cursor++;
        this.currentText = this.texts[this.currentIndex].substr(0, this.cursor);
        return;
      }

      this.currentText = this.texts[this.currentIndex];
      this.currentDelay += this.speed;

      if (this.currentDelay >= this.delay) {
        this.reset();
      }
    },
    reset: function reset() {
      this.currentDelay = 0;
      this.cursor = 0;
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('h1', {
    staticClass: "text-2xl lg:text-6xl"
  }, [_c('span', {
    "class": _vm.fixedTextClass,
    domProps: {
      "innerHTML": _vm._s(_vm.fixedText)
    }
  }), _vm._v(" "), _c('span', {
    "class": _vm.dynamicTextClass,
    domProps: {
      "innerHTML": _vm._s(_vm.currentText)
    }
  }), _vm._v(" "), _c('span', {
    "class": _vm.caretClass,
    style: {
      opacity: _vm.blinking ? '1' : '0'
    }
  }, [_vm._v("|")])]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

var TextTyping = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

var index = {
  install: function install(Vue, options) {
    Vue.component("text-typing", TextTyping);
  }
};

module.exports = index;

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Add-category.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Add-category.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      posts: {
        title: ''
      },
      errors: []
    };
  },
  methods: {
    submitCategory: function submitCategory() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/add-category", this.posts).then(function (response) {
        console.log(response);

        _this.$router.push({
          path: '/'
        });

        _this.posts = response.data;
      })["catch"](function (e) {
        _this.errors.push(e);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "content" }, [
    _c("div", { staticClass: "page-title" }, [
      _c(
        "h4",
        [
          _c("router-link", { attrs: { to: "/categories" } }, [
            _vm._v("Категории")
          ]),
          _vm._v(" "),
          _c("i", { staticClass: "material-icons" }, [
            _vm._v("keyboard_arrow_right")
          ]),
          _vm._v("\r\n            Добавить категорию\r\n        ")
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "form",
        {
          staticClass: "col s12 l6",
          on: {
            submit: function($event) {
              return _vm.submitCategory()
            }
          }
        },
        [
          _c("div", { staticClass: "input-field" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.posts.title,
                  expression: "posts.title"
                }
              ],
              attrs: { id: "name", type: "text" },
              domProps: { value: _vm.posts.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.posts, "title", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("label", { attrs: { for: "name" } }, [_vm._v("Название")])
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2)
        ]
      ),
      _vm._v(" "),
      _vm._m(3)
    ]),
    _vm._v(" "),
    _vm._m(4)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("button", { staticClass: "btn btn-small red" }, [
        _c("i", { staticClass: "material-icons" }, [_vm._v("delete")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        { staticClass: "waves-effect waves-light btn orange lighten-2 mb2" },
        [
          _c("i", { staticClass: "material-icons left" }, [_vm._v("backup")]),
          _vm._v(
            "\r\n                    Загрузить изображение\r\n                "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("button", { staticClass: "waves-effect waves-light btn" }, [
        _vm._v(
          "\r\n                    Сохранить изменения\r\n                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4 center" }, [
      _c("img", {
        staticClass: "responsive-img",
        staticStyle: { height: "200px" },
        attrs: { src: "js/assets/img/no-photo.jpg" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "page-subtitle" }, [
          _c("h4", [_vm._v("Позиции:")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "waves-effect waves-light btn grey darken-1  btn-small modal-trigger ",
              attrs: { "data-target": "create-modal" }
            },
            [
              _vm._v(
                "\r\n                    Добавить позицию\r\n                "
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "collection" }, [
          _c("a", { staticClass: "collection-item collection-item-icon" }, [
            _c("span", [
              _vm._v("\r\n                        Кофе "),
              _c("strong", [_vm._v("20 руб.")])
            ]),
            _vm._v(" "),
            _c("span", [
              _c("i", { staticClass: "material-icons" }, [_vm._v("delete")])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Add-category.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Add-category.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add-category.vue?vue&type=template&id=42f91f6e& */ "./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e&");
/* harmony import */ var _Add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add-category.vue?vue&type=script&lang=js& */ "./resources/js/views/Add-category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Add-category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Add-category.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Add-category.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Add-category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Add-category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Add-category.vue?vue&type=template&id=42f91f6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
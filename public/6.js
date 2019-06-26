(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order-position.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order-position.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order-position.vue?vue&type=template&id=fc7468b2&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Order-position.vue?vue&type=template&id=fc7468b2& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("main", { staticClass: "content" }, [
        _c("div", { staticClass: "page-title" }, [
          _c("h4", [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Заказ")]),
            _vm._v(" "),
            _c("i", { staticClass: "material-icons" }, [
              _vm._v("keyboard_arrow_right")
            ]),
            _vm._v("\r\n            Добавить продукцию\r\n        ")
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "waves-effect btn grey darken-1 modal-trigger",
              attrs: { "data-target": "explore-order" }
            },
            [_vm._v("\r\n            Завершить\r\n        ")]
          )
        ]),
        _vm._v(" "),
        _c("table", { staticClass: "highlight" }, [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("Название")]),
              _vm._v(" "),
              _c("th", [_vm._v("Стоимость")]),
              _vm._v(" "),
              _c("th", [_vm._v("Количество")]),
              _vm._v(" "),
              _c("th")
            ])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("Coffee")]),
              _vm._v(" "),
              _c("td", [_vm._v("200 руб.")]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "div",
                  { staticClass: "input-field inline order-position-input" },
                  [
                    _c("input", {
                      attrs: { type: "number", value: "1", min: "1" }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  { staticClass: "btn waves-effect wavers-light btn-small" },
                  [_vm._v("Добавить")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("Coffee")]),
              _vm._v(" "),
              _c("td", [_vm._v("200 руб.")]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "div",
                  { staticClass: "input-field inline order-position-input" },
                  [
                    _c("input", {
                      attrs: { type: "number", value: "1", min: "1" }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  { staticClass: "btn waves-effect wavers-light btn-small" },
                  [_vm._v("Добавить")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("Coffee")]),
              _vm._v(" "),
              _c("td", [_vm._v("200 руб.")]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "div",
                  { staticClass: "input-field inline order-position-input" },
                  [
                    _c("input", {
                      attrs: { type: "number", value: "1", min: "1" }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  { staticClass: "btn waves-effect wavers-light btn-small" },
                  [_vm._v("Добавить")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal modal-fixed-footer",
          attrs: { id: "explore-order" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("h4", { staticClass: "mb1" }, [_vm._v("Ваш заказ")]),
            _vm._v(" "),
            _c("table", { staticClass: "highlight" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("Название")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Количество")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Цена")]),
                  _vm._v(" "),
                  _c("th")
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("Alvin")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("3")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("$0.87")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("i", { staticClass: "material-icons pointer" }, [
                      _vm._v("delete")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Alan")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("1")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("$3.76")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("i", { staticClass: "material-icons pointer" }, [
                      _vm._v("delete")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Jonathan")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("2")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("$7.00")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("i", { staticClass: "material-icons pointer" }, [
                      _vm._v("delete")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "order-summary" }, [
              _c("p", [
                _vm._v("Общая стоимость "),
                _c("strong", [_vm._v("22 231 руб.")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "a",
              {
                staticClass: "modal-action waves-effect waves-black btn-flat",
                attrs: { href: "#!" }
              },
              [_vm._v("Отмена")]
            ),
            _vm._v(" "),
            _c("button", { staticClass: "modal-action btn waves-effect" }, [
              _vm._v("Подтвердить")
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "fixed-action-btn" }, [
        _c("a", { staticClass: "btn-floating btn-large red" }, [
          _c("i", { staticClass: "large material-icons" }, [_vm._v("add")])
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _c("a", { staticClass: "btn-floating green" }, [
              _c("i", { staticClass: "material-icons" }, [_vm._v("assignment")])
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { staticClass: "btn-floating blue" }, [
              _c("i", { staticClass: "material-icons" }, [_vm._v("list")])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Order-position.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Order-position.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Order_position_vue_vue_type_template_id_fc7468b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order-position.vue?vue&type=template&id=fc7468b2& */ "./resources/js/views/Order-position.vue?vue&type=template&id=fc7468b2&");
/* harmony import */ var _Order_position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order-position.vue?vue&type=script&lang=js& */ "./resources/js/views/Order-position.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Order_position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Order_position_vue_vue_type_template_id_fc7468b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Order_position_vue_vue_type_template_id_fc7468b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Order-position.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Order-position.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Order-position.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Order-position.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order-position.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_position_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Order-position.vue?vue&type=template&id=fc7468b2&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Order-position.vue?vue&type=template&id=fc7468b2& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_position_vue_vue_type_template_id_fc7468b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Order-position.vue?vue&type=template&id=fc7468b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Order-position.vue?vue&type=template&id=fc7468b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_position_vue_vue_type_template_id_fc7468b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_position_vue_vue_type_template_id_fc7468b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
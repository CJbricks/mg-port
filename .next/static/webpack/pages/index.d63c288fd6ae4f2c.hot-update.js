"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/scars.js":
/*!****************************!*\
  !*** ./src/pages/scars.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Scars; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Settings for the slider\nconst settings = {\n    dots: true,\n    arrows: true,\n    fade: true,\n    infinite: true,\n    autoplay: true,\n    speed: 300,\n    autoplaySpeed: 8000,\n    slidesToShow: 1,\n    slidesToScroll: 1\n};\nfunction Scars() {\n    _s();\n    // As we have used custom buttons, we need a reference variable to\n    // change the state\n    const [slider, setSlider] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // These are the breakpoints which changes the position of the\n    // buttons as the screen size changes\n    const top = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBreakpointValue)({\n        base: \"50%\",\n        md: \"50%\"\n    });\n    const side = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBreakpointValue)({\n        base: \"0%\",\n        md: \"40px\"\n    });\n    // This list contains all the data for carousels\n    // This can be static or loaded from a server\n    const cards = [\n        {\n            title: \"Body Modification\",\n            text: \"\"\n        },\n        {\n            title: \"Scarification\",\n            text: \"\"\n        },\n        {\n            title: \"Piercing\",\n            text: \"\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        bg: \"gray.200\",\n        p: 4,\n        position: \"relative\",\n        height: [\n            \"300px\",\n            \"400px\",\n            \"full\"\n        ],\n        width: \"full\",\n        overflow: \"hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"stylesheet\",\n                type: \"text/css\",\n                charSet: \"UTF-8\",\n                href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\"\n            }, void 0, false, {\n                fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"stylesheet\",\n                type: \"text/css\",\n                href: \"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\"\n            }, void 0, false, {\n                fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                        \"aria-label\": \"left-arrow\",\n                        variant: \"ghost\",\n                        position: \"absolute\",\n                        left: side,\n                        top: top,\n                        transform: \"translate(0%, -50%)\",\n                        zIndex: 2,\n                        onClick: ()=>{\n                            var _slider;\n                            return (_slider = slider) === null || _slider === void 0 ? void 0 : _slider.slickPrev();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiLeftArrowAlt, {\n                            size: \"40px\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                        \"aria-label\": \"right-arrow\",\n                        variant: \"ghost\",\n                        position: \"absolute\",\n                        right: side,\n                        top: top,\n                        transform: \"translate(0%, -50%)\",\n                        zIndex: 2,\n                        onClick: ()=>{\n                            var _slider;\n                            return (_slider = slider) === null || _slider === void 0 ? void 0 : _slider.slickNext();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiRightArrowAlt, {\n                            size: \"40px\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ...settings,\n                ref: (slider)=>setSlider(slider),\n                children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        height: \"100%\",\n                        position: \"relative\",\n                        backgroundPosition: \"center\",\n                        backgroundRepeat: \"no-repeat\",\n                        backgroundSize: \"cover\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                src: \"/Images/scarification-mg-color.jpg\",\n                                alt: \"mario-gonz-scar-image-color\",\n                                position: \"absolute\",\n                                zIndex: \"-1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                                size: \"container.2xl\",\n                                height: \"600px\",\n                                position: \"relative\",\n                                textAlign: [\n                                    \"left\",\n                                    \"center\"\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                                    spacing: 2,\n                                    w: [\n                                        \"full\"\n                                    ],\n                                    maxW: \"xl\",\n                                    position: \"absolute\",\n                                    top: \"40%\",\n                                    left: \"-80%\",\n                                    transform: \"translate(0, -150%)\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                            color: \"white\",\n                                            fontSize: {\n                                                base: \"3xl\",\n                                                md: \"4xl\",\n                                                lg: \"7xl\"\n                                            },\n                                            fontWeight: 700,\n                                            p: 2,\n                                            borderRadius: \"5px\",\n                                            children: card.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                                            lineNumber: 136,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                            color: \"teal.400\",\n                                            fontSize: {\n                                                base: \"sm\",\n                                                lg: \"md\"\n                                            },\n                                            fontWeight: 600,\n                                            p: [\n                                                4,\n                                                0,\n                                                0\n                                            ],\n                                            children: card.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                                            lineNumber: 139,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                                lineNumber: 123,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cj/Documents/mariostabs/mg-port/src/pages/scars.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Scars, \"ZVb7sLFV0sqFyxnWCBz60MYftuU=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBreakpointValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBreakpointValue\n    ];\n});\n_c = Scars;\nvar _c;\n$RefreshReg$(_c, \"Scars\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9BOzRDQUFDOEQsT0FBTzs0Q0FBU0MsVUFBVTtnREFBRTFDLE1BQU07Z0RBQU9DLElBQUk7Z0RBQU8wQyxJQUFJOzRDQUFNOzRDQUFHQyxZQUFZOzRDQUFLckMsR0FBRzs0Q0FBR3NDLGNBQWM7c0RBQzVHZixLQUFLMUIsS0FBSzs7Ozs7O3NEQUViLDhEQUFDeEIsa0RBQUlBOzRDQUFDNkQsT0FBTzs0Q0FBWUMsVUFBVTtnREFBRTFDLE1BQU07Z0RBQU0yQyxJQUFJOzRDQUFLOzRDQUFHQyxZQUFZOzRDQUFLckMsR0FBRztnREFBQztnREFBRztnREFBRzs2Q0FBRTtzREFDdkZ1QixLQUFLekIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQTNCYjBCOzs7Ozs7Ozs7Ozs7Ozs7O0FBcUNqQjtHQXpId0JuQzs7UUFPVm5CLGdFQUFrQkE7UUFDakJBLGdFQUFrQkE7OztLQVJUbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NjYXJzLmpzP2Q0NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBCb3gsXG4gIEljb25CdXR0b24sXG4gIHVzZUJyZWFrcG9pbnRWYWx1ZSxcbiAgU3RhY2ssXG4gIEhlYWRpbmcsXG4gIFRleHQsXG4gIENvbnRhaW5lcixcbiAgSW1hZ2Vcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBCaUxlZnRBcnJvd0FsdCwgQmlSaWdodEFycm93QWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvYmknO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5cblxuLy8gU2V0dGluZ3MgZm9yIHRoZSBzbGlkZXJcbmNvbnN0IHNldHRpbmdzID0ge1xuICBkb3RzOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIGZhZGU6IHRydWUsXG4gIGluZmluaXRlOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgc3BlZWQ6IDMwMCxcbiAgYXV0b3BsYXlTcGVlZDogODAwMCxcbiAgc2xpZGVzVG9TaG93OiAxLFxuICBzbGlkZXNUb1Njcm9sbDogMSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjYXJzKCkge1xuICAvLyBBcyB3ZSBoYXZlIHVzZWQgY3VzdG9tIGJ1dHRvbnMsIHdlIG5lZWQgYSByZWZlcmVuY2UgdmFyaWFibGUgdG9cbiAgLy8gY2hhbmdlIHRoZSBzdGF0ZVxuICBjb25zdCBbc2xpZGVyLCBzZXRTbGlkZXJdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gVGhlc2UgYXJlIHRoZSBicmVha3BvaW50cyB3aGljaCBjaGFuZ2VzIHRoZSBwb3NpdGlvbiBvZiB0aGVcbiAgLy8gYnV0dG9ucyBhcyB0aGUgc2NyZWVuIHNpemUgY2hhbmdlc1xuICBjb25zdCB0b3AgPSB1c2VCcmVha3BvaW50VmFsdWUoeyBiYXNlOiAnNTAlJywgbWQ6ICc1MCUnIH0pO1xuICBjb25zdCBzaWRlID0gdXNlQnJlYWtwb2ludFZhbHVlKHsgYmFzZTogJzAlJywgbWQ6ICc0MHB4JyB9KTtcblxuICAvLyBUaGlzIGxpc3QgY29udGFpbnMgYWxsIHRoZSBkYXRhIGZvciBjYXJvdXNlbHNcbiAgLy8gVGhpcyBjYW4gYmUgc3RhdGljIG9yIGxvYWRlZCBmcm9tIGEgc2VydmVyXG4gIGNvbnN0IGNhcmRzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnQm9keSBNb2RpZmljYXRpb24nLFxuICAgICAgdGV4dDpcbiAgICAgICAgXCJcIlxuICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1NjYXJpZmljYXRpb24nLFxuICAgICAgdGV4dDpcbiAgICAgICAgXCJcIlxuICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1BpZXJjaW5nJyxcbiAgICAgIHRleHQ6XG4gICAgICAgIFwiXCJcbiAgICAgIFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBiZz17J2dyYXkuMjAwJ31cbiAgICAgIHA9ezR9XG4gICAgICBwb3NpdGlvbj17J3JlbGF0aXZlJ31cbiAgICAgIGhlaWdodD17WyczMDBweCcsJzQwMHB4JyAsICdmdWxsJ119XG4gICAgICB3aWR0aD17J2Z1bGwnfVxuICAgICAgb3ZlcmZsb3c9eydoaWRkZW4nfVxuICAgICAgPlxuICAgICAgey8qIENTUyBmaWxlcyBmb3IgcmVhY3Qtc2xpY2sgKi99XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgY2hhclNldD1cIlVURi04XCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiXG4gICAgICAvPlxuICAgICAgey8qIExlZnQgSWNvbiAqL31cbiAgICAgIDxkaXY+XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImxlZnQtYXJyb3dcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgbGVmdD17c2lkZX1cbiAgICAgICAgICB0b3A9e3RvcH1cbiAgICAgICAgICB0cmFuc2Zvcm09eyd0cmFuc2xhdGUoMCUsIC01MCUpJ31cbiAgICAgICAgICB6SW5kZXg9ezJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVyPy5zbGlja1ByZXYoKX0+XG4gICAgICAgICAgPEJpTGVmdEFycm93QWx0IHNpemU9XCI0MHB4XCIgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICB7LyogUmlnaHQgSWNvbiAqL31cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwicmlnaHQtYXJyb3dcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgcmlnaHQ9e3NpZGV9XG4gICAgICAgICAgdG9wPXt0b3B9XG4gICAgICAgICAgdHJhbnNmb3JtPXsndHJhbnNsYXRlKDAlLCAtNTAlKSd9XG4gICAgICAgICAgekluZGV4PXsyfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlcj8uc2xpY2tOZXh0KCl9PlxuICAgICAgICAgIDxCaVJpZ2h0QXJyb3dBbHQgc2l6ZT1cIjQwcHhcIiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBTbGlkZXIgKi99XG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gcmVmPXsoc2xpZGVyKSA9PiBzZXRTbGlkZXIoc2xpZGVyKX0+XG4gICAgICAgIHtjYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGhlaWdodD17JzEwMCUnfVxuICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb249XCJjZW50ZXJcIlxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdD1cIm5vLXJlcGVhdFwiXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZT1cImNvdmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9JbWFnZXMvc2NhcmlmaWNhdGlvbi1tZy1jb2xvci5qcGcnIGFsdD1cIm1hcmlvLWdvbnotc2Nhci1pbWFnZS1jb2xvclwiIHBvc2l0aW9uPSdhYnNvbHV0ZScgekluZGV4PSctMScgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIFRoaXMgaXMgdGhlIGJsb2NrIHlvdSBuZWVkIHRvIGNoYW5nZSwgdG8gY3VzdG9taXplIHRoZSBjYXB0aW9uICovfVxuICAgICAgICAgICAgPENvbnRhaW5lciBzaXplPVwiY29udGFpbmVyLjJ4bFwiIGhlaWdodD1cIjYwMHB4XCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIHRleHRBbGlnbj17WydsZWZ0JywgJ2NlbnRlciddfT5cbiAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICAgICAgICB3PXtbJ2Z1bGwnXX1cbiAgICAgICAgICAgICAgICBtYXhXPXsneGwnfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICAgIHRvcD0nNDAlJ1xuICAgICAgICAgICAgICAgIGxlZnQ9Jy04MCUnXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAsIC0xNTAlKVwiPlxuXG4gICAgICAgICAgICAgICAgICB7LyogSWYgYm94IGJhY2tncm91bmQgaXMgYWN0aXZlIGNoYW5nZSBTdGFjayA+IHRvcD01MCUgKi99XG5cbiAgICAgICAgICAgICAgICB7Lyo8Qm94IHc9e1snOTAlJywgJzkwJScsICdmdWxsJ119IGJnPXsnZ3JheS4xMDAnfSBvcGFjaXR5PXsnODUlJ30gcD17NX0gcG9zaXRpb249eydhYnNvbHV0ZSd9IHotaW5kZXg9ey0xfSBib3JkZXJSYWRpdXM9eycyMHB4J30gYm94U2hhZG93PSctMXB4IDNweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpJz4qL31cbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGNvbG9yPXsnd2hpdGUnfSBmb250U2l6ZT17eyBiYXNlOiAnM3hsJywgbWQ6ICc0eGwnLCBsZzogJzd4bCcgfX0gZm9udFdlaWdodD17NzAwfSBwPXsyfSBib3JkZXJSYWRpdXM9eyc1cHgnfT5cbiAgICAgICAgICAgICAgICAgICAge2NhcmQudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj17J3RlYWwuNDAwJ30gZm9udFNpemU9e3sgYmFzZTogJ3NtJywgbGc6ICdtZCcgfX0gZm9udFdlaWdodD17NjAwfSBwPXtbNCwgMCwgMF19PlxuICAgICAgICAgICAgICAgICAgICB7Y2FyZC50ZXh0fVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgey8qIDwvQm94PiovfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgPC9TbGlkZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb3giLCJJY29uQnV0dG9uIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiU3RhY2siLCJIZWFkaW5nIiwiVGV4dCIsIkNvbnRhaW5lciIsIkltYWdlIiwiQmlMZWZ0QXJyb3dBbHQiLCJCaVJpZ2h0QXJyb3dBbHQiLCJTbGlkZXIiLCJzZXR0aW5ncyIsImRvdHMiLCJhcnJvd3MiLCJmYWRlIiwiaW5maW5pdGUiLCJhdXRvcGxheSIsInNwZWVkIiwiYXV0b3BsYXlTcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiU2NhcnMiLCJzbGlkZXIiLCJzZXRTbGlkZXIiLCJ0b3AiLCJiYXNlIiwibWQiLCJzaWRlIiwiY2FyZHMiLCJ0aXRsZSIsInRleHQiLCJiZyIsInAiLCJwb3NpdGlvbiIsImhlaWdodCIsIndpZHRoIiwib3ZlcmZsb3ciLCJsaW5rIiwicmVsIiwidHlwZSIsImNoYXJTZXQiLCJocmVmIiwiZGl2IiwiYXJpYS1sYWJlbCIsInZhcmlhbnQiLCJsZWZ0IiwidHJhbnNmb3JtIiwiekluZGV4Iiwib25DbGljayIsInNsaWNrUHJldiIsInNpemUiLCJyaWdodCIsInNsaWNrTmV4dCIsInJlZiIsIm1hcCIsImNhcmQiLCJpbmRleCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsInNyYyIsImFsdCIsInRleHRBbGlnbiIsInNwYWNpbmciLCJ3IiwibWF4VyIsImNvbG9yIiwiZm9udFNpemUiLCJsZyIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/scars.js\n"));

/***/ })

});
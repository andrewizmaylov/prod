(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/course.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/course.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pr_course_statment_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pr_course_statment.vue */ "./resources/js/components/pr_course_statment.vue");
/* harmony import */ var _pr_course_intro_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pr_course_intro.vue */ "./resources/js/components/pr_course_intro.vue");
/* harmony import */ var _pr_course_content_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pr_course_content.vue */ "./resources/js/components/pr_course_content.vue");
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
  name: 'course',
  components: {
    pr_course_statment: _pr_course_statment_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    pr_course_intro: _pr_course_intro_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    pr_course_content: _pr_course_content_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      course: {
        intro: {
          title: 'Full Product Course',
          subtitle: 'How to become a Product Manager',
          description: "You'll learn how to build digital products from end to end, lead cross-functional teams and land your next product job or promotion. Get certified and propel your product management career forward with our full online course. This course is created by product managers from Booking, Google, PayPal, and more. <p>We will help you to get a Job as a Product Manager.</p>",
          url: 'https://www.dl.dropboxusercontent.com/s/5f828j7cioyms42/ps1.mp4?dl=0',
          lessons: [{
            'duration': '2 min',
            'topic': 'Introduction',
            'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw'
          }, {
            'duration': '12 min',
            'topic': 'User Profile',
            'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw'
          }],
          students: 241,
          totaltime: 186
        },
        statments: [{
          img: 'Frame1.svg',
          title: 'Live Online',
          agenda: ['Learn, interact and participate from home!']
        }, {
          img: 'Frame2.svg',
          title: 'Flexible schedule',
          agenda: ['Choose the timing and pace that fits.']
        }, {
          img: 'Frame3.svg',
          title: 'Top Instructors',
          agenda: ['Get trained by Product Experts from world leading companies.']
        }, {
          img: 'Frame4.svg',
          title: 'Get Certified',
          agenda: ['Get certified and propel your product management career forward.']
        }],
        content: [{
          title: 'Basic Product Manager Skills',
          lessons: ['Who is a Product Manager? Product Manager skills and traits', 'Immersion into an existing product', 'Product Team processes and working with the Engineering Team', 'Mockups and User-research', 'Prioritization', 'Strategy and global view of the product', 'Applied analytics', 'A/B testing', 'Growth Hacking', 'Mock interview', 'Unit Economics'],
          comment: '',
          status: 'false'
        }, {
          title: 'Skills for Mid-level Product Manager',
          lessons: ['Product Manager Soft Skills', 'Product Manager Documents', 'Differences in working with B2B- and B2C-products', 'How to quickly form hypotheses and determine the MVP', 'Offline Business Digitalization', 'Making the case for your project', 'Subcontractors', 'Growth hacking', 'Reboots / Overhauls', 'Job Interview', 'Conclusion / Final'],
          comment: '',
          status: 'false'
        }, {
          title: 'Mobile Products',
          lessons: ['Designing a mobile application', 'How to onboard new users', 'Setting up mobile analytics and conducting A/B testing', 'Prototyping a mobile application', 'Under the hood of mobile applications', 'How to promote a mobile app to an existing audience', 'Appstore and Google Play Store Secrets. What you need to know about these platforms', 'Mobile App Promotion / Marketing + Conclusion / Final'],
          comment: '',
          status: 'false'
        }, {
          title: 'Product Manager Level-up',
          lessons: ['Product Managers\' Common Mistakes', 'Product Vision', 'OKR and Planning', 'Working with a Remote Team', 'International Products', 'Monetization', 'Working with budgets', 'Hiring a team', 'Competitor Analysis', 'Market Size and Share Evaluation', 'AI Product Management'],
          comment: '',
          status: 'false'
        }, {
          title: 'Thesis (Graduation project) and Employment Assistance',
          lessons: ['Resume preparation', 'Preparing for a job interview', 'Final review and advice'],
          comment: '',
          status: 'false'
        }]
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/courses.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/courses.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pr_module_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pr_module.vue */ "./resources/js/components/pr_module.vue");
/* harmony import */ var _course_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course.vue */ "./resources/js/components/course.vue");
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
  name: 'courses',
  components: {
    pr_module: _pr_module_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    course: _course_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    selectCourse: function selectCourse(i) {
      this.courses.filter(function (item) {
        if (item.slug == i.slug) {
          item.loaded = true;
        } else {
          item.loaded = false;
        }
      });
      $('html, body').animate({
        scrollTop: 0
      }, 'fast');
      this.accent = true;
    }
  },
  computed: {
    selected: function selected() {
      return this.courses.filter(function (item) {
        return item.loaded == true;
      });
    }
  },
  data: function data() {
    return {
      courses: [{
        loaded: false,
        slug: '1',
        img: '/img/module1.svg',
        name: 'Basic Product Manager Skills',
        description: 'Our course help you to start your successful career as a PM.'
      }, {
        loaded: false,
        slug: '2',
        img: '/img/module2.svg',
        name: 'Skills for Mid-level Product Manager',
        description: 'This course teach you the essential skills you need to ace your PM interview...'
      }, {
        loaded: false,
        slug: '3',
        img: '/img/module3.svg',
        name: 'Mobile Product Managment',
        description: 'Upgrade your Mobile PM skills today and stay ahead of the curve!'
      }, {
        loaded: false,
        slug: '4',
        img: '/img/module4.svg',
        name: 'Product Manager Level-up',
        description: 'This cours eis the best way to bring your PM skills to new heights!'
      }, {
        loaded: false,
        slug: '5',
        img: '/img/module5.svg',
        name: 'Super power Skill, which not exists: ZeroCoding',
        description: 'This course can help you to get your idea implemented immediately without developers and code!'
      }, {
        loaded: false,
        slug: '6',
        img: '/img/module6.svg',
        name: 'A/B Testing skills',
        description: 'This course will help you to bring your PM career to new heights.'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_content.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pr_course_content.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pr_course_content',
  props: ['content']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_intro.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pr_course_intro.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pr_course_intro',
  props: ['course']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_statment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pr_course_statment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pr_course_statment',
  props: ['statments']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_module.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pr_module.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pr_module',
  props: ['module', 'action'],
  methods: {
    select: function select() {
      this.$emit('select', 'this.module');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/course.vue?vue&type=template&id=cfb5a6b4&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/course.vue?vue&type=template&id=cfb5a6b4& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    { staticClass: "text-gray-700 " },
    [
      _c("pr_course_intro", { attrs: { course: _vm.course.intro } }),
      _vm._v(" "),
      _c("pr_course_statment", {
        staticClass: "px-8 sm:px-1",
        attrs: { statments: _vm.course.statments }
      }),
      _vm._v(" "),
      _c("pr_course_content", { attrs: { content: _vm.course.content } }),
      _vm._v(" "),
      _c(
        "h2",
        { staticClass: "text-2xl text-gray-800 mt-4 mb-8 text-center" },
        [_vm._v("Related courses:")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/courses.vue?vue&type=template&id=702c093d&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/courses.vue?vue&type=template&id=702c093d& ***!
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
  return _c(
    "section",
    { staticClass: "text-gray-700 " },
    [
      _c("course"),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "flex flex-wrap -m-4" },
        _vm._l(_vm.selected, function(i) {
          return _c("pr_module", {
            key: i.index,
            staticClass: "p-4 lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto",
            attrs: { module: i, action: "Learn more " }
          })
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "max-w-5xl lg:w-4/5 md:w-5/6 w-4/5 mx-auto mt-12" },
        [
          _c(
            "section",
            { staticClass: "flex flex-wrap -m-4" },
            _vm._l(_vm.courses, function(i) {
              return _c("pr_module", {
                key: i.index,
                staticClass: "p-4 lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto",
                attrs: { module: i, action: "Learn more " },
                on: {
                  select: function($event) {
                    return _vm.selectCourse(i)
                  }
                }
              })
            }),
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_content.vue?vue&type=template&id=414c3f12&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pr_course_content.vue?vue&type=template&id=414c3f12& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "bg-gray-100 w-full" }, [
    _c(
      "section",
      { staticClass: "container px-5 py-12 mx-auto lg:w-4/5 lg:flex block" },
      [
        _c(
          "div",
          { staticClass: "flex flex-col lg:w-1/2 md:w-4/5 w-full mx-auto" },
          [
            _c("span", { staticClass: "text-lg text-gray-800 my-4 pl-6" }, [
              _vm._v("Course content:")
            ]),
            _vm._v(" "),
            _vm._l(_vm.content, function(item) {
              return _c("div", [
                _c(
                  "div",
                  {
                    staticClass:
                      "mb-6 bg-white p-4 rounded border border-indigo-200",
                    staticStyle: {
                      "box-shadow": "rgb(67 110 167 / 9%) 4px 7px 13px 1px"
                    },
                    on: {
                      click: function($event) {
                        item.status = !item.status
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "flex items-center ",
                        class: item.status ? "" : "mb-3"
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass:
                              "fill-current text-gray-400 h-3 w-3 mx-3",
                            attrs: {
                              viewBox: "0 0 16 16",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }
                          },
                          [
                            _c("path", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: item.status,
                                  expression: "item.status"
                                }
                              ],
                              attrs: {
                                d:
                                  "M14.545 6.495H9.508V1.458c0-1.943-3.013-1.943-3.013 0v5.037H1.458c-1.942 0-1.942 3.013 0 3.013h5.037v5.037c0 1.943 3.013 1.943 3.013 0V9.508h5.037c1.942 0 1.942-3.013 0-3.013z"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !item.status,
                                  expression: "!item.status"
                                }
                              ],
                              attrs: {
                                d:
                                  "M13.694 11.563L10.13 8.001l3.563-3.562c1.373-1.373-.757-3.504-2.13-2.13L8 5.871 4.44 2.309C3.066.936.936 3.066 2.31 4.439l3.562 3.562-3.562 3.562c-1.373 1.374.757 3.504 2.13 2.13l3.562-3.562 3.562 3.562c1.374 1.374 3.504-.756 2.13-2.13z"
                              }
                            }),
                            _c("defs", [
                              _c("clipPath", { attrs: { id: "clip0" } }, [
                                _c("path", {
                                  attrs: { fill: "#fff", d: "M0 0h16v16H0z" }
                                })
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "h2",
                          { staticClass: "text-lg text-gray-800 ml-2" },
                          [_vm._v(_vm._s(item.title))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._l(item.lessons, function(i) {
                      return _c(
                        "ul",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !item.status,
                              expression: "!item.status"
                            }
                          ],
                          staticClass:
                            "mt-1 pl-16 text-xs text-gray-600 list-disc "
                        },
                        [_c("li", [_vm._v(_vm._s(i))])]
                      )
                    })
                  ],
                  2
                )
              ])
            })
          ],
          2
        ),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "flex flex-col lg:w-1/2 md:w-4/5 w-full mx-auto p-8 text-sm items-center"
      },
      [
        _c("h2", { staticClass: "text-lg text-gray-800 lg:mt-16 lg:-mb-4" }, [
          _vm._v("Related template from Product Star")
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "w-3/4 h-auto",
          attrs: { src: "/img/course_template.png", alt: "course_template" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "bg-white rounded p-4 shadow" }, [
          _c("h2", [_vm._v("ManageMe - User Managment")]),
          _vm._v(" "),
          _c("p", { staticClass: "my-4 text-xs" }, [
            _vm._v(
              "\n\t\t\t\t\tWith ManageMe responsive template you can easily build user managment no-code apps with admin dashboard to manage users, their roles and permise...\n\t\t\t\t"
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "border border-2 border-indigo-500 text-indigo-500 py-1 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded"
            },
            [_vm._v("35$")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_intro.vue?vue&type=template&id=f06fbb2c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pr_course_intro.vue?vue&type=template&id=f06fbb2c& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "px-8 py-8 my-6 bg-gray-100" }, [
    _c(
      "div",
      { staticClass: "container mx-auto lg:w-4/5 mx-auto flex flex-wrap" },
      [
        _c(
          "section",
          {
            staticClass:
              "lg:w-3/5 w-full lg:pr-4 lg:py-6 md:px-8 sm:px-1 mb-6 lg:mb-0"
          },
          [
            _c(
              "h6",
              {
                staticClass: "text-sm title-font text-gray-500 tracking-normal"
              },
              [
                _c("router-link", { attrs: { to: { name: "courses" } } }, [
                  _vm._v("Courses")
                ]),
                _vm._v(" > " + _vm._s(_vm.course.title) + "\n\t        ")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "h1",
              { staticClass: "main-color text-3xl title-font font-medium" },
              [_vm._v(_vm._s(_vm.course.title))]
            ),
            _vm._v(" "),
            _c("h1", { staticClass: "text-2xl title-font font-medium mb-4" }, [
              _vm._v(_vm._s(_vm.course.subtitle))
            ]),
            _vm._v(" "),
            _c("p", {
              staticClass: "leading-relaxed mb-8 lg:pr-8 md:pr-0",
              domProps: { innerHTML: _vm._s(_vm.course.description) }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center mt-2" }, [
              _c(
                "svg",
                {
                  staticClass: "h-4 w-4 fill-current main-color",
                  attrs: {
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M30.3 7.35L24 10.9V6a2 2 0 00-2-2H4a4 4 0 00-4 4v16a4 4 0 004 4h18a2 2 0 002-2v-4.92l6.3 3.55a1.1 1.1 0 001.7-.86V8.2a1.1 1.1 0 00-1.7-.85z"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-xs text-gray700" }, [
                _vm._v("50 lessons")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center mt-2" }, [
              _c(
                "svg",
                {
                  staticClass: "h-4 w-4 fill-current main-color",
                  attrs: {
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M11.91 0v2.56h8.18V0h-8.18zM16 3.84c-8.268 0-15 6.32-15 14.08S7.734 32 16 32c8.268 0 15-6.32 15-14.08 0-3.735-1.55-7.155-4.09-9.68l2.343-2.2-1.962-1.842-2.468 2.322C22.259 4.772 19.169 3.833 16 3.84zm0 2.56c6.79 0 12.273 5.146 12.273 11.52S22.79 29.44 16 29.44c-6.79 0-12.273-5.146-12.273-11.52S9.21 6.4 16 6.4zm-1.364 2.56v6.76c-.815.445-1.363 1.254-1.363 2.2 0 .945.548 1.755 1.363 2.2v1.64h2.728v-1.64c.815-.445 1.363-1.254 1.363-2.2 0-.945-.548-1.755-1.363-2.2V8.96h-2.728z"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-xs text-gray-700" }, [
                _vm._v(_vm._s(_vm.course.totaltime) + " minutes")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center mt-2" }, [
              _c(
                "svg",
                {
                  staticClass: "h-4 w-4 fill-current main-color",
                  attrs: {
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M32 30.667c0 .36-.099.673-.297.937-.198.264-.432.396-.703.396-.27 0-.505-.132-.703-.396a1.519 1.519 0 01-.297-.937V13.125L18.969 20.5c-.834.556-1.823.833-2.969.833s-2.135-.277-2.969-.833L1.22 12.625C.406 12.069 0 11.41 0 10.645c0-.763.406-1.409 1.219-1.937L13.03.833C13.865.278 14.854 0 16 0s2.135.278 2.969.833L30.78 8.708c.709.473 1.104 1.056 1.188 1.75.02.028.031.084.031.167v20.042zm-12.031-9.5L26 17.125V25c0 1.194-.974 2.215-2.922 3.063-1.948.847-4.307 1.27-7.078 1.27-2.77 0-5.13-.423-7.078-1.27C6.974 27.215 6 26.194 6 25v-7.875l6.031 4.042c.834.555 2.156.833 3.969.833 1.813 0 3.135-.278 3.969-.833z"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-xs text-gray-700" }, [
                _vm._v("2000 students enrolled this course all over the world")
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "section",
          {
            staticClass:
              "lg:w-2/5 w-full mx-auto h-auto lg:py-12 md:py-2 py-1 mb-6 lg:mb-0"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "flex mt-8 justify-center" }, [
              _c(
                "button",
                {
                  staticClass:
                    "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",
                  on: {
                    click: function($event) {
                      return _vm.$router.push({ name: "enroll" })
                    }
                  }
                },
                [_vm._v("Enroll Now")]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "relative pb-9/16 " }, [
      _c("iframe", {
        staticClass: "absolute w-full h-full md:px-8 sm:px-1 lg:p-0",
        attrs: {
          src: "https://player.vimeo.com/video/463168822",
          frameborder: "0",
          allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_statment.vue?vue&type=template&id=64273a24&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pr_course_statment.vue?vue&type=template&id=64273a24& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("section", { staticClass: " my-4" }, [
      _c(
        "div",
        { staticClass: "flex flex-wrap px-8" },
        _vm._l(_vm.statments, function(item) {
          return _c(
            "div",
            {
              staticClass:
                "flex flex-col lg:w-1/4 md:w-1/2 sm:w-2/3 mx-auto my-6 p-2"
            },
            [
              _c("img", {
                staticClass: "w-48 h-48 mx-auto",
                attrs: { src: "/img/" + item.img, alt: "" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "text-center my-4 font-medium" }, [
                _vm._v(_vm._s(item.title))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mx-2" }, [
                _c(
                  "ul",
                  { staticClass: "mb-1 px-4" },
                  _vm._l(item.agenda, function(i) {
                    return _c(
                      "li",
                      {
                        staticClass:
                          "list-none text-center text-sm text-gray-700"
                      },
                      [_vm._v(_vm._s(i))]
                    )
                  }),
                  0
                )
              ])
            ]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_module.vue?vue&type=template&id=5cea45e4&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pr_module.vue?vue&type=template&id=5cea45e4& ***!
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
  return _c("div", {}, [
    _c(
      "div",
      {
        staticClass:
          "relative h-full rounded-lg overflow-hidden border border-indigo-200",
        staticStyle: { "box-shadow": "rgb(67 110 167 / 9%) 4px 7px 13px 1px" },
        on: {
          click: function($event) {
            return _vm.select()
          }
        }
      },
      [
        _c("img", {
          staticClass: "lg:h-48 md:h-36 w-full object-cover object-center",
          attrs: { src: _vm.module.img, alt: "blog" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "flex flex-col justify-around px-6" }, [
          _c("div", { staticClass: "py-8 mb-8" }, [
            _c(
              "h1",
              { staticClass: "text-lg font-medium text-gray-900 mb-3" },
              [_vm._v(_vm._s(_vm.module.title))]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "font-medium text-gray-900 mb-3" }, [
              _vm._v(_vm._s(_vm.module.subtitle))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "leading-relaxed mb-3" }, [
              _vm._v(_vm._s(_vm.module.description))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "absolute bottom-0 mt-4 mb-6" }, [
            _c(
              "span",
              {
                staticClass:
                  "text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 main-color"
              },
              [
                _vm._v(_vm._s(_vm.action) + "\n\t\t            "),
                _c(
                  "svg",
                  {
                    staticClass: "w-4 h-4 ml-2",
                    attrs: {
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  },
                  [
                    _c("path", { attrs: { d: "M5 12h14" } }),
                    _vm._v(" "),
                    _c("path", { attrs: { d: "M12 5l7 7-7 7" } })
                  ]
                )
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/course.vue":
/*!********************************************!*\
  !*** ./resources/js/components/course.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _course_vue_vue_type_template_id_cfb5a6b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course.vue?vue&type=template&id=cfb5a6b4& */ "./resources/js/components/course.vue?vue&type=template&id=cfb5a6b4&");
/* harmony import */ var _course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course.vue?vue&type=script&lang=js& */ "./resources/js/components/course.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _course_vue_vue_type_template_id_cfb5a6b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _course_vue_vue_type_template_id_cfb5a6b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/course.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/course.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/course.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./course.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/course.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/course.vue?vue&type=template&id=cfb5a6b4&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/course.vue?vue&type=template&id=cfb5a6b4& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_course_vue_vue_type_template_id_cfb5a6b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./course.vue?vue&type=template&id=cfb5a6b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/course.vue?vue&type=template&id=cfb5a6b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_course_vue_vue_type_template_id_cfb5a6b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_course_vue_vue_type_template_id_cfb5a6b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/courses.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/courses.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _courses_vue_vue_type_template_id_702c093d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses.vue?vue&type=template&id=702c093d& */ "./resources/js/components/courses.vue?vue&type=template&id=702c093d&");
/* harmony import */ var _courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.vue?vue&type=script&lang=js& */ "./resources/js/components/courses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _courses_vue_vue_type_template_id_702c093d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _courses_vue_vue_type_template_id_702c093d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/courses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/courses.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/courses.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./courses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/courses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/courses.vue?vue&type=template&id=702c093d&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/courses.vue?vue&type=template&id=702c093d& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courses_vue_vue_type_template_id_702c093d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./courses.vue?vue&type=template&id=702c093d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/courses.vue?vue&type=template&id=702c093d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courses_vue_vue_type_template_id_702c093d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_courses_vue_vue_type_template_id_702c093d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pr_course_content.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pr_course_content.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pr_course_content_vue_vue_type_template_id_414c3f12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pr_course_content.vue?vue&type=template&id=414c3f12& */ "./resources/js/components/pr_course_content.vue?vue&type=template&id=414c3f12&");
/* harmony import */ var _pr_course_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pr_course_content.vue?vue&type=script&lang=js& */ "./resources/js/components/pr_course_content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pr_course_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pr_course_content_vue_vue_type_template_id_414c3f12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pr_course_content_vue_vue_type_template_id_414c3f12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pr_course_content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pr_course_content.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pr_course_content.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pr_course_content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pr_course_content.vue?vue&type=template&id=414c3f12&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pr_course_content.vue?vue&type=template&id=414c3f12& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_content_vue_vue_type_template_id_414c3f12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./pr_course_content.vue?vue&type=template&id=414c3f12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_content.vue?vue&type=template&id=414c3f12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_content_vue_vue_type_template_id_414c3f12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_content_vue_vue_type_template_id_414c3f12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pr_course_intro.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/pr_course_intro.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pr_course_intro_vue_vue_type_template_id_f06fbb2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pr_course_intro.vue?vue&type=template&id=f06fbb2c& */ "./resources/js/components/pr_course_intro.vue?vue&type=template&id=f06fbb2c&");
/* harmony import */ var _pr_course_intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pr_course_intro.vue?vue&type=script&lang=js& */ "./resources/js/components/pr_course_intro.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pr_course_intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pr_course_intro_vue_vue_type_template_id_f06fbb2c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pr_course_intro_vue_vue_type_template_id_f06fbb2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pr_course_intro.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pr_course_intro.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pr_course_intro.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pr_course_intro.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_intro.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_intro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pr_course_intro.vue?vue&type=template&id=f06fbb2c&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pr_course_intro.vue?vue&type=template&id=f06fbb2c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_intro_vue_vue_type_template_id_f06fbb2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./pr_course_intro.vue?vue&type=template&id=f06fbb2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_intro.vue?vue&type=template&id=f06fbb2c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_intro_vue_vue_type_template_id_f06fbb2c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_intro_vue_vue_type_template_id_f06fbb2c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pr_course_statment.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/pr_course_statment.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pr_course_statment_vue_vue_type_template_id_64273a24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pr_course_statment.vue?vue&type=template&id=64273a24& */ "./resources/js/components/pr_course_statment.vue?vue&type=template&id=64273a24&");
/* harmony import */ var _pr_course_statment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pr_course_statment.vue?vue&type=script&lang=js& */ "./resources/js/components/pr_course_statment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pr_course_statment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pr_course_statment_vue_vue_type_template_id_64273a24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pr_course_statment_vue_vue_type_template_id_64273a24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pr_course_statment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pr_course_statment.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pr_course_statment.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_statment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pr_course_statment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_statment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_statment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pr_course_statment.vue?vue&type=template&id=64273a24&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pr_course_statment.vue?vue&type=template&id=64273a24& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_statment_vue_vue_type_template_id_64273a24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./pr_course_statment.vue?vue&type=template&id=64273a24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_statment.vue?vue&type=template&id=64273a24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_statment_vue_vue_type_template_id_64273a24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_statment_vue_vue_type_template_id_64273a24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pr_module.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/pr_module.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pr_module_vue_vue_type_template_id_5cea45e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pr_module.vue?vue&type=template&id=5cea45e4& */ "./resources/js/components/pr_module.vue?vue&type=template&id=5cea45e4&");
/* harmony import */ var _pr_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pr_module.vue?vue&type=script&lang=js& */ "./resources/js/components/pr_module.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pr_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pr_module_vue_vue_type_template_id_5cea45e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pr_module_vue_vue_type_template_id_5cea45e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pr_module.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pr_module.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/pr_module.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pr_module.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_module.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pr_module.vue?vue&type=template&id=5cea45e4&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pr_module.vue?vue&type=template&id=5cea45e4& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_module_vue_vue_type_template_id_5cea45e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./pr_module.vue?vue&type=template&id=5cea45e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_module.vue?vue&type=template&id=5cea45e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_module_vue_vue_type_template_id_5cea45e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_module_vue_vue_type_template_id_5cea45e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
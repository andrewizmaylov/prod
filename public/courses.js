(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/course.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/course.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pr_course_statments_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pr_course_statments.vue */ "./resources/js/components/pr_course_statments.vue");
/* harmony import */ var _pr_course_intro_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pr_course_intro.vue */ "./resources/js/components/pr_course_intro.vue");
/* harmony import */ var _pr_course_content_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pr_course_content.vue */ "./resources/js/components/pr_course_content.vue");
/* harmony import */ var _basic_logic_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic_logic.vue */ "./resources/js/components/basic_logic.vue");
//
//
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
  "extends": _basic_logic_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  components: {
    pr_course_statments: _pr_course_statments_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
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
          definition: 'Live Online',
          description: ['Learn, interact and participate from home!']
        }, {
          img: 'Frame2.svg',
          definition: 'Flexible schedule',
          description: ['Choose the timing and pace that fits.']
        }, {
          img: 'Frame3.svg',
          definition: 'Top Instructors',
          description: ['Get trained by Product Experts from world leading companies.']
        }, {
          img: 'Frame4.svg',
          definition: 'Get Certified',
          description: ['Get certified and propel your product management career forward.']
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_statments.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pr_course_statments.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pr_course_statment_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pr_course_statment.vue */ "./resources/js/components/pr_course_statment.vue");
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
  name: 'pr_course_statments',
  components: {
    pr_course_statment: _pr_course_statment_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['statments']
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
      _c("pr_course_statments", {
        staticClass: "px-8 sm:px-1",
        attrs: { statments: _vm.course.statments }
      }),
      _vm._v(" "),
      _c("pr_course_content", { attrs: { content: this.chapters } }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_statments.vue?vue&type=template&id=246bab7f&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pr_course_statments.vue?vue&type=template&id=246bab7f& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          return _c("pr_course_statment", {
            key: item.id,
            attrs: { data: item }
          })
        }),
        1
      )
    ])
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

/***/ "./resources/js/components/pr_course_statments.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pr_course_statments.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pr_course_statments_vue_vue_type_template_id_246bab7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pr_course_statments.vue?vue&type=template&id=246bab7f& */ "./resources/js/components/pr_course_statments.vue?vue&type=template&id=246bab7f&");
/* harmony import */ var _pr_course_statments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pr_course_statments.vue?vue&type=script&lang=js& */ "./resources/js/components/pr_course_statments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pr_course_statments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pr_course_statments_vue_vue_type_template_id_246bab7f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pr_course_statments_vue_vue_type_template_id_246bab7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pr_course_statments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pr_course_statments.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pr_course_statments.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_statments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pr_course_statments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_statments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_statments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pr_course_statments.vue?vue&type=template&id=246bab7f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pr_course_statments.vue?vue&type=template&id=246bab7f& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_statments_vue_vue_type_template_id_246bab7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./pr_course_statments.vue?vue&type=template&id=246bab7f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pr_course_statments.vue?vue&type=template&id=246bab7f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_statments_vue_vue_type_template_id_246bab7f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pr_course_statments_vue_vue_type_template_id_246bab7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
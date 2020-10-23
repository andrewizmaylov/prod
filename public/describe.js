(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["describe"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/describe.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/describe.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pr_module_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pr_module.vue */ "./resources/js/components/pr_module.vue");
/* harmony import */ var _pr_course_intro_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pr_course_intro.vue */ "./resources/js/components/pr_course_intro.vue");
/* harmony import */ var _pr_course_statment_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pr_course_statment.vue */ "./resources/js/components/pr_course_statment.vue");
/* harmony import */ var _pr_course_content_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pr_course_content.vue */ "./resources/js/components/pr_course_content.vue");
/* harmony import */ var _basic_logic_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic_logic.vue */ "./resources/js/components/basic_logic.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'describe',
  "extends": _basic_logic_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
  components: {
    pr_module: _pr_module_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    pr_course_intro: _pr_course_intro_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    pr_course_statment: _pr_course_statment_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    pr_course_content: _pr_course_content_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      model_name: '',
      //model name for define the axios route (course, statment etc)
      method: '',
      path: '',
      // path for axios call
      btn: '',
      edit_mode: false,
      editable: false,
      show_form: false,
      backup: []
    };
  },
  methods: {
    newCourse: function newCourse() {
      this.backup = this.courses;
      this.clearCourse();
      this.edit_mode = true;
      this.editable = true;
      this.model_name = 'course';
      this.btn = 'Create New ';
      this.path = '/admin/create_course';
    },
    clearCourse: function clearCourse() {
      this.course = {};
      this.editable = false;
      this.courses = this.backup;
      this.clearForm();
    },
    clearForm: function clearForm() {
      this.statments = [];
      this.chapters = [];
      this.lessons = [];
      this.duration = '';
      this.lessonsCount = '';
      this.edit_mode = false;
      this.editable = false;
      this.path = '';
      this.model = '';
      this.btn = '';
    },
    clearModel: function clearModel(model) {
      this[model] = {};
      this.setPath(model);
    },
    newLesson: function newLesson(data) {
      this.chapter = data[0];
      this.lesson = {};
      this.model_name = 'lesson';
      this.edit_mode = true;
      this.editable = true;
      this.path = '/admin/create_lesson';
    },
    editLesson: function editLesson(data) {
      this.lesson = data;
      this.model_name = 'lesson';
      this.edit_mode = true;
      this.editable = true;
      this.path = '/admin/update_lesson';
    },
    editChapter: function editChapter(data) {
      this.chapter = data;
      this.model_name = 'chapter';
      this.edit_mode = true;
      this.editable = true;
      this.path = '/admin/update_chapter';
    },
    // activate correspondent filled form to edit already existing row
    initialize: function initialize(model, model_name) {
      this.editable = true;
      this.filter(model, model_name); // this.edit_mode = true;

      this[model_name] = model;
      this.setPath(model_name);
    },
    // activate corresponding form to add completely new entry to database
    addEntry: function addEntry(entry) {
      this.model_name = entry;
      this[entry] = {};
      this.filter(this[entry], this.model_name);
    },
    // filter array make only editable show
    filter: function filter(model, model_name) {
      var name = model_name + 's';
      this.backup = this[name];
      return this[name] = this[name].filter(function (i) {
        return i.id == model.id;
      });
    },
    // rebuild array after chanceling filter
    rebuild: function rebuild() {
      this[this.model_name] = {};
      this.model_name = '';
      this.editable = false;
      this.btn = 'Create New ';
      this.updateModels();
    },
    chapterSelected: function chapterSelected(data) {
      this.chapter = data;
    },
    setPath: function setPath(model_name) {
      this.model_name = model_name;

      if (this[model_name].id) {
        this.path = '/admin/update_' + this.model_name + '/' + this[model_name].id;
        this.btn = 'Update ';
      } else {
        this.path = '/admin/create_' + model_name;
        this.btn = 'Create New ';
      }
    },
    createCourse: function createCourse() {
      var _this = this;

      axios.post(this.path, this.course).then(function (response) {
        console.log(response.data);

        if (!_this.course.id) {
          _this.course.id = response.data.last_insert_id;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    createStatment: function createStatment() {
      this.statment.course_id = this.course.id;
      this.addRecord(this.statment);
    },
    createChapter: function createChapter() {
      this.chapter.course_id = this.course.id;
      this.addRecord(this.chapter);
    },
    createLesson: function createLesson() {
      this.lesson.chapter_id = this.chapter.id;
      this.addRecord(this.lesson);
    },
    addRecord: function addRecord(data) {
      var _this2 = this;

      axios.post(this.path, data).then(function (response) {
        console.log(response.data);

        _this2.updateModels();

        _this2.clearModel(_this2.model_name);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    showForm: function showForm(event, model_name) {
      this.show_form = true;
      this.initialize(event, model_name);
    },
    cancelForm: function cancelForm() {
      this.editable = false;
      this.show_form = false;
      var name = this.model_name + 's';
      this[name] = this.backup;
      this.backup = [];

      if (this.model_name == 'course' && !this.course.id) {
        console.log('exit from the form');
        this.edit_mode = false;
      }

      this.model_name = '';
    },
    changeImage: function changeImage(event) {
      var _this3 = this;

      var formData = new FormData();
      formData.append('file', event.target.files[0]);
      axios.post('/change_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        _this3[_this3.model_name].img = response.data.new_image;

        _this3.addRecord(_this3[_this3.model_name]);

        if (_this3.model_name == 'course') {
          window.location.reload();
        }

        _this3.updateModels();

        _this3.cancelForm();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/describe.vue?vue&type=template&id=f5c3cad4&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/describe.vue?vue&type=template&id=f5c3cad4& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "relevant max-w-5xl lg:w-4/5 md:w-5/6 w-4/5 mx-auto mt-12" },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.edit_mode,
              expression: "!edit_mode"
            }
          ]
        },
        [
          _c(
            "div",
            { staticClass: "flex flex-wrap -m-4" },
            [
              _vm._l(_vm.courses, function(course) {
                return _c("pr_module", {
                  key: course.id,
                  staticClass: "p-4 lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto",
                  attrs: { module: course, isAdmin: true, action: "Edit info" },
                  on: {
                    select: function($event) {
                      return _vm.loadCourse($event)
                    },
                    showForm: function($event) {
                      return _vm.showForm($event, "course")
                    }
                  }
                })
              }),
              _vm._v(" "),
              _c("pr_module", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.show_form,
                    expression: "!show_form"
                  }
                ],
                staticClass: "p-4 lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto",
                attrs: {
                  module: { img: "/module_add.svg" },
                  action: "Create New Course"
                },
                on: {
                  select: function($event) {
                    return _vm.loadCourse($event)
                  }
                }
              })
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "section",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.edit_mode,
              expression: "edit_mode"
            }
          ]
        },
        [
          _c("div", { staticClass: "flex -mx-2" }, [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.editable,
                    expression: "!editable"
                  }
                ],
                staticClass:
                  "w-1/2 px-6 py-2 bg-main-color mx-2 rounded text-center font-medium text-white",
                on: {
                  click: function($event) {
                    return _vm.initialize(_vm.course, "course")
                  }
                }
              },
              [_vm._v("Edit Course")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.editable,
                    expression: "editable"
                  }
                ],
                staticClass:
                  "w-1/2 px-6 py-2 bg-main-color mx-2 rounded text-center font-medium text-white",
                on: { click: _vm.clearCourse }
              },
              [_vm._v("All Courses")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "w-1/2 px-6 py-2 bg-main-color mx-2 rounded text-center font-medium text-white",
                class: _vm.editable ? "hidden" : "",
                on: { click: _vm.newCourse }
              },
              [_vm._v("New Course")]
            )
          ]),
          _vm._v(" "),
          _c(
            "section",
            { staticClass: "mt-6" },
            [
              _c("pr_course_intro", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.model_name !== "course",
                    expression: "model_name !== 'course'"
                  }
                ],
                attrs: {
                  course: _vm.course,
                  lessonsCount: _vm.lessonsCount,
                  duration: _vm.duration,
                  students: _vm.students
                }
              }),
              _vm._v(" "),
              _c(
                "form",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.model_name == "course",
                      expression: "model_name == 'course'"
                    }
                  ],
                  staticClass: "w-4/5 mx-auto mb-16",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.addRecord(_vm.course)
                    },
                    input: function($event) {
                      return _vm.setPath($event.target.name)
                    }
                  }
                },
                [
                  _c(
                    "label",
                    { staticClass: "block text-2xl text-gray-800 mb-2 ml-2" },
                    [_vm._v("Course description")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.course.title,
                        expression: "course.title"
                      }
                    ],
                    staticClass:
                      "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    attrs: {
                      name: "course",
                      id: "title",
                      type: "text",
                      placeholder: "New Course title"
                    },
                    domProps: { value: _vm.course.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.course, "title", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.course.subtitle,
                        expression: "course.subtitle"
                      }
                    ],
                    staticClass:
                      "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    attrs: {
                      name: "course",
                      id: "subtitle",
                      type: "text",
                      placeholder: "Subtitle"
                    },
                    domProps: { value: _vm.course.subtitle },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.course, "subtitle", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "textarea",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.course.description,
                          expression: "course.description"
                        }
                      ],
                      staticClass:
                        "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                      attrs: { name: "course", rows: "9", id: "description" },
                      domProps: { value: _vm.course.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.course,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    },
                    [_vm._v("Say something about the New Course...")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.model_name == "course",
                          expression: "model_name == 'course'"
                        }
                      ],
                      staticClass: "flex"
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "shadow bg-main-color hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
                          attrs: {
                            type: "submit",
                            disabled: this.model_name !== "course"
                          }
                        },
                        [_vm._v(_vm._s(_vm.btn) + " Course")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "text-main-color ml-auto px-4",
                          on: { click: _vm.cancelForm }
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("section", { staticClass: "p-8 my-6 bg-gray-100" }, [
            _c("div", { staticClass: "flex mb-4" }, [
              _c(
                "span",
                {
                  staticClass: "block text-2xl text-gray-800 mb-2 ",
                  class: _vm.model_name == "statment" ? "mx-auto" : "ml-2"
                },
                [_vm._v("Statments section")]
              ),
              _vm._v(" "),
              _vm.model_name !== "statment"
                ? _c(
                    "span",
                    {
                      staticClass: "text-main-color px-4 ml-auto",
                      on: {
                        click: function($event) {
                          return _vm.addEntry("statment")
                        }
                      }
                    },
                    [_vm._v("New Statment")]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex flex-wrap px-8" },
              _vm._l(_vm.statments, function(item) {
                return _c("pr_course_statment", {
                  key: item.id,
                  staticClass: "mb-8",
                  attrs: { data: item, isAdmin: true, hideForm: false },
                  on: {
                    editStatment: function($event) {
                      return _vm.initialize(item, "statment")
                    },
                    showForm: function($event) {
                      return _vm.showForm($event, "statment")
                    }
                  }
                })
              }),
              1
            ),
            _vm._v(" "),
            _c(
              "section",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.show_form,
                    expression: "!show_form"
                  }
                ]
              },
              [
                _c(
                  "form",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.model_name == "statment",
                        expression: "model_name == 'statment'"
                      }
                    ],
                    staticClass: "w-4/5 mx-auto mt-6 mb-16",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.createStatment()
                      },
                      input: function($event) {
                        return _vm.setPath($event.target.name)
                      }
                    }
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.statment.definition,
                          expression: "statment.definition"
                        }
                      ],
                      staticClass:
                        "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                      attrs: {
                        name: "statment",
                        id: "title",
                        type: "text",
                        placeholder: "Statment definition"
                      },
                      domProps: { value: _vm.statment.definition },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.statment,
                            "definition",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "textarea",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.statment.description,
                            expression: "statment.description"
                          }
                        ],
                        staticClass:
                          "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                        attrs: { name: "statment", rows: "2", id: "agenda" },
                        domProps: { value: _vm.statment.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.statment,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      },
                      [_vm._v("...")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "shadow bg-main-color hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
                          attrs: { type: "submit", disabled: !this.course.id }
                        },
                        [_vm._v(_vm._s(_vm.btn) + " Statment")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "text-main-color ml-auto px-4",
                          on: { click: _vm.cancelForm }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "text-main-color px-4",
                          on: {
                            click: function($event) {
                              _vm.statment = {}
                            }
                          }
                        },
                        [_vm._v("Clear Statment")]
                      )
                    ])
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "section",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.show_form,
                  expression: "!show_form"
                }
              ],
              staticClass: "px-8 py-8 my-6 bg-gray-100"
            },
            [
              _c("div", { staticClass: "flex mb-4" }, [
                _c(
                  "span",
                  {
                    staticClass: "block text-2xl text-gray-800 mb-2 ",
                    class: _vm.model_name == "chapter" ? "mx-auto" : "ml-2"
                  },
                  [_vm._v("Chapters/Lessons section")]
                ),
                _vm._v(" "),
                _vm.model_name !== "chapter"
                  ? _c(
                      "span",
                      {
                        staticClass: "text-main-color px-4 ml-auto",
                        on: {
                          click: function($event) {
                            return _vm.addEntry("chapter")
                          }
                        }
                      },
                      [_vm._v("New Chapter")]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("pr_course_content", {
                staticClass: "-mt-12",
                attrs: { content: _vm.chapters, isAdmin: true },
                on: {
                  newLesson: function($event) {
                    return _vm.newLesson($event)
                  },
                  editLesson: function($event) {
                    return _vm.editLesson($event)
                  },
                  editChapter: function($event) {
                    return _vm.editChapter($event)
                  },
                  chapterSelected: function($event) {
                    return _vm.chapterSelected($event)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "form",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.model_name == "chapter",
                      expression: "model_name == 'chapter'"
                    }
                  ],
                  staticClass: "w-4/5 mx-auto mb-16",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createChapter()
                    },
                    input: function($event) {
                      return _vm.setPath($event.target.name)
                    }
                  }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.chapter.title,
                        expression: "chapter.title"
                      }
                    ],
                    staticClass:
                      "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    attrs: {
                      name: "chapter",
                      id: "title",
                      type: "text",
                      placeholder: "Chapter title"
                    },
                    domProps: { value: _vm.chapter.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.chapter, "title", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.chapter.description,
                        expression: "chapter.description"
                      }
                    ],
                    staticClass:
                      "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    attrs: {
                      name: "chapter",
                      id: "title",
                      type: "text",
                      placeholder: "Chapter description"
                    },
                    domProps: { value: _vm.chapter.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.chapter,
                          "description",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "shadow bg-main-color hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
                        attrs: { type: "submit", disabled: !this.course.id }
                      },
                      [_vm._v(_vm._s(_vm.btn) + " Chapter")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "text-main-color ml-auto px-4",
                        on: { click: _vm.cancelForm }
                      },
                      [_vm._v("Cancel")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "text-main-color px-4",
                        on: {
                          click: function($event) {
                            _vm.chapter = {}
                          }
                        }
                      },
                      [_vm._v("Clear Chapter")]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "form",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.model_name == "lesson",
                      expression: "model_name == 'lesson'"
                    }
                  ],
                  staticClass: "w-4/5 mx-auto mb-16",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createLesson()
                    },
                    input: function($event) {
                      return _vm.setPath($event.target.name)
                    }
                  }
                },
                [
                  _c(
                    "label",
                    { staticClass: "block text-2xl text-gray-800 mb-2 ml-2" },
                    [_vm._v("Lessons")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.lesson.number,
                        expression: "lesson.number"
                      }
                    ],
                    staticClass:
                      "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    attrs: {
                      name: "lesson",
                      id: "title",
                      type: "text",
                      placeholder: "Lesson number"
                    },
                    domProps: { value: _vm.lesson.number },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.lesson, "number", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.lesson.title,
                        expression: "lesson.title"
                      }
                    ],
                    staticClass:
                      "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    attrs: {
                      name: "lesson",
                      id: "title",
                      type: "text",
                      placeholder: "Lesson title"
                    },
                    domProps: { value: _vm.lesson.title },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.lesson, "title", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "textarea",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.lesson.description,
                          expression: "lesson.description"
                        }
                      ],
                      staticClass:
                        "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                      attrs: { name: "lesson", rows: "2", id: "description" },
                      domProps: { value: _vm.lesson.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.lesson,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    },
                    [_vm._v("...")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.lesson.url,
                        expression: "lesson.url"
                      }
                    ],
                    staticClass:
                      "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    attrs: {
                      name: "lesson",
                      id: "title",
                      type: "text",
                      placeholder: "Lesson url"
                    },
                    domProps: { value: _vm.lesson.url },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.lesson, "url", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.lesson.duration,
                        expression: "lesson.duration"
                      }
                    ],
                    staticClass:
                      "mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    attrs: {
                      name: "lesson",
                      id: "title",
                      type: "text",
                      placeholder: "duration"
                    },
                    domProps: { value: _vm.lesson.duration },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.lesson, "duration", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "shadow bg-main-color hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
                        attrs: { type: "submit", disabled: !this.chapter.id }
                      },
                      [_vm._v(_vm._s(_vm.btn) + " Lesson")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "text-main-color ml-auto px-4",
                        on: { click: _vm.cancelForm }
                      },
                      [_vm._v("Cancel")]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "text-main-color px-4",
                        on: {
                          click: function($event) {
                            _vm.lesson = {}
                          }
                        }
                      },
                      [_vm._v("Clear Lesson")]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "form",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show_form,
              expression: "show_form"
            }
          ],
          staticClass: "flex justify-center my-4",
          attrs: {
            enctype: "multipart/form-data",
            action: "/change_image",
            method: "post"
          }
        },
        [
          _c("input", {
            staticClass: "py-6 px-8 hidden",
            attrs: { type: "file", name: "file", id: "file" },
            on: { change: _vm.changeImage }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass:
                "flex items-center text-main-color text-sm py-2 px-4",
              attrs: { for: "file" }
            },
            [
              _c("span", [
                _vm._v("Select new Image for " + _vm._s(this.model_name))
              ]),
              _vm._v(" "),
              _c(
                "svg",
                {
                  staticClass: "w-6 h-6 ml-2",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d:
                        "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "text-main-color text-sm py-2 px-4",
              on: { click: _vm.cancelForm }
            },
            [_vm._v("Cancel")]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/describe.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/describe.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _describe_vue_vue_type_template_id_f5c3cad4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./describe.vue?vue&type=template&id=f5c3cad4& */ "./resources/js/components/describe.vue?vue&type=template&id=f5c3cad4&");
/* harmony import */ var _describe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./describe.vue?vue&type=script&lang=js& */ "./resources/js/components/describe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _describe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _describe_vue_vue_type_template_id_f5c3cad4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _describe_vue_vue_type_template_id_f5c3cad4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/describe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/describe.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/describe.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_describe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./describe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/describe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_describe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/describe.vue?vue&type=template&id=f5c3cad4&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/describe.vue?vue&type=template&id=f5c3cad4& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_describe_vue_vue_type_template_id_f5c3cad4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./describe.vue?vue&type=template&id=f5c3cad4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/describe.vue?vue&type=template&id=f5c3cad4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_describe_vue_vue_type_template_id_f5c3cad4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_describe_vue_vue_type_template_id_f5c3cad4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
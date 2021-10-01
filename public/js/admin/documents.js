(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/documents"],{

/***/ "./Resources/assets/js/resources/Documents/_form.js":
/*!**********************************************************!*\
  !*** ./Resources/assets/js/resources/Documents/_form.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./Resources/assets/js/utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var _Form = function _Form(_ref) {
  var _ref$current = _ref.current,
      current = _ref$current === void 0 ? {} : _ref$current,
      _ref$fileList = _ref.fileList,
      fileList = _ref$fileList === void 0 ? [] : _ref$fileList,
      onFinish = _ref.onFinish;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var props = {
    name: 'document',
    action: '/api/admin/document-upload',
    defaultFileList: fileList,
    onChange: function onChange(info) {
      if (info.file.status !== 'uploading') {
        form.setFieldsValue({
          'file': info.file.response.document
        });
      }

      if (info.file.status === 'done') {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("".concat(info.file.name, " file uploaded successfully"));
      } else if (info.file.status === 'error') {
        antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("".concat(info.file.name, " file upload failed."));
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    layout: "vertical",
    form: form,
    onFinish: onFinish,
    initialValues: _objectSpread({}, current)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 10
  }, _utils__WEBPACK_IMPORTED_MODULE_3__["config"].languages.map(function (lang) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: 24 / _utils__WEBPACK_IMPORTED_MODULE_3__["config"].languages.length,
      key: lang.label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Title ".concat(lang.label),
      name: ['title', lang.value],
      rules: [{
        required: true,
        message: 'Please input the title of collection!'
      }]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: 'File',
    name: 'file',
    noStyle: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: 'hidden',
    name: 'file'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UploadOutlined"], null), " Select File"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: 'primary',
    htmlType: "submit"
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (_Form);

/***/ }),

/***/ "./Resources/assets/js/resources/Documents/create.js":
/*!***********************************************************!*\
  !*** ./Resources/assets/js/resources/Documents/create.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_form */ "./Resources/assets/js/resources/Documents/_form.js");





var Create = function Create(_ref) {
  var create = _ref.create;

  var onFinish = function onFinish(values) {
    create('documents', values);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    title: 'Create'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onFinish: onFinish
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_2__["default"])(Create, ['create']));

/***/ }),

/***/ "./Resources/assets/js/resources/Documents/edit.js":
/*!*********************************************************!*\
  !*** ./Resources/assets/js/resources/Documents/edit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_form */ "./Resources/assets/js/resources/Documents/_form.js");






var Edit = function Edit(_ref) {
  var update = _ref.update,
      getOne = _ref.getOne,
      current = _ref.current,
      loading = _ref.loading;

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
      id = _useParams.id;

  var onFinish = function onFinish(values) {
    update('documents', current.id, values);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getOne('documents', id);
  }, [id]);
  return current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    title: 'Document Edit',
    loading: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    current: current,
    onFinish: onFinish,
    fileList: [{
      uid: '-1',
      name: 'Document',
      status: 'done',
      url: current.file
    }]
  })) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(Edit, ['update', 'getOne', 'current', 'loading']));

/***/ }),

/***/ "./Resources/assets/js/resources/Documents/index.js":
/*!**********************************************************!*\
  !*** ./Resources/assets/js/resources/Documents/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");



var Index = function Index() {
  var columns = [{
    title: 'Title',
    dataIndex: ['title', 'en'],
    key: 'title.en'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
    title: 'Documents',
    name: 'documents',
    columns: columns,
    primaryKey: 'id'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

}]);
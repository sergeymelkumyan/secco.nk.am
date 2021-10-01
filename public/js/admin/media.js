(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/media"],{

/***/ "./Resources/assets/js/pages/MediaManager/components/FilterFiles/index.js":
/*!********************************************************************************!*\
  !*** ./Resources/assets/js/pages/MediaManager/components/FilterFiles/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");



var RangePicker = antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"].RangePicker;
var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
var Search = antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search;

var FilterFiles = function FilterFiles(_ref) {
  var getList = _ref.getList,
      setListType = _ref.setListType;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [32, 32],
    className: 'filters',
    align: 'middle'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Show"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["AppstoreOutlined"], {
    onClick: function onClick() {
      return setListType(true);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MenuOutlined"], {
    onClick: function onClick() {
      return setListType(false);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangePicker, {
    format: "YYYY-MM-DD",
    onCalendarChange: function onCalendarChange(dates, dateString) {
      getList({
        'start_date': dateString[0],
        'end_date': dateString[1]
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 4,
    offset: 14
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, {
    placeholder: "Search here",
    onSearch: function onSearch(value) {
      return getList({
        name: value
      });
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterFiles);

/***/ }),

/***/ "./Resources/assets/js/pages/MediaManager/components/GridList/index.js":
/*!*****************************************************************************!*\
  !*** ./Resources/assets/js/pages/MediaManager/components/GridList/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




var GridList = function GridList(_ref) {
  var fileList = _ref.fileList,
      getOne = _ref.getOne,
      deleteOne = _ref.deleteOne;
  var files = fileList.map(function (file) {
    return {
      uid: file.id,
      name: file.name,
      status: 'done',
      url: file.file_name
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Upload"], {
    action: "",
    listType: "picture-card",
    fileList: files,
    onPreview: function onPreview(file) {
      return getOne(file.uid);
    },
    onChange: function onChange(data) {
      return deleteOne(data.file.uid);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GridList);
GridList.propTypes = {
  fileList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  useShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  useDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./Resources/assets/js/pages/MediaManager/components/NewFile/index.js":
/*!****************************************************************************!*\
  !*** ./Resources/assets/js/pages/MediaManager/components/NewFile/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var NewFile = function NewFile(_ref) {
  var directory = _ref.directory;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      upload = _useState2[0],
      setUpload = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [32, 32],
    className: 'actions'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setUpload(!upload);
    },
    className: 'new-button'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Add New Media"))), upload ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Uploader"], {
    directory: directory
  })) : "");
};

/* harmony default export */ __webpack_exports__["default"] = (NewFile);

/***/ }),

/***/ "./Resources/assets/js/pages/MediaManager/components/PreviewFile/index.js":
/*!********************************************************************************!*\
  !*** ./Resources/assets/js/pages/MediaManager/components/PreviewFile/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _context_consumers_MediaConsumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/consumers/MediaConsumer */ "./Resources/assets/js/context/consumers/MediaConsumer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./Resources/assets/js/utils/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var TextArea = antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea;

var PreviewFile = function PreviewFile(_ref) {
  var visible = _ref.visible,
      toggleVisible = _ref.toggleVisible,
      file = _ref.file,
      update = _ref.update;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      alt = _useState2[0],
      setAlt = _useState2[1];

  var onChange = function onChange(_ref2) {
    var value = _ref2.target.value;
    setAlt(value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setAlt(file.alt);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    title: file.name,
    visible: visible,
    onClose: function onClose() {
      return toggleVisible();
    },
    getContainer: false,
    className: 'image-preview'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: file.file_name,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'info'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Type: ", file.mime_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Uploaded on: ", file.created_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Size:", Object(_utils__WEBPACK_IMPORTED_MODULE_3__["bytesToKbytes"])(file.size)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
    value: alt,
    placeholder: 'Alternative Text',
    autoSize: {
      minRows: 4,
      maxRows: 8
    },
    allowClear: true,
    onChange: onChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'actions'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return update(file.id, {
        alt: alt
      });
    }
  }, "Update")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_MediaConsumer__WEBPACK_IMPORTED_MODULE_2__["default"])(PreviewFile, ['file', 'toggleVisible', 'update', 'visible']));

/***/ }),

/***/ "./Resources/assets/js/pages/MediaManager/components/TableList/index.js":
/*!******************************************************************************!*\
  !*** ./Resources/assets/js/pages/MediaManager/components/TableList/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./Resources/assets/js/utils/index.js");





var TableList = function TableList(_ref) {
  var fileList = _ref.fileList,
      getOne = _ref.getOne,
      deleteOne = _ref.deleteOne;
  var columns = [{
    title: '',
    dataIndex: 'image',
    key: 'image',
    render: function render(text, record) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: record.file_name,
        alt: ''
      });
    }
  }, {
    title: '',
    key: 'original_name',
    dataIndex: 'original_name'
  }, {
    title: '',
    dataIndex: 'size',
    render: function render(text, record) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["bytesToKbytes"])(record.size);
    }
  }, {
    title: '',
    key: 'mime_type',
    dataIndex: 'mime_type'
  }, {
    title: '',
    key: 'alt',
    dataIndex: 'alt'
  }, {
    title: '',
    key: 'created_at',
    dataIndex: 'created_at'
  }, {
    title: 'Actions',
    dataIndex: 'actions',
    render: function render(text, record) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DeleteOutlined"], {
        onClick: function onClick() {
          return deleteOne(record.id);
        }
      });
    }
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    showHeader: false,
    className: 'table-list',
    rowKey: function rowKey(record) {
      return record.id;
    },
    columns: columns,
    dataSource: fileList
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TableList);

/***/ }),

/***/ "./Resources/assets/js/pages/MediaManager/directory.js":
/*!*************************************************************!*\
  !*** ./Resources/assets/js/pages/MediaManager/directory.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_consumers_MediaConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/consumers/MediaConsumer */ "./Resources/assets/js/context/consumers/MediaConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components_NewFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NewFile */ "./Resources/assets/js/pages/MediaManager/components/NewFile/index.js");
/* harmony import */ var _components_FilterFiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FilterFiles */ "./Resources/assets/js/pages/MediaManager/components/FilterFiles/index.js");
/* harmony import */ var _components_PreviewFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PreviewFile */ "./Resources/assets/js/pages/MediaManager/components/PreviewFile/index.js");
/* harmony import */ var _components_GridList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/GridList */ "./Resources/assets/js/pages/MediaManager/components/GridList/index.js");
/* harmony import */ var _components_TableList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TableList */ "./Resources/assets/js/pages/MediaManager/components/TableList/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Directory = function Directory(_ref) {
  var fileList = _ref.fileList,
      visible = _ref.visible,
      loading = _ref.loading,
      getList = _ref.getList,
      getOne = _ref.getOne,
      update = _ref.update,
      deleteOne = _ref.deleteOne;

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useParams"])(),
      directory = _useParams.directory;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      listType = _useState2[0],
      setListType = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getList({
      directory: directory
    });
  }, [directory]);
  console.log(loading);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    title: 'Images ' + directory,
    className: 'directory',
    loading: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewFile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    directory: directory
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FilterFiles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    getList: getList,
    setListType: setListType
  }), listType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GridList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fileList: fileList,
    getOne: getOne,
    deleteOne: deleteOne
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TableList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fileList: fileList,
    getOne: getOne,
    deleteOne: deleteOne
  }), visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PreviewFile__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_MediaConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(Directory, ['fileList', 'visible', 'loading', 'getList', 'create', 'getOne', 'update', 'deleteOne']));

/***/ }),

/***/ "./Resources/assets/js/pages/MediaManager/index.js":
/*!*********************************************************!*\
  !*** ./Resources/assets/js/pages/MediaManager/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _context_consumers_MediaConsumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/consumers/MediaConsumer */ "./Resources/assets/js/context/consumers/MediaConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");






var Meta = antd__WEBPACK_IMPORTED_MODULE_5__["Card"].Meta;

var MediaManager = function MediaManager(_ref) {
  var directories = _ref.directories,
      getDirectories = _ref.getDirectories;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getDirectories();
  }, []);
  console.log(directories);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Page"], {
    title: 'Media Manager',
    className: 'media-manager'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: [20, 20]
  }, Object.values(directories).map(function (directory, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      key: key,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: '/admin/media-manager/' + directory
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      hoverable: true,
      className: 'folder' // style={{ width: 240 }}
      ,
      cover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["FolderOutlined"], null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Meta, {
      title: directory
    }))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_MediaConsumer__WEBPACK_IMPORTED_MODULE_2__["default"])(MediaManager, ['directories', 'getDirectories']));

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/forgot"],{

/***/ "./Resources/assets/js/pages/Auth/Forgot.js":
/*!**************************************************!*\
  !*** ./Resources/assets/js/pages/Auth/Forgot.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./Resources/assets/js/utils/index.js");
/* harmony import */ var _context_consumers_AdminConsumer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/consumers/AdminConsumer */ "./Resources/assets/js/context/consumers/AdminConsumer.js");






var Forgot = function Forgot(_ref) {
  var forgotPassword = _ref.forgotPassword;

  var onFinish = function onFinish(values) {
    forgotPassword(values).then(function (res) {
      console.log(res);
    })["catch"](function (err) {
      console.log(err, 'error');
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'layout--full-page forgot-page ant-row ant-row-center ant-row-middle'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'card'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'card-header'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _utils__WEBPACK_IMPORTED_MODULE_3__["config"].logoPath,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Reset Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "login",
    className: "forgot-form",
    onFinish: onFinish
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "email",
    rules: [{
      required: true,
      message: 'Please input your email!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MailOutlined"], {
      className: "site-form-item-icon"
    }),
    placeholder: 'Email'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    className: "forgot-form-button"
  }, "Unlock")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_AdminConsumer__WEBPACK_IMPORTED_MODULE_4__["default"])(Forgot, ['forgotPassword']));

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/reset"],{

/***/ "./Resources/assets/js/pages/Auth/Reset.js":
/*!*************************************************!*\
  !*** ./Resources/assets/js/pages/Auth/Reset.js ***!
  \*************************************************/
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






var Reset = function Reset(_ref) {
  var location = _ref.location,
      resetPassword = _ref.resetPassword;
  var params = new URLSearchParams(location.search);
  var token = params.get('token');
  var email = params.get('email');

  var onFinish = function onFinish(values) {
    resetPassword(values);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'layout--full-page  ant-row ant-row-center ant-row-middle'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'card'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'card-header'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _utils__WEBPACK_IMPORTED_MODULE_3__["config"].logoPath,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Reset Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "login",
    className: "reset-form",
    initialValues: {
      email: email,
      token: token
    },
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
    placeholder: 'Email',
    value: email,
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "password",
    rules: [{
      required: true,
      message: 'Please input your password!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: 'password',
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LockOutlined"], {
      className: "site-form-item-icon"
    }),
    placeholder: "New Password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "password_confirmation",
    rules: [{
      required: true,
      message: 'Please input your password!'
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: 'password',
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LockOutlined"], {
      className: "site-form-item-icon"
    }),
    placeholder: "Confirm Password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: 'token',
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: 'hidden',
    value: token
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    className: "reset-form-button"
  }, "Reset Password")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_AdminConsumer__WEBPACK_IMPORTED_MODULE_4__["default"])(Reset, ['resetPassword']));

/***/ })

}]);
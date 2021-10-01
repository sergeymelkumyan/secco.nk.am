(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/ui-routes"],{

/***/ "./Resources/assets/js/pages/About/index.js":
/*!**************************************************!*\
  !*** ./Resources/assets/js/pages/About/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Loader */ "./Resources/assets/js/components/Loader/index.js");







var About = function About(_ref) {
  var data = _ref.data,
      translate = _ref.translate;
  return data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    className: 'about',
    head: {
      title: translate('about_the_office_of_the_sc') + ' | ' + translate('office_security_council')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: 'py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center mb-5 title'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: data.description
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_4__["default"])(About, ['data']), ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Announcements/index.js":
/*!**********************************************************!*\
  !*** ./Resources/assets/js/pages/Announcements/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");







var Announcements = function Announcements(_ref) {
  var translate = _ref.translate,
      posts = _ref.posts;
  return posts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    className: 'press-release',
    head: {
      title: translate('announcements') + ' | ' + translate('republic_of_artsakh')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('announcements'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 4,
      className: 'mb-3',
      key: post.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: 'h-100'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
      variant: "top",
      src: post.image
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, null, post.short_description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CustomLink"], {
      url: "/post/".concat(post.slug),
      className: 'stretched-link',
      navlink: false
    }))));
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Loader"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(Announcements, ['getPage', 'posts']), ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Docs/index.js":
/*!*************************************************!*\
  !*** ./Resources/assets/js/pages/Docs/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_fa_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa/index */ "./node_modules/react-icons/fa/index.js");
/* harmony import */ var react_icons_fa_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Loader */ "./Resources/assets/js/components/Loader/index.js");








var Docs = function Docs(_ref) {
  var documents = _ref.documents,
      translate = _ref.translate;
  console.log(documents);
  return documents ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    className: 'documents',
    head: {
      title: translate('sc_foundamental_documents') + ' | ' + translate('republic_of_artsakh')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: 'docs'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('sc_foundamental_documents'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, documents.map(function (document, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: 12,
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: 'mb-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-horizontal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, null, document.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: document.file,
      className: 'btn btn-more float-right',
      download: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa_index__WEBPACK_IMPORTED_MODULE_3__["FaFileDownload"], null)))))));
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_5__["default"])(Docs, ['documents']), ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Gallery/components/Photos.js":
/*!****************************************************************!*\
  !*** ./Resources/assets/js/pages/Gallery/components/Photos.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ "./Resources/assets/js/components/Loader/index.js");







var Photos = function Photos(_ref) {
  var photos = _ref.photos,
      translate = _ref.translate;
  return photos ?
  /*#__PURE__*/
  // <div>
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('Photos'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, photos.map(function (photo, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      key: key,
      md: 4,
      className: 'mb-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: 'h-100'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
      variant: "top",
      src: photo.image,
      alt: photo.title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, null, photo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["CustomLink"], {
      url: "/photo/".concat(photo.slug),
      className: 'stretched-link',
      navlink: false
    }))));
  }))) // </div>
  :
  /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(Photos, ['photos']), ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Gallery/detail.js":
/*!*****************************************************!*\
  !*** ./Resources/assets/js/pages/Gallery/detail.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-photo-gallery */ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js");
/* harmony import */ var react_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-images */ "./node_modules/react-images/dist/react-images.es.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Loader */ "./Resources/assets/js/components/Loader/index.js");
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var GalleyDetail = function GalleyDetail(_ref) {
  var getPage = _ref.getPage,
      photo = _ref.photo;

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"])(),
      slug = _useParams.slug;

  var photos = [];

  if (photo) {
    for (var i = 0; i < photo.photos.length; i++) {
      var width = void 0,
          height = void 0;

      if (i % 2 === 0) {
        height = 3;
        width = 4;
      } else {
        height = 2;
        width = 3;
      }

      photos.push({
        src: photo.photos[i],
        width: width,
        height: height
      });
    }
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentImage = _useState2[0],
      setCurrentImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      viewerIsOpen = _useState4[0],
      setViewerIsOpen = _useState4[1];

  var openLightbox = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event, _ref2) {
    var photo = _ref2.photo,
        index = _ref2.index;
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  var closeLightbox = function closeLightbox() {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPage("photo/".concat(slug));
  }, [slug]);
  return photo && photos ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Page"], {
    className: 'member-detail',
    head: {
      title: photo.title
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: 'py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center mb-5 title'
  }, photo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_photo_gallery__WEBPACK_IMPORTED_MODULE_1__["default"], {
    photos: photos,
    onClick: openLightbox
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_images__WEBPACK_IMPORTED_MODULE_2__["ModalGateway"], null, viewerIsOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_images__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    onClose: closeLightbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_images__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentIndex: currentImage,
    views: photos.map(function (x) {
      return _objectSpread(_objectSpread({}, x), {}, {
        srcset: x.srcSet,
        caption: x.title
      });
    })
  })) : null)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_7__["default"])(GalleyDetail, ['getPage', 'photo']));

/***/ }),

/***/ "./Resources/assets/js/pages/Gallery/index.js":
/*!****************************************************!*\
  !*** ./Resources/assets/js/pages/Gallery/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Photos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Photos */ "./Resources/assets/js/pages/Gallery/components/Photos.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");





var Gallery = function Gallery(_ref) {
  var translate = _ref.translate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    className: 'gallery',
    head: {
      title: translate('Photos')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Photos__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(Gallery, ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/History/index.js":
/*!****************************************************!*\
  !*** ./Resources/assets/js/pages/History/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ "./Resources/assets/js/components/Loader/index.js");







var History = function History(_ref) {
  var data = _ref.data,
      translate = _ref.translate;
  return data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    className: 'about',
    head: {
      title: translate('sc_history') + ' | ' + translate('office_security_council')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: 'py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center mb-5 title'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: data.description
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_4__["default"])(History, ['data']), ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Home/components/Annoucement.js":
/*!******************************************************************!*\
  !*** ./Resources/assets/js/pages/Home/components/Annoucement.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_4__);






var Announcement = function Announcement(_ref) {
  var translate = _ref.translate,
      announcements = _ref.announcements;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: 'announcement py-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center mb-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('announcements'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12
  }, announcements === null || announcements === void 0 ? void 0 : announcements.map(function (announcement) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      key: announcement.slug,
      className: 'mb-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-horizontal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
      src: announcement.image,
      alt: announcement.title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, null, announcement.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, announcement.short_description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, announcement.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'align-self-end text-right'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["CustomLink"], {
      url: "/post/".concat(announcement.slug),
      className: 'btn btn-more stretched-link',
      content: translate('read_more'),
      navlink: false
    })))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    className: 'text-center mt-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["CustomLink"], {
    url: '/announcements',
    className: 'btn btn-all',
    content: translate('see_all'),
    navlink: false
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(Announcement, ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Home/components/Gallery.js":
/*!**************************************************************!*\
  !*** ./Resources/assets/js/pages/Home/components/Gallery.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);





var Gallery = function Gallery(_ref) {
  var translate = _ref.translate,
      photos = _ref.photos;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: 'gallery py-3 mb-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center mb-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('Photos'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, photos === null || photos === void 0 ? void 0 : photos.map(function (photo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 4,
      key: photo.slug,
      className: 'mb-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: 'h-100'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
      variant: "top",
      src: photo.image,
      alt: 'gallery'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      className: 'p-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
      className: 'mb-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["CustomLink"], {
      url: "/photo/".concat(photo.slug),
      className: 'stretched-link',
      content: photo.title,
      navlink: false
    })))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_2__["default"])(Gallery, ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Home/components/MainNews/index.js":
/*!*********************************************************************!*\
  !*** ./Resources/assets/js/pages/Home/components/MainNews/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ "./Resources/assets/js/pages/Home/components/MainNews/settings.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_6__);








var MainNews = function MainNews(_ref) {
  var translate = _ref.translate,
      sliders = _ref.sliders;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'main-carousel w-100'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _settings__WEBPACK_IMPORTED_MODULE_5__["settings"], sliders === null || sliders === void 0 ? void 0 : sliders.map(function (slider) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: slider.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: 'h-100'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 6,
      className: 'backgrounded',
      style: {
        backgroundImage: "url(".concat(slider.image, ")")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 6,
      className: 'my-5 text-col pl-5 align-self-center'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: 'slide-title'
    }, slider.title, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: 'float-right'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, slider.date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: 'slide-text'
    }, slider.short_description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["CustomLink"], {
      url: "/post/".concat(slider.slug),
      className: 'btn btn-more',
      content: translate('read_more'),
      navlink: false
    }))));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__["default"])(MainNews, ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Home/components/MainNews/settings.js":
/*!************************************************************************!*\
  !*** ./Resources/assets/js/pages/Home/components/MainNews/settings.js ***!
  \************************************************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
var settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  centerMode: false,
  slidesToScroll: 1,
  arrows: false,
  centerPadding: "130px",
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 4000,
  adaptiveHeight: true
};

/***/ }),

/***/ "./Resources/assets/js/pages/Home/components/PressRelease.js":
/*!*******************************************************************!*\
  !*** ./Resources/assets/js/pages/Home/components/PressRelease.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_4__);






var PressRelease = function PressRelease(_ref) {
  var translate = _ref.translate,
      press = _ref.press;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: 'press-release pt-5 pb-3 mb-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center mb-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('press_releases'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, press === null || press === void 0 ? void 0 : press.map(function (press) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      key: press.slug,
      md: 4,
      className: 'mb-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: 'h-100'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
      variant: "top",
      src: press.image,
      alt: press.title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, null, press.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, press.short_description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["CustomLink"], {
      url: "/post/".concat(press.slug),
      className: 'btn btn-more stretched-link',
      content: translate('read_more'),
      navlink: false
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    className: 'text-center mt-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["CustomLink"], {
    url: '/press-release',
    className: 'btn btn-all',
    content: translate('see_all'),
    navlink: false
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(PressRelease, ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Home/components/Speech.js":
/*!*************************************************************!*\
  !*** ./Resources/assets/js/pages/Home/components/Speech.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_4__);






var Speech = function Speech(_ref) {
  var translate = _ref.translate,
      speeches = _ref.speeches;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: 'speech announcement pt-4 pb-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center mb-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('speeches_and_messages'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12
  }, speeches === null || speeches === void 0 ? void 0 : speeches.map(function (speech) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      key: speech.slug,
      className: 'mb-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-horizontal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
      src: speech.image,
      alt: speech.title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, null, speech.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, speech.short_description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, speech.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'align-self-end text-right'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["CustomLink"], {
      url: "/post/".concat(speech.slug),
      className: 'btn btn-more stretched-link',
      content: translate('read_more'),
      navlink: false
    })))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    className: 'text-center mt-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["CustomLink"], {
    url: '/speeches',
    className: 'btn btn-all',
    content: translate('see_all'),
    navlink: false
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(Speech, ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Home/components/Video.js":
/*!************************************************************!*\
  !*** ./Resources/assets/js/pages/Home/components/Video.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player/youtube */ "./node_modules/react-player/youtube.js");
/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player_youtube__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");





var Video = function Video(_ref) {
  var translate = _ref.translate,
      videos = _ref.videos;
  window.YTConfig = {
    host: 'https://youtube.com',
    origin: 'https://secco.nkr.am'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: 'video mb-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center py-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('Videos'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, videos === null || videos === void 0 ? void 0 : videos.map(function (video, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 4,
      key: key,
      className: 'mb-4'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player_youtube__WEBPACK_IMPORTED_MODULE_1___default.a, {
      url: video.video_url,
      config: {
        youtube: {
          playerVars: {
            origin: 'https://secco.nkr.am'
          }
        }
      },
      width: "100%"
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(Video, ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Home/index.js":
/*!*************************************************!*\
  !*** ./Resources/assets/js/pages/Home/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MainNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MainNews */ "./Resources/assets/js/pages/Home/components/MainNews/index.js");
/* harmony import */ var _components_PressRelease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PressRelease */ "./Resources/assets/js/pages/Home/components/PressRelease.js");
/* harmony import */ var _components_Speech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Speech */ "./Resources/assets/js/pages/Home/components/Speech.js");
/* harmony import */ var _components_Annoucement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Annoucement */ "./Resources/assets/js/pages/Home/components/Annoucement.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Gallery */ "./Resources/assets/js/pages/Home/components/Gallery.js");
/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Video */ "./Resources/assets/js/pages/Home/components/Video.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");











var Home = function Home(_ref) {
  var sliders = _ref.sliders,
      announcements = _ref.announcements,
      press = _ref.press,
      speeches = _ref.speeches,
      photos = _ref.photos,
      videos = _ref.videos,
      translate = _ref.translate,
      loading = _ref.loading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    className: 'home',
    head: {
      title: translate('office_security_council') + ' | ' + translate('republic_of_artsakh')
    },
    loading: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainNews__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sliders: sliders
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PressRelease__WEBPACK_IMPORTED_MODULE_4__["default"], {
    press: press
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Gallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
    photos: photos
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Video__WEBPACK_IMPORTED_MODULE_8__["default"], {
    videos: videos
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Annoucement__WEBPACK_IMPORTED_MODULE_6__["default"], {
    announcements: announcements
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Speech__WEBPACK_IMPORTED_MODULE_5__["default"], {
    speeches: speeches
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, ['sliders', 'announcements', 'press', 'speeches', 'photos', 'videos', 'loading']), ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Members/detail.js":
/*!*****************************************************!*\
  !*** ./Resources/assets/js/pages/Members/detail.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ "./Resources/assets/js/components/Loader/index.js");







var MemberDetail = function MemberDetail(_ref) {
  var getPage = _ref.getPage,
      member = _ref.member;

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      slug = _useParams.slug;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPage("member/".concat(slug));
  }, [slug]);
  return member ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Page"], {
    className: 'member-detail',
    head: {
      title: member.title
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: 'py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center mb-5 title'
  }, member.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: member.image,
    className: 'w-50 float-left mr-3 mb-2',
    alt: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, member.full_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'text-justify description',
    dangerouslySetInnerHTML: {
      __html: member.bio
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(MemberDetail, ['getPage', 'member']));

/***/ }),

/***/ "./Resources/assets/js/pages/Members/index.js":
/*!****************************************************!*\
  !*** ./Resources/assets/js/pages/Members/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ "./Resources/assets/js/components/Loader/index.js");







var Member = function Member(_ref) {
  var members = _ref.members,
      translate = _ref.translate;
  return members ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Page"], {
    className: 'member',
    head: {
      title: translate('members_of_the_SC') + ' | ' + translate('republic_of_artsakh')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('members_of_the_SC'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, members.filter(function (excludeKey) {
    if (excludeKey.slug == 'president-of-the-artsakh-republic-chairman-of-the-security-council') {
      return false;
    }

    return true;
  }).map(function (member, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      key: key,
      md: 4,
      className: 'mb-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: 'h-100'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
      variant: "top",
      src: member.image,
      alt: member.title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, null, member.full_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, null, member.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["CustomLink"], {
      url: "/member/".concat(member.slug),
      className: 'stretched-link',
      navlink: false
    }))));
  })))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_2__["default"])(Member, ['members']), ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Post/config.js":
/*!**************************************************!*\
  !*** ./Resources/assets/js/pages/Post/config.js ***!
  \**************************************************/
/*! exports provided: shareConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareConfig", function() { return shareConfig; });
var shareConfig = {
  alignment: 'left',
  color: 'social',
  enabled: true,
  font_size: 16,
  hide_desktop: false,
  labels: 'cta',
  language: 'ru',
  min_count: 0,
  networks: ['facebook', 'messenger', 'twitter', 'whatsapp', 'email'],
  padding: 12,
  radius: 4,
  show_total: true,
  show_mobile: true,
  show_toggle: true,
  size: 48,
  top: '50%'
};

/***/ }),

/***/ "./Resources/assets/js/pages/Post/index.js":
/*!*************************************************!*\
  !*** ./Resources/assets/js/pages/Post/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var sharethis_reactjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sharethis-reactjs */ "./node_modules/sharethis-reactjs/dist/index.js");
/* harmony import */ var sharethis_reactjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sharethis_reactjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./Resources/assets/js/pages/Post/config.js");
/* harmony import */ var _components_CustomLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/CustomLink */ "./Resources/assets/js/components/CustomLink/index.js");









var Post = function Post(_ref) {
  var getPage = _ref.getPage,
      post = _ref.post,
      others = _ref.others;

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
      slug = _useParams.slug;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPage("post/".concat(slug));
  }, [slug]);
  return post ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Page"], {
    className: 'post',
    head: {
      "title": post.title,
      meta: {
        "og:title": post.title,
        "og:image": "http://secco.nk.am" + post.image,
        "og:description": post.short_description,
        "og:url": "http://secco.nk.am/hy/post/" + post.slug,
        "og:type": "article"
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: 'py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center mb-5 title'
  }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: post.image,
    className: 'w-100 mb-2',
    alt: post.image ? post.image : post.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: 'date'
  }, post.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'text-justify description',
    dangerouslySetInnerHTML: {
      __html: post.description
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 4
  }, others === null || others === void 0 ? void 0 : others.map(function (other, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      key: key,
      className: 'mb-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      md: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CustomLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
      url: "/post/".concat(other.slug),
      navlink: false,
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: other.image,
        className: 'w-100',
        alt: "other"
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      md: 7
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CustomLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
      url: "/post/".concat(other.slug),
      className: 'text-dark stretched-link',
      navlink: false,
      content: other.title
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, other.date)));
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Loader"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_2__["default"])(Post, ['getPage', 'post', 'others']));

/***/ }),

/***/ "./Resources/assets/js/pages/PressRelease/index.js":
/*!*********************************************************!*\
  !*** ./Resources/assets/js/pages/PressRelease/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");







var PressRelease = function PressRelease(_ref) {
  var translate = _ref.translate,
      posts = _ref.posts;
  return posts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    className: 'press-release',
    head: {
      title: translate('press_releases') + ' | ' + translate('republic_of_artsakh')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('press_releases'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 4,
      className: 'mb-3',
      key: post.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: 'h-100'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
      variant: "top",
      src: post.image
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, null, post.short_description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CustomLink"], {
      url: "/post/".concat(post.slug),
      className: 'stretched-link',
      navlink: false
    }))));
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Loader"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(PressRelease, ['posts']), ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Search/components/Result.js":
/*!***************************************************************!*\
  !*** ./Resources/assets/js/pages/Search/components/Result.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");





var Result = function Result(_ref) {
  var translate = _ref.translate;
  var noResult =
  /*#__PURE__*/

  /* no result */
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: 'text-center py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('no_result')));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('search_title'))), noResult, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    className: 'mb-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: 'h-100'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: '/',
    className: 'stretched-link'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    className: 'mb-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: 'h-100'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: '/',
    className: 'stretched-link'
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(Result, ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Search/index.js":
/*!***************************************************!*\
  !*** ./Resources/assets/js/pages/Search/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Result */ "./Resources/assets/js/pages/Search/components/Result.js");





var Search = function Search(_ref) {
  var getPage = _ref.getPage;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPage('posts', {
      type: 'press'
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    className: 'search-result',
    head: {
      title: translate('search_title') + ' | ' + translate('republic_of_artsakh')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Result__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(Search, ['getPage']));

/***/ }),

/***/ "./Resources/assets/js/pages/Sessions/index.js":
/*!*****************************************************!*\
  !*** ./Resources/assets/js/pages/Sessions/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");







var Sessions = function Sessions(_ref) {
  var posts = _ref.posts,
      translate = _ref.translate;
  return posts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    className: 'press-release',
    head: {
      title: translate('sc_sessions') + ' | ' + translate('republic_of_artsakh')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('sc_sessions'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 4,
      className: 'mb-3',
      key: post.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: 'h-100'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
      variant: "top",
      src: post.image
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, null, post.short_description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CustomLink"], {
      url: "/post/".concat(post.slug),
      className: 'stretched-link',
      navlink: false
    }))));
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Loader"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(Sessions, ['posts']), ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Speeches/index.js":
/*!*****************************************************!*\
  !*** ./Resources/assets/js/pages/Speeches/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");







var Speeches = function Speeches(_ref) {
  var posts = _ref.posts,
      translate = _ref.translate;
  return posts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    className: 'press-release',
    head: {
      title: translate('speeches_and_messages') + ' | ' + translate('republic_of_artsakh')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('speeches_and_messages'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 4,
      className: 'mb-3',
      key: post.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: 'h-100'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img, {
      variant: "top",
      src: post.image
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, null, post.short_description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CustomLink"], {
      url: "/post/".concat(post.slug),
      className: 'stretched-link',
      navlink: false
    }))));
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Loader"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(Speeches, ['posts']), ['translate']));

/***/ }),

/***/ "./Resources/assets/js/pages/Video/index.js":
/*!**************************************************!*\
  !*** ./Resources/assets/js/pages/Video/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./Resources/assets/js/components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/consumers/DataConsumer */ "./Resources/assets/js/context/consumers/DataConsumer.js");
/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player/youtube */ "./node_modules/react-player/youtube.js");
/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player_youtube__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/consumers/LanguageConsumer */ "./Resources/assets/js/context/consumers/LanguageConsumer.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Loader */ "./Resources/assets/js/components/Loader/index.js");








var Video = function Video(_ref) {
  var videos = _ref.videos,
      translate = _ref.translate;
  return videos ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    className: 'video',
    head: {
      title: translate('Videos') + ' | ' + translate('republic_of_artsakh')
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: 'text-center py-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate('Videos'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, videos.map(function (video, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      md: 4,
      key: key,
      className: 'mb-4'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player_youtube__WEBPACK_IMPORTED_MODULE_3___default.a, {
      url: video.video_url,
      width: "100%"
    }));
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_consumers_LanguageConsumer__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_context_consumers_DataConsumer__WEBPACK_IMPORTED_MODULE_2__["default"])(Video, ['videos']), ['translate']));

/***/ })

}]);
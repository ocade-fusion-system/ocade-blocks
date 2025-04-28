/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/youtube-lite/block.json":
/*!*************************************!*\
  !*** ./src/youtube-lite/block.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ocade-blocks/youtube-lite","version":"1.0.0","category":"widgets","keywords":["ocade","youtube","lite","iframe","leger","video"],"textdomain":"ocade-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","supports":{"anchor":true,"align":["wide","full"],"defaultAlign":"wide"},"attributes":{"preview":{"type":"boolean","default":false},"videoId":{"type":"string"},"customThumbnail":{"type":"string","default":""},"videoAlt":{"type":"string","default":""},"lazyLoad":{"type":"boolean","default":false},"videoTitle":{"type":"string","default":""},"videoDescription":{"type":"string","default":""},"videoDateCreation":{"type":"string","default":""},"urlPageSite":{"type":"string","default":""}},"example":{"attributes":{"preview":true}}}');

/***/ }),

/***/ "./src/youtube-lite/edit-block.js":
/*!****************************************!*\
  !*** ./src/youtube-lite/edit-block.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Block)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Block(props) {
  const {
    blockProps
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  });
}

/***/ }),

/***/ "./src/youtube-lite/edit-inspecteur.js":
/*!*********************************************!*\
  !*** ./src/youtube-lite/edit-inspecteur.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inspecteur)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);





function Inspecteur({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    videoId,
    customThumbnail,
    videoAlt,
    lazyLoading,
    videoTitle,
    videoDescription,
    videoDateCreation,
    urlPageSite
  } = attributes;

  // ✅ Définir la date du jour si non encore définie
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!videoDateCreation) {
      const today = new Date().toISOString().split("T")[0];
      setAttributes({
        videoDateCreation: today
      });
    }
  }, []);

  // ✅ Récupération automatique du slug de la page (si possible)
  const {
    postSlug,
    siteUrl
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const post = select("core/editor").getCurrentPost();
    const site = select("core").getSite();
    return {
      postSlug: post?.slug || "",
      siteUrl: site?.url || ""
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!urlPageSite && postSlug && siteUrl) {
      const fullUrl = siteUrl.replace(/\/$/, "") + "/" + postSlug;
      setAttributes({
        urlPageSite: fullUrl
      });
    }
  }, [postSlug, siteUrl]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Vidéo YouTube",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "ID de la vidéo YouTube",
    value: videoId,
    onChange: value => setAttributes({
      videoId: value
    }),
    help: "https://www.youtube.com/watch?v=dQw4w9WgXcQ → l’ID est : dQw4w9WgXcQ"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Chargement différé",
    checked: lazyLoading,
    onChange: value => setAttributes({
      lazyLoading: value
    }),
    help: "Activez si la vidéo est en dehors de la zone visible initialement."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => setAttributes({
      customThumbnail: media.url
    }),
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: open,
      isSecondary: true,
      style: {
        marginTop: "1rem"
      }
    }, customThumbnail ? "Modifier l’image personnalisée" : "Choisir une image personnalisée")
  }), customThumbnail && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: "10px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: customThumbnail,
    alt: "Miniature personnalis\xE9e",
    style: {
      width: "100%",
      borderRadius: 4
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      customThumbnail: ""
    }),
    isLink: true,
    isDestructive: true,
    style: {
      marginBottom: "2rem"
    }
  }, "Supprimer l’image")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Texte alternatif",
    value: videoAlt,
    onChange: value => setAttributes({
      videoAlt: value
    }),
    help: "Texte alternatif pour l\u2019image personnalis\xE9e."
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "D\xE9tails de la vid\xE9o",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Titre de la vid\xE9o",
    value: videoTitle,
    onChange: value => setAttributes({
      videoTitle: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: "Description",
    value: videoDescription,
    onChange: value => setAttributes({
      videoDescription: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: "1rem"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    style: {
      display: "block",
      marginBottom: "8px"
    }
  }, "Date de cr\xE9ation"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {
    currentDate: videoDateCreation,
    onChange: date => {
      const formatted = new Date(date).toISOString().split("T")[0];
      setAttributes({
        videoDateCreation: formatted
      });
    },
    __nextRemoveHelpButton: true,
    __nextRemoveResetButton: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "URL de la page sur le site",
    value: urlPageSite,
    onChange: value => setAttributes({
      urlPageSite: value
    }),
    help: "Par d\xE9faut, cela reprend le slug de la page actuelle."
  })));
}

/***/ }),

/***/ "./src/youtube-lite/edit-toolbar.js":
/*!******************************************!*\
  !*** ./src/youtube-lite/edit-toolbar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toolbar)
/* harmony export */ });
function Toolbar() {
  return null;
}

/***/ }),

/***/ "./src/youtube-lite/edit.js":
/*!**********************************!*\
  !*** ./src/youtube-lite/edit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-toolbar */ "./src/youtube-lite/edit-toolbar.js");
/* harmony import */ var _edit_inspecteur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-inspecteur */ "./src/youtube-lite/edit-inspecteur.js");
/* harmony import */ var _edit_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-block */ "./src/youtube-lite/edit-block.js");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.svg */ "./src/youtube-lite/icon.svg");






function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    preview
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  if (preview) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "Preview",
    width: "360",
    height: "360"
  }));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    blockProps,
    attributes,
    setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_inspecteur__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blockProps,
    attributes,
    setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blockProps,
    attributes,
    setAttributes
  }));
}

/***/ }),

/***/ "./src/youtube-lite/icon.svg":
/*!***********************************!*\
  !*** ./src/youtube-lite/icon.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _path, _path2, _g, _path3, _path4, _path5;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 500,
    height: 500,
    viewBox: "0 0 375 375"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "icon_svg__a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M17.25-13.137h343.238a17.248 17.248 0 0 1 17.25 17.25v373.48c0 4.575-1.816 8.962-5.05 12.196a17.26 17.26 0 0 1-12.2 5.055H17.25c-4.574 0-8.96-1.82-12.2-5.055A17.25 17.25 0 0 1 0 377.594V4.114a17.25 17.25 0 0 1 17.25-17.25m0 0"
  })))), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M-37.5-37.5h450v450h-450z"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M-37.5-37.5h450v450h-450z"
  })), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    clipPath: "url(#icon_svg__a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M-37.5-37.5h450v450h-450z"
  }))), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M110.19 141.156c0 2.45-.164 4.867-.484 7.25a133 133 0 0 1-1.157 7.047q-.187.909-.562 2.953a172 172 0 0 1-.875 4.563 85 85 0 0 1-1.25 5.187q-.736 2.672-1.625 4.875-.878 2.205-1.953 3.64c-.711.946-1.469 1.423-2.282 1.423q-1.22 0-2.359-1.219c-.75-.813-1.445-1.836-2.078-3.078a33 33 0 0 1-1.734-4.172 66 66 0 0 1-1.375-4.5q-.58-2.169-.985-3.969a186 186 0 0 1-.578-2.719c-.156.532-.414 1.383-.766 2.547a66 66 0 0 1-1.312 3.907 78 78 0 0 1-1.766 4.421 43 43 0 0 1-2.047 4.157q-1.065 1.891-2.218 3.11c-.774.812-1.547 1.218-2.328 1.218q-1.517-.001-2.688-1.344-1.158-1.343-1.953-3.453-.783-2.109-1.344-4.703a59 59 0 0 1-.86-5.125c-.198-1.688-.359-3.258-.484-4.719a107 107 0 0 1-.234-3.5c-.125-1.945-.242-3.86-.344-5.734q-.14-2.811-.14-5.735 0-1.03.047-2.828.06-1.811.453-3.547.404-1.748 1.234-3.062.825-1.31 2.406-1.438 1.341-.045 2.313 1.11.983 1.158 1.656 3.078.668 1.923 1.063 4.281.404 2.344.609 4.547.216 2.191.281 4.031.06 1.829 0 2.672l-.062 1.594q.186-.796.64-2.5.468-1.719 1.141-3.875c.445-1.445.922-2.93 1.422-4.453a42 42 0 0 1 1.625-4.188q.857-1.887 1.703-3.14c.57-.832 1.125-1.27 1.656-1.313q1.032-.059 1.969 1.219.95 1.283 1.719 3.328a41 41 0 0 1 1.375 4.547q.608 2.503 1.062 4.86a59 59 0 0 1 .703 4.234q.247 1.891.375 2.687.062-.982.297-3.078.247-2.109.672-4.703.435-2.592 1.078-5.313a41 41 0 0 1 1.485-4.968q.856-2.262 1.953-3.704 1.106-1.436 2.453-1.437 1.53.001 2.437 1.016.922 1.002 1.344 2.437.436 1.441.547 3 .124 1.546.125 2.578M124.243 178.766q-3.128-.002-5.453-1.657-2.314-1.638-3.906-4.203c-1.055-1.707-1.844-3.61-2.375-5.703a25.5 25.5 0 0 1-.782-6.203q-.002-3.233.782-6.672.796-3.45 2.437-6.297 1.653-2.841 4.219-4.64 2.56-1.796 6.11-1.797 3.42 0 5.827 1.86 2.404 1.862 3.875 4.64 1.467 2.784 2.078 6.078.61 3.3.422 6.219a34.5 34.5 0 0 1-1 6.53q-.83 3.299-2.422 5.923-1.582 2.625-4.03 4.265c-1.626 1.102-3.555 1.657-5.782 1.657m.61-27.594c-.618 0-1.157.328-1.626.984-.468.649-.855 1.438-1.156 2.375q-.457 1.409-.703 2.969-.251 1.546-.25 2.719c0 .968.086 2.027.266 3.172q.28 1.704.765 3.14.5 1.442 1.203 2.39.703.938 1.61.938.984.001 1.687-.906.703-.92 1.125-2.328c.29-.938.492-1.96.61-3.078a29 29 0 0 0 .187-3.156c0-.895-.086-1.88-.25-2.954a17.5 17.5 0 0 0-.703-3.03q-.456-1.406-1.156-2.313-.705-.922-1.61-.922M161.784 154.172q-.86.065-1.469-.156a51 51 0 0 1-1.219-.454q-.55-.247-1.093-.453a2.65 2.65 0 0 0-1.22-.156c-.823.031-1.554.258-2.187.672a7.6 7.6 0 0 0-1.703 1.531 10.7 10.7 0 0 0-1.312 2.031q-.551 1.126-.844 2.235-.188.736-.281 2.234a51 51 0 0 0-.094 3.188 93 93 0 0 0-.062 3.375c0 1.054-.04 1.886-.11 2.5a20 20 0 0 1-.312 2.281 11.6 11.6 0 0 1-.766 2.484 5.7 5.7 0 0 1-1.375 1.938q-.845.797-2.187.797-1.05 0-1.813-.61c-.5-.406-.93-.941-1.281-1.609a11.3 11.3 0 0 1-.86-2.36 26 26 0 0 1-.515-2.75 52 52 0 0 1-.266-2.921 67 67 0 0 1-.125-2.782 41 41 0 0 1 0-2.406q.03-1.107.031-1.781a109 109 0 0 0-.218-4.297 67 67 0 0 1-.14-4.312q-.002-1.343.108-2.985a10.7 10.7 0 0 1 .672-3.078c.375-.957.914-1.758 1.625-2.406q1.061-.985 2.953-.985c.696 0 1.29.227 1.782.672q.732.673 1.187 1.657.452.972.688 2.062.247 1.095.312 2.016 1.467-2.374 3.297-3.875 1.84-1.499 4.766-1.625 1.464-.06 2.906.281a8.2 8.2 0 0 1 2.625 1.094 6.4 6.4 0 0 1 1.953 1.984c.508.813.785 1.774.828 2.875q.106 1.958-1.172 3-1.281 1.034-3.11 1.094M194.081 144.156q0 1.704-.89 3.485a26 26 0 0 1-2.125 3.515 44 44 0 0 1-2.625 3.297 88 88 0 0 0-2.422 2.828q.856 1.347 2.14 3.578a60 60 0 0 1 2.438 4.735 49 49 0 0 1 1.984 4.875q.827 2.377.828 3.968 0 1.283-.797 2.36-.796 1.061-2.187 1.062-1.048 0-2.125-.89-1.065-.89-2.125-2.313a29 29 0 0 1-2.047-3.203 81 81 0 0 1-4.266-9.11 8.2 8.2 0 0 1-1.687 1.313q-.879.517-1.734 1.188 0 1.3-.094 3.61a29.5 29.5 0 0 1-.547 4.577q-.458 2.268-1.5 3.938-1.031 1.67-3.047 1.672c-1.062 0-1.883-.48-2.453-1.438q-.845-1.42-1.25-3.344a23 23 0 0 1-.453-3.906 99 99 0 0 1-.063-3.031q0-4.513.235-9.031.248-4.513.312-9.032-.002-1.042.031-2.718a47 47 0 0 1 .22-3.641q.185-1.95.546-3.953.375-2.014 1.031-3.64.669-1.624 1.735-2.626 1.076-1.014 2.61-1.015 1.09 0 1.858.828.762.832 1.22 2.11.467 1.282.671 2.874.218 1.583.313 3.14.093 1.565.093 2.907v2.125q0 .548-.03 1.625-.035 1.064-.063 2.234a70 70 0 0 0-.032 2.141q-.001.971.125 1.39.422.001 1.266-.812a36 36 0 0 0 1.984-2.11q1.139-1.294 2.453-2.718a48 48 0 0 1 2.688-2.719q1.37-1.276 2.719-2.11 1.34-.826 2.5-.827 1.217.002 1.89.86a3.1 3.1 0 0 1 .672 1.952m0 0"
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M221.795 140.484q0 1.174-.219 2.235a4.9 4.9 0 0 1-.75 1.86 3.9 3.9 0 0 1-1.469 1.265q-.924.454-2.265.453-1.518 0-2.25-.61a3.13 3.13 0 0 1-1.016-1.5 6.6 6.6 0 0 1-.265-1.921q0-1.044-.094-1.922-.094-.891-.469-1.5-.362-.61-1.328-.61-.925 0-1.5 1.407-.58 1.405-.953 3.234a29 29 0 0 0-.485 3.578q-.126 1.734-.125 2.344c.532-.082 1.04-.156 1.532-.219q.733-.094 1.593-.094.842 0 1.766.188a6.6 6.6 0 0 1 1.703.594q.796.391 1.281 1.093.499.692.5 1.735-.002 1.097-.953 1.953-.937.863-2.25 1.437-1.313.58-2.656.953-1.346.363-2.14.485.186 4.208.187 8.484 0 4.033-.188 7.938-.128 1.891-1.312 3.11-1.19 1.218-3.078 1.218-1.05-.001-1.781-.406a3.5 3.5 0 0 1-1.22-1.063 5.5 5.5 0 0 1-.765-1.516 7.5 7.5 0 0 1-.328-1.78q-.314-3.655-.5-7.345a115 115 0 0 1-.11-7.421 6 6 0 0 1-.827.062h-.829q-.738 0-1.78-.187a7.8 7.8 0 0 1-1.985-.641 5.8 5.8 0 0 1-1.61-1.125q-.67-.669-.671-1.719 0-1.341.89-2.25a7.1 7.1 0 0 1 2.14-1.5q1.25-.575 2.626-.828a35 35 0 0 1 2.406-.36v-.984q-.002-2.983.547-6.406.546-3.42 1.953-6.344 1.407-2.936 3.844-4.859 2.449-1.922 6.234-1.922 2.373.001 4.078 1.016a8.54 8.54 0 0 1 2.813 2.625q1.108 1.611 1.594 3.656c.32 1.367.484 2.734.484 4.11m0 0"
  })), _path5 || (_path5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M230.961 140q0 3.298-.28 6.625a83 83 0 0 0-.266 6.687c0 2.887.085 5.778.265 8.672q.281 4.33.281 8.735-.001 1.096-.125 2.468a9.3 9.3 0 0 1-.578 2.532 4.9 4.9 0 0 1-1.375 1.953q-.926.797-2.437.797-1.47 0-2.547-1.438-1.065-1.436-1.766-3.656-.703-2.231-1.156-4.984a66 66 0 0 1-.672-5.344c-.148-1.727-.25-3.313-.312-4.75a92 92 0 0 1-.078-3.219c0-.77.023-1.883.078-3.344a65 65 0 0 1 .39-4.765q.312-2.56.828-5.219.53-2.655 1.375-4.828.856-2.169 2.047-3.547c.801-.914 1.75-1.375 2.844-1.375q1.343 0 2.047.89.702.893 1 2.141.31 1.254.375 2.625.06 1.377.062 2.344M247.206 178.766q-3.128-.002-5.453-1.657-2.314-1.638-3.906-4.203c-1.055-1.707-1.844-3.61-2.375-5.703a25.5 25.5 0 0 1-.781-6.203c0-2.156.257-4.379.78-6.672q.798-3.45 2.438-6.297 1.653-2.841 4.22-4.64 2.558-1.796 6.108-1.797 3.422 0 5.829 1.86 2.403 1.862 3.875 4.64 1.466 2.784 2.078 6.078.61 3.3.422 6.219a34.5 34.5 0 0 1-1 6.53q-.83 3.299-2.422 5.923-1.582 2.625-4.032 4.265c-1.625 1.102-3.554 1.657-5.78 1.657m.61-27.594c-.618 0-1.157.328-1.625.984-.47.649-.856 1.438-1.157 2.375q-.457 1.409-.703 2.969-.251 1.546-.25 2.719-.002 1.453.266 3.172.28 1.704.765 3.14.5 1.442 1.204 2.39.701.938 1.609.938.984.001 1.687-.906.704-.92 1.125-2.328c.29-.938.493-1.96.61-3.078a29 29 0 0 0 .187-3.156c0-.895-.086-1.88-.25-2.954a17.5 17.5 0 0 0-.703-3.03c-.305-.938-.687-1.708-1.156-2.313q-.705-.922-1.61-.922M293.966 177.797q-1.957-.002-3.516-2.078-1.546-2.075-2.718-4.969a46 46 0 0 1-1.922-5.953q-.75-3.062-1.125-5.078a62 62 0 0 1-1.313 3 72 72 0 0 1-1.89 3.718 80 80 0 0 1-2.297 3.938 32 32 0 0 1-2.532 3.578c-.875 1.055-1.75 1.906-2.625 2.563q-1.312.967-2.53.968c-1.095 0-2.063-.523-2.907-1.578q-1.255-1.591-2.11-4.156c-.562-1.707-1.039-3.598-1.421-5.672a75 75 0 0 1-.891-6.234q-.3-3.106-.422-5.797a94 94 0 0 1-.125-4.344q-.002-1.514.156-2.922.153-1.405.61-2.5.451-1.106 1.344-1.75.89-.64 2.343-.64 1.406.002 2.407 1.046 1.013 1.031 1.687 2.72c.445 1.116.813 2.374 1.094 3.78q.435 2.112.672 4.282.247 2.157.343 4.203.094 2.05.157 3.515a46 46 0 0 1 1.03-3.14c.446-1.25.938-2.57 1.47-3.969q.796-2.108 1.734-4.187a47 47 0 0 1 1.89-3.72c.633-1.1 1.255-2 1.86-2.687.613-.695 1.207-1.047 1.781-1.047h.063c.726 0 1.437.352 2.125 1.047q1.043 1.033 2.015 2.688.985 1.641 1.829 3.75a80 80 0 0 1 1.593 4.281q.732 2.158 1.282 4.203.545 2.051.921 3.516.06-1.781.172-4 .125-2.234.453-4.485a39 39 0 0 1 .922-4.406q.593-2.138 1.438-3.812.855-1.687 2.11-2.688c.831-.664 1.8-1 2.905-1 1.133 0 1.977.399 2.532 1.188q.826 1.19.828 2.89 0 1.845-.469 4.891a96 96 0 0 1-1.25 6.625 117 117 0 0 1-1.86 7.203q-1.066 3.627-2.343 6.563-1.283 2.922-2.688 4.796-1.406 1.86-2.812 1.86M168.163 212.312q-.001 1.347-.125 3.813a80 80 0 0 1-.454 5.437 70 70 0 0 1-.953 6.047q-.609 3.082-1.593 5.578c-.649 1.668-1.438 3.043-2.375 4.125q-1.394 1.611-3.344 1.61a5.8 5.8 0 0 1-3.375-1.063 12.7 12.7 0 0 1-2.735-2.625 21.5 21.5 0 0 1-2.14-3.328 44 44 0 0 1-1.516-3.234q-1.3-3.106-2.578-6.125a145 145 0 0 1-2.437-6.14v1.702c0 1.75-.012 3.493-.032 5.22a41 41 0 0 1-.39 5.155q-.129 1.05-.282 2.422a25 25 0 0 1-.468 2.703q-.3 1.346-.875 2.516-.58 1.159-1.547 1.703-.564.316-1.016.375a9 9 0 0 0-1 .172h-.187q-1.407 0-2.39-.938-.974-.948-1.642-2.437c-.449-1-.808-2.117-1.078-3.36a43 43 0 0 1-.609-3.671 44 44 0 0 1-.266-3.328 60 60 0 0 1-.062-2.438c0-.937.039-2.312.125-4.125q.123-2.717.515-6.016c.27-2.195.618-4.453 1.047-6.765q.64-3.48 1.672-6.328 1.031-2.843 2.5-4.64c.977-1.196 2.117-1.798 3.422-1.798q1.889.002 3.39 1.469 1.499 1.453 2.657 3.469a27 27 0 0 1 1.953 4.218 271 271 0 0 0 1.344 3.657 420 420 0 0 1 2 5.718q.982 2.831 1.906 5.766.06.128.234.672.187.55.438 1.219.235.737.61 1.656-.001-.797-.032-1.125a6 6 0 0 1-.031-.61v-2.062a231 231 0 0 1-.094-4.031 227 227 0 0 1-.031-3.969c0-.562.008-1.351.031-2.375q.03-1.531.188-3.266c.101-1.156.254-2.32.453-3.5.207-1.187.504-2.257.89-3.218q.575-1.436 1.453-2.344a2.9 2.9 0 0 1 2.172-.922q1.53 0 2.625 1.172 1.108 1.16 1.828 2.953.734 1.8 1.157 4.031.435 2.22.672 4.36c.164 1.43.27 2.75.312 3.968q.061 1.831.063 2.875M206.148 227.203c0 2.524-.618 4.7-1.844 6.531a15.3 15.3 0 0 1-4.672 4.532q-2.83 1.763-6.281 2.609c-2.305.57-4.555.86-6.75.86q-2.439 0-5.188-.704a18.2 18.2 0 0 1-5.078-2.14 12.7 12.7 0 0 1-3.844-3.625q-1.516-2.203-1.515-5.125c0-1.594.265-3.086.797-4.485a15.6 15.6 0 0 1 2.156-3.906 17.4 17.4 0 0 1 3.172-3.219 24 24 0 0 1 3.828-2.437 12.6 12.6 0 0 1-2.969-1.39 12.8 12.8 0 0 1-2.531-2.142q-1.096-1.231-1.766-2.75a7.9 7.9 0 0 1-.672-3.234q0-3.357 1.797-5.828 1.81-2.482 4.547-4.063a22 22 0 0 1 5.953-2.359q3.2-.764 6.016-.766 2.138.001 4.328.5 2.202.488 4 1.579a9.15 9.15 0 0 1 2.969 2.875q1.156 1.77 1.156 4.265-.001 3.91-2.234 6.875a17.5 17.5 0 0 1-5.516 4.797q2.138.548 4 1.766a14.2 14.2 0 0 1 3.234 2.906 13 13 0 0 1 2.141 3.75q.764 2.08.766 4.328m-11.672-23.016q-.002-.733-.453-1.156a4 4 0 0 0-1.094-.703 4.7 4.7 0 0 0-1.344-.36 9 9 0 0 0-1.187-.093c-.493 0-1.125.062-1.907.187a10.2 10.2 0 0 0-2.25.61 6.2 6.2 0 0 0-1.89 1.125q-.797.704-.797 1.672-.002 1.05.547 1.812.543.75 1.375 1.313c.55.367 1.14.64 1.765.828q.95.27 1.813.328.608-.374 1.516-.953.918-.575 1.796-1.344a10 10 0 0 0 1.5-1.578q.61-.825.61-1.688m1.656 23.391c0-.976-.227-1.863-.672-2.656a6.8 6.8 0 0 0-1.75-2.047q-1.064-.856-2.375-1.438a12.5 12.5 0 0 0-2.594-.828q-1.22.551-2.562 1.375a14.4 14.4 0 0 0-2.484 1.938q-1.127 1.094-1.86 2.406a5.8 5.8 0 0 0-.719 2.828q-.002 1.112.782 1.844.795.721 1.89 1.156 1.108.422 2.297.61c.79.117 1.453.171 1.984.171.813 0 1.696-.085 2.657-.265a9.2 9.2 0 0 0 2.625-.922 6.2 6.2 0 0 0 1.984-1.672c.531-.695.797-1.531.797-2.5M244.725 212.312q-.001 1.347-.125 3.813a80 80 0 0 1-.454 5.437 70 70 0 0 1-.953 6.047q-.609 3.082-1.593 5.578c-.649 1.668-1.438 3.043-2.375 4.125q-1.394 1.611-3.344 1.61a5.8 5.8 0 0 1-3.375-1.063 12.7 12.7 0 0 1-2.735-2.625 21.5 21.5 0 0 1-2.14-3.328 44 44 0 0 1-1.516-3.234q-1.3-3.106-2.578-6.125a145 145 0 0 1-2.437-6.14v1.702c0 1.75-.012 3.493-.032 5.22a41 41 0 0 1-.39 5.155q-.129 1.05-.282 2.422a25 25 0 0 1-.468 2.703q-.3 1.346-.875 2.516-.58 1.159-1.547 1.703-.563.316-1.016.375a9 9 0 0 0-1 .172h-.187q-1.407 0-2.39-.938-.974-.948-1.642-2.437c-.449-1-.808-2.117-1.078-3.36a43 43 0 0 1-.609-3.671 44 44 0 0 1-.266-3.328 60 60 0 0 1-.062-2.438c0-.937.039-2.312.125-4.125q.123-2.717.515-6.016c.27-2.195.618-4.453 1.047-6.765q.64-3.48 1.672-6.328 1.031-2.843 2.5-4.64c.977-1.196 2.117-1.798 3.422-1.798q1.889.002 3.39 1.469 1.499 1.453 2.657 3.469a27 27 0 0 1 1.953 4.218 271 271 0 0 0 1.344 3.657 420 420 0 0 1 2 5.718q.982 2.831 1.906 5.766.06.128.234.672.187.55.438 1.219.235.737.61 1.656-.001-.797-.032-1.125a6 6 0 0 1-.031-.61v-2.062a231 231 0 0 1-.094-4.031 227 227 0 0 1-.031-3.969c0-.562.008-1.351.031-2.375q.03-1.531.188-3.266c.101-1.156.254-2.32.453-3.5.207-1.187.504-2.257.89-3.218q.575-1.436 1.453-2.344a2.9 2.9 0 0 1 2.172-.922q1.53 0 2.625 1.172 1.108 1.16 1.828 2.953.734 1.8 1.157 4.031.435 2.22.672 4.36c.164 1.43.27 2.75.312 3.968q.061 1.831.063 2.875m0 0"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgMzc1IDM3NC45OTk5OTEiIGhlaWdodD0iNTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2ZXJzaW9uPSIxLjAiPjxkZWZzPjxnLz48Y2xpcFBhdGggaWQ9IjliZjBhZjJmZGEiPjxwYXRoIGQ9Ik0gMTcuMjUgLTEzLjEzNjcxOSBMIDM2MC40ODgyODEgLTEzLjEzNjcxOSBDIDM2NS4wNjI1IC0xMy4xMzY3MTkgMzY5LjQ1MzEyNSAtMTEuMzIwMzEyIDM3Mi42ODc1IC04LjA4NTkzOCBDIDM3NS45MjE4NzUgLTQuODUxNTYyIDM3Ny43MzgyODEgLTAuNDY0ODQ0IDM3Ny43MzgyODEgNC4xMTMyODEgTCAzNzcuNzM4MjgxIDM3Ny41OTM3NSBDIDM3Ny43MzgyODEgMzgyLjE2Nzk2OSAzNzUuOTIxODc1IDM4Ni41NTQ2ODggMzcyLjY4NzUgMzg5Ljc4OTA2MiBDIDM2OS40NTMxMjUgMzkzLjAyMzQzOCAzNjUuMDYyNSAzOTQuODQzNzUgMzYwLjQ4ODI4MSAzOTQuODQzNzUgTCAxNy4yNSAzOTQuODQzNzUgQyAxMi42NzU3ODEgMzk0Ljg0Mzc1IDguMjg5MDYyIDM5My4wMjM0MzggNS4wNTA3ODEgMzg5Ljc4OTA2MiBDIDEuODE2NDA2IDM4Ni41NTQ2ODggMCAzODIuMTY3OTY5IDAgMzc3LjU5Mzc1IEwgMCA0LjExMzI4MSBDIDAgLTAuNDY0ODQ0IDEuODE2NDA2IC00Ljg1MTU2MiA1LjA1MDc4MSAtOC4wODU5MzggQyA4LjI4OTA2MiAtMTEuMzIwMzEyIDEyLjY3NTc4MSAtMTMuMTM2NzE5IDE3LjI1IC0xMy4xMzY3MTkgWiBNIDE3LjI1IC0xMy4xMzY3MTkgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjwvZGVmcz48cmVjdCB4PSItMzcuNSIgd2lkdGg9IjQ1MCIgZmlsbD0iI2ZmZmZmZiIgeT0iLTM3LjQ5OTk5OSIgaGVpZ2h0PSI0NDkuOTk5OTg5IiBmaWxsLW9wYWNpdHk9IjEiLz48cmVjdCB4PSItMzcuNSIgd2lkdGg9IjQ1MCIgZmlsbD0iI2ZmZmZmZiIgeT0iLTM3LjQ5OTk5OSIgaGVpZ2h0PSI0NDkuOTk5OTg5IiBmaWxsLW9wYWNpdHk9IjEiLz48ZyBjbGlwLXBhdGg9InVybCgjOWJmMGFmMmZkYSkiPjxyZWN0IHg9Ii0zNy41IiB3aWR0aD0iNDUwIiBmaWxsPSIjMDAwMDAwIiB5PSItMzcuNDk5OTk5IiBoZWlnaHQ9IjQ0OS45OTk5ODkiIGZpbGwtb3BhY2l0eT0iMSIvPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwLjgxNDk1OSwgMTc2Ljk5OTk4OCkiPjxnPjxwYXRoIGQ9Ik0gMzkuMzc1IC0zNS44NDM3NSBDIDM5LjM3NSAtMzMuMzk0NTMxIDM5LjIxMDkzOCAtMzAuOTc2NTYyIDM4Ljg5MDYyNSAtMjguNTkzNzUgQyAzOC41NjY0MDYgLTI2LjIxODc1IDM4LjE3OTY4OCAtMjMuODY3MTg4IDM3LjczNDM3NSAtMjEuNTQ2ODc1IEMgMzcuNjA5Mzc1IC0yMC45NDE0MDYgMzcuNDIxODc1IC0xOS45NTcwMzEgMzcuMTcxODc1IC0xOC41OTM3NSBDIDM2LjkyOTY4OCAtMTcuMjI2NTYyIDM2LjY0MDYyNSAtMTUuNzA3MDMxIDM2LjI5Njg3NSAtMTQuMDMxMjUgQyAzNS45NTMxMjUgLTEyLjM2MzI4MSAzNS41MzUxNTYgLTEwLjYzMjgxMiAzNS4wNDY4NzUgLTguODQzNzUgQyAzNC41NTQ2ODggLTcuMDYyNSAzNC4wMTU2MjUgLTUuNDM3NSAzMy40MjE4NzUgLTMuOTY4NzUgQyAzMi44MzU5MzggLTIuNSAzMi4xODc1IC0xLjI4NTE1NiAzMS40Njg3NSAtMC4zMjgxMjUgQyAzMC43NTc4MTIgMC42MTcxODggMzAgMS4wOTM3NSAyOS4xODc1IDEuMDkzNzUgQyAyOC4zNzUgMS4wOTM3NSAyNy41ODU5MzggMC42ODc1IDI2LjgyODEyNSAtMC4xMjUgQyAyNi4wNzgxMjUgLTAuOTM3NSAyNS4zODI4MTIgLTEuOTYwOTM4IDI0Ljc1IC0zLjIwMzEyNSBDIDI0LjEyNSAtNC40NDE0MDYgMjMuNTQ2ODc1IC01LjgzMjAzMSAyMy4wMTU2MjUgLTcuMzc1IEMgMjIuNDg0Mzc1IC04LjkyNTc4MSAyMi4wMjM0MzggLTEwLjQyNTc4MSAyMS42NDA2MjUgLTExLjg3NSBDIDIxLjI1MzkwNiAtMTMuMzIwMzEyIDIwLjkyNTc4MSAtMTQuNjQ0NTMxIDIwLjY1NjI1IC0xNS44NDM3NSBDIDIwLjM5NDUzMSAtMTcuMDM5MDYyIDIwLjIwMzEyNSAtMTcuOTQ1MzEyIDIwLjA3ODEyNSAtMTguNTYyNSBDIDE5LjkyMTg3NSAtMTguMDMxMjUgMTkuNjY0MDYyIC0xNy4xNzk2ODggMTkuMzEyNSAtMTYuMDE1NjI1IEMgMTguOTY4NzUgLTE0Ljg1OTM3NSAxOC41MzEyNSAtMTMuNTU0Njg4IDE4IC0xMi4xMDkzNzUgQyAxNy40NzY1NjIgLTEwLjY3MTg3NSAxNi44OTA2MjUgLTkuMTk1MzEyIDE2LjIzNDM3NSAtNy42ODc1IEMgMTUuNTg1OTM4IC02LjE4NzUgMTQuOTA2MjUgLTQuODAwNzgxIDE0LjE4NzUgLTMuNTMxMjUgQyAxMy40NzY1NjIgLTIuMjY5NTMxIDEyLjczODI4MSAtMS4yMzQzNzUgMTEuOTY4NzUgLTAuNDIxODc1IEMgMTEuMTk1MzEyIDAuMzkwNjI1IDEwLjQyMTg3NSAwLjc5Njg3NSA5LjY0MDYyNSAwLjc5Njg3NSBDIDguNjI4OTA2IDAuNzk2ODc1IDcuNzM0Mzc1IDAuMzQ3NjU2IDYuOTUzMTI1IC0wLjU0Njg3NSBDIDYuMTc5Njg4IC0xLjQ0MTQwNiA1LjUzMTI1IC0yLjU5Mzc1IDUgLTQgQyA0LjQ3NjU2MiAtNS40MDYyNSA0LjAzMTI1IC02Ljk3MjY1NiAzLjY1NjI1IC04LjcwMzEyNSBDIDMuMjg5MDYyIC0xMC40Mjk2ODggMy4wMDM5MDYgLTEyLjE0MDYyNSAyLjc5Njg3NSAtMTMuODI4MTI1IEMgMi41OTc2NTYgLTE1LjUxNTYyNSAyLjQzNzUgLTE3LjA4NTkzOCAyLjMxMjUgLTE4LjU0Njg3NSBDIDIuMTk1MzEyIC0yMC4wMTU2MjUgMi4xMTcxODggLTIxLjE3OTY4OCAyLjA3ODEyNSAtMjIuMDQ2ODc1IEMgMS45NTMxMjUgLTIzLjk5MjE4OCAxLjgzNTkzOCAtMjUuOTA2MjUgMS43MzQzNzUgLTI3Ljc4MTI1IEMgMS42NDA2MjUgLTI5LjY1NjI1IDEuNTkzNzUgLTMxLjU2NjQwNiAxLjU5Mzc1IC0zMy41MTU2MjUgQyAxLjU5Mzc1IC0zNC4yMDMxMjUgMS42MDkzNzUgLTM1LjE0NDUzMSAxLjY0MDYyNSAtMzYuMzQzNzUgQyAxLjY3OTY4OCAtMzcuNTUwNzgxIDEuODMyMDMxIC0zOC43MzQzNzUgMi4wOTM3NSAtMzkuODkwNjI1IEMgMi4zNjMyODEgLTQxLjA1NDY4OCAyLjc3MzQzOCAtNDIuMDc4MTI1IDMuMzI4MTI1IC00Mi45NTMxMjUgQyAzLjg3ODkwNiAtNDMuODI4MTI1IDQuNjc5Njg4IC00NC4zMDQ2ODggNS43MzQzNzUgLTQ0LjM5MDYyNSBDIDYuNjI4OTA2IC00NC40MjE4NzUgNy4zOTg0MzggLTQ0LjA1MDc4MSA4LjA0Njg3NSAtNDMuMjgxMjUgQyA4LjcwMzEyNSAtNDIuNTA3ODEyIDkuMjUzOTA2IC00MS40ODQzNzUgOS43MDMxMjUgLTQwLjIwMzEyNSBDIDEwLjE0ODQzOCAtMzguOTIxODc1IDEwLjUwMzkwNiAtMzcuNDkyMTg4IDEwLjc2NTYyNSAtMzUuOTIxODc1IEMgMTEuMDM1MTU2IC0zNC4zNTkzNzUgMTEuMjM4MjgxIC0zMi44NDM3NSAxMS4zNzUgLTMxLjM3NSBDIDExLjUxOTUzMSAtMjkuOTE0MDYyIDExLjYxMzI4MSAtMjguNTcwMzEyIDExLjY1NjI1IC0yNy4zNDM3NSBDIDExLjY5NTMxMiAtMjYuMTI1IDExLjY5NTMxMiAtMjUuMjM0Mzc1IDExLjY1NjI1IC0yNC42NzE4NzUgTCAxMS41OTM3NSAtMjMuMDc4MTI1IEMgMTEuNzE4NzUgLTIzLjYwOTM3NSAxMS45Mjk2ODggLTI0LjQ0MTQwNiAxMi4yMzQzNzUgLTI1LjU3ODEyNSBDIDEyLjU0Njg3NSAtMjYuNzIyNjU2IDEyLjkyNTc4MSAtMjguMDE1NjI1IDEzLjM3NSAtMjkuNDUzMTI1IEMgMTMuODIwMzEyIC0zMC44OTg0MzggMTQuMjk2ODc1IC0zMi4zODI4MTIgMTQuNzk2ODc1IC0zMy45MDYyNSBDIDE1LjMwNDY4OCAtMzUuNDM3NSAxNS44NDc2NTYgLTM2LjgzMjAzMSAxNi40MjE4NzUgLTM4LjA5Mzc1IEMgMTYuOTkyMTg4IC0zOS4zNTE1NjIgMTcuNTYyNSAtNDAuMzk4NDM4IDE4LjEyNSAtNDEuMjM0Mzc1IEMgMTguNjk1MzEyIC00Mi4wNjY0MDYgMTkuMjUgLTQyLjUwMzkwNiAxOS43ODEyNSAtNDIuNTQ2ODc1IEMgMjAuNDY4NzUgLTQyLjU4NTkzOCAyMS4xMjUgLTQyLjE3OTY4OCAyMS43NSAtNDEuMzI4MTI1IEMgMjIuMzgyODEyIC00MC40NzI2NTYgMjIuOTU3MDMxIC0zOS4zNjMyODEgMjMuNDY4NzUgLTM4IEMgMjMuOTc2NTYyIC0zNi42MzI4MTIgMjQuNDM3NSAtMzUuMTE3MTg4IDI0Ljg0Mzc1IC0zMy40NTMxMjUgQyAyNS4yNSAtMzEuNzg1MTU2IDI1LjYwMTU2MiAtMzAuMTY0MDYyIDI1LjkwNjI1IC0yOC41OTM3NSBDIDI2LjIxODc1IC0yNy4wMzEyNSAyNi40NTMxMjUgLTI1LjYxNzE4OCAyNi42MDkzNzUgLTI0LjM1OTM3NSBDIDI2Ljc3MzQzOCAtMjMuMDk3NjU2IDI2Ljg5ODQzOCAtMjIuMjAzMTI1IDI2Ljk4NDM3NSAtMjEuNjcxODc1IEMgMjcuMDIzNDM4IC0yMi4zMjgxMjUgMjcuMTI1IC0yMy4zNTE1NjIgMjcuMjgxMjUgLTI0Ljc1IEMgMjcuNDQ1MzEyIC0yNi4xNTYyNSAyNy42NzE4NzUgLTI3LjcyMjY1NiAyNy45NTMxMjUgLTI5LjQ1MzEyNSBDIDI4LjI0MjE4OCAtMzEuMTc5Njg4IDI4LjYwMTU2MiAtMzIuOTUzMTI1IDI5LjAzMTI1IC0zNC43NjU2MjUgQyAyOS40NTcwMzEgLTM2LjU3ODEyNSAyOS45NTMxMjUgLTM4LjIzNDM3NSAzMC41MTU2MjUgLTM5LjczNDM3NSBDIDMxLjA4NTkzOCAtNDEuMjQyMTg4IDMxLjczODI4MSAtNDIuNDc2NTYyIDMyLjQ2ODc1IC00My40Mzc1IEMgMzMuMjA3MDMxIC00NC4zOTQ1MzEgMzQuMDIzNDM4IC00NC44NzUgMzQuOTIxODc1IC00NC44NzUgQyAzNS45NDE0MDYgLTQ0Ljg3NSAzNi43NTM5MDYgLTQ0LjUzNTE1NiAzNy4zNTkzNzUgLTQzLjg1OTM3NSBDIDM3Ljk3MjY1NiAtNDMuMTkxNDA2IDM4LjQyMTg3NSAtNDIuMzc4OTA2IDM4LjcwMzEyNSAtNDEuNDIxODc1IEMgMzguOTkyMTg4IC00MC40NjA5MzggMzkuMTc1NzgxIC0zOS40NjA5MzggMzkuMjUgLTM4LjQyMTg3NSBDIDM5LjMzMjAzMSAtMzcuMzkwNjI1IDM5LjM3NSAtMzYuNTMxMjUgMzkuMzc1IC0zNS44NDM3NSBaIE0gMzkuMzc1IC0zNS44NDM3NSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMC44MDU0NzcsIDE3Ni45OTk5ODgpIj48Zz48cGF0aCBkPSJNIDEzLjQzNzUgMS43NjU2MjUgQyAxMS4zNTE1NjIgMS43NjU2MjUgOS41MzUxNTYgMS4yMTA5MzggNy45ODQzNzUgMC4xMDkzNzUgQyA2LjQ0MTQwNiAtMC45ODQzNzUgNS4xNDA2MjUgLTIuMzgyODEyIDQuMDc4MTI1IC00LjA5Mzc1IEMgMy4wMjM0MzggLTUuODAwNzgxIDIuMjM0Mzc1IC03LjcwMzEyNSAxLjcwMzEyNSAtOS43OTY4NzUgQyAxLjE3OTY4OCAtMTEuODkwNjI1IDAuOTIxODc1IC0xMy45NTcwMzEgMC45MjE4NzUgLTE2IEMgMC45MjE4NzUgLTE4LjE1NjI1IDEuMTc5Njg4IC0yMC4zNzg5MDYgMS43MDMxMjUgLTIyLjY3MTg3NSBDIDIuMjM0Mzc1IC0yNC45NzI2NTYgMy4wNDY4NzUgLTI3LjA3MDMxMiA0LjE0MDYyNSAtMjguOTY4NzUgQyA1LjI0MjE4OCAtMzAuODYzMjgxIDYuNjQ4NDM4IC0zMi40MTAxNTYgOC4zNTkzNzUgLTMzLjYwOTM3NSBDIDEwLjA2NjQwNiAtMzQuODA0Njg4IDEyLjEwMTU2MiAtMzUuNDA2MjUgMTQuNDY4NzUgLTM1LjQwNjI1IEMgMTYuNzUgLTM1LjQwNjI1IDE4LjY5MTQwNiAtMzQuNzg1MTU2IDIwLjI5Njg3NSAtMzMuNTQ2ODc1IEMgMjEuODk4NDM4IC0zMi4zMDQ2ODggMjMuMTkxNDA2IC0zMC43NTc4MTIgMjQuMTcxODc1IC0yOC45MDYyNSBDIDI1LjE0ODQzOCAtMjcuMDUwNzgxIDI1Ljg0Mzc1IC0yNS4wMjM0MzggMjYuMjUgLTIyLjgyODEyNSBDIDI2LjY1NjI1IC0yMC42Mjg5MDYgMjYuNzk2ODc1IC0xOC41NTQ2ODggMjYuNjcxODc1IC0xNi42MDkzNzUgQyAyNi41NTQ2ODggLTE0LjQ1MzEyNSAyNi4yMjI2NTYgLTEyLjI3MzQzOCAyNS42NzE4NzUgLTEwLjA3ODEyNSBDIDI1LjExNzE4OCAtNy44Nzg5MDYgMjQuMzEyNSAtNS45MDYyNSAyMy4yNSAtNC4xNTYyNSBDIDIyLjE5NTMxMiAtMi40MDYyNSAyMC44NTE1NjIgLTAuOTg0Mzc1IDE5LjIxODc1IDAuMTA5Mzc1IEMgMTcuNTkzNzUgMS4yMTA5MzggMTUuNjY0MDYyIDEuNzY1NjI1IDEzLjQzNzUgMS43NjU2MjUgWiBNIDE0LjA0Njg3NSAtMjUuODI4MTI1IEMgMTMuNDI5Njg4IC0yNS44MjgxMjUgMTIuODkwNjI1IC0yNS41IDEyLjQyMTg3NSAtMjQuODQzNzUgQyAxMS45NTMxMjUgLTI0LjE5NTMxMiAxMS41NjY0MDYgLTIzLjQwNjI1IDExLjI2NTYyNSAtMjIuNDY4NzUgQyAxMC45NjA5MzggLTIxLjUzMTI1IDEwLjcyNjU2MiAtMjAuNTM5MDYyIDEwLjU2MjUgLTE5LjUgQyAxMC4zOTQ1MzEgLTE4LjQ2ODc1IDEwLjMxMjUgLTE3LjU2MjUgMTAuMzEyNSAtMTYuNzgxMjUgQyAxMC4zMTI1IC0xNS44MTI1IDEwLjM5ODQzOCAtMTQuNzUzOTA2IDEwLjU3ODEyNSAtMTMuNjA5Mzc1IEMgMTAuNzY1NjI1IC0xMi40NzI2NTYgMTEuMDE5NTMxIC0xMS40MjU3ODEgMTEuMzQzNzUgLTEwLjQ2ODc1IEMgMTEuNjc1NzgxIC05LjUwNzgxMiAxMi4wNzgxMjUgLTguNzEwOTM4IDEyLjU0Njg3NSAtOC4wNzgxMjUgQyAxMy4wMTU2MjUgLTcuNDUzMTI1IDEzLjU1MDc4MSAtNy4xNDA2MjUgMTQuMTU2MjUgLTcuMTQwNjI1IEMgMTQuODEyNSAtNy4xNDA2MjUgMTUuMzc1IC03LjQ0MTQwNiAxNS44NDM3NSAtOC4wNDY4NzUgQyAxNi4zMTI1IC04LjY2MDE1NiAxNi42ODc1IC05LjQzNzUgMTYuOTY4NzUgLTEwLjM3NSBDIDE3LjI1NzgxMiAtMTEuMzEyNSAxNy40NjA5MzggLTEyLjMzNTkzOCAxNy41NzgxMjUgLTEzLjQ1MzEyNSBDIDE3LjcwMzEyNSAtMTQuNTc4MTI1IDE3Ljc2NTYyNSAtMTUuNjI4OTA2IDE3Ljc2NTYyNSAtMTYuNjA5Mzc1IEMgMTcuNzY1NjI1IC0xNy41MDM5MDYgMTcuNjc5Njg4IC0xOC40ODgyODEgMTcuNTE1NjI1IC0xOS41NjI1IEMgMTcuMzU5Mzc1IC0yMC42NDQ1MzEgMTcuMTI1IC0yMS42NTYyNSAxNi44MTI1IC0yMi41OTM3NSBDIDE2LjUwNzgxMiAtMjMuNTMxMjUgMTYuMTI1IC0yNC4zMDA3ODEgMTUuNjU2MjUgLTI0LjkwNjI1IEMgMTUuMTg3NSAtMjUuNTE5NTMxIDE0LjY0ODQzOCAtMjUuODI4MTI1IDE0LjA0Njg3NSAtMjUuODI4MTI1IFogTSAxNC4wNDY4NzUgLTI1LjgyODEyNSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzOC43NjgzMTMsIDE3Ni45OTk5ODgpIj48Zz48cGF0aCBkPSJNIDIzLjAxNTYyNSAtMjIuODI4MTI1IEMgMjIuNDQxNDA2IC0yMi43ODUxNTYgMjEuOTUzMTI1IC0yMi44MzU5MzggMjEuNTQ2ODc1IC0yMi45ODQzNzUgQyAyMS4xNDA2MjUgLTIzLjEyODkwNiAyMC43MzQzNzUgLTIzLjI4MTI1IDIwLjMyODEyNSAtMjMuNDM3NSBDIDE5Ljk2MDkzOCAtMjMuNjAxNTYyIDE5LjU5NzY1NiAtMjMuNzUzOTA2IDE5LjIzNDM3NSAtMjMuODkwNjI1IEMgMTguODY3MTg4IC0yNC4wMzUxNTYgMTguNDYwOTM4IC0yNC4wODU5MzggMTguMDE1NjI1IC0yNC4wNDY4NzUgQyAxNy4xOTE0MDYgLTI0LjAxNTYyNSAxNi40NjA5MzggLTIzLjc4OTA2MiAxNS44MjgxMjUgLTIzLjM3NSBDIDE1LjIwMzEyNSAtMjIuOTY4NzUgMTQuNjMyODEyIC0yMi40NTcwMzEgMTQuMTI1IC0yMS44NDM3NSBDIDEzLjYyNSAtMjEuMjM4MjgxIDEzLjE4NzUgLTIwLjU2MjUgMTIuODEyNSAtMTkuODEyNSBDIDEyLjQ0NTMxMiAtMTkuMDYyNSAxMi4xNjQwNjIgLTE4LjMxNjQwNiAxMS45Njg3NSAtMTcuNTc4MTI1IEMgMTEuODQzNzUgLTE3LjA4NTkzOCAxMS43NSAtMTYuMzQzNzUgMTEuNjg3NSAtMTUuMzQzNzUgQyAxMS42MjUgLTE0LjM1MTU2MiAxMS41OTM3NSAtMTMuMjg5MDYyIDExLjU5Mzc1IC0xMi4xNTYyNSBDIDExLjU1MDc4MSAtMTAuOTY4NzUgMTEuNTMxMjUgLTkuODQzNzUgMTEuNTMxMjUgLTguNzgxMjUgQyAxMS41MzEyNSAtNy43MjY1NjIgMTEuNDkyMTg4IC02Ljg5NDUzMSAxMS40MjE4NzUgLTYuMjgxMjUgQyAxMS4zNzg5MDYgLTUuNjMyODEyIDExLjI3MzQzOCAtNC44NzUgMTEuMTA5Mzc1IC00IEMgMTAuOTQxNDA2IC0zLjEyNSAxMC42ODc1IC0yLjI5Njg3NSAxMC4zNDM3NSAtMS41MTU2MjUgQyAxMCAtMC43NDIxODggOS41MzkwNjIgLTAuMDk3NjU2MiA4Ljk2ODc1IDAuNDIxODc1IEMgOC40MDYyNSAwLjk1MzEyNSA3LjY3NTc4MSAxLjIxODc1IDYuNzgxMjUgMS4yMTg3NSBDIDYuMDgyMDMxIDEuMjE4NzUgNS40NzY1NjIgMS4wMTU2MjUgNC45Njg3NSAwLjYwOTM3NSBDIDQuNDY4NzUgMC4yMDMxMjUgNC4wMzkwNjIgLTAuMzMyMDMxIDMuNjg3NSAtMSBDIDMuMzQzNzUgLTEuNjc1NzgxIDMuMDU0Njg4IC0yLjQ2MDkzOCAyLjgyODEyNSAtMy4zNTkzNzUgQyAyLjYwOTM3NSAtNC4yNTM5MDYgMi40Mzc1IC01LjE3MTg3NSAyLjMxMjUgLTYuMTA5Mzc1IEMgMi4xOTUzMTIgLTcuMDc4MTI1IDIuMTA5Mzc1IC04LjA1MDc4MSAyLjA0Njg3NSAtOS4wMzEyNSBDIDEuOTg0Mzc1IC0xMC4wMDc4MTIgMS45NDE0MDYgLTEwLjkzNzUgMS45MjE4NzUgLTExLjgxMjUgQyAxLjg5ODQzOCAtMTIuNjg3NSAxLjg5ODQzOCAtMTMuNDg4MjgxIDEuOTIxODc1IC0xNC4yMTg3NSBDIDEuOTQxNDA2IC0xNC45NTcwMzEgMS45NTMxMjUgLTE1LjU1MDc4MSAxLjk1MzEyNSAtMTYgQyAxLjkxMDE1NiAtMTcuNDE0MDYyIDEuODM1OTM4IC0xOC44NDc2NTYgMS43MzQzNzUgLTIwLjI5Njg3NSBDIDEuNjQwNjI1IC0yMS43NDIxODggMS41OTM3NSAtMjMuMTc5Njg4IDEuNTkzNzUgLTI0LjYwOTM3NSBDIDEuNTkzNzUgLTI1LjUwMzkwNiAxLjYyODkwNiAtMjYuNSAxLjcwMzEyNSAtMjcuNTkzNzUgQyAxLjc4NTE1NiAtMjguNjk1MzEyIDIuMDA3ODEyIC0yOS43MjI2NTYgMi4zNzUgLTMwLjY3MTg3NSBDIDIuNzUgLTMxLjYyODkwNiAzLjI4OTA2MiAtMzIuNDI5Njg4IDQgLTMzLjA3ODEyNSBDIDQuNzA3MDMxIC0zMy43MzQzNzUgNS42OTE0MDYgLTM0LjA2MjUgNi45NTMxMjUgLTM0LjA2MjUgQyA3LjY0ODQzOCAtMzQuMDYyNSA4LjI0MjE4OCAtMzMuODM1OTM4IDguNzM0Mzc1IC0zMy4zOTA2MjUgQyA5LjIyMjY1NiAtMzIuOTQxNDA2IDkuNjE3MTg4IC0zMi4zOTA2MjUgOS45MjE4NzUgLTMxLjczNDM3NSBDIDEwLjIyMjY1NiAtMzEuMDg1OTM4IDEwLjQ1MzEyNSAtMzAuMzk4NDM4IDEwLjYwOTM3NSAtMjkuNjcxODc1IEMgMTAuNzczNDM4IC0yOC45NDE0MDYgMTAuODc4OTA2IC0yOC4yNjk1MzEgMTAuOTIxODc1IC0yNy42NTYyNSBDIDExLjg5ODQzOCAtMjkuMjM4MjgxIDEzIC0zMC41MzEyNSAxNC4yMTg3NSAtMzEuNTMxMjUgQyAxNS40NDUzMTIgLTMyLjUzMTI1IDE3LjAzNTE1NiAtMzMuMDcwMzEyIDE4Ljk4NDM3NSAtMzMuMTU2MjUgQyAxOS45NjA5MzggLTMzLjE5NTMxMiAyMC45Mjk2ODggLTMzLjEwMTU2MiAyMS44OTA2MjUgLTMyLjg3NSBDIDIyLjg0NzY1NiAtMzIuNjU2MjUgMjMuNzIyNjU2IC0zMi4yODkwNjIgMjQuNTE1NjI1IC0zMS43ODEyNSBDIDI1LjMwNDY4OCAtMzEuMjY5NTMxIDI1Ljk1NzAzMSAtMzAuNjA5Mzc1IDI2LjQ2ODc1IC0yOS43OTY4NzUgQyAyNi45NzY1NjIgLTI4Ljk4NDM3NSAyNy4yNTM5MDYgLTI4LjAyMzQzOCAyNy4yOTY4NzUgLTI2LjkyMTg3NSBDIDI3LjM2NzE4OCAtMjUuNjE3MTg4IDI2Ljk3NjU2MiAtMjQuNjE3MTg4IDI2LjEyNSAtMjMuOTIxODc1IEMgMjUuMjY5NTMxIC0yMy4yMzQzNzUgMjQuMjM0Mzc1IC0yMi44NjcxODggMjMuMDE1NjI1IC0yMi44MjgxMjUgWiBNIDIzLjAxNTYyNSAtMjIuODI4MTI1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1LjE0MzczOCwgMTc2Ljk5OTk4OCkiPjxnPjxwYXRoIGQ9Ik0gMjguOTM3NSAtMzIuODQzNzUgQyAyOC45Mzc1IC0zMS43MDcwMzEgMjguNjQwNjI1IC0zMC41NDY4NzUgMjguMDQ2ODc1IC0yOS4zNTkzNzUgQyAyNy40NjA5MzggLTI4LjE3OTY4OCAyNi43NTM5MDYgLTI3LjAwNzgxMiAyNS45MjE4NzUgLTI1Ljg0Mzc1IEMgMjUuMDg1OTM4IC0yNC42ODc1IDI0LjIxMDkzOCAtMjMuNTg1OTM4IDIzLjI5Njg3NSAtMjIuNTQ2ODc1IEMgMjIuMzc4OTA2IC0yMS41MTU2MjUgMjEuNTcwMzEyIC0yMC41NzAzMTIgMjAuODc1IC0xOS43MTg3NSBDIDIxLjQ0NTMxMiAtMTguODIwMzEyIDIyLjE2MDE1NiAtMTcuNjI4OTA2IDIzLjAxNTYyNSAtMTYuMTQwNjI1IEMgMjMuODY3MTg4IC0xNC42NjAxNTYgMjQuNjc5Njg4IC0xMy4wODIwMzEgMjUuNDUzMTI1IC0xMS40MDYyNSBDIDI2LjIzNDM3NSAtOS43MzgyODEgMjYuODk0NTMxIC04LjExMzI4MSAyNy40Mzc1IC02LjUzMTI1IEMgMjcuOTg4MjgxIC00Ljk0NTMxMiAyOC4yNjU2MjUgLTMuNjI1IDI4LjI2NTYyNSAtMi41NjI1IEMgMjguMjY1NjI1IC0xLjcwNzAzMSAyOCAtMC45MjE4NzUgMjcuNDY4NzUgLTAuMjAzMTI1IEMgMjYuOTM3NSAwLjUwMzkwNiAyNi4yMDcwMzEgMC44NTkzNzUgMjUuMjgxMjUgMC44NTkzNzUgQyAyNC41ODIwMzEgMC44NTkzNzUgMjMuODc1IDAuNTYyNSAyMy4xNTYyNSAtMC4wMzEyNSBDIDIyLjQ0NTMxMiAtMC42MjUgMjEuNzM4MjgxIC0xLjM5NDUzMSAyMS4wMzEyNSAtMi4zNDM3NSBDIDIwLjMyMDMxMiAtMy4zMDA3ODEgMTkuNjQwNjI1IC00LjM2NzE4OCAxOC45ODQzNzUgLTUuNTQ2ODc1IEMgMTguMzM1OTM4IC02LjczNDM3NSAxNy43MzgyODEgLTcuODk0NTMxIDE3LjE4NzUgLTkuMDMxMjUgQyAxNi42MzI4MTIgLTEwLjE3NTc4MSAxNi4xNDQ1MzEgLTExLjI0MjE4OCAxNS43MTg3NSAtMTIuMjM0Mzc1IEMgMTUuMjg5MDYyIC0xMy4yMzQzNzUgMTQuOTU3MDMxIC0xNC4wMzkwNjIgMTQuNzE4NzUgLTE0LjY1NjI1IEMgMTQuMTg3NSAtMTQuMTI1IDEzLjYyNSAtMTMuNjg3NSAxMy4wMzEyNSAtMTMuMzQzNzUgQyAxMi40NDUzMTIgLTEzIDExLjg2NzE4OCAtMTIuNjAxNTYyIDExLjI5Njg3NSAtMTIuMTU2MjUgQyAxMS4yOTY4NzUgLTExLjI4OTA2MiAxMS4yNjU2MjUgLTEwLjA4NTkzOCAxMS4yMDMxMjUgLTguNTQ2ODc1IEMgMTEuMTQwNjI1IC03LjAwMzkwNiAxMC45NTcwMzEgLTUuNDc2NTYyIDEwLjY1NjI1IC0zLjk2ODc1IEMgMTAuMzUxNTYyIC0yLjQ1NzAzMSA5Ljg1MTU2MiAtMS4xNDQ1MzEgOS4xNTYyNSAtMC4wMzEyNSBDIDguNDY4NzUgMS4wODIwMzEgNy40NTMxMjUgMS42NDA2MjUgNi4xMDkzNzUgMS42NDA2MjUgQyA1LjA0Njg3NSAxLjY0MDYyNSA0LjIyNjU2MiAxLjE2MDE1NiAzLjY1NjI1IDAuMjAzMTI1IEMgMy4wOTM3NSAtMC43NDIxODggMi42NzU3ODEgLTEuODU5Mzc1IDIuNDA2MjUgLTMuMTQwNjI1IEMgMi4xNDQ1MzEgLTQuNDIxODc1IDEuOTkyMTg4IC01LjcyMjY1NiAxLjk1MzEyNSAtNy4wNDY4NzUgQyAxLjkxMDE1NiAtOC4zNjcxODggMS44OTA2MjUgLTkuMzc4OTA2IDEuODkwNjI1IC0xMC4wNzgxMjUgQyAxLjg5MDYyNSAtMTMuMDg1OTM4IDEuOTY4NzUgLTE2LjA5NzY1NiAyLjEyNSAtMTkuMTA5Mzc1IEMgMi4yODkwNjIgLTIyLjExNzE4OCAyLjM5NDUzMSAtMjUuMTI4OTA2IDIuNDM3NSAtMjguMTQwNjI1IEMgMi40Mzc1IC0yOC44MzU5MzggMi40NDUzMTIgLTI5Ljc0MjE4OCAyLjQ2ODc1IC0zMC44NTkzNzUgQyAyLjQ4ODI4MSAtMzEuOTg0Mzc1IDIuNTYyNSAtMzMuMTk1MzEyIDIuNjg3NSAtMzQuNSBDIDIuODEyNSAtMzUuODAwNzgxIDIuOTkyMTg4IC0zNy4xMTcxODggMy4yMzQzNzUgLTM4LjQ1MzEyNSBDIDMuNDg0Mzc1IC0zOS43OTY4NzUgMy44MjgxMjUgLTQxLjAwNzgxMiA0LjI2NTYyNSAtNDIuMDkzNzUgQyA0LjcxMDkzOCAtNDMuMTc1NzgxIDUuMjg5MDYyIC00NC4wNTA3ODEgNiAtNDQuNzE4NzUgQyA2LjcxODc1IC00NS4zOTQ1MzEgNy41ODU5MzggLTQ1LjczNDM3NSA4LjYwOTM3NSAtNDUuNzM0Mzc1IEMgOS4zMzU5MzggLTQ1LjczNDM3NSA5Ljk1NzAzMSAtNDUuNDU3MDMxIDEwLjQ2ODc1IC00NC45MDYyNSBDIDEwLjk3NjU2MiAtNDQuMzUxNTYyIDExLjM4MjgxMiAtNDMuNjQ4NDM4IDExLjY4NzUgLTQyLjc5Njg3NSBDIDEyIC00MS45NDE0MDYgMTIuMjIyNjU2IC00MC45ODQzNzUgMTIuMzU5Mzc1IC0zOS45MjE4NzUgQyAxMi41MDM5MDYgLTM4Ljg2NzE4OCAxMi42MDkzNzUgLTM3LjgyMDMxMiAxMi42NzE4NzUgLTM2Ljc4MTI1IEMgMTIuNzM0Mzc1IC0zNS43MzgyODEgMTIuNzY1NjI1IC0zNC43Njk1MzEgMTIuNzY1NjI1IC0zMy44NzUgQyAxMi43NjU2MjUgLTMyLjk4ODI4MSAxMi43NjU2MjUgLTMyLjI4MTI1IDEyLjc2NTYyNSAtMzEuNzUgQyAxMi43NjU2MjUgLTMxLjM4MjgxMiAxMi43NTM5MDYgLTMwLjg0Mzc1IDEyLjczNDM3NSAtMzAuMTI1IEMgMTIuNzEwOTM4IC0yOS40MTQwNjIgMTIuNjkxNDA2IC0yOC42NzE4NzUgMTIuNjcxODc1IC0yNy44OTA2MjUgQyAxMi42NDg0MzggLTI3LjExNzE4OCAxMi42NDA2MjUgLTI2LjQwNjI1IDEyLjY0MDYyNSAtMjUuNzUgQyAxMi42NDA2MjUgLTI1LjEwMTU2MiAxMi42Nzk2ODggLTI0LjY0MDYyNSAxMi43NjU2MjUgLTI0LjM1OTM3NSBDIDEzLjA0Njg3NSAtMjQuMzU5Mzc1IDEzLjQ2ODc1IC0yNC42Mjg5MDYgMTQuMDMxMjUgLTI1LjE3MTg3NSBDIDE0LjYwMTU2MiAtMjUuNzIyNjU2IDE1LjI2NTYyNSAtMjYuNDI1NzgxIDE2LjAxNTYyNSAtMjcuMjgxMjUgQyAxNi43NzM0MzggLTI4LjE0NDUzMSAxNy41OTM3NSAtMjkuMDUwNzgxIDE4LjQ2ODc1IC0zMCBDIDE5LjM0Mzc1IC0zMC45NTcwMzEgMjAuMjM4MjgxIC0zMS44NjMyODEgMjEuMTU2MjUgLTMyLjcxODc1IEMgMjIuMDcwMzEyIC0zMy41NzAzMTIgMjIuOTc2NTYyIC0zNC4yNzM0MzggMjMuODc1IC0zNC44MjgxMjUgQyAyNC43Njk1MzEgLTM1LjM3ODkwNiAyNS42MDE1NjIgLTM1LjY1NjI1IDI2LjM3NSAtMzUuNjU2MjUgQyAyNy4xODc1IC0zNS42NTYyNSAyNy44MTY0MDYgLTM1LjM2NzE4OCAyOC4yNjU2MjUgLTM0Ljc5Njg3NSBDIDI4LjcxMDkzOCAtMzQuMjIyNjU2IDI4LjkzNzUgLTMzLjU3MDMxMiAyOC45Mzc1IC0zMi44NDM3NSBaIE0gMjguOTM3NSAtMzIuODQzNzUgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTQuMzg4NzEyLCAxNzYuOTk5OTg4KSI+PGc+PHBhdGggZD0iTSAyNy40MDYyNSAtMzYuNTE1NjI1IEMgMjcuNDA2MjUgLTM1LjczNDM3NSAyNy4zMzIwMzEgLTM0Ljk4ODI4MSAyNy4xODc1IC0zNC4yODEyNSBDIDI3LjA1MDc4MSAtMzMuNTcwMzEyIDI2LjgwMDc4MSAtMzIuOTUzMTI1IDI2LjQzNzUgLTMyLjQyMTg3NSBDIDI2LjA3MDMxMiAtMzEuODkwNjI1IDI1LjU4MjAzMSAtMzEuNDY4NzUgMjQuOTY4NzUgLTMxLjE1NjI1IEMgMjQuMzUxNTYyIC0zMC44NTE1NjIgMjMuNTk3NjU2IC0zMC43MDMxMjUgMjIuNzAzMTI1IC0zMC43MDMxMjUgQyAyMS42OTE0MDYgLTMwLjcwMzEyNSAyMC45NDE0MDYgLTMwLjkwNjI1IDIwLjQ1MzEyNSAtMzEuMzEyNSBDIDE5Ljk2MDkzOCAtMzEuNzE4NzUgMTkuNjI1IC0zMi4yMTg3NSAxOS40Mzc1IC0zMi44MTI1IEMgMTkuMjU3ODEyIC0zMy40MDYyNSAxOS4xNzE4NzUgLTM0LjA0Njg3NSAxOS4xNzE4NzUgLTM0LjczNDM3NSBDIDE5LjE3MTg3NSAtMzUuNDI5Njg4IDE5LjE0MDYyNSAtMzYuMDcwMzEyIDE5LjA3ODEyNSAtMzYuNjU2MjUgQyAxOS4wMTU2MjUgLTM3LjI1IDE4Ljg1OTM3NSAtMzcuNzUgMTguNjA5Mzc1IC0zOC4xNTYyNSBDIDE4LjM2NzE4OCAtMzguNTYyNSAxNy45MjU3ODEgLTM4Ljc2NTYyNSAxNy4yODEyNSAtMzguNzY1NjI1IEMgMTYuNjY0MDYyIC0zOC43NjU2MjUgMTYuMTY0MDYyIC0zOC4yOTY4NzUgMTUuNzgxMjUgLTM3LjM1OTM3NSBDIDE1LjM5NDUzMSAtMzYuNDIxODc1IDE1LjA3ODEyNSAtMzUuMzQzNzUgMTQuODI4MTI1IC0zNC4xMjUgQyAxNC41ODU5MzggLTMyLjkwNjI1IDE0LjQyNTc4MSAtMzEuNzEwOTM4IDE0LjM0Mzc1IC0zMC41NDY4NzUgQyAxNC4yNTc4MTIgLTI5LjM5MDYyNSAxNC4yMTg3NSAtMjguNjA5Mzc1IDE0LjIxODc1IC0yOC4yMDMxMjUgQyAxNC43NSAtMjguMjg1MTU2IDE1LjI1NzgxMiAtMjguMzU5Mzc1IDE1Ljc1IC0yOC40MjE4NzUgQyAxNi4yMzgyODEgLTI4LjQ4NDM3NSAxNi43Njk1MzEgLTI4LjUxNTYyNSAxNy4zNDM3NSAtMjguNTE1NjI1IEMgMTcuOTA2MjUgLTI4LjUxNTYyNSAxOC40OTIxODggLTI4LjQ1MzEyNSAxOS4xMDkzNzUgLTI4LjMyODEyNSBDIDE5LjcyMjY1NiAtMjguMjAzMTI1IDIwLjI4OTA2MiAtMjguMDAzOTA2IDIwLjgxMjUgLTI3LjczNDM3NSBDIDIxLjM0Mzc1IC0yNy40NzI2NTYgMjEuNzY5NTMxIC0yNy4xMDkzNzUgMjIuMDkzNzUgLTI2LjY0MDYyNSBDIDIyLjQyNTc4MSAtMjYuMTc5Njg4IDIyLjU5Mzc1IC0yNS42MDE1NjIgMjIuNTkzNzUgLTI0LjkwNjI1IEMgMjIuNTkzNzUgLTI0LjE3NTc4MSAyMi4yNzM0MzggLTIzLjUyMzQzOCAyMS42NDA2MjUgLTIyLjk1MzEyNSBDIDIxLjAxNTYyNSAtMjIuMzc4OTA2IDIwLjI2NTYyNSAtMjEuODk4NDM4IDE5LjM5MDYyNSAtMjEuNTE1NjI1IEMgMTguNTE1NjI1IC0yMS4xMjg5MDYgMTcuNjI4OTA2IC0yMC44MTI1IDE2LjczNDM3NSAtMjAuNTYyNSBDIDE1LjgzNTkzOCAtMjAuMzIwMzEyIDE1LjEyNSAtMjAuMTYwMTU2IDE0LjU5Mzc1IC0yMC4wNzgxMjUgQyAxNC43MTg3NSAtMTcuMjczNDM4IDE0Ljc4MTI1IC0xNC40NDUzMTIgMTQuNzgxMjUgLTExLjU5Mzc1IEMgMTQuNzgxMjUgLTguOTA2MjUgMTQuNzE4NzUgLTYuMjU3ODEyIDE0LjU5Mzc1IC0zLjY1NjI1IEMgMTQuNTA3ODEyIC0yLjM5NDUzMSAxNC4wNzAzMTIgLTEuMzU5Mzc1IDEzLjI4MTI1IC0wLjU0Njg3NSBDIDEyLjQ4ODI4MSAwLjI2NTYyNSAxMS40NjA5MzggMC42NzE4NzUgMTAuMjAzMTI1IDAuNjcxODc1IEMgOS41MDM5MDYgMC42NzE4NzUgOC45MTAxNTYgMC41MzUxNTYgOC40MjE4NzUgMC4yNjU2MjUgQyA3LjkyOTY4OCAwLjAwMzkwNjI1IDcuNTIzNDM4IC0wLjM0NzY1NiA3LjIwMzEyNSAtMC43OTY4NzUgQyA2Ljg3ODkwNiAtMS4yNDIxODggNi42MjUgLTEuNzUgNi40Mzc1IC0yLjMxMjUgQyA2LjI1NzgxMiAtMi44ODI4MTIgNi4xNDg0MzggLTMuNDc2NTYyIDYuMTA5Mzc1IC00LjA5Mzc1IEMgNS44OTg0MzggLTYuNTMxMjUgNS43MzQzNzUgLTguOTc2NTYyIDUuNjA5Mzc1IC0xMS40Mzc1IEMgNS40OTIxODggLTEzLjkwNjI1IDUuNDU3MDMxIC0xNi4zNzg5MDYgNS41IC0xOC44NTkzNzUgQyA1LjIwNzAzMSAtMTguODE2NDA2IDQuOTI5Njg4IC0xOC43OTY4NzUgNC42NzE4NzUgLTE4Ljc5Njg3NSBDIDQuNDEwMTU2IC0xOC43OTY4NzUgNC4xMzI4MTIgLTE4Ljc5Njg3NSAzLjg0Mzc1IC0xOC43OTY4NzUgQyAzLjM1MTU2MiAtMTguNzk2ODc1IDIuNzU3ODEyIC0xOC44NTkzNzUgMi4wNjI1IC0xOC45ODQzNzUgQyAxLjM3NSAtMTkuMTA5Mzc1IDAuNzEwOTM4IC0xOS4zMjAzMTIgMC4wNzgxMjUgLTE5LjYyNSBDIC0wLjU0Njg3NSAtMTkuOTI1NzgxIC0xLjA4MjAzMSAtMjAuMzAwNzgxIC0xLjUzMTI1IC0yMC43NSBDIC0xLjk3NjU2MiAtMjEuMTk1MzEyIC0yLjIwMzEyNSAtMjEuNzY5NTMxIC0yLjIwMzEyNSAtMjIuNDY4NzUgQyAtMi4yMDMxMjUgLTIzLjM2MzI4MSAtMS45MDYyNSAtMjQuMTEzMjgxIC0xLjMxMjUgLTI0LjcxODc1IEMgLTAuNzE4NzUgLTI1LjMzMjAzMSAtMC4wMDM5MDYyNSAtMjUuODMyMDMxIDAuODI4MTI1IC0yNi4yMTg3NSBDIDEuNjYwMTU2IC0yNi42MDE1NjIgMi41MzUxNTYgLTI2Ljg3ODkwNiAzLjQ1MzEyNSAtMjcuMDQ2ODc1IEMgNC4zNjcxODggLTI3LjIxMDkzOCA1LjE3MTg3NSAtMjcuMzMyMDMxIDUuODU5Mzc1IC0yNy40MDYyNSBMIDUuODU5Mzc1IC0yOC4zOTA2MjUgQyA1Ljg1OTM3NSAtMzAuMzc4OTA2IDYuMDM5MDYyIC0zMi41MTU2MjUgNi40MDYyNSAtMzQuNzk2ODc1IEMgNi43Njk1MzEgLTM3LjA3ODEyNSA3LjQyMTg3NSAtMzkuMTkxNDA2IDguMzU5Mzc1IC00MS4xNDA2MjUgQyA5LjI5Njg3NSAtNDMuMDk3NjU2IDEwLjU3ODEyNSAtNDQuNzE4NzUgMTIuMjAzMTI1IC00NiBDIDEzLjgzNTkzOCAtNDcuMjgxMjUgMTUuOTE0MDYyIC00Ny45MjE4NzUgMTguNDM3NSAtNDcuOTIxODc1IEMgMjAuMDE5NTMxIC00Ny45MjE4NzUgMjEuMzc4OTA2IC00Ny41ODIwMzEgMjIuNTE1NjI1IC00Ni45MDYyNSBDIDIzLjY2MDE1NiAtNDYuMjM4MjgxIDI0LjU5NzY1NiAtNDUuMzYzMjgxIDI1LjMyODEyNSAtNDQuMjgxMjUgQyAyNi4wNjY0MDYgLTQzLjIwNzAzMSAyNi41OTc2NTYgLTQxLjk4ODI4MSAyNi45MjE4NzUgLTQwLjYyNSBDIDI3LjI0MjE4OCAtMzkuMjU3ODEyIDI3LjQwNjI1IC0zNy44OTA2MjUgMjcuNDA2MjUgLTM2LjUxNTYyNSBaIE0gMjcuNDA2MjUgLTM2LjUxNTYyNSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxNy43MTE0MjYsIDE3Ni45OTk5ODgpIj48Zz48cGF0aCBkPSJNIDEzLjI1IC0zNyBDIDEzLjI1IC0zNC44MDA3ODEgMTMuMTU2MjUgLTMyLjU5Mzc1IDEyLjk2ODc1IC0zMC4zNzUgQyAxMi43ODkwNjIgLTI4LjE1NjI1IDEyLjcwMzEyNSAtMjUuOTI1NzgxIDEyLjcwMzEyNSAtMjMuNjg3NSBDIDEyLjcwMzEyNSAtMjAuODAwNzgxIDEyLjc4OTA2MiAtMTcuOTEwMTU2IDEyLjk2ODc1IC0xNS4wMTU2MjUgQyAxMy4xNTYyNSAtMTIuMTI4OTA2IDEzLjI1IC05LjIxODc1IDEzLjI1IC02LjI4MTI1IEMgMTMuMjUgLTUuNTUwNzgxIDEzLjIwNzAzMSAtNC43MjY1NjIgMTMuMTI1IC0zLjgxMjUgQyAxMy4wMzkwNjIgLTIuODk0NTMxIDEyLjg0NzY1NiAtMi4wNTA3ODEgMTIuNTQ2ODc1IC0xLjI4MTI1IEMgMTIuMjQyMTg4IC0wLjUwNzgxMiAxMS43ODUxNTYgMC4xNDA2MjUgMTEuMTcxODc1IDAuNjcxODc1IEMgMTAuNTU0Njg4IDEuMjAzMTI1IDkuNzQyMTg4IDEuNDY4NzUgOC43MzQzNzUgMS40Njg3NSBDIDcuNzUzOTA2IDEuNDY4NzUgNi45MDYyNSAwLjk4ODI4MSA2LjE4NzUgMC4wMzEyNSBDIDUuNDc2NTYyIC0wLjkyNTc4MSA0Ljg5MDYyNSAtMi4xNDQ1MzEgNC40MjE4NzUgLTMuNjI1IEMgMy45NTMxMjUgLTUuMTEzMjgxIDMuNTY2NDA2IC02Ljc3MzQzOCAzLjI2NTYyNSAtOC42MDkzNzUgQyAyLjk2MDkzOCAtMTAuNDQxNDA2IDIuNzM4MjgxIC0xMi4yMjI2NTYgMi41OTM3NSAtMTMuOTUzMTI1IEMgMi40NDUzMTIgLTE1LjY3OTY4OCAyLjM0Mzc1IC0xNy4yNjU2MjUgMi4yODEyNSAtMTguNzAzMTI1IEMgMi4yMjY1NjIgLTIwLjE0ODQzOCAyLjIwMzEyNSAtMjEuMjIyNjU2IDIuMjAzMTI1IC0yMS45MjE4NzUgQyAyLjIwMzEyNSAtMjIuNjkxNDA2IDIuMjI2NTYyIC0yMy44MDQ2ODggMi4yODEyNSAtMjUuMjY1NjI1IEMgMi4zNDM3NSAtMjYuNzM0Mzc1IDIuNDcyNjU2IC0yOC4zMjAzMTIgMi42NzE4NzUgLTMwLjAzMTI1IEMgMi44Nzg5MDYgLTMxLjczODI4MSAzLjE1NjI1IC0zMy40NzY1NjIgMy41IC0zNS4yNSBDIDMuODUxNTYyIC0zNy4wMTk1MzEgNC4zMTI1IC0zOC42Mjg5MDYgNC44NzUgLTQwLjA3ODEyNSBDIDUuNDQ1MzEyIC00MS41MjM0MzggNi4xMjg5MDYgLTQyLjcwNzAzMSA2LjkyMTg3NSAtNDMuNjI1IEMgNy43MjI2NTYgLTQ0LjUzOTA2MiA4LjY3MTg3NSAtNDUgOS43NjU2MjUgLTQ1IEMgMTAuNjYwMTU2IC00NSAxMS4zNDM3NSAtNDQuNzAzMTI1IDExLjgxMjUgLTQ0LjEwOTM3NSBDIDEyLjI4MTI1IC00My41MTU2MjUgMTIuNjEzMjgxIC00Mi44MDA3ODEgMTIuODEyNSAtNDEuOTY4NzUgQyAxMy4wMTk1MzEgLTQxLjEzMjgxMiAxMy4xNDQ1MzEgLTQwLjI1NzgxMiAxMy4xODc1IC0zOS4zNDM3NSBDIDEzLjIyNjU2MiAtMzguNDI1NzgxIDEzLjI1IC0zNy42NDQ1MzEgMTMuMjUgLTM3IFogTSAxMy4yNSAtMzcgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzMuNzY4Njg3LCAxNzYuOTk5OTg4KSI+PGc+PHBhdGggZD0iTSAxMy40Mzc1IDEuNzY1NjI1IEMgMTEuMzUxNTYyIDEuNzY1NjI1IDkuNTM1MTU2IDEuMjEwOTM4IDcuOTg0Mzc1IDAuMTA5Mzc1IEMgNi40NDE0MDYgLTAuOTg0Mzc1IDUuMTQwNjI1IC0yLjM4MjgxMiA0LjA3ODEyNSAtNC4wOTM3NSBDIDMuMDIzNDM4IC01LjgwMDc4MSAyLjIzNDM3NSAtNy43MDMxMjUgMS43MDMxMjUgLTkuNzk2ODc1IEMgMS4xNzk2ODggLTExLjg5MDYyNSAwLjkyMTg3NSAtMTMuOTU3MDMxIDAuOTIxODc1IC0xNiBDIDAuOTIxODc1IC0xOC4xNTYyNSAxLjE3OTY4OCAtMjAuMzc4OTA2IDEuNzAzMTI1IC0yMi42NzE4NzUgQyAyLjIzNDM3NSAtMjQuOTcyNjU2IDMuMDQ2ODc1IC0yNy4wNzAzMTIgNC4xNDA2MjUgLTI4Ljk2ODc1IEMgNS4yNDIxODggLTMwLjg2MzI4MSA2LjY0ODQzOCAtMzIuNDEwMTU2IDguMzU5Mzc1IC0zMy42MDkzNzUgQyAxMC4wNjY0MDYgLTM0LjgwNDY4OCAxMi4xMDE1NjIgLTM1LjQwNjI1IDE0LjQ2ODc1IC0zNS40MDYyNSBDIDE2Ljc1IC0zNS40MDYyNSAxOC42OTE0MDYgLTM0Ljc4NTE1NiAyMC4yOTY4NzUgLTMzLjU0Njg3NSBDIDIxLjg5ODQzOCAtMzIuMzA0Njg4IDIzLjE5MTQwNiAtMzAuNzU3ODEyIDI0LjE3MTg3NSAtMjguOTA2MjUgQyAyNS4xNDg0MzggLTI3LjA1MDc4MSAyNS44NDM3NSAtMjUuMDIzNDM4IDI2LjI1IC0yMi44MjgxMjUgQyAyNi42NTYyNSAtMjAuNjI4OTA2IDI2Ljc5Njg3NSAtMTguNTU0Njg4IDI2LjY3MTg3NSAtMTYuNjA5Mzc1IEMgMjYuNTU0Njg4IC0xNC40NTMxMjUgMjYuMjIyNjU2IC0xMi4yNzM0MzggMjUuNjcxODc1IC0xMC4wNzgxMjUgQyAyNS4xMTcxODggLTcuODc4OTA2IDI0LjMxMjUgLTUuOTA2MjUgMjMuMjUgLTQuMTU2MjUgQyAyMi4xOTUzMTIgLTIuNDA2MjUgMjAuODUxNTYyIC0wLjk4NDM3NSAxOS4yMTg3NSAwLjEwOTM3NSBDIDE3LjU5Mzc1IDEuMjEwOTM4IDE1LjY2NDA2MiAxLjc2NTYyNSAxMy40Mzc1IDEuNzY1NjI1IFogTSAxNC4wNDY4NzUgLTI1LjgyODEyNSBDIDEzLjQyOTY4OCAtMjUuODI4MTI1IDEyLjg5MDYyNSAtMjUuNSAxMi40MjE4NzUgLTI0Ljg0Mzc1IEMgMTEuOTUzMTI1IC0yNC4xOTUzMTIgMTEuNTY2NDA2IC0yMy40MDYyNSAxMS4yNjU2MjUgLTIyLjQ2ODc1IEMgMTAuOTYwOTM4IC0yMS41MzEyNSAxMC43MjY1NjIgLTIwLjUzOTA2MiAxMC41NjI1IC0xOS41IEMgMTAuMzk0NTMxIC0xOC40Njg3NSAxMC4zMTI1IC0xNy41NjI1IDEwLjMxMjUgLTE2Ljc4MTI1IEMgMTAuMzEyNSAtMTUuODEyNSAxMC4zOTg0MzggLTE0Ljc1MzkwNiAxMC41NzgxMjUgLTEzLjYwOTM3NSBDIDEwLjc2NTYyNSAtMTIuNDcyNjU2IDExLjAxOTUzMSAtMTEuNDI1NzgxIDExLjM0Mzc1IC0xMC40Njg3NSBDIDExLjY3NTc4MSAtOS41MDc4MTIgMTIuMDc4MTI1IC04LjcxMDkzOCAxMi41NDY4NzUgLTguMDc4MTI1IEMgMTMuMDE1NjI1IC03LjQ1MzEyNSAxMy41NTA3ODEgLTcuMTQwNjI1IDE0LjE1NjI1IC03LjE0MDYyNSBDIDE0LjgxMjUgLTcuMTQwNjI1IDE1LjM3NSAtNy40NDE0MDYgMTUuODQzNzUgLTguMDQ2ODc1IEMgMTYuMzEyNSAtOC42NjAxNTYgMTYuNjg3NSAtOS40Mzc1IDE2Ljk2ODc1IC0xMC4zNzUgQyAxNy4yNTc4MTIgLTExLjMxMjUgMTcuNDYwOTM4IC0xMi4zMzU5MzggMTcuNTc4MTI1IC0xMy40NTMxMjUgQyAxNy43MDMxMjUgLTE0LjU3ODEyNSAxNy43NjU2MjUgLTE1LjYyODkwNiAxNy43NjU2MjUgLTE2LjYwOTM3NSBDIDE3Ljc2NTYyNSAtMTcuNTAzOTA2IDE3LjY3OTY4OCAtMTguNDg4MjgxIDE3LjUxNTYyNSAtMTkuNTYyNSBDIDE3LjM1OTM3NSAtMjAuNjQ0NTMxIDE3LjEyNSAtMjEuNjU2MjUgMTYuODEyNSAtMjIuNTkzNzUgQyAxNi41MDc4MTIgLTIzLjUzMTI1IDE2LjEyNSAtMjQuMzAwNzgxIDE1LjY1NjI1IC0yNC45MDYyNSBDIDE1LjE4NzUgLTI1LjUxOTUzMSAxNC42NDg0MzggLTI1LjgyODEyNSAxNC4wNDY4NzUgLTI1LjgyODEyNSBaIE0gMTQuMDQ2ODc1IC0yNS44MjgxMjUgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjEuNzMxNTIyLCAxNzYuOTk5OTg4KSI+PGc+PHBhdGggZD0iTSAzMi4yMzQzNzUgMC43OTY4NzUgQyAzMC45Mjk2ODggMC43OTY4NzUgMjkuNzU3ODEyIDAuMTAxNTYyIDI4LjcxODc1IC0xLjI4MTI1IEMgMjcuNjg3NSAtMi42NjQwNjIgMjYuNzgxMjUgLTQuMzIwMzEyIDI2IC02LjI1IEMgMjUuMjI2NTYyIC04LjE4NzUgMjQuNTg1OTM4IC0xMC4xNzE4NzUgMjQuMDc4MTI1IC0xMi4yMDMxMjUgQyAyMy41NzgxMjUgLTE0LjI0MjE4OCAyMy4yMDMxMjUgLTE1LjkzNzUgMjIuOTUzMTI1IC0xNy4yODEyNSBDIDIyLjYyODkwNiAtMTYuNDY4NzUgMjIuMTkxNDA2IC0xNS40Njg3NSAyMS42NDA2MjUgLTE0LjI4MTI1IEMgMjEuMDg1OTM4IC0xMy4xMDE1NjIgMjAuNDU3MDMxIC0xMS44NjMyODEgMTkuNzUgLTEwLjU2MjUgQyAxOS4wMzkwNjIgLTkuMjU3ODEyIDE4LjI3MzQzOCAtNy45NDUzMTIgMTcuNDUzMTI1IC02LjYyNSBDIDE2LjY0MDYyNSAtNS4zMDA3ODEgMTUuNzk2ODc1IC00LjEwOTM3NSAxNC45MjE4NzUgLTMuMDQ2ODc1IEMgMTQuMDQ2ODc1IC0xLjk5MjE4OCAxMy4xNzE4NzUgLTEuMTQwNjI1IDEyLjI5Njg3NSAtMC40ODQzNzUgQyAxMS40MjE4NzUgMC4xNjAxNTYgMTAuNTc4MTI1IDAuNDg0Mzc1IDkuNzY1NjI1IDAuNDg0Mzc1IEMgOC42NzE4NzUgMC40ODQzNzUgNy43MDMxMjUgLTAuMDM5MDYyNSA2Ljg1OTM3NSAtMS4wOTM3NSBDIDYuMDIzNDM4IC0yLjE1NjI1IDUuMzIwMzEyIC0zLjUzOTA2MiA0Ljc1IC01LjI1IEMgNC4xODc1IC02Ljk1NzAzMSAzLjcxMDkzOCAtOC44NDc2NTYgMy4zMjgxMjUgLTEwLjkyMTg3NSBDIDIuOTQxNDA2IC0xMy4wMDM5MDYgMi42NDQ1MzEgLTE1LjA4MjAzMSAyLjQzNzUgLTE3LjE1NjI1IEMgMi4yMzgyODEgLTE5LjIyNjU2MiAyLjA5NzY1NiAtMjEuMTYwMTU2IDIuMDE1NjI1IC0yMi45NTMxMjUgQyAxLjkyOTY4OCAtMjQuNzQyMTg4IDEuODkwNjI1IC0yNi4xOTE0MDYgMS44OTA2MjUgLTI3LjI5Njg3NSBDIDEuODkwNjI1IC0yOC4zMDQ2ODggMS45NDE0MDYgLTI5LjI4MTI1IDIuMDQ2ODc1IC0zMC4yMTg3NSBDIDIuMTQ4NDM4IC0zMS4xNTYyNSAyLjM1MTU2MiAtMzEuOTg4MjgxIDIuNjU2MjUgLTMyLjcxODc1IEMgMi45NTcwMzEgLTMzLjQ1NzAzMSAzLjQwNjI1IC0zNC4wMzkwNjIgNCAtMzQuNDY4NzUgQyA0LjU5Mzc1IC0zNC44OTQ1MzEgNS4zNzUgLTM1LjEwOTM3NSA2LjM0Mzc1IC0zNS4xMDkzNzUgQyA3LjI4MTI1IC0zNS4xMDkzNzUgOC4wODIwMzEgLTM0Ljc1NzgxMiA4Ljc1IC0zNC4wNjI1IEMgOS40MjU3ODEgLTMzLjM3NSA5Ljk4ODI4MSAtMzIuNDY4NzUgMTAuNDM3NSAtMzEuMzQzNzUgQyAxMC44ODI4MTIgLTMwLjIyNjU2MiAxMS4yNSAtMjguOTY4NzUgMTEuNTMxMjUgLTI3LjU2MjUgQyAxMS44MjAzMTIgLTI2LjE1NjI1IDEyLjA0Njg3NSAtMjQuNzI2NTYyIDEyLjIwMzEyNSAtMjMuMjgxMjUgQyAxMi4zNjcxODggLTIxLjg0Mzc1IDEyLjQ4NDM3NSAtMjAuNDQxNDA2IDEyLjU0Njg3NSAtMTkuMDc4MTI1IEMgMTIuNjA5Mzc1IC0xNy43MTA5MzggMTIuNjYwMTU2IC0xNi41MzkwNjIgMTIuNzAzMTI1IC0xNS41NjI1IEMgMTIuOTQxNDA2IC0xNi40MTQwNjIgMTMuMjg1MTU2IC0xNy40NjA5MzggMTMuNzM0Mzc1IC0xOC43MDMxMjUgQyAxNC4xNzk2ODggLTE5Ljk1MzEyNSAxNC42NzE4NzUgLTIxLjI3MzQzOCAxNS4yMDMxMjUgLTIyLjY3MTg3NSBDIDE1LjczNDM3NSAtMjQuMDc4MTI1IDE2LjMxMjUgLTI1LjQ3MjY1NiAxNi45Mzc1IC0yNi44NTkzNzUgQyAxNy41NzAzMTIgLTI4LjI0MjE4OCAxOC4yMDMxMjUgLTI5LjQ4NDM3NSAxOC44MjgxMjUgLTMwLjU3ODEyNSBDIDE5LjQ2MDkzOCAtMzEuNjc5Njg4IDIwLjA4MjAzMSAtMzIuNTc4MTI1IDIwLjY4NzUgLTMzLjI2NTYyNSBDIDIxLjMwMDc4MSAtMzMuOTYwOTM4IDIxLjg5NDUzMSAtMzQuMzEyNSAyMi40Njg3NSAtMzQuMzEyNSBMIDIyLjUzMTI1IC0zNC4zMTI1IEMgMjMuMjU3ODEyIC0zNC4zMTI1IDIzLjk2ODc1IC0zMy45NjA5MzggMjQuNjU2MjUgLTMzLjI2NTYyNSBDIDI1LjM1MTU2MiAtMzIuNTc4MTI1IDI2LjAyMzQzOCAtMzEuNjc5Njg4IDI2LjY3MTg3NSAtMzAuNTc4MTI1IEMgMjcuMzI4MTI1IC0yOS40ODQzNzUgMjcuOTM3NSAtMjguMjM0Mzc1IDI4LjUgLTI2LjgyODEyNSBDIDI5LjA3MDMxMiAtMjUuNDIxODc1IDI5LjYwMTU2MiAtMjMuOTkyMTg4IDMwLjA5Mzc1IC0yMi41NDY4NzUgQyAzMC41ODIwMzEgLTIxLjEwOTM3NSAzMS4wMDc4MTIgLTE5LjcwNzAzMSAzMS4zNzUgLTE4LjM0Mzc1IEMgMzEuNzM4MjgxIC0xNi45NzY1NjIgMzIuMDQ2ODc1IC0xNS44MDQ2ODggMzIuMjk2ODc1IC0xNC44MjgxMjUgQyAzMi4zMzU5MzggLTE2LjAxNTYyNSAzMi4zOTQ1MzEgLTE3LjM0NzY1NiAzMi40Njg3NSAtMTguODI4MTI1IEMgMzIuNTUwNzgxIC0yMC4zMTY0MDYgMzIuNzAzMTI1IC0yMS44MTI1IDMyLjkyMTg3NSAtMjMuMzEyNSBDIDMzLjE0ODQzOCAtMjQuODIwMzEyIDMzLjQ1NzAzMSAtMjYuMjg5MDYyIDMzLjg0Mzc1IC0yNy43MTg3NSBDIDM0LjIzODI4MSAtMjkuMTQ0NTMxIDM0LjcxODc1IC0zMC40MTQwNjIgMzUuMjgxMjUgLTMxLjUzMTI1IEMgMzUuODUxNTYyIC0zMi42NTYyNSAzNi41NTQ2ODggLTMzLjU1MDc4MSAzNy4zOTA2MjUgLTM0LjIxODc1IEMgMzguMjIyNjU2IC0zNC44ODI4MTIgMzkuMTkxNDA2IC0zNS4yMTg3NSA0MC4yOTY4NzUgLTM1LjIxODc1IEMgNDEuNDI5Njg4IC0zNS4yMTg3NSA0Mi4yNzM0MzggLTM0LjgyMDMxMiA0Mi44MjgxMjUgLTM0LjAzMTI1IEMgNDMuMzc4OTA2IC0zMy4yMzgyODEgNDMuNjU2MjUgLTMyLjI3MzQzOCA0My42NTYyNSAtMzEuMTQwNjI1IEMgNDMuNjU2MjUgLTI5LjkxMDE1NiA0My41IC0yOC4yODEyNSA0My4xODc1IC0yNi4yNSBDIDQyLjg4MjgxMiAtMjQuMjE4NzUgNDIuNDY4NzUgLTIyLjAwNzgxMiA0MS45Mzc1IC0xOS42MjUgQyA0MS40MDYyNSAtMTcuMjUgNDAuNzg1MTU2IC0xNC44NDc2NTYgNDAuMDc4MTI1IC0xMi40MjE4NzUgQyAzOS4zNjcxODggLTEwLjAwMzkwNiAzOC41ODU5MzggLTcuODE2NDA2IDM3LjczNDM3NSAtNS44NTkzNzUgQyAzNi44Nzg5MDYgLTMuOTEwMTU2IDM1Ljk4NDM3NSAtMi4zMTI1IDM1LjA0Njg3NSAtMS4wNjI1IEMgMzQuMTA5Mzc1IDAuMTc1NzgxIDMzLjE3MTg3NSAwLjc5Njg3NSAzMi4yMzQzNzUgMC43OTY4NzUgWiBNIDMyLjIzNDM3NSAwLjc5Njg3NSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMC44MDMyMzcsIDIzOC40OTk5ODQpIj48Zz48cGF0aCBkPSJNIDM3LjM1OTM3NSAtMjYuMTg3NSBDIDM3LjM1OTM3NSAtMjUuMjg5MDYyIDM3LjMxNjQwNiAtMjQuMDE5NTMxIDM3LjIzNDM3NSAtMjIuMzc1IEMgMzcuMTYwMTU2IC0yMC43MjY1NjIgMzcuMDA3ODEyIC0xOC45MTQwNjIgMzYuNzgxMjUgLTE2LjkzNzUgQyAzNi41NjI1IC0xNC45Njg3NSAzNi4yNDIxODggLTEyLjk1MzEyNSAzNS44MjgxMjUgLTEwLjg5MDYyNSBDIDM1LjQyMTg3NSAtOC44MzU5MzggMzQuODkwNjI1IC02Ljk3NjU2MiAzNC4yMzQzNzUgLTUuMzEyNSBDIDMzLjU4NTkzOCAtMy42NDQ1MzEgMzIuNzk2ODc1IC0yLjI2OTUzMSAzMS44NTkzNzUgLTEuMTg3NSBDIDMwLjkyOTY4OCAtMC4xMTMyODEgMjkuODE2NDA2IDAuNDIxODc1IDI4LjUxNTYyNSAwLjQyMTg3NSBDIDI3LjI4NTE1NiAwLjQyMTg3NSAyNi4xNjAxNTYgMC4wNjY0MDYyIDI1LjE0MDYyNSAtMC42NDA2MjUgQyAyNC4xMjg5MDYgLTEuMzQ3NjU2IDIzLjIxODc1IC0yLjIyMjY1NiAyMi40MDYyNSAtMy4yNjU2MjUgQyAyMS41OTM3NSAtNC4zMDQ2ODggMjAuODc4OTA2IC01LjQxNDA2MiAyMC4yNjU2MjUgLTYuNTkzNzUgQyAxOS42NjAxNTYgLTcuNzY5NTMxIDE5LjE1NjI1IC04Ljg0NzY1NiAxOC43NSAtOS44MjgxMjUgQyAxNy44ODI4MTIgLTExLjg5ODQzOCAxNy4wMjM0MzggLTEzLjk0MTQwNiAxNi4xNzE4NzUgLTE1Ljk1MzEyNSBDIDE1LjMxNjQwNiAtMTcuOTcyNjU2IDE0LjUwMzkwNiAtMjAuMDE5NTMxIDEzLjczNDM3NSAtMjIuMDkzNzUgTCAxMy43MzQzNzUgLTIwLjM5MDYyNSBDIDEzLjczNDM3NSAtMTguNjQwNjI1IDEzLjcyMjY1NiAtMTYuODk4NDM4IDEzLjcwMzEyNSAtMTUuMTcxODc1IEMgMTMuNjc5Njg4IC0xMy40NDE0MDYgMTMuNTUwNzgxIC0xMS43MjI2NTYgMTMuMzEyNSAtMTAuMDE1NjI1IEMgMTMuMjI2NTYyIC05LjMxNjQwNiAxMy4xMzI4MTIgLTguNTA3ODEyIDEzLjAzMTI1IC03LjU5Mzc1IEMgMTIuOTI1NzgxIC02LjY4NzUgMTIuNzY5NTMxIC01Ljc4NTE1NiAxMi41NjI1IC00Ljg5MDYyNSBDIDEyLjM2MzI4MSAtMy45OTIxODggMTIuMDcwMzEyIC0zLjE1NjI1IDExLjY4NzUgLTIuMzc1IEMgMTEuMzAwNzgxIC0xLjYwMTU2MiAxMC43ODUxNTYgLTEuMDM1MTU2IDEwLjE0MDYyNSAtMC42NzE4NzUgQyA5Ljc2NTYyNSAtMC40NjA5MzggOS40MjU3ODEgLTAuMzM1OTM4IDkuMTI1IC0wLjI5Njg3NSBDIDguODIwMzEyIC0wLjI2NTYyNSA4LjQ4ODI4MSAtMC4yMDcwMzEgOC4xMjUgLTAuMTI1IEwgNy45Mzc1IC0wLjEyNSBDIDcgLTAuMTI1IDYuMjAzMTI1IC0wLjQzNzUgNS41NDY4NzUgLTEuMDYyNSBDIDQuODk4NDM4IC0xLjY5NTMxMiA0LjM1MTU2MiAtMi41MDc4MTIgMy45MDYyNSAtMy41IEMgMy40NTcwMzEgLTQuNSAzLjA5NzY1NiAtNS42MTcxODggMi44MjgxMjUgLTYuODU5Mzc1IEMgMi41NjY0MDYgLTguMTA5Mzc1IDIuMzYzMjgxIC05LjMzMjAzMSAyLjIxODc1IC0xMC41MzEyNSBDIDIuMDgyMDMxIC0xMS43MjY1NjIgMS45OTIxODggLTEyLjgzNTkzOCAxLjk1MzEyNSAtMTMuODU5Mzc1IEMgMS45MTAxNTYgLTE0Ljg3ODkwNiAxLjg5MDYyNSAtMTUuNjkxNDA2IDEuODkwNjI1IC0xNi4yOTY4NzUgQyAxLjg5MDYyNSAtMTcuMjM0Mzc1IDEuOTI5Njg4IC0xOC42MDkzNzUgMi4wMTU2MjUgLTIwLjQyMTg3NSBDIDIuMDk3NjU2IC0yMi4yMzQzNzUgMi4yNjk1MzEgLTI0LjIzODI4MSAyLjUzMTI1IC0yNi40Mzc1IEMgMi44MDA3ODEgLTI4LjYzMjgxMiAzLjE0ODQzOCAtMzAuODkwNjI1IDMuNTc4MTI1IC0zMy4yMDMxMjUgQyA0LjAwMzkwNiAtMzUuNTIzNDM4IDQuNTYyNSAtMzcuNjMyODEyIDUuMjUgLTM5LjUzMTI1IEMgNS45Mzc1IC00MS40MjU3ODEgNi43Njk1MzEgLTQyLjk3MjY1NiA3Ljc1IC00NC4xNzE4NzUgQyA4LjcyNjU2MiAtNDUuMzY3MTg4IDkuODY3MTg4IC00NS45Njg3NSAxMS4xNzE4NzUgLTQ1Ljk2ODc1IEMgMTIuNDI5Njg4IC00NS45Njg3NSAxMy41NjI1IC00NS40NzY1NjIgMTQuNTYyNSAtNDQuNSBDIDE1LjU2MjUgLTQzLjUzMTI1IDE2LjQ0NTMxMiAtNDIuMzc1IDE3LjIxODc1IC00MS4wMzEyNSBDIDE3Ljk4ODI4MSAtMzkuNjg3NSAxOC42NDA2MjUgLTM4LjI4MTI1IDE5LjE3MTg3NSAtMzYuODEyNSBDIDE5LjcwMzEyNSAtMzUuMzQzNzUgMjAuMTQ4NDM4IC0zNC4xMjUgMjAuNTE1NjI1IC0zMy4xNTYyNSBDIDIxLjIwMzEyNSAtMzEuMjM4MjgxIDIxLjg2NzE4OCAtMjkuMzMyMDMxIDIyLjUxNTYyNSAtMjcuNDM3NSBDIDIzLjE3MTg3NSAtMjUuNTUwNzgxIDIzLjgwNDY4OCAtMjMuNjI4OTA2IDI0LjQyMTg3NSAtMjEuNjcxODc1IEMgMjQuNDYwOTM4IC0yMS41ODU5MzggMjQuNTM5MDYyIC0yMS4zNjMyODEgMjQuNjU2MjUgLTIxIEMgMjQuNzgxMjUgLTIwLjYzMjgxMiAyNC45MjU3ODEgLTIwLjIyNjU2MiAyNS4wOTM3NSAtMTkuNzgxMjUgQyAyNS4yNSAtMTkuMjg5MDYyIDI1LjQ1MzEyNSAtMTguNzM4MjgxIDI1LjcwMzEyNSAtMTguMTI1IEMgMjUuNzAzMTI1IC0xOC42NTYyNSAyNS42OTE0MDYgLTE5LjAzMTI1IDI1LjY3MTg3NSAtMTkuMjUgQyAyNS42NDg0MzggLTE5LjQ3NjU2MiAyNS42NDA2MjUgLTE5LjY3OTY4OCAyNS42NDA2MjUgLTE5Ljg1OTM3NSBDIDI1LjY0MDYyNSAtMjAuMDQ2ODc1IDI1LjY0MDYyNSAtMjAuMjgxMjUgMjUuNjQwNjI1IC0yMC41NjI1IEMgMjUuNjQwNjI1IC0yMC44NTE1NjIgMjUuNjQwNjI1IC0yMS4zMDQ2ODggMjUuNjQwNjI1IC0yMS45MjE4NzUgQyAyNS41OTc2NTYgLTIzLjI2NTYyNSAyNS41NjY0MDYgLTI0LjYwOTM3NSAyNS41NDY4NzUgLTI1Ljk1MzEyNSBDIDI1LjUyMzQzOCAtMjcuMjk2ODc1IDI1LjUxNTYyNSAtMjguNjE3MTg4IDI1LjUxNTYyNSAtMjkuOTIxODc1IEMgMjUuNTE1NjI1IC0zMC40ODQzNzUgMjUuNTIzNDM4IC0zMS4yNzM0MzggMjUuNTQ2ODc1IC0zMi4yOTY4NzUgQyAyNS41NjY0MDYgLTMzLjMxNjQwNiAyNS42Mjg5MDYgLTM0LjQwNjI1IDI1LjczNDM3NSAtMzUuNTYyNSBDIDI1LjgzNTkzOCAtMzYuNzE4NzUgMjUuOTg4MjgxIC0zNy44ODI4MTIgMjYuMTg3NSAtMzkuMDYyNSBDIDI2LjM5NDUzMSAtNDAuMjUgMjYuNjkxNDA2IC00MS4zMjAzMTIgMjcuMDc4MTI1IC00Mi4yODEyNSBDIDI3LjQ2MDkzOCAtNDMuMjM4MjgxIDI3Ljk0NTMxMiAtNDQuMDE5NTMxIDI4LjUzMTI1IC00NC42MjUgQyAyOS4xMjUgLTQ1LjIzODI4MSAyOS44NDc2NTYgLTQ1LjU0Njg3NSAzMC43MDMxMjUgLTQ1LjU0Njg3NSBDIDMxLjcyMjY1NiAtNDUuNTQ2ODc1IDMyLjU5NzY1NiAtNDUuMTU2MjUgMzMuMzI4MTI1IC00NC4zNzUgQyAzNC4wNjY0MDYgLTQzLjYwMTU2MiAzNC42NzU3ODEgLTQyLjYxNzE4OCAzNS4xNTYyNSAtNDEuNDIxODc1IEMgMzUuNjQ0NTMxIC00MC4yMjI2NTYgMzYuMDMxMjUgLTM4Ljg3ODkwNiAzNi4zMTI1IC0zNy4zOTA2MjUgQyAzNi42MDE1NjIgLTM1LjkxMDE1NiAzNi44MjgxMjUgLTM0LjQ1NzAzMSAzNi45ODQzNzUgLTMzLjAzMTI1IEMgMzcuMTQ4NDM4IC0zMS42MDE1NjIgMzcuMjUzOTA2IC0zMC4yODEyNSAzNy4yOTY4NzUgLTI5LjA2MjUgQyAzNy4zMzU5MzggLTI3Ljg0Mzc1IDM3LjM1OTM3NSAtMjYuODgyODEyIDM3LjM1OTM3NSAtMjYuMTg3NSBaIE0gMzcuMzU5Mzc1IC0yNi4xODc1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcwLjM2NjM3NSwgMjM4LjQ5OTk4NCkiPjxnPjxwYXRoIGQ9Ik0gMzUuNzgxMjUgLTExLjI5Njg3NSBDIDM1Ljc4MTI1IC04Ljc3MzQzOCAzNS4xNjQwNjIgLTYuNTk3NjU2IDMzLjkzNzUgLTQuNzY1NjI1IEMgMzIuNzE4NzUgLTIuOTI5Njg4IDMxLjE2MDE1NiAtMS40MjE4NzUgMjkuMjY1NjI1IC0wLjIzNDM3NSBDIDI3LjM3ODkwNiAwLjk0MTQwNiAyNS4yODUxNTYgMS44MTI1IDIyLjk4NDM3NSAyLjM3NSBDIDIwLjY3OTY4OCAyLjk0NTMxMiAxOC40Mjk2ODggMy4yMzQzNzUgMTYuMjM0Mzc1IDMuMjM0Mzc1IEMgMTQuNjA5Mzc1IDMuMjM0Mzc1IDEyLjg3ODkwNiAzIDExLjA0Njg3NSAyLjUzMTI1IEMgOS4yMTA5MzggMi4wNjI1IDcuNTE5NTMxIDEuMzQ3NjU2IDUuOTY4NzUgMC4zOTA2MjUgQyA0LjQyNTc4MSAtMC41NTQ2ODggMy4xNDQ1MzEgLTEuNzY1NjI1IDIuMTI1IC0zLjIzNDM3NSBDIDEuMTEzMjgxIC00LjcwMzEyNSAwLjYwOTM3NSAtNi40MTAxNTYgMC42MDkzNzUgLTguMzU5Mzc1IEMgMC42MDkzNzUgLTkuOTUzMTI1IDAuODc1IC0xMS40NDUzMTIgMS40MDYyNSAtMTIuODQzNzUgQyAxLjkzNzUgLTE0LjI1IDIuNjU2MjUgLTE1LjU1MDc4MSAzLjU2MjUgLTE2Ljc1IEMgNC40NzY1NjIgLTE3Ljk1NzAzMSA1LjUzNTE1NiAtMTkuMDMxMjUgNi43MzQzNzUgLTE5Ljk2ODc1IEMgNy45NDE0MDYgLTIwLjkwNjI1IDkuMjE4NzUgLTIxLjcxODc1IDEwLjU2MjUgLTIyLjQwNjI1IEMgOS41MzkwNjIgLTIyLjcyNjU2MiA4LjU1MDc4MSAtMjMuMTkxNDA2IDcuNTkzNzUgLTIzLjc5Njg3NSBDIDYuNjQ0NTMxIC0yNC40MTAxNTYgNS44MDA3ODEgLTI1LjEyNSA1LjA2MjUgLTI1LjkzNzUgQyA0LjMzMjAzMSAtMjYuNzU3ODEyIDMuNzQyMTg4IC0yNy42NzU3ODEgMy4yOTY4NzUgLTI4LjY4NzUgQyAyLjg0NzY1NiAtMjkuNzA3MDMxIDIuNjI1IC0zMC43ODUxNTYgMi42MjUgLTMxLjkyMTg3NSBDIDIuNjI1IC0zNC4xNjAxNTYgMy4yMjI2NTYgLTM2LjEwMTU2MiA0LjQyMTg3NSAtMzcuNzUgQyA1LjYyODkwNiAtMzkuNDA2MjUgNy4xNDQ1MzEgLTQwLjc1NzgxMiA4Ljk2ODc1IC00MS44MTI1IEMgMTAuODAwNzgxIC00Mi44NzUgMTIuNzg1MTU2IC00My42NjAxNTYgMTQuOTIxODc1IC00NC4xNzE4NzUgQyAxNy4wNTQ2ODggLTQ0LjY3OTY4OCAxOS4wNjI1IC00NC45Mzc1IDIwLjkzNzUgLTQ0LjkzNzUgQyAyMi4zNjMyODEgLTQ0LjkzNzUgMjMuODA0Njg4IC00NC43Njk1MzEgMjUuMjY1NjI1IC00NC40Mzc1IEMgMjYuNzM0Mzc1IC00NC4xMTMyODEgMjguMDY2NDA2IC00My41ODU5MzggMjkuMjY1NjI1IC00Mi44NTkzNzUgQyAzMC40NzI2NTYgLTQyLjEyODkwNiAzMS40NjA5MzggLTQxLjE3MTg3NSAzMi4yMzQzNzUgLTM5Ljk4NDM3NSBDIDMzLjAwMzkwNiAtMzguODA0Njg4IDMzLjM5MDYyNSAtMzcuMzgyODEyIDMzLjM5MDYyNSAtMzUuNzE4NzUgQyAzMy4zOTA2MjUgLTMzLjExMzI4MSAzMi42NDQ1MzEgLTMwLjgyMDMxMiAzMS4xNTYyNSAtMjguODQzNzUgQyAyOS42NzU3ODEgLTI2Ljg3NSAyNy44MzU5MzggLTI1LjI3MzQzOCAyNS42NDA2MjUgLTI0LjA0Njg3NSBDIDI3LjA2NjQwNiAtMjMuNjc5Njg4IDI4LjM5ODQzOCAtMjMuMDkzNzUgMjkuNjQwNjI1IC0yMi4yODEyNSBDIDMwLjg3ODkwNiAtMjEuNDY4NzUgMzEuOTU3MDMxIC0yMC41IDMyLjg3NSAtMTkuMzc1IEMgMzMuNzg5MDYyIC0xOC4yNTc4MTIgMzQuNTAzOTA2IC0xNy4wMDc4MTIgMzUuMDE1NjI1IC0xNS42MjUgQyAzNS41MjM0MzggLTE0LjIzODI4MSAzNS43ODEyNSAtMTIuNzk2ODc1IDM1Ljc4MTI1IC0xMS4yOTY4NzUgWiBNIDI0LjEwOTM3NSAtMzQuMzEyNSBDIDI0LjEwOTM3NSAtMzQuODAwNzgxIDIzLjk1NzAzMSAtMzUuMTg3NSAyMy42NTYyNSAtMzUuNDY4NzUgQyAyMy4zNTE1NjIgLTM1Ljc1IDIyLjk4ODI4MSAtMzUuOTg0Mzc1IDIyLjU2MjUgLTM2LjE3MTg3NSBDIDIyLjEzMjgxMiAtMzYuMzU5Mzc1IDIxLjY4NzUgLTM2LjQ3NjU2MiAyMS4yMTg3NSAtMzYuNTMxMjUgQyAyMC43NSAtMzYuNTkzNzUgMjAuMzUxNTYyIC0zNi42MjUgMjAuMDMxMjUgLTM2LjYyNSBDIDE5LjUzOTA2MiAtMzYuNjI1IDE4LjkwNjI1IC0zNi41NjI1IDE4LjEyNSAtMzYuNDM3NSBDIDE3LjM1MTU2MiAtMzYuMzIwMzEyIDE2LjYwMTU2MiAtMzYuMTE3MTg4IDE1Ljg3NSAtMzUuODI4MTI1IEMgMTUuMTQ0NTMxIC0zNS41NDY4NzUgMTQuNTE1NjI1IC0zNS4xNzE4NzUgMTMuOTg0Mzc1IC0zNC43MDMxMjUgQyAxMy40NTMxMjUgLTM0LjIzNDM3NSAxMy4xODc1IC0zMy42NzU3ODEgMTMuMTg3NSAtMzMuMDMxMjUgQyAxMy4xODc1IC0zMi4zMzIwMzEgMTMuMzY3MTg4IC0zMS43MjY1NjIgMTMuNzM0Mzc1IC0zMS4yMTg3NSBDIDE0LjA5NzY1NiAtMzAuNzE4NzUgMTQuNTU0Njg4IC0zMC4yODEyNSAxNS4xMDkzNzUgLTI5LjkwNjI1IEMgMTUuNjYwMTU2IC0yOS41MzkwNjIgMTYuMjUgLTI5LjI2NTYyNSAxNi44NzUgLTI5LjA3ODEyNSBDIDE3LjUwNzgxMiAtMjguODk4NDM4IDE4LjExMzI4MSAtMjguNzg5MDYyIDE4LjY4NzUgLTI4Ljc1IEMgMTkuMDkzNzUgLTI5IDE5LjU5NzY1NiAtMjkuMzE2NDA2IDIwLjIwMzEyNSAtMjkuNzAzMTI1IEMgMjAuODE2NDA2IC0zMC4wODU5MzggMjEuNDE0MDYyIC0zMC41MzUxNTYgMjIgLTMxLjA0Njg3NSBDIDIyLjU5Mzc1IC0zMS41NTQ2ODggMjMuMDkzNzUgLTMyLjA4MjAzMSAyMy41IC0zMi42MjUgQyAyMy45MDYyNSAtMzMuMTc1NzgxIDI0LjEwOTM3NSAtMzMuNzM4MjgxIDI0LjEwOTM3NSAtMzQuMzEyNSBaIE0gMjUuNzY1NjI1IC0xMC45MjE4NzUgQyAyNS43NjU2MjUgLTExLjg5ODQzOCAyNS41MzkwNjIgLTEyLjc4NTE1NiAyNS4wOTM3NSAtMTMuNTc4MTI1IEMgMjQuNjQ0NTMxIC0xNC4zNzg5MDYgMjQuMDYyNSAtMTUuMDYyNSAyMy4zNDM3NSAtMTUuNjI1IEMgMjIuNjMyODEyIC0xNi4xOTUzMTIgMjEuODQzNzUgLTE2LjY3NTc4MSAyMC45Njg3NSAtMTcuMDYyNSBDIDIwLjA5Mzc1IC0xNy40NDUzMTIgMTkuMjI2NTYyIC0xNy43MjI2NTYgMTguMzc1IC0xNy44OTA2MjUgQyAxNy41NjI1IC0xNy41MjM0MzggMTYuNzA3MDMxIC0xNy4wNjY0MDYgMTUuODEyNSAtMTYuNTE1NjI1IEMgMTQuOTE0MDYyIC0xNS45NjA5MzggMTQuMDg1OTM4IC0xNS4zMTY0MDYgMTMuMzI4MTI1IC0xNC41NzgxMjUgQyAxMi41NzgxMjUgLTEzLjg0NzY1NiAxMS45NTcwMzEgLTEzLjA0Njg3NSAxMS40Njg3NSAtMTIuMTcxODc1IEMgMTAuOTg4MjgxIC0xMS4yOTY4NzUgMTAuNzUgLTEwLjM1MTU2MiAxMC43NSAtOS4zNDM3NSBDIDEwLjc1IC04LjYwMTU2MiAxMS4wMDc4MTIgLTcuOTg4MjgxIDExLjUzMTI1IC03LjUgQyAxMi4wNjI1IC03LjAxOTUzMSAxMi42OTE0MDYgLTYuNjMyODEyIDEzLjQyMTg3NSAtNi4zNDM3NSBDIDE0LjE2MDE1NiAtNi4wNjI1IDE0LjkyNTc4MSAtNS44NTkzNzUgMTUuNzE4NzUgLTUuNzM0Mzc1IEMgMTYuNTA3ODEyIC01LjYxNzE4OCAxNy4xNzE4NzUgLTUuNTYyNSAxNy43MDMxMjUgLTUuNTYyNSBDIDE4LjUxNTYyNSAtNS41NjI1IDE5LjM5ODQzOCAtNS42NDg0MzggMjAuMzU5Mzc1IC01LjgyODEyNSBDIDIxLjMxNjQwNiAtNi4wMTU2MjUgMjIuMTkxNDA2IC02LjMyMDMxMiAyMi45ODQzNzUgLTYuNzUgQyAyMy43NzM0MzggLTcuMTc1NzgxIDI0LjQzNzUgLTcuNzM0Mzc1IDI0Ljk2ODc1IC04LjQyMTg3NSBDIDI1LjUgLTkuMTE3MTg4IDI1Ljc2NTYyNSAtOS45NTMxMjUgMjUuNzY1NjI1IC0xMC45MjE4NzUgWiBNIDI1Ljc2NTYyNSAtMTAuOTIxODc1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjA3LjM2NTIzNiwgMjM4LjQ5OTk4NCkiPjxnPjxwYXRoIGQ9Ik0gMzcuMzU5Mzc1IC0yNi4xODc1IEMgMzcuMzU5Mzc1IC0yNS4yODkwNjIgMzcuMzE2NDA2IC0yNC4wMTk1MzEgMzcuMjM0Mzc1IC0yMi4zNzUgQyAzNy4xNjAxNTYgLTIwLjcyNjU2MiAzNy4wMDc4MTIgLTE4LjkxNDA2MiAzNi43ODEyNSAtMTYuOTM3NSBDIDM2LjU2MjUgLTE0Ljk2ODc1IDM2LjI0MjE4OCAtMTIuOTUzMTI1IDM1LjgyODEyNSAtMTAuODkwNjI1IEMgMzUuNDIxODc1IC04LjgzNTkzOCAzNC44OTA2MjUgLTYuOTc2NTYyIDM0LjIzNDM3NSAtNS4zMTI1IEMgMzMuNTg1OTM4IC0zLjY0NDUzMSAzMi43OTY4NzUgLTIuMjY5NTMxIDMxLjg1OTM3NSAtMS4xODc1IEMgMzAuOTI5Njg4IC0wLjExMzI4MSAyOS44MTY0MDYgMC40MjE4NzUgMjguNTE1NjI1IDAuNDIxODc1IEMgMjcuMjg1MTU2IDAuNDIxODc1IDI2LjE2MDE1NiAwLjA2NjQwNjIgMjUuMTQwNjI1IC0wLjY0MDYyNSBDIDI0LjEyODkwNiAtMS4zNDc2NTYgMjMuMjE4NzUgLTIuMjIyNjU2IDIyLjQwNjI1IC0zLjI2NTYyNSBDIDIxLjU5Mzc1IC00LjMwNDY4OCAyMC44Nzg5MDYgLTUuNDE0MDYyIDIwLjI2NTYyNSAtNi41OTM3NSBDIDE5LjY2MDE1NiAtNy43Njk1MzEgMTkuMTU2MjUgLTguODQ3NjU2IDE4Ljc1IC05LjgyODEyNSBDIDE3Ljg4MjgxMiAtMTEuODk4NDM4IDE3LjAyMzQzOCAtMTMuOTQxNDA2IDE2LjE3MTg3NSAtMTUuOTUzMTI1IEMgMTUuMzE2NDA2IC0xNy45NzI2NTYgMTQuNTAzOTA2IC0yMC4wMTk1MzEgMTMuNzM0Mzc1IC0yMi4wOTM3NSBMIDEzLjczNDM3NSAtMjAuMzkwNjI1IEMgMTMuNzM0Mzc1IC0xOC42NDA2MjUgMTMuNzIyNjU2IC0xNi44OTg0MzggMTMuNzAzMTI1IC0xNS4xNzE4NzUgQyAxMy42Nzk2ODggLTEzLjQ0MTQwNiAxMy41NTA3ODEgLTExLjcyMjY1NiAxMy4zMTI1IC0xMC4wMTU2MjUgQyAxMy4yMjY1NjIgLTkuMzE2NDA2IDEzLjEzMjgxMiAtOC41MDc4MTIgMTMuMDMxMjUgLTcuNTkzNzUgQyAxMi45MjU3ODEgLTYuNjg3NSAxMi43Njk1MzEgLTUuNzg1MTU2IDEyLjU2MjUgLTQuODkwNjI1IEMgMTIuMzYzMjgxIC0zLjk5MjE4OCAxMi4wNzAzMTIgLTMuMTU2MjUgMTEuNjg3NSAtMi4zNzUgQyAxMS4zMDA3ODEgLTEuNjAxNTYyIDEwLjc4NTE1NiAtMS4wMzUxNTYgMTAuMTQwNjI1IC0wLjY3MTg3NSBDIDkuNzY1NjI1IC0wLjQ2MDkzOCA5LjQyNTc4MSAtMC4zMzU5MzggOS4xMjUgLTAuMjk2ODc1IEMgOC44MjAzMTIgLTAuMjY1NjI1IDguNDg4MjgxIC0wLjIwNzAzMSA4LjEyNSAtMC4xMjUgTCA3LjkzNzUgLTAuMTI1IEMgNyAtMC4xMjUgNi4yMDMxMjUgLTAuNDM3NSA1LjU0Njg3NSAtMS4wNjI1IEMgNC44OTg0MzggLTEuNjk1MzEyIDQuMzUxNTYyIC0yLjUwNzgxMiAzLjkwNjI1IC0zLjUgQyAzLjQ1NzAzMSAtNC41IDMuMDk3NjU2IC01LjYxNzE4OCAyLjgyODEyNSAtNi44NTkzNzUgQyAyLjU2NjQwNiAtOC4xMDkzNzUgMi4zNjMyODEgLTkuMzMyMDMxIDIuMjE4NzUgLTEwLjUzMTI1IEMgMi4wODIwMzEgLTExLjcyNjU2MiAxLjk5MjE4OCAtMTIuODM1OTM4IDEuOTUzMTI1IC0xMy44NTkzNzUgQyAxLjkxMDE1NiAtMTQuODc4OTA2IDEuODkwNjI1IC0xNS42OTE0MDYgMS44OTA2MjUgLTE2LjI5Njg3NSBDIDEuODkwNjI1IC0xNy4yMzQzNzUgMS45Mjk2ODggLTE4LjYwOTM3NSAyLjAxNTYyNSAtMjAuNDIxODc1IEMgMi4wOTc2NTYgLTIyLjIzNDM3NSAyLjI2OTUzMSAtMjQuMjM4MjgxIDIuNTMxMjUgLTI2LjQzNzUgQyAyLjgwMDc4MSAtMjguNjMyODEyIDMuMTQ4NDM4IC0zMC44OTA2MjUgMy41NzgxMjUgLTMzLjIwMzEyNSBDIDQuMDAzOTA2IC0zNS41MjM0MzggNC41NjI1IC0zNy42MzI4MTIgNS4yNSAtMzkuNTMxMjUgQyA1LjkzNzUgLTQxLjQyNTc4MSA2Ljc2OTUzMSAtNDIuOTcyNjU2IDcuNzUgLTQ0LjE3MTg3NSBDIDguNzI2NTYyIC00NS4zNjcxODggOS44NjcxODggLTQ1Ljk2ODc1IDExLjE3MTg3NSAtNDUuOTY4NzUgQyAxMi40Mjk2ODggLTQ1Ljk2ODc1IDEzLjU2MjUgLTQ1LjQ3NjU2MiAxNC41NjI1IC00NC41IEMgMTUuNTYyNSAtNDMuNTMxMjUgMTYuNDQ1MzEyIC00Mi4zNzUgMTcuMjE4NzUgLTQxLjAzMTI1IEMgMTcuOTg4MjgxIC0zOS42ODc1IDE4LjY0MDYyNSAtMzguMjgxMjUgMTkuMTcxODc1IC0zNi44MTI1IEMgMTkuNzAzMTI1IC0zNS4zNDM3NSAyMC4xNDg0MzggLTM0LjEyNSAyMC41MTU2MjUgLTMzLjE1NjI1IEMgMjEuMjAzMTI1IC0zMS4yMzgyODEgMjEuODY3MTg4IC0yOS4zMzIwMzEgMjIuNTE1NjI1IC0yNy40Mzc1IEMgMjMuMTcxODc1IC0yNS41NTA3ODEgMjMuODA0Njg4IC0yMy42Mjg5MDYgMjQuNDIxODc1IC0yMS42NzE4NzUgQyAyNC40NjA5MzggLTIxLjU4NTkzOCAyNC41MzkwNjIgLTIxLjM2MzI4MSAyNC42NTYyNSAtMjEgQyAyNC43ODEyNSAtMjAuNjMyODEyIDI0LjkyNTc4MSAtMjAuMjI2NTYyIDI1LjA5Mzc1IC0xOS43ODEyNSBDIDI1LjI1IC0xOS4yODkwNjIgMjUuNDUzMTI1IC0xOC43MzgyODEgMjUuNzAzMTI1IC0xOC4xMjUgQyAyNS43MDMxMjUgLTE4LjY1NjI1IDI1LjY5MTQwNiAtMTkuMDMxMjUgMjUuNjcxODc1IC0xOS4yNSBDIDI1LjY0ODQzOCAtMTkuNDc2NTYyIDI1LjY0MDYyNSAtMTkuNjc5Njg4IDI1LjY0MDYyNSAtMTkuODU5Mzc1IEMgMjUuNjQwNjI1IC0yMC4wNDY4NzUgMjUuNjQwNjI1IC0yMC4yODEyNSAyNS42NDA2MjUgLTIwLjU2MjUgQyAyNS42NDA2MjUgLTIwLjg1MTU2MiAyNS42NDA2MjUgLTIxLjMwNDY4OCAyNS42NDA2MjUgLTIxLjkyMTg3NSBDIDI1LjU5NzY1NiAtMjMuMjY1NjI1IDI1LjU2NjQwNiAtMjQuNjA5Mzc1IDI1LjU0Njg3NSAtMjUuOTUzMTI1IEMgMjUuNTIzNDM4IC0yNy4yOTY4NzUgMjUuNTE1NjI1IC0yOC42MTcxODggMjUuNTE1NjI1IC0yOS45MjE4NzUgQyAyNS41MTU2MjUgLTMwLjQ4NDM3NSAyNS41MjM0MzggLTMxLjI3MzQzOCAyNS41NDY4NzUgLTMyLjI5Njg3NSBDIDI1LjU2NjQwNiAtMzMuMzE2NDA2IDI1LjYyODkwNiAtMzQuNDA2MjUgMjUuNzM0Mzc1IC0zNS41NjI1IEMgMjUuODM1OTM4IC0zNi43MTg3NSAyNS45ODgyODEgLTM3Ljg4MjgxMiAyNi4xODc1IC0zOS4wNjI1IEMgMjYuMzk0NTMxIC00MC4yNSAyNi42OTE0MDYgLTQxLjMyMDMxMiAyNy4wNzgxMjUgLTQyLjI4MTI1IEMgMjcuNDYwOTM4IC00My4yMzgyODEgMjcuOTQ1MzEyIC00NC4wMTk1MzEgMjguNTMxMjUgLTQ0LjYyNSBDIDI5LjEyNSAtNDUuMjM4MjgxIDI5Ljg0NzY1NiAtNDUuNTQ2ODc1IDMwLjcwMzEyNSAtNDUuNTQ2ODc1IEMgMzEuNzIyNjU2IC00NS41NDY4NzUgMzIuNTk3NjU2IC00NS4xNTYyNSAzMy4zMjgxMjUgLTQ0LjM3NSBDIDM0LjA2NjQwNiAtNDMuNjAxNTYyIDM0LjY3NTc4MSAtNDIuNjE3MTg4IDM1LjE1NjI1IC00MS40MjE4NzUgQyAzNS42NDQ1MzEgLTQwLjIyMjY1NiAzNi4wMzEyNSAtMzguODc4OTA2IDM2LjMxMjUgLTM3LjM5MDYyNSBDIDM2LjYwMTU2MiAtMzUuOTEwMTU2IDM2LjgyODEyNSAtMzQuNDU3MDMxIDM2Ljk4NDM3NSAtMzMuMDMxMjUgQyAzNy4xNDg0MzggLTMxLjYwMTU2MiAzNy4yNTM5MDYgLTMwLjI4MTI1IDM3LjI5Njg3NSAtMjkuMDYyNSBDIDM3LjMzNTkzOCAtMjcuODQzNzUgMzcuMzU5Mzc1IC0yNi44ODI4MTIgMzcuMzU5Mzc1IC0yNi4xODc1IFogTSAzNy4zNTkzNzUgLTI2LjE4NzUgIi8+PC9nPjwvZz48L2c+PC9zdmc+");

/***/ }),

/***/ "./src/youtube-lite/save.js":
/*!**********************************!*\
  !*** ./src/youtube-lite/save.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    videoId,
    customThumbnail,
    videoAlt,
    lazyLoading,
    videoTitle,
    videoDescription,
    videoDateCreation,
    urlPageSite
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  const imageURL = customThumbnail ? customThumbnail : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const getSrcSet = url => {
    if (!url.includes("youtube.com")) {
      try {
        const urlObj = new URL(url);
        const ext = urlObj.pathname.split(".").pop();
        const baseName = url.replace(`.${ext}`, "");
        return `
          ${baseName}-1024x576.${ext} 1024w,
          ${baseName}-768x432.${ext} 768w,
          ${baseName}-450x253.${ext} 450w
        `;
      } catch (e) {
        return "";
      }
    }
    return `
      https://img.youtube.com/vi/${videoId}/sddefault.jpg 640w,
      https://img.youtube.com/vi/${videoId}/hqdefault.jpg 480w,
      https://img.youtube.com/vi/${videoId}/mqdefault.jpg 320w,
      https://img.youtube.com/vi/${videoId}/default.jpg 120w
    `;
  };
  const srcSet = getSrcSet(imageURL);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoTitle || "Titre de la vidéo",
    description: videoDescription || "Description de la vidéo non renseignée.",
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/0.jpg`,
    uploadDate: videoDateCreation ? new Date(videoDateCreation).toISOString() : new Date().toISOString(),
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
    contentUrl: urlPageSite || ""
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    role: "button",
    tabIndex: "0",
    "aria-label": "Lire la vid\xE9o YouTube",
    "data-video-id": videoId,
    "data-video-lazyloading": lazyLoading ? "lazy" : "eager"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageURL,
    srcSet: srcSet,
    sizes: "(max-width: 1024px) 100vw, 1024px",
    alt: videoAlt || "Aperçu de la vidéo YouTube",
    loading: lazyLoading ? "lazy" : "eager",
    width: "640",
    height: "360",
    style: {
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "cover",
      aspectRatio: "16 / 9"
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("noscript", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    src: `https://www.youtube-nocookie.com/embed/${videoId}`,
    width: "640",
    height: "360",
    frameBorder: "0",
    allowFullScreen: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("script", {
    type: "application/ld+json"
  }, JSON.stringify(structuredData)));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/youtube-lite/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/youtube-lite/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/youtube-lite/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/youtube-lite/save.js");






// Contenu de votre fichier custom-icon.svg
const CustomIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  zoomAndPan: "magnify",
  viewBox: "0 0 375 374.999991",
  height: "500",
  preserveAspectRatio: "xMidYMid meet",
  version: "1.0"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "9bf0af2fda"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 17.25 -13.136719 L 360.488281 -13.136719 C 365.0625 -13.136719 369.453125 -11.320312 372.6875 -8.085938 C 375.921875 -4.851562 377.738281 -0.464844 377.738281 4.113281 L 377.738281 377.59375 C 377.738281 382.167969 375.921875 386.554688 372.6875 389.789062 C 369.453125 393.023438 365.0625 394.84375 360.488281 394.84375 L 17.25 394.84375 C 12.675781 394.84375 8.289062 393.023438 5.050781 389.789062 C 1.816406 386.554688 0 382.167969 0 377.59375 L 0 4.113281 C 0 -0.464844 1.816406 -4.851562 5.050781 -8.085938 C 8.289062 -11.320312 12.675781 -13.136719 17.25 -13.136719 Z M 17.25 -13.136719 ",
  "clip-rule": "nonzero"
}))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "-37.5",
  width: "450",
  fill: "#ffffff",
  y: "-37.499999",
  height: "449.999989",
  "fill-opacity": "1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "-37.5",
  width: "450",
  fill: "#ffffff",
  y: "-37.499999",
  height: "449.999989",
  "fill-opacity": "1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "clip-path": "url(#9bf0af2fda)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "-37.5",
  width: "450",
  fill: "#000000",
  y: "-37.499999",
  height: "449.999989",
  "fill-opacity": "1"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(70.814959, 176.999988)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 39.375 -35.84375 C 39.375 -33.394531 39.210938 -30.976562 38.890625 -28.59375 C 38.566406 -26.21875 38.179688 -23.867188 37.734375 -21.546875 C 37.609375 -20.941406 37.421875 -19.957031 37.171875 -18.59375 C 36.929688 -17.226562 36.640625 -15.707031 36.296875 -14.03125 C 35.953125 -12.363281 35.535156 -10.632812 35.046875 -8.84375 C 34.554688 -7.0625 34.015625 -5.4375 33.421875 -3.96875 C 32.835938 -2.5 32.1875 -1.285156 31.46875 -0.328125 C 30.757812 0.617188 30 1.09375 29.1875 1.09375 C 28.375 1.09375 27.585938 0.6875 26.828125 -0.125 C 26.078125 -0.9375 25.382812 -1.960938 24.75 -3.203125 C 24.125 -4.441406 23.546875 -5.832031 23.015625 -7.375 C 22.484375 -8.925781 22.023438 -10.425781 21.640625 -11.875 C 21.253906 -13.320312 20.925781 -14.644531 20.65625 -15.84375 C 20.394531 -17.039062 20.203125 -17.945312 20.078125 -18.5625 C 19.921875 -18.03125 19.664062 -17.179688 19.3125 -16.015625 C 18.96875 -14.859375 18.53125 -13.554688 18 -12.109375 C 17.476562 -10.671875 16.890625 -9.195312 16.234375 -7.6875 C 15.585938 -6.1875 14.90625 -4.800781 14.1875 -3.53125 C 13.476562 -2.269531 12.738281 -1.234375 11.96875 -0.421875 C 11.195312 0.390625 10.421875 0.796875 9.640625 0.796875 C 8.628906 0.796875 7.734375 0.347656 6.953125 -0.546875 C 6.179688 -1.441406 5.53125 -2.59375 5 -4 C 4.476562 -5.40625 4.03125 -6.972656 3.65625 -8.703125 C 3.289062 -10.429688 3.003906 -12.140625 2.796875 -13.828125 C 2.597656 -15.515625 2.4375 -17.085938 2.3125 -18.546875 C 2.195312 -20.015625 2.117188 -21.179688 2.078125 -22.046875 C 1.953125 -23.992188 1.835938 -25.90625 1.734375 -27.78125 C 1.640625 -29.65625 1.59375 -31.566406 1.59375 -33.515625 C 1.59375 -34.203125 1.609375 -35.144531 1.640625 -36.34375 C 1.679688 -37.550781 1.832031 -38.734375 2.09375 -39.890625 C 2.363281 -41.054688 2.773438 -42.078125 3.328125 -42.953125 C 3.878906 -43.828125 4.679688 -44.304688 5.734375 -44.390625 C 6.628906 -44.421875 7.398438 -44.050781 8.046875 -43.28125 C 8.703125 -42.507812 9.253906 -41.484375 9.703125 -40.203125 C 10.148438 -38.921875 10.503906 -37.492188 10.765625 -35.921875 C 11.035156 -34.359375 11.238281 -32.84375 11.375 -31.375 C 11.519531 -29.914062 11.613281 -28.570312 11.65625 -27.34375 C 11.695312 -26.125 11.695312 -25.234375 11.65625 -24.671875 L 11.59375 -23.078125 C 11.71875 -23.609375 11.929688 -24.441406 12.234375 -25.578125 C 12.546875 -26.722656 12.925781 -28.015625 13.375 -29.453125 C 13.820312 -30.898438 14.296875 -32.382812 14.796875 -33.90625 C 15.304688 -35.4375 15.847656 -36.832031 16.421875 -38.09375 C 16.992188 -39.351562 17.5625 -40.398438 18.125 -41.234375 C 18.695312 -42.066406 19.25 -42.503906 19.78125 -42.546875 C 20.46875 -42.585938 21.125 -42.179688 21.75 -41.328125 C 22.382812 -40.472656 22.957031 -39.363281 23.46875 -38 C 23.976562 -36.632812 24.4375 -35.117188 24.84375 -33.453125 C 25.25 -31.785156 25.601562 -30.164062 25.90625 -28.59375 C 26.21875 -27.03125 26.453125 -25.617188 26.609375 -24.359375 C 26.773438 -23.097656 26.898438 -22.203125 26.984375 -21.671875 C 27.023438 -22.328125 27.125 -23.351562 27.28125 -24.75 C 27.445312 -26.15625 27.671875 -27.722656 27.953125 -29.453125 C 28.242188 -31.179688 28.601562 -32.953125 29.03125 -34.765625 C 29.457031 -36.578125 29.953125 -38.234375 30.515625 -39.734375 C 31.085938 -41.242188 31.738281 -42.476562 32.46875 -43.4375 C 33.207031 -44.394531 34.023438 -44.875 34.921875 -44.875 C 35.941406 -44.875 36.753906 -44.535156 37.359375 -43.859375 C 37.972656 -43.191406 38.421875 -42.378906 38.703125 -41.421875 C 38.992188 -40.460938 39.175781 -39.460938 39.25 -38.421875 C 39.332031 -37.390625 39.375 -36.53125 39.375 -35.84375 Z M 39.375 -35.84375 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(110.805477, 176.999988)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 13.4375 1.765625 C 11.351562 1.765625 9.535156 1.210938 7.984375 0.109375 C 6.441406 -0.984375 5.140625 -2.382812 4.078125 -4.09375 C 3.023438 -5.800781 2.234375 -7.703125 1.703125 -9.796875 C 1.179688 -11.890625 0.921875 -13.957031 0.921875 -16 C 0.921875 -18.15625 1.179688 -20.378906 1.703125 -22.671875 C 2.234375 -24.972656 3.046875 -27.070312 4.140625 -28.96875 C 5.242188 -30.863281 6.648438 -32.410156 8.359375 -33.609375 C 10.066406 -34.804688 12.101562 -35.40625 14.46875 -35.40625 C 16.75 -35.40625 18.691406 -34.785156 20.296875 -33.546875 C 21.898438 -32.304688 23.191406 -30.757812 24.171875 -28.90625 C 25.148438 -27.050781 25.84375 -25.023438 26.25 -22.828125 C 26.65625 -20.628906 26.796875 -18.554688 26.671875 -16.609375 C 26.554688 -14.453125 26.222656 -12.273438 25.671875 -10.078125 C 25.117188 -7.878906 24.3125 -5.90625 23.25 -4.15625 C 22.195312 -2.40625 20.851562 -0.984375 19.21875 0.109375 C 17.59375 1.210938 15.664062 1.765625 13.4375 1.765625 Z M 14.046875 -25.828125 C 13.429688 -25.828125 12.890625 -25.5 12.421875 -24.84375 C 11.953125 -24.195312 11.566406 -23.40625 11.265625 -22.46875 C 10.960938 -21.53125 10.726562 -20.539062 10.5625 -19.5 C 10.394531 -18.46875 10.3125 -17.5625 10.3125 -16.78125 C 10.3125 -15.8125 10.398438 -14.753906 10.578125 -13.609375 C 10.765625 -12.472656 11.019531 -11.425781 11.34375 -10.46875 C 11.675781 -9.507812 12.078125 -8.710938 12.546875 -8.078125 C 13.015625 -7.453125 13.550781 -7.140625 14.15625 -7.140625 C 14.8125 -7.140625 15.375 -7.441406 15.84375 -8.046875 C 16.3125 -8.660156 16.6875 -9.4375 16.96875 -10.375 C 17.257812 -11.3125 17.460938 -12.335938 17.578125 -13.453125 C 17.703125 -14.578125 17.765625 -15.628906 17.765625 -16.609375 C 17.765625 -17.503906 17.679688 -18.488281 17.515625 -19.5625 C 17.359375 -20.644531 17.125 -21.65625 16.8125 -22.59375 C 16.507812 -23.53125 16.125 -24.300781 15.65625 -24.90625 C 15.1875 -25.519531 14.648438 -25.828125 14.046875 -25.828125 Z M 14.046875 -25.828125 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(138.768313, 176.999988)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 23.015625 -22.828125 C 22.441406 -22.785156 21.953125 -22.835938 21.546875 -22.984375 C 21.140625 -23.128906 20.734375 -23.28125 20.328125 -23.4375 C 19.960938 -23.601562 19.597656 -23.753906 19.234375 -23.890625 C 18.867188 -24.035156 18.460938 -24.085938 18.015625 -24.046875 C 17.191406 -24.015625 16.460938 -23.789062 15.828125 -23.375 C 15.203125 -22.96875 14.632812 -22.457031 14.125 -21.84375 C 13.625 -21.238281 13.1875 -20.5625 12.8125 -19.8125 C 12.445312 -19.0625 12.164062 -18.316406 11.96875 -17.578125 C 11.84375 -17.085938 11.75 -16.34375 11.6875 -15.34375 C 11.625 -14.351562 11.59375 -13.289062 11.59375 -12.15625 C 11.550781 -10.96875 11.53125 -9.84375 11.53125 -8.78125 C 11.53125 -7.726562 11.492188 -6.894531 11.421875 -6.28125 C 11.378906 -5.632812 11.273438 -4.875 11.109375 -4 C 10.941406 -3.125 10.6875 -2.296875 10.34375 -1.515625 C 10 -0.742188 9.539062 -0.0976562 8.96875 0.421875 C 8.40625 0.953125 7.675781 1.21875 6.78125 1.21875 C 6.082031 1.21875 5.476562 1.015625 4.96875 0.609375 C 4.46875 0.203125 4.039062 -0.332031 3.6875 -1 C 3.34375 -1.675781 3.054688 -2.460938 2.828125 -3.359375 C 2.609375 -4.253906 2.4375 -5.171875 2.3125 -6.109375 C 2.195312 -7.078125 2.109375 -8.050781 2.046875 -9.03125 C 1.984375 -10.007812 1.941406 -10.9375 1.921875 -11.8125 C 1.898438 -12.6875 1.898438 -13.488281 1.921875 -14.21875 C 1.941406 -14.957031 1.953125 -15.550781 1.953125 -16 C 1.910156 -17.414062 1.835938 -18.847656 1.734375 -20.296875 C 1.640625 -21.742188 1.59375 -23.179688 1.59375 -24.609375 C 1.59375 -25.503906 1.628906 -26.5 1.703125 -27.59375 C 1.785156 -28.695312 2.007812 -29.722656 2.375 -30.671875 C 2.75 -31.628906 3.289062 -32.429688 4 -33.078125 C 4.707031 -33.734375 5.691406 -34.0625 6.953125 -34.0625 C 7.648438 -34.0625 8.242188 -33.835938 8.734375 -33.390625 C 9.222656 -32.941406 9.617188 -32.390625 9.921875 -31.734375 C 10.222656 -31.085938 10.453125 -30.398438 10.609375 -29.671875 C 10.773438 -28.941406 10.878906 -28.269531 10.921875 -27.65625 C 11.898438 -29.238281 13 -30.53125 14.21875 -31.53125 C 15.445312 -32.53125 17.035156 -33.070312 18.984375 -33.15625 C 19.960938 -33.195312 20.929688 -33.101562 21.890625 -32.875 C 22.847656 -32.65625 23.722656 -32.289062 24.515625 -31.78125 C 25.304688 -31.269531 25.957031 -30.609375 26.46875 -29.796875 C 26.976562 -28.984375 27.253906 -28.023438 27.296875 -26.921875 C 27.367188 -25.617188 26.976562 -24.617188 26.125 -23.921875 C 25.269531 -23.234375 24.234375 -22.867188 23.015625 -22.828125 Z M 23.015625 -22.828125 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(165.143738, 176.999988)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 28.9375 -32.84375 C 28.9375 -31.707031 28.640625 -30.546875 28.046875 -29.359375 C 27.460938 -28.179688 26.753906 -27.007812 25.921875 -25.84375 C 25.085938 -24.6875 24.210938 -23.585938 23.296875 -22.546875 C 22.378906 -21.515625 21.570312 -20.570312 20.875 -19.71875 C 21.445312 -18.820312 22.160156 -17.628906 23.015625 -16.140625 C 23.867188 -14.660156 24.679688 -13.082031 25.453125 -11.40625 C 26.234375 -9.738281 26.894531 -8.113281 27.4375 -6.53125 C 27.988281 -4.945312 28.265625 -3.625 28.265625 -2.5625 C 28.265625 -1.707031 28 -0.921875 27.46875 -0.203125 C 26.9375 0.503906 26.207031 0.859375 25.28125 0.859375 C 24.582031 0.859375 23.875 0.5625 23.15625 -0.03125 C 22.445312 -0.625 21.738281 -1.394531 21.03125 -2.34375 C 20.320312 -3.300781 19.640625 -4.367188 18.984375 -5.546875 C 18.335938 -6.734375 17.738281 -7.894531 17.1875 -9.03125 C 16.632812 -10.175781 16.144531 -11.242188 15.71875 -12.234375 C 15.289062 -13.234375 14.957031 -14.039062 14.71875 -14.65625 C 14.1875 -14.125 13.625 -13.6875 13.03125 -13.34375 C 12.445312 -13 11.867188 -12.601562 11.296875 -12.15625 C 11.296875 -11.289062 11.265625 -10.085938 11.203125 -8.546875 C 11.140625 -7.003906 10.957031 -5.476562 10.65625 -3.96875 C 10.351562 -2.457031 9.851562 -1.144531 9.15625 -0.03125 C 8.46875 1.082031 7.453125 1.640625 6.109375 1.640625 C 5.046875 1.640625 4.226562 1.160156 3.65625 0.203125 C 3.09375 -0.742188 2.675781 -1.859375 2.40625 -3.140625 C 2.144531 -4.421875 1.992188 -5.722656 1.953125 -7.046875 C 1.910156 -8.367188 1.890625 -9.378906 1.890625 -10.078125 C 1.890625 -13.085938 1.96875 -16.097656 2.125 -19.109375 C 2.289062 -22.117188 2.394531 -25.128906 2.4375 -28.140625 C 2.4375 -28.835938 2.445312 -29.742188 2.46875 -30.859375 C 2.488281 -31.984375 2.5625 -33.195312 2.6875 -34.5 C 2.8125 -35.800781 2.992188 -37.117188 3.234375 -38.453125 C 3.484375 -39.796875 3.828125 -41.007812 4.265625 -42.09375 C 4.710938 -43.175781 5.289062 -44.050781 6 -44.71875 C 6.71875 -45.394531 7.585938 -45.734375 8.609375 -45.734375 C 9.335938 -45.734375 9.957031 -45.457031 10.46875 -44.90625 C 10.976562 -44.351562 11.382812 -43.648438 11.6875 -42.796875 C 12 -41.941406 12.222656 -40.984375 12.359375 -39.921875 C 12.503906 -38.867188 12.609375 -37.820312 12.671875 -36.78125 C 12.734375 -35.738281 12.765625 -34.769531 12.765625 -33.875 C 12.765625 -32.988281 12.765625 -32.28125 12.765625 -31.75 C 12.765625 -31.382812 12.753906 -30.84375 12.734375 -30.125 C 12.710938 -29.414062 12.691406 -28.671875 12.671875 -27.890625 C 12.648438 -27.117188 12.640625 -26.40625 12.640625 -25.75 C 12.640625 -25.101562 12.679688 -24.640625 12.765625 -24.359375 C 13.046875 -24.359375 13.46875 -24.628906 14.03125 -25.171875 C 14.601562 -25.722656 15.265625 -26.425781 16.015625 -27.28125 C 16.773438 -28.144531 17.59375 -29.050781 18.46875 -30 C 19.34375 -30.957031 20.238281 -31.863281 21.15625 -32.71875 C 22.070312 -33.570312 22.976562 -34.273438 23.875 -34.828125 C 24.769531 -35.378906 25.601562 -35.65625 26.375 -35.65625 C 27.1875 -35.65625 27.816406 -35.367188 28.265625 -34.796875 C 28.710938 -34.222656 28.9375 -33.570312 28.9375 -32.84375 Z M 28.9375 -32.84375 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(194.388712, 176.999988)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 27.40625 -36.515625 C 27.40625 -35.734375 27.332031 -34.988281 27.1875 -34.28125 C 27.050781 -33.570312 26.800781 -32.953125 26.4375 -32.421875 C 26.070312 -31.890625 25.582031 -31.46875 24.96875 -31.15625 C 24.351562 -30.851562 23.597656 -30.703125 22.703125 -30.703125 C 21.691406 -30.703125 20.941406 -30.90625 20.453125 -31.3125 C 19.960938 -31.71875 19.625 -32.21875 19.4375 -32.8125 C 19.257812 -33.40625 19.171875 -34.046875 19.171875 -34.734375 C 19.171875 -35.429688 19.140625 -36.070312 19.078125 -36.65625 C 19.015625 -37.25 18.859375 -37.75 18.609375 -38.15625 C 18.367188 -38.5625 17.925781 -38.765625 17.28125 -38.765625 C 16.664062 -38.765625 16.164062 -38.296875 15.78125 -37.359375 C 15.394531 -36.421875 15.078125 -35.34375 14.828125 -34.125 C 14.585938 -32.90625 14.425781 -31.710938 14.34375 -30.546875 C 14.257812 -29.390625 14.21875 -28.609375 14.21875 -28.203125 C 14.75 -28.285156 15.257812 -28.359375 15.75 -28.421875 C 16.238281 -28.484375 16.769531 -28.515625 17.34375 -28.515625 C 17.90625 -28.515625 18.492188 -28.453125 19.109375 -28.328125 C 19.722656 -28.203125 20.289062 -28.003906 20.8125 -27.734375 C 21.34375 -27.472656 21.769531 -27.109375 22.09375 -26.640625 C 22.425781 -26.179688 22.59375 -25.601562 22.59375 -24.90625 C 22.59375 -24.175781 22.273438 -23.523438 21.640625 -22.953125 C 21.015625 -22.378906 20.265625 -21.898438 19.390625 -21.515625 C 18.515625 -21.128906 17.628906 -20.8125 16.734375 -20.5625 C 15.835938 -20.320312 15.125 -20.160156 14.59375 -20.078125 C 14.71875 -17.273438 14.78125 -14.445312 14.78125 -11.59375 C 14.78125 -8.90625 14.71875 -6.257812 14.59375 -3.65625 C 14.507812 -2.394531 14.070312 -1.359375 13.28125 -0.546875 C 12.488281 0.265625 11.460938 0.671875 10.203125 0.671875 C 9.503906 0.671875 8.910156 0.535156 8.421875 0.265625 C 7.929688 0.00390625 7.523438 -0.347656 7.203125 -0.796875 C 6.878906 -1.242188 6.625 -1.75 6.4375 -2.3125 C 6.257812 -2.882812 6.148438 -3.476562 6.109375 -4.09375 C 5.898438 -6.53125 5.734375 -8.976562 5.609375 -11.4375 C 5.492188 -13.90625 5.457031 -16.378906 5.5 -18.859375 C 5.207031 -18.816406 4.929688 -18.796875 4.671875 -18.796875 C 4.410156 -18.796875 4.132812 -18.796875 3.84375 -18.796875 C 3.351562 -18.796875 2.757812 -18.859375 2.0625 -18.984375 C 1.375 -19.109375 0.710938 -19.320312 0.078125 -19.625 C -0.546875 -19.925781 -1.082031 -20.300781 -1.53125 -20.75 C -1.976562 -21.195312 -2.203125 -21.769531 -2.203125 -22.46875 C -2.203125 -23.363281 -1.90625 -24.113281 -1.3125 -24.71875 C -0.71875 -25.332031 -0.00390625 -25.832031 0.828125 -26.21875 C 1.660156 -26.601562 2.535156 -26.878906 3.453125 -27.046875 C 4.367188 -27.210938 5.171875 -27.332031 5.859375 -27.40625 L 5.859375 -28.390625 C 5.859375 -30.378906 6.039062 -32.515625 6.40625 -34.796875 C 6.769531 -37.078125 7.421875 -39.191406 8.359375 -41.140625 C 9.296875 -43.097656 10.578125 -44.71875 12.203125 -46 C 13.835938 -47.28125 15.914062 -47.921875 18.4375 -47.921875 C 20.019531 -47.921875 21.378906 -47.582031 22.515625 -46.90625 C 23.660156 -46.238281 24.597656 -45.363281 25.328125 -44.28125 C 26.066406 -43.207031 26.597656 -41.988281 26.921875 -40.625 C 27.242188 -39.257812 27.40625 -37.890625 27.40625 -36.515625 Z M 27.40625 -36.515625 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(217.711426, 176.999988)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 13.25 -37 C 13.25 -34.800781 13.15625 -32.59375 12.96875 -30.375 C 12.789062 -28.15625 12.703125 -25.925781 12.703125 -23.6875 C 12.703125 -20.800781 12.789062 -17.910156 12.96875 -15.015625 C 13.15625 -12.128906 13.25 -9.21875 13.25 -6.28125 C 13.25 -5.550781 13.207031 -4.726562 13.125 -3.8125 C 13.039062 -2.894531 12.847656 -2.050781 12.546875 -1.28125 C 12.242188 -0.507812 11.785156 0.140625 11.171875 0.671875 C 10.554688 1.203125 9.742188 1.46875 8.734375 1.46875 C 7.753906 1.46875 6.90625 0.988281 6.1875 0.03125 C 5.476562 -0.925781 4.890625 -2.144531 4.421875 -3.625 C 3.953125 -5.113281 3.566406 -6.773438 3.265625 -8.609375 C 2.960938 -10.441406 2.738281 -12.222656 2.59375 -13.953125 C 2.445312 -15.679688 2.34375 -17.265625 2.28125 -18.703125 C 2.226562 -20.148438 2.203125 -21.222656 2.203125 -21.921875 C 2.203125 -22.691406 2.226562 -23.804688 2.28125 -25.265625 C 2.34375 -26.734375 2.472656 -28.320312 2.671875 -30.03125 C 2.878906 -31.738281 3.15625 -33.476562 3.5 -35.25 C 3.851562 -37.019531 4.3125 -38.628906 4.875 -40.078125 C 5.445312 -41.523438 6.128906 -42.707031 6.921875 -43.625 C 7.722656 -44.539062 8.671875 -45 9.765625 -45 C 10.660156 -45 11.34375 -44.703125 11.8125 -44.109375 C 12.28125 -43.515625 12.613281 -42.800781 12.8125 -41.96875 C 13.019531 -41.132812 13.144531 -40.257812 13.1875 -39.34375 C 13.226562 -38.425781 13.25 -37.644531 13.25 -37 Z M 13.25 -37 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(233.768687, 176.999988)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 13.4375 1.765625 C 11.351562 1.765625 9.535156 1.210938 7.984375 0.109375 C 6.441406 -0.984375 5.140625 -2.382812 4.078125 -4.09375 C 3.023438 -5.800781 2.234375 -7.703125 1.703125 -9.796875 C 1.179688 -11.890625 0.921875 -13.957031 0.921875 -16 C 0.921875 -18.15625 1.179688 -20.378906 1.703125 -22.671875 C 2.234375 -24.972656 3.046875 -27.070312 4.140625 -28.96875 C 5.242188 -30.863281 6.648438 -32.410156 8.359375 -33.609375 C 10.066406 -34.804688 12.101562 -35.40625 14.46875 -35.40625 C 16.75 -35.40625 18.691406 -34.785156 20.296875 -33.546875 C 21.898438 -32.304688 23.191406 -30.757812 24.171875 -28.90625 C 25.148438 -27.050781 25.84375 -25.023438 26.25 -22.828125 C 26.65625 -20.628906 26.796875 -18.554688 26.671875 -16.609375 C 26.554688 -14.453125 26.222656 -12.273438 25.671875 -10.078125 C 25.117188 -7.878906 24.3125 -5.90625 23.25 -4.15625 C 22.195312 -2.40625 20.851562 -0.984375 19.21875 0.109375 C 17.59375 1.210938 15.664062 1.765625 13.4375 1.765625 Z M 14.046875 -25.828125 C 13.429688 -25.828125 12.890625 -25.5 12.421875 -24.84375 C 11.953125 -24.195312 11.566406 -23.40625 11.265625 -22.46875 C 10.960938 -21.53125 10.726562 -20.539062 10.5625 -19.5 C 10.394531 -18.46875 10.3125 -17.5625 10.3125 -16.78125 C 10.3125 -15.8125 10.398438 -14.753906 10.578125 -13.609375 C 10.765625 -12.472656 11.019531 -11.425781 11.34375 -10.46875 C 11.675781 -9.507812 12.078125 -8.710938 12.546875 -8.078125 C 13.015625 -7.453125 13.550781 -7.140625 14.15625 -7.140625 C 14.8125 -7.140625 15.375 -7.441406 15.84375 -8.046875 C 16.3125 -8.660156 16.6875 -9.4375 16.96875 -10.375 C 17.257812 -11.3125 17.460938 -12.335938 17.578125 -13.453125 C 17.703125 -14.578125 17.765625 -15.628906 17.765625 -16.609375 C 17.765625 -17.503906 17.679688 -18.488281 17.515625 -19.5625 C 17.359375 -20.644531 17.125 -21.65625 16.8125 -22.59375 C 16.507812 -23.53125 16.125 -24.300781 15.65625 -24.90625 C 15.1875 -25.519531 14.648438 -25.828125 14.046875 -25.828125 Z M 14.046875 -25.828125 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(261.731522, 176.999988)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 32.234375 0.796875 C 30.929688 0.796875 29.757812 0.101562 28.71875 -1.28125 C 27.6875 -2.664062 26.78125 -4.320312 26 -6.25 C 25.226562 -8.1875 24.585938 -10.171875 24.078125 -12.203125 C 23.578125 -14.242188 23.203125 -15.9375 22.953125 -17.28125 C 22.628906 -16.46875 22.191406 -15.46875 21.640625 -14.28125 C 21.085938 -13.101562 20.457031 -11.863281 19.75 -10.5625 C 19.039062 -9.257812 18.273438 -7.945312 17.453125 -6.625 C 16.640625 -5.300781 15.796875 -4.109375 14.921875 -3.046875 C 14.046875 -1.992188 13.171875 -1.140625 12.296875 -0.484375 C 11.421875 0.160156 10.578125 0.484375 9.765625 0.484375 C 8.671875 0.484375 7.703125 -0.0390625 6.859375 -1.09375 C 6.023438 -2.15625 5.320312 -3.539062 4.75 -5.25 C 4.1875 -6.957031 3.710938 -8.847656 3.328125 -10.921875 C 2.941406 -13.003906 2.644531 -15.082031 2.4375 -17.15625 C 2.238281 -19.226562 2.097656 -21.160156 2.015625 -22.953125 C 1.929688 -24.742188 1.890625 -26.191406 1.890625 -27.296875 C 1.890625 -28.304688 1.941406 -29.28125 2.046875 -30.21875 C 2.148438 -31.15625 2.351562 -31.988281 2.65625 -32.71875 C 2.957031 -33.457031 3.40625 -34.039062 4 -34.46875 C 4.59375 -34.894531 5.375 -35.109375 6.34375 -35.109375 C 7.28125 -35.109375 8.082031 -34.757812 8.75 -34.0625 C 9.425781 -33.375 9.988281 -32.46875 10.4375 -31.34375 C 10.882812 -30.226562 11.25 -28.96875 11.53125 -27.5625 C 11.820312 -26.15625 12.046875 -24.726562 12.203125 -23.28125 C 12.367188 -21.84375 12.484375 -20.441406 12.546875 -19.078125 C 12.609375 -17.710938 12.660156 -16.539062 12.703125 -15.5625 C 12.941406 -16.414062 13.285156 -17.460938 13.734375 -18.703125 C 14.179688 -19.953125 14.671875 -21.273438 15.203125 -22.671875 C 15.734375 -24.078125 16.3125 -25.472656 16.9375 -26.859375 C 17.570312 -28.242188 18.203125 -29.484375 18.828125 -30.578125 C 19.460938 -31.679688 20.082031 -32.578125 20.6875 -33.265625 C 21.300781 -33.960938 21.894531 -34.3125 22.46875 -34.3125 L 22.53125 -34.3125 C 23.257812 -34.3125 23.96875 -33.960938 24.65625 -33.265625 C 25.351562 -32.578125 26.023438 -31.679688 26.671875 -30.578125 C 27.328125 -29.484375 27.9375 -28.234375 28.5 -26.828125 C 29.070312 -25.421875 29.601562 -23.992188 30.09375 -22.546875 C 30.582031 -21.109375 31.007812 -19.707031 31.375 -18.34375 C 31.738281 -16.976562 32.046875 -15.804688 32.296875 -14.828125 C 32.335938 -16.015625 32.394531 -17.347656 32.46875 -18.828125 C 32.550781 -20.316406 32.703125 -21.8125 32.921875 -23.3125 C 33.148438 -24.820312 33.457031 -26.289062 33.84375 -27.71875 C 34.238281 -29.144531 34.71875 -30.414062 35.28125 -31.53125 C 35.851562 -32.65625 36.554688 -33.550781 37.390625 -34.21875 C 38.222656 -34.882812 39.191406 -35.21875 40.296875 -35.21875 C 41.429688 -35.21875 42.273438 -34.820312 42.828125 -34.03125 C 43.378906 -33.238281 43.65625 -32.273438 43.65625 -31.140625 C 43.65625 -29.910156 43.5 -28.28125 43.1875 -26.25 C 42.882812 -24.21875 42.46875 -22.007812 41.9375 -19.625 C 41.40625 -17.25 40.785156 -14.847656 40.078125 -12.421875 C 39.367188 -10.003906 38.585938 -7.816406 37.734375 -5.859375 C 36.878906 -3.910156 35.984375 -2.3125 35.046875 -1.0625 C 34.109375 0.175781 33.171875 0.796875 32.234375 0.796875 Z M 32.234375 0.796875 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(130.803237, 238.499984)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 37.359375 -26.1875 C 37.359375 -25.289062 37.316406 -24.019531 37.234375 -22.375 C 37.160156 -20.726562 37.007812 -18.914062 36.78125 -16.9375 C 36.5625 -14.96875 36.242188 -12.953125 35.828125 -10.890625 C 35.421875 -8.835938 34.890625 -6.976562 34.234375 -5.3125 C 33.585938 -3.644531 32.796875 -2.269531 31.859375 -1.1875 C 30.929688 -0.113281 29.816406 0.421875 28.515625 0.421875 C 27.285156 0.421875 26.160156 0.0664062 25.140625 -0.640625 C 24.128906 -1.347656 23.21875 -2.222656 22.40625 -3.265625 C 21.59375 -4.304688 20.878906 -5.414062 20.265625 -6.59375 C 19.660156 -7.769531 19.15625 -8.847656 18.75 -9.828125 C 17.882812 -11.898438 17.023438 -13.941406 16.171875 -15.953125 C 15.316406 -17.972656 14.503906 -20.019531 13.734375 -22.09375 L 13.734375 -20.390625 C 13.734375 -18.640625 13.722656 -16.898438 13.703125 -15.171875 C 13.679688 -13.441406 13.550781 -11.722656 13.3125 -10.015625 C 13.226562 -9.316406 13.132812 -8.507812 13.03125 -7.59375 C 12.925781 -6.6875 12.769531 -5.785156 12.5625 -4.890625 C 12.363281 -3.992188 12.070312 -3.15625 11.6875 -2.375 C 11.300781 -1.601562 10.785156 -1.035156 10.140625 -0.671875 C 9.765625 -0.460938 9.425781 -0.335938 9.125 -0.296875 C 8.820312 -0.265625 8.488281 -0.207031 8.125 -0.125 L 7.9375 -0.125 C 7 -0.125 6.203125 -0.4375 5.546875 -1.0625 C 4.898438 -1.695312 4.351562 -2.507812 3.90625 -3.5 C 3.457031 -4.5 3.097656 -5.617188 2.828125 -6.859375 C 2.566406 -8.109375 2.363281 -9.332031 2.21875 -10.53125 C 2.082031 -11.726562 1.992188 -12.835938 1.953125 -13.859375 C 1.910156 -14.878906 1.890625 -15.691406 1.890625 -16.296875 C 1.890625 -17.234375 1.929688 -18.609375 2.015625 -20.421875 C 2.097656 -22.234375 2.269531 -24.238281 2.53125 -26.4375 C 2.800781 -28.632812 3.148438 -30.890625 3.578125 -33.203125 C 4.003906 -35.523438 4.5625 -37.632812 5.25 -39.53125 C 5.9375 -41.425781 6.769531 -42.972656 7.75 -44.171875 C 8.726562 -45.367188 9.867188 -45.96875 11.171875 -45.96875 C 12.429688 -45.96875 13.5625 -45.476562 14.5625 -44.5 C 15.5625 -43.53125 16.445312 -42.375 17.21875 -41.03125 C 17.988281 -39.6875 18.640625 -38.28125 19.171875 -36.8125 C 19.703125 -35.34375 20.148438 -34.125 20.515625 -33.15625 C 21.203125 -31.238281 21.867188 -29.332031 22.515625 -27.4375 C 23.171875 -25.550781 23.804688 -23.628906 24.421875 -21.671875 C 24.460938 -21.585938 24.539062 -21.363281 24.65625 -21 C 24.78125 -20.632812 24.925781 -20.226562 25.09375 -19.78125 C 25.25 -19.289062 25.453125 -18.738281 25.703125 -18.125 C 25.703125 -18.65625 25.691406 -19.03125 25.671875 -19.25 C 25.648438 -19.476562 25.640625 -19.679688 25.640625 -19.859375 C 25.640625 -20.046875 25.640625 -20.28125 25.640625 -20.5625 C 25.640625 -20.851562 25.640625 -21.304688 25.640625 -21.921875 C 25.597656 -23.265625 25.566406 -24.609375 25.546875 -25.953125 C 25.523438 -27.296875 25.515625 -28.617188 25.515625 -29.921875 C 25.515625 -30.484375 25.523438 -31.273438 25.546875 -32.296875 C 25.566406 -33.316406 25.628906 -34.40625 25.734375 -35.5625 C 25.835938 -36.71875 25.988281 -37.882812 26.1875 -39.0625 C 26.394531 -40.25 26.691406 -41.320312 27.078125 -42.28125 C 27.460938 -43.238281 27.945312 -44.019531 28.53125 -44.625 C 29.125 -45.238281 29.847656 -45.546875 30.703125 -45.546875 C 31.722656 -45.546875 32.597656 -45.15625 33.328125 -44.375 C 34.066406 -43.601562 34.675781 -42.617188 35.15625 -41.421875 C 35.644531 -40.222656 36.03125 -38.878906 36.3125 -37.390625 C 36.601562 -35.910156 36.828125 -34.457031 36.984375 -33.03125 C 37.148438 -31.601562 37.253906 -30.28125 37.296875 -29.0625 C 37.335938 -27.84375 37.359375 -26.882812 37.359375 -26.1875 Z M 37.359375 -26.1875 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(170.366375, 238.499984)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 35.78125 -11.296875 C 35.78125 -8.773438 35.164062 -6.597656 33.9375 -4.765625 C 32.71875 -2.929688 31.160156 -1.421875 29.265625 -0.234375 C 27.378906 0.941406 25.285156 1.8125 22.984375 2.375 C 20.679688 2.945312 18.429688 3.234375 16.234375 3.234375 C 14.609375 3.234375 12.878906 3 11.046875 2.53125 C 9.210938 2.0625 7.519531 1.347656 5.96875 0.390625 C 4.425781 -0.554688 3.144531 -1.765625 2.125 -3.234375 C 1.113281 -4.703125 0.609375 -6.410156 0.609375 -8.359375 C 0.609375 -9.953125 0.875 -11.445312 1.40625 -12.84375 C 1.9375 -14.25 2.65625 -15.550781 3.5625 -16.75 C 4.476562 -17.957031 5.535156 -19.03125 6.734375 -19.96875 C 7.941406 -20.90625 9.21875 -21.71875 10.5625 -22.40625 C 9.539062 -22.726562 8.550781 -23.191406 7.59375 -23.796875 C 6.644531 -24.410156 5.800781 -25.125 5.0625 -25.9375 C 4.332031 -26.757812 3.742188 -27.675781 3.296875 -28.6875 C 2.847656 -29.707031 2.625 -30.785156 2.625 -31.921875 C 2.625 -34.160156 3.222656 -36.101562 4.421875 -37.75 C 5.628906 -39.40625 7.144531 -40.757812 8.96875 -41.8125 C 10.800781 -42.875 12.785156 -43.660156 14.921875 -44.171875 C 17.054688 -44.679688 19.0625 -44.9375 20.9375 -44.9375 C 22.363281 -44.9375 23.804688 -44.769531 25.265625 -44.4375 C 26.734375 -44.113281 28.066406 -43.585938 29.265625 -42.859375 C 30.472656 -42.128906 31.460938 -41.171875 32.234375 -39.984375 C 33.003906 -38.804688 33.390625 -37.382812 33.390625 -35.71875 C 33.390625 -33.113281 32.644531 -30.820312 31.15625 -28.84375 C 29.675781 -26.875 27.835938 -25.273438 25.640625 -24.046875 C 27.066406 -23.679688 28.398438 -23.09375 29.640625 -22.28125 C 30.878906 -21.46875 31.957031 -20.5 32.875 -19.375 C 33.789062 -18.257812 34.503906 -17.007812 35.015625 -15.625 C 35.523438 -14.238281 35.78125 -12.796875 35.78125 -11.296875 Z M 24.109375 -34.3125 C 24.109375 -34.800781 23.957031 -35.1875 23.65625 -35.46875 C 23.351562 -35.75 22.988281 -35.984375 22.5625 -36.171875 C 22.132812 -36.359375 21.6875 -36.476562 21.21875 -36.53125 C 20.75 -36.59375 20.351562 -36.625 20.03125 -36.625 C 19.539062 -36.625 18.90625 -36.5625 18.125 -36.4375 C 17.351562 -36.320312 16.601562 -36.117188 15.875 -35.828125 C 15.144531 -35.546875 14.515625 -35.171875 13.984375 -34.703125 C 13.453125 -34.234375 13.1875 -33.675781 13.1875 -33.03125 C 13.1875 -32.332031 13.367188 -31.726562 13.734375 -31.21875 C 14.097656 -30.71875 14.554688 -30.28125 15.109375 -29.90625 C 15.660156 -29.539062 16.25 -29.265625 16.875 -29.078125 C 17.507812 -28.898438 18.113281 -28.789062 18.6875 -28.75 C 19.09375 -29 19.597656 -29.316406 20.203125 -29.703125 C 20.816406 -30.085938 21.414062 -30.535156 22 -31.046875 C 22.59375 -31.554688 23.09375 -32.082031 23.5 -32.625 C 23.90625 -33.175781 24.109375 -33.738281 24.109375 -34.3125 Z M 25.765625 -10.921875 C 25.765625 -11.898438 25.539062 -12.785156 25.09375 -13.578125 C 24.644531 -14.378906 24.0625 -15.0625 23.34375 -15.625 C 22.632812 -16.195312 21.84375 -16.675781 20.96875 -17.0625 C 20.09375 -17.445312 19.226562 -17.722656 18.375 -17.890625 C 17.5625 -17.523438 16.707031 -17.066406 15.8125 -16.515625 C 14.914062 -15.960938 14.085938 -15.316406 13.328125 -14.578125 C 12.578125 -13.847656 11.957031 -13.046875 11.46875 -12.171875 C 10.988281 -11.296875 10.75 -10.351562 10.75 -9.34375 C 10.75 -8.601562 11.007812 -7.988281 11.53125 -7.5 C 12.0625 -7.019531 12.691406 -6.632812 13.421875 -6.34375 C 14.160156 -6.0625 14.925781 -5.859375 15.71875 -5.734375 C 16.507812 -5.617188 17.171875 -5.5625 17.703125 -5.5625 C 18.515625 -5.5625 19.398438 -5.648438 20.359375 -5.828125 C 21.316406 -6.015625 22.191406 -6.320312 22.984375 -6.75 C 23.773438 -7.175781 24.4375 -7.734375 24.96875 -8.421875 C 25.5 -9.117188 25.765625 -9.953125 25.765625 -10.921875 Z M 25.765625 -10.921875 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(207.365236, 238.499984)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 37.359375 -26.1875 C 37.359375 -25.289062 37.316406 -24.019531 37.234375 -22.375 C 37.160156 -20.726562 37.007812 -18.914062 36.78125 -16.9375 C 36.5625 -14.96875 36.242188 -12.953125 35.828125 -10.890625 C 35.421875 -8.835938 34.890625 -6.976562 34.234375 -5.3125 C 33.585938 -3.644531 32.796875 -2.269531 31.859375 -1.1875 C 30.929688 -0.113281 29.816406 0.421875 28.515625 0.421875 C 27.285156 0.421875 26.160156 0.0664062 25.140625 -0.640625 C 24.128906 -1.347656 23.21875 -2.222656 22.40625 -3.265625 C 21.59375 -4.304688 20.878906 -5.414062 20.265625 -6.59375 C 19.660156 -7.769531 19.15625 -8.847656 18.75 -9.828125 C 17.882812 -11.898438 17.023438 -13.941406 16.171875 -15.953125 C 15.316406 -17.972656 14.503906 -20.019531 13.734375 -22.09375 L 13.734375 -20.390625 C 13.734375 -18.640625 13.722656 -16.898438 13.703125 -15.171875 C 13.679688 -13.441406 13.550781 -11.722656 13.3125 -10.015625 C 13.226562 -9.316406 13.132812 -8.507812 13.03125 -7.59375 C 12.925781 -6.6875 12.769531 -5.785156 12.5625 -4.890625 C 12.363281 -3.992188 12.070312 -3.15625 11.6875 -2.375 C 11.300781 -1.601562 10.785156 -1.035156 10.140625 -0.671875 C 9.765625 -0.460938 9.425781 -0.335938 9.125 -0.296875 C 8.820312 -0.265625 8.488281 -0.207031 8.125 -0.125 L 7.9375 -0.125 C 7 -0.125 6.203125 -0.4375 5.546875 -1.0625 C 4.898438 -1.695312 4.351562 -2.507812 3.90625 -3.5 C 3.457031 -4.5 3.097656 -5.617188 2.828125 -6.859375 C 2.566406 -8.109375 2.363281 -9.332031 2.21875 -10.53125 C 2.082031 -11.726562 1.992188 -12.835938 1.953125 -13.859375 C 1.910156 -14.878906 1.890625 -15.691406 1.890625 -16.296875 C 1.890625 -17.234375 1.929688 -18.609375 2.015625 -20.421875 C 2.097656 -22.234375 2.269531 -24.238281 2.53125 -26.4375 C 2.800781 -28.632812 3.148438 -30.890625 3.578125 -33.203125 C 4.003906 -35.523438 4.5625 -37.632812 5.25 -39.53125 C 5.9375 -41.425781 6.769531 -42.972656 7.75 -44.171875 C 8.726562 -45.367188 9.867188 -45.96875 11.171875 -45.96875 C 12.429688 -45.96875 13.5625 -45.476562 14.5625 -44.5 C 15.5625 -43.53125 16.445312 -42.375 17.21875 -41.03125 C 17.988281 -39.6875 18.640625 -38.28125 19.171875 -36.8125 C 19.703125 -35.34375 20.148438 -34.125 20.515625 -33.15625 C 21.203125 -31.238281 21.867188 -29.332031 22.515625 -27.4375 C 23.171875 -25.550781 23.804688 -23.628906 24.421875 -21.671875 C 24.460938 -21.585938 24.539062 -21.363281 24.65625 -21 C 24.78125 -20.632812 24.925781 -20.226562 25.09375 -19.78125 C 25.25 -19.289062 25.453125 -18.738281 25.703125 -18.125 C 25.703125 -18.65625 25.691406 -19.03125 25.671875 -19.25 C 25.648438 -19.476562 25.640625 -19.679688 25.640625 -19.859375 C 25.640625 -20.046875 25.640625 -20.28125 25.640625 -20.5625 C 25.640625 -20.851562 25.640625 -21.304688 25.640625 -21.921875 C 25.597656 -23.265625 25.566406 -24.609375 25.546875 -25.953125 C 25.523438 -27.296875 25.515625 -28.617188 25.515625 -29.921875 C 25.515625 -30.484375 25.523438 -31.273438 25.546875 -32.296875 C 25.566406 -33.316406 25.628906 -34.40625 25.734375 -35.5625 C 25.835938 -36.71875 25.988281 -37.882812 26.1875 -39.0625 C 26.394531 -40.25 26.691406 -41.320312 27.078125 -42.28125 C 27.460938 -43.238281 27.945312 -44.019531 28.53125 -44.625 C 29.125 -45.238281 29.847656 -45.546875 30.703125 -45.546875 C 31.722656 -45.546875 32.597656 -45.15625 33.328125 -44.375 C 34.066406 -43.601562 34.675781 -42.617188 35.15625 -41.421875 C 35.644531 -40.222656 36.03125 -38.878906 36.3125 -37.390625 C 36.601562 -35.910156 36.828125 -34.457031 36.984375 -33.03125 C 37.148438 -31.601562 37.253906 -30.28125 37.296875 -29.0625 C 37.335938 -27.84375 37.359375 -26.882812 37.359375 -26.1875 Z M 37.359375 -26.1875 "
})))));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  title: "Youtube Lite",
  description: "Ajouter une vidéo Youtube sans casser les performances de votre site.",
  icon: CustomIcon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/qcm/block.json":
/*!****************************!*\
  !*** ./src/qcm/block.json ***!
  \****************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ocade-blocks/qcm","version":"1.0.0","category":"widgets","keywords":["ocade","qcm","questions","test"],"textdomain":"ocade-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","supports":{"anchor":true,"align":["wide","full"],"defaultAlign":"wide"},"attributes":{"preview":{"type":"boolean","default":false},"question":{"type":"string","default":""},"options":{"type":"array","default":[""]},"orders":{"type":"array","default":[]}},"example":{"attributes":{"preview":true}}}');

/***/ }),

/***/ "./src/qcm/edit-block.js":
/*!*******************************!*\
  !*** ./src/qcm/edit-block.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Block)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Block({
  blockProps
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", {
    style: {
      color: "#aaa"
    }
  }, "R\xE9glages du QCM disponibles dans le panneau lat\xE9ral."));
}

/***/ }),

/***/ "./src/qcm/edit-inspecteur.js":
/*!************************************!*\
  !*** ./src/qcm/edit-inspecteur.js ***!
  \************************************/
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




function Inspecteur({
  attributes,
  setAttributes
}) {
  const {
    question,
    options
  } = attributes;

  // Génère un ordre aléatoire d'affichage
  const generateRandomOrders = length => {
    const indexes = Array.from({
      length
    }, (_, i) => i);
    for (let i = indexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }
    return indexes;
  };

  // Met à jour une option et recalcule l’ordre
  const updateOption = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setAttributes({
      options: newOptions,
      orders: generateRandomOrders(newOptions.length)
    });
  };

  // Ajoute une option uniquement si la dernière n'est pas vide
  const addOption = () => {
    if (options.length === 0 || options[options.length - 1].trim() !== "") {
      const newOptions = [...options, ""];
      setAttributes({
        options: newOptions,
        orders: generateRandomOrders(newOptions.length)
      });
    } else {
      alert("Veuillez remplir l’option précédente avant d’en ajouter une nouvelle.");
    }
  };

  // Réinitialise les options
  const resetOptions = () => {
    setAttributes({
      options: [""],
      orders: [0]
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "R\xE9glages du QCM",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: addOption,
    variant: "secondary",
    style: {
      marginBottom: "0.5rem"
    }
  }, "\u2795 Ajouter une option"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: resetOptions,
    variant: "secondary"
  }, "\u267B\uFE0F R\xE9initialiser"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Question",
    value: question,
    onChange: val => setAttributes({
      question: val
    })
  }), options.map((opt, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    key: i,
    label: `Option ${String.fromCharCode(97 + i)}`,
    value: opt,
    onChange: val => updateOption(val, i)
  }))));
}

/***/ }),

/***/ "./src/qcm/edit-toolbar.js":
/*!*********************************!*\
  !*** ./src/qcm/edit-toolbar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toolbar)
/* harmony export */ });
function Toolbar() {
  return null;
}

/***/ }),

/***/ "./src/qcm/edit.js":
/*!*************************!*\
  !*** ./src/qcm/edit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-toolbar */ "./src/qcm/edit-toolbar.js");
/* harmony import */ var _edit_inspecteur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-inspecteur */ "./src/qcm/edit-inspecteur.js");
/* harmony import */ var _edit_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-block */ "./src/qcm/edit-block.js");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.svg */ "./src/qcm/icon.svg");






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

/***/ "./src/qcm/icon.svg":
/*!**************************!*\
  !*** ./src/qcm/icon.svg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _path, _path2, _g, _path3;
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
    d: "M151.678 197.86a14 14 0 0 1-1.031-2.126 9 9 0 0 1-.547-2.109 4.5 4.5 0 0 1 .14-1.89q.281-.891 1.141-1.5a1.97 1.97 0 0 1 1.516-.376c.57.086 1.187.328 1.844.735.082-.813.14-1.602.172-2.375q.06-1.172.062-2.016a30 30 0 0 0-.219-3.484 18 18 0 0 0-.687-3.375q-.485-1.562-1.281-2.594c-.532-.695-1.204-1.047-2.016-1.047q-1.16.001-1.984.922-.832.907-1.375 2.406-.552 1.486-.797 3.36a30 30 0 0 0-.235 3.75q-.002 2.144.266 4.28c.187 1.419.46 2.7.828 3.845q.543 1.705 1.375 2.75.825 1.03 1.984 1.03.48 0 .844-.187m11.735 2.5q.607.86 1.343 2.171c.489.875.864 1.774 1.125 2.688q.388 1.376.328 2.593c-.042.813-.386 1.461-1.03 1.954q-.739.545-1.595.453-.843-.095-1.734-.547-.892-.457-1.812-1.219a20 20 0 0 1-1.766-1.687 12.7 12.7 0 0 1-3.688 2.203q-2.05.797-4.546.797-3.72 0-6.47-1.86-2.752-1.858-4.562-5-1.797-3.153-2.687-7.297c-.586-2.77-.875-5.68-.875-8.734q0-4.278.937-8.672.95-4.388 2.907-7.937 1.95-3.547 4.937-5.797 2.998-2.264 7.156-2.266c2.688 0 4.938.727 6.75 2.172q2.718 2.174 4.328 5.625 1.625 3.44 2.329 7.719a52.5 52.5 0 0 1 .703 8.547c0 2.523-.211 4.933-.625 7.234q-.61 3.44-1.828 6.375ZM196.312 176.672q0 1.159-.281 2.453a8.4 8.4 0 0 1-.875 2.375 5.7 5.7 0 0 1-1.594 1.828c-.648.492-1.437.734-2.375.734q-2.145.001-3.187-.765a4.1 4.1 0 0 1-1.453-1.922 7.7 7.7 0 0 1-.454-2.469c-.023-.875-.054-1.695-.093-2.469q-.065-1.17-.407-1.921c-.218-.508-.695-.766-1.421-.766q-1.22 0-2.141.89c-.617.587-1.149 1.344-1.594 2.282q-.674 1.407-1.125 3.172a39 39 0 0 0-.734 3.515 44 44 0 0 0-.39 3.297 31 31 0 0 0-.126 2.531q0 1.282.094 3.063a14.4 14.4 0 0 0 .578 3.39q.48 1.611 1.453 2.735.984 1.125 2.813 1.125 1.23 0 2.39-.297 1.154-.31 2.313-.703 1.17-.405 2.36-.703a9.5 9.5 0 0 1 2.405-.313c.938 0 1.707.383 2.313 1.141q.92 1.125.922 2.531 0 1.956-1.219 3.64-1.22 1.677-3.031 2.954-1.798 1.279-3.906 2-2.097.733-3.813.734-4.395-.002-7.453-1.984a15.64 15.64 0 0 1-4.938-5.125q-1.892-3.139-2.718-7.016a37.4 37.4 0 0 1-.813-7.718q-.001-2.562.485-5.61.48-3.059 1.453-6.14a37 37 0 0 1 2.484-5.954c1-1.914 2.164-3.601 3.5-5.062a16.9 16.9 0 0 1 4.547-3.547q2.544-1.343 5.594-1.344c2 0 3.664.5 5 1.5 1.343.993 2.422 2.25 3.234 3.782a16.7 16.7 0 0 1 1.719 5c.32 1.812.484 3.53.484 5.156M240.522 201.094a31 31 0 0 1-.532 3.125 16.5 16.5 0 0 1-.812 2.703q-.487 1.189-1.25 1.89-.767.704-1.75.704-.971 0-1.766-1.5-.797-1.482-1.5-3.954a62 62 0 0 1-1.281-5.593q-.58-3.106-1.031-6.313a156 156 0 0 1-.766-6.25q-.315-3.06-.484-5.328c-.25 1.555-.54 3.29-.86 5.203-.324 1.906-.71 3.852-1.156 5.828q-.673 2.955-1.469 5.797-.797 2.83-1.718 5.063-.91 2.237-1.954 3.578-1.032 1.346-2.187 1.344-1.034 0-2.078-1.407-1.032-1.404-2.016-3.687a52 52 0 0 1-1.828-5.11 133 133 0 0 1-1.594-5.64 131 131 0 0 1-1.28-5.375 98 98 0 0 1-.845-4.25q0 1.284-.03 2.844a106 106 0 0 0-.032 2.234q-.001.3-.031 2.016a72 72 0 0 1-.22 4.093 88 88 0 0 1-.562 5.094c-.242 1.805-.593 3.48-1.062 5.031q-.692 2.314-1.735 3.907-1.032 1.593-2.562 1.703-1.22-.549-2.047-1.86c-.555-.875-1.012-1.898-1.375-3.078a26 26 0 0 1-.86-3.781q-.298-2.016-.484-3.938a49 49 0 0 1-.203-3.562 128 128 0 0 1-.031-2.703q-.001-1.827.203-4.61.217-2.778.703-5.828a69 69 0 0 1 1.281-6.093q.798-3.06 1.922-5.47 1.137-2.418 2.625-3.937 1.498-1.53 3.453-1.53.921.001 1.954 1.046 1.044 1.031 2.078 2.719a38 38 0 0 1 2 3.75 100 100 0 0 1 1.875 4.172 70 70 0 0 1 1.562 4.03c.445 1.282.813 2.372 1.094 3.266a84 84 0 0 1 1.219-3.421 116 116 0 0 1 1.61-4.047 57 57 0 0 1 1.952-4.157 31 31 0 0 1 2.235-3.656q1.17-1.623 2.359-2.625c.789-.676 1.594-1.015 2.406-1.015q2.14 0 3.656 1.593c1.02 1.055 1.875 2.422 2.563 4.11.695 1.687 1.25 3.586 1.656 5.687q.61 3.142.938 6.219c.226 2.055.375 3.977.437 5.766q.094 2.69.094 4.343v1.828q-.001 1.161-.031 2.625-.035 1.472-.157 3.125a133 133 0 0 1-.296 3.282m0 0"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgMzc1IDM3NC45OTk5OTEiIGhlaWdodD0iNTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2ZXJzaW9uPSIxLjAiPjxkZWZzPjxnLz48Y2xpcFBhdGggaWQ9IjAyZjdmNTNiOTkiPjxwYXRoIGQ9Ik0gMTcuMjUgLTEzLjEzNjcxOSBMIDM2MC40ODgyODEgLTEzLjEzNjcxOSBDIDM2NS4wNjI1IC0xMy4xMzY3MTkgMzY5LjQ1MzEyNSAtMTEuMzIwMzEyIDM3Mi42ODc1IC04LjA4NTkzOCBDIDM3NS45MjE4NzUgLTQuODUxNTYyIDM3Ny43MzgyODEgLTAuNDY0ODQ0IDM3Ny43MzgyODEgNC4xMTMyODEgTCAzNzcuNzM4MjgxIDM3Ny41OTM3NSBDIDM3Ny43MzgyODEgMzgyLjE2Nzk2OSAzNzUuOTIxODc1IDM4Ni41NTQ2ODggMzcyLjY4NzUgMzg5Ljc4OTA2MiBDIDM2OS40NTMxMjUgMzkzLjAyMzQzOCAzNjUuMDYyNSAzOTQuODQzNzUgMzYwLjQ4ODI4MSAzOTQuODQzNzUgTCAxNy4yNSAzOTQuODQzNzUgQyAxMi42NzU3ODEgMzk0Ljg0Mzc1IDguMjg5MDYyIDM5My4wMjM0MzggNS4wNTA3ODEgMzg5Ljc4OTA2MiBDIDEuODE2NDA2IDM4Ni41NTQ2ODggMCAzODIuMTY3OTY5IDAgMzc3LjU5Mzc1IEwgMCA0LjExMzI4MSBDIDAgLTAuNDY0ODQ0IDEuODE2NDA2IC00Ljg1MTU2MiA1LjA1MDc4MSAtOC4wODU5MzggQyA4LjI4OTA2MiAtMTEuMzIwMzEyIDEyLjY3NTc4MSAtMTMuMTM2NzE5IDE3LjI1IC0xMy4xMzY3MTkgWiBNIDE3LjI1IC0xMy4xMzY3MTkgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjwvZGVmcz48cmVjdCB4PSItMzcuNSIgd2lkdGg9IjQ1MCIgZmlsbD0iI2ZmZmZmZiIgeT0iLTM3LjQ5OTk5OSIgaGVpZ2h0PSI0NDkuOTk5OTg5IiBmaWxsLW9wYWNpdHk9IjEiLz48cmVjdCB4PSItMzcuNSIgd2lkdGg9IjQ1MCIgZmlsbD0iI2ZmZmZmZiIgeT0iLTM3LjQ5OTk5OSIgaGVpZ2h0PSI0NDkuOTk5OTg5IiBmaWxsLW9wYWNpdHk9IjEiLz48ZyBjbGlwLXBhdGg9InVybCgjMDJmN2Y1M2I5OSkiPjxyZWN0IHg9Ii0zNy41IiB3aWR0aD0iNDUwIiBmaWxsPSIjMDAwMDAwIiB5PSItMzcuNDk5OTk5IiBoZWlnaHQ9IjQ0OS45OTk5ODkiIGZpbGwtb3BhY2l0eT0iMSIvPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNC4yMjUxMTIsIDIwNy43NDk5ODYpIj48Zz48cGF0aCBkPSJNIDE3LjQ1MzEyNSAtOS44OTA2MjUgQyAxNy4wNDY4NzUgLTEwLjU3ODEyNSAxNi43MDMxMjUgLTExLjI4NTE1NiAxNi40MjE4NzUgLTEyLjAxNTYyNSBDIDE2LjE0MDYyNSAtMTIuNzUzOTA2IDE1Ljk1NzAzMSAtMTMuNDU3MDMxIDE1Ljg3NSAtMTQuMTI1IEMgMTUuNzg5MDYyIC0xNC44MDA3ODEgMTUuODM1OTM4IC0xNS40Mjk2ODggMTYuMDE1NjI1IC0xNi4wMTU2MjUgQyAxNi4yMDMxMjUgLTE2LjYwOTM3NSAxNi41ODIwMzEgLTE3LjEwOTM3NSAxNy4xNTYyNSAtMTcuNTE1NjI1IEMgMTcuNjAxNTYyIC0xNy44NDc2NTYgMTguMTA5Mzc1IC0xNy45NzI2NTYgMTguNjcxODc1IC0xNy44OTA2MjUgQyAxOS4yNDIxODggLTE3LjgwNDY4OCAxOS44NTkzNzUgLTE3LjU2MjUgMjAuNTE1NjI1IC0xNy4xNTYyNSBDIDIwLjU5NzY1NiAtMTcuOTY4NzUgMjAuNjU2MjUgLTE4Ljc1NzgxMiAyMC42ODc1IC0xOS41MzEyNSBDIDIwLjcyNjU2MiAtMjAuMzEyNSAyMC43NSAtMjAuOTg0Mzc1IDIwLjc1IC0yMS41NDY4NzUgQyAyMC43NSAtMjIuNjQ4NDM4IDIwLjY3NTc4MSAtMjMuODEyNSAyMC41MzEyNSAtMjUuMDMxMjUgQyAyMC4zOTQ1MzEgLTI2LjI1IDIwLjE2NDA2MiAtMjcuMzc1IDE5Ljg0Mzc1IC0yOC40MDYyNSBDIDE5LjUxOTUzMSAtMjkuNDQ1MzEyIDE5LjA5Mzc1IC0zMC4zMTI1IDE4LjU2MjUgLTMxIEMgMTguMDMxMjUgLTMxLjY5NTMxMiAxNy4zNTkzNzUgLTMyLjA0Njg3NSAxNi41NDY4NzUgLTMyLjA0Njg3NSBDIDE1Ljc3MzQzOCAtMzIuMDQ2ODc1IDE1LjExMzI4MSAtMzEuNzM4MjgxIDE0LjU2MjUgLTMxLjEyNSBDIDE0LjAwNzgxMiAtMzAuNTE5NTMxIDEzLjU1MDc4MSAtMjkuNzE4NzUgMTMuMTg3NSAtMjguNzE4NzUgQyAxMi44MjAzMTIgLTI3LjcyNjU2MiAxMi41NTQ2ODggLTI2LjYwOTM3NSAxMi4zOTA2MjUgLTI1LjM1OTM3NSBDIDEyLjIzNDM3NSAtMjQuMTE3MTg4IDEyLjE1NjI1IC0yMi44NjcxODggMTIuMTU2MjUgLTIxLjYwOTM3NSBDIDEyLjE1NjI1IC0yMC4xNzk2ODggMTIuMjQyMTg4IC0xOC43NTM5MDYgMTIuNDIxODc1IC0xNy4zMjgxMjUgQyAxMi42MDkzNzUgLTE1LjkxMDE1NiAxMi44ODI4MTIgLTE0LjYyODkwNiAxMy4yNSAtMTMuNDg0Mzc1IEMgMTMuNjEzMjgxIC0xMi4zNDc2NTYgMTQuMDcwMzEyIC0xMS40Mjk2ODggMTQuNjI1IC0xMC43MzQzNzUgQyAxNS4xNzU3ODEgLTEwLjA0Njg3NSAxNS44MzU5MzggLTkuNzAzMTI1IDE2LjYwOTM3NSAtOS43MDMxMjUgQyAxNi45Mjk2ODggLTkuNzAzMTI1IDE3LjIxMDkzOCAtOS43NjU2MjUgMTcuNDUzMTI1IC05Ljg5MDYyNSBaIE0gMjkuMTg3NSAtNy4zOTA2MjUgQyAyOS41OTM3NSAtNi44MTY0MDYgMzAuMDM5MDYyIC02LjA5Mzc1IDMwLjUzMTI1IC01LjIxODc1IEMgMzEuMDE5NTMxIC00LjM0Mzc1IDMxLjM5NDUzMSAtMy40NDUzMTIgMzEuNjU2MjUgLTIuNTMxMjUgQyAzMS45MTQwNjIgLTEuNjEzMjgxIDMyLjAyMzQzOCAtMC43NSAzMS45ODQzNzUgMC4wNjI1IEMgMzEuOTQxNDA2IDAuODc1IDMxLjU5NzY1NiAxLjUyMzQzOCAzMC45NTMxMjUgMi4wMTU2MjUgQyAzMC40NjA5MzggMi4zNzg5MDYgMjkuOTI5Njg4IDIuNTMxMjUgMjkuMzU5Mzc1IDIuNDY4NzUgQyAyOC43OTY4NzUgMi40MDYyNSAyOC4yMTg3NSAyLjIyMjY1NiAyNy42MjUgMS45MjE4NzUgQyAyNy4wMzEyNSAxLjYxNzE4OCAyNi40MjU3ODEgMS4yMTA5MzggMjUuODEyNSAwLjcwMzEyNSBDIDI1LjIwNzAzMSAwLjE5MTQwNiAyNC42MTcxODggLTAuMzY3MTg4IDI0LjA0Njg3NSAtMC45ODQzNzUgQyAyMi45NTMxMjUgLTAuMDQ2ODc1IDIxLjcyMjY1NiAwLjY4NzUgMjAuMzU5Mzc1IDEuMjE4NzUgQyAxOC45OTIxODggMS43NSAxNy40NzY1NjIgMi4wMTU2MjUgMTUuODEyNSAyLjAxNTYyNSBDIDEzLjMzMjAzMSAyLjAxNTYyNSAxMS4xNzU3ODEgMS4zOTQ1MzEgOS4zNDM3NSAwLjE1NjI1IEMgNy41MDc4MTIgLTEuMDgyMDMxIDUuOTg4MjgxIC0yLjc1IDQuNzgxMjUgLTQuODQzNzUgQyAzLjU4MjAzMSAtNi45NDUzMTIgMi42ODc1IC05LjM3ODkwNiAyLjA5Mzc1IC0xMi4xNDA2MjUgQyAxLjUwNzgxMiAtMTQuOTEwMTU2IDEuMjE4NzUgLTE3LjgyMDMxMiAxLjIxODc1IC0yMC44NzUgQyAxLjIxODc1IC0yMy43MjY1NjIgMS41MzEyNSAtMjYuNjE3MTg4IDIuMTU2MjUgLTI5LjU0Njg3NSBDIDIuNzg5MDYyIC0zMi40NzI2NTYgMy43NTc4MTIgLTM1LjExNzE4OCA1LjA2MjUgLTM3LjQ4NDM3NSBDIDYuMzYzMjgxIC0zOS44NDc2NTYgOC4wMDc4MTIgLTQxLjc4MTI1IDEwIC00My4yODEyNSBDIDEyIC00NC43ODkwNjIgMTQuMzgyODEyIC00NS41NDY4NzUgMTcuMTU2MjUgLTQ1LjU0Njg3NSBDIDE5Ljg0Mzc1IC00NS41NDY4NzUgMjIuMDkzNzUgLTQ0LjgyMDMxMiAyMy45MDYyNSAtNDMuMzc1IEMgMjUuNzE4NzUgLTQxLjkyNTc4MSAyNy4xNjAxNTYgLTQwLjA1MDc4MSAyOC4yMzQzNzUgLTM3Ljc1IEMgMjkuMzE2NDA2IC0zNS40NTcwMzEgMzAuMDkzNzUgLTMyLjg4MjgxMiAzMC41NjI1IC0zMC4wMzEyNSBDIDMxLjAzMTI1IC0yNy4xODc1IDMxLjI2NTYyNSAtMjQuMzM1OTM4IDMxLjI2NTYyNSAtMjEuNDg0Mzc1IEMgMzEuMjY1NjI1IC0xOC45NjA5MzggMzEuMDU0Njg4IC0xNi41NTA3ODEgMzAuNjQwNjI1IC0xNC4yNSBDIDMwLjIzNDM3NSAtMTEuOTU3MDMxIDI5LjYyNSAtOS44MzIwMzEgMjguODEyNSAtNy44NzUgWiBNIDI5LjE4NzUgLTcuMzkwNjI1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY3LjQ5OTY2NSwgMjA3Ljc0OTk4NikiPjxnPjxwYXRoIGQ9Ik0gMjguODEyNSAtMzEuMDc4MTI1IEMgMjguODEyNSAtMzAuMzA0Njg4IDI4LjcxODc1IC0yOS40ODgyODEgMjguNTMxMjUgLTI4LjYyNSBDIDI4LjM1MTU2MiAtMjcuNzY5NTMxIDI4LjA2MjUgLTI2Ljk3NjU2MiAyNy42NTYyNSAtMjYuMjUgQyAyNy4yNSAtMjUuNTE5NTMxIDI2LjcxODc1IC0yNC45MTAxNTYgMjYuMDYyNSAtMjQuNDIxODc1IEMgMjUuNDE0MDYyIC0yMy45Mjk2ODggMjQuNjI1IC0yMy42ODc1IDIzLjY4NzUgLTIzLjY4NzUgQyAyMi4yNTc4MTIgLTIzLjY4NzUgMjEuMTk1MzEyIC0yMy45NDE0MDYgMjAuNSAtMjQuNDUzMTI1IEMgMTkuODEyNSAtMjQuOTYwOTM4IDE5LjMyODEyNSAtMjUuNjAxNTYyIDE5LjA0Njg3NSAtMjYuMzc1IEMgMTguNzY1NjI1IC0yNy4xNDQ1MzEgMTguNjEzMjgxIC0yNy45Njg3NSAxOC41OTM3NSAtMjguODQzNzUgQyAxOC41NzAzMTIgLTI5LjcxODc1IDE4LjUzOTA2MiAtMzAuNTM5MDYyIDE4LjUgLTMxLjMxMjUgQyAxOC40NTcwMzEgLTMyLjA5Mzc1IDE4LjMyMDMxMiAtMzIuNzM0Mzc1IDE4LjA5Mzc1IC0zMy4yMzQzNzUgQyAxNy44NzUgLTMzLjc0MjE4OCAxNy4zOTg0MzggLTM0IDE2LjY3MTg3NSAtMzQgQyAxNS44NTkzNzUgLTM0IDE1LjE0NDUzMSAtMzMuNzAzMTI1IDE0LjUzMTI1IC0zMy4xMDkzNzUgQyAxMy45MTQwNjIgLTMyLjUyMzQzOCAxMy4zODI4MTIgLTMxLjc2NTYyNSAxMi45Mzc1IC0zMC44MjgxMjUgQyAxMi40ODgyODEgLTI5Ljg5MDYyNSAxMi4xMTMyODEgLTI4LjgzMjAzMSAxMS44MTI1IC0yNy42NTYyNSBDIDExLjUwNzgxMiAtMjYuNDc2NTYyIDExLjI2NTYyNSAtMjUuMzA0Njg4IDExLjA3ODEyNSAtMjQuMTQwNjI1IEMgMTAuODk4NDM4IC0yMi45ODQzNzUgMTAuNzY5NTMxIC0yMS44ODI4MTIgMTAuNjg3NSAtMjAuODQzNzUgQyAxMC42MDE1NjIgLTE5LjgxMjUgMTAuNTYyNSAtMTguOTY4NzUgMTAuNTYyNSAtMTguMzEyNSBDIDEwLjU2MjUgLTE3LjQ1NzAzMSAxMC41OTM3NSAtMTYuNDM3NSAxMC42NTYyNSAtMTUuMjUgQyAxMC43MTg3NSAtMTQuMDcwMzEyIDEwLjkxMDE1NiAtMTIuOTQxNDA2IDExLjIzNDM3NSAtMTEuODU5Mzc1IEMgMTEuNTU0Njg4IC0xMC43ODUxNTYgMTIuMDM5MDYyIC05Ljg3NSAxMi42ODc1IC05LjEyNSBDIDEzLjM0Mzc1IC04LjM3NSAxNC4yODEyNSAtOCAxNS41IC04IEMgMTYuMzIwMzEyIC04IDE3LjExNzE4OCAtOC4wOTc2NTYgMTcuODkwNjI1IC04LjI5Njg3NSBDIDE4LjY2MDE1NiAtOC41MDM5MDYgMTkuNDI5Njg4IC04LjczODI4MSAyMC4yMDMxMjUgLTkgQyAyMC45ODQzNzUgLTkuMjY5NTMxIDIxLjc2OTUzMSAtOS41MDM5MDYgMjIuNTYyNSAtOS43MDMxMjUgQyAyMy4zNTE1NjIgLTkuOTEwMTU2IDI0LjE1NjI1IC0xMC4wMTU2MjUgMjQuOTY4NzUgLTEwLjAxNTYyNSBDIDI1LjkwNjI1IC0xMC4wMTU2MjUgMjYuNjc1NzgxIC05LjYzMjgxMiAyNy4yODEyNSAtOC44NzUgQyAyNy44OTQ1MzEgLTguMTI1IDI4LjIwMzEyNSAtNy4yODEyNSAyOC4yMDMxMjUgLTYuMzQzNzUgQyAyOC4yMDMxMjUgLTUuMDM5MDYyIDI3Ljc5Njg3NSAtMy44MjgxMjUgMjYuOTg0Mzc1IC0yLjcwMzEyNSBDIDI2LjE3MTg3NSAtMS41ODU5MzggMjUuMTYwMTU2IC0wLjYwMTU2MiAyMy45NTMxMjUgMC4yNSBDIDIyLjc1MzkwNiAxLjEwMTU2MiAyMS40NTMxMjUgMS43Njk1MzEgMjAuMDQ2ODc1IDIuMjUgQyAxOC42NDg0MzggMi43MzgyODEgMTcuMzc4OTA2IDIuOTg0Mzc1IDE2LjIzNDM3NSAyLjk4NDM3NSBDIDEzLjMwNDY4OCAyLjk4NDM3NSAxMC44MjAzMTIgMi4zMjAzMTIgOC43ODEyNSAxIEMgNi43NSAtMC4zMjAzMTIgNS4xMDE1NjIgLTIuMDMxMjUgMy44NDM3NSAtNC4xMjUgQyAyLjU4MjAzMSAtNi4yMTg3NSAxLjY3NTc4MSAtOC41NTQ2ODggMS4xMjUgLTExLjE0MDYyNSBDIDAuNTgyMDMxIC0xMy43MjI2NTYgMC4zMTI1IC0xNi4yOTY4NzUgMC4zMTI1IC0xOC44NTkzNzUgQyAwLjMxMjUgLTIwLjU2NjQwNiAwLjQ3MjY1NiAtMjIuNDM3NSAwLjc5Njg3NSAtMjQuNDY4NzUgQyAxLjExNzE4OCAtMjYuNTA3ODEyIDEuNjAxNTYyIC0yOC41NTQ2ODggMi4yNSAtMzAuNjA5Mzc1IEMgMi45MDYyNSAtMzIuNjcxODc1IDMuNzM0Mzc1IC0zNC42NTYyNSA0LjczNDM3NSAtMzYuNTYyNSBDIDUuNzM0Mzc1IC0zOC40NzY1NjIgNi44OTg0MzggLTQwLjE2NDA2MiA4LjIzNDM3NSAtNDEuNjI1IEMgOS41NzgxMjUgLTQzLjA5Mzc1IDExLjA5Mzc1IC00NC4yNzM0MzggMTIuNzgxMjUgLTQ1LjE3MTg3NSBDIDE0LjQ3NjU2MiAtNDYuMDY2NDA2IDE2LjM0Mzc1IC00Ni41MTU2MjUgMTguMzc1IC00Ni41MTU2MjUgQyAyMC4zNzUgLTQ2LjUxNTYyNSAyMi4wMzkwNjIgLTQ2LjAxNTYyNSAyMy4zNzUgLTQ1LjAxNTYyNSBDIDI0LjcxODc1IC00NC4wMjM0MzggMjUuNzk2ODc1IC00Mi43NjU2MjUgMjYuNjA5Mzc1IC00MS4yMzQzNzUgQyAyNy40Mjk2ODggLTM5LjcxMDkzOCAyOC4wMDM5MDYgLTM4LjA0Njg3NSAyOC4zMjgxMjUgLTM2LjIzNDM3NSBDIDI4LjY0ODQzOCAtMzQuNDIxODc1IDI4LjgxMjUgLTMyLjcwMzEyNSAyOC44MTI1IC0zMS4wNzgxMjUgWiBNIDI4LjgxMjUgLTMxLjA3ODEyNSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5Ni45Mjc4MDEsIDIwNy43NDk5ODYpIj48Zz48cGF0aCBkPSJNIDQzLjU5Mzc1IC02LjY1NjI1IEMgNDMuNDY4NzUgLTUuNTkzNzUgNDMuMjg5MDYyIC00LjU1MDc4MSA0My4wNjI1IC0zLjUzMTI1IEMgNDIuODQzNzUgLTIuNTE5NTMxIDQyLjU3MDMxMiAtMS42MTcxODggNDIuMjUgLTAuODI4MTI1IEMgNDEuOTI1NzgxIC0wLjAzNTE1NjIgNDEuNTA3ODEyIDAuNTkzNzUgNDEgMS4wNjI1IEMgNDAuNDg4MjgxIDEuNTMxMjUgMzkuOTA2MjUgMS43NjU2MjUgMzkuMjUgMS43NjU2MjUgQyAzOC42MDE1NjIgMS43NjU2MjUgMzguMDE1NjI1IDEuMjY1NjI1IDM3LjQ4NDM3NSAwLjI2NTYyNSBDIDM2Ljk1MzEyNSAtMC43MjI2NTYgMzYuNDUzMTI1IC0yLjAzOTA2MiAzNS45ODQzNzUgLTMuNjg3NSBDIDM1LjUxNTYyNSAtNS4zNDM3NSAzNS4wODU5MzggLTcuMjA3MDMxIDM0LjcwMzEyNSAtOS4yODEyNSBDIDM0LjMxNjQwNiAtMTEuMzUxNTYyIDMzLjk3MjY1NiAtMTMuNDU3MDMxIDMzLjY3MTg3NSAtMTUuNTkzNzUgQyAzMy4zNjcxODggLTE3LjcyNjU2MiAzMy4xMTMyODEgLTE5LjgxMjUgMzIuOTA2MjUgLTIxLjg0Mzc1IEMgMzIuNjk1MzEyIC0yMy44ODI4MTIgMzIuNTM1MTU2IC0yNS42NjAxNTYgMzIuNDIxODc1IC0yNy4xNzE4NzUgQyAzMi4xNzE4NzUgLTI1LjYxNzE4OCAzMS44ODI4MTIgLTIzLjg4MjgxMiAzMS41NjI1IC0yMS45Njg3NSBDIDMxLjIzODI4MSAtMjAuMDYyNSAzMC44NTE1NjIgLTE4LjExNzE4OCAzMC40MDYyNSAtMTYuMTQwNjI1IEMgMjkuOTU3MDMxIC0xNC4xNzE4NzUgMjkuNDY4NzUgLTEyLjIzODI4MSAyOC45Mzc1IC0xMC4zNDM3NSBDIDI4LjQwNjI1IC04LjQ1NzAzMSAyNy44MzIwMzEgLTYuNzY5NTMxIDI3LjIxODc1IC01LjI4MTI1IEMgMjYuNjEzMjgxIC0zLjc4OTA2MiAyNS45NjA5MzggLTIuNTk3NjU2IDI1LjI2NTYyNSAtMS43MDMxMjUgQyAyNC41NzgxMjUgLTAuODA0Njg4IDIzLjg0NzY1NiAtMC4zNTkzNzUgMjMuMDc4MTI1IC0wLjM1OTM3NSBDIDIyLjM5MDYyNSAtMC4zNTkzNzUgMjEuNjk1MzEyIC0wLjgyODEyNSAyMSAtMS43NjU2MjUgQyAyMC4zMTI1IC0yLjcwMzEyNSAxOS42NDA2MjUgLTMuOTI5Njg4IDE4Ljk4NDM3NSAtNS40NTMxMjUgQyAxOC4zMzU5MzggLTYuOTg0Mzc1IDE3LjcyNjU2MiAtOC42ODc1IDE3LjE1NjI1IC0xMC41NjI1IEMgMTYuNTgyMDMxIC0xMi40Mzc1IDE2LjA1MDc4MSAtMTQuMzE2NDA2IDE1LjU2MjUgLTE2LjIwMzEyNSBDIDE1LjA3MDMxMiAtMTguMDk3NjU2IDE0LjY0NDUzMSAtMTkuODkwNjI1IDE0LjI4MTI1IC0yMS41NzgxMjUgQyAxMy45MTQwNjIgLTIzLjI2NTYyNSAxMy42MzI4MTIgLTI0LjY3OTY4OCAxMy40Mzc1IC0yNS44MjgxMjUgQyAxMy40Mzc1IC0yNC45NzI2NTYgMTMuNDI1NzgxIC0yNC4wMjM0MzggMTMuNDA2MjUgLTIyLjk4NDM3NSBDIDEzLjM4MjgxMiAtMjEuOTQxNDA2IDEzLjM3NSAtMjEuMTk1MzEyIDEzLjM3NSAtMjAuNzUgQyAxMy4zNzUgLTIwLjU1MDc4MSAxMy4zNjMyODEgLTE5Ljg3ODkwNiAxMy4zNDM3NSAtMTguNzM0Mzc1IEMgMTMuMzIwMzEyIC0xNy41OTc2NTYgMTMuMjUgLTE2LjIzNDM3NSAxMy4xMjUgLTE0LjY0MDYyNSBDIDEzIC0xMy4wNTQ2ODggMTIuODEyNSAtMTEuMzU5Mzc1IDEyLjU2MjUgLTkuNTQ2ODc1IEMgMTIuMzIwMzEyIC03Ljc0MjE4OCAxMS45Njg3NSAtNi4wNjY0MDYgMTEuNSAtNC41MTU2MjUgQyAxMS4wMzkwNjIgLTIuOTcyNjU2IDEwLjQ2MDkzOCAtMS42NzE4NzUgOS43NjU2MjUgLTAuNjA5Mzc1IEMgOS4wNzgxMjUgMC40NTMxMjUgOC4yMjI2NTYgMS4wMTk1MzEgNy4yMDMxMjUgMS4wOTM3NSBDIDYuMzkwNjI1IDAuNzI2NTYyIDUuNzA3MDMxIDAuMTA5Mzc1IDUuMTU2MjUgLTAuNzY1NjI1IEMgNC42MDE1NjIgLTEuNjQwNjI1IDQuMTQ0NTMxIC0yLjY2NDA2MiAzLjc4MTI1IC0zLjg0Mzc1IEMgMy40MTQwNjIgLTUuMDE5NTMxIDMuMTI4OTA2IC02LjI4MTI1IDIuOTIxODc1IC03LjYyNSBDIDIuNzIyNjU2IC04Ljk2ODc1IDIuNTYyNSAtMTAuMjgxMjUgMi40Mzc1IC0xMS41NjI1IEMgMi4zMjAzMTIgLTEyLjg0Mzc1IDIuMjUzOTA2IC0xNC4wMzEyNSAyLjIzNDM3NSAtMTUuMTI1IEMgMi4yMTA5MzggLTE2LjIyNjU2MiAyLjIwMzEyNSAtMTcuMTI4OTA2IDIuMjAzMTI1IC0xNy44MjgxMjUgQyAyLjIwMzEyNSAtMTkuMDQ2ODc1IDIuMjY5NTMxIC0yMC41ODIwMzEgMi40MDYyNSAtMjIuNDM3NSBDIDIuNTUwNzgxIC0yNC4yODkwNjIgMi43ODUxNTYgLTI2LjIzNDM3NSAzLjEwOTM3NSAtMjguMjY1NjI1IEMgMy40NDE0MDYgLTMwLjI5Njg3NSAzLjg2NzE4OCAtMzIuMzI4MTI1IDQuMzkwNjI1IC0zNC4zNTkzNzUgQyA0LjkyMTg3NSAtMzYuMzk4NDM4IDUuNTYyNSAtMzguMjIyNjU2IDYuMzEyNSAtMzkuODI4MTI1IEMgNy4wNzAzMTIgLTQxLjQ0MTQwNiA3Ljk0NTMxMiAtNDIuNzUzOTA2IDguOTM3NSAtNDMuNzY1NjI1IEMgOS45Mzc1IC00NC43ODUxNTYgMTEuMDg1OTM4IC00NS4yOTY4NzUgMTIuMzkwNjI1IC00NS4yOTY4NzUgQyAxMy4wMDM5MDYgLTQ1LjI5Njg3NSAxMy42NTYyNSAtNDQuOTQ1MzEyIDE0LjM0Mzc1IC00NC4yNSBDIDE1LjAzOTA2MiAtNDMuNTYyNSAxNS43MzQzNzUgLTQyLjY1NjI1IDE2LjQyMTg3NSAtNDEuNTMxMjUgQyAxNy4xMDkzNzUgLTQwLjQxNDA2MiAxNy43NzM0MzggLTM5LjE2NDA2MiAxOC40MjE4NzUgLTM3Ljc4MTI1IEMgMTkuMDc4MTI1IC0zNi40MDYyNSAxOS43MDMxMjUgLTM1LjAxNTYyNSAyMC4yOTY4NzUgLTMzLjYwOTM3NSBDIDIwLjg5MDYyNSAtMzIuMjAzMTI1IDIxLjQxMDE1NiAtMzAuODU5Mzc1IDIxLjg1OTM3NSAtMjkuNTc4MTI1IEMgMjIuMzA0Njg4IC0yOC4yOTY4NzUgMjIuNjcxODc1IC0yNy4yMDcwMzEgMjIuOTUzMTI1IC0yNi4zMTI1IEMgMjMuMjczNDM4IC0yNy4yODkwNjIgMjMuNjc5Njg4IC0yOC40Mjk2ODggMjQuMTcxODc1IC0yOS43MzQzNzUgQyAyNC42NjAxNTYgLTMxLjAzNTE1NiAyNS4xOTUzMTIgLTMyLjM4MjgxMiAyNS43ODEyNSAtMzMuNzgxMjUgQyAyNi4zNzUgLTM1LjE4NzUgMjcuMDIzNDM4IC0zNi41NzAzMTIgMjcuNzM0Mzc1IC0zNy45Mzc1IEMgMjguNDUzMTI1IC0zOS4zMDA3ODEgMjkuMTk1MzEyIC00MC41MTk1MzEgMjkuOTY4NzUgLTQxLjU5Mzc1IEMgMzAuNzUgLTQyLjY3NTc4MSAzMS41MzUxNTYgLTQzLjU1MDc4MSAzMi4zMjgxMjUgLTQ0LjIxODc1IEMgMzMuMTE3MTg4IC00NC44OTQ1MzEgMzMuOTIxODc1IC00NS4yMzQzNzUgMzQuNzM0Mzc1IC00NS4yMzQzNzUgQyAzNi4xNjAxNTYgLTQ1LjIzNDM3NSAzNy4zNzg5MDYgLTQ0LjcwMzEyNSAzOC4zOTA2MjUgLTQzLjY0MDYyNSBDIDM5LjQxMDE1NiAtNDIuNTg1OTM4IDQwLjI2NTYyNSAtNDEuMjE4NzUgNDAuOTUzMTI1IC0zOS41MzEyNSBDIDQxLjY0ODQzOCAtMzcuODQzNzUgNDIuMjAzMTI1IC0zNS45NDUzMTIgNDIuNjA5Mzc1IC0zMy44NDM3NSBDIDQzLjAxNTYyNSAtMzEuNzUgNDMuMzI4MTI1IC0yOS42NzU3ODEgNDMuNTQ2ODc1IC0yNy42MjUgQyA0My43NzM0MzggLTI1LjU3MDMxMiA0My45MjE4NzUgLTIzLjY0ODQzOCA0My45ODQzNzUgLTIxLjg1OTM3NSBDIDQ0LjA0Njg3NSAtMjAuMDY2NDA2IDQ0LjA3ODEyNSAtMTguNjE3MTg4IDQ0LjA3ODEyNSAtMTcuNTE1NjI1IEMgNDQuMDc4MTI1IC0xNy4wNjY0MDYgNDQuMDc4MTI1IC0xNi40NTcwMzEgNDQuMDc4MTI1IC0xNS42ODc1IEMgNDQuMDc4MTI1IC0xNC45MTQwNjIgNDQuMDY2NDA2IC0xNC4wMzkwNjIgNDQuMDQ2ODc1IC0xMy4wNjI1IEMgNDQuMDIzNDM4IC0xMi4wODIwMzEgNDMuOTcyNjU2IC0xMS4wMzkwNjIgNDMuODkwNjI1IC05LjkzNzUgQyA0My44MDQ2ODggLTguODQzNzUgNDMuNzA3MDMxIC03Ljc1IDQzLjU5Mzc1IC02LjY1NjI1IFogTSA0My41OTM3NSAtNi42NTYyNSAiLz48L2c+PC9nPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./src/qcm/save.js":
/*!*************************!*\
  !*** ./src/qcm/save.js ***!
  \*************************/
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
    question = "",
    options = [],
    orders = []
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, question)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: `
          const container = this.closest('.wp-block-ocade-blocks-qcm');
          if (!container) {
            this.dataset.success = "false";
            this.dataset.reponse = "false";
            return;
          }
          const radios = container.querySelectorAll('input[type="radio"]');
          const selected = Array.from(radios).find(r => r.checked);
          if (!selected) {
            this.dataset.success = "false";
            this.dataset.reponse = "false";
            return;
          }

          const isCorrect = radios[0].checked;
          this.dataset.success = isCorrect ? "true" : "false";
          delete this.dataset.reponse;
        `
  }, "V\xE9rifier ma r\xE9ponse"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "qcl-options",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }
  }, options.map((opt, index) => {
    var _orders$index;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "qcl-option",
      style: {
        order: (_orders$index = orders[index]) !== null && _orders$index !== void 0 ? _orders$index : index,
        // fallback au cas où
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      name: "qcl",
      id: `opt-${index}`,
      value: opt
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: `opt-${index}`
    }, String.fromCharCode(97 + index), ") ", opt));
  })));
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
/*!**************************!*\
  !*** ./src/qcm/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/qcm/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/qcm/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/qcm/save.js");






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
  id: "02f7f53b99"
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
  "clip-path": "url(#02f7f53b99)"
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
  transform: "translate(134.225112, 207.749986)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 17.453125 -9.890625 C 17.046875 -10.578125 16.703125 -11.285156 16.421875 -12.015625 C 16.140625 -12.753906 15.957031 -13.457031 15.875 -14.125 C 15.789062 -14.800781 15.835938 -15.429688 16.015625 -16.015625 C 16.203125 -16.609375 16.582031 -17.109375 17.15625 -17.515625 C 17.601562 -17.847656 18.109375 -17.972656 18.671875 -17.890625 C 19.242188 -17.804688 19.859375 -17.5625 20.515625 -17.15625 C 20.597656 -17.96875 20.65625 -18.757812 20.6875 -19.53125 C 20.726562 -20.3125 20.75 -20.984375 20.75 -21.546875 C 20.75 -22.648438 20.675781 -23.8125 20.53125 -25.03125 C 20.394531 -26.25 20.164062 -27.375 19.84375 -28.40625 C 19.519531 -29.445312 19.09375 -30.3125 18.5625 -31 C 18.03125 -31.695312 17.359375 -32.046875 16.546875 -32.046875 C 15.773438 -32.046875 15.113281 -31.738281 14.5625 -31.125 C 14.007812 -30.519531 13.550781 -29.71875 13.1875 -28.71875 C 12.820312 -27.726562 12.554688 -26.609375 12.390625 -25.359375 C 12.234375 -24.117188 12.15625 -22.867188 12.15625 -21.609375 C 12.15625 -20.179688 12.242188 -18.753906 12.421875 -17.328125 C 12.609375 -15.910156 12.882812 -14.628906 13.25 -13.484375 C 13.613281 -12.347656 14.070312 -11.429688 14.625 -10.734375 C 15.175781 -10.046875 15.835938 -9.703125 16.609375 -9.703125 C 16.929688 -9.703125 17.210938 -9.765625 17.453125 -9.890625 Z M 29.1875 -7.390625 C 29.59375 -6.816406 30.039062 -6.09375 30.53125 -5.21875 C 31.019531 -4.34375 31.394531 -3.445312 31.65625 -2.53125 C 31.914062 -1.613281 32.023438 -0.75 31.984375 0.0625 C 31.941406 0.875 31.597656 1.523438 30.953125 2.015625 C 30.460938 2.378906 29.929688 2.53125 29.359375 2.46875 C 28.796875 2.40625 28.21875 2.222656 27.625 1.921875 C 27.03125 1.617188 26.425781 1.210938 25.8125 0.703125 C 25.207031 0.191406 24.617188 -0.367188 24.046875 -0.984375 C 22.953125 -0.046875 21.722656 0.6875 20.359375 1.21875 C 18.992188 1.75 17.476562 2.015625 15.8125 2.015625 C 13.332031 2.015625 11.175781 1.394531 9.34375 0.15625 C 7.507812 -1.082031 5.988281 -2.75 4.78125 -4.84375 C 3.582031 -6.945312 2.6875 -9.378906 2.09375 -12.140625 C 1.507812 -14.910156 1.21875 -17.820312 1.21875 -20.875 C 1.21875 -23.726562 1.53125 -26.617188 2.15625 -29.546875 C 2.789062 -32.472656 3.757812 -35.117188 5.0625 -37.484375 C 6.363281 -39.847656 8.007812 -41.78125 10 -43.28125 C 12 -44.789062 14.382812 -45.546875 17.15625 -45.546875 C 19.84375 -45.546875 22.09375 -44.820312 23.90625 -43.375 C 25.71875 -41.925781 27.160156 -40.050781 28.234375 -37.75 C 29.316406 -35.457031 30.09375 -32.882812 30.5625 -30.03125 C 31.03125 -27.1875 31.265625 -24.335938 31.265625 -21.484375 C 31.265625 -18.960938 31.054688 -16.550781 30.640625 -14.25 C 30.234375 -11.957031 29.625 -9.832031 28.8125 -7.875 Z M 29.1875 -7.390625 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(167.499665, 207.749986)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 28.8125 -31.078125 C 28.8125 -30.304688 28.71875 -29.488281 28.53125 -28.625 C 28.351562 -27.769531 28.0625 -26.976562 27.65625 -26.25 C 27.25 -25.519531 26.71875 -24.910156 26.0625 -24.421875 C 25.414062 -23.929688 24.625 -23.6875 23.6875 -23.6875 C 22.257812 -23.6875 21.195312 -23.941406 20.5 -24.453125 C 19.8125 -24.960938 19.328125 -25.601562 19.046875 -26.375 C 18.765625 -27.144531 18.613281 -27.96875 18.59375 -28.84375 C 18.570312 -29.71875 18.539062 -30.539062 18.5 -31.3125 C 18.457031 -32.09375 18.320312 -32.734375 18.09375 -33.234375 C 17.875 -33.742188 17.398438 -34 16.671875 -34 C 15.859375 -34 15.144531 -33.703125 14.53125 -33.109375 C 13.914062 -32.523438 13.382812 -31.765625 12.9375 -30.828125 C 12.488281 -29.890625 12.113281 -28.832031 11.8125 -27.65625 C 11.507812 -26.476562 11.265625 -25.304688 11.078125 -24.140625 C 10.898438 -22.984375 10.769531 -21.882812 10.6875 -20.84375 C 10.601562 -19.8125 10.5625 -18.96875 10.5625 -18.3125 C 10.5625 -17.457031 10.59375 -16.4375 10.65625 -15.25 C 10.71875 -14.070312 10.910156 -12.941406 11.234375 -11.859375 C 11.554688 -10.785156 12.039062 -9.875 12.6875 -9.125 C 13.34375 -8.375 14.28125 -8 15.5 -8 C 16.320312 -8 17.117188 -8.097656 17.890625 -8.296875 C 18.660156 -8.503906 19.429688 -8.738281 20.203125 -9 C 20.984375 -9.269531 21.769531 -9.503906 22.5625 -9.703125 C 23.351562 -9.910156 24.15625 -10.015625 24.96875 -10.015625 C 25.90625 -10.015625 26.675781 -9.632812 27.28125 -8.875 C 27.894531 -8.125 28.203125 -7.28125 28.203125 -6.34375 C 28.203125 -5.039062 27.796875 -3.828125 26.984375 -2.703125 C 26.171875 -1.585938 25.160156 -0.601562 23.953125 0.25 C 22.753906 1.101562 21.453125 1.769531 20.046875 2.25 C 18.648438 2.738281 17.378906 2.984375 16.234375 2.984375 C 13.304688 2.984375 10.820312 2.320312 8.78125 1 C 6.75 -0.320312 5.101562 -2.03125 3.84375 -4.125 C 2.582031 -6.21875 1.675781 -8.554688 1.125 -11.140625 C 0.582031 -13.722656 0.3125 -16.296875 0.3125 -18.859375 C 0.3125 -20.566406 0.472656 -22.4375 0.796875 -24.46875 C 1.117188 -26.507812 1.601562 -28.554688 2.25 -30.609375 C 2.90625 -32.671875 3.734375 -34.65625 4.734375 -36.5625 C 5.734375 -38.476562 6.898438 -40.164062 8.234375 -41.625 C 9.578125 -43.09375 11.09375 -44.273438 12.78125 -45.171875 C 14.476562 -46.066406 16.34375 -46.515625 18.375 -46.515625 C 20.375 -46.515625 22.039062 -46.015625 23.375 -45.015625 C 24.71875 -44.023438 25.796875 -42.765625 26.609375 -41.234375 C 27.429688 -39.710938 28.003906 -38.046875 28.328125 -36.234375 C 28.648438 -34.421875 28.8125 -32.703125 28.8125 -31.078125 Z M 28.8125 -31.078125 "
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "#ffffff",
  "fill-opacity": "1"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(196.927801, 207.749986)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M 43.59375 -6.65625 C 43.46875 -5.59375 43.289062 -4.550781 43.0625 -3.53125 C 42.84375 -2.519531 42.570312 -1.617188 42.25 -0.828125 C 41.925781 -0.0351562 41.507812 0.59375 41 1.0625 C 40.488281 1.53125 39.90625 1.765625 39.25 1.765625 C 38.601562 1.765625 38.015625 1.265625 37.484375 0.265625 C 36.953125 -0.722656 36.453125 -2.039062 35.984375 -3.6875 C 35.515625 -5.34375 35.085938 -7.207031 34.703125 -9.28125 C 34.316406 -11.351562 33.972656 -13.457031 33.671875 -15.59375 C 33.367188 -17.726562 33.113281 -19.8125 32.90625 -21.84375 C 32.695312 -23.882812 32.535156 -25.660156 32.421875 -27.171875 C 32.171875 -25.617188 31.882812 -23.882812 31.5625 -21.96875 C 31.238281 -20.0625 30.851562 -18.117188 30.40625 -16.140625 C 29.957031 -14.171875 29.46875 -12.238281 28.9375 -10.34375 C 28.40625 -8.457031 27.832031 -6.769531 27.21875 -5.28125 C 26.613281 -3.789062 25.960938 -2.597656 25.265625 -1.703125 C 24.578125 -0.804688 23.847656 -0.359375 23.078125 -0.359375 C 22.390625 -0.359375 21.695312 -0.828125 21 -1.765625 C 20.3125 -2.703125 19.640625 -3.929688 18.984375 -5.453125 C 18.335938 -6.984375 17.726562 -8.6875 17.15625 -10.5625 C 16.582031 -12.4375 16.050781 -14.316406 15.5625 -16.203125 C 15.070312 -18.097656 14.644531 -19.890625 14.28125 -21.578125 C 13.914062 -23.265625 13.632812 -24.679688 13.4375 -25.828125 C 13.4375 -24.972656 13.425781 -24.023438 13.40625 -22.984375 C 13.382812 -21.941406 13.375 -21.195312 13.375 -20.75 C 13.375 -20.550781 13.363281 -19.878906 13.34375 -18.734375 C 13.320312 -17.597656 13.25 -16.234375 13.125 -14.640625 C 13 -13.054688 12.8125 -11.359375 12.5625 -9.546875 C 12.320312 -7.742188 11.96875 -6.066406 11.5 -4.515625 C 11.039062 -2.972656 10.460938 -1.671875 9.765625 -0.609375 C 9.078125 0.453125 8.222656 1.019531 7.203125 1.09375 C 6.390625 0.726562 5.707031 0.109375 5.15625 -0.765625 C 4.601562 -1.640625 4.144531 -2.664062 3.78125 -3.84375 C 3.414062 -5.019531 3.128906 -6.28125 2.921875 -7.625 C 2.722656 -8.96875 2.5625 -10.28125 2.4375 -11.5625 C 2.320312 -12.84375 2.253906 -14.03125 2.234375 -15.125 C 2.210938 -16.226562 2.203125 -17.128906 2.203125 -17.828125 C 2.203125 -19.046875 2.269531 -20.582031 2.40625 -22.4375 C 2.550781 -24.289062 2.785156 -26.234375 3.109375 -28.265625 C 3.441406 -30.296875 3.867188 -32.328125 4.390625 -34.359375 C 4.921875 -36.398438 5.5625 -38.222656 6.3125 -39.828125 C 7.070312 -41.441406 7.945312 -42.753906 8.9375 -43.765625 C 9.9375 -44.785156 11.085938 -45.296875 12.390625 -45.296875 C 13.003906 -45.296875 13.65625 -44.945312 14.34375 -44.25 C 15.039062 -43.5625 15.734375 -42.65625 16.421875 -41.53125 C 17.109375 -40.414062 17.773438 -39.164062 18.421875 -37.78125 C 19.078125 -36.40625 19.703125 -35.015625 20.296875 -33.609375 C 20.890625 -32.203125 21.410156 -30.859375 21.859375 -29.578125 C 22.304688 -28.296875 22.671875 -27.207031 22.953125 -26.3125 C 23.273438 -27.289062 23.679688 -28.429688 24.171875 -29.734375 C 24.660156 -31.035156 25.195312 -32.382812 25.78125 -33.78125 C 26.375 -35.1875 27.023438 -36.570312 27.734375 -37.9375 C 28.453125 -39.300781 29.195312 -40.519531 29.96875 -41.59375 C 30.75 -42.675781 31.535156 -43.550781 32.328125 -44.21875 C 33.117188 -44.894531 33.921875 -45.234375 34.734375 -45.234375 C 36.160156 -45.234375 37.378906 -44.703125 38.390625 -43.640625 C 39.410156 -42.585938 40.265625 -41.21875 40.953125 -39.53125 C 41.648438 -37.84375 42.203125 -35.945312 42.609375 -33.84375 C 43.015625 -31.75 43.328125 -29.675781 43.546875 -27.625 C 43.773438 -25.570312 43.921875 -23.648438 43.984375 -21.859375 C 44.046875 -20.066406 44.078125 -18.617188 44.078125 -17.515625 C 44.078125 -17.066406 44.078125 -16.457031 44.078125 -15.6875 C 44.078125 -14.914062 44.066406 -14.039062 44.046875 -13.0625 C 44.023438 -12.082031 43.972656 -11.039062 43.890625 -9.9375 C 43.804688 -8.84375 43.707031 -7.75 43.59375 -6.65625 Z M 43.59375 -6.65625 "
})))));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  title: "QCM",
  description: "Ajouter un QCM à votre page.",
  icon: CustomIcon,
  // Utilisez votre icône personnalisée
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
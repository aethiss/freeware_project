webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./node_modules/sweetalert2-react/dist/sweetalert-react.min.js":
false,

/***/ "./src/components/container/account/Account.js":
/*!*****************************************************!*\
  !*** ./src/components/container/account/Account.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_responsiveTable_ResponsiveTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/responsiveTable/ResponsiveTable */ "./src/components/common/responsiveTable/ResponsiveTable.js");
/* harmony import */ var _personalInfo_PersonalInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../personalInfo/PersonalInfo */ "./src/components/container/personalInfo/PersonalInfo.js");
/* harmony import */ var _common_noLogin_NoLogin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/noLogin/NoLogin */ "./src/components/common/noLogin/NoLogin.js");
/* harmony import */ var _redux_actions_skills__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions/skills */ "./src/redux/actions/skills.js");








var _dec, _class, _class2, _temp;

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


 // alert and dialogs

 // import SweetAlert from 'sweetalert2-react'
// Components





var Account = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return {
    user: state.user
  };
}, {
  addNewSkill: _redux_actions_skills__WEBPACK_IMPORTED_MODULE_14__["addNewSkill"]
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Account, _Component);

  function Account() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Account);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Account).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addNewSkill", function () {
      if (!_this.props.user.token) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Oops...', 'Please login again', 'error');
      } else {
        _this.setState({
          showDialog: true
        }); // this.props.addNewSkill('test', this.props.user.token)

      }
    });

    _this.state = {
      showDialog: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Account, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      if (!user.isLogin) return __jsx(_common_noLogin_NoLogin__WEBPACK_IMPORTED_MODULE_13__["default"], null);
      return __jsx("div", {
        className: "row",
        style: {
          marginLeft: 0
        }
      }, __jsx("div", {
        className: "column"
      }, __jsx(_common_responsiveTable_ResponsiveTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onAdd: this.addNewSkill,
        title: "My Skills"
      })), __jsx("div", {
        className: "column"
      }, __jsx(_personalInfo_PersonalInfo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        user: user
      })), __jsx("div", {
        className: "column"
      }, __jsx(_common_responsiveTable_ResponsiveTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
        align: "right",
        color: "green",
        title: "My Projects",
        onAdd: function onAdd() {
          console.log('TODO');
        }
      })));
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class2, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  addNewSkill: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class2, "defaultProps", {
  color: 'blue'
}), _temp)) || _class);


/***/ })

})
//# sourceMappingURL=projects.js.40a5871a0c5484074eac.hot-update.js.map
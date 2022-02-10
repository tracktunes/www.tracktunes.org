"use strict";
(self["webpackChunkwww_tracktunes_org"] = self["webpackChunkwww_tracktunes_org"] || []).push([["src_app_pages_thank-you_thank-you_module_ts"],{

/***/ 34896:
/*!*************************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouPageRoutingModule": () => (/* binding */ ThankYouPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thank-you.page */ 48348);




const routes = [
    {
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_0__.ThankYouPage
    }
];
let ThankYouPageRoutingModule = class ThankYouPageRoutingModule {
};
ThankYouPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThankYouPageRoutingModule);



/***/ }),

/***/ 52698:
/*!*****************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouPageModule": () => (/* binding */ ThankYouPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thank-you-routing.module */ 34896);
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thank-you.page */ 48348);







let ThankYouPageModule = class ThankYouPageModule {
};
ThankYouPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThankYouPageRoutingModule
        ],
        declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_1__.ThankYouPage]
    })
], ThankYouPageModule);



/***/ }),

/***/ 48348:
/*!***************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouPage": () => (/* binding */ ThankYouPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_dtal_repos_www_tracktunes_org_node_modules_ngtools_webpack_src_loaders_direct_resource_js_thank_you_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./thank-you.page.html */ 64106);
/* harmony import */ var _thank_you_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thank-you.page.scss */ 61326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let ThankYouPage = class ThankYouPage {
    constructor() { }
    ngOnInit() {
    }
};
ThankYouPage.ctorParameters = () => [];
ThankYouPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-thank-you',
        template: _home_dtal_repos_www_tracktunes_org_node_modules_ngtools_webpack_src_loaders_direct_resource_js_thank_you_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_thank_you_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThankYouPage);



/***/ }),

/***/ 64106:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/thank-you/thank-you.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content scrollY=\"false\">\n    <br />\n    <br />\n    <h1><strong>Thank you!</strong></h1>\n    <br />\n    <h4>Thank you for submitting your email address. We will use it to\n    send you the private beta invitation.\n    </h4>\n    <br />\n    <p>\n        We will only send one email to the address you've provided.\n        If you sign up using the private-beta invitation link in the\n        message, we will ask you to pick an email address again, to\n        associate with your new account.\n    </p>\n    <br />\n    <ion-img src=\"assets/image/tracktunes-logo.png\"></ion-img>\n    <p class=\"tracktunes\">TRACKTUNES</p>\n\n</ion-content>\n");

/***/ }),

/***/ 61326:
/*!*****************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: black;\n}\nion-content h1, ion-content h2, ion-content h3, ion-content h4, ion-content p {\n  color: var(--ion-color-light);\n  max-width: 70%;\n  margin: 0 auto;\n}\nion-content p {\n  color: var(--ion-color-medium);\n}\nion-content ion-img {\n  height: 80px;\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\nion-content p.tracktunes {\n  text-align: center;\n  font-family: \"Blinker\";\n  font-size: 22px;\n  font-weight: 200;\n  color: var(--ion-color-light);\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxtQkFBQTtBQUhKO0FBSUk7RUFDSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBRlI7QUFJSTtFQUNJLDhCQUFBO0FBRlI7QUFJSTtFQUNJLFlBQUE7RUFDQSxnQkFoQkM7RUFpQkQsbUJBakJDO0FBZVQ7QUFJSTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFGUiIsImZpbGUiOiJ0aGFuay15b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1hcmdpbjogMTRweDtcbiRtYXhXaWR0aDogMzgwcHg7XG5cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgaDEsIGgyLCBoMywgaDQsIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cbiAgICBpb24taW1nIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAkbWFyZ2luO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAkbWFyZ2luO1xuICAgIH1cbiAgICBwLnRyYWNrdHVuZXMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQmxpbmtlcic7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_thank-you_thank-you_module_ts.js.map
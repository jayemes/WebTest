webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Juan Manuel Scasso - Online CV</h1>\n</header>\n<div class=\"container-fluid\">\n  <div class=\"tile-group\">\n    <div class=\"tile\" *ngFor=\"let tile of tiles, let i=index\" (click)=\"both(i)\" [class.active]=\"tile.state === 'active'\">\n      <h3>{{tile.name}}</h3>\n      <p>{{tile.description}}</p>\n      <br> \n      <div class=\"hidden\">\n        <p *ngFor=\"let item of tile.details\">{{item}}</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"main\">\n    <p>Click in the tiles to expand</p>\n  </div>\n</div>\n<footer>\n  <h1>July 2017</h1>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export Tile */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Tile = (function () {
    function Tile() {
    }
    return Tile;
}());

var TILES = [
    {
        id: 1,
        name: 'Personals',
        description: 'JayeMeS',
        details: ['Birthday: 07/05/1990', 'Phone: 2983-501485'],
        state: 'inactive'
    },
    {
        id: 2,
        name: 'Academics',
        description: 'Chemical Engineer, UNS',
        details: ['GPA: 8.52 / 10'],
        state: 'inactive'
    },
    {
        id: 3,
        name: 'Languages',
        description: 'Spanish, English, French',
        details: ['Also basic portuguese'],
        state: 'inactive'
    },
    {
        id: 4,
        name: 'Programming',
        description: 'Java, Python, JS',
        details: ['Android Apps, WebApps with Angular'],
        state: 'inactive'
    },
    {
        id: 5,
        name: 'Work Experience',
        description: 'PLAPIQUI, Optiment, Universidad Nacional del Sur',
        details: ['Process Engineer, optimization, development of plant models, equipment design and simulation.', 'Assistant teacher'],
        state: 'inactive'
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Juan Manuel Scasso';
        this.tiles = TILES;
    }
    AppComponent.prototype.both = function (index) {
        if (this.tiles[index].state === 'inactive') {
            this.test(index);
            this.tileClick(index);
        }
    };
    AppComponent.prototype.test = function (index) {
        var t = this.tiles;
        t.forEach(function (element) {
            element.state = 'inactive';
        });
        t[index].state = 'active';
    };
    AppComponent.prototype.tileClick = function (index) {
        var tileGroup = $('.main').get(0);
        var rect = tileGroup.getBoundingClientRect();
        var cornerX = rect.left;
        var cornerY = rect.top;
        $('.floating').toggleClass('floating old');
        var old = $('.old');
        setTimeout(function () {
            old.css('opacity', '0');
            old.css('transform', 'perspective(500px) translateY(30%)');
        }, 300);
        setTimeout(function () {
            old.remove();
        }, 800);
        rect = $('.tile').get(index).getBoundingClientRect();
        var posX = rect.left;
        var posY = rect.top;
        var containerRect = $('.main')[0].getBoundingClientRect();
        var destWidth = containerRect.right - containerRect.left;
        var destHeight = containerRect.bottom - containerRect.top;
        var clone = $('.tile').eq(index).clone();
        clone.css('left', posX);
        clone.css('top', posY);
        clone.toggleClass('floating');
        $('body').append(clone);
        clone.css('transform', 'perspective(500px) translateZ(0)');
        setTimeout(function () {
            clone.css('transform', 'perspective(500px) translateZ(100px)');
            clone.toggleClass('floater-style');
        }, 0);
        setTimeout(function () {
            clone.css('left', cornerX);
            clone.css('top', cornerY);
            clone.css('transform', 'perspective(500px) translateZ(0)');
        }, 500);
        setTimeout(function () {
            clone.css('width', '' + destWidth + 'px');
        }, 1000);
        setTimeout(function () {
            clone.css('height', '' + destHeight + 'px');
            clone.toggleClass('show-details');
        }, 1500);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
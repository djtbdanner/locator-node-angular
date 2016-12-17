"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
// import { enableProdMode } from '@angular/core';
// enableProdMode();
var Locator = (function () {
    function Locator() {
        this.latitudeField = new forms_1.FormControl();
        this.longitudeField = new forms_1.FormControl();
        this.theLat = "";
        this.theLong = "";
        this.theCount = 0;
    }
    Locator.prototype.ngOnInit = function () {
        this.displayLatLong(this);
        this.withoutFatArrow();
    };
    Locator.prototype.displayLatLong = function (theThis) {
        navigator.geolocation.getCurrentPosition(function (position) {
            theThis.theLat = position.coords.latitude;
            theThis.theLong = position.coords.longitude;
            theThis.theCount = theThis.theCount + 1;
        });
    };
    Locator.prototype.withoutFatArrow = function () {
        var _this = this;
        this.timer = setInterval(function () { return _this.displayLatLong(_this); }, 500);
    };
    Locator = __decorate([
        core_1.Component({
            selector: 'jdf-calculator',
            templateUrl: 'app/locator.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Locator);
    return Locator;
}());
exports.Locator = Locator;
//# sourceMappingURL=locator.component.js.map
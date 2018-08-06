/// <reference path="mobile.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mobile;
(function (Mobile) {
    var BasicPhoneDetails = /** @class */ (function (_super) {
        __extends(BasicPhoneDetails, _super);
        function BasicPhoneDetails() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BasicPhoneDetails.prototype.printMobileDetails = function () {
            console.log(this.mobileId, this.mobileName, this.mobileCost, this.mobileType);
        };
        return BasicPhoneDetails;
    }(Mobile.MobileDetails));
    Mobile.BasicPhoneDetails = BasicPhoneDetails;
})(Mobile || (Mobile = {}));

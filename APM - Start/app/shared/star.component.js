System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var StarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StarComponent = (function () {
                function StarComponent() {
                    this.ratingClicked = new core_1.EventEmitter();
                }
                StarComponent.prototype.ngOnChanges = function () {
                    this.starWidth = this.rating * 86 / 5;
                };
                StarComponent.prototype.onClick = function () {
                    this.ratingClicked.emit("This rating " + this.rating + " was clicked.");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], StarComponent.prototype, "rating", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], StarComponent.prototype, "ratingClicked", void 0);
                StarComponent = __decorate([
                    core_1.Component({
                        selector: 'ai-star',
                        templateUrl: 'app/shared/star.component.html',
                        styleUrls: ['app/shared/star.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], StarComponent);
                return StarComponent;
            }());
            exports_1("StarComponent", StarComponent);
        }
    }
});
//# sourceMappingURL=star.component.js.map
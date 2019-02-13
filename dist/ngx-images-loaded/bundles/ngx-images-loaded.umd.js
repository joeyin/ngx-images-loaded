(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('imagesloaded'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-images-loaded', ['exports', 'imagesloaded', '@angular/core'], factory) :
    (factory((global['ngx-images-loaded'] = {}),global.imagesLoaded,global.ng.core));
}(this, (function (exports,imagesLoaded,i0) { 'use strict';

    imagesLoaded = imagesLoaded && imagesLoaded.hasOwnProperty('default') ? imagesLoaded['default'] : imagesLoaded;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxImagesLoadedService = /** @class */ (function () {
        function NgxImagesLoadedService() {
        }
        NgxImagesLoadedService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxImagesLoadedService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxImagesLoadedService.ngInjectableDef = i0.defineInjectable({ factory: function NgxImagesLoadedService_Factory() { return new NgxImagesLoadedService(); }, token: NgxImagesLoadedService, providedIn: "root" });
        return NgxImagesLoadedService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxImagesLoadedDirective = /** @class */ (function () {
        function NgxImagesLoadedDirective(el) {
            this.el = el;
            this.always = new i0.EventEmitter();
            this.done = new i0.EventEmitter();
            this.fail = new i0.EventEmitter();
            this.progress = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        NgxImagesLoadedDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance = imagesLoaded(this.el.nativeElement, null, ( /**
                 * @param {?} instance
                 * @return {?}
                 */function (instance) {
                    _this.always.emit(instance);
                }));
                this.instance.on('always', ( /**
                 * @param {?} instance
                 * @return {?}
                 */function (instance) { return _this.always.emit(instance); }));
                this.instance.on('done', ( /**
                 * @param {?} instance
                 * @return {?}
                 */function (instance) { return _this.done.emit(instance); }));
                this.instance.on('fail', ( /**
                 * @param {?} instance
                 * @return {?}
                 */function (instance) { return _this.fail.emit(instance); }));
                this.instance.on('progress', ( /**
                 * @param {?} instance
                 * @param {?} image
                 * @return {?}
                 */function (instance, image) {
                    return _this.always.emit({ instance: instance, image: image });
                }));
            };
        /**
         * @return {?}
         */
        NgxImagesLoadedDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.instance.off('always', ( /**
                 * @param {?} instance
                 * @return {?}
                 */function (instance) { return _this.always.emit(instance); }));
                this.instance.off('done', ( /**
                 * @param {?} instance
                 * @return {?}
                 */function (instance) { return _this.always.emit(instance); }));
                this.instance.off('fail', ( /**
                 * @param {?} instance
                 * @return {?}
                 */function (instance) { return _this.always.emit(instance); }));
                this.instance.off('progress', ( /**
                 * @param {?} instance
                 * @param {?} image
                 * @return {?}
                 */function (instance, image) {
                    return _this.always.emit({ instance: instance, image: image });
                }));
            };
        NgxImagesLoadedDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[libNgxImagesLoaded]'
                    },] }
        ];
        /** @nocollapse */
        NgxImagesLoadedDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        NgxImagesLoadedDirective.propDecorators = {
            always: [{ type: i0.Output }],
            done: [{ type: i0.Output }],
            fail: [{ type: i0.Output }],
            progress: [{ type: i0.Output }]
        };
        return NgxImagesLoadedDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxImagesLoadedModule = /** @class */ (function () {
        function NgxImagesLoadedModule() {
        }
        NgxImagesLoadedModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NgxImagesLoadedDirective],
                        providers: [
                            NgxImagesLoadedService
                        ],
                        exports: [NgxImagesLoadedDirective]
                    },] }
        ];
        return NgxImagesLoadedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxImagesLoadedService = NgxImagesLoadedService;
    exports.NgxImagesLoadedDirective = NgxImagesLoadedDirective;
    exports.NgxImagesLoadedModule = NgxImagesLoadedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-images-loaded.umd.js.map
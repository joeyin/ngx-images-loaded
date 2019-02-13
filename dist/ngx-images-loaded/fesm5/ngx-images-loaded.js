import imagesLoaded from 'imagesloaded';
import { Injectable, Directive, ElementRef, EventEmitter, Output, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxImagesLoadedService = /** @class */ (function () {
    function NgxImagesLoadedService() {
    }
    NgxImagesLoadedService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxImagesLoadedService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxImagesLoadedService.ngInjectableDef = defineInjectable({ factory: function NgxImagesLoadedService_Factory() { return new NgxImagesLoadedService(); }, token: NgxImagesLoadedService, providedIn: "root" });
    return NgxImagesLoadedService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxImagesLoadedDirective = /** @class */ (function () {
    function NgxImagesLoadedDirective(el) {
        this.el = el;
        this.always = new EventEmitter();
        this.done = new EventEmitter();
        this.fail = new EventEmitter();
        this.progress = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxImagesLoadedDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.instance = imagesLoaded(this.el.nativeElement, null, (/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
            _this.always.emit(instance);
        }));
        this.instance.on('always', (/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.always.emit(instance); }));
        this.instance.on('done', (/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.done.emit(instance); }));
        this.instance.on('fail', (/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.fail.emit(instance); }));
        this.instance.on('progress', (/**
         * @param {?} instance
         * @param {?} image
         * @return {?}
         */
        function (instance, image) {
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
        this.instance.off('always', (/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.always.emit(instance); }));
        this.instance.off('done', (/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.always.emit(instance); }));
        this.instance.off('fail', (/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) { return _this.always.emit(instance); }));
        this.instance.off('progress', (/**
         * @param {?} instance
         * @param {?} image
         * @return {?}
         */
        function (instance, image) {
            return _this.always.emit({ instance: instance, image: image });
        }));
    };
    NgxImagesLoadedDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[libNgxImagesLoaded]'
                },] }
    ];
    /** @nocollapse */
    NgxImagesLoadedDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NgxImagesLoadedDirective.propDecorators = {
        always: [{ type: Output }],
        done: [{ type: Output }],
        fail: [{ type: Output }],
        progress: [{ type: Output }]
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
        { type: NgModule, args: [{
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

export { NgxImagesLoadedService, NgxImagesLoadedDirective, NgxImagesLoadedModule };

//# sourceMappingURL=ngx-images-loaded.js.map
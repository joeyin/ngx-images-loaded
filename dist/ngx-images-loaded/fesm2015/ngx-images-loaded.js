import imagesLoaded from 'imagesloaded';
import { Injectable, Directive, ElementRef, EventEmitter, Output, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxImagesLoadedService {
    constructor() { }
}
NgxImagesLoadedService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxImagesLoadedService.ctorParameters = () => [];
/** @nocollapse */ NgxImagesLoadedService.ngInjectableDef = defineInjectable({ factory: function NgxImagesLoadedService_Factory() { return new NgxImagesLoadedService(); }, token: NgxImagesLoadedService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxImagesLoadedDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.always = new EventEmitter();
        this.done = new EventEmitter();
        this.fail = new EventEmitter();
        this.progress = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.instance = imagesLoaded(this.el.nativeElement, null, (/**
         * @param {?} instance
         * @return {?}
         */
        instance => {
            this.always.emit(instance);
        }));
        this.instance.on('always', (/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.always.emit(instance)));
        this.instance.on('done', (/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.done.emit(instance)));
        this.instance.on('fail', (/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.fail.emit(instance)));
        this.instance.on('progress', (/**
         * @param {?} instance
         * @param {?} image
         * @return {?}
         */
        (instance, image) => this.always.emit({ instance, image })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.instance.off('always', (/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.always.emit(instance)));
        this.instance.off('done', (/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.always.emit(instance)));
        this.instance.off('fail', (/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.always.emit(instance)));
        this.instance.off('progress', (/**
         * @param {?} instance
         * @param {?} image
         * @return {?}
         */
        (instance, image) => this.always.emit({ instance, image })));
    }
}
NgxImagesLoadedDirective.decorators = [
    { type: Directive, args: [{
                selector: '[libNgxImagesLoaded]'
            },] }
];
/** @nocollapse */
NgxImagesLoadedDirective.ctorParameters = () => [
    { type: ElementRef }
];
NgxImagesLoadedDirective.propDecorators = {
    always: [{ type: Output }],
    done: [{ type: Output }],
    fail: [{ type: Output }],
    progress: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxImagesLoadedModule {
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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import imagesLoaded from 'imagesloaded';
export class NgxImagesLoadedDirective {
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
if (false) {
    /** @type {?} */
    NgxImagesLoadedDirective.prototype.always;
    /** @type {?} */
    NgxImagesLoadedDirective.prototype.done;
    /** @type {?} */
    NgxImagesLoadedDirective.prototype.fail;
    /** @type {?} */
    NgxImagesLoadedDirective.prototype.progress;
    /**
     * @type {?}
     * @private
     */
    NgxImagesLoadedDirective.prototype.instance;
    /**
     * @type {?}
     * @private
     */
    NgxImagesLoadedDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWltYWdlcy1sb2FkZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWltYWdlcy1sb2FkZWQvIiwic291cmNlcyI6WyJsaWIvbmd4LWltYWdlcy1sb2FkZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQTRCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLFlBQVksTUFBTSxjQUFjLENBQUM7QUFLeEMsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQWtCbkMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFoQmxDLFdBQU0sR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd4RCxTQUFJLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsU0FBSSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELGFBQVEsR0FHSCxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSWEsQ0FBQzs7OztJQUV0QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixJQUFJOzs7O1FBQ0osUUFBUSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7UUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTTs7OztRQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O1FBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVU7Ozs7O1FBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFDdEMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUTs7OztRQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNOzs7O1FBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU07Ozs7UUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVTs7Ozs7UUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUN0QyxDQUFDO0lBQ0osQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOzs7O1lBTG1CLFVBQVU7OztxQkFPM0IsTUFBTTttQkFHTixNQUFNO21CQUdOLE1BQU07dUJBR04sTUFBTTs7OztJQVRQLDBDQUN3RDs7SUFFeEQsd0NBQ3NEOztJQUV0RCx3Q0FDc0Q7O0lBRXRELDRDQUl3Qjs7Ozs7SUFFeEIsNENBQStCOzs7OztJQUVuQixzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBpbWFnZXNMb2FkZWQgZnJvbSAnaW1hZ2VzbG9hZGVkJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xpYk5neEltYWdlc0xvYWRlZF0nXG59KVxuZXhwb3J0IGNsYXNzIE5neEltYWdlc0xvYWRlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpXG4gIGFsd2F5czogRXZlbnRFbWl0dGVyPGltYWdlc0xvYWRlZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIGRvbmU6IEV2ZW50RW1pdHRlcjxpbWFnZXNMb2FkZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBmYWlsOiBFdmVudEVtaXR0ZXI8aW1hZ2VzTG9hZGVkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgcHJvZ3Jlc3M6IEV2ZW50RW1pdHRlcjx7XG4gICAgaW5zdGFuY2U6IGltYWdlc0xvYWRlZDtcbiAgICBpbWFnZTogYW55O1xuICB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIGluc3RhbmNlOiBpbWFnZXNMb2FkZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gaW1hZ2VzTG9hZGVkKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgbnVsbCxcbiAgICAgIGluc3RhbmNlID0+IHtcbiAgICAgICAgdGhpcy5hbHdheXMuZW1pdChpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdhbHdheXMnLCBpbnN0YW5jZSA9PiB0aGlzLmFsd2F5cy5lbWl0KGluc3RhbmNlKSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignZG9uZScsIGluc3RhbmNlID0+IHRoaXMuZG9uZS5lbWl0KGluc3RhbmNlKSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignZmFpbCcsIGluc3RhbmNlID0+IHRoaXMuZmFpbC5lbWl0KGluc3RhbmNlKSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvZ3Jlc3MnLCAoaW5zdGFuY2UsIGltYWdlKSA9PlxuICAgICAgdGhpcy5hbHdheXMuZW1pdCh7IGluc3RhbmNlLCBpbWFnZSB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmluc3RhbmNlLm9mZignYWx3YXlzJywgaW5zdGFuY2UgPT4gdGhpcy5hbHdheXMuZW1pdChpbnN0YW5jZSkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub2ZmKCdkb25lJywgaW5zdGFuY2UgPT4gdGhpcy5hbHdheXMuZW1pdChpbnN0YW5jZSkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub2ZmKCdmYWlsJywgaW5zdGFuY2UgPT4gdGhpcy5hbHdheXMuZW1pdChpbnN0YW5jZSkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub2ZmKCdwcm9ncmVzcycsIChpbnN0YW5jZSwgaW1hZ2UpID0+XG4gICAgICB0aGlzLmFsd2F5cy5lbWl0KHsgaW5zdGFuY2UsIGltYWdlIH0pXG4gICAgKTtcbiAgfVxuXG59XG4iXX0=
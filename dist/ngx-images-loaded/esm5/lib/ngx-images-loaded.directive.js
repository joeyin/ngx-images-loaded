/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import imagesLoaded from 'imagesloaded';
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
export { NgxImagesLoadedDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWltYWdlcy1sb2FkZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWltYWdlcy1sb2FkZWQvIiwic291cmNlcyI6WyJsaWIvbmd4LWltYWdlcy1sb2FkZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQTRCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLFlBQVksTUFBTSxjQUFjLENBQUM7QUFFeEM7SUFxQkUsa0NBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBaEJsQyxXQUFNLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHeEQsU0FBSSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RELFNBQUksR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0RCxhQUFRLEdBR0gsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUlhLENBQUM7Ozs7SUFFdEMsMkNBQVE7OztJQUFSO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUk7Ozs7UUFDSixVQUFBLFFBQVE7WUFDTixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVE7Ozs7UUFBRSxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUExQixDQUEwQixFQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTTs7OztRQUFFLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7O1FBQUUsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVU7Ozs7O1FBQUUsVUFBQyxRQUFRLEVBQUUsS0FBSztZQUMzQyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztRQUFyQyxDQUFxQyxFQUN0QyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUTs7OztRQUFFLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQTFCLENBQTBCLEVBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNOzs7O1FBQUUsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU07Ozs7UUFBRSxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUExQixDQUEwQixFQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVTs7Ozs7UUFBRSxVQUFDLFFBQVEsRUFBRSxLQUFLO1lBQzVDLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDO1FBQXJDLENBQXFDLEVBQ3RDLENBQUM7SUFDSixDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOzs7O2dCQUxtQixVQUFVOzs7eUJBTzNCLE1BQU07dUJBR04sTUFBTTt1QkFHTixNQUFNOzJCQUdOLE1BQU07O0lBbUNULCtCQUFDO0NBQUEsQUFoREQsSUFnREM7U0E3Q1ksd0JBQXdCOzs7SUFDbkMsMENBQ3dEOztJQUV4RCx3Q0FDc0Q7O0lBRXRELHdDQUNzRDs7SUFFdEQsNENBSXdCOzs7OztJQUV4Qiw0Q0FBK0I7Ozs7O0lBRW5CLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGltYWdlc0xvYWRlZCBmcm9tICdpbWFnZXNsb2FkZWQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbGliTmd4SW1hZ2VzTG9hZGVkXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4SW1hZ2VzTG9hZGVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KClcbiAgYWx3YXlzOiBFdmVudEVtaXR0ZXI8aW1hZ2VzTG9hZGVkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgZG9uZTogRXZlbnRFbWl0dGVyPGltYWdlc0xvYWRlZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIGZhaWw6IEV2ZW50RW1pdHRlcjxpbWFnZXNMb2FkZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBwcm9ncmVzczogRXZlbnRFbWl0dGVyPHtcbiAgICBpbnN0YW5jZTogaW1hZ2VzTG9hZGVkO1xuICAgIGltYWdlOiBhbnk7XG4gIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgaW5zdGFuY2U6IGltYWdlc0xvYWRlZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbWFnZXNMb2FkZWQoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBudWxsLFxuICAgICAgaW5zdGFuY2UgPT4ge1xuICAgICAgICB0aGlzLmFsd2F5cy5lbWl0KGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2Fsd2F5cycsIGluc3RhbmNlID0+IHRoaXMuYWx3YXlzLmVtaXQoaW5zdGFuY2UpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkb25lJywgaW5zdGFuY2UgPT4gdGhpcy5kb25lLmVtaXQoaW5zdGFuY2UpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdmYWlsJywgaW5zdGFuY2UgPT4gdGhpcy5mYWlsLmVtaXQoaW5zdGFuY2UpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9ncmVzcycsIChpbnN0YW5jZSwgaW1hZ2UpID0+XG4gICAgICB0aGlzLmFsd2F5cy5lbWl0KHsgaW5zdGFuY2UsIGltYWdlIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaW5zdGFuY2Uub2ZmKCdhbHdheXMnLCBpbnN0YW5jZSA9PiB0aGlzLmFsd2F5cy5lbWl0KGluc3RhbmNlKSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vZmYoJ2RvbmUnLCBpbnN0YW5jZSA9PiB0aGlzLmFsd2F5cy5lbWl0KGluc3RhbmNlKSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vZmYoJ2ZhaWwnLCBpbnN0YW5jZSA9PiB0aGlzLmFsd2F5cy5lbWl0KGluc3RhbmNlKSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vZmYoJ3Byb2dyZXNzJywgKGluc3RhbmNlLCBpbWFnZSkgPT5cbiAgICAgIHRoaXMuYWx3YXlzLmVtaXQoeyBpbnN0YW5jZSwgaW1hZ2UgfSlcbiAgICApO1xuICB9XG5cbn1cbiJdfQ==
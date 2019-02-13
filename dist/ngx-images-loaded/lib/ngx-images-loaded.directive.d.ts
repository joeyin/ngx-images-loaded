import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import imagesLoaded from 'imagesloaded';
export declare class NgxImagesLoadedDirective implements OnInit, OnDestroy {
    private el;
    always: EventEmitter<imagesLoaded>;
    done: EventEmitter<imagesLoaded>;
    fail: EventEmitter<imagesLoaded>;
    progress: EventEmitter<{
        instance: imagesLoaded;
        image: any;
    }>;
    private instance;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

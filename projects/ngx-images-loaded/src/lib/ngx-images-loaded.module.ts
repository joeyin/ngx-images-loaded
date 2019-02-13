import { NgModule } from '@angular/core';
import { NgxImagesLoadedService } from './ngx-images-loaded.service';
import { NgxImagesLoadedDirective } from './ngx-images-loaded.directive';

@NgModule({
  declarations: [NgxImagesLoadedDirective],
  providers: [
    NgxImagesLoadedService
  ],
  exports: [NgxImagesLoadedDirective]
})
export class NgxImagesLoadedModule { }

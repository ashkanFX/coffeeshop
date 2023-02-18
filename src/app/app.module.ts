import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RippleModule} from "primeng/ripple";
import {SliderComponent} from './slider/slider.component';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    NavBarComponent,

    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    GalleriaModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  constructor() {
  }
  images :any = [
    {previewImageSrc:"../../assets/image/pexels-marta-dzedyshko-2067431.jpg"},
    {previewImageSrc:"../../assets/image/pexels-ana-m-3152022.jpg"},
    {previewImageSrc:"../../assets/image/pexels-mălina-sîrbu-11247281.jpg"},
    {previewImageSrc:"../../assets/image/pexels-chevanon-photography-312418.jpg"}
  ]
  responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 6
        },
        {
            breakpoint: '768px',
            numVisible: 6
        },
        {
            breakpoint: '560px',
            numVisible: 6
        }
    ];
}

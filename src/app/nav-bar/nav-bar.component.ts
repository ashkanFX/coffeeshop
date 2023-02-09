import {Component} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    test: string = "hidden"
  ngClick(){
    if (this.test === "hidden" ){
      this.test   = "block scalein  animation-duration-90"
    }else {
      this.test ="hidden"
    }
  }
}

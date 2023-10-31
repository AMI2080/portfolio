import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showLinks: boolean = true;

  toggleLinks() {
    this.showLinks = !this.showLinks;
  }

  hideLinks(){
    this.showLinks = false;
  }
}

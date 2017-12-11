import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Copyrights <b><a href="https://kpodata.com" target="_blank">kpodata</a></b> 2017</span>
  `,
})
export class FooterComponent {
}

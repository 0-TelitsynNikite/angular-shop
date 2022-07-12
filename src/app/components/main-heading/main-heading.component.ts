import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-heading',
  templateUrl: './main-heading.component.html',
  styleUrls: ['./main-heading.component.scss']
})
export class MainHeadingComponent {
  @Input() title: string = ''
}


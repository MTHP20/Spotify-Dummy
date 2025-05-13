import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  standalone: true,
  selector: 'app-default-header',
  imports: [
    AngularSvgIconModule
  ],
  templateUrl: './default-header.component.html',
  styleUrl: './default-header.component.scss'
})
export class DefaultHeaderComponent {

}

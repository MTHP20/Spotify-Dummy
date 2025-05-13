import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  standalone: true,
  selector: 'app-library',
  imports: [
    AngularSvgIconModule
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {

}

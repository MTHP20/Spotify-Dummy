import { Component } from '@angular/core';
import { DefaultHeaderComponent } from "./default-header/default-header.component";
import { DefaultFooterComponent } from "./default-footer/default-footer.component";
import { LibraryComponent } from "../../components/library/library.component";
import { HomeComponent } from "../../components/home/home.component";
import { ViewerComponent } from "../../components/viewer/viewer.component";

@Component({
  selector: 'app-default-layout',
  imports: [DefaultHeaderComponent, DefaultFooterComponent, LibraryComponent, HomeComponent, ViewerComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}

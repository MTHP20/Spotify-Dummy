import { Injectable } from '@angular/core';
import { Documentation, documentation } from 'src/app/storage/documentation-data-store';


@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  constructor() { }
  getDocumentation(): Documentation[] {
    return documentation;
  }

  getDocumentationNames(): string[] {
    return documentation.map(documentation => documentation.mainCategory);
  }

  getDocumentationItems(): any[] {
    return documentation.map(documentation => documentation.items);
  }

}

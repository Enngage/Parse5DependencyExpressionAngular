import { Component } from '@angular/core';
import { AST } from 'parse5/lib';
import * as parse5 from 'parse5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const documentFragment = parse5.parseFragment('<div>Html</div>') as AST.DocumentFragment;

    console.log(documentFragment);
  }
}

import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import plugins from './plugins';
import schema from './schema';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
  editor: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline'],
    ['text_color', 'background_color']
  ];
 html="";

  ngOnInit(): void {
    this.editor = new Editor({
      schema:schema,
      plugins:plugins,
      history: true,
      keyboardShortcuts: true,
      inputRules:true
    });
  }

  onChange(html){
    console.log("html :",html);
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}

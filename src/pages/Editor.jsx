import React from 'react';
import { HtmlEditor, RichTextEditor, Image, Inject, Link, QuickToolbar, Toolbar, RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';

import { EditorData } from '../data/dummy';
import { Header } from '../components';

RichTextEditor.Inject(Toolbar, Link, HtmlEditor, Image, QuickToolbar); 

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
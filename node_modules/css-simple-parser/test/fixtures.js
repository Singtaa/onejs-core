
/* MAIN */

const INPUT = `
input.base,
textarea.base,
.label.base,
.container.base,
.card.base,
.tagbox.base{
  background-color: #FFFFFF;
  color: #1F1F1F;
  border-color: #dadada;
}

.button.base {
  background-color: #FFFFFF;

  &:not(.active):hover {
    background-color: #f7f7f7;
  }

  &.active,
  &:active {
    background-color: #f0f0f0;
  }

  color: #1F1F1F;
  border-color: #dadada;
}

.text-base {
  color: #1F1F1F;
}

input.accent,
textarea.accent,
.label.accent,
.container.accent,
.card.accent,
.tagbox.accent {
  background-color: #EF6C00;
  color: #FFFFFF;
  border-color: #a54b00;
}

.button.accent {
  background-color: #EF6C00;

  &:not(.active):hover {
    background-color: #e06500;
  }

  &.active,
  &:active {
    background-color: #d05e00;
  }

  color: #FFFFFF;
  border-color: #a54b00;
}

.text-accent {
  color: #FFFFFF;
}

input.highlight,
textarea.highlight,
.label.highlight,
.container.highlight,
.card.highlight,
.tagbox.highlight {
  background-color: #f0f0f0;
  color: #1F1F1F;
  border-color: #bcbcbc;
}

.button.highlight {
  background-color: #f0f0f0;

  &:not(.active):hover {
    background-color: #d9d9d9;
  }

  &.active,
  &:active {
    background-color: #d1d1d1;
  }

  color: #1F1F1F;
  border-color: #bcbcbc;
}

.text-highlight {
  color: #1F1F1F;
}

input.warning,
textarea.warning,
.label.warning,
.container.warning,
.card.warning,
.tagbox.warning {
  background-color: #F44336;
  color: #FFFFFF;
  border-color: #d4190c;
}

.button.warning {
  background-color: #F44336;

  &:not(.active):hover {
    background-color: #f33527;
  }

  &.active,
  &:active {
    background-color: #f22819;
  }

  color: #FFFFFF;
  border-color: #d4190c;
}

.text-warning {
  color: #FFFFFF;
}

body {
  background-color: #f7f7f7;
  color: #1F1F1F;
}

::selection {
  background-color: rgba(239, 108, 0, 0.15);
}

::placeholder {
  color: rgba(31, 31, 31, 0.65);
}

.layout.column {
  border-color: #dedede;
}

details {
  background-color: #FFFFFF;
  border-color: #dadada;
  color: #1F1F1F;

  summary {
    &:hover:not(:active) {
      background-color: #f7f7f7;
    }

    &:active {
      background-color: #f0f0f0;
    }

    &::-webkit-details-marker {
      background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#1F1F1F" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>');
      /* @root/resources/icons/chevron-right.svg */
    }
  }

  &[open] {
    summary {
      border-color: #dadada;

      &::-webkit-details-marker {
        background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#1F1F1F" d="M7.41348,8.58407L11.9995,13.1701L16.5855,8.58407L17.9995,9.99807L11.9995,15.9981L5.99948,9.99807L7.41348,8.58407Z" /></svg>');
        /* @root/resources/icons/chevron-down.svg */
      }
    }
  }
}

.editor {
  background-color: #FFFFFF;
  border-color: #e6e6e6;
  color: #1F1F1F;
}

pre {
  background-color: #F6F8FA;
  color: #1F1F1F;
}

.katex {
  * {
    border-color: #1F1F1F;
  }

  .frac-line {
    border-color: #1F1F1F;
  }
}

.list-header {
  background-color: #f9f9f9;
  border-color: #dedede;
  color: #6c6c6c;
}

.list-item {
  background-color: transparent;

  &:not(.active):hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &.active,
  &:active {
    background-color: rgba(0, 0, 0, 0.08);
  }

  color: inherit;
  border-color: rgba(0, 0, 0, 0.12);
}

.mainbar {
  background-color: #f7f7f7;
  color: inherit;
}

.middlebar {
  background-color: #FFFFFF;
  color: #1F1F1F;

  .list-item {
    background-color: transparent;

    &:not(.active):hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    &.active,
    &:active {
      background-color: rgba(0, 0, 0, 0.08);
    }

    color: inherit;
    border-color: rgba(0, 0, 0, 0.12);
  }
}

.monaco-editor {

  .monaco-scrollable-element>.scrollbar>.slider,
  .minimap-slider .minimap-slider-horizontal {
    background: rgba(159, 159, 159, 0.35) !important;

    &:hover {
      background: #909090 !important;
    }

    &:active,
    .active {
      background: #808080 !important;
    }
  }

  .selected-text {
    background-color: rgba(239, 108, 0, 0.15);

    &.focused {
      background-color: rgba(239, 108, 0, 0.15);
    }
  }

  .margin {
    background-color: #FFFFFF;
  }

  .line-numbers {
    color: #6A737D;
  }

  .current-line~.line-numbers {
    color: #6A737D;
  }
}

.toast {
  background-color: #20272C;

  &:not(.active):hover {
    background-color: #1a1f23;
  }

  &.active,
  &:active {
    background-color: #13171a;
  }

  border-color: #060809;
  color: #FFFFFF;
}

.popover {
  .list-item {
    background-color: transparent;

    &:not(.active):hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    &.active,
    &:active {
      background-color: rgba(0, 0, 0, 0.08);
    }

    color: inherit;
    border-color: rgba(0, 0, 0, 0.12);
  }
}

.preview {
  background-color: #FFFFFF;
  border-color: #e6e6e6;
  color: #1F1F1F;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-color: #EAECEF;
  }

  h1 {
    color: inherit;
  }

  h2 {
    color: inherit;
  }

  h3 {
    color: inherit;
  }

  h4 {
    color: inherit;
  }

  h5 {
    color: inherit;
  }

  h6 {
    color: #6A737D;
  }

  table th,
  table td {
    border-color: #DFE2E5;
  }

  table tr {
    background-color: #FFFFFF;
  }

  table tr:nth-child(2n) {
    background-color: #F6F8FA;
  }

  code,
  p code,
  li code,
  table code {
    background-color: rgba(27, 31, 35, 0.05) !important;
    color: inherit !important;
  }

  pre code {
    background-color: transparent !important;
  }

  blockquote {
    color: #6A737D;
    border-color: #DFE2E5;
  }

  kbd {
    background-color: #FAFBFC;
    border-color: #DFE2E5;
    color: #444D56;
    box-shadow: inset 0 -1px 0 #959DA5;
    border-bottom-color: #959DA5;
  }

  mark {
    background-color: rgba(239, 108, 0, 0.15);
    color: #1F1F1F;
  }

  hr {
    background-color: #E1E4E8;
  }

  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a,
  p a,
  li a,
  th a,
  td a,
  dt a,
  dd a,
  address a {
    color: #0366D6;

    &:hover {
      color: #035fc7
    }

    &:active {
      color: #0358b8
    }
  }
}

.quick-panel {
  .list-item {
    background-color: transparent;

    &:not(.active):hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    &.active,
    &:active {
      background-color: rgba(0, 0, 0, 0.08);
    }

    color: inherit;
    border-color: rgba(0, 0, 0, 0.12);
  }
}

html.no-overlay-scrollbars {
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(159, 159, 159, 0.35);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #909090;
  }

  ::-webkit-scrollbar-thumb:active {
    background: #808080;
  }
}

.sidebar {
  background-color: #20272C;
  color: #FFFFFF;

  .list-item {
    background-color: transparent;

    &:not(.active):hover {
      background-color: rgba(255, 255, 255, 0.04);
    }

    &.active,
    &:active {
      background-color: rgba(255, 255, 255, 0.08);
    }

    color: inherit;
    border-color: rgba(255, 255, 255, 0.12);
  }
}

.toolbar {
  background-color: #f5f5f5;
  border-color: #d6d6d6;
  color: #505050;
}`;

const OUTPUT = `input.base,textarea.base,.label.base,.container.base,.card.base,.tagbox.base{background-color: #FFFFFF;color: #1F1F1F;border-color: #dadada;}.button.base{background-color: #FFFFFF;color: #1F1F1F;border-color: #dadada;&:not(.active):hover{background-color: #f7f7f7;}&.active,&:active{background-color: #f0f0f0;}}.text-base{color: #1F1F1F;}input.accent,textarea.accent,.label.accent,.container.accent,.card.accent,.tagbox.accent{background-color: #EF6C00;color: #FFFFFF;border-color: #a54b00;}.button.accent{background-color: #EF6C00;color: #FFFFFF;border-color: #a54b00;&:not(.active):hover{background-color: #e06500;}&.active,&:active{background-color: #d05e00;}}.text-accent{color: #FFFFFF;}input.highlight,textarea.highlight,.label.highlight,.container.highlight,.card.highlight,.tagbox.highlight{background-color: #f0f0f0;color: #1F1F1F;border-color: #bcbcbc;}.button.highlight{background-color: #f0f0f0;color: #1F1F1F;border-color: #bcbcbc;&:not(.active):hover{background-color: #d9d9d9;}&.active,&:active{background-color: #d1d1d1;}}.text-highlight{color: #1F1F1F;}input.warning,textarea.warning,.label.warning,.container.warning,.card.warning,.tagbox.warning{background-color: #F44336;color: #FFFFFF;border-color: #d4190c;}.button.warning{background-color: #F44336;color: #FFFFFF;border-color: #d4190c;&:not(.active):hover{background-color: #f33527;}&.active,&:active{background-color: #f22819;}}.text-warning{color: #FFFFFF;}body{background-color: #f7f7f7;color: #1F1F1F;}::selection{background-color: rgba(239,108,0,0.15);}::placeholder{color: rgba(31,31,31,0.65);}.layout.column{border-color: #dedede;}details{background-color: #FFFFFF;border-color: #dadada;color: #1F1F1F;summary{&:hover:not(:active){background-color: #f7f7f7;}&:active{background-color: #f0f0f0;}&::-webkit-details-marker{background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#1F1F1F" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>');/* @root/resources/icons/chevron-right.svg */}}&[open]{summary{border-color: #dadada;&::-webkit-details-marker{background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#1F1F1F" d="M7.41348,8.58407L11.9995,13.1701L16.5855,8.58407L17.9995,9.99807L11.9995,15.9981L5.99948,9.99807L7.41348,8.58407Z" /></svg>');/* @root/resources/icons/chevron-down.svg */}}}}.editor{background-color: #FFFFFF;border-color: #e6e6e6;color: #1F1F1F;}pre{background-color: #F6F8FA;color: #1F1F1F;}.katex{*{border-color: #1F1F1F;}.frac-line{border-color: #1F1F1F;}}.list-header{background-color: #f9f9f9;border-color: #dedede;color: #6c6c6c;}.list-item{background-color: transparent;color: inherit;border-color: rgba(0,0,0,0.12);&:not(.active):hover{background-color: rgba(0,0,0,0.04);}&.active,&:active{background-color: rgba(0,0,0,0.08);}}.mainbar{background-color: #f7f7f7;color: inherit;}.middlebar{background-color: #FFFFFF;color: #1F1F1F;.list-item{background-color: transparent;color: inherit;border-color: rgba(0,0,0,0.12);&:not(.active):hover{background-color: rgba(0,0,0,0.04);}&.active,&:active{background-color: rgba(0,0,0,0.08);}}}.monaco-editor{.monaco-scrollable-element>.scrollbar>.slider,.minimap-slider .minimap-slider-horizontal{background: rgba(159,159,159,0.35) !important;&:hover{background: #909090 !important;}&:active,.active{background: #808080 !important;}}.selected-text{background-color: rgba(239,108,0,0.15);&.focused{background-color: rgba(239,108,0,0.15);}}.margin{background-color: #FFFFFF;}.line-numbers{color: #6A737D;}.current-line~.line-numbers{color: #6A737D;}}.toast{background-color: #20272C;border-color: #060809;color: #FFFFFF;&:not(.active):hover{background-color: #1a1f23;}&.active,&:active{background-color: #13171a;}}.popover{.list-item{background-color: transparent;color: inherit;border-color: rgba(0,0,0,0.12);&:not(.active):hover{background-color: rgba(0,0,0,0.04);}&.active,&:active{background-color: rgba(0,0,0,0.08);}}}.preview{background-color: #FFFFFF;border-color: #e6e6e6;color: #1F1F1F;h1,h2,h3,h4,h5,h6{border-color: #EAECEF;}h1{color: inherit;}h2{color: inherit;}h3{color: inherit;}h4{color: inherit;}h5{color: inherit;}h6{color: #6A737D;}table th,table td{border-color: #DFE2E5;}table tr{background-color: #FFFFFF;}table tr:nth-child(2n){background-color: #F6F8FA;}code,p code,li code,table code{background-color: rgba(27,31,35,0.05) !important;color: inherit !important;}pre code{background-color: transparent !important;}blockquote{color: #6A737D;border-color: #DFE2E5;}kbd{background-color: #FAFBFC;border-color: #DFE2E5;color: #444D56;box-shadow: inset 0 -1px 0 #959DA5;border-bottom-color: #959DA5;}mark{background-color: rgba(239,108,0,0.15);color: #1F1F1F;}hr{background-color: #E1E4E8;}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a,p a,li a,th a,td a,dt a,dd a,address a{color: #0366D6;&:hover{color: #035fc7}&:active{color: #0358b8}}}.quick-panel{.list-item{background-color: transparent;color: inherit;border-color: rgba(0,0,0,0.12);&:not(.active):hover{background-color: rgba(0,0,0,0.04);}&.active,&:active{background-color: rgba(0,0,0,0.08);}}}html.no-overlay-scrollbars{::-webkit-scrollbar{background-color: transparent;width: 12px;height: 12px;}::-webkit-scrollbar-track{background-color: transparent;}::-webkit-scrollbar-track-piece{background-color: transparent;}::-webkit-scrollbar-corner{background-color: transparent;}::-webkit-scrollbar-thumb{background: rgba(159,159,159,0.35);}::-webkit-scrollbar-thumb:hover{background: #909090;}::-webkit-scrollbar-thumb:active{background: #808080;}}.sidebar{background-color: #20272C;color: #FFFFFF;.list-item{background-color: transparent;color: inherit;border-color: rgba(255,255,255,0.12);&:not(.active):hover{background-color: rgba(255,255,255,0.04);}&.active,&:active{background-color: rgba(255,255,255,0.08);}}}.toolbar{background-color: #f5f5f5;border-color: #d6d6d6;color: #505050;}`;

const AST = {
  parent: null,
  children: [
    {
      selector: "\ninput.base,\ntextarea.base,\n.label.base,\n.container.base,\n.card.base,\n.tagbox.base",
      body: "\n  background-color: #FFFFFF;\n  color: #1F1F1F;\n  border-color: #dadada;\n",
      children: []
    },
    {
      selector: "\n\n.button.base ",
      body: "\n  background-color: #FFFFFF;\n  color: #1F1F1F;\n  border-color: #dadada;\n",
      children: [
        {
          selector: "\n\n  &:not(.active):hover ",
          body: "\n    background-color: #f7f7f7;\n  ",
          children: []
        },
        {
          selector: "\n\n  &.active,\n  &:active ",
          body: "\n    background-color: #f0f0f0;\n  ",
          children: []
        }
      ]
    },
    {
      selector: "\n\n.text-base ",
      body: "\n  color: #1F1F1F;\n",
      children: []
    },
    {
      selector: "\n\ninput.accent,\ntextarea.accent,\n.label.accent,\n.container.accent,\n.card.accent,\n.tagbox.accent ",
      body: "\n  background-color: #EF6C00;\n  color: #FFFFFF;\n  border-color: #a54b00;\n",
      children: []
    },
    {
      selector: "\n\n.button.accent ",
      body: "\n  background-color: #EF6C00;\n  color: #FFFFFF;\n  border-color: #a54b00;\n",
      children: [
        {
          selector: "\n\n  &:not(.active):hover ",
          body: "\n    background-color: #e06500;\n  ",
          children: []
        },
        {
          selector: "\n\n  &.active,\n  &:active ",
          body: "\n    background-color: #d05e00;\n  ",
          children: []
        }
      ]
    },
    {
      selector: "\n\n.text-accent ",
      body: "\n  color: #FFFFFF;\n",
      children: []
    },
    {
      selector: "\n\ninput.highlight,\ntextarea.highlight,\n.label.highlight,\n.container.highlight,\n.card.highlight,\n.tagbox.highlight ",
      body: "\n  background-color: #f0f0f0;\n  color: #1F1F1F;\n  border-color: #bcbcbc;\n",
      children: []
    },
    {
      selector: "\n\n.button.highlight ",
      body: "\n  background-color: #f0f0f0;\n  color: #1F1F1F;\n  border-color: #bcbcbc;\n",
      children: [
        {
          selector: "\n\n  &:not(.active):hover ",
          body: "\n    background-color: #d9d9d9;\n  ",
          children: []
        },
        {
          selector: "\n\n  &.active,\n  &:active ",
          body: "\n    background-color: #d1d1d1;\n  ",
          children: []
        }
      ]
    },
    {
      selector: "\n\n.text-highlight ",
      body: "\n  color: #1F1F1F;\n",
      children: []
    },
    {
      selector: "\n\ninput.warning,\ntextarea.warning,\n.label.warning,\n.container.warning,\n.card.warning,\n.tagbox.warning ",
      body: "\n  background-color: #F44336;\n  color: #FFFFFF;\n  border-color: #d4190c;\n",
      children: []
    },
    {
      selector: "\n\n.button.warning ",
      body: "\n  background-color: #F44336;\n  color: #FFFFFF;\n  border-color: #d4190c;\n",
      children: [
        {
          selector: "\n\n  &:not(.active):hover ",
          body: "\n    background-color: #f33527;\n  ",
          children: []
        },
        {
          selector: "\n\n  &.active,\n  &:active ",
          body: "\n    background-color: #f22819;\n  ",
          children: []
        }
      ]
    },
    {
      selector: "\n\n.text-warning ",
      body: "\n  color: #FFFFFF;\n",
      children: []
    },
    {
      selector: "\n\nbody ",
      body: "\n  background-color: #f7f7f7;\n  color: #1F1F1F;\n",
      children: []
    },
    {
      selector: "\n\n::selection ",
      body: "\n  background-color: rgba(239, 108, 0, 0.15);\n",
      children: []
    },
    {
      selector: "\n\n::placeholder ",
      body: "\n  color: rgba(31, 31, 31, 0.65);\n",
      children: []
    },
    {
      selector: "\n\n.layout.column ",
      body: "\n  border-color: #dedede;\n",
      children: []
    },
    {
      selector: "\n\ndetails ",
      body: "\n  background-color: #FFFFFF;\n  border-color: #dadada;\n  color: #1F1F1F;",
      children: [
        {
          selector: "\n\n  summary ",
          body: "  ",
          children: [
            {
              selector: "\n    &:hover:not(:active) ",
              body: "\n      background-color: #f7f7f7;\n    ",
              children: []
            },
            {
              selector: "\n\n    &:active ",
              body: "\n      background-color: #f0f0f0;\n    ",
              children: []
            },
            {
              selector: "\n\n    &::-webkit-details-marker ",
              body: "\n      background-image: url('data:image/svg+xml;utf8,<?xml version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"#1F1F1F\" d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\" /></svg>');\n      /* @root/resources/icons/chevron-right.svg */\n    ",
              children: []
            }
          ]
        },
        {
          selector: "\n\n  &[open] ",
          body: "  ",
          children: [
            {
              selector: "\n    summary ",
              body: "\n      border-color: #dadada;    ",
              children: [
                {
                  selector: "\n\n      &::-webkit-details-marker ",
                  body: "\n        background-image: url('data:image/svg+xml;utf8,<?xml version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"#1F1F1F\" d=\"M7.41348,8.58407L11.9995,13.1701L16.5855,8.58407L17.9995,9.99807L11.9995,15.9981L5.99948,9.99807L7.41348,8.58407Z\" /></svg>');\n        /* @root/resources/icons/chevron-down.svg */\n      ",
                  children: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      selector: "\n\n.editor ",
      body: "\n  background-color: #FFFFFF;\n  border-color: #e6e6e6;\n  color: #1F1F1F;\n",
      children: []
    },
    {
      selector: "\n\npre ",
      body: "\n  background-color: #F6F8FA;\n  color: #1F1F1F;\n",
      children: []
    },
    {
      selector: "\n\n.katex ",
      body: "",
      children: [
        {
          selector: "\n  * ",
          body: "\n    border-color: #1F1F1F;\n  ",
          children: []
        },
        {
          selector: "\n\n  .frac-line ",
          body: "\n    border-color: #1F1F1F;\n  ",
          children: []
        }
      ]
    },
    {
      selector: "\n\n.list-header ",
      body: "\n  background-color: #f9f9f9;\n  border-color: #dedede;\n  color: #6c6c6c;\n",
      children: []
    },
    {
      selector: "\n\n.list-item ",
      body: "\n  background-color: transparent;\n  color: inherit;\n  border-color: rgba(0, 0, 0, 0.12);\n",
      children: [
        {
          selector: "\n\n  &:not(.active):hover ",
          body: "\n    background-color: rgba(0, 0, 0, 0.04);\n  ",
          children: []
        },
        {
          selector: "\n\n  &.active,\n  &:active ",
          body: "\n    background-color: rgba(0, 0, 0, 0.08);\n  ",
          children: []
        }
      ]
    },
    {
      selector: "\n\n.mainbar ",
      body: "\n  background-color: #f7f7f7;\n  color: inherit;\n",
      children: []
    },
    {
      selector: "\n\n.middlebar ",
      body: "\n  background-color: #FFFFFF;\n  color: #1F1F1F;",
      children: [
        {
          selector: "\n\n  .list-item ",
          body: "\n    background-color: transparent;\n    color: inherit;\n    border-color: rgba(0, 0, 0, 0.12);\n  ",
          children: [
            {
              selector: "\n\n    &:not(.active):hover ",
              body: "\n      background-color: rgba(0, 0, 0, 0.04);\n    ",
              children: []
            },
            {
              selector: "\n\n    &.active,\n    &:active ",
              body: "\n      background-color: rgba(0, 0, 0, 0.08);\n    ",
              children: []
            }
          ]
        }
      ]
    },
    {
      selector: "\n\n.monaco-editor ",
      body: "",
      children: [
        {
          selector: "\n\n  .monaco-scrollable-element>.scrollbar>.slider,\n  .minimap-slider .minimap-slider-horizontal ",
          body: "\n    background: rgba(159, 159, 159, 0.35) !important;  ",
          children: [
            {
              selector: "\n\n    &:hover ",
              body: "\n      background: #909090 !important;\n    ",
              children: []
            },
            {
              selector: "\n\n    &:active,\n    .active ",
              body: "\n      background: #808080 !important;\n    ",
              children: []
            }
          ]
        },
        {
          selector: "\n\n  .selected-text ",
          body: "\n    background-color: rgba(239, 108, 0, 0.15);  ",
          children: [
            {
              selector: "\n\n    &.focused ",
              body: "\n      background-color: rgba(239, 108, 0, 0.15);\n    ",
              children: []
            }
          ]
        },
        {
          selector: "\n\n  .margin ",
          body: "\n    background-color: #FFFFFF;\n  ",
          children: []
        },
        {
          selector: "\n\n  .line-numbers ",
          body: "\n    color: #6A737D;\n  ",
          children: []
        },
        {
          selector: "\n\n  .current-line~.line-numbers ",
          body: "\n    color: #6A737D;\n  ",
          children: []
        }
      ]
    },
    {
      selector: "\n\n.toast ",
      body: "\n  background-color: #20272C;\n  border-color: #060809;\n  color: #FFFFFF;\n",
      children: [
        {
          selector: "\n\n  &:not(.active):hover ",
          body: "\n    background-color: #1a1f23;\n  ",
          children: []
        },
        {
          selector: "\n\n  &.active,\n  &:active ",
          body: "\n    background-color: #13171a;\n  ",
          children: []
        }
      ]
    },
    {
      selector: "\n\n.popover ",
      body: "",
      children: [
        {
          selector: "\n  .list-item ",
          body: "\n    background-color: transparent;\n    color: inherit;\n    border-color: rgba(0, 0, 0, 0.12);\n  ",
          children: [
            {
              selector: "\n\n    &:not(.active):hover ",
              body: "\n      background-color: rgba(0, 0, 0, 0.04);\n    ",
              children: []
            },
            {
              selector: "\n\n    &.active,\n    &:active ",
              body: "\n      background-color: rgba(0, 0, 0, 0.08);\n    ",
              children: []
            }
          ]
        }
      ]
    },
    {
      selector: "\n\n.preview ",
      body: "\n  background-color: #FFFFFF;\n  border-color: #e6e6e6;\n  color: #1F1F1F;",
      children: [
        {
          selector: "\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 ",
          body: "\n    border-color: #EAECEF;\n  ",
          children: []
        },
        {
          selector: "\n\n  h1 ",
          body: "\n    color: inherit;\n  ",
          children: []
        },
        {
          selector: "\n\n  h2 ",
          body: "\n    color: inherit;\n  ",
          children: []
        },
        {
          selector: "\n\n  h3 ",
          body: "\n    color: inherit;\n  ",
          children: []
        },
        {
          selector: "\n\n  h4 ",
          body: "\n    color: inherit;\n  ",
          children: []
        },
        {
          selector: "\n\n  h5 ",
          body: "\n    color: inherit;\n  ",
          children: []
        },
        {
          selector: "\n\n  h6 ",
          body: "\n    color: #6A737D;\n  ",
          children: []
        },
        {
          selector: "\n\n  table th,\n  table td ",
          body: "\n    border-color: #DFE2E5;\n  ",
          children: []
        },
        {
          selector: "\n\n  table tr ",
          body: "\n    background-color: #FFFFFF;\n  ",
          children: []
        },
        {
          selector: "\n\n  table tr:nth-child(2n) ",
          body: "\n    background-color: #F6F8FA;\n  ",
          children: []
        },
        {
          selector: "\n\n  code,\n  p code,\n  li code,\n  table code ",
          body: "\n    background-color: rgba(27, 31, 35, 0.05) !important;\n    color: inherit !important;\n  ",
          children: []
        },
        {
          selector: "\n\n  pre code ",
          body: "\n    background-color: transparent !important;\n  ",
          children: []
        },
        {
          selector: "\n\n  blockquote ",
          body: "\n    color: #6A737D;\n    border-color: #DFE2E5;\n  ",
          children: []
        },
        {
          selector: "\n\n  kbd ",
          body: "\n    background-color: #FAFBFC;\n    border-color: #DFE2E5;\n    color: #444D56;\n    box-shadow: inset 0 -1px 0 #959DA5;\n    border-bottom-color: #959DA5;\n  ",
          children: []
        },
        {
          selector: "\n\n  mark ",
          body: "\n    background-color: rgba(239, 108, 0, 0.15);\n    color: #1F1F1F;\n  ",
          children: []
        },
        {
          selector: "\n\n  hr ",
          body: "\n    background-color: #E1E4E8;\n  ",
          children: []
        },
        {
          selector: "\n\n  h1 a,\n  h2 a,\n  h3 a,\n  h4 a,\n  h5 a,\n  h6 a,\n  p a,\n  li a,\n  th a,\n  td a,\n  dt a,\n  dd a,\n  address a ",
          body: "\n    color: #0366D6;  ",
          children: [
            {
              selector: "\n\n    &:hover ",
              body: "\n      color: #035fc7\n    ",
              children: []
            },
            {
              selector: "\n\n    &:active ",
              body: "\n      color: #0358b8\n    ",
              children: []
            }
          ]
        }
      ]
    },
    {
      selector: "\n\n.quick-panel ",
      body: "",
      children: [
        {
          selector: "\n  .list-item ",
          body: "\n    background-color: transparent;\n    color: inherit;\n    border-color: rgba(0, 0, 0, 0.12);\n  ",
          children: [
            {
              selector: "\n\n    &:not(.active):hover ",
              body: "\n      background-color: rgba(0, 0, 0, 0.04);\n    ",
              children: []
            },
            {
              selector: "\n\n    &.active,\n    &:active ",
              body: "\n      background-color: rgba(0, 0, 0, 0.08);\n    ",
              children: []
            }
          ]
        }
      ]
    },
    {
      selector: "\n\nhtml.no-overlay-scrollbars ",
      body: "",
      children: [
        {
          selector: "\n  ::-webkit-scrollbar ",
          body: "\n    background-color: transparent;\n    width: 12px;\n    height: 12px;\n  ",
          children: []
        },
        {
          selector: "\n\n  ::-webkit-scrollbar-track ",
          body: "\n    background-color: transparent;\n  ",
          children: []
        },
        {
          selector: "\n\n  ::-webkit-scrollbar-track-piece ",
          body: "\n    background-color: transparent;\n  ",
          children: []
        },
        {
          selector: "\n\n  ::-webkit-scrollbar-corner ",
          body: "\n    background-color: transparent;\n  ",
          children: []
        },
        {
          selector: "\n\n  ::-webkit-scrollbar-thumb ",
          body: "\n    background: rgba(159, 159, 159, 0.35);\n  ",
          children: []
        },
        {
          selector: "\n\n  ::-webkit-scrollbar-thumb:hover ",
          body: "\n    background: #909090;\n  ",
          children: []
        },
        {
          selector: "\n\n  ::-webkit-scrollbar-thumb:active ",
          body: "\n    background: #808080;\n  ",
          children: []
        }
      ]
    },
    {
      selector: "\n\n.sidebar ",
      body: "\n  background-color: #20272C;\n  color: #FFFFFF;",
      children: [
        {
          selector: "\n\n  .list-item ",
          body: "\n    background-color: transparent;\n    color: inherit;\n    border-color: rgba(255, 255, 255, 0.12);\n  ",
          children: [
            {
              selector: "\n\n    &:not(.active):hover ",
              body: "\n      background-color: rgba(255, 255, 255, 0.04);\n    ",
              children: []
            },
            {
              selector: "\n\n    &.active,\n    &:active ",
              body: "\n      background-color: rgba(255, 255, 255, 0.08);\n    ",
              children: []
            }
          ]
        }
      ]
    },
    {
      selector: "\n\n.toolbar ",
      body: "\n  background-color: #f5f5f5;\n  border-color: #d6d6d6;\n  color: #505050;\n",
      children: []
    }
  ]
};

/* EXPORT */

export {INPUT, OUTPUT, AST};

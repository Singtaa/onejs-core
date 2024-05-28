
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

const OUTPUT = `input.base,textarea.base,.label.base,.container.base,.card.base,.tagbox.base{background-color: #FFFFFF;color: #1F1F1F;border-color: #dadada;}.button.base{background-color: #FFFFFF;color: #1F1F1F;border-color: #dadada;}.button.base:not(.active):hover{background-color: #f7f7f7;}.button.base.active,.button.base:active{background-color: #f0f0f0;}.text-base{color: #1F1F1F;}input.accent,textarea.accent,.label.accent,.container.accent,.card.accent,.tagbox.accent{background-color: #EF6C00;color: #FFFFFF;border-color: #a54b00;}.button.accent{background-color: #EF6C00;color: #FFFFFF;border-color: #a54b00;}.button.accent:not(.active):hover{background-color: #e06500;}.button.accent.active,.button.accent:active{background-color: #d05e00;}.text-accent{color: #FFFFFF;}input.highlight,textarea.highlight,.label.highlight,.container.highlight,.card.highlight,.tagbox.highlight{background-color: #f0f0f0;color: #1F1F1F;border-color: #bcbcbc;}.button.highlight{background-color: #f0f0f0;color: #1F1F1F;border-color: #bcbcbc;}.button.highlight:not(.active):hover{background-color: #d9d9d9;}.button.highlight.active,.button.highlight:active{background-color: #d1d1d1;}.text-highlight{color: #1F1F1F;}input.warning,textarea.warning,.label.warning,.container.warning,.card.warning,.tagbox.warning{background-color: #F44336;color: #FFFFFF;border-color: #d4190c;}.button.warning{background-color: #F44336;color: #FFFFFF;border-color: #d4190c;}.button.warning:not(.active):hover{background-color: #f33527;}.button.warning.active,.button.warning:active{background-color: #f22819;}.text-warning{color: #FFFFFF;}body{background-color: #f7f7f7;color: #1F1F1F;}::selection{background-color: rgba(239,108,0,0.15);}::placeholder{color: rgba(31,31,31,0.65);}.layout.column{border-color: #dedede;}details{background-color: #FFFFFF;border-color: #dadada;color: #1F1F1F;}details summary:hover:not(:active){background-color: #f7f7f7;}details summary:active{background-color: #f0f0f0;}details summary::-webkit-details-marker{background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#1F1F1F" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>');/* @root/resources/icons/chevron-right.svg */}details[open] summary{border-color: #dadada;}details[open] summary::-webkit-details-marker{background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#1F1F1F" d="M7.41348,8.58407L11.9995,13.1701L16.5855,8.58407L17.9995,9.99807L11.9995,15.9981L5.99948,9.99807L7.41348,8.58407Z" /></svg>');/* @root/resources/icons/chevron-down.svg */}.editor{background-color: #FFFFFF;border-color: #e6e6e6;color: #1F1F1F;}pre{background-color: #F6F8FA;color: #1F1F1F;}.katex *{border-color: #1F1F1F;}.katex .frac-line{border-color: #1F1F1F;}.list-header{background-color: #f9f9f9;border-color: #dedede;color: #6c6c6c;}.list-item{background-color: transparent;color: inherit;border-color: rgba(0,0,0,0.12);}.list-item:not(.active):hover{background-color: rgba(0,0,0,0.04);}.list-item.active,.list-item:active{background-color: rgba(0,0,0,0.08);}.mainbar{background-color: #f7f7f7;color: inherit;}.middlebar{background-color: #FFFFFF;color: #1F1F1F;}.middlebar .list-item{background-color: transparent;color: inherit;border-color: rgba(0,0,0,0.12);}.middlebar .list-item:not(.active):hover{background-color: rgba(0,0,0,0.04);}.middlebar .list-item.active,.middlebar .list-item:active{background-color: rgba(0,0,0,0.08);}.monaco-editor .monaco-scrollable-element>.scrollbar>.slider,.monaco-editor .minimap-slider .minimap-slider-horizontal{background: rgba(159,159,159,0.35) !important;}.monaco-editor .monaco-scrollable-element>.scrollbar>.slider:hover,.monaco-editor .minimap-slider .minimap-slider-horizontal:hover{background: #909090 !important;}.monaco-editor .monaco-scrollable-element>.scrollbar>.slider:active,.monaco-editor .minimap-slider .minimap-slider-horizontal:active,.monaco-editor .monaco-scrollable-element>.scrollbar>.slider .active,.monaco-editor .minimap-slider .minimap-slider-horizontal .active{background: #808080 !important;}.monaco-editor .selected-text{background-color: rgba(239,108,0,0.15);}.monaco-editor .selected-text.focused{background-color: rgba(239,108,0,0.15);}.monaco-editor .margin{background-color: #FFFFFF;}.monaco-editor .line-numbers{color: #6A737D;}.monaco-editor .current-line~.line-numbers{color: #6A737D;}.toast{background-color: #20272C;border-color: #060809;color: #FFFFFF;}.toast:not(.active):hover{background-color: #1a1f23;}.toast.active,.toast:active{background-color: #13171a;}.popover .list-item{background-color: transparent;color: inherit;border-color: rgba(0,0,0,0.12);}.popover .list-item:not(.active):hover{background-color: rgba(0,0,0,0.04);}.popover .list-item.active,.popover .list-item:active{background-color: rgba(0,0,0,0.08);}.preview{background-color: #FFFFFF;border-color: #e6e6e6;color: #1F1F1F;}.preview h1,.preview h2,.preview h3,.preview h4,.preview h5,.preview h6{border-color: #EAECEF;}.preview h1{color: inherit;}.preview h2{color: inherit;}.preview h3{color: inherit;}.preview h4{color: inherit;}.preview h5{color: inherit;}.preview h6{color: #6A737D;}.preview table th,.preview table td{border-color: #DFE2E5;}.preview table tr{background-color: #FFFFFF;}.preview table tr:nth-child(2n){background-color: #F6F8FA;}.preview code,.preview p code,.preview li code,.preview table code{background-color: rgba(27,31,35,0.05) !important;color: inherit !important;}.preview pre code{background-color: transparent !important;}.preview blockquote{color: #6A737D;border-color: #DFE2E5;}.preview kbd{background-color: #FAFBFC;border-color: #DFE2E5;color: #444D56;box-shadow: inset 0 -1px 0 #959DA5;border-bottom-color: #959DA5;}.preview mark{background-color: rgba(239,108,0,0.15);color: #1F1F1F;}.preview hr{background-color: #E1E4E8;}.preview h1 a,.preview h2 a,.preview h3 a,.preview h4 a,.preview h5 a,.preview h6 a,.preview p a,.preview li a,.preview th a,.preview td a,.preview dt a,.preview dd a,.preview address a{color: #0366D6;}.preview h1 a:hover,.preview h2 a:hover,.preview h3 a:hover,.preview h4 a:hover,.preview h5 a:hover,.preview h6 a:hover,.preview p a:hover,.preview li a:hover,.preview th a:hover,.preview td a:hover,.preview dt a:hover,.preview dd a:hover,.preview address a:hover{color: #035fc7}.preview h1 a:active,.preview h2 a:active,.preview h3 a:active,.preview h4 a:active,.preview h5 a:active,.preview h6 a:active,.preview p a:active,.preview li a:active,.preview th a:active,.preview td a:active,.preview dt a:active,.preview dd a:active,.preview address a:active{color: #0358b8}.quick-panel .list-item{background-color: transparent;color: inherit;border-color: rgba(0,0,0,0.12);}.quick-panel .list-item:not(.active):hover{background-color: rgba(0,0,0,0.04);}.quick-panel .list-item.active,.quick-panel .list-item:active{background-color: rgba(0,0,0,0.08);}html.no-overlay-scrollbars ::-webkit-scrollbar{background-color: transparent;width: 12px;height: 12px;}html.no-overlay-scrollbars ::-webkit-scrollbar-track{background-color: transparent;}html.no-overlay-scrollbars ::-webkit-scrollbar-track-piece{background-color: transparent;}html.no-overlay-scrollbars ::-webkit-scrollbar-corner{background-color: transparent;}html.no-overlay-scrollbars ::-webkit-scrollbar-thumb{background: rgba(159,159,159,0.35);}html.no-overlay-scrollbars ::-webkit-scrollbar-thumb:hover{background: #909090;}html.no-overlay-scrollbars ::-webkit-scrollbar-thumb:active{background: #808080;}.sidebar{background-color: #20272C;color: #FFFFFF;}.sidebar .list-item{background-color: transparent;color: inherit;border-color: rgba(255,255,255,0.12);}.sidebar .list-item:not(.active):hover{background-color: rgba(255,255,255,0.04);}.sidebar .list-item.active,.sidebar .list-item:active{background-color: rgba(255,255,255,0.08);}.toolbar{background-color: #f5f5f5;border-color: #d6d6d6;color: #505050;}`;

const INPUT_COMPLEX_AMPERSAND = `
html, body {
  &.foo &,
  &.bar & .baz {
    bar,
    baz & {
      color: pink;
    }
  }
}
`;

const OUTPUT_COMPLEX_AMPERSAND = `html.foo html bar,html.foo body bar,body.foo html bar,body.foo body bar,html.bar html .baz bar,html.bar body .baz bar,body.bar html .baz bar,body.bar body .baz bar,baz html.foo html,baz html.foo body,baz body.foo html,baz body.foo body,baz html.bar html .baz,baz html.bar body .baz,baz body.bar html .baz,baz body.bar body .baz{color: pink;}`;

/* EXPORT */

export {INPUT, OUTPUT, INPUT_COMPLEX_AMPERSAND, OUTPUT_COMPLEX_AMPERSAND};

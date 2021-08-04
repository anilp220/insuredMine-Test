import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contents: any[] = [
    '<div>Hello <span class="mention" data-index="0" data-denotation-char="@" data-id="1" data-value="tom">﻿<span contenteditable="false"><span class="ql-mention-denotation-char">@</span>tom</span>﻿</span>, how are you doing?</div>',
    `<div>Hey <span class="mention" data-index="1" data-denotation-char="@" data-id="2" data-value="dick">﻿<span contenteditable="false"><span class="ql-mention-denotation-char">@</span>dick</span>﻿</span>, I'm doing great. Thanks!</div>`
  ];
  constructor() { }

  ngOnInit(): void {
  }

  receiveContent(event: any) {
    console.log(event)
    if (event)
      this.contents.push(event)
  }
}

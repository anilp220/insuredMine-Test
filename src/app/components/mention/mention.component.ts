import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core'
import 'quill-mention'

import { QuillEditorComponent } from 'ngx-quill'
import { AuthService } from 'src/app/shared/services/auth.service'
@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.scss']
})
export class MentionComponent {

  allUsers: { id: number, value: string }[] = [];

  content: string = '';

  @ViewChild(QuillEditorComponent, { static: true }) editor: any;

  @Output() submitEvent = new EventEmitter<string>();

  modules = {
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      onSelect: (item: any, insertItem: any) => {
        const editor = this.editor.quillEditor
        insertItem(item)
        editor.insertText(editor.getLength() - 1, '', 'user')
      },
      source: async (searchTerm: any, renderList: any) => {
        if (searchTerm.length === 0) {
          renderList(this.allUsers, searchTerm)
        } else {
          const matches: any[] = []
          this.allUsers.forEach((entry) => {
            if (entry.value.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
              matches.push(entry)
            }
          })
          renderList(matches, searchTerm)
        }
      }
    },
    toolbar: []
  };

  constructor(private authService: AuthService) {
    this.getAllUsers()
  }

  onClick() {
    this.submitEvent.emit(this.content)
  }

  async getAllUsers() {
    this.allUsers = await this.authService.getAllUsers();
  }
}

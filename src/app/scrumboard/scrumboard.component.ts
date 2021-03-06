import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ToolbarHelpers } from '../core/toolbar/toolbar.helpers';
@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.scss']
})
export class ScrumboardComponent {
  tasks: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali',
    'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis',
    'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
  developers: Array<string> = [];
  testers: Array<string> = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }


    ToolbarHelpers.notifications.push({
      id: 'id',
      title: 'Mail 5',
      lastTime: '23 Minutes ago',
      state: 'state'
    })

  }
}

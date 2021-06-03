import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'cdk-toolbar-notification',
  templateUrl: './toolbar-notification.component.html',
  styleUrls: ['./toolbar-notification.component.scss']
})
export class ToolbarNotificationComponent implements OnInit {
  cssPrefix = 'toolbar-notification';
  isOpen: boolean = false;
  @Input() notifications = [];

  // @HostListener('document:click', ['$event', '$event.target'])
  // onClick(event: MouseEvent, targetElement: HTMLElement) {
  //     if (!targetElement) {
  //           return;
  //     }
  //     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
  //     if (!clickedInside) {
  //          this.isOpen = false;
  //     }
  // }

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
  }

  select() {

  }

  delete(notification, i) {
    this.notifications = this.notifications.filter(function (data, index) {
      return i!=index;
    })
  }

}

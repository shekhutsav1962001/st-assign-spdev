import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  checked = false;
  indeterminate = false;
  employee = { select: '', position: '', image: 'assets/noavatar.png' }

  constructor() { }

  ngOnInit() {
    this.employee = { select: '', position: '', image: 'assets/noavatar.png' }
  }
  employees = [
    { select: 'Hari', position: 'Full stack developer', image: 'assets/profile.jpg' },
    { select: 'Sujith', position: 'Full stack developer', image: 'assets/man.jpeg' },
    { select: 'Ramya', position: 'Full stack developer', image: 'assets/noavatar.png' },
    { select: 'Sree', position: 'Full stack developer', image: 'assets/profile.jpg' },
    { select: 'Sruthy', position: 'Full stack developer', image: 'assets/noavatar.png' },
    { select: 'Fahad', position: 'Full stack developer', image: 'assets/profile.jpg' },
  ];
  save()
  {
    console.log("save")
    this.employees.unshift(this.employee)
    this.employee = { select: '', position: '', image: 'assets/noavatar.png' }
  }
}

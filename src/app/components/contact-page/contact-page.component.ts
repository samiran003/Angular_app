import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openEmail() {
    window.open("aryanjamatia9862@gmail.com", '_blank');
  }
}

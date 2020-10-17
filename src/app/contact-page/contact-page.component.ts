import { Component, OnInit } from '@angular/core';
import { MEMBERS } from '../member';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  members=MEMBERS;

  constructor() { }

  ngOnInit(): void {
  }

}

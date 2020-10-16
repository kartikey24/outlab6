import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  feedbackEditor = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    feedback: new FormControl(''),
    comments: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.feedbackEditor.value);
  }

}

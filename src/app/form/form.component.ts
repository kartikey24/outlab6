import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WebInterfaceService } from '../web-interface.service';

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
    comment: new FormControl('')
  })

  constructor(private webInterfaceService: WebInterfaceService) { }

  setInitialValues(): void{
    this.webInterfaceService.getFormData().subscribe(initData => this.feedbackEditor.setValue(initData));
  }

  ngOnInit(): void {
    this.setInitialValues();
  }

  onSubmit(): void {
    console.log(this.feedbackEditor.value);
    this.webInterfaceService.submitFormData(this.feedbackEditor.value).subscribe(() => alert('Your feedback was submitted successfully :)'));
  }

}

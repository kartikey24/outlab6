import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebInterfaceService } from '../web-interface.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  feedbackEditor = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    feedback: new FormControl('',Validators.required),
    comment: new FormControl('')
  })

  constructor(private webInterfaceService: WebInterfaceService) { }

  setInitialValues(): void{
    this.webInterfaceService.getFormData().subscribe(initData => this.feedbackEditor.setValue(initData));
  }

  ngOnInit(): void {
    this.setInitialValues();
  }

  onSuccess(): void{
    alert('Your feedback was submitted successfully :)')
    this.feedbackEditor.reset();
  }

  onSubmit(): void {
    console.log(this.feedbackEditor.value);
    this.webInterfaceService.submitFormData(this.feedbackEditor.value).subscribe(() => this.onSuccess());
    
  }

}

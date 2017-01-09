import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-feedback',
  template: `
      <div class="has-danger" *ngIf="modelRef.touched || modelRef.dirty">
        <div class="form-control-feedback" 
              *ngIf="modelRef.errors?.required">
              To pole jest wymagane
        </div>
        <div class="form-control-feedback" 
              *ngIf="modelRef.errors?.minlength">
              To pole musi mieć przynajmniej {{modelRef.errors.minlength.requiredLength}} znaki
        </div>
      </div>
  `,
  styles: []
})
export class FormFeedbackComponent implements OnInit {

  @Input('model')
  modelRef;

  @Input('form')
  formRef;

  constructor() { }

  ngOnInit() {
  }

}

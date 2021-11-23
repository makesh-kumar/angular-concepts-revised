import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// './basic-form.component.less',
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  public dataForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dataForm = this.fb.group({
      name: [
        'makesh',
        [Validators.required, Validators.minLength(4), Validators.maxLength(7)],
      ],
    });
  }

  submitForm() {
    console.log(this.dataForm);
  }
}

import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "login-form",
  templateUrl: "login-form.component.html"
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nickname: [
        "",
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/)]
      ]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      this.submit.emit(this.form.get("nickname").value);
    } else {
      this.markFormInvalid();
    }
  }

  markFormInvalid() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  controlInvalid(controlName: string) {
    var control = this.form.get(controlName);
    return (control.touched || control.dirty) &&
      control.invalid &&
      control.errors
      ? true
      : false;
  }
}

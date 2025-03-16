// import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule ], //NgIf
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})

export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['standartName', [Validators.required, Validators.minLength(3)]],
      email: ['standartEmail', [Validators.required, Validators.minLength(5), Validators.email]],
      password: ['standartPassword',[
        Validators.required, 
        Validators.minLength(8)
        // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]
      ],
      confirmPassword: ['standartConfirmPassword', Validators.required]
    })
 } //  ,{ validators: this.passwordMatchValidator }

passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value; //проверяем, есть ли поле password
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {mismatch: true}; //строгое равенство
  }
  submitForm() {
    if(this.registerForm.valid){
      console.log('Форма отправлена', this.registerForm.value);
    }
    else{
      console.error('Форма содержит ошибки');
    }
  }
}




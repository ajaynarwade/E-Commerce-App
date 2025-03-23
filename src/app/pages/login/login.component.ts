
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup; // Form group for login
  registerForm!: FormGroup; // Form group for registration
  isRegisterMode: boolean = false; // Toggle between login and registration
  users: any[] = []; // Array to store registered user data

  constructor(
    private fb: FormBuilder, // FormBuilder for creating forms
    private router: Router, // Router for navigation
    private toastr: ToastrService // Toastr for notifications
  ) {
    this.initializeForms();
  }

  /**
   * Initialize Login and Register Forms
   */
  private initializeForms() {
    // Initialize Login Form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        ]
      ]
    });

    // Initialize Register Form
    this.registerForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('^[a-zA-Z ]+$') // Allow only alphabets and spaces
          ]
        ]
        ,
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
          ]
        ],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  /**
   * Custom validator to check if password and confirm password match
   */
  passwordsMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  /**
   * Handle login form submission
   */
  onLoginSubmit() {
    if (this.loginForm.invalid) {
      this.toastr.error('Please fill in all required fields correctly', 'Invalid Form', { timeOut: 3000 });
      return;
    }

    const { email, password } = this.loginForm.value;
    const userExists = this.users.some(user => user.email === email && user.password === password);

    if (userExists) {
      this.toastr.success('You are logged in!', 'Login Success', { timeOut: 3000 });
      this.router.navigate(['/']); // Navigate to home
    } else {
      this.toastr.error('Invalid login credentials', 'Login Failed', { timeOut: 3000 });
    }
  }

  /**
   * Handle register form submission
   */
  onRegisterSubmit() {
    if (this.registerForm.invalid) {
      this.toastr.error('Please fill in all required fields correctly', 'Invalid Form', { timeOut: 3000 });
      return;
    }

    const { name, email, password } = this.registerForm.value;
    const userExists = this.users.some(user => user.email === email);

    if (userExists) {
      this.toastr.error('User already exists!', 'Registration Failed', { timeOut: 3000 });
    } else {
      this.users.push({ name, email, password });
      this.toastr.success('Registration successful!', 'Welcome', { timeOut: 3000 });
      this.toggleMode(); // Switch to login mode
    }
  }

  /**
   * Toggle between login and registration forms
   */
  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }
}

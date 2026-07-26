import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup;
  submitted = false;
  sending = false;
  error = false;

  // Formspree URL endpoint for email submissions
  private formspreeUrl = 'https://formspree.io/f/mlgqoyeb';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.sending = true;
      this.error = false;

      this.http.post(this.formspreeUrl, this.form.value).subscribe({
        next: (response) => {
          this.sending = false;
          this.submitted = true;
          this.form.reset();
        },
        error: (err) => {
          console.error('Formspree submission error:', err);
          this.sending = false;
          this.error = true;
        }
      });
    }
  }
}
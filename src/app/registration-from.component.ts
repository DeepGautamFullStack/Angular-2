import { Component } from '@angular/core';
import { User }    from './app.model.user';
@Component({
  moduleId: module.id,
  selector: 'registration-form',
  templateUrl: './app.registration.html'
})
export class RegistrationFormComponent {
  emails = ['dgautam.hcl@gmail.com', 'deepgautam2008@gmail.com',
            'rakesh@gmail.com', 'atul@gmail.com'];
  model = new User("Deep","Gautam","dgautam.hcl@gmail.com");
  submitted = false;
  onSubmit() { this.submitted = true; }

  newUser() {
    this.model = new User("Rakesh","Mishra","rakesh@gmail.com");
  }
}

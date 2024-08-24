import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-front-nav',
  standalone: true,
  imports: [],
  templateUrl: './front-nav.component.html',
  styleUrl: './front-nav.component.css'
})
export class FrontNavComponent {

  constructor() {}

  goToStudentLogin() {
    // Open the student login page in a new tab
    window.open('/student-login', '_blank');
  }

  goToTeacherLogin() {
    // Open the teacher login page in a new tab
    window.open('/teacher-login', '_blank');
  }

  goToParentLogin() {
    // Open the parent login page in a new tab
    window.open('/parent-login', '_blank');
  }
}




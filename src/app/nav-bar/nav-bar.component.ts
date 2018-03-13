import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  description = '';
  name = '';
  private loggedIn = false;
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'descripcion': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });
  }
  addPost(post) { // lo que el formulario agrega
    this.description = post.description;
    this.name = post.name;
  }
  toggleDisplay() {
    this.loggedIn = !this.loggedIn;
  }
  ngOnInit() {
  }

}

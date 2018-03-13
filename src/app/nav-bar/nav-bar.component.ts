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
  titleAlert = 'Este controlador es Requerido';
  alertArea = 'Es Requerido mas de 30 caracteres y menos de 500 caracteres';
  private loggedIn = false;
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
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

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'Usted necesita especificar mas de 3 caracteres';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
          this.titleAlert = 'Este controlador es Requerido';
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    )
  }
}

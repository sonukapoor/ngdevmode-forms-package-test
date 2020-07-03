import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent  {
  profileForm = new FormGroup({
    first: new FormControl('', Validators.required),
    last: new FormControl(''),
  });

  subscribed = new FormControl('');
}

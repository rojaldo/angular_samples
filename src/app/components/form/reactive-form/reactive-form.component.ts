import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  heroForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.heroForm);
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.heroForm.value);
  }
}

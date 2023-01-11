import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CounterService } from 'src/app/_services/counter/counter.service';

@Component({
  selector: 'app-add-counter',
  templateUrl: './add-counter.component.html',
  styleUrls: ['./add-counter.component.scss'],
})
export class AddCounterComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private counterService: CounterService
  ) {
    this.counterForm = this.fb.group({
      name: ['', Validators.required],
      purpose: ['', Validators.required],
    });
  }

  counterForm: FormGroup;

  formErrors = {
    name: '',
    purpose: '',
  };

  ngOnInit(): void {}

  onSubmit() {
    this.counterService.create(this.counterForm.value).subscribe((data) => {
      if (data.errors) {
        this.formErrors.name = data.errors.name;
        this.formErrors.purpose = data.errors.purpose;
        return false;
      } else {
        return this.router.navigate(['/admin/counter']);
      }
    });
  }
}

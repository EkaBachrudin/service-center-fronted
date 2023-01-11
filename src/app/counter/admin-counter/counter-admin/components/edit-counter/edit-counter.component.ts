import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CounterService } from 'src/app/_services/counter/counter.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss'],
})
export class EditCounterComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private counterService: CounterService
  ) {
    this.counterForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      purpose: ['', Validators.required],
      status_counters_id: ['', Validators.required],
    });
  }

  idParam: number;
  counterForm: FormGroup;

  formErrors = {
    name: '',
    purpose: '',
  };

  ngOnInit(): void {
    let fetchFromData$ = this.route.paramMap.pipe(
      switchMap((param: any) => {
        let id = Number(param.get('id'));
        this.idParam = Number(param.get('id'));
        return this.counterService.getById(id);
      })
    );

    fetchFromData$.subscribe((data: any) => {
      if (data) {
        this.counterForm = this.fb.group({
          id: [data.id],
          name: [data.name, Validators.required],
          purpose: [data.purpose, Validators.required],
          status_counters_id: [data.status_counters_id, Validators.required],
        });
      } else {
        this.router.navigate(['/admin/counter']);
      }
    });
  }

  onSubmit() {
    this.counterService.update(this.counterForm.value).subscribe((data) => {
      if (data.errors) {
        this.formErrors.name = data.errors.name;
        this.formErrors.purpose = data.errors.purpose;
      } else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}

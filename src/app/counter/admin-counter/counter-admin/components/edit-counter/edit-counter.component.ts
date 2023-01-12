import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CounterService } from 'src/app/_services/counter/counter.service';
import { UserService } from 'src/app/_services/user/user.service';
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
    private counterService: CounterService,
    private userService: UserService
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
  allUsers: [];

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

    this.loadUsers();
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

  getAllusers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.allUsers = data.data;
    });
  }

  @ViewChild('closebutton') closebutton;
  assignError = false;

  assignUser(data: any) {
    if (data) {
      let userForm: FormGroup = this.fb.group({
        user_id: [data],
      });
      this.counterService.assignUser(this.idParam, userForm.value).subscribe();
      this.assignError = false;
      this.closebutton.nativeElement.click();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this.assignError = true;
    }
  }

  users: any;
  loadUsers(): void {
    this.userService.getUserByCounter(this.idParam).subscribe((data: any) => {
      this.users = data.data;
    });
  }
}

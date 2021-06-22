import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AadharService } from '../service/aadhar.service';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
  styleUrls: ['./sign-up-view.component.css'],
})
export class SignUpViewComponent implements OnInit {
  Aadhaarform: FormGroup = new FormGroup({});
  id: any;
  constructor(
    private adhaarService: AadharService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.Aadhaarform = new FormGroup({
      aadharnumber: new FormControl(),
      fullname: new FormControl(),
      fathername: new FormControl(),
      yob: new FormControl(),
      sex: new FormControl(),
      add: new FormControl(),
    });
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.adhaarService.getById(this.id).subscribe((res) => {
        this.Aadhaarform.patchValue(res);
      });
    }
  }
  Onsubmit() {
    console.log(this.Aadhaarform.value);
    if (this.id) {
      this.adhaarService.edit(this.id,this.Aadhaarform.value).subscribe(
        (res) => {
          console.log(res);
          this.Aadhaarform.reset();
          this.router.navigate(['/home']);
        },
        (err) => {
          alert(JSON.stringify(err));
          console.log(err);
        }
      );
    } else {
      this.adhaarService.signup(this.Aadhaarform.value).subscribe(
        (res) => {
          console.log(res);
          this.Aadhaarform.reset();
          this.router.navigate(['/home']);
        },
        (err) => {
          alert(JSON.stringify(err));
          console.log(err);
        }
      );
    }
  }
}

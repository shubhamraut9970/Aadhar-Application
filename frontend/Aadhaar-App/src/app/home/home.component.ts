import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AadharService } from '../service/aadhar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  AadharData: Array<any> = [];
  constructor(private aadharService: AadharService, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  delete(id: string) {
    this.aadharService.delete(id).subscribe(
      (res) => {
        console.log(res);
        this.fetchData();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  fetchData() {
    this.aadharService.getAllData().subscribe((res: any) => {
      this.AadharData = res;
    });
  }

  edit(user:any){
    console.log(user);
    
    this.router.navigate(['/edit-sign-up-view',user._id])
  }
}

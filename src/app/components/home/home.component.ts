import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  selectService(serviceId: number){
    // this.router.navigate(['service-details', serviceId]);
    this.router.navigateByUrl('service-details');
  }

  ourServices = [{heading:'Car Loan',image:'assets/loan.jpeg',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni et accusantium, tempore eum dolor aliquam ex ducimus consequuntur rerum nihil delectus fugiat ab error in, dolorem fugit. Culpa, consectetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore dolorum quibusdam est placeat pariatur laborum beatae odit praesentium. Ratione accusantium vitae veniam blanditiis corporis ipsa placeat voluptatem voluptate. Aliquid" },
    {heading:'Usede Car Loan',image:'assets/vehicle_loan.jpeg',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni et accusantium, tempore eum dolor aliquam ex ducimus consequuntur rerum nihil delectus fugiat ab error in, dolorem fugit. Culpa, consectetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore dolorum quibusdam est placeat pariatur laborum beatae odit praesentium. Ratione accusantium vitae veniam blanditiis corporis ipsa placeat voluptatem voluptate. Aliquid"},
    {heading:'New Car Loan',image:'assets/vehicle_loan.jpeg',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni et accusantium, tempore eum dolor aliquam ex ducimus consequuntur rerum nihil delectus fugiat ab error in, dolorem fugit. Culpa, consectetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore dolorum quibusdam est placeat pariatur laborum beatae odit praesentium. Ratione accusantium vitae veniam blanditiis corporis ipsa placeat voluptatem voluptate. Aliquid"},
    {heading:'commercial Vehicle Loan',image:'assets/vehicle_loan.jpeg',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni et accusantium, tempore eum dolor aliquam ex ducimus consequuntur rerum nihil delectus fugiat ab error in, dolorem fugit. Culpa, consectetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore dolorum quibusdam est placeat pariatur laborum beatae odit praesentium. Ratione accusantium vitae veniam blanditiis corporis ipsa placeat voluptatem voluptate. Aliquid"},
    {heading:'Lap Case',image:'assets/loan.jpeg',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni et accusantium, tempore eum dolor aliquam ex ducimus consequuntur rerum nihil delectus fugiat ab error in, dolorem fugit. Culpa, consectetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore dolorum quibusdam est placeat pariatur laborum beatae odit praesentium. Ratione accusantium vitae veniam blanditiis corporis ipsa placeat voluptatem voluptate. Aliquid"},
    {heading:'Loan Against Property',image:'assets/property_loan.jpeg',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni et accusantium, tempore eum dolor aliquam ex ducimus consequuntur rerum nihil delectus fugiat ab error in, dolorem fugit. Culpa, consectetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore dolorum quibusdam est placeat pariatur laborum beatae odit praesentium. Ratione accusantium vitae veniam blanditiis corporis ipsa placeat voluptatem voluptate. Aliquid"},
    {heading:'secure Loan',image:'assets/loan.jpeg',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni et accusantium, tempore eum dolor aliquam ex ducimus consequuntur rerum nihil delectus fugiat ab error in, dolorem fugit. Culpa, consectetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore dolorum quibusdam est placeat pariatur laborum beatae odit praesentium. Ratione accusantium vitae veniam blanditiis corporis ipsa placeat voluptatem voluptate. Aliquid"},
    {heading:'Unsecure Loan',image:'assets/business_loan.jpeg',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni et accusantium, tempore eum dolor aliquam ex ducimus consequuntur rerum nihil delectus fugiat ab error in, dolorem fugit. Culpa, consectetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore dolorum quibusdam est placeat pariatur laborum beatae odit praesentium. Ratione accusantium vitae veniam blanditiis corporis ipsa placeat voluptatem voluptate. Aliquid"}, 
    {heading:'Machinery Loan',image:'assets/property_loan.jpeg',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni et accusantium, tempore eum dolor aliquam ex ducimus consequuntur rerum nihil delectus fugiat ab error in, dolorem fugit. Culpa, consectetur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore dolorum quibusdam est placeat pariatur laborum beatae odit praesentium. Ratione accusantium vitae veniam blanditiis corporis ipsa placeat voluptatem voluptate. Aliquid"},
  ]

}

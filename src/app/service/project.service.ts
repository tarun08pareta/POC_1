import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  project = [
    {
      projectName: 'project 1',
      projectDescription:
        'a web-based platform or software allowing individuals to schedule appointments conveniently over the internet with businesses or service providers.',
        image:'../../assets/addAppo.png'
    },
    {
      projectName: 'E-commerce website',
      projectDescription: ' allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location',
      image:'../../assets/Screenshot (75).png'
    },
    {
      projectName: 'project 1',
      projectDescription:
        'a web-based platform or software allowing individuals to schedule appointments conveniently over the internet with businesses or service providers.',
        image:'../../assets/addAppo.png'
    },
  ];

  services=[
    {
      name:'Web Development',
      description:'i work on html css, and tailwind and javascript',
    }, {
      name:'frontend web-Development',
      description:'i work on html css, and tailwind and javascript',
    } ,{
      name:'App Development',
      description:'i work on html css, and tailwind and javascript',
    }
  ]

  getProject(): any {
    return this.project;
  }

  getServices():any{
    return this.services
  }

}

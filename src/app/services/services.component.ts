import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  service:any[]=[]
  constructor(private router:ActivatedRoute) { }
  ngOnInit(): void {
    this.service  = this.router.snapshot.data['developmentService'];
    
  }
}

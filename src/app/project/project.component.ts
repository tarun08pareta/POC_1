import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit{
  myProject :any[]= [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.myProject = this.projectService.getProject();
    // console.log('project',this.myProject)
  }
}

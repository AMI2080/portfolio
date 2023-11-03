import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnDestroy {

  projectId: number;

  project: Project;

  projectSubscription: Subscription;

  constructor(private projectsService: ProjectsService, private router: Router, private route: ActivatedRoute) {
    this.projectSubscription = this.route.params.subscribe((params: Params) => {
      this.projectId = +params['id'];
      this.project = this.projectsService.getProject(this.projectId);
      if (!this.project) {
        this.router.navigate(['projects']);
      }
    });
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }
}


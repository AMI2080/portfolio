import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      title: 'Project tilte',
      imagePath: 'assets/img/buyer-persona-infographics-flat-design_23-2148659313.avif',
      shortDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum laudantium quibusdam ipsa quam consequatur voluptatibus.',
      link: 'https://www.google.com'
    }, {
      title: 'Project tilte',
      imagePath: 'assets/img/buyer-persona-infographics-flat-design_23-2148659313.avif',
      shortDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum laudantium quibusdam ipsa quam consequatur voluptatibus.',
      link: 'https://www.google.com'
    }, {
      title: 'Project tilte',
      imagePath: 'assets/img/buyer-persona-infographics-flat-design_23-2148659313.avif',
      shortDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum laudantium quibusdam ipsa quam consequatur voluptatibus.',
      link: 'https://www.google.com'
    }, {
      title: 'Project tilte',
      imagePath: 'assets/img/buyer-persona-infographics-flat-design_23-2148659313.avif',
      shortDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum laudantium quibusdam ipsa quam consequatur voluptatibus.',
      link: 'https://www.google.com'
    }, {
      title: 'Project tilte',
      imagePath: 'assets/img/buyer-persona-infographics-flat-design_23-2148659313.avif',
      shortDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum laudantium quibusdam ipsa quam consequatur voluptatibus.',
      link: 'https://www.google.com'
    }, {
      title: 'Project tilte',
      imagePath: 'assets/img/buyer-persona-infographics-flat-design_23-2148659313.avif',
      shortDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum laudantium quibusdam ipsa quam consequatur voluptatibus.',
      link: 'https://www.google.com'
    }
  ];

  get allProjects() {
    return [...this.projects];
  }

  getProject(index: number) {
    return { ...this.projects[index] };
  }

}

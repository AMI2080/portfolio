import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      title: 'Medical Lab M.S.',
      imagePath: 'assets/img/lab-1.jpg',
      shortDescription: 'Web application for managing a medical laboratory.',
      images: [
        { url: 'assets/img/lab-1.jpg' },
        { url: 'assets/img/lab-2.jpg' },
        { url: 'assets/img/lab-3.jpg' },
        { url: 'assets/img/lab-4.jpg' },
      ],
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery', 'PHP', 'Laravel', 'MySQL', 'Rest API'],
    }, {
      title: 'Internet M.S.',
      imagePath: 'assets/img/internet-4.jpg',
      shortDescription: 'Web application for managing internet service provider operations.',
      images: [
        { url: 'assets/img/internet-1.jpg' },
        { url: 'assets/img/internet-2.jpg' },
        { url: 'assets/img/internet-3.jpg' },
        { url: 'assets/img/internet-4.jpg' },
      ],
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery', 'PHP', 'Laravel', 'MySQL', 'Rest API'],
    }, {
      title: 'YouTube Clone',
      imagePath: 'assets/img/youtube-clone-1.jpg',
      shortDescription: 'Cloning YouTube video page.',
      links: [
        {
          name: 'GitHub',
          title: 'GitHub.com/AMI2080/YouTube-Video',
          href: 'https://github.com/AMI2080/youtube-video',
        },
        {
          name: 'Deployed',
          title: 'YouTube-Clone.Abdelrhman.net/',
          href: 'https://youtube-clone.abdelrhman.net/',
        }
      ],
      images: [
        { url: 'assets/img/youtube-clone-1.jpg' },
        { url: 'assets/img/youtube-clone-2.jpg' },
        { url: 'assets/img/youtube-clone-3.jpg' },
      ],
      tech: ['HTML', 'CSS'],
    }, {
      title: 'Dashboard',
      imagePath: 'assets/img/dashboard-1.jpg',
      shortDescription: 'Dashboard by Angular.',
      links: [
        {
          name: 'GitHub',
          title: 'GitHub.com/AMI2080/Dashboard-Task',
          href: 'https://github.com/AMI2080/dashboard-task',
        },
        {
          name: 'Deployed',
          title: 'Dashboard-Task.Abdelrhman.net/',
          href: 'https://dashboard-task.abdelrhman.net/',
        }
      ],

      images: [
        { url: 'assets/img/dashboard-1.jpg' },
        { url: 'assets/img/dashboard-2.jpg' },
        { url: 'assets/img/dashboard-3.jpg' },
      ],
      tech: ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'JavaScript', 'TypeScript', 'Angular', 'Angular Material', 'ApexCharts.js'],
    }
  ];

  get allProjects() {
    return [...this.projects];
  }

  getProject(index: number) {
    if (index > this.projects.length || index < 1) {
      return undefined;
    }
    return { ...this.projects[index - 1] };
  }
}

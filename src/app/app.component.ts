import { Component, OnInit, inject } from '@angular/core';
import { Subject, first, map, takeUntil } from 'rxjs';
import { ProjectsService } from './services/projects.service';
import { Project } from './models/project.model';
import { Text } from './models/text.model';
import { TextsService } from './services/texts.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
}) //TODO PAU make it onPush
export class AppComponent implements OnInit {

  private ngUnsubscribe$: Subject<void> = new Subject<void>();

  projects: Project[];
  texts: Text[];

  constructor(
    private projectsService: ProjectsService,
    private textsService: TextsService
  ) { }

  ngOnInit() {
    this.projectsService.getAllObservable().valueChanges().pipe(
      takeUntil(this.ngUnsubscribe$),
      map(projects => projects.map(project => new Project(project)))
    ).subscribe(projects => {
      this.projects = projects;
      console.log(this.projects);
    });

    this.textsService.getAllObservable().valueChanges().pipe(
      takeUntil(this.ngUnsubscribe$),
      map(texts => texts.map(text => new Text(text)))
    ).subscribe(texts => {
      this.texts = texts;
      console.log(this.texts);
    });

    // INFO: get single project value once
    // this.projectsService.getProjectObservable('projects').get().pipe(first()).subscribe(data => { console.log(data.data()) });
  }

  // get getProjectProjects() {
  //   return this.projects?.find(project => project.id === 'projects');
  // }

  // get personalDescriptionFirstPhrase(): string | undefined {
  //   return this.texts?.find(text => text.id === 'personal-description-first-phrase')?.value;
  // }
  // get personalDescriptionSecondPhrase(): string | undefined {
  //   return this.texts?.find(text => text.id === 'personal-description-second-phrase')?.value;
  // }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}

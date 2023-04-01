import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private dbPath = '/projects';
  private projectsRef: AngularFirestoreCollection<Project>;

  constructor(private db: AngularFirestore) {
    this.projectsRef = db.collection(this.dbPath);
  }

  getAllObservable(): AngularFirestoreCollection<Project> {
    return this.projectsRef;
  }

  // getOneObservable(projectName: string): AngularFirestoreDocument<Project> {
  //   return this.projectsRef.doc(projectName);
  // }

  // create(project: Project): any {
  //   return this.projectsRef.add({ ...project });
  // }

  // update(id: string, data: any): Promise<void> {
  //   return this.projectsRef.doc(id).update(data);
  // }

  // delete(id: string): Promise<void> {
  //   return this.projectsRef.doc(id).delete();
  // }
}

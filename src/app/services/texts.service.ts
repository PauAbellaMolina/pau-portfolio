import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Text } from '../models/text.model';

@Injectable({
  providedIn: 'root'
})
export class TextsService {
  private dbPath = '/texts';

  textsRef: AngularFirestoreCollection<Text>;

  constructor(private db: AngularFirestore) {
    this.textsRef = db.collection(this.dbPath);
  }

  getAllObservable(): AngularFirestoreCollection<Text> {
    return this.textsRef;
  }

  // create(text: Text): any {
  //   return this.textsRef.add({ ...text });
  // }

  // update(id: string, data: any): Promise<void> {
  //   return this.textsRef.doc(id).update(data);
  // }

  // delete(id: string): Promise<void> {
  //   return this.textsRef.doc(id).delete();
  // }
}

export class Text {
  public id: string;
  public value: string;

  constructor(text?: Text) {
    if (text) {
      this.id = text.id;
      this.value = text.value;
    }
  }
}

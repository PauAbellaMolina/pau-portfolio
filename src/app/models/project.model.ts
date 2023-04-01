export class Project {
  public id: string;
  public title: string;
  public description: string;
  public image: string;
  public link?: string;
  public stack: string[];
  public infra: string[];

  constructor(project?: Project) {
    if (project) {
      this.id = project.id;
      this.title = project.title;
      this.description = project.description;
      this.image = project.image;
      this.link = project?.link;
      this.stack = project.stack;
      this.infra = project.infra;
    }
  }
}

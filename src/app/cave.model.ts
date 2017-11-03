export class Cave {
  public items = [];

  constructor(
    public left: number,
    public right: number,
    public creature: number,
    public story: string,
    public img: string) {};
}

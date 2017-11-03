export class Cave {
  public items = [];
  public directions = [];
  public creatures = [];
  constructor(
    public story: string,
    public img: string) {};

  addItems(item) {
    this.items.push(item);
  }

  addDirections(direction) {
    this.directions.push(direction);
  }

  addCreatures(creature) {
    this.creatures.push(creature);
  }
}

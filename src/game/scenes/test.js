export default class Test {
  constructor(g) {
    this.g = g;

    this.bgPos = 0;

    this.f = g.H.mkFont(g, 6, 2);

    this.p1 = this.g.spawn('P1', {p: this});

  }

  update(dt) {

    this.g.ents.forEach((e) => {
      e.update(dt);
    });


    if (this.g.input.freshKeys.Escape && !this.escape) {
      this.escape = true;
      this.g.changeScene('Title');
    }
  }

  render() {
    const g = this.g;
    g.draw.clear(0);

    g.ents.forEach((e) => {
      e.render();
    });

  }
}


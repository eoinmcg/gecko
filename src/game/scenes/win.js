export default class Win {
  constructor(g) {
    this.g = g;

    this.bgPos = 0;

    this.f = g.H.mkFont(g, 6, 2);
    this._f = g.H.mkFont(g, 6, 0);

    this.d = this.g.draw.resize(this.g.imgs['donut'], 8);

    g.addText('THE END', 100, false, g.h - 50, 1);

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
    g.draw.clear(16);
    g.draw.img(g.imgs.bg2, 0, this.bgPos - this.g.h);
    g.draw.img(g.imgs.bg2, 0, this.bgPos);

    if (this.g.fader > 0) {
      this.g.draw.text('YOU ROCK', this._f, false, 26);
      this.g.draw.text('YOU ROCK', this.f, false, 20);
    }

    this.g.draw.img(this.d, 105, 200);

    g.ents.forEach((e) => {
      e.render();
    });

  }
}

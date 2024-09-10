export default class Title {
  constructor(g) {
    this.g = g;

    this._titleFont = g.H.mkFont(g, 8, 0);
    this.titleFont = g.H.mkFont(g, 8, 2);
    this.titleFontSmall = g.H.mkFont(g, 6, 2);
    this._titleFontSmall = g.H.mkFont(g, 6, 0);

    // document.querySelector('#c').style.cursor = 'none';

    this.canStart = false;

    this.bgPos = 0;
    this.bgSpeed = 0.25;

    this.g.spawn('Button', {
      y: this.g.h - 120,
      clickCol: 11,
      col: 4,
      text: 'PLAY',
      cb: () => {
        this.g.changeScene('Play');
      }
    });
    this.g.addEvent({
      t: 100,
      cb: () => {
        this.canStart = true;
      },
    });
  }

  update(dt) {
    this.fader = Math.sin(new Date().getTime() * 0.005);

    this.bgPos += this.bgSpeed;
    if (this.bgPos > this.g.h) {
      this.bgPos = 0;
    }

    this.g.ents.forEach((e) => {
      e.update(dt);
    });
  }

  render() {
    const g = this.g;
    g.draw.clear(5);
    g.draw.img(g.imgs.bg2, 0, this.bgPos - this.g.h);
    g.draw.img(g.imgs.bg2, 0, this.bgPos);
    g.draw.text(`GECKO`, this._titleFontSmall, false, 128);
    g.draw.text(`GECKO`, this.titleFontSmall, false, 120);

    g.draw.text(`BLASTER`, this._titleFont, false, 188, 2, true, 50); g.draw.text(`BLASTER`, this.titleFont, false, 180, 2, true, 50);

    g.ents.forEach((e) => {
      e.render();
    });

    g.draw.img(g.imgs['pointer'], g.input.mx, g.input.my);
  }
}

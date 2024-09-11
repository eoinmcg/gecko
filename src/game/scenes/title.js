export default class Title {
  constructor(g) {
    this.g = g;

    this.i = g.draw.resize(this.g.imgs.title, 4);
    this.shadow = g.draw.color(this.i, g.data.pal[0], 0.2);

    this.canStart = false;

    this.bgPos = 0;
    this.bgSpeed = 0.25;

    g.spawn('Button', {
      y: this.g.h - 130,
      clickCol: 11,
      col: 4,
      text: 'PLAY',
      cb: () => {
        g.changeScene(g.plays === 0 ? 'Tut' : 'Play');
      }
    });


    g.addEvent({
      t: 100,
      cb: () => {
        this.canStart = true;
        g.spawn('Button', {
          y: g.h - 60,
          textCol: 1,
          clickCol: 0,
          col: false,
          w: 40,
          text: 'ABOUT',
          cb: () => {
            g.changeScene('Help');
          }
        });
      },
    });
    this.bling();

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
    g.draw.img(this.shadow, 20, 125);
    g.draw.img(this.i, 20, 120);

    g.ents.forEach((e) => {
      e.render();
    });

    g.draw.img(g.imgs['pointer'], g.input.mx, g.input.my);
  }

  bling() {
    let coords = this.g.H.rndArray([
      [180, 125],
      [120, 200],
      [60, 150],
    ]);
    this.g.addEvent({
      t: this.g.H.rnd(150, 200),
      cb: () => {
    this.g.spawn('Boom', { x: coords[0], y: coords[1], key: 'boom', scale: 4, col: 2,
      type: 'spark' });
        this.bling();
      }
    })
  }

}

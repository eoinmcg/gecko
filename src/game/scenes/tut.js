export default class Tut {
  constructor(g) {
    this.g = g;

    this.tutorial = true;
    this.escape = false;

    this.bgPos = 0;
    this.bgSpeed = 1;

    this.f = g.H.mkFont(g, 5, 4);
    this.f2 = g.H.mkFont(g, 2, 1);
    this.p1 = g.spawn('P1', {p: this});

    g.addText(g.mobile ? 'MOVE WITH FINGER' : 'MOVE WITH MOUSE', 50);
    g.sfx('piano');
    g.addEvent({
      t: 600,
      cb: () => {
        g.sfx('piano');
        g.addText('KILL BADDIES', 1);
        g.spawn('Cactus', {p: this});
      }
    })
    g.addEvent({
      t: 1200,
      cb: () => {
        g.sfx('piano');
        g.addText('COLLECT POWERUPS', 1);
        g.spawn('Powerup', {p: this, x: g.w/2, y: 0});
      }
    })
    g.addEvent({
      t: 1700,
      cb: () => {
        g.sfx('piano');
        g.addText('LETS GO!', 1);
      }
    })
    g.addEvent({
      t: 1900,
      cb: () => {
        g.changeScene('Play');
      }
    })

    if (g.mobile) {
        g.spawn('Button', {
          x: g.w - 80,
          y: g.h - 40,
          textCol: 1,
          clickCol: 0,
          col: false,
          w: 120,
          text: 'SKIP',
          cb: () => {
            g.changeScene('Play');
          }
        });
    }

  }

  initGameOver() {
    this.g.chageScene('Tut');
  }

  update(dt) {
    this.bgPos += this.bgSpeed;
    if (this.bgPos > this.g.h) {
      this.bgPos = 0;
    }

    this.g.ents.forEach((e) => {
      e.update(dt);
    });


    if (this.g.input.freshKeys.Escape && !this.escape) {
      this.escape = true;
      this.g.changeScene('Play');
    }

  }

  render() {
    const g = this.g;
    g.draw.clear(19);
    g.draw.img(g.imgs.bg2, 0, this.bgPos - this.g.h);
    g.draw.img(g.imgs.bg2, 0, this.bgPos);

    this.g.draw.text('TUTORIAL', this.f, false, 20);

    g.ents.forEach((e) => {
      e.render();
    });


    if (!this.g.mobile) {
      this.g.draw.text('ESC TO SKIP', this.f2, false, this.g.h - 30);
    }

  }
}

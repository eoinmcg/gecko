export default class Win {
  constructor(g) {
    this.g = g;

    this.bgPos = 0;

    this.f = g.H.mkFont(g, 6, 2);
    this._f = g.H.mkFont(g, 6, 0);

    this.donuts = [];
    for (let i = 1; i < 9; i += 1) {
      this.donuts.push(this.g.draw.resize(this.g.imgs['donut'], i));
    }
    console.log(this.donuts);
    this.d = this.donuts[7];

    g.addText('THE END', 100, false, g.h - 50, 1);
    g.addEvent({
      t: 20,
      cb: () => {
        this.g.audio = this.g.track3.music(0);
      }
    })

    for (let i = 0; i < 15; i += 1) {
      g.addEvent({
        t: i * 30,
        cb: () => {
          this.g.ents.push(new Treat(this.g, {donuts: this.donuts}));
        }
      })
    }

  }

  update(dt) {

    this.g.ents.forEach((e) => {
      e.update(dt);
    });


    if (this.g.input.freshKeys.Escape && !this.escape) {
      this.escape = true;
      this.g.audio.stop();
      this.g.changeScene('Title');
    }
  }

  render() {
    const g = this.g;
    g.draw.clear(16);
    g.draw.img(g.imgs.bg2, 0, this.bgPos - this.g.h);
    g.draw.img(g.imgs.bg2, 0, this.bgPos);

    g.ents.forEach((e) => {
      e.render();
    });

    if (this.g.fader > 0) {
      this.g.draw.text('YOU ROCK', this._f, false, 26);
      this.g.draw.text('YOU ROCK', this.f, false, 20);
    }

    this.g.draw.img(this.d, 105, 200);

  }
}

class Treat {
  constructor(g, o) {
    this.g = g;
    this.donuts = o.donuts;
    this.vy = 0;
    this.reset();
  }

  reset() {
    this.scale = this.g.H.rnd(1, 1)
    this.i = this.donuts[this.scale];
    this.w = this.i.width;
    this.h = this.i.height;
    this.vy = this.scale;
    this.x = this.g.H.rnd(this.w, this.g.w - this.w);
    this.y = this.g.H.rnd(10, 60) * -1;
  }

  render() {
    this.g.draw.img(this.i, this.x, this.y);
  }

  update() {

    this.y += this.vy;
    // this.x += this.g.fader * 1.2;

    if (this.y > this.g.h + this.h) {
      this.reset();
    }
  }
}

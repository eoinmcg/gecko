export default class Loader {
  constructor(g) {
    this.g = g;

    this.f = g.H.mkFont(g, 5, 2);

    this.bg = g.draw.resize(g.imgs['loader'], 2);

    g.addEvent({
      t: 100,
      cb: () => {
        this.ready = true;
      }
    })

    this.loaded = 0;
    this.incrementLoad();
  }

  update(dt) {
    this.g.ents.forEach((e) => {
      e.update(dt);
    });

    if (~~this.titleAlpha < 1) {
      this.titleAlpha += this.titleAlphaInc;
      if (~~this.titleAlpha === 1) {
        // this.g.shake();
      }
    }

    if (this.g.input.firstTouch && this.ready) {
      this.g.changeScene('Title');
    }

  }

  render() {
    const g = this.g;
    g.draw.img(this.bg, 0, 0);

    if (this.ready && this.g.fader > 0) {
      g.draw.text(g.mobile ? 'TAP ME' : 'CLICK ME',
        this.f, false, 200);
    }



    g.ents.forEach((e) => {
      e.render();
    });

    for (let n = 0; n <= 10; n += 1) {
      g.draw.rect(0, 48 * n, g.w, 48 - this.loaded, 0);
    }

    if (!g.mobile) {
      g.draw.img(g.imgs['pointer'], g.input.mx, g.input.my);
    }

  }

  incrementLoad() {
    if (this.loaded >= 48) { return; }

    this.g.addEvent({
      t: 1,
      cb: () => {
        this.loaded += 1;
        this.incrementLoad();
      }
    })
  }

  spawnStartButton() {
    this.g.spawn('Button', {
      y: this.g.h - 90,
      clickCol: 11,
      col: 4,
      text: 'START',
      cb: () => {
        this.g.changeScene('Title');
      }
    });
  }

}



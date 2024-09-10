export default class Play {

  constructor(g) {
    this.g = g;

    this.bg = g.imgs['bg'];
    this.bg2 = g.imgs['bg2'];
    this.bgPos = 0;
    this.bgSpeed = 1;
    this.bgCol = 12;

    // document.querySelector('#c').style.cursor = 'none';
    this.p1 = this.g.spawn('P1', {p: this});
    this.score = 0;

    this.offset = {
      x: 0, y: 0
    };

    this.scoreFont = g.H.mkFont(g, 4, 2);
    this.gameOver = false;

    this.audio = this.g.zzfxP(...this.g.tune);
    this.audio.loop = true;
    this.g.spawn('Hole', {p: this, y: -g.h});

    this.baddies = [
      'Cactus', 'Bat', 'Spider',
      'Worm'
    ];
  }

  update(dt) {
    this.fader = Math.sin(new Date().getTime() * 0.03);

    if (!this.gameOver && Math.random() > 0.99) {
      if( Math.random() > 0.1) {
        this.g.spawn(this.g.H.rndArray(this.baddies), {p: this});
      } else {
        let x = this.g.H.rnd(50, 250);
        for (let i = 1; i <= 4; i+= 1) {
          this.g.spawn('Donut', {p: this, x: x, y: i * -32});
        }
      }
    }

    this.g.ents.forEach((e) => {
      e.update(dt);
    })

    this.bgPos += this.bgSpeed;
    this.score += this.bgSpeed / 100;
    if (this.bgPos > this.g.h) {
      this.bgPos = 0;
    }

    if (this.p1.dead) {
      this.bgSpeed = 0;
    }

  }


  render() {

    const g = this.g;

    g.draw.clear(this.bgCol);
    g.draw.img(this.bg, 0, this.bgPos - this.g.h);
    g.draw.img(this.bg, 0, this.bgPos);
    g.draw.img(this.bg2, 0, this.bgPos - this.g.h);
    g.draw.img(this.bg2, 0, this.bgPos);

    g.ents.forEach((e) => {
      if (e.name !== 'gecko') {
        e.render();
      }
    });
    if (!this.gameOver) {
      this.p1.render();
    }

    let score = Math.round(this.score);
    g.draw.text(g.H.pad(score), this.scoreFont, false, 20);

    if (this.gameOver && !this.g.mobile) {
      this.g.draw.img(this.g.imgs['pointer'], this.g.input.mx, this.g.input.my);
    }

  }

  initGameOver() {

    if (this.gameOver) return;

    this.g.sfx('thunder');
    try {
      this.audio.stop();
    } catch (e) {
      console.log(e);
    }
    this.gameOver = true;
    this.g.addEvent({
      t: 100,
      cb: () => {
        this.spawnReplay();
      },
    });
  }

  spawnReplay() {
    this.g.spawn('Button', {
      y: this.g.h - 120,
      clickCol: 4,
      col: 11,
      text: 'REPLAY',
      cb: () => {
        this.g.changeScene('Play');
      }
    });
  }

}

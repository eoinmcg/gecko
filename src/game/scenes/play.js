export default class Play {

  constructor(g) {
    this.g = g;

    this.bg = g.imgs['bg'];
    this.bg2 = g.imgs['bg2'];
    this.bgPos = 0;
    this.bgSpeed = 1;
    this.bgColMaster = g.H.rndArray([12, 16, 17, 18, 19]);
    this.bgCol = this.bgColMaster;
    console.log(this.bgColMaster);
    for (let n = 0; n < 6; n += 1) {
      this.g.spawn('Obj', { p: this });
    }
    this.p1 = this.g.spawn('P1', {p: this});
    this.score = 0;
    this.dist = 0;

    this.offset = {
      x: 0, y: 0
    };

    this.scoreFont = g.H.mkFont(g, 4, 2);
    this.gameOver = false;

    g.audio = g.zzfxP(...g.tune);
    g.audio.loop = true;

    this.hole = this.g.spawn('Hole', {p: this, y: -g.h});

    this.allBaddies = ['Cactus', 'Bat', 'Spider', 'Worm'];
    this.baddies = [];
    this.startSpawn();

  }

  update(dt) {
    this.fader = Math.sin(new Date().getTime() * 0.003);

    this.g.ents.forEach((e) => {
      e.update(dt);
    })

    this.bgPos += this.bgSpeed;
    this.dist += this.bgSpeed;
    if (this.bgPos > this.g.h) {
      this.bgPos = 0;
    }

    if (this.p1.dead) {
      this.bgSpeed = 0;
    }

    if (this.dist % 1000 === 0) {
      this.addBaddie();
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
    } else if (this.gameOver && this.fader > 0) {
      this.g.draw.text('GAME', this.g.imgs['_titleFont'], false, 158);
      this.g.draw.text('GAME', this.g.imgs['titleFont'], false, 150);
      this.g.draw.text('OVER', this.g.imgs['_titleFont'], false, 218);
      this.g.draw.text('OVER', this.g.imgs['titleFont'], false, 210);
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
      this.g.audio.stop();
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


  startSpawn() {

    this.addBaddie();

    this.spawn();
  }

  addBaddie() {
    if (this.baddies.length !== this.allBaddies.length) {
      this.baddies.push(this.allBaddies[this.baddies.length]);
    } else if (this.bgSpeed < 3) {
      this.bgSpeed += 0.5;
    }
  }

  spawn() {
    if (this.gameOver) return;
    let level = ~~(this.dist / 500);
    level = (level > 20) ? 20 : level
    const nextSpawn = this.g.H.rnd(80,120) - level;
    this.g.addEvent({
      t: nextSpawn,
      cb:() => {
        let baddie = this.g.H.rndArray(this.baddies);
        if (Math.random() > 0.7) {
          this.g.spawn('Cactus', {p: this});
        }
        this.g.spawn(baddie, {p: this});
        if (Math.random() > 0.9) {
          let x = this.g.H.rnd(50, 250);
          for (let i = 1; i <= 4; i+= 1) {
            this.g.spawn('Donut', {p: this, x: x, y: i * -32});
          }
        }
        this.spawn(nextSpawn)
      }
    })
  }

}

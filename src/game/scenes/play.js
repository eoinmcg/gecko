export default class Play {

  constructor(g) {
    this.g = g;

    this.bg = g.imgs['bg'];
    this.bg2 = g.imgs['bg2'];
    this.bgPos = 0;
    this.bgSpeed = 1;
    this.bgColMaster = g.H.rndArray([12, 16, 17, 18, 19]);
    this.bgCol = this.bgColMaster;
    for (let n = 0; n < 6; n += 1) {
      this.g.spawn('Obj', { p: this });
    }
    this.p1 = this.g.spawn('P1', {p: this});
    this.newHiScore = false;
    this.score = 0;
    this.dist = 0;
    g.plays += 1;

    this.offset = {
      x: 0, y: 0
    };

    this.scoreFont = g.H.mkFont(g, 4, 2);
    this.gameOver = false;

    this.g.audio = this.g.track1.music(0);
    
    window.P = this;


    this.hole = this.g.spawn('Hole', {p: this, y: -g.h * 3});

    this.allBaddies = ['Cactus', 'Bat', 'Spider', 'Worm'];
    this.baddies = [];
    this.boss = false;
    this.startSpawn();

    // uncomment for boss testing
    // g.addEvent({
    //   t: 200,
    //   cb: () => {
    //     this.bossTime();
    //   }
    // });

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

    if (!this.newHiScore && this.score > this.g.hiScore) {
      this.newHiScore = true;
      this.g.addText('NEW HISCORE', 0, false, 200, 4, 5);
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
    g.draw.text(g.H.pad(score), this.scoreFont, 20, 20);

    for (let n = 0; n < this.p1.lives; n += 1) {
      this.g.draw.img(this.g.imgs['heart'], 200 + (n * 30), 20);
    }

    if (this.gameOver && !this.g.mobile) {
      this.g.draw.img(this.g.imgs['pointer'], this.g.input.mx, this.g.input.my);
    }

  }

  initGameOver() {

    if (this.gameOver) return;

    this.updateHiScore();

    this.g.sfx('thunder');
    this.stopMusic();
    this.gameOver = true;
    this.g.addEvent({
      t: 100,
      cb: () => {
        this.spawnReplay();
      },
    });
  }

  updateHiScore() {
    if (this.newHiScore) {
      this.g.hiScore = this.score;
      try {
        window.localStorage.setItem('GBhi', this.g.hiScore);
      } catch (e) {}
    }
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
    } else if (this.bgSpeed < 2) {
      this.bgSpeed += 0.5;
    } else if (this.bgSpeed >= 2) {
      this.bossTime();
    }
  }

  spawn() {
    if (this.gameOver || this.boss) return;
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

  bossTime() {
    this.stopMusic();
    this.g.addText('BOSS TIME', 0, false, 200, 3, 5);
    this.g.sfx('boss');
    this.g.addEvent({
      t: 50,
      cb: () => {
        this.sparkle();
      }
    })
    this.g.addEvent({
      t: 100,
      cb: () => {
        this.boss = true;
        this.bgSpeed = 0;
        this.g.spawn('Boss', {p: this });
      }
    })
  }

  sparkle() {
    let n = 20;
    let w = 20,
        x = this.g.w / 2,
        y = 50;
    while(n--) {
      this.g.addEvent({
        t: n * 3,
        cb: () => {
          let rnd = this.g.H.rnd(-w, w);
          this.g.sfx('speak');
          this.g.spawn("Boom", { x: x + rnd, y: y + rnd, key: "boom", type: 'spark', col: this.g.H.rnd(3,4) });
        }
      })
    }
  }

  stopMusic() {
    try {
      this.g.audio.stop();
    } catch (e) {
      console.log(e);
    }
  }

}

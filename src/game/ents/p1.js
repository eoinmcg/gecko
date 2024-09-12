import Sprite from "../../engine/sprite";

export default class P1 extends Sprite {
  constructor(g, o) {
    o.i = 'gecko';
    o.frames = 1;
    o.scale = 3.5;

    super(g, o);
    this.shadow = g.draw.color(g.imgs['circle'], 0);
    this.shadow = g.draw.resize(this.shadow, this.scale / 1.9, 0.1);
    this.group = 'player'
    this.collidesWith = ['baddies'];

    this.x = g.w / 2 - (this.w / 2);
    this.y = g.h - 80;
    this.offset = {x: 0, y: 0};

    this.currentFrame = 1;
    this.reduceHitBoxBy = 8;

    this.shotDelayTime = 50;
    this.shotDelay = 50;

    this.powerups = 0;

    this.minX = 0;
    this.maxX = this.g.w - this.w;
    this.minY = this.h * 2;
    this.maxY = this.g.h - this.h * 2;

    this.imgs = {
      s1: this.i,
      s2: this.flipX,
      l1: g.draw.rotate(this.i, 4.4),
      l2: g.draw.rotate(this.flipX, 4.5),
      r1: g.draw.rotate(this.i, 5.1),
      r2: g.draw.rotate(this.flipX, 5.1),
    }

    this.frame = 1;
    this.dir = 's';

    this.tailxOff = 0;
    this.tailxDir = 2;
    this.tail = [];
    let i = 5;
    while(i) {
      this.tail.push({x: this.x, y: this.y, s:  i})
      i--;
    }
  }

  update(dt) {
    super.update(dt);

    const I = this.g.input;

    if (I.firstTouch) {
      this.offset.x = I.mx - this.x;
      this.offset.y = I.my - this.y;
    }


    if (I.touching || !this.g.mobile) {
      this.x = (I.mx - this.offset.x);
      this.y = (I.my - this.offset.y);
    }

    this.bindToScreen();

    const t = this.tail;
    this.tailxDir = (t[t.length-1].x >
                      t[t.length-2].x)
      ? 2 : -2;
    const diff = Math.floor(t[0].x - t[1].x);
    
    if (diff > 0) {
      this.dir = 'r';
    } else if (diff < -1) {
      this.dir = 'l';
    } else {
      this.dir = 's'; }

    this.fader = Math.sin(new Date().getTime() * 0.03);
    this.frame = (this.fader > 0) ? 1 : 2;

    if (this.shotDelay < 0) {
      this.shoot();
    }

    this.shotDelay--;

  }

  render() {
    this.g.draw.img(this.shadow, this.x + 6, this.y + 12);
    this.g.draw.img(this.imgs[`${this.dir}${this.frame}`], this.x, this.y + 6);
    let last = { x: this.x, y: this.y }
    let r = 8;
    this.tailxOff = 0;
      this.tail.forEach((t, i) => {
        let col = i % 2 === 0 ? 4 : 3;
        if (r > 4) { r -= 1; }
        let xMove = (last.x - t.x) / 2;
        t.x += xMove
        t.y += (last.y + t.y) * 8;
        this.g.draw.rect(t.x + 9 + this.tailxOff, this.y + this.h + (r * i * 1.1), r, r, col);
        last = t;
        this.tailxOff += this.tailxDir;
      })
  }
 
  receiveDamage(o) {
    if (o.name === 'cactus') {
      this.kill();
    }
  }


  kill(booms = 3) {
    const x = this.x,
          y = this.y,
          w = this.w / 2;
    super.kill();
    this.p.initGameOver();
    this.g.sfx("land");

    this.p.bgCol = 3;
    this.g.shake();
    while(booms--) {
      this.g.addEvent({
        t: booms * 15,
        cb: () => {
          let rnd = this.g.H.rnd(-w, w);
          this.g.spawn("Boom", { x: x + rnd, y: y + rnd, key: "boom" });
        }
      })
    }
  }

  fall() {
    this.kill(0);
    this.g.sfx('fall');
    this.p.initGameOver();
  }

  shoot() {
      this.shotDelay = this.shotDelayTime;
      this.g.spawn('Bullet', {p: this.p, x: this.x + this.halfW, y: this.y});

      this.g.spawn("Circle", {
        x: this.x + this.halfW / 2.5,
        y: this.y - this.h / 2,
        i: "circle",
      });
      if (this.powerups > 0) {
        this.g.spawn('Bullet', {p: this.p, x: this.x - this.halfW / 2, y: this.y});
      }
      if (this.powerups > 1) {
        this.g.spawn('Bullet', {p: this.p, x: this.x + this.halfW, y: this.y, vy: -4, vx: -4});
      }
      if (this.powerups > 2) {
        this.g.spawn('Bullet', {p: this.p, x: this.x + this.halfW, y: this.y, vy: -4, vx: 4});
      }
      if (this.powerups > 3) {
      this.g.spawn('Bullet', {p: this.p, x: this.x + this.halfW / 2, y: this.y, vy: 6});
      }
  }

  addPowerup() {
    this.powerups += 1;
    if (this.powerups > 4) {
      this.p.score += 50;
    }
  }
}

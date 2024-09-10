export default class Sprite {
  constructor(g, o) {
    this.g = g;
    this.o = o;
    this.id = `id-${Math.random().toString(36).substr(2, 16)}`;
    this.dead = false;
    this.remove = false;
    this.offsetY = 0;
    this.name = o.i;

    for (let n in o) {
      this[n] = o[n];
    }

    this.lastPos = { x: this.x, y: this.y };
    this.flip = { x: 0, y: 0 };
    this.reduceHitBoxBy = 0;

    this.scale = o.scale || 1;
    this.frame = o.frame || 1;
    this.frames = o.frames || 1;
    this.frameRate = o.frameRate || 80;
    this.frameNext = o.frameNext || 0;


    if (o.i) {
      this.iKey = `${o.i}_${this.scale}`;
      this.mkImg(this.iKey);
    }
    this.hurt = false;
    this.hurtTime = 0;
    this.hurtTimeMaster = 25;

    this.anims = { idle: { frames: [1], rate: 80 } };
    this.changeAnim('idle');
  }

  update(dt) {
    if (this.collidesWith) {
      this.collidesWith.forEach((group) => {
        this.hitGroup(group);
      });
    }

    if (this.hurt) {
      this.hurtTime -= 1;
    }
    if (this.hurtTime < 0) {
      this.hurt = false;
      this.hurtTime = this.hurtTimeMaster;
    }

    this.updateAnim(dt);
    this.lastPos.x = this.x;
    this.lastPos.y = this.y;
  }

  render() {
    let g = this.g,
      i = (this.hurt) ? this.iHurt : this.i,
      frame = this.frame;

    if (i) {
      // if (this.flip.y) {
      //   i = g.draw.flip(i, 0, 1);
      // }
      if (this.flip.x) {
        i = this.flipX;
        frame = this.frames - this.frame + 1;
      }
      g.draw.ctx.drawImage(i,
        (frame * this.w) - this.w, 0,
        this.w, this.h,
        ~~this.x, ~~this.y + this.offsetY,
        this.w, this.h);
    } else {
      g.draw.rect(this.x, this.y, this.w, this.h, this.col);
    }
  }

  updateAnim(step) {
    if (this.frameNext < 0) {
      this.frameNext = this.anim.rate;
      this.anim.counter += 1;

      if (this.anim.counter >= this.anim.frames.length) {
        if (this.anim.next) {
          this.changeAnim(this.anim.next);
        } else {
          if (this.anim.cb) {
            this.anim.cb.call(this);
          }
          this.anim.counter = 0;
        }
      }

      this.frame = this.anim.frames[this.anim.counter];
    }
    this.frameNext -= step;
  }

  hitGroup(group) {
    this.g.ents.forEach((e) => {
      if (e && e.group === group && e.id !== this.id && this.hit(e)) {
        this.receiveDamage(e);
        e.doDamage(this);
      }
    });
  }

  hit(a) {
    const b = this;
    let reduce = this.reduceHitBoxBy
    let ay = (reduce) ? a.y + reduce : a.y,
        ax = (reduce) ? a.x + reduce : a.x,
        aw = (reduce) ? a.w - (reduce * 2) : a.w,
        ah = (reduce) ? a.h - (reduce * 2) : a.h;
        
    return !(
      ((ay + ah) < b.y) ||
        (ay > b.y + b.h) ||
        (ax + aw < b.x) ||
        (ax > b.x + b.w)
    );
  }

  receiveDamage(o) { }

  doDamage(o) { }

  isOffScreen() {
    let g = this.g;
    return this.x < -this.w || this.x > g.w + this.w
      || this.y < -this.h || this.y > g.h + this.h;
  }

  kill() {
    this.dead = this.remove = true;
  }

  getAngle(x, y) {
    let dx = x - this.x;
    let dy = y - this.y;
    return Math.atan2(dy, dx);
  }

  offScreen() {
    return (this.x < 0
        || this.x > W - this.w
        || this.y < 0
        || this.y > H - this.h);
  }

  mkImg(key) {
    let flipX = `${key}_flipx`;
    let flipY = `${key}_flipy`;
    let hurtKey = `${key}_hurt`;

    if (!this.g.imgs[key]) {
      this.i = this.g.draw.resize(this.g.imgs[this.name], this.scale);
      this.g.imgs[key] = this.i;
    } else {
      this.i = this.g.imgs[key];
    }

    if (!this.g.imgs[flipX]) {
      this.flipX = this.g.draw.flip(this.i, 1, 0);
      this.g.imgs[flipX] = this.flipX;
    } else {
      this.flipX = this.g.imgs[flipX];
    }

    if (!this.g.imgs[flipY]) {
      this.flipY = this.g.draw.flip(this.i, 0, 1);
      this.g.imgs[flipY] = this.flipY;
    } else {
      this.flipY = this.g.imgs[flipY];
    }

    if (!this.g.imgs[hurtKey]) {
      this.g.imgs[hurtKey] = this.g.draw.color(this.i, this.g.data.pal[2]);
      this.iHurt = this.g.imgs[hurtKey];
    } else {
      this.iHurt = this.g.imgs[hurtKey];
    }

    this.w = this.i.width / this.frames;
    this.h = this.i.height;
    this.halfW = this.w / 2;
    this.xLimit = this.g.w - this.w;
    this.yLimit = this.g.h - this.h;
  }

  changeAnim(name) {
    if (this.anim && this.anim.name && this.anim.name === name) {
      return;
    }
    this.anim = this.anims[name];
    this.anim.name = name;
    this.anim.counter = 0;
    this.frame = this.anim.frames[0];
    this.frameNext = this.anim.rate;
  }

  bindToScreen() {
    if (this.x < 0) this.x = 0;
    if (this.x > this.xLimit) this.x = this.xLimit;
    if (this.y < 0) this.y = 0;
    if (this.y > this.yLimit) this.y = this.yLimit;
  }
}


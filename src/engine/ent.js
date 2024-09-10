export default class Ent {

  constructor(g, o) {

    this.frames = o.frames || 1;
    this.key = o.key || this.constructor.name.toLowerCase();
    this.img = g.imgs[this.key];
    this.texture = g.textures[this.key];

    o.rotation = o.rotation || 1;
    o.scale = o.scale || 1;
    o.w = this.img.width / this.frames;
    o.w = this.img.width;
    o.h = this.img.height;
    let frameY = 0,
      frameW = o.w / this.frames,
      frameH = o.h;

    this.o = o;
    this.g = g;

    this.frame = 0;
    this.frameRate = o.frameRate || 8;
    this.frameNext = o.frameNext || 0;
    this.frameData = [...Array(this.frames).keys()]
    this.frameData.forEach((n) => {
      this.frameData[n] = [n/this.frameData.length,
        (n+1)/this.frameData.length];
    });

    this.anims = { idle: { frames: [0], rate: 0.5 } };
    this.changeAnim('idle');

    this.scale = o.scale || 1;
    this.x = o.x;
    this.y = o.y;
    this.w = o.w * o.scale / this.frames;
    this.h = o.h * o.scale;
    this.rotation = 0;
    this.u0 = this.frameData[this.frame][0];
    this.v0 = frameY / this.texture.height;
    this.u1 = this.frameData[this.frame][1];
    this.v1 = this.v0 + (frameH / this.texture.height);
    this.halfWidth = frameW / 2;

    this.id = `id-${Math.random().toString(36).substr(2, 16)}`;
    this.dead = false;
    this.remove = false;

    this.xLimit = g.data.w - this.w;
    this.yLimit = g.data.h - this.h;

    this.remove = false;

    this.vx = 0;
    this.vy = 0;

  }

  render() {
    this.g.canvas.c.img(
      this.texture,
      0, 0, // always 0 0?
      this.w, this.h,
      this.rotation,
      ~~this.x, ~~this.y,
      1, 1, // scale x & y
      // UV0
      this.u0, this.v0,
      // UV1
      this.u1, this.v1
    );
  }

  update(dt) {
    if (this.frames > 1) {
      this.updateAnim(dt);
    }
    if (this.collidesWith) {
      this.collidesWith.forEach((group) => {
        this.hitGroup(group);
      });
    }


  }

  isOffscreen() {
    return (this.x < 0
      || this.x > this.xLimit
      || this.y < 0
      || this.y > this.yLimit
    );
  }

  bindToScreen() {

    if (this.x < 0) this.x = 0;
    if (this.x > this.xLimit) this.x = this.xLimit;
    if (this.y < 0) this.y = 0;
    if (this.y > this.yLimit) this.y = this.yLimit;
  }


  hit(o) {
    return !((o.y + o.h < this.y) || (o.y > this.y + this.h)
      || (o.x + o.w < this.x) || (o.x > this.x + this.w));
  }

  hitGroup(group) {
    this.g.ents.forEach((e) => {
      if (e && e.group === group && e.id !== this.id && this.hit(e)) {
        this.receiveDamage(e);
        e.doDamage(this);
      }
    });
  }

  receiveDamage(o) { }

  doDamage(o) { }


  kill() {
    this.dead = this.remove = true;
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

    this.u0 = this.frameData[this.frame][0];
    this.u1 = this.frameData[this.frame][1];
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
}

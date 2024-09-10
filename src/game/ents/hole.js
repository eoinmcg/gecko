import Sprite from "../../engine/sprite";

export default class Hole extends Sprite {
  constructor(g, o) {
    o.x = g.H.rnd(50, 250);

    o.i = 'hole';
    o.scale = 2;

    super(g, o);
    this.group = 'baddies';
    this.collidesWith = ['player'];
    this.x = 0;

    this.reset();

  }

  reset() {
    this.y = -this.g.h;
    let scale = this.scale + 3;
    const key = `bridge_${this.scale}`;
    this.bridge = {
      x: this.g.H.rnd(30, this.g.w - 30),
      yOff: 10,
      key: `bridge_${scale}`,
      w: this.g.imgs[key].width  * scale,
      h: this.g.imgs[key].height  * scale,
    }
  }

  update(dt) {
    super.update(dt);

    if (!this.p.p1.dead) {
      this.y += this.p.bgSpeed;
    }

    if (this.y > this.g.h + this.h) {
      this.reset();
    }

  }

  render() {
    super.render();
    this.g.draw.img(this.g.imgs[this.bridge.key], this.bridge.x - this.bridge.yOff, this.y);
  }

  receiveDamage(o) {
    this.bridge.y = this.y - this.bridge.yOff;
    if (!o.hit(this.bridge)) {
      o.fall();
    }
    return;
  }
}

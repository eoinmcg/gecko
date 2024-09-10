import Sprite from "../../engine/sprite";

export default class Bullet extends Sprite {
  constructor(g, o) {
    o.scale = 3;
    o.i = 'bullet';
    super(g, o);

    this.vy = o.vy || -6;
    this.vx = o.vx || 0;

    this.group = "bullets";
    if (this.vy > 0) {
      this.i = g.imgs[`bullet_${this.scale}_flipy`];
    }
  }

  update(dt) {
    super.update(dt);
    this.y += this.vy;
    this.x += this.vx;
    if (this.isOffScreen()) {
      this.remove = true;
    }
  }
}

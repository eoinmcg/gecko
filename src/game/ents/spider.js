import Baddie from "./baddie";

export default class Spider extends Baddie {
  constructor(g, o) {
    o.x = g.H.rndArray([0, g.w]);
    o.i = 'spider';
    o.frames = 2;
    o.scale = 3;
    o.hits = 1;

    super(g, o);
    this.vy = -2;
    this.vx = 0.5;
    this.y = g.h + this.h;

    this.shadow = { x: this.halfW / 2, y: this.h / 2 };
    this.anims = { run: { frames: [1,2], rate: 0.2 } };
    this.changeAnim('run');
  }

  update(dt) {
    super.update(dt);

    this.y += this.vy;

    if (this.x > this.p1.x) {
      this.x -= this.vx;
      this.flip.x = false;
    } else if (this.x < this.p1.x) {
      this.x += this.vx;
      this.flip.x = true;
    }
    if (this.hit(this.p.hole)) {
      this.vy = this.p.bgSpeed;
    }

    if (this.y < -this.h) {
      this.remove = true;
    }
  }
}

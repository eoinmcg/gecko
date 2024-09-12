import Baddie from "./baddie";

export default class Bat extends Baddie {
  constructor(g, o) {
    o.x = o.x || g.H.rndArray([0, g.w]);
    o.i = o.i || 'bat';
    o.frames = o.frames || 2;
    o.scale = o.scale || 5;
    o.hits = 1;

    super(g, o);

    this.vy = 2;
    this.vx = 0.5;
    this.y = o.y || -this.h;

    if (o.frames == 2) {
      this.anims = { flap: { frames: [1,2], rate: 0.4 } };
      this.changeAnim('flap');
      this.shadow = {
        x: this.halfW, y: this.h
      };
    }
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

    if (this.y > this.g.h + this.h) {
      this.remove = true;
    }
  }
}


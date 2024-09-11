import Baddie from "./baddie";

export default class Cactus extends Baddie {
  constructor(g, o) {
    o.x = g.H.rnd(0, 15) * 16;
    o.i = 'cactus';
    o.frames = 2;
    o.scale = 5;
    o.hits = 2;
    o.shake = true;
    o.flash = true;

    super(g, o);
    this.y = -this.h;
    g.ents.forEach((e) => {
      if (e.name === 'hole' && this.hit(e)) {
        this.y = e.y - e.h;
      }
    })
  }

  update(dt) {
    super.update(dt);

    if (!this.p.gameOver) {
      this.y += this.p.bgSpeed;
    }

    if (this.y > this.g.h + this.h) {
      this.remove = true;
    }
  }

  receiveDamage(o) {
    super.receiveDamage(o);
    if (this.hits === -1 && Math.random() > 0.5) {
      this.g.spawn('Powerup', {p: this.p, x: this.x, y: this.y});
    }
  }
}

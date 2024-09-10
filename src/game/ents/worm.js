import Baddie from "./baddie";  

export default class Worm extends Baddie {
  constructor(g, o) {
    o.i = 'worm';
    o.scale = 4;
    o.frames = 2;
    o.hits = 3;
    o.active = false;
    o.shake = true;
    o.flash = true;
    o.shadow = false;
    super(g, o);

    if (Math.random() > .5) {
      this.x = -this.halfW;
      this.vx = 1;
    } else {
      this.x = g.w - this.halfW;
      this.flip.x = true;
      this.vx = -1;
    }
    this.y = -this.h;
    g.ents.forEach((e) => {
      if (e.name === 'hole' && this.hit(e)) {
        this.y = e.y - e.h;
      }
    })

    this.anims = {
      wait: { frames: [2], rate: 0.2 },
      bite: { frames: [1,2], rate: 0.2 },
    };
    this.changeAnim('wait');
  }

  render() {
    let x = this.x - this.halfW * (this.flip.x ? -1 : 1),
        i = this.g.imgs['circle_1_1'],
        i2 = this.g.imgs['circle_1_2'],
        w = i.width;
    x = (this.flip.x) ? x : x - this.w;
    for (let n = 1; n < 6; n += 1) {
      this.g.draw.img(n % 2 ? i : i2, (x + (w / 2) * n), this.y + this.h / 4);
    }
    super.render();
  }

  update(dt) {
    super.update(dt);

    if (!this.active && this.y > this.g.h / 3 && Math.random() > 0.9) {
      this.active = true;
      this.changeAnim('bite');
      this.vx = (this.flip.x) ? -1 : 1;
      this.vy = this.g.H.rndArray([0, -0.5, 0.5]);
    }
    if (this.active) {
      this.x += this.vx;
      this.y += this.vy;
    }

    if (!this.p.gameOver) {
      this.y += this.p.bgSpeed;
    }

    if (this.y > this.g.h + this.h) {
      this.remove = true;
    }

  }
}

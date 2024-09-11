import Baddie from "./baddie";  

export default class Worm extends Baddie {
  constructor(g, o) {
    o.i = 'worm';
    o.scale = 4;
    o.frames = 2;
    o.hits = 4;
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
    let x = (this.flip.x)
      ? this.x + this.halfW : this.x - this.w;
    let i = (this.fader > 0)
      ? 'wormtail' : 'wormtail_flipY';
    this.g.draw.img(this.g.imgs[i], x, this.y + this.halfW);
    super.render();
  }

  update(dt) {
    super.update(dt);
    this.fader = Math.sin(new Date().getTime() * 0.03);

    if (!this.active && this.y > this.g.h / 3 && Math.random() > 0.9) {
      this.active = true;
      this.changeAnim('bite');
      this.vx = (this.flip.x) ? -1 : 1;
      this.vy = this.g.H.rndArray([0, -0.5, 0.5]);
    }
    if (this.active) {
      this.x += this.vx;
      this.y += this.vy;
      if (this.hit(this.p.hole)) {
        this.vy *= -1;
      }
    }

    if (!this.p.gameOver) {
      this.y += this.p.bgSpeed;
    }

    if (this.y > this.g.h + this.h) {
      this.remove = true;
    }

  }
}

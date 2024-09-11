import Sprite from "../../engine/sprite";

export default class Donut extends Sprite {
  constructor(g, o) {
    o.x = o.x || g.H.rnd(50, 250);
    o.i = 'donut';
    o.frames = 1;
    o.scale = 3;

    super(g, o);
    this.shadow = true;
    this.group = 'bonus'
    this.collidesWith = ['player'];
    this.y = o.y || -this.h;
    this.collected = false;

    g.ents.forEach((e) => {
      if (e.group === 'baddies' && this.hit(e)) {
        this.remove = true;
      }
    });
  }

  update(dt) {
    super.update(dt);

    if (!this.p.gameOver) {
      this.y += this.p.bgSpeed;
    }

    if (this.y > this.g.h + this.h) {
      this.remove = true;
    }

    if (this.collected) {
      this.y += this.vy;
      this.vy += -0.2;
      if (this.x < this.g.w / 2) {
        this.x += 1;
      }
      if (this.x > this.g.w / 2) {
        this.x -= 1;
      }
      if (this.y < 0) {
        this.remove = true;
      }
    }
  }

  render() {
    this.g.draw.ctx.globalAlpha = 0.2;
    this.g.draw.img(this.g.imgs['circle_2_0'], this.x, this.y + 6);
    this.g.draw.ctx.globalAlpha = 1;
   super.render() ;
  }

  receiveDamage() {
    if (this.collected) return;

    this.collected = true;
    this.vy = -2 * this.p.bgSpeed;
    this.g.sfx('piano');
    this.g.spawn("Boom", { x: this.x + this.halfW, y: this.y + this.halfW, key: "boom", scale: 4, type: 'spark', col: 8});
    this.p.score += 20;
  }
}

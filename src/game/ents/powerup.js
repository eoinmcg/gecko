import Sprite from "../../engine/sprite";

export default class Powerup extends Sprite {
  constructor(g, o) {
    o.i = 'pup' ;
    o.frames = 2;
    o.scale = 3;

    super(g, o);
    this.vy = 1.5;
    this.vx = (o.x < g.w / 2) ? 0.5 : -0.5;
    this.group = 'bonus'
    this.collidesWith = ['player'];

    this.anims = { fly: { frames: [1,2], rate: 0.2 } };
    this.changeAnim('fly');
  }

  update(dt) {
    super.update(dt);

    this.y += this.vy;
    this.x += this.vx;

    if (this.y > this.g.h + this.h) {
      this.remove = true;
    }
  }

  render() {
    this.g.draw.ctx.globalAlpha = 0.1;
    this.g.draw.img(this.g.imgs['circle_2_0'], this.x + this.halfW, this.y + 6);
    this.g.draw.ctx.globalAlpha = 1;
   super.render() ;
  }

  receiveDamage(o) {
    this.g.sfx('powerup');
    this.g.spawn("Boom", { x: this.x + this.halfW, y: this.y + this.halfW, key: "boom", scale: 4, type: 'spark', col: 7});
    if (!this.remove) {
      o.addPowerup();
    }
    this.remove = true;
  }
}

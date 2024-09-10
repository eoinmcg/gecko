import Sprite from "../../engine/sprite";

export default class Baddie extends Sprite {
  constructor(g, o) {
    o.hits = o.hits || 0;
    o.scale = o.scale || 2;
    o.shake = o.shake || false;
    o.score = o.score || o.scale * 10;
    o.flash = o.flash || false;
    o.hurtTimeMaster = o.hurtTimeMaster || 200

    super(g, o);
    this.group = 'baddies';
    this.collidesWith = ['bullets', 'player'];
    this.shadow = { x: 0, y: this.halfW }
    this.p1 = this.p.p1;
  }

  update(dt) {
    super.update(dt);

    if (this.hurt) {
      this.hurtTime -= 1;
    }

    if (this.hurtTime < 0) {
      this.hurt = false;
      this.hurtTime = this.hurtTimeMaster;
    }
  }

  render() {
    if (this.shadow) {
      this.g.draw.ctx.globalAlpha = 0.2;
      this.g.draw.img(this.g.imgs['circle_2_0'], 
        this.x + this.shadow.x, this.y + this.shadow.y);
      this.g.draw.ctx.globalAlpha = 1;
    }
    super.render() ;
  }

  receiveDamage(o) {
    o.kill();
    this.g.sfx('land');

    this.frame = 2;
    this.hits -= 1;
    this.g.spawn('Boom', { x: this.x + this.halfW , y: this.y + this.halfW, key: 'boom', scale: 4, p: 3, col: 2,
      type: this.hits < 0 ? 'circle' : 'spark' });
    if (this.hits === -1) {
      if (this.shake) {
        this.g.shake('shake-fast');
      }
      if (this.flash) {
        this.p.bgCol = 2;
        this.g.addEvent({
          t: 2,
          cb: () => { this.p.bgCol = 12; }
        });
      }
      this.kill();
    } else {
      this.vy / 2;
      this.hurt = true;
      this.hurtTime = this.hurtTimeMaster;
    }
  }
}

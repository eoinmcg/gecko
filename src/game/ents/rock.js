import Sprite from "../../engine/sprite";

export default class Rock extends Sprite {
  constructor(g, o) {
    o.x = g.H.rnd(50, 250);

    o.col = 1;
    o.w = 20;
    o.h = 14;

    super(g, o);
    this.shadow = true;
    this.group = 'baddies';
    this.collidesWith = ['bullets', 'player'];
    this.vy = this.p.bgSpeed;
    this.y = -this.h;
    this.x = g.H.rnd(20, g.w - 20);


  }

  update(dt) {
    super.update(dt);

    this.y += this.vy;

    if (this.y > this.g.h + this.h) {
      this.remove = true;
    }

    if (this.hurt) {
      this.hurtTime--;
    }
    if (this.hurtTime < 0) {
      this.hurt = false;
      this.hurtTime = this.hurtTimeMaster;

    }
  }

  receiveDamage(o) {
    // this.g.canvas.c.bkg(1, 1, 1);
    o.kill();
    this.g.sfx("land");
    this.g.spawn("Boom", { x: this.x, y: this.y, key: "boom", scale: 4, p: 4 });

    console.log('hit');
    this.hits--;
    if (this.hits < 0) {
      console.log(this.hits);
      this.kill();
    } else {
      this.vy / 2;
      this.hurt = true;
    }
    // this.g.score += 10;
  }


  render() {

    console.log(this.y);

    this.g.draw.rect(this.x, this.y - 10, this.w, this.h, 2);
    this.g.draw.rect(this.x, this.y + 10, this.w, this.h, 14);
    this.g.draw.rect(this.x, this.y, this.w, this.h, this.col);
  }


}

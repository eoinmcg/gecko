import Baddie from "./baddie";

export default class Boss extends Baddie {
  constructor(g, o) {
    o.i = 'boss';
    o.frames = 2;
    o.scale = 5;
    o.hits = 20;
    o.shake = true;
    o.flash = true;

    o.x = g.w / 2;
    o.y = 50;
    o.vx = 1;
    o.vy = 5;

    o.attack = false;

    super(g, o);

    this.shadow = { x: this.halfW / 2, y: this.h / 2 };
    this.anims = { run: { frames: [1,2], rate: 0.2 } };
    this.changeAnim('run');
  }

  update(dt) {
    super.update(dt);

    if (Math.random() > 0.995) {
      this.attack = true;
    }

    if (this.attack) {
      this.y += this.vy;
      if (this.y > this.g.h - this.h) {
        this.vy *= -1;
      }
      if (this.y < 50) {
        this.y = 50;
        this.vy *= -1;
        this.attack = false;
      }
    }
    else {
      this.x += this.vx;
      if (this.x < 0 || this.x > this.g.w - this.w) {
        this.vx *= -1;
      }
    }
  }

  render() {
    super.render();
    this.g.draw.img(this.g.imgs['13'], this.x + 13, this.y + 35 + (this.frame * 2));
  }

  receiveDamage(o) {
    super.receiveDamage(o);
    if (this.hits === -1) {
      this.die();
    } else {
      this.g.spawn('Bat', {p: this.p, x: this.x, y: this.y, scale: 4, });
    }
  }

  die() {
      this.g.ents.forEach((e) => {
        if (e.group === 'baddies') {
          this.kill();
        }
      })
    let booms = 10;
    let w = this.w / 2,
        x = this.x,
        y = this.y;
    while(booms--) {
      this.g.addEvent({
        t: booms * 10,
        cb: () => {
          let rnd = this.g.H.rnd(-w, w);
          this.g.shake();
          this.g.sfx("land");
          this.g.spawn("Boom", { x: x + rnd, y: y + rnd, key: "boom" });
        }
      })
    }
    this.g.addEvent({
      t: 250,
      cb: () => {
        this.g.changeScene('Win');
      }
    })
  }

}

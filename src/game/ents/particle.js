export default class Particle {
  constructor(g, o) {
    this.g = g;
    this.x = o.x;
    this.y = o.y;
    this.w = o.w || 8;
    this.h = this.w;

    this.vx = g.H.rnd(2, 5) * g.H.rndArray([1, -1]);
    this.vy = g.H.rnd(2, 5) * g.H.rndArray([1, -1]);

    this.col = o.col || 2;
    this.i = g.imgs[`dot_${this.w}_${this.col}`];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y > this.g.h || this.y < 0 || this.x < 0 || this.x > this.g.w) {
      this.remove = true;
    }
  }

  render() {
    this.g.draw.ctx.drawImage(this.i, this.x, this.y);
  }
}


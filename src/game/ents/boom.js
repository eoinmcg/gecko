export default class Boom {
  constructor(g, o) {
    this.g = g;
    this.type = o.type || 'circle';
    this.col = o.col || 2;
    this.startX = o.x;
    this.startY = o.y;
    this.magnitude = o.m || 4;
    this.scale = 1;
    this.factor = o.factor || 0.5;

    if (o.p) {
      while(o.p--) {
        this.g.spawn('Particle', {x: o.x, y: o.y, col: o.col} )
      }
    }
  }

  update() {
    this.scale += this.factor;
    if (this.scale > this.magnitude && this.factor > 0) {
      this.factor *= -1;
    }
    if (this.scale <= 1) {
      this.remove = true;
    }
    this.iKey = `${this.type}_${Math.ceil(this.scale)}_${this.col}`;
    this.i = this.g.imgs[this.iKey];
  }

  render() {
    if (!this.i) return;
    let s = this.i.width / 2,
      x = this.startX - s,
      y = this.startY - s,
      g = this.g;

    g.draw.img(this.i, x, y);
  }
}

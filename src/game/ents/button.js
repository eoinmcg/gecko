import Sprite from "../../engine/sprite";

export default class Control extends Sprite {
  constructor(g, o) {
    if (!('col' in o)) o.col = 7;
    if (!('clickCol' in o)) o.clickCol = 3;
    o.x = o.x || false;
    o.w = o.w || 140;
    o.h = o.h || 40;
    o.textCol = o.textCol || 2;
    o.hoverCol = o.hoverCol || 2;
    o.center = o.x === false;
    o.size = o.size || 4;

    if (!g.imgs[`font_${o.textCol}`]) {
      g.imgs[`font_${o.textCol}`] = g.H.mkFont(g, o.size, o.textCol);
    }
    if (!g.imgs[`font_${o.hoverCol}`]) {
      g.imgs[`font_${o.hoverCol}`] = g.H.mkFont(g, o.size, o.hoverCol);
    }

    super(g, o);
    this.g = g;
    this.x = o.x || g.w / 2 - (o.w / 2);
    this.p = g.imgs[`font_${o.textCol}`];
    this.pHover = g.imgs[`font_${o.hoverCol}`];
    this.clicked = false;
    this.clickCol = o.clickCol;
    this.currentCol = o.col;
    this.clicked = false;
    this.textW = g.draw.textWidth(this.text, this.p) / 2;
    this.tX = o.x ? o.x + 20 : g.w / 2 - (this.textW);
    this.origX = this.x;
    this.origY = o.y;
    if (!this.center) {
      this.tX = this.x + 4;
    }

    this.y = this.g.h + this.h * 2;
  }

  update() {
    this.hover = this.intersects(this.g.input.mx, this.g.input.my);
    if (this.y > this.origY) {
      this.y -= 2;
    }
    let hit = (this.hover && this.g.input.touching);
    this.currentCol = (this.hover)
      ? this.clickCol : this.col;
    if (hit && this.cb && !this.clicked) {
      this.clicked = true;
      this.cb.call(this);
    }
  }

  render() {
      let font = (this.hover)
        ? this.pHover : this.p;

    if (this.col) {
      this.g.draw.ctx.globalAlpha = 0.3;
      this.g.draw.rect(this.x, this.y + 10, this.w, this.h,
        0);
      this.g.draw.ctx.globalAlpha = 1;
      this.g.draw.rect(this.x, this.y, this.w, this.h,
        this.currentCol);
    }

      this.g.draw.text(this.text, font, this.tX, this.y + 10);
  }

  intersects(mx, my) {
    return (mx > this.x && mx < this.x + this.w
      && my > this.y && my < this.y + this.h);
  }

}

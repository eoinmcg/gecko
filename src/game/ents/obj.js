import Sprite from "../../engine/sprite";

export default class Obj extends Sprite {

  constructor(g, o) {
    super(g, o);
    this.reset(g.H.rnd(0, g.h));
  }

  update() {

    this.y += this.p.bgSpeed;

    if (this.y > this.g.h + 20) {
      this.reset();
    }
  }

  render() {
    this.g.draw.img(this.i, this.x, this.y);
  }

  reset(y = false) {
    this.x = this.g.H.rnd(30, this.g.w - 30);
    this.y = y || this.g.H.rnd(20, 60) * -1;
    this.i = this.g.imgs[
      this.g.H.rndArray(['bg_skull', 'bg_skull_flip',
        'bg_bone', 'bg_bone_flip', 'bg_grass', 'bg_grass', 'bg_grass'])
    ];
  }

}

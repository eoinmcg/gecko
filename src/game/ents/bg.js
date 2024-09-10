import Ent from '../../engine/ent';

export default class Bg extends Ent {
    constructor(g, o) {
        super(g, o);
        this.vy = 4.5;
        this.vx = 0;
    }

    update(dt) {
        super.update(dt);
        this.updateAnim(dt);
        this.y += this.vy;
        this.x += this.vx;
        if (this.y < 0 - this.h) {
            this.remove = true;
        }

        if (this.y > this.g.data.h) {
            this.y = -this.h;
        }

    }
}

import Sprite from '../../engine/sprite';

export default class Circle extends Sprite {
    constructor(g, o) {
        o.scale = 1;
        super(g, o);
        this.ttl = 0.02;
    }

    update(dt) {
        this.ttl -= dt;
        if (this.ttl < 0) this.kill();
        super.update(dt);
    }
}

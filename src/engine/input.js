export default class Input {
constructor(c, g) {
    const s = this,
    l = window.addEventListener;

    this.g = g;
    this.c = c;

    this.keys = [];
    this.freshKeys = [];
    this.mx = 0;
    this.my = 0;
    this.firstTouch = false;
    this.touching = false;
    this.fire = false;


    l('keydown', (e) => {
      this.keys[e.code] = (this.keys[e.code])
        ? this.keys[e.code] += 1 : 1;
    });

    l('keyup', (e) => {
      this.keys[e.code] = 0;
      this.freshKeys[e.code] = 1;
    });

    l('touchstart', function(e) {
      e.preventDefault();
      s.firstTouch = true;
      s.touching = true;
      s.fire = true;
      s.trackMove(e.touches[0]);
    }, {passive: false});

    l('touchmove', function(e) {
      e.preventDefault();
      s.firstTouch = false;
      s.trackMove(e.touches[0]);
    }, {passive: false});

    l('touchend', function() {
      s.fire = false;
      s.touching = false;
    });

    l('mousemove', function(e) {
      s.firstTouch = false;
      s.trackMove(e);
    });

    l('mousedown', function() {
      s.firstTouch = true;
      s.touching = true;
      s.fire = 1;

    }, false);

    l('mouseup', function() {
      s.fire = 0;
      s.touching = false;
    }, false);



  };

  trackMove(e) {

    const coords = this.getCords(e);

    this.mx = coords[0];
    this.my = coords[1];

  };

  getCords(e) {
    var g = this.g,
    offsetY = this.c.offsetTop,
    offsetX = this.c.offsetLeft,
    scale = parseInt(g.c.style.width, 10) / g.c.width,
    x = ~~((e.pageX - offsetX) / scale),
    y = ~~((e.pageY - offsetY) / scale);

    return [x, y];

  }

};

export default class Input {
  constructor(canvas, g) {
    let l = window.addEventListener;
    let s = this;

    this.c = canvas;
    this.g = g;
    this.keys = [];

    this.m = {
      x: g.w / 2, y: g.h / 2, click: 0,
      start: {x: 0, y: 0, id: -1 },
      touches: [],
      w: 1, h: 1
    };

    l('keydown', (e) => {
      this.keys[e.code] = true;
    });

    l('keyup', (e) => {
      this.keys[e.code] = false;
    });

    l('mousemove', (e) => {
      this.trackMove(e);
    });

    l('mousedown', () => {
      this.m.click = 1;
    });

    l('mouseup', () => {
      this.m.click = 0;
    });

		l('touchstart', function(e) {
      s.touching = 1;
      s.m.click = 1;
      s.touchStart(e.touches);
		});

		l('touchmove', function(e) {
      // e.preventDefault();
      s.trackTouch(e.touches);
		});

		l('touchend', function(e) {
      e.preventDefault();
      s.touchEnd(e);
      s.touching = 0;
      s.m.click = 0;
		});
  }

  resetKeys() {
    // this.keys = [];
  }

  touchStart(t) {
    if (t.length === 1) {
      let start = this.translate(t[0]);
      start.id = t[0].identifier;
      this.m.start = start;
    }
  }

  touchEnd(e) {
    if (e.touches.length === 0) {
      this.m.start = { x: 0, y: 0, id: -1 };
    }
    // console.log(e, 'end');
    // this.m.start.id = -1;
    this.m.touches = [];
  }

  trackMove(e) {
    let g = this.g,
      c = this.c,
      offsetY = c.offsetTop,
      offsetX = c.offsetLeft,
      scale = parseInt(c.style.width, 10) / c.width,
      x = ~~((e.pageX - offsetX) / scale),
      y = ~~((e.pageY - offsetY) / scale);

    x = x > g.w ? g.w : x;
    x = x < 0 ? 0 : x;

    y = y > g.h ? g.h : y;
    y = y < 0 ? 0 : y;

    this.m.x = ~~x;
    this.m.y = ~~y;
  }

  translate(t) {
    let  c = this.c,
      offsetY = c.offsetTop,
      offsetX = c.offsetLeft,
      scale = parseInt(c.style.width, 10) / c.width;

    return {
      x:  ~~((t.pageX - offsetX) / scale),
      y: ~~((t.pageY - offsetY) / scale)
    }
  }

  trackTouch(touches) {
    this.m.touches = [];

    for (let i = 0; i < touches.length; i += 1) {
      if (i > 2) { break; }
      let {x, y} = this.translate(touches[i]);

      this.m.touches.push(
        {x:x, y:y, w:1, h:1, id: touches[i].identifier });
    }
  }
}


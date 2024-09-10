export default {
  timeStamp: function () {
    return window.performance && window.performance.now
      ? window.performance.now()
      : new Date().getTime();
  },

  pad(nr, n=5){
    return Array(n-String(nr).length+1).join('0')+nr;
  },

  rnd: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  rndArray: function (a) {
    return a[~~(Math.random() * a.length)];
  },

  mkCanvas: function (w, h) {
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    c.width = w;
    c.height = h;

    ctx.imageSmoothingEnabled = false;

    return c;
  },

  mkFont: function(g, size, col) {
    let font = g.draw.color(g.imgs['font'], g.data.pal[col]);
    font = g.draw.resize(font, size);
    font.scale = size;
    return font;
  },

  toHex(cols) {
    let hex = '#';
    cols.forEach((col) => {
      hex += col.toString(16);
    });
    return hex;

  },

  toggleFullScreen(el) {
  if (document.fullscreenElement) {
      document.exitFullscreen();
  } else {
      el.requestFullscreen();
    }

  },

  getDist: function(v1, v2) {
    var dx = v1.x - v2.x,
        dy = v1.y - v2.y;

    return Math.sqrt((dx * dx) + (dy * dy));
  },

  getAngle: function(v1, v2) {
    var dx = v1.x - v2.x,
        dy = v1.y - v2.y;

    return (Math.atan2(dy, dx));
  },

  /* http://jsfiddle.net/jessefreeman/FJzcc/1/
  T: current Time
  B: start Value
  C: change in value
  D: duration
  */
  tween: function (t, b, c, d) {
    return (c * t) / d + b;
  },
};

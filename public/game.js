(() => {
  // src/game/data/images.js
  var images_default = { "13": "R0lGODlhBQAFAIABAAAAAPfiayH5BAEKAAEALAAAAAAFAAUAAAIIRIAWZ6nMQAEAOw==", "bat": "R0lGODlhEAAGAMIFAAAAAL8uNOuIMeuJMf7+/v///////////yH5BAEKAAcALAAAAAAQAAYAAAMdeEdM+vAAEEidqjkFNHgDIWxZ9z1ahD0msUbcGScAOw==", "bg": "R0lGODlhIgAiAIABAAAAAP///yH5BAEKAAEALAAAAAAiACIAAAJOhIOpy20PmpwKHoqZzXzBDgZfmG0kZp6TFanr6Dpw7M10Yt9IrvN3qtv5YkPiI1i7IEVFFWvJbJKeSyBSesJOj9BoC6oFUa/WXpgzDj4KADs=", "bg2": "R0lGODlhIgAiAIABABMbJP///yH5BAEKAAEALAAAAAAiACIAAAJ8jG8AyKjbYoLyvBoVtno7unXeJFbleIXgGJxZyrrNs2K0Tddzbl7wnrtxhLJW8Hgcfogd5AsSVJJ+DGdVp+LtWMPihEvyeIEo7LNs3oqpOHT6iu4lszUku8u0a5dRo36Ppyc3dwUIZFg45ndHpgJmVPao+AU2KRTzthhRAAA7", "bone": "R0lGODlhDwAHAIAAAP///////yH5BAEKAAEALAAAAAAPAAcAAAITDBCpena40pu0Ilsd3lE+1zFIAQA7", "boss": "R0lGODlhEAAQAMIEAL4mMzGi8rLc7/////fia/fia/fia/fiayH5BAEKAAQALAAAAAAQABAAAANDSEKs/Q0AISRbDdONJbWKNEwXp43AoIlkSWWo6gRU8NCCXQc8v/c0BlCxGDaMwt5NeWS6MM+HRnqhOjJVyDWr5W4ZCQA7", "bridge": "R0lGODlhCgAYAMIFAEk8K6NkIqRkIuqJMeuJMf///////////yH5BAEKAAcALAAAAAAKABgAAAMtKLo7AkwBEtkAOOdQ26uA0wlid2kaNzpQFI4kfKKYasqfW1Z7NNM2Xo7xWskSADs=", "bullet": "R0lGODlhBAAIAMIDAL4mM+uJMffia////////////////////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAQALAAAAAAEAAgAAAMNSAA6siKwIEm1jOjNEgA7", "cactus": "R0lGODlhDAAIAMIEAESJGqPOJ/7+/v7//v///////////////yH5BAEKAAQALAAAAAAMAAgAAAMcSBraTiGAFicbQTgGoZyeFUkUuXwnIJojGJZTAgA7", "circle": "R0lGODlhEAAQAIABAP///+BviyH5BAEKAAEALAAAAAAQABAAAAIdjA2px6G/GJzgUIoudLr7D4aix32ZeWpN11gbUwAAOw==", "donut": "R0lGODlhCAAIAMIEAEk8K05CNOByjeuJMf///////////////yH5BAEKAAQALAAAAAAIAAgAAAMXSAEsQI7JOcZkhIB4meVAZVXhQIgjkQAAOw==", "dot": "R0lGODlhAQABAIABAP///zGi8iH5BAEKAAEALAAAAAABAAEAAAICRAEAOw==", "font": "R0lGODlhmwAFAIABAAAAAEk8KyH5BAEKAAEALAAAAACbAAUAAAJ4hGOAd6sZFpowPhrxhZz5x2ji5pRTyVEfulaWRV6vfNayksV5O/b53NMBcbjX0JY50pYwkFHDAxGTTlsUpZIadRViYzo1tVazcfHHRSOVWx9UyKK2wym6+nRei47PtkTbAbgTc1X3VvOXtfXFhkfmpVUWqZiSZFkAADs=", "gecko": "R0lGODlhCAAIAMIFAAAAAL0oM+Bvi99wivfia////////////yH5BAEKAAcALAAAAAAIAAgAAAMXeDqjNwSQSNQUYjqMXxNBIGxcRy5O6CQAOw==", "grass": "R0lGODlhCAAHAIABAAAAAP///yH5BAEKAAEALAAAAAAIAAcAAAIOjA2neeyRQIRwVsmQPAUAOw==", "heart": "R0lGODlhBQAFAIABAL4mMzGi8iH5BAEKAAEALAAAAAAFAAUAAAIIDGygu3mBQgEAOw==", "hole": "R0lGODlhRAAcAKEDAAAAAJycnJ2dnf///yH5BAEKAAMALAAAAABEABwAAAJznC0pd+rPxpvURVYT2HX7D2TgSIaZUHpHym5rC7sva8TlbNN1O+R37+MBacHRsHiLHZFLJKhJgvqkTgC1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6PfcAObAB1Oi05wE4OPG3J1FxcTGh2OjYwIhRAAA7", "loader": "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", "pointer": "R0lGODlhBAAFAKECAAAAAP////fia/fiayH5BAEKAAIALAAAAAAEAAUAAAIIjGWAEKIsIigAOw==", "pup": "R0lGODlhDgAEAKEDAOqKMfbia////v///yH5BAEKAAMALAAAAAAOAAQAAAIS1H6GKAIQWnvRPBiGo/HQ9Q0FADs=", "skull": "R0lGODlhBAAEAIAAAP///////yH5BAEKAAEALAAAAAAEAAQAAAIFhB2Ql1kAOw==", "spark": "R0lGODlhDgAOAIAAAP///////yH5BAEKAAEALAAAAAAOAA4AAAIdjA9wy8md4jNRwloXxnT7v3WfBj7hdE6BoyIKUwAAOw==", "spider": "R0lGODlhEAAIAMIEAL4mM70qOTGi8v7+/////////////////yH5BAEKAAcALAAAAAAQAAgAAAMpeBAiASfKudqL1cHYmsxXNIhTJ0gCEREneYzHqR7qma72xMlr3JYxYAIAOw==", "title": "R0lGODlhNgAWAMIEAL4mM+uJMaPOJ/fia////////////////yH5BAEKAAQALAAAAAA2ABYAAAPFSLrc/jDKqYYlNuM8tucdJW4dSF5oyY3TtbhVGH8qKwkCgev4vi89YO5ne/iGPSQjqDgWIU4ib6l0Ph1JZDA7PTKv1G2SJ+6Owei0es1uiwLwuALuiMsJdjo+P+fv8356DIB9doV3hH+BAX11jHuND4KQDXqGlJORlo+Og5wLmwCiAAyiDqOjCqimC6yqq6+rqa2kDbKxs6+lsASyrL+1u7q2wb3FrrTAw8jLxcPPxqezt8aozbjI2bzA1N213LnRydPfAAkAOw==", "worm": "R0lGODlhEAAIAMIFAL4mM78uNL8wOp2dnZ6env///////////yH5BAEKAAcALAAAAAAQAAgAAAMneEc8+lCRQmmEs4igg2SEUgVAEXhZdVRskW2duq4jd9JRK7OiNRcJADs=" };

  // src/game/data/sfx.js
  var sfx_default = {
    hit: [, , 537, 0.02, 0.02, 0.22, 1, 1.59, -6.98, 4.97],
    piano: [0.9, 0.8, 270, , 0.1, , 1, 1.5, , , , , , , , 0.1, 0.01],
    // jump: [.1,,921,.04,.03,.52,,2.44,,.5,,,.05,1.4,57,.9,,.33,.18,.47],
    land: [, , 129, 0.01, , 0.15, , , , , , , , 5],
    thunder: [1, , 979, 0.01, 0.02, 0.52, 1, 2.52, 0.5, 0.7, , , 0.02, 1.2, 7, 0.2, 0.13, 0.48, 0.01, 0.44],
    fall: [0.5, , 925, 0.04, 0.3, 0.6, 1, 0.3, , 6.27, -184, 0.09, 0.17],
    speak: [, , 1236, 0.01, 0.01, 0.02, 1, 0.13, , -6.5, , , , 0.2, , , , 0.14, 0.02, 0.25],
    // win: [1.06,,299,,.3,.23,,.04,-2.6,4.3,,,.19,,,,,.74,.17,.4],
    // tap: [1,, 0.1953,, 0.1186, 0.2659,,,,,,,,,,,,, 1,,, 0.1,, 0.5],
    powerup: [1.1, , 698, 0.07, 0.23, 0.25, , 1.5, , , 103, 0.07, 0.09, , , 0.1, , 0.5, 0.22, 0.39],
    hurt: [, , 448, 0.01, 0.1, 0.3, 3, 0.39, -0.5, , , , , , 0.2, 0.1, 0.08],
    boss: [1.04, , 612, 0.01, 0.17, 0.41, , 0.3, , , , , 0.17, , , 0.2, , 0.62, 0.25, 0.27]
  };

  // src/game/data/base.js
  var base_default = {
    title: "Gecko Blaster",
    start: "Loader",
    w: 270,
    h: 480,
    pal: [
      // AndroidArts16 - https://androidarts.com/palette/16pal.htm
      [0, 0, 0],
      // 0 void
      [157, 157, 157],
      // 1 ash
      [255, 255, 255],
      // 2 white
      [190, 38, 51],
      // 3 bloodred
      [224, 111, 139],
      // 4 pigmeat
      [73, 60, 43],
      // 5 oldpoop
      [164, 100, 34],
      // 6 newpoop
      [235, 137, 49],
      // 7 orange
      [247, 226, 107],
      // 8 yellow
      [42, 72, 78],
      // 9 darkgreen
      [68, 137, 26],
      // 10 green
      [163, 206, 39],
      // 11 slimegreen
      [27, 38, 50],
      // 12 nightblue
      [0, 87, 132],
      // 13 seablue
      [49, 162, 242],
      // 14 skyblue
      [178, 220, 239],
      // 15 cloudblue
      [40, 30, 40],
      // 16 plum
      [30, 40, 30],
      // 17 dgreen
      [44, 34, 28],
      // 18 charcoal PICO8
      [44, 44, 44]
      // 19 dark
    ],
    i: images_default,
    sfx: sfx_default
  };

  // src/engine/loader.js
  var Loader = class {
    constructor(images) {
      this.images = images;
      this.loaded = [];
      this.loadedImgs = 0;
      this.totalImgs = Object.keys(images).length;
    }
    start() {
      const loader = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
        this.loadImages(this.images);
      });
      return loader;
    }
    loadImages(i) {
      const append = "data:image/gif;base64,";
      for (let n in i) {
        if (i.hasOwnProperty(n)) {
          this.loaded[n] = new Image();
          this.loaded[n].onload = this.checkLoaded();
          this.loaded[n].src = append + i[n];
        }
      }
    }
    checkLoaded() {
      this.loadedImgs += 1;
      if (this.loadedImgs === this.totalImgs) {
        setTimeout(() => this.resolve(this.loaded), 250);
      }
    }
  };

  // src/engine/resize.js
  var resize = (w, h) => {
    const c2 = document.querySelector("#c");
    c2.width = w;
    c2.height = h;
    const widthToHeight = w / h;
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;
    const newWidthToHeight = newWidth / newHeight;
    if (newWidthToHeight > widthToHeight) {
      newWidth = newHeight * widthToHeight;
    } else {
      newHeight = newWidth / widthToHeight;
    }
    c2.width = w;
    c2.height = h;
    c2.style.width = newWidth + "px";
    c2.style.height = newHeight + "px";
    c2.style.marginTop = -newHeight / 2 + "px";
    c2.style.marginLeft = -newWidth / 2 + "px";
  };
  window.addEventListener("resize", () => {
    resize(base_default.w, base_default.h);
  }, false);
  window.setTimeout(() => {
    resize(base_default.w, base_default.h);
  }, 50);

  // src/engine/input.js
  var Input = class {
    constructor(c2, g) {
      const s = this, l = window.addEventListener;
      this.g = g;
      this.c = c2;
      this.keys = [];
      this.freshKeys = [];
      this.mx = 0;
      this.my = 0;
      this.firstTouch = false;
      this.touching = false;
      this.fire = false;
      l("keydown", (e) => {
        this.keys[e.code] = this.keys[e.code] ? this.keys[e.code] += 1 : 1;
      });
      l("keyup", (e) => {
        this.keys[e.code] = 0;
        this.freshKeys[e.code] = 1;
      });
      l("touchstart", function(e) {
        e.preventDefault();
        s.firstTouch = true;
        s.touching = true;
        s.fire = true;
        s.trackMove(e.touches[0]);
      }, { passive: false });
      l("touchmove", function(e) {
        e.preventDefault();
        s.firstTouch = false;
        s.trackMove(e.touches[0]);
      }, { passive: false });
      l("touchend", function() {
        s.fire = false;
        s.touching = false;
      });
      l("mousemove", function(e) {
        s.firstTouch = false;
        s.trackMove(e);
      });
      l("mousedown", function() {
        s.firstTouch = true;
        s.touching = true;
        s.fire = 1;
      }, false);
      l("mouseup", function() {
        s.fire = 0;
        s.touching = false;
      }, false);
    }
    trackMove(e) {
      const coords = this.getCords(e);
      this.mx = coords[0];
      this.my = coords[1];
    }
    getCords(e) {
      var g = this.g, offsetY = this.c.offsetTop, offsetX = this.c.offsetLeft, scale = parseInt(g.c.style.width, 10) / g.c.width, x = ~~((e.pageX - offsetX) / scale), y = ~~((e.pageY - offsetY) / scale);
      return [x, y];
    }
  };

  // src/engine/draw.js
  var Draw = class {
    constructor(w, h, pal) {
      this.w = w;
      this.h = h;
      this.c = document.querySelector("canvas#c");
      this.ctx = this.c.getContext("2d");
      this.pal = pal;
    }
    clear(colorKey) {
      let raw = this.pal[colorKey];
      this.ctx.fillStyle = `rgb(${raw[0]},${raw[1]},${raw[2]})`;
      this.ctx.fillRect(0, 0, this.c.width, this.c.height);
    }
    rect(x, y, w, h, colorKey) {
      let raw = this.pal[colorKey];
      this.ctx.fillStyle = `rgb(${raw[0]},${raw[1]},${raw[2]})`;
      this.ctx.fillRect(~~x, ~~y, w, h);
    }
    img(i, x, y, scale = false, o = false) {
      if (o) {
        this.ctx.globalAlpha = o;
      }
      this.ctx.drawImage(i, ~~x, ~~y);
      if (o) {
        this.ctx.globalAlpha = 1;
      }
    }
    rotate(i, a) {
      let c2 = document.createElement("canvas"), ctx2 = c2.getContext("2d"), size = Math.max(i.width, i.height);
      c2.width = size;
      c2.height = size;
      ctx2.translate(size / 2, size / 2);
      ctx2.rotate(a + Math.PI / 2);
      ctx2.drawImage(i, -(i.width / 2), -(i.height / 2));
      return c2;
    }
    flip(i, flipH, flipV) {
      let c2 = this.mkCanvas(i.width, i.height), ctx2 = c2.getContext("2d"), scaleH = flipH ? -1 : 1, scaleV = flipV ? -1 : 1, posX = flipH ? i.width * -1 : 0, posY = flipV ? i.height * -1 : 0;
      c2.width = i.width;
      c2.height = i.height;
      ctx2.save();
      ctx2.scale(scaleH, scaleV);
      ctx2.drawImage(i, posX, posY, i.width, i.height);
      ctx2.restore();
      return c2;
    }
    resize(i, factor, o = 1) {
      let c2 = this.mkCanvas(i.width * factor, i.height * factor), ctx2 = c2.getContext("2d");
      if (o !== 1) {
        ctx2.globalAlpha = o;
      }
      if (c2.width) {
        ctx2.save();
        ctx2.scale(factor, factor);
        if (o < 1) {
          this.ctx.globalAlpha = o;
        }
        ctx2.drawImage(i, 0, 0);
        if (o < 1) {
          this.ctx.globalAlpha = 1;
        }
        ctx2.restore();
      }
      c2.scale = factor;
      ctx2.globalAlpha = 1;
      return c2;
    }
    color(i, col) {
      const c2 = this.mkCanvas(i.width, i.height), ctx2 = c2.getContext("2d");
      let p = 0, imageData;
      ctx2.drawImage(i, 0, 0);
      imageData = ctx2.getImageData(0, 0, i.width, i.height);
      for (p = 0; p < imageData.data.length; p += 4) {
        imageData.data[p + 0] = col[0];
        imageData.data[p + 1] = col[1];
        imageData.data[p + 2] = col[2];
      }
      ctx2.putImageData(imageData, 0, 0);
      return c2;
    }
    textWidth(s, f) {
      return s.length * (3 * f.scale) + s.length * (1 * f.scale);
    }
    text(s, f, x, y) {
      let i = 0, ctx2 = this.ctx, firstChar = 65, offset = 0, w = 3 * f.scale, h = 5 * f.scale, spacing = 1 * f.scale, sW = this.textWidth(s, f), charPos = 0;
      const nums = "0123456789".split("");
      if (typeof s === "number" || s[0] === "0") {
        s += "";
        offset = 43;
      }
      x = x || (this.c.width - sW) / 2;
      for (i = 0; i < s.length; i += 1) {
        if (typeof s[i] === "number" || s[i] === "0" || nums.indexOf(s[i]) !== -1) {
          offset = 43;
        } else {
          offset = 0;
        }
        charPos = (s.charCodeAt(i) - firstChar + offset) * (w + spacing);
        if (s[i] === "?") {
          charPos = 144;
        }
        if (s[i] === ":") {
          charPos = 148;
        }
        if (s[i] === "%") {
          charPos = 152;
        }
        if (charPos > -1) {
          ctx2.drawImage(
            f,
            charPos,
            0,
            w,
            h,
            ~~x,
            ~~y,
            w,
            h
          );
        }
        x += w + spacing;
      }
    }
    mkCanvas(w, h) {
      const c2 = document.createElement("canvas");
      const ctx2 = c2.getContext("2d");
      c2.width = w;
      c2.height = h;
      ctx2.mozImageSmoothingEnabled = false;
      ctx2.imageSmoothingEnabled = false;
      return c2;
    }
  };

  // src/engine/helpers.js
  var helpers_default = {
    timeStamp: function() {
      return window.performance && window.performance.now ? window.performance.now() : (/* @__PURE__ */ new Date()).getTime();
    },
    pad(nr, n = 5) {
      return Array(n - String(nr).length + 1).join("0") + nr;
    },
    rnd: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    rndArray: function(a) {
      return a[~~(Math.random() * a.length)];
    },
    mkCanvas: function(w, h) {
      const c2 = document.createElement("canvas");
      const ctx2 = c2.getContext("2d");
      c2.width = w;
      c2.height = h;
      ctx2.imageSmoothingEnabled = false;
      return c2;
    },
    mkFont: function(g, size, col) {
      let key = `font_${size}_${col}`;
      if (!g.imgs[key]) {
        let font = g.draw.color(g.imgs["font"], g.data.pal[col]);
        font = g.draw.resize(font, size);
        font.scale = size;
        g.imgs[key] = font;
      }
      return g.imgs[key];
    },
    toHex(cols) {
      let hex = "#";
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
      var dx = v1.x - v2.x, dy = v1.y - v2.y;
      return Math.sqrt(dx * dx + dy * dy);
    },
    getAngle: function(v1, v2) {
      var dx = v1.x - v2.x, dy = v1.y - v2.y;
      return Math.atan2(dy, dx);
    },
    /* http://jsfiddle.net/jessefreeman/FJzcc/1/
    T: current Time
    B: start Value
    C: change in value
    D: duration
    */
    tween: function(t, b, c2, d) {
      return c2 * t / d + b;
    }
  };

  // src/lib/p8.js
  var CUSTOM_INSTRUMENTS_ENABLED = true;
  var SOUND_CACHING_ENABLED = true;
  var FX_SLIDE = 1;
  var FX_VIBRATO = 2;
  var FX_DROP = 3;
  var FX_FADE_IN = 4;
  var FX_FADE_OUT = 5;
  var FX_ARP_FAST = 6;
  var SAMPLE_RATE = 44100;
  var BASE_SPEED = 120;
  var audioCtx = new AudioContext();
  window.P8 = function(t, _) {
    const d = t.split("\n"), M = _.split("\n");
    let a = 0;
    const g = (t2, _2, a2) => parseInt(t2.substr(_2, a2), 16), x = (t2) => t2 + 0.5 | 0;
    const p = [(t2) => Math.abs(2 * t2 - 1) - 1, (t2) => {
      return 0.5 * (t2 < 0.9 ? 2 * t2 / 0.9 - 1 : 2 * (1 - t2) / (1 - 0.9) - 1);
    }, (t2) => 0.6 * (t2 < 0.5 ? t2 : t2 - 1), (t2) => t2 < 0.5 ? 0.5 : -0.5, (t2) => t2 < 0.3 ? 0.5 : -0.5, (t2) => (t2 < 0.5 ? 3 - Math.abs(24 * t2 - 6) : 1 - Math.abs(16 * t2 - 12)) / 9, () => {
      var t2 = 2 * Math.random() - 1, t2 = (a + 0.02 * t2) / 1.02;
      return 10 * (a = t2);
    }, (t2, _2) => {
      _2 = Math.abs(_2 / 128 % 1 * 2 - 1);
      return (Math.abs(4 * ((t2 + 0.5 * _2) % 1) - 2) - Math.abs(8 * t2 - 4)) / 6;
    }], w = (t2) => 65 * 2 ** (t2 / 12), E = {}, e = (t2, n) => {
      const r = d[t2];
      var S = g(r, 2, 2), _2 = S / BASE_SPEED;
      const a2 = g(r, 4, 2), E2 = g(r, 6, 2) || 32;
      var e2 = E2 * SAMPLE_RATE, t2 = audioCtx.createBuffer(1, e2, SAMPLE_RATE), F = t2.getChannelData(0), o = (t3) => t3 + 1 >= E2 ? a2 : t3 + 1, D = (t3, _3, a3) => g(r, 8 + 5 * t3 + _3, a3);
      let T = 0, l = 0, s = 0, u = 24, M2 = w(24), f2 = -1, i2 = -1, X = -1;
      for (; T < e2; ) {
        var N = D(s, 0, 2) + n, R = w(N), h = D(s, 2, 1), L = D(s, 3, 1) / 8, P = D(s, 4, 1), C = o(s), v = D(C, 0, 2) + n, I = D(C, 2, 1), c2 = D(C, 3, 1), C = D(C, 4, 1);
        let E3 = 0.02, e3 = ((P === FX_FADE_IN || h === f2 && (N === u || P === FX_SLIDE) && 0 < i2 && X !== FX_FADE_OUT) && (E3 = 0), 0.05);
        (P === FX_FADE_OUT || h === I && (N === v || C === FX_SLIDE) && 0 < c2 && C !== FX_FADE_IN) && (e3 = 0);
        var O = x(_2 * SAMPLE_RATE), B = CUSTOM_INSTRUMENTS_ENABLED && 7 < h && k(h - 8, n + N - 24);
        let A = 0;
        for (let r2 = T; r2 < T + O; r2++) {
          var U, b = (r2 - T) / O;
          let t3 = 1, _3 = (b < E3 ? t3 = b / E3 : b > 1 - e3 && (t3 = (1 - b) / e3), R), a3 = L;
          P === FX_SLIDE && (_3 = (1 - b) * M2 + b * R, 0 < i2) && (a3 = (1 - b) * i2 + b * L), P === FX_VIBRATO && (_3 *= 1 + 0.02 * Math.sin(7.5 * b)), P === FX_DROP && (_3 *= 1 - b), P === FX_FADE_IN && (a3 *= b), P === FX_FADE_OUT && (a3 *= 1 - b), P >= FX_ARP_FAST && (U = (S <= 8 ? 32 : 16) / (P === FX_ARP_FAST ? 4 : 8), U = -4 & s | 3 & (U * b | 0), _3 = w(D(U, 0, 2) + n)), l += _3 / SAMPLE_RATE, h < 8 ? F[r2] += a3 * t3 * p[h](l % 1, l) : CUSTOM_INSTRUMENTS_ENABLED && (F[r2] += a3 * t3 * B[A], A = (A + 1) % B.length);
        }
        T += O, u = N, M2 = R, f2 = h, i2 = L, X = P, s = o(s);
      }
      return t2;
    }, k = (_2, a2) => {
      if (SOUND_CACHING_ENABLED) {
        var r = _2 + "-" + a2;
        let t2 = E[r];
        return t2 || (t2 = e(_2, a2), E[r] = t2), t2;
      }
      return e(_2, a2);
    }, f = (t2, _2, a2, r, E2 = 0) => {
      var e2 = k(r, E2).getChannelData(0);
      let A = 0;
      for (; _2 < a2; )
        t2[_2] += e2[A], A = (A + 1) % e2.length, _2++;
    }, i = (t2, _2 = false, a2 = 0) => {
      var r = audioCtx.createBufferSource();
      return r.buffer = t2, r.loop = _2, r.loopStart = a2, r.connect(audioCtx.destination), r.start(), r;
    };
    this.sfx = (t2) => i(k(t2, 0)), this.music = (a2) => {
      var r = [], E2 = [];
      let t2 = 0, e2 = 0, A = M.length - 1;
      for (let _3 = a2; _3 <= A; _3++) {
        var n = M[_3], S = g(n, 0, 2);
        for (let t3 = r[_3] = 0; t3 < 4; t3++) {
          var F = g(n, 3 + 2 * t3, 2);
          if (F < d.length) {
            F = d[F];
            if (0 === g(F, 6, 2)) {
              r[_3] = t3;
              break;
            }
          }
        }
        var o = g(n, 3 + 2 * r[_3], 2), o = d[o], o = g(o, 2, 2) / BASE_SPEED;
        if (E2[_3] = x(32 * o * SAMPLE_RATE), 1 == (1 & S) && (t2 = e2), e2 += 32 * o, 2 == (2 & S)) {
          A = _3;
          break;
        }
      }
      var _2 = SAMPLE_RATE * e2, _2 = audioCtx.createBuffer(1, _2, SAMPLE_RATE), D = _2.getChannelData(0);
      let T = 0;
      for (let t3 = a2; t3 <= A; t3++) {
        var l = M[t3], s = E2[t3];
        for (let t4 = 0; t4 < 4; t4++) {
          var u = g(l, 3 + 2 * t4, 2);
          u < d.length && f(D, T, T + s, u);
        }
        T += s;
      }
      return i(_2, true, t2);
    };
  };
  var p8_default = P8;

  // package.json
  var version = "0.9";

  // src/game/setup.js
  function Setup(g) {
    g.imgs["bg"] = mkBg(g, g.imgs["bg"], 8, 0.2);
    g.imgs["bg2"] = mkBg(g, g.imgs["bg2"], 3, 0.17);
    g.imgs["pointer"] = g.draw.resize(g.imgs["pointer"], 4);
    g.imgs["hole"] = mkHole(g, g.imgs["hole"]);
    g.imgs["wormtail"] = mkTail(g, 4);
    g.imgs["wormtail_flipX"] = g.draw.flip(g.imgs["wormtail"], 1);
    g.imgs["wormtail_flipY"] = g.draw.flip(g.imgs["wormtail"], 0, 1);
    g.imgs["titleFont"] = g.H.mkFont(g, 8, 2);
    g.imgs["_titleFont"] = g.H.mkFont(g, 8, 0);
    g.imgs["heart"] = g.draw.resize(g.imgs["heart"], 4);
    g.imgs["bg_skull"] = g.draw.rotate(g.draw.resize(g.imgs["skull"], 6, 0.1), 4.4);
    g.imgs["bg_skull_flip"] = g.draw.flip(g.imgs["bg_skull"], 1, 0);
    g.imgs["bg_bone"] = g.draw.rotate(g.draw.resize(g.imgs["bone"], 2, 0.1), 4.4);
    g.imgs["bg_bone_flip"] = g.draw.flip(g.imgs["bg_bone"], 1, 0);
    g.imgs["bg_grass"] = g.draw.resize(g.imgs["grass"], 4, 0.2);
    g.imgs["13"] = g.draw.resize(g.imgs["13"], 3, 0.5);
    g.p8S = `000e00001776217760177601776017762177601776017760177621776017762177601e7621e7601f7621f7601f7601f7601f7621f7601c7621c7601e7621e7601a7621a7601c7621c76019762197601a7621a760
000e00000b2200b22017220172200b2200b22017220172200b2200b22017220172200b2200b22017220172200b2200b22017220172200b2200b22017220172200b2200b22017220172200b2200b2201722017220
000e00001a7621a7601a7601a7601a7621a7601a7601a7601a7621a7601a7621a76021762217602276222760227602276022762227601f7621f76021762217601d7621d7601f7621f7601c7621c7601d7621d760
000e00000e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a220
010e00000c053000003f215000000c053000003f215000000c053000003f215000000c053000003f215000000c053000003f215000000c053000003f215000000c053000003f215000000c053000003f21500000`;
    g.p8M = `00 00010404
00 00010404
00 02030404
04 02030404`;
    g.p8S2 = `000e000021740217101c7401c710217402171023740237102474024710237402371021740217101f7401f7101d7401d71018740187101d7401d7101f7401f71021740217101f7401f7101d7401d7102174021710
000e00001f7401f7101a7401a7101f7401f7102174021710237402371021740217101f7401f71023740237101c7401c71017740177101c7401c7101e7401e7101f7401f7101e7401e7101c7301c7101e7301e710
000e00001511015110151101511015110151101511015110151101511015110151101511015110151101511011110111101111011110111101111011110111101111011110111101111011110111101111011110
001000002153121520215202152021520215202152021520215200000023520000002452000000215202152021520215202152021520215202152021520000000000000000000000000000000000000000000000
000e00001311013110131101311013110131101311013110131101311013110131101311013110131101311010110101101011010110101101011010110101101011010110101101011010110101101011010110
000e00002353123520235202352023520235202352023520235200000000000000000000000000245200000023520235202352023520235202352023520235202352000000000000000000000000000000000000
000e00002153121520215202152021520215202152021520215200000000000000002352000000245200000021520215202152021520215202152021520215202152000000000000000023520000002452000000
000e19002652026520265202652026520265202652026520265200000000000000002852000000295200000028520285202852028520285202852028520285202852001400014000140001400014000140001400`;
    g.p8M2 = `00 00404140
00 01414240
00 00400240
00 01410440
00 00030243
00 01050440
00 00060240
04 01070440`;
    document.querySelector("#c").style.cursor = "none";
    g.voice = loadSound("t");
    console.log(`%c ${g.data.title} V:${version} (${window.BUILD || "DEV"})`, "background: #222; color: #bada55");
  }
  function mkTail(g, len = 4) {
    let i = g.imgs["circle"], i2 = g.draw.color(i, g.data.pal[1]), c2 = g.H.mkCanvas(i.width * len, i.height + 4), ctx2 = c2.getContext("2d");
    let x = 0, w = i.width;
    for (let n = 0; n <= len; n += 1) {
      let y = n % 2 ? 4 : 0;
      ctx2.drawImage(n % 2 ? i : i2, x + w / 2 * n, y);
    }
    return c2;
  }
  function mkHole(g, i) {
    let c2 = g.H.mkCanvas(i.width * 2, i.height), ctx2 = c2.getContext("2d");
    ctx2.drawImage(i, 0, 0);
    ctx2.drawImage(i, i.width, 0);
    return c2;
  }
  function mkBg(g, i, scale = 1, o = 1) {
    i = g.draw.resize(i, scale, o);
    let rows = Math.ceil(g.w / i.width), cols = Math.ceil(g.h / i.height);
    c = g.H.mkCanvas(g.w, g.h), ctx = c.getContext("2d");
    for (let y = 0; y <= cols; y += 1) {
      for (let x = 0; x <= rows; x += 1) {
        ctx.drawImage(i, x * i.width, y * i.width);
      }
    }
    return c;
  }
  function loadSound(n) {
    let sound = document.createElement("audio");
    if ("src" in sound) {
      sound.autoPlay = false;
    } else {
      sound = document.createElement("bgsound");
      sound.volume = -1e4;
    }
    sound.src = window.BUILD ? `public/${n}.mp3` : `${n}.mp3`;
    sound.id = n;
    document.body.appendChild(sound);
    return sound;
  }

  // src/lib/zzfx.js
  var zzfx;
  var zzfxV;
  var zzfxX;
  zzfxV = 0.3;
  zzfx = // play sound
  (p = 1, k = 0.05, b = 220, e = 0, r = 0, t = 0.1, q = 0, D = 1, u = 0, y = 0, v = 0, z = 0, l = 0, E = 0, A = 0, F = 0, c2 = 0, w = 1, m = 0, B = 0, M = Math, R = 44100, d = 2 * M.PI, G = u *= 500 * d / R / R, C = b *= (1 - k + 2 * k * M.random(k = [])) * d / R, g = 0, H = 0, a = 0, n = 1, I = 0, J = 0, f = 0, x, h) => {
    e = R * e + 9;
    m *= R;
    r *= R;
    t *= R;
    c2 *= R;
    y *= 500 * d / R ** 3;
    A *= d / R;
    v *= d / R;
    z *= R;
    l = R * l | 0;
    for (h = e + m + r + t + c2 | 0; a < h; k[a++] = f)
      ++J % (100 * F | 0) || (f = q ? 1 < q ? 2 < q ? 3 < q ? M.sin((g % d) ** 3) : M.max(M.min(M.tan(g), 1), -1) : 1 - (2 * g / d % 2 + 2) % 2 : 1 - 4 * M.abs(M.round(g / d) - g / d) : M.sin(g), f = (l ? 1 - B + B * M.sin(d * a / l) : 1) * (0 < f ? 1 : -1) * M.abs(f) ** D * zzfxV * p * (a < e ? a / e : a < e + m ? 1 - (a - e) / m * (1 - w) : a < e + m + r ? w : a < h - c2 ? (h - a - c2) / t * w : 0), f = c2 ? f / 2 + (c2 > a ? 0 : (a < h - c2 ? 1 : (h - a) / c2) * k[a - c2 | 0] / 2) : f), x = (b += u += y) * M.cos(A * H++), g += x - x * E * (1 - 1e9 * (M.sin(a) + 1) % 2), n && ++n > z && (b += v, C += v, n = 0), !l || ++I % l || (b = C, u = G, n ||= 1);
    p = zzfxX.createBuffer(1, h, R);
    p.getChannelData(0).set(k);
    b = zzfxX.createBufferSource();
    b.buffer = p;
    b.connect(zzfxX.destination);
    b.start();
    return b;
  };
  zzfxX = new AudioContext();
  var zzfx_default = zzfx;

  // src/engine/game.js
  var Game = class {
    constructor(o) {
      const defaults = { w: base_default.w, h: base_default.h };
      let ua = navigator.userAgent.toLowerCase();
      this.android = ua.indexOf("android") > -1;
      this.ios = /ipad|iphone|ipod/.test(ua);
      this.mobile = this.android || this.ios;
      this.firefox = ua.indexOf("firefox") > -1;
      this.chrome = ua.indexOf("chrome") > -1;
      for (let n in defaults) {
        this[n] = defaults[n];
      }
      this.o = Object.assign(defaults, o);
      this.data = o;
      this.dt = 0;
      this.fps = 60;
      this.frameStep = 1 / this.fps;
      this.frameCurr = 0;
      this.framePrev = helpers_default.timeStamp();
      this.sceneName = o.start;
      this.H = helpers_default;
      this.scenes = o.scenes;
      this.availEnts = o.ents;
      let hi = 500;
      try {
        hi = parseInt(window.localStorage.getItem("GBhi"), 10) || 500;
      } catch (e) {
        console.log(e);
      }
      this.hiScore = hi;
      this.plays = 0;
      this.ents = [];
      this.imgs = [];
      this.events = [];
      this.H = helpers_default;
      this.mute = false;
      this.pause = false;
      window.G = this;
    }
    init() {
      const loader = new Loader(this.o.i);
      this.c = document.querySelector("#c");
      this.input = new Input(this.c, this);
      document.title = this.o.title;
      document.body.classList.add("loading");
      loader.start().then((imgs) => {
        this.imgs = imgs;
        window.setTimeout(() => {
          this.c.classList.add("active");
          this.draw = new Draw(this.o.w, this.o.h, this.o.pal);
          this.scene = new this.scenes[this.sceneName](this);
          this.scaleUp("dot", [0, 2, 3, 8, 11]);
          this.scaleUp("circle", [0, 2, 3, 8, 11]);
          this.scaleUp("bridge");
          this.scaleUp("spark", [0, 2, 3, 8, 11]);
          document.body.classList.remove("loading");
          Setup(this);
          this.track1 = new p8_default(this.p8S, this.p8M);
          this.track2 = new p8_default(this.p8S2, this.p8M2);
          this.favIcon(this.draw.resize(this.imgs.gecko, 8));
          document.querySelector("#l").style.display = "none";
          this.c.style.display = "block";
          this.loop();
        }, 2e3);
      });
    }
    scaleUp(key, colors = []) {
      for (let i = 8; i > 0; i -= 1) {
        if (colors.length) {
          colors.forEach((col) => {
            let img = this.draw.color(this.imgs[key], this.o.pal[col]);
            this.imgs[`${key}_${i}_${col}`] = this.draw.resize(img, i);
          });
        } else {
          this.imgs[`${key}_${i}`] = this.draw.resize(this.imgs[key], i);
        }
      }
    }
    sfx(key) {
      if (this.mute)
        return;
      zzfx_default(...this.data.sfx[key]);
    }
    favIcon(i) {
      let c2 = document.createElement("canvas"), ctx2 = c2.getContext("2d"), l = document.createElement("link");
      c2.width = 64;
      c2.height = 64;
      ctx2.drawImage(i, 0, 0);
      l.type = "image/x-icon";
      l.rel = "shortcut icon";
      l.href = c2.toDataURL("image/x-icon");
      document.getElementsByTagName("head")[0].appendChild(l);
    }
    changeScene(scene, c2 = "flip") {
      this.c.classList.add(c2);
      window.setTimeout(() => {
        this.ents = [];
        this.events = [];
        this.c.classList.remove(c2);
        this.scene = new this.scenes[scene](this);
      }, 300);
    }
    loop() {
      this.frameCurr = helpers_default.timeStamp();
      this.dt = this.dt + Math.min(1, (this.frameCurr - this.framePrev) / 1e3);
      if (!this.pause) {
        this.update(this.frameStep);
        this.render();
      }
      this.framePrev = this.frameCurr;
      if (this.input.freshKeys.KeyS) {
        this.screenshot();
      }
      if (this.input.freshKeys.KeyM) {
        console.log("MUTE", this.audio.stop());
        this.mute = !this.mute;
        if (this.mute && this.audio) {
          this.audio.stop();
        }
      }
      if (this.input.freshKeys.KeyP) {
        this.pause = !this.pause;
      }
      this.input.freshKeys = [];
      requestAnimationFrame(() => this.loop());
    }
    update(step) {
      if (this.c.classList.contains("flip"))
        return;
      this.fader = Math.sin((/* @__PURE__ */ new Date()).getTime() * 5e-3);
      this.runEvents(step);
      this.scene.update(step);
      let i = this.ents.length;
      while (i--) {
        if (this.ents[i].remove) {
          this.ents.splice(i, 1);
        }
      }
      this.scene.update(step);
    }
    render(step) {
      this.scene.render(step);
    }
    spawn(ent, opts) {
      const sprite = new this.availEnts[ent](this, opts);
      this.ents.push(sprite);
      return sprite;
    }
    shake(n = "shake") {
      this.c.classList.add(n);
      this.addEvent({
        t: 50,
        cb: () => {
          this.c.className = "";
        }
      });
    }
    addEvent(e) {
      this.events.push(e);
    }
    runEvents(step) {
      this.events.forEach((e, i) => {
        e.t -= step * 100;
        if (e.t < 0) {
          e.cb.call(this);
          this.events.splice(i, 1);
        }
      });
    }
    addText(text, delay, x = false, y = 100, col = 2, scale = 3) {
      this.addEvent({
        t: delay,
        cb: () => {
          this.spawn("Text", { x, y, text, col, o: 5, scale });
        }
      });
    }
    screenshot() {
      this.c.toBlob((blob) => {
        saveBlob(blob, `screencapture-${this.w}x${this.h}.png`);
      });
      const saveBlob = function() {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style.display = "none";
        return function saveData(blob, fileName) {
          const url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = fileName;
          a.click();
        };
      }();
    }
  };

  // src/game/scenes/loader.js
  var Loader2 = class {
    constructor(g) {
      this.g = g;
      this.f = g.H.mkFont(g, 5, 2);
      this.bg = g.draw.resize(g.imgs["loader"], 2);
      g.addEvent({
        t: 100,
        cb: () => {
          this.ready = true;
        }
      });
      this.loaded = 0;
      this.incrementLoad();
    }
    update(dt) {
      this.g.ents.forEach((e) => {
        e.update(dt);
      });
      if (~~this.titleAlpha < 1) {
        this.titleAlpha += this.titleAlphaInc;
        if (~~this.titleAlpha === 1) {
        }
      }
      if (this.g.input.firstTouch && this.ready) {
        this.g.changeScene("Title");
      }
    }
    render() {
      const g = this.g;
      g.draw.img(this.bg, 0, 0);
      if (this.ready && this.g.fader > 0) {
        g.draw.text(
          g.mobile ? "TAP ME" : "CLICK ME",
          this.f,
          false,
          200
        );
      }
      g.ents.forEach((e) => {
        e.render();
      });
      for (let n = 0; n <= 10; n += 1) {
        g.draw.rect(0, 48 * n, g.w, 48 - this.loaded, 0);
      }
      if (!g.mobile) {
        g.draw.img(g.imgs["pointer"], g.input.mx, g.input.my);
      }
    }
    incrementLoad() {
      if (this.loaded >= 48) {
        return;
      }
      this.g.addEvent({
        t: 1,
        cb: () => {
          this.loaded += 1;
          this.incrementLoad();
        }
      });
    }
    spawnStartButton() {
      this.g.spawn("Button", {
        y: this.g.h - 90,
        clickCol: 11,
        col: 4,
        text: "START",
        cb: () => {
          this.g.changeScene("Title");
        }
      });
    }
  };

  // src/game/scenes/title.js
  var Title = class {
    constructor(g) {
      this.g = g;
      this.f = g.H.mkFont(g, 3, 1);
      this.i = g.draw.resize(this.g.imgs.title, 4);
      this.shadow = g.draw.color(this.i, g.data.pal[0], 0.2);
      this.canStart = false;
      this.bgPos = 0;
      this.bgSpeed = 0.25;
      g.voice.play();
      g.spawn("Button", {
        y: this.g.h - 130,
        clickCol: 11,
        col: 4,
        text: "PLAY",
        cb: () => {
          g.audio.stop();
          g.changeScene(g.plays === 0 ? "Tut" : "Play");
        }
      });
      g.addEvent({
        t: 100,
        cb: () => {
          this.canStart = true;
          g.spawn("Button", {
            y: g.h - 60,
            textCol: 1,
            clickCol: 0,
            col: false,
            text: "CREDITS",
            cb: () => {
              g.audio.stop();
              g.changeScene("Help");
            }
          });
        }
      });
      this.bling();
      g.voice.play();
      g.addEvent({
        t: 20,
        cb: () => {
          this.g.audio = this.g.track2.music(0);
        }
      });
    }
    update(dt) {
      this.fader = Math.sin((/* @__PURE__ */ new Date()).getTime() * 5e-3);
      this.bgPos += this.bgSpeed;
      if (this.bgPos > this.g.h) {
        this.bgPos = 0;
      }
      this.g.ents.forEach((e) => {
        e.update(dt);
      });
    }
    render() {
      const g = this.g;
      g.draw.clear(5);
      g.draw.img(g.imgs.bg2, 0, this.bgPos - this.g.h);
      g.draw.img(g.imgs.bg2, 0, this.bgPos);
      g.draw.img(this.shadow, 20, 125);
      g.draw.img(this.i, 20, 120);
      g.ents.forEach((e) => {
        e.render();
      });
      g.draw.text("HI", this.f, 95, 10);
      g.draw.text(this.g.hiScore, this.f, 130, 10);
      if (!g.mobile) {
        g.draw.img(g.imgs["pointer"], g.input.mx, g.input.my);
      }
    }
    bling() {
      let coords = this.g.H.rndArray([
        [180, 125],
        [120, 200],
        [60, 150]
      ]);
      this.g.addEvent({
        t: this.g.H.rnd(100, 150),
        cb: () => {
          this.g.spawn("Boom", {
            x: coords[0],
            y: coords[1],
            key: "boom",
            scale: 4,
            col: 2,
            type: "spark"
          });
          this.bling();
        }
      });
    }
  };

  // src/game/scenes/tut.js
  var Tut = class {
    constructor(g) {
      this.g = g;
      this.tutorial = true;
      this.escape = false;
      this.bgPos = 0;
      this.bgSpeed = 1;
      this.f = g.H.mkFont(g, 5, 4);
      this.f2 = g.H.mkFont(g, 2, 1);
      this.p1 = g.spawn("P1", { p: this });
      g.addText(g.mobile ? "MOVE WITH FINGER" : "MOVE WITH MOUSE", 50);
      g.sfx("piano");
      g.addEvent({
        t: 600,
        cb: () => {
          g.sfx("piano");
          g.addText("KILL BADDIES", 1);
          g.spawn("Cactus", { p: this });
        }
      });
      g.addEvent({
        t: 1200,
        cb: () => {
          g.sfx("piano");
          g.addText("COLLECT POWERUPS", 1);
          g.spawn("Powerup", { p: this, x: g.w / 2, y: 0 });
        }
      });
      g.addEvent({
        t: 1700,
        cb: () => {
          g.sfx("piano");
          g.addText("LETS GO!", 1);
        }
      });
      g.addEvent({
        t: 1900,
        cb: () => {
          g.changeScene("Play");
        }
      });
      if (g.mobile) {
        g.spawn("Button", {
          x: g.w - 80,
          y: g.h - 40,
          textCol: 1,
          clickCol: 0,
          col: false,
          w: 120,
          text: "SKIP",
          cb: () => {
            g.changeScene("Play");
          }
        });
      }
    }
    initGameOver() {
      this.g.chageScene("Tut");
    }
    update(dt) {
      this.bgPos += this.bgSpeed;
      if (this.bgPos > this.g.h) {
        this.bgPos = 0;
      }
      this.g.ents.forEach((e) => {
        e.update(dt);
      });
      if (this.g.input.freshKeys.Escape && !this.escape) {
        this.escape = true;
        this.g.audio.stop();
        this.g.changeScene("Play");
      }
    }
    render() {
      const g = this.g;
      g.draw.clear(19);
      g.draw.img(g.imgs.bg2, 0, this.bgPos - this.g.h);
      g.draw.img(g.imgs.bg2, 0, this.bgPos);
      this.g.draw.text("TUTORIAL", this.f, false, 20);
      g.ents.forEach((e) => {
        e.render();
      });
      if (!this.g.mobile) {
        this.g.draw.text("ESC TO SKIP", this.f2, false, this.g.h - 30);
      }
    }
  };

  // src/game/scenes/help.js
  var Help = class {
    constructor(g) {
      this.g = g;
      this.f = g.H.mkFont(g, 5, 4);
      this.f2 = g.H.mkFont(g, 3, 2);
      this.f3 = g.H.mkFont(g, 3, 1);
      g.spawn("Button", {
        y: this.g.h - 90,
        clickCol: 11,
        col: 4,
        text: "BACK",
        cb: () => {
          g.changeScene("Title");
        }
      });
      g.spawn("Button", {
        x: 45,
        y: 265,
        size: 3,
        noscroll: true,
        textCol: 1,
        clickCol: 0,
        col: false,
        w: 120,
        text: "SOURCE",
        cb: () => {
          window.location.href = "https://snabisch.itch.io/free-music-sequences-for-pico-8";
        }
      });
    }
    update(dt) {
      this.g.ents.forEach((e) => {
        e.update(dt);
      });
    }
    render() {
      const g = this.g;
      g.draw.clear(0);
      this.g.draw.text("CREDITS", this.f, false, 20);
      this.g.draw.text("CODE AND GFX", this.f3, 50, 90);
      this.g.draw.text("BY EOINMCG", this.f2, 50, 120);
      this.g.draw.text("MUSIC", this.f3, 50, 180);
      this.g.draw.text("BY SNABISCH", this.f2, 50, 210);
      g.ents.forEach((e) => {
        e.render();
      });
      g.draw.img(g.imgs["pointer"], g.input.mx, g.input.my);
    }
  };

  // src/game/scenes/play.js
  var Play = class {
    constructor(g) {
      this.g = g;
      this.bg = g.imgs["bg"];
      this.bg2 = g.imgs["bg2"];
      this.bgPos = 0;
      this.bgSpeed = 1;
      this.bgColMaster = g.H.rndArray([12, 16, 17, 18, 19]);
      this.bgCol = this.bgColMaster;
      for (let n = 0; n < 6; n += 1) {
        this.g.spawn("Obj", { p: this });
      }
      this.p1 = this.g.spawn("P1", { p: this });
      this.newHiScore = false;
      this.score = 0;
      this.dist = 0;
      g.plays += 1;
      this.offset = {
        x: 0,
        y: 0
      };
      this.scoreFont = g.H.mkFont(g, 4, 2);
      this.gameOver = false;
      this.g.audio = this.g.track1.music(0);
      window.P = this;
      this.hole = this.g.spawn("Hole", { p: this, y: -g.h * 3 });
      this.allBaddies = ["Cactus", "Bat", "Spider", "Worm"];
      this.baddies = [];
      this.boss = false;
      this.startSpawn();
    }
    update(dt) {
      this.fader = Math.sin((/* @__PURE__ */ new Date()).getTime() * 3e-3);
      this.g.ents.forEach((e) => {
        e.update(dt);
      });
      this.bgPos += this.bgSpeed;
      this.dist += this.bgSpeed;
      if (this.bgPos > this.g.h) {
        this.bgPos = 0;
      }
      if (this.p1.dead) {
        this.bgSpeed = 0;
      }
      if (this.dist % 1e3 === 0) {
        this.addBaddie();
      }
      if (!this.newHiScore && this.score > this.g.hiScore) {
        this.newHiScore = true;
        this.g.addText("NEW HISCORE", 0, false, 200, 4, 5);
      }
    }
    render() {
      const g = this.g;
      g.draw.clear(this.bgCol);
      g.draw.img(this.bg, 0, this.bgPos - this.g.h);
      g.draw.img(this.bg, 0, this.bgPos);
      g.draw.img(this.bg2, 0, this.bgPos - this.g.h);
      g.draw.img(this.bg2, 0, this.bgPos);
      g.ents.forEach((e) => {
        if (e.name !== "gecko") {
          e.render();
        }
      });
      if (!this.gameOver) {
        this.p1.render();
      } else if (this.gameOver && this.fader > 0) {
        this.g.draw.text("GAME", this.g.imgs["_titleFont"], false, 158);
        this.g.draw.text("GAME", this.g.imgs["titleFont"], false, 150);
        this.g.draw.text("OVER", this.g.imgs["_titleFont"], false, 218);
        this.g.draw.text("OVER", this.g.imgs["titleFont"], false, 210);
      }
      let score = Math.round(this.score);
      g.draw.text(g.H.pad(score), this.scoreFont, 20, 20);
      for (let n = 0; n < this.p1.lives; n += 1) {
        this.g.draw.img(this.g.imgs["heart"], 200 + n * 30, 20);
      }
      if (this.gameOver && !this.g.mobile) {
        this.g.draw.img(this.g.imgs["pointer"], this.g.input.mx, this.g.input.my);
      }
    }
    initGameOver() {
      if (this.gameOver)
        return;
      this.updateHiScore();
      this.g.sfx("thunder");
      this.stopMusic();
      this.gameOver = true;
      this.g.addEvent({
        t: 100,
        cb: () => {
          this.spawnReplay();
        }
      });
    }
    updateHiScore() {
      if (this.newHiScore) {
        this.g.hiScore = this.score;
        try {
          window.localStorage.setItem("GBhi", this.g.hiScore);
        } catch (e) {
        }
      }
    }
    spawnReplay() {
      this.g.spawn("Button", {
        y: this.g.h - 120,
        clickCol: 4,
        col: 11,
        text: "REPLAY",
        cb: () => {
          this.g.changeScene("Play");
        }
      });
    }
    startSpawn() {
      this.addBaddie();
      this.spawn();
    }
    addBaddie() {
      if (this.baddies.length !== this.allBaddies.length) {
        this.baddies.push(this.allBaddies[this.baddies.length]);
      } else if (this.bgSpeed < 2) {
        this.bgSpeed += 0.5;
      } else if (this.bgSpeed >= 2) {
        this.bossTime();
      }
    }
    spawn() {
      if (this.gameOver || this.boss)
        return;
      let level = ~~(this.dist / 500);
      level = level > 20 ? 20 : level;
      const nextSpawn = this.g.H.rnd(80, 120) - level;
      this.g.addEvent({
        t: nextSpawn,
        cb: () => {
          let baddie = this.g.H.rndArray(this.baddies);
          if (Math.random() > 0.7) {
            this.g.spawn("Cactus", { p: this });
          }
          this.g.spawn(baddie, { p: this });
          if (Math.random() > 0.9) {
            let x = this.g.H.rnd(50, 250);
            for (let i = 1; i <= 4; i += 1) {
              this.g.spawn("Donut", { p: this, x, y: i * -32 });
            }
          }
          this.spawn(nextSpawn);
        }
      });
    }
    bossTime() {
      this.stopMusic();
      this.g.addText("BOSS TIME", 0, false, 200, 3, 5);
      this.g.sfx("boss");
      this.g.addEvent({
        t: 50,
        cb: () => {
          this.sparkle();
        }
      });
      this.g.addEvent({
        t: 100,
        cb: () => {
          this.boss = true;
          this.bgSpeed = 0;
          this.g.spawn("Boss", { p: this });
        }
      });
    }
    sparkle() {
      let n = 20;
      let w = 20, x = this.g.w / 2, y = 50;
      while (n--) {
        this.g.addEvent({
          t: n * 3,
          cb: () => {
            let rnd = this.g.H.rnd(-w, w);
            this.g.sfx("speak");
            this.g.spawn("Boom", { x: x + rnd, y: y + rnd, key: "boom", type: "spark", col: this.g.H.rnd(3, 4) });
          }
        });
      }
    }
    stopMusic() {
      try {
        this.g.audio.stop();
      } catch (e) {
        console.log(e);
      }
    }
  };

  // src/game/scenes/win.js
  var Win = class {
    constructor(g) {
      this.g = g;
      this.bgPos = 0;
      this.f = g.H.mkFont(g, 6, 2);
      this._f = g.H.mkFont(g, 6, 0);
      this.d = this.g.draw.resize(this.g.imgs["donut"], 8);
      g.addText("THE END", 100, false, g.h - 50, 1);
    }
    update(dt) {
      this.g.ents.forEach((e) => {
        e.update(dt);
      });
      if (this.g.input.freshKeys.Escape && !this.escape) {
        this.escape = true;
        this.g.changeScene("Title");
      }
    }
    render() {
      const g = this.g;
      g.draw.clear(16);
      g.draw.img(g.imgs.bg2, 0, this.bgPos - this.g.h);
      g.draw.img(g.imgs.bg2, 0, this.bgPos);
      if (this.g.fader > 0) {
        this.g.draw.text("YOU ROCK", this._f, false, 26);
        this.g.draw.text("YOU ROCK", this.f, false, 20);
      }
      this.g.draw.img(this.d, 105, 200);
      g.ents.forEach((e) => {
        e.render();
      });
    }
  };

  // src/game/scenes/test.js
  var Test = class {
    constructor(g) {
      this.g = g;
      this.bgPos = 0;
      this.f = g.H.mkFont(g, 5, 2);
    }
    update(dt) {
      this.g.ents.forEach((e) => {
        e.update(dt);
      });
      if (this.g.input.freshKeys.Escape && !this.escape) {
        this.escape = true;
        this.g.changeScene("Title");
      }
    }
    render() {
      const g = this.g;
      g.draw.clear(0);
      g.ents.forEach((e) => {
        e.render();
      });
      g.draw.text("KILL BADDIES", this.f, false, 200);
    }
  };

  // src/engine/sprite.js
  var Sprite = class {
    constructor(g, o) {
      this.g = g;
      this.o = o;
      this.id = `id-${Math.random().toString(36).substr(2, 16)}`;
      this.dead = false;
      this.remove = false;
      this.offsetY = 0;
      this.name = o.i;
      for (let n in o) {
        this[n] = o[n];
      }
      this.lastPos = { x: this.x, y: this.y };
      this.flip = { x: 0, y: 0 };
      this.reduceHitBoxBy = 0;
      this.scale = o.scale || 1;
      this.frame = o.frame || 1;
      this.frames = o.frames || 1;
      this.frameRate = o.frameRate || 80;
      this.frameNext = o.frameNext || 0;
      if (o.i) {
        this.iKey = `${o.i}_${this.scale}`;
        this.mkImg(this.iKey);
      }
      this.hurt = false;
      this.hurtTime = 0;
      this.hurtTimeMaster = 25;
      this.anims = { idle: { frames: [1], rate: 80 } };
      this.changeAnim("idle");
    }
    update(dt) {
      if (this.collidesWith) {
        this.collidesWith.forEach((group) => {
          this.hitGroup(group);
        });
      }
      if (this.hurt) {
        this.hurtTime -= 1;
      }
      if (this.hurtTime < 0) {
        this.hurt = false;
        this.hurtTime = this.hurtTimeMaster;
      }
      this.updateAnim(dt);
      this.lastPos.x = this.x;
      this.lastPos.y = this.y;
    }
    render() {
      let g = this.g, i = this.hurt ? this.iHurt : this.i, frame = this.frame;
      if (i) {
        if (this.flip.x) {
          i = this.flipX;
          frame = this.frames - this.frame + 1;
        }
        g.draw.ctx.drawImage(
          i,
          frame * this.w - this.w,
          0,
          this.w,
          this.h,
          ~~this.x,
          ~~this.y + this.offsetY,
          this.w,
          this.h
        );
      } else {
        g.draw.rect(this.x, this.y, this.w, this.h, this.col);
      }
    }
    updateAnim(step) {
      if (this.frameNext < 0) {
        this.frameNext = this.anim.rate;
        this.anim.counter += 1;
        if (this.anim.counter >= this.anim.frames.length) {
          if (this.anim.next) {
            this.changeAnim(this.anim.next);
          } else {
            if (this.anim.cb) {
              this.anim.cb.call(this);
            }
            this.anim.counter = 0;
          }
        }
        this.frame = this.anim.frames[this.anim.counter];
      }
      this.frameNext -= step;
    }
    hitGroup(group) {
      this.g.ents.forEach((e) => {
        if (e && e.group === group && e.id !== this.id && this.hit(e)) {
          this.receiveDamage(e);
          e.doDamage(this);
        }
      });
    }
    hit(a) {
      const b = this;
      let reduce = this.reduceHitBoxBy;
      let ay = reduce ? a.y + reduce : a.y, ax = reduce ? a.x + reduce : a.x, aw = reduce ? a.w - reduce * 2 : a.w, ah = reduce ? a.h - reduce * 2 : a.h;
      return !(ay + ah < b.y || ay > b.y + b.h || ax + aw < b.x || ax > b.x + b.w);
    }
    receiveDamage(o) {
    }
    doDamage(o) {
    }
    isOffScreen() {
      let g = this.g;
      return this.x < -this.w || this.x > g.w + this.w || this.y < -this.h || this.y > g.h + this.h;
    }
    kill() {
      this.dead = this.remove = true;
    }
    getAngle(x, y) {
      let dx = x - this.x;
      let dy = y - this.y;
      return Math.atan2(dy, dx);
    }
    // offScreen() {
    //   return (this.x < 0
    //       || this.x > W - this.w
    //       || this.y < 0
    //       || this.y > H - this.h);
    // }
    mkImg(key) {
      let flipX = `${key}_flipx`;
      let flipY = `${key}_flipy`;
      let hurtKey = `${key}_hurt`;
      if (!this.g.imgs[key]) {
        this.i = this.g.draw.resize(this.g.imgs[this.name], this.scale);
        this.g.imgs[key] = this.i;
      } else {
        this.i = this.g.imgs[key];
      }
      if (!this.g.imgs[flipX]) {
        this.flipX = this.g.draw.flip(this.i, 1, 0);
        this.g.imgs[flipX] = this.flipX;
      } else {
        this.flipX = this.g.imgs[flipX];
      }
      if (!this.g.imgs[flipY]) {
        this.flipY = this.g.draw.flip(this.i, 0, 1);
        this.g.imgs[flipY] = this.flipY;
      } else {
        this.flipY = this.g.imgs[flipY];
      }
      if (!this.g.imgs[hurtKey]) {
        this.g.imgs[hurtKey] = this.g.draw.color(this.i, this.g.data.pal[2]);
        this.iHurt = this.g.imgs[hurtKey];
      } else {
        this.iHurt = this.g.imgs[hurtKey];
      }
      this.w = this.i.width / this.frames;
      this.h = this.i.height;
      this.halfW = this.w / 2;
      this.xLimit = this.g.w - this.w;
      this.yLimit = this.g.h - this.h;
    }
    changeAnim(name) {
      if (this.anim && this.anim.name && this.anim.name === name) {
        return;
      }
      this.anim = this.anims[name];
      this.anim.name = name;
      this.anim.counter = 0;
      this.frame = this.anim.frames[0];
      this.frameNext = this.anim.rate;
    }
    bindToScreen() {
      if (this.x < 0)
        this.x = 0;
      if (this.x > this.xLimit)
        this.x = this.xLimit;
      if (this.y < 0)
        this.y = 0;
      if (this.y > this.yLimit)
        this.y = this.yLimit;
    }
    boom() {
    }
  };

  // src/game/ents/p1.js
  var P1 = class extends Sprite {
    constructor(g, o) {
      o.i = "gecko";
      o.frames = 1;
      o.scale = 3.5;
      super(g, o);
      this.shadow = g.draw.color(g.imgs["circle"], 0);
      this.shadow = g.draw.resize(this.shadow, this.scale / 1.9, 0.1);
      this.group = "player";
      this.collidesWith = ["baddies"];
      this.x = g.w / 2 - this.w / 2;
      this.y = g.h - 80;
      this.offset = { x: 0, y: 0 };
      this.currentFrame = 1;
      this.reduceHitBoxBy = 8;
      this.shotDelayTime = 50;
      this.shotDelay = 50;
      this.powerups = 0;
      this.lives = 2;
      this.hurtTimeMaster = 250;
      this.minX = 0;
      this.maxX = this.g.w - this.w;
      this.minY = this.h * 2;
      this.maxY = this.g.h - this.h * 2;
      this.imgs = {
        s1: this.i,
        s2: this.flipX,
        l1: g.draw.rotate(this.i, 4.4),
        l2: g.draw.rotate(this.flipX, 4.5),
        r1: g.draw.rotate(this.i, 5.1),
        r2: g.draw.rotate(this.flipX, 5.1)
      };
      this.frame = 1;
      this.dir = "s";
      this.tailxOff = 0;
      this.tailxDir = 2;
      this.tail = [];
      let i = 5;
      while (i) {
        this.tail.push({ x: this.x, y: this.y, s: i });
        i--;
      }
    }
    update(dt) {
      super.update(dt);
      const I = this.g.input;
      if (I.firstTouch) {
        this.offset.x = I.mx - this.x;
        this.offset.y = I.my - this.y;
      }
      if (I.touching || !this.g.mobile) {
        this.x = I.mx - this.offset.x;
        this.y = I.my - this.offset.y;
      }
      this.bindToScreen();
      const t = this.tail;
      this.tailxDir = t[t.length - 1].x > t[t.length - 2].x ? 2 : -2;
      const diff = Math.floor(t[0].x - t[1].x);
      if (diff > 0) {
        this.dir = "r";
      } else if (diff < -1) {
        this.dir = "l";
      } else {
        this.dir = "s";
      }
      this.fader = Math.sin((/* @__PURE__ */ new Date()).getTime() * 0.03);
      this.frame = this.fader > 0 ? 1 : 2;
      if (this.shotDelay < 0) {
        this.shoot();
      }
      this.shotDelay--;
    }
    render() {
      this.g.draw.img(this.shadow, this.x + 6, this.y + 12);
      if (this.hurt) {
        this.g.draw.ctx.globalAlpha = this.g.fader > 0 ? 0.2 : 0.5;
      }
      this.g.draw.img(this.imgs[`${this.dir}${this.frame}`], this.x, this.y + 6);
      let last = { x: this.x, y: this.y };
      let r = 8;
      this.tailxOff = 0;
      this.tail.forEach((t, i) => {
        let col = i % 2 === 0 ? 4 : 3;
        if (r > 4) {
          r -= 1;
        }
        let xMove = (last.x - t.x) / 2;
        t.x += xMove;
        t.y += (last.y + t.y) * 8;
        this.g.draw.rect(t.x + 9 + this.tailxOff, this.y + this.h + r * i * 1.1, r, r, col);
        last = t;
        this.tailxOff += this.tailxDir;
      });
      this.g.draw.ctx.globalAlpha = 1;
    }
    receiveDamage(o) {
      if (o.name === "cactus") {
        this.kill();
      }
    }
    kill(booms = 3) {
      if (this.hurt)
        return;
      this.lives -= 1;
      this.hurt = true;
      this.hurtTime = this.hurtTimeMaster;
      if (this.lives >= 0) {
        this.g.shake();
        this.g.spawn("Boom", { x: this.x, y: this.y, key: "boom" });
        this.g.sfx("hurt");
        return;
      }
      const x = this.x, y = this.y, w = this.w / 2;
      super.kill();
      this.p.initGameOver();
      this.g.sfx("land");
      this.p.bgCol = 3;
      this.g.shake();
      while (booms--) {
        this.g.addEvent({
          t: booms * 15,
          cb: () => {
            let rnd = this.g.H.rnd(-w, w);
            this.g.spawn("Boom", { x: x + rnd, y: y + rnd, key: "boom" });
          }
        });
      }
    }
    fall() {
      this.kill(0);
      if (this.lives < 0) {
        this.g.sfx("fall");
        this.p.initGameOver();
      }
    }
    shoot() {
      this.shotDelay = this.shotDelayTime;
      this.g.spawn("Bullet", { p: this.p, x: this.x + this.halfW, y: this.y });
      this.g.spawn("Circle", {
        x: this.x + this.halfW / 2.5,
        y: this.y - this.h / 2,
        i: "circle"
      });
      if (this.powerups > 0) {
        this.g.spawn("Bullet", { p: this.p, x: this.x - this.halfW / 2, y: this.y });
      }
      if (this.powerups > 1) {
        this.g.spawn("Bullet", { p: this.p, x: this.x + this.halfW, y: this.y, vy: -4, vx: -4 });
      }
      if (this.powerups > 2) {
        this.g.spawn("Bullet", { p: this.p, x: this.x + this.halfW, y: this.y, vy: -4, vx: 4 });
      }
      if (this.powerups > 3) {
        this.g.spawn("Bullet", { p: this.p, x: this.x + this.halfW / 2, y: this.y, vy: 6 });
      }
    }
    addPowerup() {
      this.powerups += 1;
      if (this.powerups > 4) {
        this.p.score += 50;
      }
    }
  };

  // src/game/ents/donut.js
  var Donut = class extends Sprite {
    constructor(g, o) {
      o.x = o.x || g.H.rnd(50, 250);
      o.i = "donut";
      o.frames = 1;
      o.scale = 3;
      super(g, o);
      this.shadow = true;
      this.group = "bonus";
      this.collidesWith = ["player"];
      this.y = o.y || -this.h;
      this.collected = false;
      g.ents.forEach((e) => {
        if (e.group === "baddies" && this.hit(e)) {
          this.remove = true;
        }
      });
    }
    update(dt) {
      super.update(dt);
      if (!this.p.gameOver) {
        this.y += this.p.bgSpeed;
      }
      if (this.y > this.g.h + this.h) {
        this.remove = true;
      }
      if (this.collected) {
        this.y += this.vy;
        this.vy += -0.2;
        if (this.x < this.g.w / 2) {
          this.x += 1;
        }
        if (this.x > this.g.w / 2) {
          this.x -= 1;
        }
        if (this.y < 0) {
          this.remove = true;
        }
      }
    }
    render() {
      this.g.draw.ctx.globalAlpha = 0.2;
      this.g.draw.img(this.g.imgs["circle_2_0"], this.x, this.y + 6);
      this.g.draw.ctx.globalAlpha = 1;
      super.render();
    }
    receiveDamage() {
      if (this.collected)
        return;
      this.collected = true;
      this.vy = -2 * this.p.bgSpeed;
      this.g.sfx("piano");
      this.g.spawn("Boom", { x: this.x + this.halfW, y: this.y + this.halfW, key: "boom", scale: 4, type: "spark", col: 8 });
      this.p.score += 20;
    }
  };

  // src/game/ents/powerup.js
  var Powerup = class extends Sprite {
    constructor(g, o) {
      o.i = "pup";
      o.frames = 2;
      o.scale = 3;
      super(g, o);
      this.vy = 1.5;
      this.vx = o.x < g.w / 2 ? 0.5 : -0.5;
      this.group = "bonus";
      this.collidesWith = ["player"];
      this.anims = { fly: { frames: [1, 2], rate: 0.2 } };
      this.changeAnim("fly");
    }
    update(dt) {
      super.update(dt);
      this.y += this.vy;
      this.x += this.vx;
      if (this.y > this.g.h + this.h) {
        this.remove = true;
      }
    }
    render() {
      this.g.draw.ctx.globalAlpha = 0.1;
      this.g.draw.img(this.g.imgs["circle_2_0"], this.x + this.halfW, this.y + 6);
      this.g.draw.ctx.globalAlpha = 1;
      super.render();
    }
    receiveDamage(o) {
      this.g.sfx("powerup");
      this.g.spawn("Boom", { x: this.x + this.halfW, y: this.y + this.halfW, key: "boom", scale: 4, type: "spark", col: 7 });
      if (!this.remove) {
        o.addPowerup();
      }
      this.remove = true;
    }
  };

  // src/game/ents/particle.js
  var Particle = class {
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
  };

  // src/game/ents/bullet.js
  var Bullet = class extends Sprite {
    constructor(g, o) {
      o.scale = 3;
      o.i = "bullet";
      super(g, o);
      this.vy = o.vy || -6;
      this.vx = o.vx || 0;
      this.group = "bullets";
      if (this.vy > 0) {
        this.i = g.imgs[`bullet_${this.scale}_flipy`];
      }
    }
    update(dt) {
      super.update(dt);
      this.y += this.vy;
      this.x += this.vx;
      if (this.isOffScreen()) {
        this.remove = true;
      }
    }
  };

  // src/game/ents/circle.js
  var Circle = class extends Sprite {
    constructor(g, o) {
      o.scale = 1;
      super(g, o);
      this.ttl = 0.02;
    }
    update(dt) {
      this.ttl -= dt;
      if (this.ttl < 0)
        this.kill();
      super.update(dt);
    }
  };

  // src/game/ents/boom.js
  var Boom = class {
    constructor(g, o) {
      this.g = g;
      this.type = o.type || "circle";
      this.col = o.col || 2;
      this.startX = o.x;
      this.startY = o.y;
      this.magnitude = o.m || 4;
      this.scale = 1;
      this.factor = o.factor || 0.5;
      if (o.p) {
        while (o.p--) {
          this.g.spawn("Particle", { x: o.x, y: o.y, col: o.col });
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
      if (!this.i)
        return;
      let s = this.i.width / 2, x = this.startX - s, y = this.startY - s, g = this.g;
      g.draw.img(this.i, x, y);
    }
  };

  // src/game/ents/button.js
  var Control = class extends Sprite {
    constructor(g, o) {
      if (!("col" in o))
        o.col = 7;
      if (!("clickCol" in o))
        o.clickCol = 3;
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
      this.x = o.x || g.w / 2 - o.w / 2;
      this.p = g.imgs[`font_${o.textCol}`];
      this.pHover = g.imgs[`font_${o.hoverCol}`];
      this.clicked = false;
      this.clickCol = o.clickCol;
      this.currentCol = o.col;
      this.clicked = false;
      this.textW = g.draw.textWidth(this.text, this.p) / 2;
      this.tX = o.x ? o.x + 20 : g.w / 2 - this.textW;
      this.origX = this.x;
      this.origY = o.y;
      if (!this.center) {
        this.tX = this.x + 4;
      }
      if (!o.noscroll) {
        this.y = this.g.h + this.h * 2;
      }
    }
    update() {
      this.hover = this.intersects(this.g.input.mx, this.g.input.my);
      if (this.y > this.origY) {
        this.y -= 2;
      }
      let hit = this.hover && this.g.input.touching;
      this.currentCol = this.hover ? this.clickCol : this.col;
      if (hit && this.cb && !this.clicked) {
        this.clicked = true;
        this.cb.call(this);
      }
    }
    render() {
      let font = this.hover ? this.pHover : this.p;
      if (this.col) {
        this.g.draw.ctx.globalAlpha = 0.3;
        this.g.draw.rect(
          this.x,
          this.y + 10,
          this.w,
          this.h,
          0
        );
        this.g.draw.ctx.globalAlpha = 1;
        this.g.draw.rect(
          this.x,
          this.y,
          this.w,
          this.h,
          this.currentCol
        );
      }
      this.g.draw.text(this.text, font, this.tX, this.y + 10);
    }
    intersects(mx, my) {
      return mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h;
    }
  };

  // src/game/ents/text.js
  var Text = class extends Sprite {
    constructor(g, o) {
      o.group = "text";
      o.w = 10;
      o.w = 10;
      o.o = o.o || 1;
      o.scale = o.scale || 2;
      o.col = o.col || 1;
      o.fade = o.fade || 0.01;
      super(g, o);
      for (let n in o) {
        this[n] = o[n];
      }
      this.g = g;
      this.p = g.H.mkFont(g, o.scale, o.col);
    }
    update() {
      if (this.y < 0 || this.o < 0)
        this.remove = true;
      this.o -= this.fade;
    }
    render() {
      if (this.o < 0)
        return;
      let d = this.g.draw;
      d.ctx.globalAlpha = this.o;
      d.text(this.text, this.p, this.x, this.y);
      d.ctx.globalAlpha = 1;
    }
  };

  // src/game/ents/baddie.js
  var Baddie = class extends Sprite {
    constructor(g, o) {
      o.hits = o.hits || 0;
      o.scale = o.scale || 2;
      o.shake = o.shake || false;
      o.score = o.score || o.scale * 10;
      o.flash = o.flash || false;
      o.hurtTimeMaster = o.hurtTimeMaster || 200;
      super(g, o);
      this.group = "baddies";
      this.collidesWith = ["bullets", "player"];
      this.shadow = { x: 0, y: this.halfW };
      this.p1 = this.p.p1;
    }
    update(dt) {
      super.update(dt);
      if (this.hurt) {
        this.hurtTime -= 1;
      }
      if (this.hurtTime < 0) {
        this.hurt = false;
        this.hurtTime = this.hurtTimeMaster;
      }
    }
    render() {
      if (this.shadow) {
        this.g.draw.ctx.globalAlpha = 0.2;
        this.g.draw.img(
          this.g.imgs["circle_2_0"],
          this.x + this.shadow.x,
          this.y + this.shadow.y
        );
        this.g.draw.ctx.globalAlpha = 1;
      }
      super.render();
    }
    receiveDamage(o) {
      o.kill();
      this.g.sfx("land");
      this.frame = 2;
      this.hits -= 1;
      this.g.spawn("Boom", {
        x: this.x + this.halfW,
        y: this.y + this.halfW,
        key: "boom",
        scale: 4,
        p: 3,
        col: 2,
        type: this.hits < 0 ? "circle" : "spark"
      });
      if (this.hits === -1) {
        if (this.shake) {
          this.g.shake("shake-fast");
        }
        if (this.flash) {
          this.p.bgCol = 2;
          this.g.addEvent({
            t: 2,
            cb: () => {
              this.p.bgCol = this.p.gameOver ? 3 : this.p.bgColMaster;
            }
          });
        }
        this.kill();
        this.p.score += this.scale * 10;
      } else {
        this.hurt = true;
        this.hurtTime = this.hurtTimeMaster;
      }
    }
  };

  // src/game/ents/bat.js
  var Bat = class extends Baddie {
    constructor(g, o) {
      o.x = o.x || g.H.rndArray([0, g.w]);
      o.i = o.i || "bat";
      o.frames = o.frames || 2;
      o.scale = o.scale || 5;
      o.hits = 1;
      super(g, o);
      this.vy = 2;
      this.vx = 0.5;
      this.y = o.y || -this.h;
      if (o.frames == 2) {
        this.anims = { flap: { frames: [1, 2], rate: 0.4 } };
        this.changeAnim("flap");
        this.shadow = {
          x: this.halfW,
          y: this.h
        };
      }
    }
    update(dt) {
      super.update(dt);
      this.y += this.vy;
      if (this.x > this.p1.x) {
        this.x -= this.vx;
        this.flip.x = false;
      } else if (this.x < this.p1.x) {
        this.x += this.vx;
        this.flip.x = true;
      }
      if (this.y > this.g.h + this.h) {
        this.remove = true;
      }
    }
  };

  // src/game/ents/hole.js
  var Hole = class extends Sprite {
    constructor(g, o) {
      o.x = g.H.rnd(50, 250);
      o.i = "hole";
      o.scale = 2;
      super(g, o);
      this.group = "baddies";
      this.collidesWith = ["player"];
      this.x = 0;
      this.reset(o.y);
    }
    reset(y = false) {
      this.y = y || -this.g.h;
      let scale = this.scale + 2;
      const key = `bridge_${this.scale}`;
      this.bridge = {
        x: this.g.H.rnd(30, this.g.w - 30),
        yOff: 10,
        key: `bridge_${scale}`,
        w: this.g.imgs[key].width * (scale / 2),
        h: this.g.imgs[key].height * (scale / 2)
      };
    }
    update(dt) {
      super.update(dt);
      if (!this.p.p1.dead) {
        this.y += this.p.bgSpeed;
      }
      if (this.y > this.g.h + this.h) {
        this.reset();
      }
      this.bridge.y = this.y - this.bridge.yOff;
    }
    render() {
      super.render();
      this.g.draw.img(this.g.imgs[this.bridge.key], this.bridge.x, this.bridge.y);
    }
    receiveDamage(o) {
      if (!o.hit(this.bridge)) {
        o.fall();
      }
      return;
    }
  };

  // src/game/ents/cactus.js
  var Cactus = class extends Baddie {
    constructor(g, o) {
      o.x = g.H.rnd(0, 15) * 16;
      o.i = "cactus";
      o.frames = 2;
      o.scale = 5;
      o.hits = 2;
      o.shake = true;
      o.flash = true;
      super(g, o);
      this.y = -this.h;
      g.ents.forEach((e) => {
        if (e.name === "hole" && this.hit(e)) {
          this.y = e.y - e.h;
        }
      });
    }
    update(dt) {
      super.update(dt);
      if (!this.p.gameOver) {
        this.y += this.p.bgSpeed;
      }
      if (this.y > this.g.h + this.h) {
        this.remove = true;
      }
    }
    receiveDamage(o) {
      super.receiveDamage(o);
      if (this.hits === -1 && (Math.random() > 0.5 || this.p.tutorial)) {
        this.g.spawn("Powerup", { p: this.p, x: this.x, y: this.y });
      }
    }
  };

  // src/game/ents/spider.js
  var Spider = class extends Baddie {
    constructor(g, o) {
      o.x = o.p.p1.x > g.w / 2 ? 0 : g.w;
      o.i = "spider";
      o.frames = 2;
      o.scale = 3;
      o.hits = 1;
      super(g, o);
      this.vy = -2;
      this.vx = 0.5;
      this.y = g.h + this.h;
      this.shadow = { x: this.halfW / 2, y: this.h / 2 };
      this.anims = { run: { frames: [1, 2], rate: 0.2 } };
      this.changeAnim("run");
    }
    update(dt) {
      super.update(dt);
      this.y += this.vy;
      if (this.x > this.p1.x) {
        this.x -= this.vx;
        this.flip.x = false;
      } else if (this.x < this.p1.x) {
        this.x += this.vx;
        this.flip.x = true;
      }
      if (this.hit(this.p.hole)) {
        this.vy = this.p.bgSpeed;
      }
      if (this.y < -this.h) {
        this.remove = true;
      }
    }
  };

  // src/game/ents/worm.js
  var Worm = class extends Baddie {
    constructor(g, o) {
      o.i = "worm";
      o.scale = 4;
      o.frames = 2;
      o.hits = 4;
      o.active = false;
      o.shake = true;
      o.flash = true;
      o.shadow = false;
      super(g, o);
      if (Math.random() > 0.5) {
        this.x = -this.halfW;
        this.vx = 1;
      } else {
        this.x = g.w - this.halfW;
        this.flip.x = true;
        this.vx = -1;
      }
      this.y = -this.h;
      g.ents.forEach((e) => {
        if (e.name === "hole" && this.hit(e)) {
          this.y = e.y - e.h;
        }
      });
      this.anims = {
        wait: { frames: [2], rate: 0.2 },
        bite: { frames: [1, 2], rate: 0.2 }
      };
      this.changeAnim("wait");
    }
    render() {
      let x = this.flip.x ? this.x + this.halfW : this.x - this.w;
      let i = this.fader > 0 ? "wormtail" : "wormtail_flipY";
      this.g.draw.img(this.g.imgs[i], x, this.y + this.halfW);
      super.render();
    }
    update(dt) {
      super.update(dt);
      this.fader = Math.sin((/* @__PURE__ */ new Date()).getTime() * 0.03);
      if (!this.active && this.y > this.g.h / 3 && Math.random() > 0.9) {
        this.active = true;
        this.changeAnim("bite");
        this.vx = this.flip.x ? -1 : 1;
        this.vy = this.g.H.rndArray([0, -0.5, 0.5]);
      }
      if (this.active) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.hit(this.p.hole)) {
          this.vy *= -1;
        }
      }
      if (!this.p.gameOver) {
        this.y += this.p.bgSpeed;
      }
      if (this.y > this.g.h + this.h) {
        this.remove = true;
      }
    }
  };

  // src/game/ents/boss.js
  var Boss = class extends Baddie {
    constructor(g, o) {
      o.i = "boss";
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
      this.anims = { run: { frames: [1, 2], rate: 0.2 } };
      this.changeAnim("run");
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
      } else {
        this.x += this.vx;
        if (this.x < 0 || this.x > this.g.w - this.w) {
          this.vx *= -1;
        }
      }
    }
    render() {
      super.render();
      this.g.draw.img(this.g.imgs["13"], this.x + 13, this.y + 35 + this.frame * 2);
    }
    receiveDamage(o) {
      super.receiveDamage(o);
      if (this.hits === -1) {
        this.die();
      } else {
        this.g.spawn("Bat", { p: this.p, x: this.x, y: this.y, scale: 4 });
      }
    }
    die() {
      this.g.ents.forEach((e) => {
        if (e.group === "baddies") {
          this.kill();
        }
      });
      let booms = 10;
      let w = this.w / 2, x = this.x, y = this.y;
      while (booms--) {
        this.g.addEvent({
          t: booms * 10,
          cb: () => {
            let rnd = this.g.H.rnd(-w, w);
            this.g.shake();
            this.g.sfx("land");
            this.g.spawn("Boom", { x: x + rnd, y: y + rnd, key: "boom" });
          }
        });
      }
      this.g.addEvent({
        t: 250,
        cb: () => {
          this.p.updateHiScore();
          this.g.changeScene("Win");
        }
      });
    }
  };

  // src/game/ents/obj.js
  var Obj = class extends Sprite {
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
      this.i = this.g.imgs[this.g.H.rndArray([
        "bg_skull",
        "bg_skull_flip",
        "bg_bone",
        "bg_bone_flip",
        "bg_grass",
        "bg_grass",
        "bg_grass"
      ])];
    }
  };

  // src/index.js
  base_default.scenes = { Loader: Loader2, Title, Help, Play, Tut, Win, Test };
  base_default.ents = { Particle, P1, Bullet, Circle, Boom, Bat, Button: Control, Text, Hole, Cactus, Donut, Spider, Powerup, Worm, Obj, Boss };
  new Game(base_default).init();
})();

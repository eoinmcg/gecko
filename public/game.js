(() => {
  // src/game/data/images.js
  var images_default = { "bat": "R0lGODlhEAAGAMIFAAAAAL8uNOuIMeuJMf7+/v///////////yH5BAEKAAcALAAAAAAQAAYAAAMdeEdM+vAAEEidqjkFNHgDIWxZ9z1ahD0msUbcGScAOw==", "bg": "R0lGODlhIgAiAIABAAAAAP///yH5BAEKAAEALAAAAAAiACIAAAJOhIOpy20PmpwKHoqZzXzBDgZfmG0kZp6TFanr6Dpw7M10Yt9IrvN3qtv5YkPiI1i7IEVFFWvJbJKeSyBSesJOj9BoC6oFUa/WXpgzDj4KADs=", "bg2": "R0lGODlhIgAiAIABABMbJP///yH5BAEKAAEALAAAAAAiACIAAAJ8jG8AyKjbYoLyvBoVtno7unXeJFbleIXgGJxZyrrNs2K0Tddzbl7wnrtxhLJW8Hgcfogd5AsSVJJ+DGdVp+LtWMPihEvyeIEo7LNs3oqpOHT6iu4lszUku8u0a5dRo36Ppyc3dwUIZFg45ndHpgJmVPao+AU2KRTzthhRAAA7", "bone": "R0lGODlhDwAHAIAAAP///////yH5BAEKAAEALAAAAAAPAAcAAAITDBCpena40pu0Ilsd3lE+1zFIAQA7", "bridge": "R0lGODlhCgAYAMIFAEk8K6NkIqRkIuqJMeuJMf///////////yH5BAEKAAcALAAAAAAKABgAAAMtKLo7AkwBEtkAOOdQ26uA0wlid2kaNzpQFI4kfKKYasqfW1Z7NNM2Xo7xWskSADs=", "bullet": "R0lGODlhBAAIAMIDAL4mM+uJMffia////////////////////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAQALAAAAAAEAAgAAAMNSAA6siKwIEm1jOjNEgA7", "cactus": "R0lGODlhDAAIAMIEAESJGqPOJ/7+/v7//v///////////////yH5BAEKAAQALAAAAAAMAAgAAAMcSBraTiGAFicbQTgGoZyeFUkUuXwnIJojGJZTAgA7", "circle": "R0lGODlhEAAQAIABAP///+BviyH5BAEKAAEALAAAAAAQABAAAAIdjA2px6G/GJzgUIoudLr7D4aix32ZeWpN11gbUwAAOw==", "donut": "R0lGODlhCAAIAMIEAEk8K05CNOByjeuJMf///////////////yH5BAEKAAQALAAAAAAIAAgAAAMXSAEsQI7JOcZkhIB4meVAZVXhQIgjkQAAOw==", "dot": "R0lGODlhAQABAIABAP///zGi8iH5BAEKAAEALAAAAAABAAEAAAICRAEAOw==", "firefly": "R0lGODlhEAAGAKECAOuJMffia////////yH5BAEKAAMALAAAAAAQAAYAAAIbzI6GO+HfnmzA1RNqVkE4j3kd14lY6SSQmg4FADs=", "font": "R0lGODlhmwAFAIABAAAAAEk8KyH5BAEKAAEALAAAAACbAAUAAAJ4hGOAd6sZFpowPhrxhZz5x2ji5pRTyVEfulaWRV6vfNayksV5O/b53NMBcbjX0JY50pYwkFHDAxGTTlsUpZIadRViYzo1tVazcfHHRSOVWx9UyKK2wym6+nRei47PtkTbAbgTc1X3VvOXtfXFhkfmpVUWqZiSZFkAADs=", "gecko": "R0lGODlhCAAIAMIEABsmMr0oM+Bvi99wiv///////////////yH5BAEKAAcALAAAAAAIAAgAAAMXeAczoOOQRtQRIgRsMW+XJnQeR0KWZiUAOw==", "grass": "R0lGODlhCAAHAIABAAAAAP///yH5BAEKAAEALAAAAAAIAAcAAAIOjA2neeyRQIRwVsmQPAUAOw==", "heart": "R0lGODlhBQAFAIABAL4mMzGi8iH5BAEKAAEALAAAAAAFAAUAAAIIDGygu3mBQgEAOw==", "hole": "R0lGODlhRAAcAKEDAAAAAJycnJ2dnf///yH5BAEKAAMALAAAAABEABwAAAJznC0pd+rPxpvURVYT2HX7D2TgSIaZUHpHym5rC7sva8TlbNN1O+R37+MBacHRsHiLHZFLJKhJgvqkTgC1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6PfcAObAB1Oi05wE4OPG3J1FxcTGh2OjYwIhRAAA7", "pointer": "R0lGODlhBAAFAKECAAAAAP////fia/fiayH5BAEKAAIALAAAAAAEAAUAAAIIjGWAEKIsIigAOw==", "pup": "R0lGODlhDgAEAKEDAOqKMfbia////v///yH5BAEKAAMALAAAAAAOAAQAAAIS1H6GKAIQWnvRPBiGo/HQ9Q0FADs=", "skull": "R0lGODlhBAAEAIAAAP///////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAAEALAAAAAAEAAQAAAIFhB2Ql1kAOw==", "spark": "R0lGODlhDgAOAIAAAP///////yH5BAEKAAEALAAAAAAOAA4AAAIdjA9wy8md4jNRwloXxnT7v3WfBj7hdE6BoyIKUwAAOw==", "spider": "R0lGODlhEAAIAMIEAL4mM70qOTGi8v7+/////////////////yH5BAEKAAcALAAAAAAQAAgAAAMpeBAiASfKudqL1cHYmsxXNIhTJ0gCEREneYzHqR7qma72xMlr3JYxYAIAOw==", "title": "R0lGODlhNgAWAMIEAL4mM+uJMaPOJ/fia////////////////yH5BAEKAAQALAAAAAA2ABYAAAPFSLrc/jDKqYYlNuM8tucdJW4dSF5oyY3TtbhVGH8qKwkCgev4vi89YO5ne/iGPSQjqDgWIU4ib6l0Ph1JZDA7PTKv1G2SJ+6Owei0es1uiwLwuALuiMsJdjo+P+fv8356DIB9doV3hH+BAX11jHuND4KQDXqGlJORlo+Og5wLmwCiAAyiDqOjCqimC6yqq6+rqa2kDbKxs6+lsASyrL+1u7q2wb3FrrTAw8jLxcPPxqezt8aozbjI2bzA1N213LnRydPfAAkAOw==", "worm": "R0lGODlhEAAIAMIFAL4mM78uNL8wOp2dnZ6env///////////yH5BAEKAAcALAAAAAAQAAgAAAMneEc8+lCRQmmEs4igg2SEUgVAEXhZdVRskW2duq4jd9JRK7OiNRcJADs=" };

  // src/game/data/sfx.js
  var sfx_default = {
    hit: [, , 537, 0.02, 0.02, 0.22, 1, 1.59, -6.98, 4.97],
    piano: [0.9, 0.8, 270, , 0.1, , 1, 1.5, , , , , , , , 0.1, 0.01],
    // jump: [.1,,921,.04,.03,.52,,2.44,,.5,,,.05,1.4,57,.9,,.33,.18,.47],
    land: [, , 129, 0.01, , 0.15, , , , , , , , 5],
    thunder: [1, , 979, 0.01, 0.02, 0.52, 1, 2.52, 0.5, 0.7, , , 0.02, 1.2, 7, 0.2, 0.13, 0.48, 0.01, 0.44],
    fall: [0.5, , 925, 0.04, 0.3, 0.6, 1, 0.3, , 6.27, -184, 0.09, 0.17],
    // speak: [,,1236,.01,.01,.02,1,.13,,-6.5,,,,.2,,,,.14,.02,.25],
    // win: [1.06,,299,,.3,.23,,.04,-2.6,4.3,,,.19,,,,,.74,.17,.4],
    // tap: [1,, 0.1953,, 0.1186, 0.2659,,,,,,,,,,,,, 1,,, 0.1,, 0.5],
    powerup: [1.1, , 698, 0.07, 0.23, 0.25, , 1.5, , , 103, 0.07, 0.09, , , 0.1, , 0.5, 0.22, 0.39]
    // gameover: [1.04,,612,.01,.17,.41,,.3,,,,,.17,,,.2,,.62,.25,.27],
  };

  // src/game/data/base.js
  var base_default = {
    title: "Gecko Blaster",
    start: "Title",
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

  // package.json
  var version = "0.1";

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
    g.imgs["bg_skull"] = g.draw.rotate(g.draw.resize(g.imgs["skull"], 6, 0.1), 4.4);
    g.imgs["bg_skull_flip"] = g.draw.flip(g.imgs["bg_skull"], 1, 0);
    g.imgs["bg_bone"] = g.draw.rotate(g.draw.resize(g.imgs["bone"], 2, 0.1), 4.4);
    g.imgs["bg_bone_flip"] = g.draw.flip(g.imgs["bg_bone"], 1, 0);
    g.imgs["bg_grass"] = g.draw.resize(g.imgs["grass"], 4, 0.2);
    g.SONG = [[[, 0, 77, , , 0.7, 2, 0.41, , , , , , , , 0.06], [, 0, 43, 0.01, , 0.3, 2, , , , , , , , , 0.02, 0.01], [, 0, 170, 3e-3, , 8e-3, , 0.97, -35, 53, , , , , , 0.1], [0.8, 0, 270, , , 0.12, 3, 1.65, -2, , , , , 4.5, , 0.02], [, 0, 86, , , , , 0.7, , , , 0.5, , 6.7, 1, 0.05], [, 0, 41, , 0.05, 0.4, 2, 0, , , 9, 0.01, , , , 0.08, 0.02], [, 0, 2200, , , 0.04, 3, 2, , , 800, 0.02, , 4.8, , 0.01, 0.1], [0.3, 0, 16, , , 0.3, 3]], [[[1, -1, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33], [3, 1, 22, , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, , , , 24, , , , , , , , , , , , , , , , , , , , , , , , 22, , 22, , 22, , , ,], [5, -1, 21, , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, , , , 23, , , , , , , , , , , , , , , , , , , , , , , , 24, , 23, , 21, , , ,], [, 1, 21, , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, , , , 23, , , , , , , , , , , , , , , , , , , , , , , , 24, , 23, , 21, , , ,]], [[1, -1, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33], [3, 1, 24, , , , , , , , 27, , , , , , , , , , , , , , , , 27, , , , 24, , , , 24, , , , , , , , 27, , , , , , , , , , , , , , , , 24, , 24, , 24, , , ,], [5, -1, 21, , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, , , , 23, , , , , , , , , , , , , , , , , , , , , , , , 24, , 23, , 21, , , ,], [, 1, 21, , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, , , , 23, , , , , , , , , , , , , , , , , , , , , , , , 24, , 23, , 21, , , ,], [6, 1, , , 34, 34, 34, , , , , , 34, 34, , , , , 34, , , , 34, 34, , , , , 34, , , , 34, , , , 34, 34, 34, , , , , , 34, , , , , , 34, 34, , , 34, 34, , , , , , , , , 34, 34], [4, 1, , , , , , , 24, , , , , , 24, , 24, , , , 24, , , , 24, , , , , , , , , , , , , , , , 24, , , , , , 24, , 24, , , , 24, , , , 24, , , , , , , , , ,]], [[1, -1, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 23, 23, 35, 23, 23, 36, 23, 23, 35, 23, 23, 36, 23, 23, 35, 35, 23, 23, 35, 23, 23, 35, 23, 23, 36, 23, 23, 35, 23, 23, 36, 36], [5, -1, 21, , , 19, , , 21, , , , , , , , , , 21, , , 19, , , 17, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,], [3, 1, 24, , , 24, , , 24, , , , , , , , , , 24, , , 24, , , 24, , , , 24.75, 24.5, 24.26, 24.01, 24.01, 24.01, , , , , 25, , , , , , , , 25, , , , , , , , 25, , , , , , , , 25, 25, 25, 25], [4, -1, , , , , , , , , , , , , , , , , , , , , , , , , , , 24.75, 24.5, 24.26, 24.01, 24.01, 24.01, 24.01, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, , 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24], [7, -1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 23, , 21, 23, , 35, , 23, , 21, 23, , 35, , 35, , 23, , 21, 23, , 35, , 21, 23, , 35, , 21, 23, , ,], [6, 1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 34, 36, 34, , 33, 34, 34, 36, 31, 36, 34, , 31, 34, 32, , 33, 36, 34, , 31, 34, 34, 36, 33, 36, 33, , 31, , ,]], [[1, -1, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 21, 21, 33, 33, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 29], [4, 1, 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, , 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24, 24, , , 24, 24, , 24, , 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24], [7, -1, 21, , 19, 21, , 33, , 21, , 19, 21, , 33, , 33, , 21, , 19, 21, , 33, , 21, , 19, 21, , 33, , 33, , 17, , 17, 17, 29, 17, 17, 29, 17, , 17, 17, 29, 17, 17, 29, 17, , 17, 17, 29, 17, 17, 29, 17, , 17, 17, 29, 17, 17, 29], [2, 1, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, , , , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, 34, 34, , 34, , ,], [6, 1, , , 36, , , , , , 36, , 36, , , , , , , , 36, , , , , , 36, , 36, , , , , , , , 36, , , , , , , , , , , , , , , , 36, , , , , , 36, , 36, , , , , ,], [3, 1, , , , , 25, , , , , , , , 25, , , , , , , , 25, , , , , , , , 25, 25, 25, 25, , , , , 25, , , , , 25, , , 25, , , , , , , , 25, , , , , , , , 25, 25, 25, 25]], [[1, -1, 14, 14, 26, 14, 14, 26, 14, 14, 26, 14, 14, 26, 14, 14, 26, 26, 14, 14, 26, 14, 14, 26, 14, 14, 26, 14, 14, 26, 14, 14, 26, 26, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 17, 17, 29, 29, 19, 19, 31, 19, 19, 31, 19, 19, 31, 19, 19, 31, 19, 19, 31, 31], [4, 1, 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, , 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 36, , 24, 24, , 24, 24, , 24, 24, 24, 24, , 24, 24, , 24, 24], [7, -1, 14, , 14, 14, 26, 14, 14, 26, 14, , 14, 14, 26, 14, 14, 26, 14, , 14, 14, 26, 14, 14, 26, 14, , 14, 14, 26, 14, 14, 26, 17, , 17, 17, 29, 17, 17, 29, 17, , 17, 17, 29, 17, 17, 29, 19, , 19, 19, 31, 19, 19, 31, 19, , 19, 19, 31, 19, 19, 31], [2, 1, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, , , , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, 36, 36, , 36, , ,], [3, 1, , , , , 25, , , , , , , , 25, , , , , , , , 25, , , , , , , , 25, 25, 25, 25, , , , , 25, , , , , , , , 25, , , , , , , , 25, , , , , , , , 25, 25, 25, 25], [6, 1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 34, , , , , , 34, , 34, , , , , , , , 34, , , , , , 34, , 34, , , , , ,]]], [0, 1, 1, 2, 3, 4, 4]];
    document.querySelector("#c").style.cursor = "none";
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

  // src/lib/zzfxm.js
  var zzfx = (...t) => zzfxP(zzfxG(...t));
  var zzfxP = (...t) => {
    let e = zzfxX.createBufferSource(), f = zzfxX.createBuffer(t.length, t[0].length, zzfxR);
    t.map((d, i) => f.getChannelData(i).set(d)), e.buffer = f, e.connect(zzfxX.destination), e.start();
    return e;
  };
  zzfxG = (q = 1, k = 0.05, c2 = 220, e = 0, t = 0, u = 0.1, r = 0, F = 1, v = 0, z = 0, w = 0, A = 0, l = 0, B = 0, x = 0, G = 0, d = 0, y = 1, m = 0, C = 0) => {
    let b = 2 * Math.PI, H2 = v *= 500 * b / zzfxR ** 2, I = (0 < x ? 1 : -1) * b / 4, D = c2 *= (1 + 2 * k * Math.random() - k) * b / zzfxR, Z = [], g = 0, E = 0, a = 0, n = 1, J = 0, K = 0, f = 0, p, h;
    e = 99 + zzfxR * e;
    m *= zzfxR;
    t *= zzfxR;
    u *= zzfxR;
    d *= zzfxR;
    z *= 500 * b / zzfxR ** 3;
    x *= b / zzfxR;
    w *= b / zzfxR;
    A *= zzfxR;
    l = zzfxR * l | 0;
    for (h = e + m + t + u + d | 0; a < h; Z[a++] = f)
      ++K % (100 * G | 0) || (f = r ? 1 < r ? 2 < r ? 3 < r ? Math.sin((g % b) ** 3) : Math.max(Math.min(Math.tan(g), 1), -1) : 1 - (2 * g / b % 2 + 2) % 2 : 1 - 4 * Math.abs(Math.round(g / b) - g / b) : Math.sin(g), f = (l ? 1 - C + C * Math.sin(2 * Math.PI * a / l) : 1) * (0 < f ? 1 : -1) * Math.abs(f) ** F * q * zzfxV * (a < e ? a / e : a < e + m ? 1 - (a - e) / m * (1 - y) : a < e + m + t ? y : a < h - d ? (h - a - d) / u * y : 0), f = d ? f / 2 + (d > a ? 0 : (a < h - d ? 1 : (h - a) / d) * Z[a - d | 0] / 2) : f), p = (c2 += v += z) * Math.sin(E * x - I), g += p - p * B * (1 - 1e9 * (Math.sin(a) + 1) % 2), E += p - p * B * (1 - 1e9 * (Math.sin(a) ** 2 + 1) % 2), n && ++n > A && (c2 += w, D += w, n = 0), !l || ++J % l || (c2 = D, v = H2, n = n || 1);
    return Z;
  };
  zzfxV = 0.3;
  zzfxR = 44100;
  zzfxX = new (window.AudioContext || webkitAudioContext)();
  var zzfxM = (n, f, t, e = 125) => {
    let l, o, z, r, g, h, x, a, u, c2, d, i, m, p, G, M = 0, R = [], b = [], j = [], k = 0, q = 0, s = 1, v = {}, w = zzfxR / e * 60 >> 2;
    for (; s; k++)
      R = [s = a = d = m = 0], t.map((e2, d2) => {
        for (x = f[e2][k] || [0, 0, 0], s |= !!f[e2][k], G = m + (f[e2][0].length - 2 - !a) * w, p = d2 == t.length - 1, o = 2, r = m; o < x.length + p; a = ++o) {
          for (g = x[o], u = o == x.length + p - 1 && p || c2 != (x[0] || 0) | g | 0, z = 0; z < w && a; z++ > w - 99 && u ? i += (i < 1) / 99 : 0)
            h = (1 - i) * R[M++] / 2 || 0, b[r] = (b[r] || 0) - h * q + h, j[r] = (j[r++] || 0) + h * q + h;
          g && (i = g % 1, q = x[1] || 0, (g |= 0) && (R = v[[c2 = x[M = 0] || 0, g]] = v[[c2, g]] || (l = [...n[c2]], l[2] *= 2 ** ((g - 12) / 12), g > 0 ? zzfxG(...l) : [])));
        }
        m = G;
      });
    return [b, j];
  };

  // src/engine/game.js
  var Game = class {
    constructor(o) {
      const defaults = { w: base_default.w, h: base_default.h };
      let ua = navigator.userAgent.toLowerCase();
      this.zzfx = zzfx;
      this.zzfxM = zzfxM;
      this.zzfxP = zzfxP;
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
      this.score = 0;
      this.hiScore = 20;
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
          Setup(this);
          this.favIcon(this.draw.resize(this.imgs.gecko, 8));
          document.querySelector("#l").style.display = "none";
          this.c.style.display = "block";
          this.loop();
        }, 400);
      });
    }
    scaleUp(key, colors = []) {
      for (let i = 8; i > 0; i -= 1) {
        let cols = this.o.pal.length;
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
      zzfx(...this.data.sfx[key]);
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

  // src/game/scenes/title.js
  var Title = class {
    constructor(g) {
      this.g = g;
      this.i = g.draw.resize(this.g.imgs.title, 4);
      this.shadow = g.draw.color(this.i, g.data.pal[0], 0.2);
      this.canStart = false;
      this.bgPos = 0;
      this.bgSpeed = 0.25;
      g.spawn("Button", {
        y: this.g.h - 130,
        clickCol: 11,
        col: 4,
        text: "PLAY",
        cb: () => {
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
            w: 40,
            text: "ABOUT",
            cb: () => {
              g.changeScene("Help");
            }
          });
        }
      });
      this.bling();
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
      g.draw.img(g.imgs["pointer"], g.input.mx, g.input.my);
    }
    bling() {
      let coords = this.g.H.rndArray([
        [180, 125],
        [120, 200],
        [60, 150]
      ]);
      this.g.addEvent({
        t: this.g.H.rnd(150, 200),
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
      this.g.draw.text("CODE AND GFX", this.f3, 50, 150);
      this.g.draw.text("BY EOINMCG", this.f2, 50, 180);
      this.g.draw.text("MUSIC", this.f3, 50, 250);
      this.g.draw.text("DEPP. UNKNOWN", this.f2, 50, 280);
      this.g.draw.text("COMPOSER", this.f2, 50, 310);
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
      this.score = 0;
      this.dist = 0;
      g.plays += 1;
      this.offset = {
        x: 0,
        y: 0
      };
      this.scoreFont = g.H.mkFont(g, 4, 2);
      this.gameOver = false;
      g.tune = g.zzfxM(...g.SONG);
      g.audio = g.zzfxP(...g.tune);
      g.audio.loop = true;
      this.hole = this.g.spawn("Hole", { p: this, y: -g.h * 3 });
      this.allBaddies = ["Cactus", "Bat", "Spider", "Worm"];
      this.baddies = [];
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
      g.draw.text(g.H.pad(score), this.scoreFont, false, 20);
      if (this.gameOver && !this.g.mobile) {
        this.g.draw.img(this.g.imgs["pointer"], this.g.input.mx, this.g.input.my);
      }
    }
    initGameOver() {
      if (this.gameOver)
        return;
      this.g.sfx("thunder");
      try {
        this.g.audio.stop();
      } catch (e) {
        console.log(e);
      }
      this.gameOver = true;
      this.g.addEvent({
        t: 100,
        cb: () => {
          this.spawnReplay();
        }
      });
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
      } else if (this.bgSpeed < 3) {
        this.bgSpeed += 0.5;
      }
    }
    spawn() {
      if (this.gameOver)
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
    offScreen() {
      return this.x < 0 || this.x > W - this.w || this.y < 0 || this.y > H - this.h;
    }
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
    }
    receiveDamage(o) {
      if (o.name === "cactus") {
        this.kill();
      }
    }
    kill(booms = 3) {
      const x = this.x, y = this.y, w = this.w / 2;
      super.kill();
      this.p.initGameOver();
      this.g.sfx("land");
      this.g.shake();
      this.p.bgCol = 3;
      this.g.shake;
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
      this.g.sfx("fall");
      this.p.initGameOver();
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
      this.y = this.g.h + this.h * 2;
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
      o.x = g.H.rndArray([0, g.w]);
      o.i = "bat";
      o.frames = 2;
      o.scale = 5;
      o.hits = 2;
      super(g, o);
      this.vy = 2;
      this.vx = 0.5;
      this.y = -this.h;
      this.anims = { flap: { frames: [1, 2], rate: 0.4 } };
      this.changeAnim("flap");
      this.shadow = {
        x: this.halfW,
        y: this.h
      };
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
      this.bridge.y = this.y - this.bridge.yOff;
      if (this.y > this.g.h + this.h) {
        this.reset();
      }
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
      o.x = g.H.rndArray([0, g.w]);
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
  base_default.scenes = { Title, Help, Play, Tut };
  base_default.ents = { Particle, P1, Bullet, Circle, Boom, Bat, Button: Control, Text, Hole, Cactus, Donut, Spider, Powerup, Worm, Obj };
  new Game(base_default).init();
})();
//! ZzFXM (v2.0.3) | (C) Keith Clark | MIT | https://github.com/keithclark/ZzFXM

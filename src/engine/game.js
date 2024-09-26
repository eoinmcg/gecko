import Data from "../game/data/base";
// import Stats from "../lib/stats";
import Loader from "./loader";
import resize from "./resize";
import Input from "./input";
import Draw from "./draw";
import H from "./helpers";
import P8 from "../lib/p8.js";

import Setup from '../game/setup.js'

// import { zzfx, zzfxM, zzfxP } from "../lib/zzfxm";
import zzfx from "../lib/zzfx";

export default class Game {
  constructor(o) {
    const defaults = { w: Data.w, h: Data.h };

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
    this.framePrev = H.timeStamp();
    this.sceneName = o.start;
    this.H = H;

    this.scenes = o.scenes;
    this.availEnts = o.ents;

    let hi = 500;
    try {
      hi = parseInt(window.localStorage.getItem('GBhi'), 10) || 500;
    } catch (e) {
      console.log(e);
    }
    this.hiScore = hi;
    this.plays = 0;

    this.ents = [];
    this.imgs = [];
    this.events = [];
    this.H = H;

    this.mute = false;
    this.pause = false;
    window.G = this;
  }

  init() {
    const loader = new Loader(this.o.i);

    this.c = document.querySelector('#c');
    this.input = new Input(this.c, this);
    document.title = this.o.title;
    document.body.classList.add('loading');

    // this.stats = new Stats();
    // this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    // document.body.appendChild(this.stats.dom);

    loader.start().then((imgs) => {
      this.imgs = imgs;
      window.setTimeout(() => {
        this.c.classList.add('active');
        this.draw = new Draw(this.o.w, this.o.h, this.o.pal);
        this.scene = new this.scenes[this.sceneName](this);
        this.scaleUp('dot', [0, 2, 3, 8, 11]);
        this.scaleUp('circle', [0, 2, 3, 8, 11]);
        this.scaleUp('bridge');
        this.scaleUp('spark', [0, 2, 3, 8, 11]);
        document.body.classList.remove('loading');
        Setup(this);

        this.track1 = new P8(this.p8S, this.p8M);
        this.track2 = new P8(this.p8S2, this.p8M2);
        this.favIcon(this.draw.resize(this.imgs.gecko, 8));
        document.querySelector('#l').style.display = 'none';
        this.c.style.display = "block";
        this.loop();
      }, 2000);
    });
  }

  scaleUp(key, colors = []) {
    for (let i = 8; i > 0; i -= 1) {
      if (colors.length) {
        colors.forEach((col) => {
        let img = this.draw.color(this.imgs[key], this.o.pal[col]);
        this.imgs[`${key}_${i}_${col}`] = this.draw.resize(img, i);
        })
      } else {
          this.imgs[`${key}_${i}`] = this.draw.resize(this.imgs[key], i);
      }
    }
  }

  sfx(key) {
    if (this.mute) return;
    zzfx(...this.data.sfx[key]);
  }

  favIcon(i) {
    let c = document.createElement('canvas'), ctx = c.getContext("2d"), l = document.createElement('link');
    c.width = 64;
    c.height = 64;
    ctx.drawImage(i, 0, 0);
    l.type = 'image/x-icon';
    l.rel = 'shortcut icon';
    l.href = c.toDataURL('image/x-icon');
    document.getElementsByTagName('head')[0].appendChild(l);
  }

  changeScene(scene, c = 'flip') {
    this.c.classList.add(c);
    window.setTimeout(() => {
      this.ents = [];
      this.events = [];
      this.c.classList.remove(c);
      this.scene = new this.scenes[scene](this);
    }, 300);
  }

  loop() {
    // this.stats.begin();
    this.frameCurr = H.timeStamp();
    this.dt = this.dt + Math.min(1, (this.frameCurr - this.framePrev) / 1000);

    if (!this.pause) {
      this.update(this.frameStep);
      this.render();
    }

    this.framePrev = this.frameCurr;

    if (this.input.freshKeys.KeyS) {
      this.screenshot();
    }
    if (this.input.freshKeys.KeyM) {
      console.log('MUTE', this.audio.stop());
      this.mute = !this.mute;
      if (this.mute && this.audio) {
        this.audio.stop();
      }
    }
    if (this.input.freshKeys.KeyP) {
      this.pause = !this.pause;
    }
    this.input.freshKeys = [];
    // this.stats.end();
    requestAnimationFrame(() => this.loop());
  }

  update(step) {
    if (this.c.classList.contains("flip")) return;
    this.fader = Math.sin(new Date().getTime() * 0.005);
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

  shake(n = 'shake') {
    this.c.classList.add(n);
    this.addEvent({
      t: 50,
      cb: () => {
        this.c.className = '';
      }
    })
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
        this.spawn('Text', {x: x, y: y, text: text, col: col, o: 5, scale: scale});
      }
    });
  }

  screenshot() {
    this.c.toBlob((blob) => {
      saveBlob(blob, `screencapture-${this.w}x${this.h}.png`);
    });

    const saveBlob = (function() {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      return function saveData(blob, fileName) {
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
      };
    }());
  }
}

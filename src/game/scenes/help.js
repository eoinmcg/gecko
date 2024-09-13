export default class Help {
  constructor(g) {
    this.g = g;


    this.f = g.H.mkFont(g, 5, 4);
    this.f2 = g.H.mkFont(g, 3, 2);
    this.f3 = g.H.mkFont(g, 3, 1);

    g.spawn('Button', {
      y: this.g.h - 90,
      clickCol: 11,
      col: 4,
      text: 'BACK',
      cb: () => {
        g.changeScene('Title');
      }
    });

    g.spawn('Button', {
      x: 45,
      y: 265,
      size: 3,
      noscroll: true,
      textCol: 1,
      clickCol: 0,
      col: false,
      w: 120,
      text: 'SOURCE',
      cb: () => {
        window.location.href = 'https://snabisch.itch.io/free-music-sequences-for-pico-8';
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

    this.g.draw.text('CREDITS', this.f, false, 20);
    this.g.draw.text('CODE AND GFX', this.f3, 50, 90);
    this.g.draw.text('BY EOINMCG', this.f2, 50, 120);

    this.g.draw.text('MUSIC', this.f3, 50, 180);
    this.g.draw.text('BY SNABISCH', this.f2, 50, 210);

    g.ents.forEach((e) => {
      e.render();
    });
    g.draw.img(g.imgs['pointer'], g.input.mx, g.input.my);

  }
}


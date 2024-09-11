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
    this.g.draw.text('CODE AND GFX', this.f3, 50, 150);
    this.g.draw.text('BY EOINMCG', this.f2, 50, 180);

    this.g.draw.text('MUSIC', this.f3, 50, 250);
    this.g.draw.text('DEPP. UNKNOWN', this.f2, 50, 280);
    this.g.draw.text('COMPOSER', this.f2, 50, 310);

    g.ents.forEach((e) => {
      e.render();
    });
    g.draw.img(g.imgs['pointer'], g.input.mx, g.input.my);

  }
}


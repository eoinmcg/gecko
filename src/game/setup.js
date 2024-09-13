import {version} from '../../package.json';

export default function Setup(g) {
  g.imgs['bg'] = mkBg(g, g.imgs['bg'], 8, 0.2);
  g.imgs['bg2'] = mkBg(g, g.imgs['bg2'], 3, 0.17);
  g.imgs['pointer'] = g.draw.resize(g.imgs['pointer'], 4);
  g.imgs['hole'] = mkHole(g, g.imgs['hole']);
  g.imgs['wormtail'] = mkTail(g, 4);
  g.imgs['wormtail_flipX'] = g.draw.flip(g.imgs['wormtail'], 1);
  g.imgs['wormtail_flipY'] = g.draw.flip(g.imgs['wormtail'], 0, 1);
  g.imgs['titleFont'] = g.H.mkFont(g, 8, 2);
  g.imgs['_titleFont'] = g.H.mkFont(g, 8, 0);

  g.imgs['bg_skull'] = g.draw.rotate(g.draw.resize(g.imgs['skull'], 6, 0.1), 4.4);
  g.imgs['bg_skull_flip'] = g.draw.flip(g.imgs['bg_skull'], 1, 0);
  g.imgs['bg_bone'] = g.draw.rotate(g.draw.resize(g.imgs['bone'], 2, 0.1), 4.4);
  g.imgs['bg_bone_flip'] = g.draw.flip(g.imgs['bg_bone'], 1, 0);

  g.imgs['bg_grass'] = g.draw.resize(g.imgs['grass'], 4, 0.2);
  g.imgs['13'] = g.draw.resize(g.imgs['13'], 3, 0.5);


g.p8S =
`000e00001776217760177601776017762177601776017760177621776017762177601e7621e7601f7621f7601f7601f7601f7621f7601c7621c7601e7621e7601a7621a7601c7621c76019762197601a7621a760
000e00000b2200b22017220172200b2200b22017220172200b2200b22017220172200b2200b22017220172200b2200b22017220172200b2200b22017220172200b2200b22017220172200b2200b2201722017220
000e00001a7621a7601a7601a7601a7621a7601a7601a7601a7621a7601a7621a76021762217602276222760227602276022762227601f7621f76021762217601d7621d7601f7621f7601c7621c7601d7621d760
000e00000e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a2200e2200e2201a2201a220
010e00000c053000003f215000000c053000003f215000000c053000003f215000000c053000003f215000000c053000003f215000000c053000003f215000000c053000003f215000000c053000003f21500000`;
g.p8M =
`00 00010404
00 00010404
00 02030404
04 02030404`;
  document.querySelector('#c').style.cursor = 'none';

  console.log(`%c ${g.data.title} V:${version} (${window.BUILD || 'DEV'})`, 'background: #222; color: #bada55');
}

function mkTail(g, len = 4) {

  let i = g.imgs['circle'],
      i2 = g.draw.color(i, g.data.pal[1]),
      c = g.H.mkCanvas(i.width * len, i.height + 4),
      ctx = c.getContext('2d');

  let x = 0, w = i.width;

  for (let n = 0; n <= len; n += 1) {
    let y = n % 2 ? 4 : 0;
    ctx.drawImage(n % 2 ? i : i2, (x + (w / 2) * n), y);
  }

  return c;
}

function mkHole(g, i) {
  let c = g.H.mkCanvas(i.width * 2, i.height),
  ctx = c.getContext('2d');
  ctx.drawImage(i, 0, 0);
  ctx.drawImage(i, i.width, 0);
  return c;
}

function mkBg(g, i, scale = 1, o = 1) {
  i = g.draw.resize(i, scale, o);
  let rows = Math.ceil(g.w / i.width),
      cols = Math.ceil(g.h / i.height);
      c = g.H.mkCanvas(g.w, g.h),
      ctx = c.getContext('2d')  ;

  for (let y = 0; y <= cols; y += 1) {
    for (let x = 0; x <= rows; x += 1) {
      ctx.drawImage(i, x * i.width, y * i.width);
    }
  }

  return c;
}

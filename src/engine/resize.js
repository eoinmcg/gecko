import data from "../game/data/base";

const resize = (w, h) => {

  const c = document.querySelector('#c');
  c.width = w;
  c.height = h;
  const widthToHeight = w / h;
  let newWidth = window.innerWidth;
  let newHeight = window.innerHeight;
  const newWidthToHeight = newWidth / newHeight;

  if (newWidthToHeight > widthToHeight) {
    newWidth = newHeight * widthToHeight;
  } else {
    newHeight = newWidth / widthToHeight;
  }

  c.width = w;
  c.height = h;

  c.style.width = newWidth + 'px';
  c.style.height = newHeight + 'px';

  c.style.marginTop = (-newHeight / 2) + 'px';
  c.style.marginLeft = (-newWidth / 2) + 'px';
}
export default resize;


  window.addEventListener('resize', () => {
    resize(data.w, data.h);
  }, false)

  window.setTimeout(() => {
    resize(data.w, data.h);
  }, 50);


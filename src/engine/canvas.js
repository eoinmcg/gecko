const resize = (w, h) => {

  const c = document.querySelector('canvas');
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

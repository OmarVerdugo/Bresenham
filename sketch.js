var ax,ay;
var x,y;
var w,h
var resultado;
var cont=0;
function setup() {
  w=windowWidth/2
  h=windowHeight/2
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  bresenham(0,0,windowWidth,windowHeight)
  bresenham(w,0,w,windowHeight)
  bresenham(windowWidth,0,0,windowHeight)
  bresenham(0,h,windowWidth,h)
  
  
}

function bresenham(x1, y1, x2, y2) {
  //contador para limitar el llamado de la funcion
  if (cont<=4) {
  let dx=x2-x1
  let dy=y2-y1

  let limite
  if(Math.abs(dx)>Math.abs(dy))
    limite=Math.abs(dx)
  else
    limite=Math.abs(dy)

    let xi=dx/limite
    let yi=dy/limite

    let x=x1
    let y=y1
  
    for(let i=0;i<limite;i++)
    {
      point(x, y)
      x+=xi
      y+=yi
    }
    cont++;
}

}
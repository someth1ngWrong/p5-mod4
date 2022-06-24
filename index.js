// Your token is eb13aca67818ba569541dbe14c23eeddca1dc792

let aqi
let co
let h
let t
let w
let name
let city = 'City'

const button = document.getElementById('button')

button.addEventListener('click', ()=> {
  const input = document.getElementById('input')
  city = input.value
  const url = `https://api.waqi.info/feed/${city}/?token=eb13aca67818ba569541dbe14c23eeddca1dc792`
  fetch(url).then((resp) => resp.json()).then(function(res){
    console.log(res.data.aqi);
    console.log(res.data.iaqi.co.v);
    console.log(res.data.iaqi.h.v);
    console.log(res.data.iaqi.t.v);
    console.log(res.data.iaqi.w.v);
    console.log(res.data.city.name);
    // console.log(res.data.idx);
    aqi = res.data.aqi
    co = res.data.iaqi.co.v
    h = res.data.iaqi.h.v
    t = res.data.iaqi.t.v
    w = res.data.iaqi.w.v
    name = res.data.city.name
  }).catch(err => {console.log(err);})
})


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(232);
	frameRate(5)
}

function draw() {
  let x = random(1440);
  let y = random(900);

  strokeWeight(3)
  textSize(30)

  // let text_aqi = random ([
  //   `air quality: ${aqi}`,
  //   `Carbon: ${co}`,
  //   `Humidity: ${h}`,
  //   `Temp: ${t} °`,
  //   `Wind: ${w}m/s`,
  //   `${name}`,
  // ])
  // let w_aqi = textWidth(text_aqi)
  // fill(210)
  // rect(x,y,w_aqi+50,60,0)
  // fill(0)
	// text(text_aqi,x+20,y+40)

  green = color('#159867');
  yellow = color('#FEDC47');
  orange = color('#FD9840');
  red = color('#CA0A37');
  purp = color('#651297');
  bard = color('#7D0425');
  hum = color('#B0E7F9');



  let text_aqi = `air quality: ${aqi}`
  let w_aqi = textWidth(text_aqi)
  fill(232)
  rect(x,y,w_aqi+50,60,0)

  if (aqi < 50) {
    fill(green)
    rect(x,y,w_aqi+50,60,0)
  }
  if (aqi < 100 && aqi > 50 ) {
    fill(yellow)
    rect(x,y,w_aqi+50,60,0)
  }
  if (100 < aqi && aqi < 150) {
    fill(orange)
    rect(x,y,w_aqi+50,60,0)
  }
  if (aqi > 150) {
    fill(red)
    rect(x,y,w_aqi+50,60,0)
  }
  fill(0)
	text(text_aqi,x+20,y+40)


// ------------------

  x = random(1440);
  y = random(900);

  let text_co = `Carbon: ${co}`
  let w_co = textWidth(text_co)
  fill(232)
  rect(x,y,w_co+50,60,0)

  if (co < 50) {
    fill(green)
    rect(x,y,w_co+50,60,0)
  }
  if (co < 100 && co > 50 ) {
    fill(yellow)
    rect(x,y,w_co+50,60,0)
  }
  if (100 < co && co < 150) {
    fill(orange)
    rect(x,y,w_co+50,60,0)
  }
  if (co > 150) {
    fill(red)
    rect(x,y,w_co+50,60,0)
  }
  fill(0)
  text(text_co,x+20,y+40)

  // -----------------

  x = random(1440);
  y = random(900);

  let text_h = `Humidity: ${h}`
  let w_h = textWidth(text_h)
  fill(hum)
  rect(x,y,w_h+50,60,0)

  fill(0)
  text(text_h,x+20,y+40)

  // -------------

  x = random(1440);
  y = random(900);


  let text_name = `${name}`
  let w_name = textWidth(text_name)
  fill(0)
  rect(x,y,w_name+50,60,0)

  fill(255)
  text(text_name,x+20,y+40)


// -------

  x = random(1440);
  y = random(900);

  let text_tw = random ([
    `Temp: ${t} °`,
    `Wind: ${w}m/s`,
  ])
  let w_tw = textWidth(text_tw)
  fill(255)
  rect(x,y,w_tw+50,60,0)
  fill(0)
  text(text_tw,x+20,y+40)
}

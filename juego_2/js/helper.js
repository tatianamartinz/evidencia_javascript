
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}


let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}


let getDistanceHint = distance => {
  if (distance < 30) {
    return "HIRVIENDO";
  } else if (distance < 40) {
    return "MUY CALIENTE";
  } else if (distance < 60) {
    return "CALIENTE";
  } else if (distance < 100) {
    return "TIBIO";
  } else if (distance < 180) {
    return "FRIO";
  } else if (distance < 360) {
    return "MUY FRIO";
  } else {
    return "COGUELADO";
  }
}
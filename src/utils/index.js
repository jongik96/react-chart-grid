function addColor(data) {
  // random color 생성
  let randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };
  let color = new Array();
  for (let i = 0; i < data.length; i++) {
    color[i] = randomColor();
  }
  return color;
}

function getNameAndScore(data) {
  let nameArray = new Array();
  let scoreArray = new Array();
  for (let i = 0; i < data.length; i++) {
    nameArray[i] = data[i].name;
    scoreArray[i] = data[i].score;
  }
  let updatedData = {
    name: nameArray,
    score: scoreArray,
  };
  return updatedData;
}

export { addColor, getNameAndScore };

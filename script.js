const dicebutton = document.querySelector(".roll");
const diceimg = document.querySelector(".dice");
const rolllist = document.querySelector('.roll-histroy')
let dicelist = [];

const getDiceface = (rollRes) => {
  switch (rollRes) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
        return "";
   
  }
};

const updateRollHistroy = () =>{
rolllist.innerHTML = "";
for (let index = 0; index < dicelist.length; index++) {
    const element = document.createElement('li');
    element.innerHTML = `Roll${index + 1}: <span>${getDiceface(dicelist[index])}</span>`;
    rolllist.append(element);
    
}
}

const rollingdice = () => {
  const rollRes = Math.floor(Math.random() * 6) + 1;
  // console.log(rollRes);
  const diceface = getDiceface(rollRes);
//   console.log(diceface);
diceimg.innerHTML = diceface;
dicelist.push(rollRes);
updateRollHistroy();
};

dicebutton.addEventListener("click", () => {
  // console.log("clicked");
  diceimg.classList.add("roll-animation");
  setTimeout(() => {
    diceimg.classList.remove("roll-animation");
    rollingdice();
  }, 1000);
});

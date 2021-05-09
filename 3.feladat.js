
const x = ['', 4, true];

const tipus = [];

function tomb() {
  for (let i = 0; i < x.length; i++) {
    tipus.push(typeof (x[i]));
    //   console.log(tipus[i]);
  }
}
tomb();
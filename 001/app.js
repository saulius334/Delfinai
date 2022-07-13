console.log(`labas`);

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

    let x = []
    for (let i = 0; i < 10 ;i++) {
        x.push(random(7, 77))
    }
    // console.log(x);
  const cats = ['Murka', 'Pilkis', 'Rainius'];

  function randomcat(a) {
    let x = cats[random(0, 2)]
    return x
  }

// for (const i of x) {
//     console.log(i);
// }
// console.log(x);

x.forEach(n => console.log(n))
let S = 2000000;
 let p = 10 / 100;
 let years = 5;
 let month = years * 12;
 let i = p / 12;
 let aKof = S *((i * (1 + i)**month) / ((1 + i) ** month - 1))
 console.log(Math.round(aKof * 100) / 100);

let Pereplata = month * aKof - S;
console.log(Math.round (Pereplata * 100) / 100);
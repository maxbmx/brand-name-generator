function rand(par) {
  return Math.floor(Math.random() * par);
}

function isEven(value) {
  if (value%2 == 0)
    return true;
  else
    return false;
}

let times;

function brandName(times) {
  const firstLetter = 'A';
  let length = 5;
  length = length - firstLetter.toString().length;
  let consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','w','x','z'];
  let vowel = ['a','e','i','o','u','y'];
  let i = 0;
  let a = 0;
  for (a = 0; a < times; a++) { 
    let brand = '';
    for (i = 0; i < length; i++) {
      if (isEven(i))
        brand += consonant[rand(consonant.length)];
      else
        brand += vowel[rand(vowel.length)];
    }
    brandName = firstLetter + brand;
    console.log(brandName + '\n');
  }
}

brandName(30);



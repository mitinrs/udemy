if (2 + 2 == 5) {
    console.log('Верно!');
} else {
    console.log('Не верно');
}

let num = 48;

if (num >= 50) {
    console.log('Y');
} else if (num == 49) {
    console.log('not 1');
} else {
    console.log('n3');
}

// (num == 48) ? console.log('Y'): console.log('N');

let num1 = 44;
switch (true) {
    case num1 !== 150:
        console.log('Y1');
        break;
    case num1 == 44:
        console.log('Y2');
        break;
    default:
        console.log('err');
        break;
}

let num2 = 44;
switch (num2) {
    case 44:
        console.log('Y2');
        break;
    default:
        console.log('err');
        break;
}

let i=0;
while (i<50) {
    console.log('i='+i);
    i++;
}

let j=0;
do {
    console.log('j='+j);
    j++;
}
while (j<50);

for (let i2=1;i2<8;i2++) {
    if (i2==6) {continue;}
    console.log('i2='+i2);
}
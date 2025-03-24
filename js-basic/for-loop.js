// problem------------------------->169
for (let i = 150; i <= 170; i++) {
  console.log(i);
}

// problem------------------------->170
let sum = 0;
for (let i = 31; i <= 58; i++) {
  sum = sum + i;
  console.log("all student roll:", sum);
}

// problem------------------------->171
let sum2 = 0;
for (let i = 25; i <= 75; i++) {
  sum = sum + i;
}
console.log("Total degit Number:", sum);

// problem------------------------->172
for (let i = 20; i <= 50; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}

// problem------------------------->173
for (let i = 40; i <= 80; i++) {
  if (i % 5 == 0 || i % 7 == 0) {
    console.log(i);
  }
}

// problem------------------------->174
let sum3 = 0;
for (let i = 1; i <= 40; i++) {
  if (i % 13 == 0) {
    sum3 = sum3 + i;
    // console.log(i);
    console.log(sum3);
  }
}

// problem------------------------->175
for (let i = 1; i < 50; i += 4) {
  console.log(i);
}

// problem------------------------->176
for (let i = 0; i <= 100; i++) {
  if (i % 9 == 0 || i % 6 == 0) {
    console.log(i);
  }
}

// problem------------------------->177
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 4 == 0) {
    console.log(i);
  }
}

// problem------------------------->178
for (let i = 1; i <= 30; i++) {
  if (i > 15) {
    break;
  }
  console.log("print stop at 15: ", i);
}

// problem------------------------->179
for (let i = 1; i <= 40; i++) {
  if (i % 7 == 0) {
    continue;
  }
  console.log("7 digit skip:", i);
}

// problem------------------------->180
for (let i = 1; i <= 15; i++) {
  if (i == 9) {
    continue;
  }
  console.log("9 skip:", i);
}

// problem------------------------->181
for (let i = 1; i <= 20; i++) {
  if (i == 12) {
    continue;
  }
  console.log(i);
}

// problem------------------------->182
for (let i = 1; i <= 25; i++) {
  if (i % 3 == 0) {
    continue;
  }
  console.log(i);
}

// problem------------------------->183
for (let i = 91; i <= 120; i++) {
  if (i % 10 === 0) {
    break;
  }
  console.log(i);
}

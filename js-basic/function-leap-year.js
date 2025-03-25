// extra example leap year
// ------------------------------>
// some wrang system leap year
function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2043));
console.log(isLeapYear(2052));

// correct system leap year
function isLeapYear2(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
}
console.log(isLeapYear2(2000));
console.log(isLeapYear2(2400));

// and now this is correct ans leap year , ------->here is example
function isLeapYear3(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear3(1900));
console.log(isLeapYear3(2052));
console.log(isLeapYear3(2025));

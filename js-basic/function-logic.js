// problem solved------------------------------>252
// mile to gauge -----------> we know 1 mile = 1760 gauge
// so, problem solved now
function mileToGauge(mile) {
  return mile * 1760;
}
console.log(mileToGauge(13));

// problem solved------------------------------>253
// 1 kilowatt hour to kilocalories solve this problem. ok , i just do it now
function kilowattHoursToKilocalories(kc) {
  const kilocalorie = kc * 860;
  return kilocalorie;
}
console.log(kilowattHoursToKilocalories(10));

// problem solved------------------------------>254
// we know 1 hour = 60 minutes and 1 minute = 60 seconds
function hourToMinutes(min) {
  return min * 60;
}
console.log(hourToMinutes(2));

// problem solved------------------------------>255
// we know 1 meter = 100 centimeter
function centimeterToMeter(cm) {
  const centimeter = cm / 100;
  return centimeter;
}
console.log(centimeterToMeter(590));

// problem solved------------------------------>256
// we know 1 inch = 2.54 centimeter and problem is inchToCentimeter convert
function inchToCentimeter(cn) {
  return cn * 2.54;
}
console.log(inchToCentimeter(10));

// problem solved------------------------------>257
// we know ------> 1 pound = 0.453592 kilograms
function poundToKilograms(kg) {
  const kilograms = kg * 0.453592;
  return kilograms;
}
console.log(poundToKilograms(2));

// problem solved------------------------------>258
// we know ------>1 gauge = 0.91 meter and problem -------->gauge to meter convert
function gaugeToMeter(meter) {
  return meter * 0.91;
}
console.log(gaugeToMeter(2));

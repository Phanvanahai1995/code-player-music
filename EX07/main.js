var km = 100;
var money = 0;

if (km <= 1) {
  money = 15000 * 1;
  console.log(money);
} else if (1 < km && km <= 5) {
  money = km * 13500;
  console.log(money);
} else if (km > 5 && km <= 120) {
  money = km * 11000;
  console.log(money);
} else if (km > 120) {
  money = 11000 * km - 0.01 * 11000 * km;
  console.log(money);
}

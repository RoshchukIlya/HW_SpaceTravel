let name = prompt('Название корабля');
let oil = prompt('Текущее количество топлива в корабле');
let maxOil = prompt('Максимальное количество топлива в корабле');
let speed = prompt('Скорость корабля');

alert(`${name} готов к вылету!`);
alert(`На данный момент в корабле ${oil} топлива`);
alert(`Максимальное количество топлива: ${maxOil}`);
alert(`Скорость корабля: ${speed}`);

let distance = prompt('Расстояние до звездной системы');

function flyTime(distance, speed) {
  return distance / speed;
}
flyTime(distance, speed);
alert(`Время полёта: ${flyTime(distance, speed)}`);

let flytime = flyTime(distance, speed);

function oilTraffic(flytime, speed) {
  return speed / flytime;
}
oilTraffic(flytime, speed);
alert(`Расход топлива: ${oilTraffic(flytime, speed)}`);

let oiltraffic = oilTraffic(flytime, speed);

function oilBalance(oil, oiltraffic) {
  let result = oil - oiltraffic;
  if (result < 0) {
    alert('Корабль сломался из-за нехватки топлива');
  } else {
    alert('Полёт прошёл успешно');
  }
  return result;
}
oilBalance(oil, oiltraffic);

let oilbalance = oilBalance(oil, oiltraffic);

const STAR_SISTEMS = [{ name: 'Татуин', distance: 1056 }, { name: 'Галлифрей', distance: 50586 }, { name: 'Альфа-Центавра', distance: 8450 }, { name: 'Млечный Путь', distance: 777 }, { name: 'Мелмак', distance: 500000, }]

STAR_SISTEMS.forEach(el => {

  let starDistance = el.distance;
  let starFlyTime = flyTime(starDistance, speed);
  alert(`Время полёта до ${el.name} составляет ${starFlyTime}`);
  oilTraffic(speed, starFlyTime);
  oiltraffic = oilTraffic(speed, starFlyTime);
  oilbalance -= oiltraffic;
  if (oilbalance < 0) {
    alert('Корабль сломался из-за нехватки топлива');
  }
})
alert('Путешествие успешно завершено')

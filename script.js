var sec = 4;

var dt = new Date();
console.log('start:' , dt);

var endDt = new Date(dt.getTime() + sec * 1000);
console.log('end:' , endDt);

var cnt = sec;
var id = setInterval(function () {
  cnt--;
  console.log(cnt);
  document.querySelector('.cnt').textContent = cnt;

  dt = new Date();
  if (dt.getTime() >= endDt.getTime()) {
    clearInterval(id);
    document.querySelector('.cnt').style.display = 'none';
    document.querySelector('.newpage').style.display = 'block';
    console.log('fin');
  }
} , 1000);
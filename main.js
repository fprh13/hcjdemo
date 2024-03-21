// 현재 화면에 떠있는 html 자체를 document라고 함

document.getElementById('time').innerHTML = new Date();

// 테마 변경 메서드
function basic() {
  document.body.style.backgroundColor = '#fff';
}
function sea() {
  document.body.style.backgroundColor = '#d6e3ff';
}

function forest() {
  document.body.style.backgroundColor = '#90D866';
}

function showhtml() {
  document.getElementById('fig').src = './image/html5.jpg';
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어입니다.';
}

function showcss() {
  document.getElementById('fig').src = './image/css3.jpg';
  document.getElementById('desc').innerHTML =
    '<b>CSS3</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.';
}

function showjs() {
  document.getElementById('fig').src = './image/javascript.jpg';
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다. ';
}

function hide() {
  document.getElementById('fig').src = './image/w3.png';
  document.getElementById('desc').innerHTML =
    '<b>w3schools에서 더 자세히 학습해보세요 !</b> <a href="https://www.w3schools.com">CLICK</a>';
}

 // 전체 html문서에 적용하고싶을때 head에 선언
var text1 = "자바스크립트의 세상에 오신 것을 환영합니다~~~"
var text2 = "자바스크립트 프로그래밍을 즐기도록 합시다!!!"
function welcome(){
    document.write(text1 + "<br>");
    document.write(text2);
}

welcome();
// 1. 랜덤 번호 지정
// 2. 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 3. 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤번호가 유저번호보다 작다면 DOWN!!이라고 알려준다.
// 랜덤번호가 유저번호보다 크다면 Up!!이라고 알려준다.

// Reset버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다 쓰면 게임이 끝난다.(더 이상 추측 불가, 버튼이 disable)
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깎지 않는다.

let randomNum = 0;

function pickRandomNum() {
    randomNum = Math.random();
    console.log("정답", randomNum);
}
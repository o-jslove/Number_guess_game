// 1. 랜덤 번호 지정
// 2. 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 3. 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 4. 랜덤번호가 유저번호보다 작다면 DOWN!!이라고 알려준다.
// 5. 랜덤번호가 유저번호보다 크다면 Up!!이라고 알려준다.

// 6. Reset버튼을 누르면 게임이 리셋된다.(결과 값도 출력하기)
// 7. 5번의 기회를 다 쓰면 게임이 끝난다.(더 이상 추측 불가, 버튼이 disable)
// 8. 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깎지 않는다.
//--------------------------------------------------------------------

let randomNum;
let playButton = document.getElementById("play-button"); 
//html의 요소 button 태그에 id를 통해 getElement하여 가져온다. 
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chance = 5;
let gameOver = false; // 기회를 다 날려 게임을 OVER했을 때 사용할 변수
let chanceArea = document.getElementById("chance-area");
let history = new Array(); // 이전에 입력한 값을 저장하는 공간

playButton.addEventListener("click", play);
//playButton에 이벤트를 만들어라(click이라는 이벤트, play라는 함수를 실행)
resetButton.addEventListener("click", reset);

userInput.addEventListener("focus", function() {
    userInput.value = "";
}) // 입력창이 focus 되었을때, 바로 빈칸으로 만들어준다.


function pickRandomNum() {
    randomNum = Math.floor(Math.random() * 100)+1;
    // 0~99까지이기에 +1을 한다.
    console.log("정답", randomNum);
    return randomNum;
}

function play() {
    let userValue = userInput.value; 
    //.value는 userInput의 반환 값 DOM 형식의 element의 value(값)을
    // 구해주는 메소드이다.

    if(userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100 사이 숫자를 입력해 주세요.";
        return; // 리턴해야 밑에 남은 찬스가 깎이지 않는다.
    }
        
    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return; // 리턴해야 밑에 남은 찬스가 깎이지 않는다.
    }
    chance--;
    chanceArea.textContent = `남은 기회 : ${ chance }번`;

    if(userValue < randomNum) {
        resultArea.textContent = "Up!!!";
    }
    else if(userValue > randomNum) {
        resultArea.textContent = "Down!!!";
    }
    else {
        resultArea.textContent = "맞췄습니다!!!";
        playButton.disabled = true;
    }

    history.push(userValue);
    console.log(history);

    if(chance < 1) {
        gameOver = true;
    }
    if(gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    // user input창이 깨끗하게 정리가 된다.
    userInput.value = "";

    // 남은 찬스 초기화
    chanceArea.textContent = "남은 찬스 : 5번";
    chance = 5;

    playButton.disabled = false;

    resultArea.textContent = `이전 결과 값이 여기 나옵니다! \"${ randomNum }\"`;
    
    // 새로운 번호가 생성된다.
    pickRandomNum();
}

pickRandomNum();

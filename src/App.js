import { useState } from 'react';
import Dice from "./Dice";
import Button from './Button';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1); // 첫 번째 : 현재 변수의 값 , 두 번째 : 파라미터로 전달하는 값으로 state가 변경됨
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    /* setNum(nextNum);
    setSum(sum + nextNum); */
    setGameHistory([...gameHistory, nextNum]); //참조형임 배열은. 그러니까 ... 처럼 spread를 활용해 보는 건 어떤지?
  }

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="red" num={num} />
        <h2>총점</h2>
        <p>{sum}</p> 
        <h2>기록</h2>
        <p>{gameHistory.join(', ')}</p>
      </div>
    </div>
  );
}

export default App;

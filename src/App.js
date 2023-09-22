import { useState } from 'react';
import Dice from "./Dice";
import Button from './Button';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1); // 첫 번째 : 현재 변수의 값 , 두 번째 : 파라미터로 전달하는 값으로 state가 변경됨

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
  }

  const handleClearClick = () => {
    setNum(1);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color="red" num={num} />
    </div>
  );
}

export default App;

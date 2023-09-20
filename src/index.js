import ReactDOM from 'react-dom';

const product = 'MacBook';
const model = 'Air';
const item = product + model;
const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png';

function handelClick(e){
  alert('Now It will be arriving!');
}

ReactDOM.render(
  <>
    <h1>{item} 주문하기</h1>
    <img src={imageUrl} alt="제품 사진" />
    <button onClick={handelClick}>확인</button>
  </>,
  document.getElementById('root')
);

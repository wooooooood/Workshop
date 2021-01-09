import React, {useState} from 'react';

function Counter() {
    //기본값 0을 useState의 파라미터로 넣는다
    //배열을 반환하는데, [현재상태, 상태를 바꾸는 함수]
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        // setNumber(number+1);

        //함수형 Updator, 최적화와 관련
        setNumber(prevNumber => prevNumber + 1);
    }

    const onDecrease = () => {
        setNumber(number-1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;

/*
이렇게 하면 안된다: <button onClick={onIncrease()}>+1</button>
이렇게 하는 것의 의미는 함수를 넣어주는 게 아니라 렌더링하면서 함수를 호출하는 것이 된다

setNumber의 두가지 용도:
- 다음 상태
- 이러한 로직으로 상태를 업데이트할거라는 함수
*/

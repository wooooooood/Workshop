import React, {useState} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const {name, nickname} = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;
        //객체 상태를 업데이트할때는 복사해서 덮어씌우기로 상태 업데이트 해야함!
        //불변성을 지키는 것
        setInputs({
            ...inputs,
            [name]: value, //nickname or name
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>

    );
}

export default InputSample;

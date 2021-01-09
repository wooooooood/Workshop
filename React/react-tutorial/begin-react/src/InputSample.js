import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');
    const onChange = (e) => {
        //e.target = event 발생한 dom에 대한 정보
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>{text}
            </div>
        </div>

    );
}

export default InputSample;

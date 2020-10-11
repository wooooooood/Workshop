//react component 만들기
import React from 'react'; //react를 불러와서 사용하겠다
//컴포넌트 만들기: 함수형 or 클래스

//컴포넌트 이름은 파스칼케이스
function Hello({color, name}) {
    //jsx 리턴
    //객체, 객체를 감싸는 중괄호 
    return <div style={{
        color
    }}>ㅎㅇ {name}</div>;
}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;

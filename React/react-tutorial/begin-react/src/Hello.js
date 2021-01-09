import React from 'react';

function Hello({color, name, isSpecial}) {
    return (
      <div style={{
        color
      }}>
        {isSpecial && <b>*</b>} //단순히 숨기고 보여주는 경우
        ㅎㅇ {name}
      </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;

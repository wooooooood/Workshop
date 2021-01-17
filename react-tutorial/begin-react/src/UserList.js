import React, {useEffect} from 'react';

function User({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    // useEffect(() => { //UI가 화면에 나타난 상태 이후
    //     console.log('component mount');
    //     //props -> state
    //     //REST API
    //     //D3, Video.js등의 lib
    //     //setInterval, setTimeout
    //     return () => { //뒷정리 함수.. update되기 바로 직전, 컴포넌트가 사라지기 직전에 호출됨
    //         //lib instance 제거
    //         //clearInterval, clearTimeout
    //         console.log('component unmount');
    //     }
    // }, []);

    useEffect(() => { 
        console.log('user값이 설정됨');
        return () => {
            console.log('user값이 바뀌기 전');
        }
    }, [user]); //dep = dependency 값이 설정(mount포함)되거나 바뀔때마다 useEffect가 호출됨
    //useEffect안에서 사용하는 props/상태가 있다면 dep안에 넣어주자! 없어도 동작은 될수있지만 side effect가 있을거라 넣는게 규칙임!

    // useEffect(() => { 
    //     console.log('user값이 설정됨');
    // }); //이렇게하면 컴포넌트 리렌더링 후 호출 -> 하나의 컴포넌트가 수정되어도 모든 컴포넌트에서 userEffect가 실행됨. 
    //부모 comp가 수정되면 자식comp들이 다시..
    return (
        <div>
            <b style={{
                color: active? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}>{username}</b>&nbsp<span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {
                users.map(
                    user => (
                    <User user={user} key={user.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}/>
                    )
                )
            }
        </div>
    );
}

export default UserList;

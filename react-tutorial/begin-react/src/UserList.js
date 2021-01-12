import React from 'react';

function User({user, onRemove}) {
    const {username, email, id} = user;
    return (
        <div>
            <b>{username}</b><span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
            {/* <button onClick={onRemove(id)}>삭제</button>는 아님! 렌더링하면서 호출하는 의미임! 그러니 함수를 호출하는 게 아니라 넣어줘야함! */}
        </div>
    );
}

function UserList({users, onRemove}) {
    return (
        <div>
            {
                users.map(user => (<User user={user} key={user.id} onRemove={onRemove}/>))
            }
        </div>
    );
}

export default UserList;

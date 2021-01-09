import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'v',
            email: 'v@v.com'
        },
        {
            id: 2,
            username: 'v2',
            email: 'v2@v.com'
        },
        {
            id: 3,
            username: 'v3',
            email: 'v3@v.com'
        },
    ];
    
    return (
        <div>
            {
                users.map(user => (<User user={user} key={user.id}/>))
            }
        </div>
    );
}

export default UserList;

/*
Warning: Each child in a list should have a unique "key" prop.
key로 사용할 고유값이 없을때는?
(user, index) => 사용해서 index를 넣는 것.. 근데 이건 피하는게 좋음. 경고만 없어질뿐 성능에는 차이없다
key가 없다면 밀려서 하나하나 바뀌는식으로 동작함 => 비효율적.. 몇번째인지만 알고있고 뭔지는 몰라서.
배열을 렌더링할땐 키를 설정해야 효율적이다. 고유값이 없을땐 index 넣을 수는 있지만 비효율적이다. 하지만 수가 적거나 자주 업데이트되지 않는다면 사용할 수도 있다만.. 그게 아니라면 비효율적이다!!
*/

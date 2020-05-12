import React from "react";
import s from './Users.module.css'
import * as axios from 'axios';

export default class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src='../../assets/images/ava.png' alt='' className={s.usersPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/*<div>{u.location.county}</div>*/}
                            {/*<div>{u.location.city}</div>*/}
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
        ;
    }
}


// let Users = (props) => {
//
//     if (props.users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUsers(response.data.items);
//         });
//     }
//     ;
//
//     return (
//         <div>
//             {
//                 props.users.map(u => <div key={u.id}>
//                     <span>
//                         <div>
//                             <img src={u.photoUrl} alt='' className={s.usersPhoto}/>
//                         </div>
//                         <div>
//                             {u.followed
//                                 ? <button onClick={() => {
//                                     props.unfollow(u.id)
//                                 }}>Unfollow</button>
//                                 : <button onClick={() => {
//                                     props.follow(u.id)
//                                 }}>Follow</button>
//                             }
//                         </div>
//                     </span>
//                     <span>
//                         <span>
//                             <div>{u.name}</div>
//                             <div>{u.name}</div>
//                             <div>{u.status}</div>
//                         </span>
//                         <span>
//                             {/*<div>{u.location.county}</div>*/}
//                             {/*<div>{u.location.city}</div>*/}
//                         </span>
//                     </span>
//                 </div>)
//             }
//         </div>
//     );
// };
//
// export default Users;
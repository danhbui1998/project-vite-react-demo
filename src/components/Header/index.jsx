import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PATH } from '../../config/path';

const Header = ({ user }) => {
    // console.log(user);
    return (
        <div className="flex justify-between">
            <div className="logo"></div>
            <nav>
                <ul style={{ display: 'flex' }}>
                    <li style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        <NavLink to={PATH.home}>Trang chủ</NavLink>
                    </li>
                    <li style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        <NavLink to={PATH.course}>Khóa học</NavLink>
                    </li>
                    <li style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        <NavLink to={PATH.contact}>Contact</NavLink>
                    </li>
                    {/* <li style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        <NavLink to={PATH.profile.index}>Profile</NavLink>
                    </li> */}
                </ul>
            </nav>
            <div>
                {user ? (
                    <div>
                        <Link to={PATH.profile.index}>{user.name}</Link>
                    </div>
                ) : (
                    <Link to={PATH.signin} className="bg-[#ccc] px-10 py-2 ">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;

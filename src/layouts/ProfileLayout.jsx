import React from 'react';
import { Navigate, NavLink, Outlet, Link } from 'react-router-dom';
import { PATH } from '../config/path';

const ProfileLayout = ({ logout }) => {
    return (
        <div>
            {/* <Navigate to={PATH.home} /> */}
            <div>
                <nav>
                    <ul className="flex ">
                        <li>
                            <NavLink end to={PATH.profile.index}>
                                Trang cá nhân
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={PATH.profile.course}>Khóa học của tôi</NavLink>
                        </li>
                        <li>
                            <NavLink to={PATH.profile.project}>Dự án của tôi</NavLink>
                        </li>
                        <li>
                            <button onClick={logout}>Đăng xuất</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
            <div>Footer Profile</div>
        </div>
    );
};
export default ProfileLayout;

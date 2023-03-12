import React from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { useAuth } from '../components/AuthContext';
import { PATH } from '../config/path';

function Signin() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const onSubmit = () => {
        login();
        navigate(PATH.profile.index);
    };
    return (
        <div>
            <h1>Login</h1>
            <button className="bg-[#ccc] px-10 py-2" onClick={onSubmit}>
                Đăng nhập
            </button>
        </div>
    );
}

export default Signin;

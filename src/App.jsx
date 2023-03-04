import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Course from './pages/Course';
import CourseDetail from './pages/Course/[slug]';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';
import MyCourse from './pages/Profile/my-course';
import ProfileLayout from './layouts/ProfileLayout';
import MyProject from './pages/Profile/my-project';
import MainLayout from './layouts/MainLayout';
import { PATH } from './config/path';
import Signin from './pages/signin';
import PrivateRouter from './components/PrivateRouter';
import AuthRouter from './components/AuthRouter';
import Signup from './pages/signup';
import { useRoutes } from 'react-router-dom/dist';
import { routes } from './routes';

function App() {
    const [user, setUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('user'));
        } catch (err) {
            return null;
        }
    });
    const login = () => {
        setUser({
            name: 'Danh',
        });
    };

    const logout = () => {
        setUser();
    };
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const element = useRoutes(routes(user, login, logout));

    // console.log(element);
    return (
        <div className="App">
            {element}

            {/* <Routes>
                <Route element={<MainLayout user={user} />}>
                    <Route index element={<Home />} />
                    <Route path={PATH.contact} element={<Contact />} />
                    <Route path={PATH.course}>
                        <Route index element={<Course />} />
                        <Route path={PATH.courseDetail} element={<CourseDetail />} />
                    </Route>

                    <Route element={<AuthRouter user={user} redirect={PATH.profile.index} />}>
                        <Route path={PATH.signin} element={<Signin login={login} />} />
                        <Route path={PATH.signup} element={<Signup />} />
                    </Route>

                    <Route element={<PrivateRouter user={user} redirect={PATH.signin} />}>
                        <Route path={PATH.profile.index} element={<ProfileLayout logout={logout} user={user} />}>
                            <Route index element={<Profile />} />
                            <Route path={PATH.profile.course} element={<MyCourse />} />
                            <Route path={PATH.profile.project} element={<MyProject />} />
                        </Route>
                    </Route>

                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes> */}
        </div>
    );
}

export default App;

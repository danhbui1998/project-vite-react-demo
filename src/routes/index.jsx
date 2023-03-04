import AuthRouter from '../components/AuthRouter';
import PrivateRouter from '../components/PrivateRouter';
import { PATH } from '../config/path';
import MainLayout from '../layouts/MainLayout';
import ProfileLayout from '../layouts/ProfileLayout';
import Contact from '../pages/Contact';
import Course from '../pages/Course';
import Detail from '../pages/Course/[slug]';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Profile from '../pages/Profile';
import MyCourse from '../pages/Profile/my-course';
import MyProject from '../pages/Profile/my-project';
import Signin from '../pages/signin';
import Signup from '../pages/signup';

export const routes = (user, login, logout) => {
    return [
        {
            element: <MainLayout user={user} logout={logout} />,
            children: [
                { element: <Home />, index: true },
                { element: <Contact />, path: PATH.contact },
                {
                    path: PATH.course,
                    children: [
                        { element: <Course />, index: true },
                        { element: <Detail />, path: PATH.courseDetail },
                    ],
                },
                {
                    element: <AuthRouter user={user} redirect={PATH.profile.index} />,
                    children: [
                        { element: <Signin login={login} />, path: PATH.signin },
                        { element: <Signup />, path: PATH.signup },
                    ],
                },
                {
                    element: <PrivateRouter user={user} redirect={PATH.signin} />,
                    children: [
                        {
                            element: <ProfileLayout logout={logout} user={user} />,
                            path: PATH.profile.index,
                            children: [
                                { element: <Profile />, index: true },
                                { element: <MyCourse />, path: PATH.profile.course },
                                { element: <MyProject />, path: PATH.profile.project },
                            ],
                        },
                    ],
                },
                { element: <Page404 />, path: '*' },
            ],
        },
    ];
};

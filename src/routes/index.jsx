import AuthRouter from '../components/AuthRouter';
import PrivateRouter from '../components/PrivateRouter';
import { PATH } from '../config/path';
import MainLayout from '../layouts/MainLayout';
import ProfileLayout from '../layouts/ProfileLayout';
import Contact from '../pages/Contact';
import Course from '../pages/Course';
import Detail from '../pages/Course/[slug]';
import Demo from '../pages/demo';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Profile from '../pages/Profile';
import MyCourse from '../pages/Profile/my-course';
import MyProject from '../pages/Profile/my-project';
import Signin from '../pages/signin';
import Signup from '../pages/signup';

export const routes = [
    {
        element: <MainLayout />,
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
                element: <AuthRouter redirect={PATH.profile.index} />,
                children: [
                    { element: <Signin />, path: PATH.signin },
                    { element: <Signup />, path: PATH.signup },
                ],
            },
            {
                element: <PrivateRouter u redirect={PATH.signin} />,
                children: [
                    {
                        element: <ProfileLayout />,
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

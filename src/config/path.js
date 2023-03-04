const PROFILE_PATH = '/profile';
const COURSE_PATH = '/course';

export const PATH = {
    home: '/',
    course: COURSE_PATH,
    courseDetail: COURSE_PATH + '/:slug-id:id',
    contact: '/contact',
    signin: '/signin',
    signup: '/signup',
    profile: {
        index: PROFILE_PATH,
        course: PROFILE_PATH + '/my-course',
        project: PROFILE_PATH + '/my-project',
    },
};

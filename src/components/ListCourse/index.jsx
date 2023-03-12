import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { courseService } from '../../services/course';
import CourseCard from '../CourseCard';
import Skeleton from '../Skeleton';

const ListCourse = () => {
    const { data: courses, loading } = useFetch(() => courseService.getCourse('?limit=6'));

    // const [loading, setLoading] = useState(true);
    // const [courses, setCourses] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setLoading(true);
    //             let res = await courseService.getCourse();
    //             // res = await res.json();
    //             setCourses(res.data);
    //             setLoading(false);
    //         } catch (error) {
    //         } finally {
    //             setLoading(false);
    //         }
    //     })();
    // }, []);

    return (
        <div className="grid grid-cols-4 gap-4">
            {loading
                ? Array.from(Array(6)).map((_, index) => (
                      <div key={index}>
                          <Skeleton width="100%" height={320} />
                      </div>
                  ))
                : courses.data.map((course) => <CourseCard key={course.id} {...course} />)}
        </div>
    );
};

export default ListCourse;

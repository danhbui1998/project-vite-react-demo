import React, { useState } from 'react';
import { courseService } from '../../services/course';
import CourseCard from '../CourseCard';

const ListCourse = () => {
    const [courses, setCourses] = useState(() => {
        return courseService.getCourse();
    });
    return (
        <div className="list-course">
            {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
            ))}
        </div>
    );
};

export default ListCourse;

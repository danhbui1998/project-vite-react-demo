import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { courseService } from '../../services/course';
import CourseCard from '../../components/CourseCard';
import Skeleton from '../../components/Skeleton';

const Course = () => {
    const { data: courses, loading } = useFetch(() => courseService.getCourse());
    // console.log(courses);
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

export default Course;

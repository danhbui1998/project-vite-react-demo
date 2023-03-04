import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { courseService } from '../../services/course';

const Detail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState(() => {
        return courseService.getCourseDetail(Number(id));
    });
    return (
        <div>
            <h1>Chi tiết khóa học</h1>
            <p>{detail.title}</p>
            <span>{detail.long_desc}</span>
        </div>
    );
};

export default Detail;

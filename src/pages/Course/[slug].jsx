import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { courseService } from '../../services/course';

const Detail = () => {
    const { id } = useParams();

    const { data: detail, loading } = useFetch(() => courseService.getCourseDetail(id), [id]);
    if (loading) {
        return <div>loading...</div>;
    }

    if (!detail.data) return <div>...Not Found....</div>;

    return (
        <div>
            <h1>Chi tiết khóa học</h1>
            <p>{detail.data.title}</p>
            <span>{detail.data.long_description}</span>
        </div>
    );
};

export default Detail;

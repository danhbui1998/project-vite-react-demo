import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import { PATH } from '../../config/path';

const CourseCard = ({ money, thumbnailUrl, long_desc, short_desc, title, slug, id }) => {
    const path = generatePath(PATH.courseDetail, { slug, id });
    return (
        <div className="h-80 border-2 border-[#ccc] border-solid">
            <div className="wrap">
                <Link className="cover" to={path}>
                    <img src={thumbnailUrl} alt="" />
                </Link>
                <div className="info">
                    <Link className="name" to={path}>
                        {title}
                    </Link>
                    <p className="des">{short_desc}</p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">{/* <img src="img/avt.png" alt="" /> */}</div>
                        <div className="name">Vương Đặng</div>
                    </div>
                    <a href="/register.html" className="register-btn">
                        6,000,000 đ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;

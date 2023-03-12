import React from 'react';
import { SkeletonStyle } from './style';

const Skeleton = ({ shap = 'rectangle', width, height, children }) => {
    return (
        <SkeletonStyle className={shap} style={{ width, height }}>
            {children}
        </SkeletonStyle>
    );
};

export default Skeleton;

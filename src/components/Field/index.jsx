import React from 'react';

import styled from 'styled-components';

const FieldStyle = styled.div`
    margin-bottom: 30px;
    display: flex;
    align-items: center;

    label {
        display: inline-block;
        min-width: 100px;
    }
    .input {
        position: relative;
    }
    input,
    textarea {
        outline: none;
        border: 1px solid #ccc;
        padding: 5px 10px;
    }
    .error {
        color: red;
        position: absolute;
        top: 100%;
        left: 0;
        font-size: 10px;
        font-style: italic;
    }
`;

const Field = ({ label, required, error, type = 'text', renderInput, ...props }) => {
    return (
        <FieldStyle className="field">
            <label htmlFor="">
                {label} {required && <span>*</span>}
            </label>
            {renderInput ? (
                renderInput?.(props)
            ) : (
                <div className="input">
                    <input type={type} {...props} />
                    {error && <span className="error">{error}</span>}
                </div>
            )}
        </FieldStyle>
    );
};

export default Field;

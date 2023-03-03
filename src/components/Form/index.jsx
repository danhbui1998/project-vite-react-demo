import React, { useState } from 'react';
import styled from 'styled-components';

import { validate } from '../../utils/validate';
import Field from '../Field';

const FormStyle = styled.div`
    .form {
        margin-top: 50px;
        margin-left: 50px;

        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: center;

        .input-group {
            margin-bottom: 20px;

            label {
                display: inline-block;
                min-width: 100px;
            }
            input {
                outline: none;
                border: 1px solid #ccc;
                padding: 5px 10px;
            }
        }
        .btn-submit {
            background: #ccc;
            padding: 10px;
            // text-align: center;
        }
    }
`;

const Form = () => {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const errorObject = validate(
            {
                fullname: [{ required: true, message: 'Vui lòng nhập vào họ tên' }],
                username: [{ required: true }],
                phone: [{ required: true }, { regexp: 'phone', message: 'Phone không đúng. Vui lòng nhập lại' }],
                email: [{ required: true }, { regexp: 'email' }],
                password: [{ required: true }],
                repassword: [{ required: true }],
            },
            form,
        );
        // Validate form
        // if (!form.fullname?.trim()) {
        //     errorObject.fullname = 'Vui lòng điền vào họ tên';
        // }
        // if (!form.username?.trim()) {
        //     errorObject.username = 'Vui lòng điền vào username';
        // }
        // if (!form.phone?.trim()) {
        //     errorObject.phone = 'Vui lòng điền vào phone';
        // } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
        //     errorObject.phone = 'Phone không đúng. Vui lòng nhập lại';
        // }
        // if (!form.email?.trim()) {
        //     errorObject.email = 'Vui lòng điền vào email';
        // } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
        //     errorObject.email = 'Email không đúng. Vui lòng nhập lại';
        // }
        // if (!form.password?.trim()) {
        //     errorObject.password = 'Vui lòng điền vào password';
        // }
        // if (!form.repassword?.trim()) {
        //     errorObject.repassword = 'Vui lòng nhập lại password';
        // }

        setError(errorObject);

        if (Object.keys(errorObject).length === 0) {
            console.log('Validate success');
        } else {
            console.log('Validate error');
        }
    };

    const register = (name) => {
        return {
            error: error[name],
            value: form[name] || '',
            onChange: (e) => setForm({ ...form, [name]: e.target.value }),
        };
    };

    return (
        <FormStyle>
            <form className="form" action="" onSubmit={onSubmit}>
                <Field label="Full name" placeholder="Full name" required {...register('fullname')} />
                <Field label="Username" placeholder="Username" required {...register('username')} />
                <Field label="Phone" placeholder="Phone" required {...register('phone')} />
                <Field label="Email" placeholder="Email" required {...register('email')} />
                <Field label="Password" placeholder="Password" required {...register('password')} />
                <Field label="Password" placeholder="Reenter passworld" required {...register('repassword')} />
                <Field
                    label="Nội dung"
                    placeholder="Nội dung ..."
                    {...register('Content')}
                    renderInput={(props) => <textarea {...props} cols={22} rows={3} />}
                />

                <button className="btn-submit">Submit</button>
            </form>
        </FormStyle>
    );
};

export default Form;

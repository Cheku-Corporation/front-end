import React from 'react';

import {useFormik} from 'formik';

import * as Yup from 'yup';


export const LoginForm = () => {

    const formik = useFormik({

        initialValues: {

            email: '',

            password: ''

        },

        validationSchema: Yup.object({

            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
        }),

        onSubmit: values => {

            alert(JSON.stringify(values, null, 2));

        },

    });

    return (

        <form onSubmit={formik.handleSubmit} autoComplete={"off"}>

            <div className="form-control mb-4">
                <label htmlFor="email" className={"input-group w-full input-group-lg"}>
                    <span className="w-1/4">Email</span>
                    <input

                        id="email"

                        type="text"
                        className={"w-3/4"}
                        {...formik.getFieldProps('email')}

                    />
                </label>
                {formik.touched.email && formik.errors.email ? (

                    <div className={"text-error"}>{formik.errors.email}</div>

                ) : null}
            </div>


            <div className="form-control mb-4">
                <label htmlFor="password" className={"input-group w-full input-group-lg"}>
                    <span className="w-1/4">Password</span>

                    <input id="password" className={"w-3/4"} type="password" {...formik.getFieldProps('password')} />

                    {formik.touched.password && formik.errors.password ? (

                        <div className={"text-error"}>{formik.errors.password}</div>

                    ) : null}
                </label>
            </div>

            <button type="submit" className={"btn btn-primary w-full"}>Submit</button>

        </form>

    );

};
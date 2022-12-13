import React from 'react';

import {useFormik} from 'formik';


import * as Yup from 'yup';
import {useAppContext} from "@/providers/AppProvider";
import {LOGIN_URL} from "@/URLS";


export const LoginForm = () => {

        const {navigate, login} = useAppContext();
        const formik = useFormik({

            initialValues: {
                email: '',
                password: '',
                authentification: false
            },

            validationSchema: Yup.object({

                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().required('Required'),
            }),


            onSubmit: (values, {setSubmitting, setStatus, setErrors}) => {


                fetch(LOGIN_URL(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email: values.email, password: values.password}, null, 2)

                }).then(response => response.json())
                    .then(data => {
                        console.log(data)
                        if (data.hasOwnProperty('Authorization')) {
                            login({token: data.Authorization});
                            navigate("/dashboard")
                        } else {
                            // setErrors({authentification: data.error})
                            setErrors({authentification: "Invalid email or password"})
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }
        })

        return (

            <form onSubmit={formik.handleSubmit} autoComplete={"off"}
                  className={"w-3/4 mx-auto"}>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                        <span className="label-text-alt text-error">
                            {formik.errors.email ? (formik.errors.email) : null}
                    </span>
                    </label>
                    <input id={"email"}
                           className={`input input-bordered ${formik.errors.email ? 'input-error' : ''}`}
                           type="email" {...formik.getFieldProps('email')} placeholder="Email"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                        <span className="label-text-alt text-error">
                            {formik.touched.password ? formik.errors.password : null}
                    </span>
                    </label>
                    <input id={"password"}
                           className={`input input-bordered ${formik.errors.password ? 'input-error' : ''}`}
                           type="password" {...formik.getFieldProps('password')} placeholder="Password"
                    />
                </div>

                <button type="submit" className={"btn btn-primary w-full mt-6"}>Submit</button>

                {formik.errors.authentification &&
                    <div className={"text-error mt-2"}>{formik.errors.authentification}</div>}
            </form>

        );

    }
;
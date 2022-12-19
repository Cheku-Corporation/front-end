import React from 'react';

import {useFormik} from 'formik';
import {useAppContext} from '@/providers/AppProvider';

import * as Yup from 'yup';
import {LOGIN_URL, USER_DATA_URL} from "@/URLS";
import {useSearchParams} from "react-router-dom";


export const LoginForm = () => {

        const {navigate, user, setUser} = useAppContext();
        const [queryParameters] = useSearchParams()
        let token = ""
        const fetchLogin = async (values: { email: string, password: string }) => {
            try {
                const loginResponse = await fetch(LOGIN_URL(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email: values.email, password: values.password}, null, 2),
                });

                const loginData = await loginResponse.json();

                if (loginData.hasOwnProperty('error')) {
                    throw new Error(loginData.error);
                }

                const token = loginData.Authorization;

                const userResponse = await fetch(USER_DATA_URL(values.email), {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token,
                    },
                });

                const userData = await userResponse.json();

                return {
                    idUser: userData.idUser,
                    name: userData.name,
                    email: userData.email,
                    token,
                    groupId: userData.groupId,
                    groupName: userData.groupName,
                };
            } catch (error : any) {
                return {error: error.message};
            }
        };


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

                fetchLogin(values).then((data: any) => {
                        if (data.hasOwnProperty('error')) {
                            setErrors({authentification: "Invalid email or password"})
                        } else {

                            setUser(data)
                            console.log(data)
                            if (queryParameters.get('registered') !== null && queryParameters.get('registered') === 'true') {
                                navigate("/signCar")
                            } else {
                                navigate("/dashboard")
                            }
                        }
                    }
                )

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
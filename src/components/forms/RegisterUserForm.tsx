import {useFormik} from "formik";
import * as Yup from 'yup';
import {useState} from "react";

export const RegisterUserForm = () => {

    const [tab, setTab] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '', password: '', passwordConfirmation: '', name: '', groupName: '', groupId: '',
        }, validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
            name: Yup.string().required('Required').min(5, 'Name must be at least 5 characters').max(30, 'Name must be at most 30 characters')
        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    const handleCheckboxChange = () => {
        setTab(!tab)
        formik.setFieldValue('groupId', '')
        formik.setFieldValue('groupName', '')

    }

    return (<form onSubmit={formik.handleSubmit} autoComplete={"off"}>

        <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
                <span className="label-text-alt text-error">
                        {formik.touched.name ? formik.errors.name : null}
                    </span>
            </label>
            <input type="text" placeholder="Name"
                   className="input input-bordered" {...formik.getFieldProps('name')}/>

            <label className="label">
                <span className="label-text">Email</span>
                <span className={"label-text-alt text-error"}>
                        {formik.errors.email ? formik.errors.email : null}
                    </span>
            </label>
            <input type="email" placeholder="Email"
                   className="input input-bordered" {...formik.getFieldProps('email')}/>

            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Password"
                   className="input input-bordered" {...formik.getFieldProps('password')}/>

            <label className="label">
                <span className="label-text">Password Confirmation</span>
                <span className={"label-text-alt text-error"}>
                        {formik.touched.passwordConfirmation ? formik.errors.passwordConfirmation : null}
                    </span>
            </label>
            <input type="password" placeholder="Password Confirmation"
                   className="input input-bordered" {...formik.getFieldProps('passwordConfirmation')}/>

            <label className="label">
                <label className="cursor-pointer label">
                    <span className="label-text">Create Group</span>
                    <input type="checkbox" className="toggle toggle-primary mx-2"
                           onChange={() => handleCheckboxChange()}/>
                    <span className="label-text">Join Group</span>
                </label>
                <span className={"label-text-alt text-error"}>
                        {formik.touched.groupName ? formik.errors.groupName : null}
                    </span>
            </label>
            {tab ? <input type="text" placeholder="Group Name"
                          className="input input-bordered" {...formik.getFieldProps('groupName')}/> :
                <input type="text" placeholder="Group ID"
                       className="input input-bordered" {...formik.getFieldProps('groupId')}/>}


            <button type="submit" className="btn btn-primary mt-4">Register</button>
        </div>
    </form>)

}
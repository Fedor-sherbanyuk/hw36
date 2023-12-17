import ReactDOM from 'react-dom/client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Ім'я є обов'язковим полем."),
            email: Yup.string().email('Введіть коректну електронну пошту.').required('Електронна пошта є обов\'язковою.'),
            phone: Yup.string().matches(/^\d{12}$/, 'Телефон повинен містити тільки цифри і мати довжину 12 символів.').required('Телефон є обов\'язковим полем.'),
        }),
        onSubmit: (values) => {
            console.log('Дані відправлені:', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label>
                Ім'я:
                <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && <div style={{ color: 'red' }}>{formik.errors.name}</div>}
            </label>
            <br />

            <label>
                Електронна пошта:
                <input
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && <div style={{ color: 'red' }}>{formik.errors.email}</div>}
            </label>
            <br />

            <label>
                Телефон:
                <input
                    type="text"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && <div style={{ color: 'red' }}>{formik.errors.phone}</div>}
            </label>
            <br />

            <button type="submit">Відправити</button>
        </form>
    );
};

export default MyForm;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyForm />
);

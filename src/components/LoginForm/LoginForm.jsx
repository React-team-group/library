import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useStyleLogin } from './styles';
import { useHistory } from 'react-router-dom';

// ! Роут LoginPage лежит в components,
// ! а компонент LoginForm который можно ипользовать в роуте и модальном окне лежит в routes.
// !?

export const LoginForm = ({ auth }) => {
  const classes = useStyleLogin();
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(6, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    }),

    onSubmit: (values) => {
      auth();
      history.push('/books');
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <label htmlFor="email" className={classes.label}>
        Email Address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={classes.input}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="password" className={classes.label}>
        Password
      </label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className={classes.input}
      />
      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <button type="submit" className={classes.button}>
        Submit
      </button>
    </form>
  );
};

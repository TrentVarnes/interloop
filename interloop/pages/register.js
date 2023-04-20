import Layouts from '@/layout/layouts';
import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { useState } from 'react';
import { useFormik } from 'formik';
import { register_validate } from '@/lib/validate';
import Router from 'next/router';
import { toast } from 'react-toastify';

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      cpassword: '',
    },
    validate: register_validate,
    onSubmit,
  });

  // handles the click for registering new user
  async function onSubmit(values) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify(values),
    };
    await fetch('http://localhost:3000/api/auth/signup', options)
      // if successful it will re-route to login page and store in db
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          Router.push('http://localhost:3000/login');
          // displays success message
          toast('Registered successfully', {
            hideProgressBar: true,
            autoClose: 2000,
            type: 'success',
          });
        } else {
          //displays error message
          toast('Email already exists', {
            hideProgressBar: true,
            autoClose: 2000,
            type: 'error',
          });
        }
      });
  }
  return (
    <Layouts>
      <section className="w-3/4 mx-auto flex flex-col gap-6">
      <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-0">Sign Up</h1>
        </div>
        <form className="flex flex-col gap-2" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.username && formik.touched.username
                ? 'border-rose-500'
                : ''
            }`}
          >
            <input
              className={styles.input_text}
              type="username"
              name="username"
              placeholder="username"
              {...formik.getFieldProps('username')}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
          {/*formik.errors.username && formik.touched.username ? (
            <span className="text-rose-500">{formik.errors.username}</span>
          ) : (
            <></>
          )*/}
          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? 'border-rose-500'
                : ''
            }`}
          >
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="user@interloop.ai"
              {...formik.getFieldProps('email')}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {/*formik.errors.email && formik.touched.email ? (
            <span className="text-rose-500">{formik.errors.email}</span>
          ) : (
            <></>
          )*/}
          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? 'border-rose-500'
                : ''
            }`}
          >
            <input
              className={styles.input_text}
              type={`${show.password ? 'text' : 'password'}`}
              name="password"
              placeholder="password"
              {...formik.getFieldProps('password')}
            />
            <span className="icon flex items-center px-4 cursor-pointer">
              <HiFingerPrint
                size={25}
                onClick={() => setShow({ ...show, password: !show.password })}
              />
            </span>
          </div>
          {/*formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500">{formik.errors.password}</span>
          ) : (
            <></>
          )*/}
          <div
            className={`${styles.input_group} ${
              formik.errors.cpassword && formik.touched.cpassword
                ? 'border-rose-500'
                : ''
            }`}
          >
            <input
              className={styles.input_text}
              type={`${show.cpassword ? 'text' : 'password'}`}
              name="cpassword"
              placeholder="confirm password"
              {...formik.getFieldProps('cpassword')}
            />
            <span className="icon flex items-center px-4 cursor-pointer">
              <HiFingerPrint
                size={25}
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              />
            </span>
          </div>
          {/*formik.errors.cpassword && formik.touched.cpassword ? (
            <span className="text-rose-500">{formik.errors.cpassword}</span>
          ) : (
            <></>
          )*/}
          <div>
            <button className={styles.button} type="submit">
              Register
            </button>
          </div>
          <p className="text-center">
            Already have an account?
            <Link className="text-blue-700" href="/login">
              Log in!
            </Link>
          </p>
        </form>
      </section>
    </Layouts>
  );
}

import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import Layouts from '@/layout/layouts';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { useState } from 'react';
import { useFormik } from 'formik';
import login_validate from '@/lib/validate';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function Login() {
  const { data: session, status } = useSession();
  const [show, setShow] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/',
    });

    console.log(status.error.startsWith('N'));
    if (status.ok) {
      router.push('/');
      toast('Login successful', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'success',
      });
    } else if (status.error.startsWith('N')) {
      toast('No account found please register', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
      });
    } else if (status.error.startsWith('U')) {
      toast('Username or Password does not match', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
      });
    }
  }

  useEffect(() => {
    if (status === 'unauthenticated') {
    } else if (status === 'authenticated') {
      void router.push('/');
    }
  });
  return (
    <Layouts>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-6">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-7">Log in</h1>
        </div>
        <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
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
              <HiAtSymbol size={20} />
            </span>
          </div>
          {/**Zac could you try to make this look better? It displays a message error! On this and register page  */}
          {/**formik.errors.email && formik.touched.email ? (
            <span className="text-rose-400">{formik.errors.email}</span>
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
              type={`${show ? 'text' : 'password'}`}
              name="password"
              placeholder="password"
              {...formik.getFieldProps('password')}
            />
            <span
              className="icon flex items-center px-4 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={20} />
            </span>
          </div>
          {/*formik.errors.password && formik.touched.password ? (
            <span className="text-rose-400">{formik.errors.password}</span>
          ) : (
            <></>
          )*/}
          <div>
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>
          <p className="text-center">
            Dont have an account yet? 
            <Link className="text-blue-700 px-1" href="/register">
              Sign Up!
            </Link>
          </p>
        </form>
      </section>
    </Layouts>
  );
}

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

    if (status.ok) router.push(status.url);
  }

  return (
    <Layouts>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-6">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Log in</h1>
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
              placeholder="email"
              {...formik.getFieldProps('email')}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {/*formik.errors.email && formik.touched.email ? (
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
              <HiFingerPrint size={25} />
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
            <Link className="text-blue-700" href="/register">
              Sign Up!
            </Link>
          </p>
        </form>
      </section>
    </Layouts>
  );
}

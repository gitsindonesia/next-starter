import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/Button/Button';
import { Formik } from 'formik';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container mx-auto py-6 sm:h-screen flex items-center justify-center">
        <Formik
          initialValues={{ username: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
            ) {
              errors.username = 'Invalid username address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              className="w-3/12 mx-auto rounded-lg border p-6"
              onSubmit={handleSubmit}
            >
              <div>
                <h1 className="text-3xl font-semibold">Login</h1>
                <p className="text-gray-500 mt-1">
                  Please enter your credentials
                </p>
              </div>

              <div className="mt-4">
                <label className="block mb-1 font-medium" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full px-3 py-2 rounded-md transition duration-300 focus:ring/50"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {errors.username && touched.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>

              <div className="mt-4">
                <label className="block mb-1 font-medium" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="text"
                  placeholder="Password"
                  className="w-full px-3 py-2 rounded-md transition duration-300 focus:ring/50"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.username && touched.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>

              {errors.password && touched.password && errors.password}

              <div className="mt-4 flex gap-4 justify-between items-center">
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
                <Link href="/auth/password/forgot">
                  <a className="font-medium text-blue-600">Forgot Password</a>
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

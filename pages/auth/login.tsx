import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container mx-auto py-6 sm:h-screen flex items-center justify-center">
        <form
          className="w-3/12 mx-auto rounded-lg border p-6"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <h1 className="text-3xl font-semibold">Login</h1>
            <p className="text-gray-500 mt-1">Please enter your credentials</p>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.errors.username && formik.touched.username && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.username}
              </p>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          <div className="mt-4 flex gap-4 justify-between items-center">
            <Button
              variant="primary"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Submit
            </Button>
            <Link href="/auth/password/forgot">
              <a className="font-medium text-blue-600">Forgot Password</a>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormLogin {
  username: string,
  password: string
}

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormLogin) => console.log(data);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container mx-auto px-4 sm:px-0 py-6 sm:h-screen flex items-center justify-center">
        <form
          className="w-full sm:w-3/12 mx-auto rounded-lg border p-6"
          onSubmit={handleSubmit(onSubmit)}
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
              {...register('username')}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username?.message}
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
              {...register('password')}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="mt-4 flex gap-4 justify-between items-center">
            <Button variant="primary" type="submit">
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

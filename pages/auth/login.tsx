import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/Button/Button';
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signIn, getCsrfToken } from 'next-auth/react';
import Auth from '../../components/Layouts/Auth';

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

export default function Login({ csrfToken }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({username, password}: FormLogin) => {
    signIn('credentials', {
      username,
      password
    })
  };

  return (
    <Auth>
      <Head>
        <title>Login</title>
      </Head>
      <div className='min-h-screen'>
        <div className='grid md:grid-cols-12 grid-cols-1 min-h-screen'>
          <div className='md:flex hidden col-span-7 bg-blue-500 items-center justify-center'>
            <Image
              src="/images/login_image.png"
              width={635.93}
              height={398}
              alt="Login"
            />
          </div>
          <div className='col-span-5 flex items-center justify-center min-h-screen'>
            <div className='container px-8 md:px-20 '>
              <Image
                src="https://gits.id/wp-content/uploads/2020/09/Logo-Main.png"
                alt="Logo GITS"
                className="h-10"
                width={110.23}
                height={50}
              />
              <h5 className='text-4xl font-extrabold text-[#333333] mt-8'>Login Akun</h5>
              <p className='mt-3 text-sm font-normal'>Lorem ipsum dolor sit amet consectetur amet consectetur</p>
              <form
                className="mt-14 text-[#333333]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

                <div className="mt-4">
                  <label className="block mb-2 text-sm font-semibold" htmlFor="username">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="w-full text-sm px-4 py-2 border-gray-300 placeholder-gray-300 rounded-md transition duration-300 focus:ring/50"
                    {...register('username')}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.username?.message}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm font-semibold" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="text"
                    placeholder="Password"
                    className="w-full text-sm px-4 py-2 border-gray-300 placeholder-gray-300 rounded-md transition duration-300 focus:ring/50"
                    {...register('password')}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password?.message}
                    </p>
                  )}
                </div>
                <div className='flex items-center justify-between mt-5'>
                  <label htmlFor="remember">
                    <input type="checkbox" className='rounded border-gray-300' id='remember'/>
                    <span className='text-sm ml-2'>Ingat Saya</span>
                  </label>
                  <Link href="/auth/password/forgot">
                    <a className="font-semibold text-sm text-blue-500">Lupa Password?</a>
                  </Link>
                </div>

                <div className="mt-4 flex gap-4 justify-between items-center">
                  <Button className='text-white !text-sm py-3 mt-8 w-full border-0 bg-blue-500' type="submit">
                    LOGIN
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

'use client'

// Next
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// React
import { memo } from 'react'

// React Hook Form
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Components
import Button from '@/components/Button/Button'

// Types
import { IAuthLoginForm } from '@/types'

// Validation Schema
const validationSchema = yup
	.object({
		username: yup.string().required().label('Username'),
		password: yup.string().required().label('Password')
	})
	.required()

const AuthLoginForm = memo(() => {
	// Router
	const router = useRouter()

	// Form
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<IAuthLoginForm>({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			username: '',
			password: ''
		},
		mode: 'all'
	})

	/**
	 * @description Log user in
	 *
	 * @param {IAuthLoginForm} form
	 *
	 * @return {Promise<void>} Promise<void>
	 */
	const onSubmit = handleSubmit(async (form): Promise<void> => {
		router.replace('/admin')
	})

	return (
		<form className='mt-14 text-[#333333]' onSubmit={onSubmit}>
			<div className='mt-4'>
				<label className='block mb-2 text-sm font-semibold' htmlFor='username'>
					Username
				</label>
				<Controller
					control={control}
					name='username'
					render={({ field, fieldState: { error } }) => (
						<>
							<input
								{...field}
								id='username'
								type='text'
								placeholder='Username'
								className='w-full text-sm px-4 py-3 border-gray-300 placeholder-gray-300 rounded-md transition duration-300 focus:ring/50'
							/>
							{error && (
								<p className='text-red-500 text-sm mt-1'>{error.message}</p>
							)}
						</>
					)}
				/>
			</div>

			<div className='mt-4'>
				<label className='block mb-2 text-sm font-semibold' htmlFor='password'>
					Password
				</label>
				<Controller
					control={control}
					name='password'
					render={({ field, fieldState: { error } }) => (
						<>
							<input
								{...field}
								id='password'
								type='password'
								placeholder='Password'
								className='w-full text-sm px-4 py-3 border-gray-300 placeholder-gray-300 rounded-md transition duration-300 focus:ring/50'
							/>
							{error && (
								<p className='text-red-500 text-sm mt-1'>{error.message}</p>
							)}
						</>
					)}
				/>
			</div>
			<div className='flex items-center justify-between mt-5'>
				<label htmlFor='remember'>
					<input
						type='checkbox'
						className='rounded border-gray-300'
						id='remember'
					/>
					<span className='text-sm ml-2'>Ingat Saya</span>
				</label>
				<Link
					href='/auth/password/forgot'
					className='font-semibold text-sm text-blue-500'
				>
					Lupa Password?
				</Link>
			</div>

			<div className='mt-4 flex gap-4 justify-between items-center'>
				<Button
					className='text-sm py-3 mt-8 w-full border-0'
					variant='primary'
					type='submit'
				>
					LOGIN
				</Button>
			</div>
		</form>
	)
})

AuthLoginForm.displayName = 'AuthLoginForm'

export default AuthLoginForm

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, type SignUpFormData } from '../../lib/types'
import { authAPI } from '../../services/api'

interface SignUpProps {
  onLoginSuccess: (user: any) => void
}

export function SignUp({ onLoginSuccess }: SignUpProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<SignUpFormData>({ resolver: zodResolver(signUpSchema) })

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await authAPI.signup(data.name, data.email, data.password, data.phone)
      localStorage.setItem('token', result.token)
      onLoginSuccess(result.user)
      reset()
    } catch (err: any) {
      setError('email', { type: 'server', message: err.message || 'Signup failed' })
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl text-gray-900 dark:text-white mb-6">
        Create account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Name
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="Your name"
            className={`px-3.5 py-3 border-2 rounded-lg text-sm outline-none transition-colors
              dark:bg-gray-800 dark:text-white
              ${errors.name
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 focus:border-gray-900 dark:border-gray-600 dark:focus:border-white'
              }`}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="you@example.com"
            className={`px-3.5 py-3 border-2 rounded-lg text-sm outline-none transition-colors
              dark:bg-gray-800 dark:text-white
              ${errors.email
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 focus:border-gray-900 dark:border-gray-600 dark:focus:border-white'
              }`}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Phone <span className="text-gray-400 normal-case font-normal">(optional)</span>
          </label>
          <input
            {...register('phone')}
            type="text"
            placeholder="+971 XX XXX XXXX"
            className={`px-3.5 py-3 border-2 rounded-lg text-sm outline-none transition-colors
              dark:bg-gray-800 dark:text-white
              ${errors.phone
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 focus:border-gray-900 dark:border-gray-600 dark:focus:border-white'
              }`}
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Password
          </label>
          <input
            {...register('password')}
            type="password"
            placeholder="••••••••"
            className={`px-3.5 py-3 border-2 rounded-lg text-sm outline-none transition-colors
              dark:bg-gray-800 dark:text-white
              ${errors.password
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 focus:border-gray-900 dark:border-gray-600 dark:focus:border-white'
              }`}
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Confirm Password
          </label>
          <input
            {...register('confirmPassword')}
            type="password"
            placeholder="••••••••"
            className={`px-3.5 py-3 border-2 rounded-lg text-sm outline-none transition-colors
              dark:bg-gray-800 dark:text-white
              ${errors.confirmPassword
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 focus:border-gray-900 dark:border-gray-600 dark:focus:border-white'
              }`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 py-3.5 bg-gray-900 text-white rounded-lg text-sm font-bold
            hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200
            disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed
            dark:bg-white dark:text-gray-900 dark:hover:bg-yellow-400"
        >
          {isSubmitting ? 'Creating account...' : 'Sign up'}
        </button>
      </form>
    </div>
  )
}
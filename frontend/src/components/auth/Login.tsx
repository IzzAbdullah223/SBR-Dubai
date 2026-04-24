import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFormData } from '../../lib/types'
import { authAPI } from '../../services/api'

interface LoginProps {
  onLoginSuccess: (user: any) => void
  onSwitchToSignUp: () => void
}

export function Login({ onLoginSuccess, onSwitchToSignUp }: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) })

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await authAPI.login(data.email, data.password)
      if (!result.token || !result.user) {
        setError('root', { message: 'Login failed' })
        return
      }
      localStorage.setItem('token', result.token)
      onLoginSuccess(result.user)
      reset()
    } catch (err: any) {
      const message = err.message || 'Invalid email or password'
      const isAuthError = ['email', 'password', 'incorrect', 'invalid']
        .some(w => message.toLowerCase().includes(w))
      if (isAuthError) {
        setError('password', { type: 'server', message })
      } else {
        setError('root', { type: 'server', message })
      }
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl text-gray-900 dark:text-white mb-1">
        Welcome back
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        Sign in to your account
      </p>

      {errors.root && (
        <div className="bg-red-50 border-l-4 border-red-500 text-red-600 text-sm font-medium px-4 py-3 rounded mb-4 animate-slideIn">
          {errors.root.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
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
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 py-3.5 bg-gray-900 text-white rounded-lg text-sm font-bold
            hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200
            disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed
            dark:bg-white dark:text-gray-900 dark:hover:bg-yellow-400"
        >
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-gray-400">
        No account?{' '}
        <button
          onClick={onSwitchToSignUp}
          type="button"
          className="text-gray-900 dark:text-white font-bold underline hover:text-yellow-500 transition-colors"
        >
          Sign up
        </button>
      </p>
    </div>
  )
}
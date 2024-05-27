import { login, signup } from './action'
import { createServerClient, type CookieOptions } from '@supabase/ssr'


export default function LoginPage() {
  return (
    <form>

      <p>{ } </p>

      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button><br />
      <button formAction={signup}>Sign up</button>
    </form>
  )
}
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-sky-900 min-h-screen'>
      <div className="card bg-primary/40 p-8">
        <div className="card-body">
          <h1 className="card-title text-4xl mb-4">Register</h1>
          <form
            className="flex flex-col w-fit gap-4"
          >
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text text-lg font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input !outline-0 border-2 border-current"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text text-lg font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input !outline-0 border-2 border-current"
              />
            </div>
            <button type="submit" className="btn btn-info">
              Register
            </button>
            <Link href="/login" className="btn btn-outline btn-info">
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

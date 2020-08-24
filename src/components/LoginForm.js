import React from 'react'

export default function LoginForm(props) {
  return (
    <form>
      <div>
        <h2>Login</h2>
      </div>

      <div>
        <label>Name:&nbsp;
          <input
            type='text'
            name='name'
            // value={}
            placeholder='name'
          // onChange={}
          />
        </label>

        <label>Email:&nbsp;
          <input
            type='email'
            name='email'
            // value={}
            placeholder='email'
          // onChange={}
          />
        </label>

        <label>Password:&nbsp;
          <input
            type='password'
            name='password'
            // value={}
            placeholder='password'
          // onChange={}
          />
        </label>

      </div>
    </form>
  )
}
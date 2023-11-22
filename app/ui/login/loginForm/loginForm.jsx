"use client"
import React, { useState } from 'react'
import styles from './loginForm.module.css'
import { authenticate } from '../../../lib/actions'
import {useFormState} from 'react-dom'

function LoginForm() {

  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
    <h2>Login</h2>
    <input type="text" placeholder="Username" name="username" />
    <input type="text" placeholder="Password" name="password" />
    <button>Login</button>
    {state && state}
  </form>
  )
}

export default LoginForm
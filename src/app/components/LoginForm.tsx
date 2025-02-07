"use client"
import { useFormStatus } from "react-dom"
import { login } from "../login/actions"
import { useActionState } from "react";

import '../css/login-Form.css';


export function LoginForm() {

    const [state, loginAction] = useActionState(login, undefined);

    return(
        <form action={loginAction} className="login__form__container">
            <h1 className="text-2xl font-bold text-center mb-4">
                Login
            </h1>

            <div className="form_container__email">
                <input id="email" name="email" placeholder="Email" />
            </div>

            <div className="flex flex-col gap-2">
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                />
            </div>
            {state?.errors.email && (
                <p className="text-red-500">{state.errors.email}</p>
            )}
            <SubmitButton />
        </form>
    )
}

function SubmitButton () {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type="submit" className="login__form__button">
            Login
        </button>
    )
}
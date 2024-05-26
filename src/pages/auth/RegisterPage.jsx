import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '@/context'


const initVal = { nickname: "", email: "", password: "", rememberMe: true }

export const RegisterPage = () => {
	const [ formValue, setFormValue ] = useState( initVal )

	const { register } = useAuth()

	const handleChange = ( { target } ) => {
		const { name, value, checked } = target
		if ( name === "remember-me" ) {
			setFormValue( s => ({ ...s, rememberMe: checked }) )
		} else {
			setFormValue( s => ({ ...s, [name]: value }) )
		}
	}

	useEffect( () => {
		const data = JSON.parse( localStorage.getItem( "userAuthRegister" ) )
		
		if ( !!data ) {
			const { nickname, email, password } = data
			setFormValue( s => ({ ...s, email, password, nickname }) )  
		}
	}, [] )

	const handleSubmit = async ( e ) => {
		e.preventDefault()
		
		if ( formValue.rememberMe ) {
			localStorage.removeItem( "userAuthRegister" )
			const { nickname, email, password } = formValue
			localStorage.setItem( "userAuthRegister", JSON.stringify( { nickname, email, password } ) )
		} else {
			localStorage.removeItem( "userAuthRegister" )
		}

		await register( formValue.nickname, formValue.email, formValue.password )
	}

	const allOK = () => {
		return formValue.email.trim().length > 0 && formValue.password.trim().length > 0 && formValue.nickname.trim().length > 0
	}

	return (
		<div className="limiter">
			<div className="container-login100">
				<div className="wrap-login100 p-t-50 p-b-90">

					<form onSubmit={ handleSubmit } className="login100-form validate-form flex-sb flex-w">

						<span className="login100-form-title mb-3">
							Register
						</span>

						<div className="wrap-input100 validate-input mb-3">
							<input className="input100" type="text" value={formValue.nickname} onChange={handleChange} name="nickname" placeholder="nickname" />
							<span className="focus-input100"></span>
						</div>

						
						<div className="wrap-input100 validate-input mb-3">
							<input className="input100" type="email" value={formValue.email} onChange={handleChange} name="email" placeholder="Email" />
							<span className="focus-input100"></span>
						</div>
						
						
						<div className="wrap-input100 validate-input mb-3">
							<input className="input100" type="password" value={formValue.password} onChange={handleChange} name="password" placeholder="Password" />
							<span className="focus-input100"></span>
						</div>
						
						<div className="row mb-3">
							<div className="col text-right">
								<NavLink to="/login" className="txt1">
									Ya tienes cuenta?
								</NavLink>
							</div>
							<div className="col">
								<input className="input-checkbox100" checked={ formValue.rememberMe } value={formValue.rememberMe} onChange={handleChange} id="ckb1" type="checkbox" name="remember-me" />
								<label className="label-checkbox100" htmlFor='ckb1'>
									Recordarme
								</label>
							</div>
						</div>
						

						<div className="container-login100-form-btn m-t-17">
							<button disabled={ !allOK() } type='submit' className="login100-form-btn">
								Crear cuenta
							</button>
						</div>

					</form>					
				</div>
			</div>
		</div>
	)
}

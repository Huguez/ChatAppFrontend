import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const initVal = { email: "", password: "", rememberMe: true }

export const LoginPage = () => {
	const [ formValue, setFormValue ] = useState( initVal )

	const { login } = useAuth()

	useEffect( () => {
		const data = JSON.parse( localStorage.getItem( "userAuthLogin" ) )
		
		if ( !!data ) {
			const { email, password } = data
			setFormValue( s => ({ ...s, email, password }) )  
		}
	}, [] )

	const handleChange = ( { target } ) => {
		const { name, value, checked } = target
		if ( name === "remember-me" ) {
			setFormValue( s => ({ ...s, rememberMe: checked }) )
		}else{
			setFormValue( s => ({ ...s, [name]: value }) )
		}
	}

	const handleSubmit = async ( e ) => {
		e.preventDefault()
		
		if ( formValue.rememberMe ) {
			localStorage.removeItem( "userAuthLogin" )
			const { email, password } = formValue
			localStorage.setItem( "userAuthLogin", JSON.stringify( { email, password } ) )
		} else {
			localStorage.removeItem( "userAuthLogin" )
		}

		await login( formValue.email, formValue.password )
	}

	const allOK = () => {
		return formValue.email.trim().length > 0 && formValue.password.trim().length > 0
	}

	return (
		<div className="limiter">
			<div className="container-login100">
				<div className="wrap-login100 p-t-50 p-b-90">

					<form onSubmit={ handleSubmit } className="login100-form validate-form flex-sb flex-w">

						<span className="login100-form-title mb-3">
							Log in
						</span>
						
						<div className="wrap-input100 validate-input mb-3">
							<input className="input100" value={formValue.email} onChange={handleChange} type="email" name="email" placeholder="Email" />
							<span className="focus-input100"></span>
						</div>
						
						
						<div className="wrap-input100 validate-input mb-3">
							<input className="input100" value={formValue.password} onChange={handleChange} type="password" name="password" placeholder="Password" />
							<span className="focus-input100"></span>
						</div>
						
						<div className="row mb-3">
							<div className="col text-right">
								<NavLink to="/register" className="txt1">
									Nueva cuenta
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
								Ingresar
							</button>
						</div>

					</form>				
				</div>
			</div>
		</div>
	)
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export const LoginPage = () => {
	return (
		<div className="limiter">
			<div className="container-login100">
				<div className="wrap-login100 p-t-50 p-b-90">

					<form className="login100-form validate-form flex-sb flex-w">

						<span className="login100-form-title mb-3">
							Log in
						</span>
						
						<div className="wrap-input100 validate-input mb-3">
							<input className="input100" type="email" name="email" placeholder="Email" />
							<span className="focus-input100"></span>
						</div>
						
						
						<div className="wrap-input100 validate-input mb-3">
							<input className="input100" type="password" name="password" placeholder="Password" />
							<span className="focus-input100"></span>
						</div>
						
						<div className="row mb-3">
							<div className="col text-right">
								<NavLink to="/register" className="txt1">
									Nueva cuenta
								</NavLink>
							</div>
						</div>

						<div className="container-login100-form-btn m-t-17">
							<button className="login100-form-btn">
								Ingresar
							</button>
						</div>

					</form>					

				</div>
			</div>
		</div>
	)
}

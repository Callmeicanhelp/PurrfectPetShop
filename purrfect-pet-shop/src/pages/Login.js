import {useState} from 'react'
import {useMutation} from '@apollo/client'
import {LOGIN} from '../utils/mutations'
import Auth from '../utils/auth'

const Login = (props) => {
	const [loginInfo, setLoginInfo] = useState({email:"", password:""})
	const [login, {error}] = useMutation(LOGIN);

	function change(event) {
		const {email, value}= event.target;
		setLoginInfo({...loginInfo, [email]: value})
	}
	
	const submitLogin = async (e) => {
		e.preventDefault();
		try {
			const {loginReq} = await login({ variables: {...loginInfo}});
			Auth.login(loginReq.login.token)
		} catch (e) {
			console.error(e)
		}
	}
	return(
		<form onSubmit={submitLogin}>
			<br></br>
			<h1 className="title">Welcome Back! Please Login</h1>
			<br></br>
			<div className="field">
				<p className="control has-icons-left has-icons-right">
					<input className="input is-primary is-rounded is-medium" type="email" onChange={change} name="email" value={loginInfo.email} placeholder="Email"></input>
					<span className="icon is-left">
						<i className="fas fa-envelope"></i>
					</span>
					<span className="icon is-medium is-right">
						<i className="fas fa-check"></i>
					</span>
				</p>
			</div>
			<div className="field">
				<p className="control has-icons-left">
					<input className="input is-primary is-rounded is-medium" type="password" onChange={change} name="password" value={loginInfo.password} placeholder="Password"></input>
					<span className="icon is-medium is-left">
						<i className="fas fa-lock"></i>
					</span>
				</p>
			</div>
			<div className='errorMsg'>
				{error && (
					<div>
						<p className='error-text is-danger'>{error}</p>
					</div>
				)}
			</div>
			<div className="control">
				<button className="button is-link">Login</button>
			</div>
		</form>
	)
}

export default Login
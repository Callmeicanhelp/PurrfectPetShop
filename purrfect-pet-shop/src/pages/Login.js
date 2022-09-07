import {useState} from 'react'
import Cookie from 'js-cookie'


function Login() {
	const [loginInfo, setLoginInfo] = useState({email:"", password:""})
	const {email,password} = loginInfo
	const [error, setError] = useState('');
	const [loginMessage, setLoginMessage] = useState({type:"", msg:""})

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	function change(e) {
		if(e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			console.log(isValid)
			if(!isValid) {
				setError('Invalid Email')
			} else {
				setError('')
			}
		} else {
			if(!e.target.value.length) {
				setError(`${e.target.name} is required`)
			} else{
				setError('')
			}
		}
		setLoginInfo({...loginInfo, [e.target.name]: [e.target.value]});

		if(!error) {
			setLoginInfo({...loginInfo, [e.target.name]: [e.target.value]});
		}
	}

	const submitLogin = async (e) => {
		e.preventDefault();
		setLoginMessage({type:"", msg:""})
		const verify = await fetch("/api/user/auth", {
			method:"POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(loginInfo)
		})
		const verifyLogin = await verifyLogin.json()

		if(verifyLogin === "success"){
			Cookie.set("auth-token", verifyLogin.token)
			setLoginMessage({type:"success", message:"Login successful! Welcome back! 😊"})
		} else {
			setLoginMessage({type:"danger", message:"Invalid login please try again"})
		}
		setLoginInfo({email:"", password:""})
	}
	return(
		<form onSubmit={submitLogin}>
			<br></br>
			<h1 className="title">Welcome Back! Please Login</h1>
			<br></br>
			<div className="field">
				<p className="control has-icons-left has-icons-right">
					<input className="input is-primary is-rounded is-medium" type="email" onChange={ (e) => setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })} name="email" value={loginInfo.email} placeholder="Email"></input>
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
					<input className="input is-primary is-rounded is-medium" type="password" onChange={ (e) => setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })} name="password" value={loginInfo.password} placeholder="Password"></input>
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
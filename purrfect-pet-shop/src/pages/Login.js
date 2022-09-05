import {useState} from 'react'

function Login() {
	const [formState, setFormState] = useState({email:'', message:''});
	const {email,password} = formState
	const [error, setError] = useState('');

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
		setFormState({...formState, [e.target.name]: [e.target.value]});

		if(!error) {
			setFormState({...formState, [e.target.name]: [e.target.value]});
		}
	}

	function submitChange(e) {
		e.preventDefault();
	}
	return(
		<form onSubmit={submitChange}>
			<br></br>
			<h1 className="title">Welcome Back! Please Login</h1>
			<br></br>
			<div className="field">
				<p className="control has-icons-left has-icons-right">
					<input className="input is-primary is-rounded is-medium" type="email" onChange={change} name="email" defaultValue={email} placeholder="Email"></input>
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
					<input className="input is-primary is-rounded is-medium" type="password" onChange={change} name="password" defaultValue={password} placeholder="Password"></input>
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
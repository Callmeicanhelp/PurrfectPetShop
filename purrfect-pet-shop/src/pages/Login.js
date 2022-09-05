function login() {
	return(
		<div>
			<div className="field">
				<p className="control has-icons-left has-icons-right">
					<input className="input is-primary is-rounded is-medium" type="email" placeholder="Email"></input>
					<span className="icon is-medium is-left">
						<i className="fas fa-envelope"></i>
					</span>
					<span className="icon is-medium is-right">
						<i className="fas fa-check"></i>
					</span>
				</p>
			</div>
			<div className="field">
				<p className="control has-icons-left">
					<input className="input is-primary is-rounded is-medium" type="password" placeholder="Password"></input>
					<span className="icon is-medium is-left">
						<i className="fas fa-lock"></i>
					</span>
				</p>
			</div>
		</div>
	)
}

export default login
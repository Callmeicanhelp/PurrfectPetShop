function Home() {
	return (
		<div>
			<section class="hero is-danger">
				<div class="hero-body">
					<p class="title">
						Welcome to Purrfect Pet Shop
					</p>
					<p class="subtitle">
						Where you can find pawsome deals for your furry friends
					</p>
				</div>
				<div className="imgContainer">
					<img src={require("../images/heroHomePage.jpg")} alt="cat laying upside down" className="heroImg"></img>
				</div>
			</section>
			<h1 className="title">About Us</h1>
			<h2 className="subtitle">
				Lorem ipsum dolor sit amet. Sit modi mollitia et dolorem repellat sit autem alias ut rerum dolorem. At inventore possimus qui quos corrupti non voluptatibus minima et debitis placeat.
			</h2>
		</div>
	)
}

export default Home
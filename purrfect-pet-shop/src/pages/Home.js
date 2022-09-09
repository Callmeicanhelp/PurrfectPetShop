function Home() {
  return (
    <div>
      <section class="hero is-danger">
        <div class="hero-body">
          <p class="title">Welcome to Purrfect Pet Shop</p>
          <p class="subtitle">
            Where you can find pawsome deals for your furry friends
          </p>
        </div>
        <div className="imgContainer">
          <img
            src={require("../images/heroHomePage.jpg")}
            alt="cat laying upside down"
            className="heroImg"
          ></img>
        </div>
      </section>
      <h1 className="title">About Us</h1>
      <h2 className="subtitle">
        Gary's favorite group. Cat lovers, but bre likes dogs more. Pretend like
        the rest of this is a bunch of interesting facts about us. Lorem ipsum
        dolor sit amet. Aut ipsam vitae aut illo internos aut corporis aperiam
        ut quisquam modi? Ex nesciunt aperiam quo ipsa fuga sed nesciunt natus
        non ducimus officiis ut voluptatem sint At iusto ipsa. Quidem dolor est
        sint consectetur cum molestiae dolores eos saepe dolorem aut sint harum
        quo blanditiis voluptatem. Nam officia internos hic excepturi placeat
        vel enim veniam. Et error unde qui rerum cumque est eius illum? Est
        dolor maiores qui tenetur inventore sed modi dignissimos. Nam ipsa
        recusandae et deserunt reiciendis in sint nobis. Sed facere minima aut
        earum nostrum nam suscipit quam et voluptatem impedit sit quia autem.
        Est placeat consequatur aut exercitationem maxime ut perspiciatis
        reprehenderit et suscipit odio et recusandae.
      </h2>
    </div>
  );
}

export default Home;

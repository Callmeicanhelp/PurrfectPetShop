function Costumes() {
  return (
    <section>
      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("../images/product-images/shark-costume.jpg")}
                    alt="Laser toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Shark Costume</p>
                    <p class="subtitle is-6">$29.99</p>
                  </div>
                </div>
                <div class="content">
                  Choose a plain color collar to add some kitty flair!
                </div>
                <div class="card-footer">
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("../images/product-images/bunny-costume.jpg")}
                    alt="Mouse toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Bunny Costume</p>
                    <p class="subtitle is-6">$29.99</p>
                  </div>
                </div>
                <div class="content">
                  Choose a glitter collar for kitty to really stand out!
                </div>
                <div class="card-footer">
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("../images/product-images/bee-costume.jpg")}
                    alt="Laser toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Bee Costume</p>
                    <p class="subtitle is-6">$29.99</p>
                  </div>
                </div>
                <div class="content">
                  Add a tag with name a number for the adventurous kittys!
                </div>
                <footer class="card-footer">
                  <button>Add to cart</button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("../images/product-images/dino-costume.jpg")}
                    alt="Laser toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Dino Costume</p>
                    <p class="subtitle is-6">$29.99</p>
                  </div>
                </div>
                <div class="content">
                  Kitty's gotta eat, let them do it in style!
                </div>
                <footer class="card-footer">
                  <button>Add to cart</button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Costumes;

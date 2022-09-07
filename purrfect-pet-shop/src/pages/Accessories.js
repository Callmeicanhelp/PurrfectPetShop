function Accessories() {
  return (
    <section>
      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("../images/product-images/plain-collar.jpg")}
                    alt="Laser toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Plain Collar</p>
                    <p class="subtitle is-6">$9.99</p>
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
                    src={require("../images/product-images/glitter-collar.jpg")}
                    alt="Mouse toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Glitter Collar</p>
                    <p class="subtitle is-6">$11.99</p>
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
                    src={require("../images/product-images/nametag.jpg")}
                    alt="Laser toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Name Tag</p>
                    <p class="subtitle is-6">$4.99</p>
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
                    src={require("../images/product-images/food-dish.jpg")}
                    alt="Laser toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Food Dish</p>
                    <p class="subtitle is-6">$7.99</p>
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

      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("../images/product-images/water-dish.jpg")}
                    alt="Laser toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Water Dish</p>
                    <p class="subtitle is-6">$7.99</p>
                  </div>
                </div>
                <div class="content">
                  Matches food dish for optimal cuteness!
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

export default Accessories;

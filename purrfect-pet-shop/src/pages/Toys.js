function Toys() {
  return (
    <section>
      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("../images/product-images/laser.jpg")}
                    alt="Laser toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Laser Toy</p>
                    <p class="subtitle is-6">$12.99</p>
                  </div>
                </div>
                <div class="content">
                  Entertain your pet with hours of light show fun! Batteries not
                  included.
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
                    src={require("../images/product-images/mice.jpg")}
                    alt="Mouse toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Mouse Toy</p>
                    <p class="subtitle is-6">$3.99</p>
                  </div>
                </div>
                <div class="content">
                  You kitty will love hunting these critters!
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
                    src={require("../images/product-images/string-toy.jpg")}
                    alt="Laser toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">String Toy</p>
                    <p class="subtitle is-6">$8.99</p>
                  </div>
                </div>
                <div class="content">
                  Hone your kitty's coordination with a toy on a string!
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

export default Toys;

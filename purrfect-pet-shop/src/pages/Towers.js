function Towers() {
  return (
    <section>
      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-4">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("../images/product-images/small-tower.jpg")}
                    alt="Laser toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Small Tower</p>
                    <p class="subtitle is-6">$40.99</p>
                  </div>
                </div>
                <div class="content">
                  Let your kitty run wild, scratch, play, and rest on this
                  purrfect perch!
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
                    src={require("../images/product-images/medium-tower.jpg")}
                    alt="Mouse toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Medium Tower</p>
                    <p class="subtitle is-6">$59.99</p>
                  </div>
                </div>
                <div class="content">
                  Let your kitty run wild, scratch, play, and rest on this
                  purrfect perch!
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
                    src={require("../images/product-images/large-tower.jpg")}
                    alt="Laser toy"
                  ></img>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Large Tower</p>
                    <p class="subtitle is-6">$74.99</p>
                  </div>
                </div>
                <div class="content">
                  Let your kitty run wild, scratch, play, and rest on this
                  purrfect perch!
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

export default Towers;

import React from "react";

function Blog() {
  return (
    <>
      <div>
  <section id="blog" className="blog">
    <div className="container">
      <div className="section-header">
        <h2>news and articles</h2>
        <p>Always upto date with our latest News and Articles </p>
      </div>
      <div className="blog-content">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="single-blog-item">
              <div className="single-blog-item-img">
                <img src="assets/images/blog/b1.jpg" alt="blog image" />
              </div>
              <div className="single-blog-item-txt">
                <h2><a href="#">How to find your Desired Place more quickly</a></h2>
                <h4>posted <span>by</span> <a href="#">admin</a> march 2018</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-blog-item">
              <div className="single-blog-item-img">
                <img src="assets/images/blog/b2.jpg" alt="blog image" />
              </div>
              <div className="single-blog-item-txt">
                <h2><a href="#">How to find your Desired Place more quickly</a></h2>
                <h4>posted <span>by</span> <a href="#">admin</a> march 2018</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="single-blog-item">
              <div className="single-blog-item-img">
                <img src="assets/images/blog/b3.jpg" alt="blog image" />
              </div>
              <div className="single-blog-item-txt">
                <h2><a href="#">How to find your Desired Place more quickly</a></h2>
                <h4>posted <span>by</span> <a href="#">admin</a> march 2018</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" className="subscription">
    <div className="container">
      <div className="subscribe-title text-center">
        <h2>
          do you want to add your business listing with us?
        </h2>
        <p>
          Listrace offer you to list your business with us and we very much able to promote your Business.
        </p>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="subscription-input-group">
            <form action="#">
              <input type="email" className="subscription-input-form" placeholder="Enter your email here" />
              <button className="appsLand-btn subscribe-btn" onclick="window.location.href='#'">
                creat account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    </>
  )
}

export default Blog;
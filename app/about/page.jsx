import Image from "next/image"
export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-dark text-white text-center py-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p>Learn more about our company and mission</p>
      </section>

      {/* MAIN ABOUT SECTION */}
      <div className="container my-5">
        <div className="row align-items-center">
          
          {/* TEXT */}
          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              We are a modern web development team focused on building
              responsive, fast, and user-friendly websites using Next.js,
              React, and Bootstrap.
            </p>

            <p>
              Our goal is to deliver clean UI designs and high-performance
              web applications for businesses.
            </p>
          </div>

          {/* IMAGE */}
          <div className="col-md-6">
            <Image
              src="/images/about.jpg"
              alt="About Us Image"
              width={600}
              height={400}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="container my-5">
        <div className="row text-center">
          
          <div className="col-md-4">
            <h4>🚀 Fast Development</h4>
            <p>We build fast and scalable websites.</p>
          </div>

          <div className="col-md-4">
            <h4>🎨 Clean Design</h4>
            <p>Modern UI with user-friendly experience.</p>
          </div>

          <div className="col-md-4">
            <h4>📱 Responsive</h4>
            <p>Works perfectly on all devices.</p>
          </div>

        </div>
      </div>
    </>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">Welcome to My Website</h1>
        <p>Modern Next.js Landing Page with Bootstrap</p>
      </section>

      {/* SECTION 1 */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>About Our Work</h2>
            <p>
              We build modern websites with clean UI and performance.
            </p>
          </div>

          <div className="col-md-6">
            <Image
              src="/images/hero.jpg"
              alt="Hero Image"
              width={600}
              height={400}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">🚀 Fast</div>
          <div className="col-md-4">🎨 Modern</div>
          <div className="col-md-4">📱 Responsive</div>
        </div>
      </div>
    </>
  );
}



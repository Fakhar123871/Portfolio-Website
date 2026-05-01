export default function Contact() {
  return (
    <div className="container my-5">
      <h1>Contact Us</h1>

      <input className="form-control my-2" placeholder="Name" />
      <input className="form-control my-2" placeholder="Email" />
      <textarea className="form-control my-2" placeholder="Message"></textarea>

      <button className="btn btn-primary">Send</button>
    </div>
  );
}
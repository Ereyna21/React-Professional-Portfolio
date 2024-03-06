export default function Contact() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Access form input values directly from the DOM
    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      message: event.target.elements.message.value
    };
    // Here you can perform any action with the form data, like sending it to a server
    console.log(formData);
    // Reset form fields after submission
    event.target.reset();
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
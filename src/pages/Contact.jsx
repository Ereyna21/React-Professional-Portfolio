import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email address is invalid';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length === 0) {
  //     // Perform the action with the form data, like sending it to a server
  //     console.log(formData);
  //     setIsSubmitted(true);
  //     // Reset form fields after submission
  //     setFormData({ name: '', email: '', message: '' });
  //   } else {
  //     setErrors(validationErrors);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://your-backend-url/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          // Handle error response from the server
          console.error('Failed to send email');
        }
      } catch (error) {
        // Handle network errors
        console.error('Network error:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Send Message</button>
      </form>
      {isSubmitted && <p className="success">Thank you for reaching out! I will be in touch soon.</p>}
      <style jsx>{`
        .contact {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          border: 1px solid #ccc;
          border-radius: 10px;
          background-color: #f9f9f9;
        }
        h2 {
          text-align: center;
          margin-bottom: 1rem;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
        }
        input, textarea {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .error {
          color: red;
          font-size: 0.875rem;
        }
        .success {
          color: green;
          text-align: center;
          margin-top: 1rem;
        }
        button {
          display: block;
          width: 100%;
          padding: 0.75rem;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: white;
          font-size: 1rem;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
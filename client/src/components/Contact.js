import React, { useState } from 'react';

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="message-section">
        <div className="container">
            <div className="row">
                {/* Contact Info: 4 Columns */}
                <div className="col-sm-12 col-md-4 contact-info">
                    <h2 className="section-title">Contact Info</h2>
                    <p>
                    Email: <a href="mailto:divineSconty@gmail.com">divineSconty@gmail.com</a><br />
                    Phone: +233549694644 <br />
                    LinkedIn: <a href="https://www.linkedin.com/in/divine-teyi-61001b240/" target="_blank" rel="noopener noreferrer">Divine Teyi</a><br />
                    YouTube: <a href="http://www.youtube.com/@divinesconty437" target="_blank" rel="noopener noreferrer">Divine Sconty</a>
                    </p>
                </div>

                {/* Leave a Message: 8 Columns */}
                <div className="col-sm-12 col-md-8">
                    <h2 className="section-title">Leave a Message</h2>
                    <form className="message-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input form-control"
                        placeholder="Enter your name"
                        />
                        {errors.name && <p className="error-text text-danger">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input form-control"
                        placeholder="Enter your email"
                        />
                        {errors.email && <p className="error-text text-danger">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input form-control"
                        placeholder="Enter your message"
                        />
                        {errors.message && <p className="error-text text-danger">{errors.message}</p>}
                    </div>
                    <button type="submit" className="btn btn-dark">
                        Submit
                    </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

  );
};

export default MessageForm;

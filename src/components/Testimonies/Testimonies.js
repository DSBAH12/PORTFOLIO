import React from 'react';
import './Testimonies.css';

const Testimonies = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. John Kamara',
      role: 'Professor, Computer Science Department',
      company: 'Njala University',
      image: 'user-1',
      text: 'Abubakarr is an exceptional student with a strong passion for web development. His projects demonstrate excellent understanding of HTML, CSS, and Bootstrap frameworks. He consistently delivers high-quality work.'
    },
    {
      id: 2,
      name: 'Sarah Conteh',
      role: 'Project Manager',
      company: 'Tech Solutions SL',
      image: 'user-2',
      text: 'Working with Abubakarr was a pleasure. He created a beautiful, responsive website for our company that exceeded our expectations. His attention to detail and commitment to quality is impressive.'
    },
    {
      id: 3,
      name: 'Mohamed Sesay',
      role: 'Client',
      company: 'Local Business Owner',
      image: 'user-3',
      text: 'Abubakarr transformed our business with a professional website. The design is modern, user-friendly, and works perfectly on all devices. Highly recommended for anyone needing web development services.'
    },
    {
      id: 4,
      name: 'Aminata Bangura',
      role: 'Colleague',
      company: 'Njala University',
      image: 'user-4',
      text: 'Abubakarr is a dedicated team player who always goes the extra mile. His technical skills combined with his willingness to help others make him an invaluable member of any development team.'
    }
  ];

  return (
    <section id="testimonies" className="testimonies">
      <div className="container">
        <h2 className="section-title">What People Say</h2>
        <p className="section-subtitle">
          Testimonials from clients, professors, and colleagues I've worked with
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;


import React from 'react';
import ContactForm from '../components/form/contactForm';

export default function Contact() {
  return (
    <div class="contactMeCard">
      <div class="card">
        <div class="card-body">
          Please feel free to contact me if you have any inquiries or suggestions.
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

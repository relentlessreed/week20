import React from 'react';
import ContactForm from '../components/form/contactForm';

export default function Contact() {
  return (
    <div class="contactMeCard">
      <div id="contactCardText">
        Please feel free to contact me if you have any inquiries or suggestions.
      </div>
      <ContactForm />
    </div>
  );
}

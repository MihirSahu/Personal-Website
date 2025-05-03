import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="container">
      <main className="contact">
        <h1>Contact</h1>
        <p>I&#39;d love to hear from you!</p>
        <p>The best way to contact me is by email at <Link target="_blank" href="mailto:mihir@mihirsahu.com">mihir@mihirsahu.com</Link>.</p>
      </main>
    </div>
  );
};

export default Contact;
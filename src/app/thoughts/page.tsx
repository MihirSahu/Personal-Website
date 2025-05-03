import React from 'react';
import Link from 'next/link';

const Thoughts = () => {
  return (
    <div className="container">
      <main className="thoughts">
        <h1>Thoughts</h1>
        <h2>2024</h2>
        <h3>August 25</h3>
        <Link target="_blank" href="https://medium.com/@mihirsahu/starting-with-why-3b715814d76a">Starting with Why?</Link>
        <br/>
        <h2>2022</h2>
        <Link target="_blank" href="https://medium.com/@mihirsahu/managing-contacts-with-monica-crm-b4fb371903c">Managing Contacts with Monica CRM</Link>
        <br/>
      </main>
    </div>
  );
};

export default Thoughts;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
  <div className='bg-slate-100 py- lg:px-20 px-6 min-h-screen'>
    <Helmet>
                <title>Smart Campus | CONTACT</title>
            </Helmet>
          <div className="container mx-auto mt-8">
    <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Smart Campus</h1>
    
    <p className="text-gray-700 mb-4">Have questions, suggestions, or just want to say hello? We'd love to hear from you! Use the contact form below to get in touch with the Smart Campus team.</p>

    <form method="post" className="lg:max-w-md">
        <div className="mb-4">
            <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name:</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"/>
        </div>

        <div className="mb-4">
            <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email:</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"/>
        </div>

        <div className="mb-4">
            <label for="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message:</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></textarea>
        </div>

        <button disabled type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Send Message</button>
    </form>
</div>
  </div>
    );
};

export default Contact;
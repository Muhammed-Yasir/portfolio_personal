import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">Let's work together on your next project</p>
        </div>

        <div className="mt-12">
          <form className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-indigo-600" />
              <span className="ml-3 text-gray-600">contact@example.com</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 text-indigo-600" />
              <span className="ml-3 text-gray-600">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 text-indigo-600" />
              <span className="ml-3 text-gray-600">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
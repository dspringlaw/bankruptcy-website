import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      {/* Contact Header */}
      <section className="bg-primary text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-serif font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Get in touch with our experienced bankruptcy attorneys for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Our Office</h2>
              
              {/* Address */}
              <div className="mb-8">
                <h3 className="text-lg font-serif font-bold mb-3">Address</h3>
                <div className="flex">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <address className="not-italic">
                    123 Legal Street, Suite 100<br />
                    Anytown, ST 12345<br />
                    United States
                  </address>
                </div>
              </div>
              
              {/* Contact Details */}
              <div className="mb-8">
                <h3 className="text-lg font-serif font-bold mb-3">Contact Details</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p>(555) 123-4567</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">Email</p>
                      <p>info@bankruptcylaw.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Map */}
              <div className="mb-8">
                <h3 className="text-lg font-serif font-bold mb-3">Location</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">
                    [Map would be embedded here in a production environment]
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Conveniently located in downtown Anytown, with ample parking available.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
              
              <div className="mt-8 bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-serif font-bold mb-3">Free Consultation</h3>
                <p className="mb-4">
                  We offer a free initial consultation to discuss your financial situation and explore your bankruptcy options.
                </p>
                <p className="font-medium">
                  Call us at (555) 123-4567 to schedule your consultation today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our bankruptcy legal services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-serif font-bold mb-2">Do you offer payment plans?</h3>
                <p className="text-gray-600">
                  Yes, we offer flexible payment plans to make our legal services accessible. We'll work with you to create a payment schedule that fits your budget.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-serif font-bold mb-2">How long does the bankruptcy process take?</h3>
                <p className="text-gray-600">
                  The timeline varies depending on the type of bankruptcy and your specific situation. A Chapter 7 bankruptcy typically takes 3-6 months, while a Chapter 13 bankruptcy involves a repayment plan that lasts 3-5 years.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-serif font-bold mb-2">What should I bring to my initial consultation?</h3>
                <p className="text-gray-600">
                  Please bring recent pay stubs, tax returns, major bills, loan statements, and any legal documents related to your financial situation. This will help us provide the most accurate advice for your circumstances.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-serif font-bold mb-2">Will I lose all my property if I file for bankruptcy?</h3>
                <p className="text-gray-600">
                  No, many types of property are protected under bankruptcy exemptions. Chapter 13 bankruptcy allows you to keep all your property while repaying debts, and even in Chapter 7, most people can keep their essential belongings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
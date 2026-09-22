import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaUser, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { GrMail } from "react-icons/gr";
import { BsPencilSquare } from "react-icons/bs";

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_w48eogg';
    const templateId = 'template_mo7jgxz';
    const publicKey = 'PEBVxHo3duK_rHXGf';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Henok Emyaye',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
        setStatus('success');
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md p-4 sm:p-6 border border-secondary-800 bg-secondary-900/90 space-y-3.5 max-w-lg mx-auto"
    >
      <div className="space-y-3.5">
        {/* Name Input */}
        <div>
          <label htmlFor="form-name" className="block text-sm font-medium text-secondary-200 mb-1.5">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="form-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-secondary-950 border border-secondary-800 focus:border-primary-500 rounded-md px-3.5 py-2.5 pl-10 text-secondary-100 placeholder-secondary-500 text-sm focus:outline-none transition-colors"
              required
            />
            <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 text-sm pointer-events-none" />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="form-email" className="block text-sm font-medium text-secondary-200 mb-1.5">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="form-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full bg-secondary-950 border border-secondary-800 focus:border-primary-500 rounded-md px-3.5 py-2.5 pl-10 text-secondary-100 placeholder-secondary-500 text-sm focus:outline-none transition-colors"
              required
            />
            <GrMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 text-sm pointer-events-none" />
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="form-message" className="block text-sm font-medium text-secondary-200 mb-1.5">
            Message
          </label>
          <div className="relative">
            <textarea
              id="form-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="How can I help you?"
              className="w-full bg-secondary-950 border border-secondary-800 focus:border-primary-500 rounded-md px-3.5 py-2.5 pl-10 text-secondary-100 placeholder-secondary-500 text-sm focus:outline-none resize-none transition-colors"
              required
            ></textarea>
            <BsPencilSquare className="absolute left-3.5 top-3.5 text-secondary-400 text-sm pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-4 rounded-md font-heading font-semibold text-sm sm:text-base text-white bg-primary-600 hover:bg-primary-500 transition-colors flex items-center justify-center gap-2.5 disabled:opacity-50"
      >
        {isSubmitting ? (
          <span>Sending...</span>
        ) : (
          <>
            <FaPaperPlane className="text-sm" /> Send Message
          </>
        )}
      </button>

      {/* Feedback Messages */}
      {status === 'success' && (
        <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm text-center flex items-center justify-center gap-2">
          <FaCheckCircle className="text-base" /> Message sent successfully!
        </div>
      )}

      {status === 'error' && (
        <div className="p-3 rounded-md bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm text-center">
          Failed to send. Please email me directly at emyayehenok@gmail.com
        </div>
      )}
    </form>
  );
}

export default Form;



import emailjs from '@emailjs/browser';
import React, { useRef, useState, useEffect } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showImage, setShowImage] = useState(window.innerWidth >= 500);

  useEffect(() => {
    const handleResize = () => {
      setShowImage(window.innerWidth >= 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = ({target : {name, value}}) => {
    setForm({...form, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    // EmailJS configuration
    const serviceID = 'service_63lw4zd';
    const templateID = 'template_67u1mr9';
    const publicKey = 'A1xG7IqjpRKFEnbNj';

    try {
      // Initialize EmailJS (if not already initialized)
      if (!emailjs.init) {
        console.warn('EmailJS init not available');
      } else {
        emailjs.init(publicKey);
      }

      // Prepare template parameters - match your template variables exactly
      const templateParams = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        message: form.message.trim(),
        title: `Portfolio Contact Form - ${form.name.trim()}`,
        time: new Date().toLocaleString()
      };

      console.log('=== SENDING EMAIL ===');
      console.log('Service ID:', serviceID);
      console.log('Template ID:', templateID);
      console.log('Public Key:', publicKey);
      console.log('Template Params:', templateParams);
      console.log('Full EmailJS Config:', {
        serviceID,
        templateID,
        publicKey,
        templateParams
      });

      // Use send method (more reliable than sendForm)
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log('✅ EMAIL SENT SUCCESSFULLY');
      console.log('Response:', response);
      console.log('Status:', response.status);
      console.log('Text:', response.text);
      
      setLoading(false);
      alert('✅ Your message has been sent successfully! I will get back to you soon.');
      
      // Reset form
      setForm({
        name: '',
        email: '',
        message: ''
      });

    } catch(error) {
      setLoading(false);
      
      // Comprehensive error logging
      console.error('========== EMAILJS ERROR ==========');
      console.error('Full error:', error);
      console.error('Error type:', typeof error);
      console.error('Error status:', error?.status);
      console.error('Error text:', error?.text);
      console.error('Error message:', error?.message);
      
      // Try to extract error text from response if available
      let errorText = '';
      let errorStatus = null;
      
      if (error?.text) {
        errorText = error.text;
      } else if (error?.message) {
        errorText = error.message;
      } else if (typeof error === 'string') {
        errorText = error;
      }
      
      if (error?.status !== undefined && error?.status !== null) {
        errorStatus = error.status;
      }
      
      // Build error message - always show something useful
      let errorMsg = '❌ Failed to send message\n\n';
      
      // Show status if available
      if (errorStatus !== null) {
        errorMsg += `Status Code: ${errorStatus}\n`;
      }
      
      // Show error text if available
      if (errorText) {
        errorMsg += `\n${errorText}\n\n`;
      }
      
      // Check for specific errors
      const errorTextLower = errorText.toLowerCase();
      
      if (errorTextLower.includes('template') && errorTextLower.includes('not found')) {
        errorMsg = '❌ Template ID Not Found\n\n';
        errorMsg += 'The template ID "' + templateID + '" does not exist.\n\n';
        errorMsg += '📋 Fix Steps:\n';
        errorMsg += '1. Go to: https://dashboard.emailjs.com/admin/templates\n';
        errorMsg += '2. Check if template "' + templateID + '" exists\n';
        errorMsg += '3. If not, create a new template or use an existing one\n';
        errorMsg += '4. Copy the correct Template ID\n';
        errorMsg += '5. Update the templateID in Contact.jsx\n\n';
        errorMsg += 'Current Template ID: ' + templateID + '\n';
        errorMsg += 'Current Service ID: ' + serviceID;
      } else if (errorTextLower.includes('invalid grant') || 
          errorTextLower.includes('gmail_api') ||
          errorTextLower.includes('reconnect')) {
        errorMsg = '❌ Gmail Connection Error\n\n';
        errorMsg += 'Your Gmail account needs to be reconnected.\n\n';
        errorMsg += '📋 Fix Steps:\n';
        errorMsg += '1. Go to: https://dashboard.emailjs.com\n';
        errorMsg += '2. Click "Email Services"\n';
        errorMsg += '3. Find: ' + serviceID + '\n';
        errorMsg += '4. Click "Reconnect Account"\n';
        errorMsg += '5. Sign in with Gmail\n';
        errorMsg += '6. Authorize EmailJS\n\n';
        errorMsg += 'Then try again!';
      } else if (errorStatus === 401) {
        errorMsg += '⚠️ Authentication Failed\n';
        errorMsg += 'Check your EmailJS public key\n';
      } else if (errorStatus === 404) {
        errorMsg += '⚠️ Not Found\n';
        errorMsg += 'Service or Template ID is incorrect\n';
        errorMsg += 'Check: ' + serviceID + ' / ' + templateID;
      } else if (errorStatus === 400) {
        errorMsg += '⚠️ Bad Request (400)\n\n';
        errorMsg += 'Possible causes:\n';
        errorMsg += '• Template ID is incorrect or deleted\n';
        errorMsg += '• Template variables don\'t match\n';
        errorMsg += '• Service ID is incorrect\n\n';
        errorMsg += 'Check EmailJS dashboard:\n';
        errorMsg += 'https://dashboard.emailjs.com/admin/templates';
      } else if (errorStatus === 412) {
        errorMsg += '⚠️ Precondition Failed (412)\n\n';
        errorMsg += 'Possible causes:\n';
        errorMsg += '• Gmail account needs reconnection\n';
        errorMsg += '• Template variables don\'t match\n';
        errorMsg += '• Service not properly connected\n\n';
        errorMsg += 'Check EmailJS dashboard';
      } else if (errorStatus === 0) {
        errorMsg += '⚠️ Network Error\n';
        errorMsg += 'Check your internet connection';
      } else if (errorStatus === 500) {
        errorMsg += '⚠️ Server Error\n';
        errorMsg += 'Try again later';
      } else if (!errorText && errorStatus === null) {
        errorMsg += '⚠️ Unknown Error\n';
        errorMsg += 'Check browser console (F12) for details';
      }
      
      // Always show alert with error
      console.error('Showing error to user:', errorMsg);
      alert(errorMsg);
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* Conditionally render the image */}
        {showImage && (
          <img
            id="terminal_image"
            src="/assets/terminal.png"
            alt="terminal-background"
            className="absolute inset-0 min-h-screen"
          />
        )}
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-1">
            Let’s connect over a coffee and explore how we can create exciting opportunities together. 
            I’m always eager to collaborate and discuss how my skills can contribute to your team’s success!
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col space-y-4">
            <label className="space-y-2">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Full Name"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Email"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Enter your Message"
              />
            </label>

            <button className='field-btn' type='submit' disabled={loading}>{loading ?'Sending..': 'Send Message'}
              <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow'/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

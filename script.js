/**
 * Za Twoim Przewodem - Main JavaScript File
 * Handles:
 * - Mobile navigation (hamburger menu)
 * - Form submissions (contact form, newsletter)
 * - Accessibility enhancements
 * - Basic analytics tracking
 */

// =============================================================================
// MOBILE NAVIGATION (HAMBURGER MENU)
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      // Toggle hamburger active state
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', 
        hamburger.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
      );
      
      // Toggle nav visibility
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!hamburger.contains(event.target) && !nav.contains(event.target)) {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
      }
    });
  }
});

// =============================================================================
// CONTACT FORM SUBMISSION
// =============================================================================

function handleContactFormSubmit(event) {
  event.preventDefault();

  // Get form elements
  const form = event.target;
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const phone = form.querySelector('[name="phone"]').value;
  const service = form.querySelector('[name="service"]').value;
  const message = form.querySelector('[name="message"]').value;
  const successMessage = document.getElementById('contact-form-success');

  // Create message object
  const contactData = {
    name: name,
    email: email,
    phone: phone,
    service: service,
    message: message,
    timestamp: new Date().toISOString(),
    source: 'contact_form'
  };

  // Log to console (for development)
  console.log('Contact form submitted:', contactData);

  // Simulate API call (in production, this would send to a backend)
  // Option 1: Using Formspree (free service)
  // Replace 'your@email.com' with your actual email
  const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

  // Option 2: Using EmailJS (requires signup)
  // sendContactFormViaEmailJS(contactData);

  // Option 3: Using fetch to a backend endpoint
  // sendContactFormToBackend(contactData);

  // Show success message
  successMessage.classList.add('show');

  // Reset form
  form.reset();

  // Hide success message after 5 seconds
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 5000);

  // Track event in Google Analytics (if GA4 is configured)
  if (window.gtag) {
    gtag('event', 'contact_form_submission', {
      'service': service,
      'name': name
    });
  }
}

// =============================================================================
// NEWSLETTER SUBSCRIPTION
// =============================================================================

function handleNewsletterSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.querySelector('[name="email"]').value;
  const successMessage = document.getElementById('newsletter-success');

  // Create subscription object
  const newsletterData = {
    email: email,
    timestamp: new Date().toISOString(),
    source: 'newsletter_signup'
  };

  console.log('Newsletter signup:', newsletterData);

  // Simulate API call
  // In production, connect to email service (Mailchimp, ConvertKit, etc.)
  // Example with Mailchimp:
  // subscribeToMailchimp(email);

  // Show success message
  successMessage.classList.add('show');

  // Reset form
  form.reset();

  // Hide success message after 5 seconds
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 5000);

  // Track in Google Analytics
  if (window.gtag) {
    gtag('event', 'newsletter_signup', {
      'email': email
    });
  }
}

// =============================================================================
// OPTIONAL: FORM SUBMISSION TO BACKEND
// =============================================================================

// Uncomment and modify this function if you have a backend endpoint
/*
function sendContactFormToBackend(data) {
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
*/

// =============================================================================
// OPTIONAL: EMAILJS INTEGRATION
// =============================================================================

// If using EmailJS, add this script tag to your HTML before closing </body>:
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
// Then uncomment this function:

/*
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

function sendContactFormViaEmailJS(data) {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    service: data.service,
    message: data.message,
    to_email: "info@zatwoimprzewodem.pl"
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function(response) {
      console.log('Email sent successfully!', response);
    }, function(error) {
      console.log('Failed to send email:', error);
    });
}
*/

// =============================================================================
// OPTIONAL: MAILCHIMP NEWSLETTER INTEGRATION
// =============================================================================

/*
function subscribeToMailchimp(email) {
  const mailchimpUrl = 'https://zatwoimprzewodem.us1.list-manage.com/subscribe/post?u=YOUR_USER_ID&id=YOUR_LIST_ID';
  
  fetch(mailchimpUrl, {
    method: 'POST',
    body: JSON.stringify({ EMAIL: email }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => console.log('Subscribed:', response))
  .catch(error => console.error('Error:', error));
}
*/

// =============================================================================
// SMOOTH SCROLLING (Already handled by CSS scroll-behavior: smooth)
// =============================================================================

// Optional: Add smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
  console.log('Smooth scrolling not supported - add polyfill if needed');
}

// =============================================================================
// ACCESSIBILITY ENHANCEMENTS
// =============================================================================

// Handle keyboard navigation for mobile menu
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    if (hamburger && nav.classList.contains('active')) {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
    }
  }
});

// =============================================================================
// ANALYTICS TRACKING (Google Analytics 4)
// =============================================================================

// Page view tracking is automatic with GA4
// You can track custom events like this:

function trackPageEvent(eventName, eventData = {}) {
  if (window.gtag) {
    gtag('event', eventName, eventData);
  } else {
    console.log('GA4 not initialized');
  }
}

// Example usage:
// trackPageEvent('service_view', { service_name: 'pomiary' });

// =============================================================================
// LAZY LOADING FOR IMAGES (Optional enhancement)
// =============================================================================

// If you add more images, consider lazy loading:
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// =============================================================================
// CONSOLE MESSAGE (Branding)
// =============================================================================

console.log(
  '%c🔌 Za Twoim Przewodem',
  'color: #D4A574; font-size: 16px; font-weight: bold;'
);
console.log(
  '%cProfesjonalne usługi elektryczne | https://zatwoimprzewodem.pl',
  'color: #666; font-size: 12px;'
);

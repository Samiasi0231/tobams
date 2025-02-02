// next.config.js
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public', // Destination for service worker and manifest files
    disable: process.env.NODE_ENV === 'development', // Disable service worker in development
  },
});

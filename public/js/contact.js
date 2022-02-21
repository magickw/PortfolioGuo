//contact form handler
async function contactFormHandler(event) {
    event.preventDefault();
  
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();s
  
    if (message && name && email && id) {
        const response = await fetch('/contact', {
          method: 'POST',
          body: JSON.stringify({
            id,
            name,
            email,
            message
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.contact-form').addEventListener('submit', contactFormHandler);
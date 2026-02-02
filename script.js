$(document).ready(function() {
    // Smooth page fade in
    $('body').hide().fadeIn(1000);

    // Click effect for the button
    $('#main-cta').click(function() {
        $(this).text("Let's go!");
        alert("Welcome to the modern web!");
    });

    // Hover effect for cards using jQuery
    $('.card').hover(
        function() { $(this).css("background-color", "#e8e8ed"); },
        function() { $(this).css("background-color", "#f5f5f7"); }
    );

    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Prevent page refresh
        
        // Hide the form and show success message
        $(this).fadeOut(400, function() {
            $('#form-feedback').fadeIn();
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = (a.getAttribute('href') || '').replace(/\/$/, '');
    if (href && (path.endsWith(href) || (path === '' && href === 'index.html'))) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
});
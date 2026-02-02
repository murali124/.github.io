$(document).ready(function () {
    // Initial load
    $('#content').hide().load('home.html', function () {
        // Content Loaded
    });

    // Splash Screen Logic
    setTimeout(function () {
        $('#splash-screen').fadeOut(800, function () {
            // Optional: Animation after splash screen
            $('#content').fadeIn(500);
        });
    }, 2500); // Show splash for 2.5 seconds

    // Navigation Handler
    $('.nav-links a').click(function (e) {
        e.preventDefault();

        var page = $(this).attr('href');

        // Update Active State
        $('.nav-links a').removeClass('active');
        $(this).addClass('active');

        // Load Content
        $('#content').fadeOut(200, function () {
            $(this).load(page, function () {
                $(this).fadeIn(500);
            });
        });
    });

    // Delegated Event Handlers (since content is dynamic)

    // Hero Button Click
    $(document).on('click', '#main-cta', function () {
        $(document).find("a[href='contact.html']").click();
    });

    // Contact Form Submit
    $(document).on('submit', '#contact-form', function (e) {
        e.preventDefault();

        var $form = $(this);
        $form.fadeOut(400, function () {
            $('#form-feedback').fadeIn();
        });
    });
});
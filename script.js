$(document).ready(function () {
    var ishidden = true;

    $('#other-works').hide();

    $('#show-other').on('click', function () {
        if (ishidden) {
            $('#other-works').show();
            $('#show-other').html(`Show less <i class="fas fa-chevron-up"></i>`);
            ishidden = false;
        } else {
            $('#other-works').hide();
            $('#show-other').html(`Show more <i class="fas fa-chevron-down"></i>`);
            ishidden = true;
        };
    });
})
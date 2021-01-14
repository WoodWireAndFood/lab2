$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Javascript is connected");
            });
    $("a.thumbnail").click(projectClick);
}

function projectClick(e) {
    e.preventDefault();
    if ($(this).css("background-color") == "#7fff00") {
        $(this).css("background-color", "#ffffff");
    }
    else {
        $(this).css("background-color", "#7fff00");
    }
}

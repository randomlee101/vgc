$(document).ready(function () {

    $(".post").hide();
    $(".new_post").hide();
    $(".sign_up").hide();
    $(".sign_in").hide();
    $("#sign_out").hide();
    $("#new_post").hide();

    $(".hamburger").click(
        function () {
            $(".list-items").toggle(()=>{
                $(this).slideDown()
            })
        }
    )
    $("#home").click(
        function () {
            $(".list-items").toggle(()=>{
                $(this).slideDown()
            })
        }
    )

    $(".link a").click(
        function () {
            $(".post").show();
            $(".posts").hide();
        }
    );

    $("#sign_in").click(
        function () {
            $("#sign_out").show();
            $("#register").hide();
            $("#new_post").show();
            $(".sign_in").slideDown()
            $(".sign_up").hide();
            $(".new_post").hide();
            $(".post").hide();
            $(".posts").hide();
            $(".list-items").toggle(()=>{
                $(this).slideDown();
                $("#sign_in").hide();
            })
        }
    )

    $("#sign_out").click(
        function () {
            $("#sign_in").show();
            $("#register").show();
            $("#new_post").hide();
            $(".sign_in").slideDown();
            $(".sign_up").hide();
            $(".new_post").hide();
            $(".post").hide();
            $(".posts").hide();
            $(".list-items").toggle(()=>{
                $(this).slideDown();
                $("#sign_out").hide();
            })
        }
    )

    $("#register").click(
        function () {
            $(this).hide();
            $("#sign_in").show();
            $("#sign_out").hide();
            $("#register").show();
            $("#new_post").hide();
            $(".sign_in").hide();
            $(".sign_up").slideDown();
            $(".new_post").hide();
            $(".post").hide();
            $(".posts").hide();
            $(".list-items").toggle(()=>{
                $(this).slideDown()
            })
        }
    )

    $("#new_post").click(
        function () {
            $(this).show();
            $("#sign_out").show();
            $("#sign_in").hide();
            $("#register").hide();
            $(".sign_in").hide();
            $(".sign_up").hide();
            $(".new_post").slideDown();
            $(".post").hide();
            $(".posts").hide();
            $(".list-items").toggle(()=>{
                $(this).slideDown()
            })
        }
    )

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'http://localhost:800/',
        success: (result, status, xhr) => {

            for (var i = 0; i < result.data.length; i++) {
                console.log(result.data[i].id + "\n" + result.data[i].author + "\n" + result.data[i].description + "\n" + result.data[i].full_story)
                $("body").append(
                    "<div class=\"posts\">" +
                    "<div class=\"title\">"
                    + result.data[i].author +
                    "</div>" +
                    "<div class=\"summary\">"
                    + result.data[i].description +
                    "</div>" +
                    "<div class=\"link\">" +
                    "<a href=\"#\">Read More</a>" +
                    "</div>" +
                    "</div>"
                )

            }
        },
        error: (xhr, status, error) => {
            console.log(error)
        }
    })

    $.ajax(
        {
            type: "GET",
            dataType: "json",
            url: "http://localhost:800/oyenike",
            success: (result, xhr, status) => {
                console.log(result.data)

            }
        }
    )

}
);
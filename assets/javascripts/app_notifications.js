$(document).ready(function () {
    $("#notificationsLink").click(function () {
        $("#notificationsContainer").remove();

        $.ajax({
            type    : "GET",
            url     : $(this).attr("href"),
            dataType: 'html',
            success : function (data) {
                $("#notificationsLink").parent().addClass('notification_li').append(data);
                $("#notificationsContainer").fadeToggle(300);
            }
        });

        return false;
    });

    // Document Click
    $(document).click(function () {
        $("#notificationsContainer").hide();
    });
    // Popup Click
    $("#notificationsContainer").click(function () {
        return false;
    });

    $(".view-notification").click(function () {
        var link = $(this);
        $.ajax({
            type    : "GET",
            url     : $(this).attr("href"),
            dataType: 'html',
            success : function () {
                link.parent().removeClass("new");
                link.remove();
            }
        });
        return false;
    });

    $("#notification_count").wrap("<span id='notification_count_wrapper'></span>");
});

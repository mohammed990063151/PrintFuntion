$(document).ready(function () {
    if (document.URL.includes("quiz/attempt.php")) {
        mscprintint();
        $(document).on("keydown", null, "ctrl+i", mscprint);
    }
    if (document.URL.includes("printlayout")) {
        $("#adminsettings").css("display", "none");
        MscQuestionsStyle();
        $(document).on("keydown", null, "ctrl+i", MscStyle);
    } else {
        if (document.referrer.includes("printlayout")) {
            location.href =(
                "https://training.practicemore.net/admin/settings.php?section=additionalhtml&printlayout=true"
            );
        }
    }
});

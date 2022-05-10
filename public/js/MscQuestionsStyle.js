








var _element = "body";

function MscQuestionsStyle(element = "body") {
    _element = element;

    // modal Html
    modalhtmlStyle = `








<form acion="" method="post" id="mscStyleModal" style="display: grid;
grid-template-columns: 1fr 1fr; grid-gap: 20px;">

    <fieldset class="form-group border p-3">
        <legend class="w-auto px-2"> Arabic </legend>
        <h5>Questions header</h5>
        <div class="row">
            <label for="recipient-name" class="col-form-label">Font Size:</label>
            <div class="col">
                <input type="text" class="form-control" id="QuestionsArabicSize" placeholder="Font Size"
                    name="QuestionsArabicSize">
                    </div>
                <div class="col">
                    <label for="recipient-name" class="col-form-label">Font Family:</label>
                    <select name="Family" class="form-control" id="QuestionsArabicFamily" required>
                        <option value="sans-serif">sans-serif</option>
                        <option value="auto">auto</option>
                        <option value="cursive">cursive</option>
                        <option value="emoji">emoji</option>
                        <option value="fangsong">fangsong</option>
                        <option value="inherit">inherit</option>
                        <option value="initial">initial</option>
                        <option value="inline-block">inline-block</option>
                        <option value="inline-flex">inline-flex</option>
                        <option value="inline-table">inline-table</option>
                        <option value="list-item">list-item</option>
                        <option value="none">none</option>
                        <option value="ui-serif">ui-serif</option>
                        <option value="-webkit-body">-webkit-body</option>



                    </select>
                </div>





                <label for="recipient-name" class="col-form-label">color:</label>
                <div class="col">
                    <input type="color" class="form-control" id="colorarabic" placeholder="color " name="colorarabic" onchange="this.style.background = this.value; console.log('done')">
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestions"
                            "> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsunderline"
                            "> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsitalic"
                            "> I
                    </label>
                </div>
            </div>

        </div>




        <h5>Questions body</h5>
        <div class="row">
    <label for="recipient-name" class="col-form-label">Font Size:</label>
            <div class="col">
                <input type="text" class="form-control" id="QuestionsArabicSizebody" placeholder="Font Size" name="QuestionsArabicSizebody">
                <div class="form-group col-md-6">
                    <label for="recipient-name" class="col-form-label">Font Family:</label>
                    <select name="Family" class="form-control" id="QuestionsArabicFamilybody" required>


                        <option value="sans-serif">sans-serif</option>
                        <option value="auto">auto</option>
                        <option value="cursive">cursive</option>
                        <option value="emoji">emoji</option>
                        <option value="fangsong">fangsong</option>
                        <option value="inherit">inherit</option>
                        <option value="initial">initial</option>
                        <option value="inline-block">inline-block</option>
                        <option value="inline-flex">inline-flex</option>
                        <option value="inline-table">inline-table</option>
                        <option value="list-item">list-item</option>
                        <option value="none">none</option>
                        <option value="ui-serif">ui-serif</option>
                        <option value="-webkit-body">-webkit-body</option>



                    </select>
                </div>




                <label for="recipient-name" class="col-form-label">color:</label>
                <div class="col">
                    <input type="color" class="form-control" id="colorarabicbody" placeholder="color "
                        name="colorarabicbody" onchange="this.style.background = this.value; console.log('done')">
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsBody"
                            "> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsBodyunderline"
                            "> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsBodyitalic"
                            "> I
                    </label>
                </div>
            </div>



            <h5> Answer</h5>
            <div class="form-row align-items-center">
                <label for="recipient-name" class="col-form-label">Font Size:</label>
                <div class="col-sm-3 my-1">
                    <input type="text" class="form-control" id="AnswerArabicSize" placeholder="Font Size"
                        name="AnswerArabicSize">
                </div>

                <div class="form-group col-md-6">
                    <label for="recipient-name" class="col-form-label">Font Family:</label>
                    <select name="Family" id="AnswerArabicFamily" class="form-control" required>


                        <option value="sans-serif">sans-serif</option>
                        <option value="auto">auto</option>
                        <option value="cursive">cursive</option>
                        <option value="emoji">emoji</option>
                        <option value="fangsong">fangsong</option>
                        <option value="inherit">inherit</option>
                        <option value="initial">initial</option>
                        <option value="inline-block">inline-block</option>
                        <option value="inline-flex">inline-flex</option>
                        <option value="inline-table">inline-table</option>
                        <option value="list-item">list-item</option>
                        <option value="none">none</option>
                        <option value="ui-serif">ui-serif</option>
                        <option value="-webkit-body">-webkit-body</option>



                    </select>

                    <label for="recipient-name" class="col-form-label">color:</label>
                    <div class="col">
                        <input type="color" class="form-control" id="colorAnswerArabic" placeholder="color "
                            name="colorAnswerArabic" onchange="this.style.background = this.value; console.log('done')">
                    </div>

                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswerArabic"
                            "> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswerArabicunderline"
                        "> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswerArabicitalic"
                            "> I
                    </label>
                </div>
            </div>
            <div class="form-check-inline">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="" id="checkinlieanswersArabic"
                        "> in one line
                </label>
            </div>
        </div>


        </div>
    </fieldset>





    <fieldset class="form-group border p-3">
        <legend class="w-auto px-2">english </legend>
        <h5>Questions header</h5>
        <div class="row">

            <label for="recipient-name" class="col-form-label">Font Size:</label>
            <div class="col">
                <input type="text" class="form-control" id="QuestionsEnglishSize" placeholder="Font Size" name="QuestionsEnglishSize">






                <div class="form-group col-md-6">
                    <label for="recipient-name" class="col-form-label">Font Family:</label>
                    <select name="Family" class="form-control"  id="QuestionsEnglishFamily" required>


                        <option value="sans-serif">sans-serif</option>
                        <option value="auto">auto</option>
                        <option value="cursive">cursive</option>
                        <option value="emoji">emoji</option>
                        <option value="fangsong">fangsong</option>
                        <option value="inherit">inherit</option>
                        <option value="initial">initial</option>
                        <option value="inline-block">inline-block</option>
                        <option value="inline-flex">inline-flex</option>
                        <option value="inline-table">inline-table</option>
                        <option value="list-item">list-item</option>
                        <option value="none">none</option>
                        <option value="ui-serif">ui-serif</option>
                        <option value="-webkit-body">-webkit-body</option>



                    </select>
                </div>







                <label for="recipient-name" class="col-form-label">color:</label>
                <div class="col">
                    <input type="color" class="form-control" id="colorEnglishmsc" placeholder="color "
                        name="colorEnglishmsc" onchange="this.style.background = this.value; console.log('done')">
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsEnglish"
                            "> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsEnglishunderline"
                           "> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsEnglishitalic"
                            "> I
                    </label>
                </div>
            </div>

        </div>
        <h5>Questions body</h5>
        <div class="row">

            <label for="recipient-name" class="col-form-label">Font Size:</label>
            <div class="col">
                <input type="text" class="form-control" id="QuestionsEnglishSizeBody" placeholder="Font Size" name="QuestionsEnglishSizeBody">






                <div class="form-group col-md-6">
                    <label for="recipient-name" class="col-form-label">Font Family:</label>
                    <select name="Family" class="form-control" id="QuestionsEnglishFamilyBody" required>


                        <option value="sans-serif">sans-serif</option>
                        <option value="auto">auto</option>
                        <option value="cursive">cursive</option>
                        <option value="emoji">emoji</option>
                        <option value="fangsong">fangsong</option>
                        <option value="inherit">inherit</option>
                        <option value="initial">initial</option>
                        <option value="inline-block">inline-block</option>
                        <option value="inline-flex">inline-flex</option>
                        <option value="inline-table">inline-table</option>
                        <option value="list-item">list-item</option>
                        <option value="none">none</option>
                        <option value="ui-serif">ui-serif</option>
                        <option value="-webkit-body">-webkit-body</option>



                    </select>
                </div>








                <label for="recipient-name" class="col-form-label">color:</label>
                <div class="col">
                    <input type="color" class="form-control" id="colorEnglishBody" placeholder="color "
                        name="colorEnglishBody" onchange="this.style.background = this.value; console.log('done')">
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsEnglishbody"
                            "> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsEnglishbodyunderline"
                            "> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsEnglishbodyitalic"
                            "> I
                    </label>
                </div>
            </div>



            <h5> Answer</h5>
            <div class="form-row align-items-center">
                <label for="recipient-name" class="col-form-label">Font Size:</label>
                <div class="col-sm-3 my-1">
                    <input type="text" class="form-control" id="AnswerenglishSize" placeholder="Font Size"
                        name="AnswerenglishSize">
                </div>


                <div class="form-group col-md-6">
                    <label for="recipient-name" class="col-form-label">Font Family:</label>
                    <select name="Family" class="form-control" id="AnswerenglishFamily" required>


                        <option value="sans-serif">sans-serif</option>
                        <option value="auto">auto</option>
                        <option value="cursive">cursive</option>
                        <option value="emoji">emoji</option>
                        <option value="fangsong">fangsong</option>
                        <option value="inherit">inherit</option>
                        <option value="initial">initial</option>
                        <option value="inline-block">inline-block</option>
                        <option value="inline-flex">inline-flex</option>
                        <option value="inline-table">inline-table</option>
                        <option value="list-item">list-item</option>
                        <option value="none">none</option>
                        <option value="none">revert</option>
                        <option value="none">ui-rounded</option>
                        <option value="ui-serif">ui-serif</option>
                        <option value="-webkit-body">-webkit-body</option>



                    </select>
                </div>

                <label for="recipient-name" class="col-form-label">color:</label>
                <div class="col">
                    <input type="color" class="form-control" id="colorAnswerenglish" placeholder="color "
                        name="colorAnswerenglish" onchange="this.style.background = this.value; console.log('done')">
                </div>

                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswerEnglish"
                            "> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswerEnglishunderline"
                            "> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswerEnglishitalic"
                           "> I
                    </label>
                </div>


            </div>
            <div class="form-check-inline">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="" id="checkinlieanswersenglise"
                        "> in one line
                </label>
            </div>
        </div>
        </div>


        </div>
    </fieldset>
</form>

<div class="modal-footer" style="padding: 1px 53px 8px;
margin-bottom: 0;
text-align: right;
border-radius: 0 0 6px 6px;
background-color: #fff;
border-top: 1px solid #fff;">
    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="close">Close</button>
    <button type="button" class="btn btn-primary" data-dismiss="modal" id="print_Button"
        onclick="MscStyleElement()">save</button>

`;

    $("#region-main").append(modalhtmlStyle);
}
// show modal
function MscStyle() {
    $("[style]").removeAttr("style");
    $("#adminsettings").css("display", "none");
    // document.getElementById("region-main").innerHTML = 'modalhtmlStyle';
    $("#mscStyleModal").css("position", "absolute").modal("show");

    $("#mscStyleModal").css("display", "block");
}

// chang  css page
// header arabic

function MscStyleElement() {
    QuestionsArabicSize = $("#QuestionsArabicSize").val();

    QuestionsArabicFamily = $("#QuestionsArabicFamily").val();

    QuestionsArabicWeight = $("#QuestionsArabicWeight").val();

    colorarabic = $("#colorarabic").val();

    // body arabic

    QuestionsArabicSizebody = $("#QuestionsArabicSizebody").val();

    QuestionsArabicFamilybody = $("#QuestionsArabicFamilybody").val();

    QuestionsArabicWeightbody = $("#QuestionsArabicWeightbody").val();

    colorarabicbody = $("#colorarabicbody").val();

    // Answer arabic

    AnswerArabicSize = $("#AnswerArabicSize").val();

    AnswerArabicFamily = $("#AnswerArabicFamily").val();

    AnswerArabicWeight = $("#AnswerArabicWeight").val();

    colorAnswerArabic = $("#colorAnswerArabic").val();

    // header English
    QuestionsEnglishSize = $("#QuestionsEnglishSize").val();

    QuestionsEnglishFamily = $("#QuestionsEnglishFamily").val();

    QuestionsEnglishWeight = $("#QuestionsEnglishWeight").val();

    colorEnglishmsc = $("#colorEnglishmsc").val();

    // body english

    QuestionsEnglishSizeBody = $("#QuestionsEnglishSizeBody").val();

    QuestionsEnglishFamilyBody = $("#QuestionsEnglishFamilyBody").val();

    QuestionsEnglishWeightBody = $("#QuestionsEnglishWeightBody").val();

    colorEnglishBody = $("#colorEnglishBody").val();

    // Answer english

    AnswerenglishSize = $("#AnswerenglishSize").val();

    AnswerenglishFamily = $("#AnswerenglishFamily").val();

    AnswerenglishWeight = $("#AnswerenglishWeight").val();

    colorAnswerenglish = $("#colorAnswerenglish").val();

    var style = `<style id='msc'>
.TableGrid
{
width: 100% !important;
border: 0px !important;
}
.TableGrid .arabic
{
text-align: right !important;
}
.answer .arabicanswer{
    text-align: right !important;
    font-family: ${AnswerArabicFamily} !important;
    font-size: ${AnswerArabicSize + "px"} !important;
    color: ${colorAnswerArabic} !important;
    ${
        document.getElementById("checkAnswerArabic").checked
            ? "font-weight:bold !important;"
            : ""
    }
    ${
        document.getElementById("checkAnswerArabicunderline")
            .checked
            ? "text-decoration:underline !important;"
            : ""
    }
    ${
        document.getElementById("checkAnswerArabicitalic")
            .checked
            ? "font-style:italic !important;"
            : ""
    }
    ${
        document.getElementById("checkinlieanswersArabic")
            .checked
            ? "display: inline-flex !important;"
            : ""
    }
}
.r0 > .arabic
{
color: ${colorarabic} !important;
font-family: ${QuestionsArabicFamily} !important;
font-size: ${QuestionsArabicSize + "px"} !important;
${
    document.getElementById("checkQuestions").checked
        ? "font-weight:bold !important;"
        : ""
}
${
    document.getElementById("checkQuestionsunderline")
        .checked
        ? "text-decoration:underline !important;"
        : ""
}
${
    document.getElementById("checkQuestionsitalic")
        .checked
        ? "font-style:italic !important;"
        : ""
}
}
.r1 > .arabic
{
color: ${colorarabicbody} !important;
font-family: ${QuestionsArabicFamilybody}!important;
font-size: ${QuestionsArabicSizebody + "px"} !important;
${
    document.getElementById("checkQuestionsBody").checked
        ? "font-weight:bold !important;"
        : ""
}
${
    document.getElementById("checkQuestionsBodyunderline")
        .checked
        ? "text-decoration:underline !important;"
        : ""
}
${
    document.getElementById("checkQuestionsBodyitalic")
        .checked
        ? "font-style:italic !important;"
        : ""
}
}
.TableGrid .english
{
text-align: left !important;
}
.answer .englishanswer{
    text-align: left !important;
    font-family: ${AnswerenglishFamily} !important;
    font-size: ${AnswerenglishSize + "px"} !important;
    color: ${colorAnswerenglish} !important;
    ${
        document.getElementById("checkAnswerEnglish").checked
            ? "font-weight:bold !important;"
            : ""
    }
    ${
        document.getElementById("checkAnswerEnglishunderline")
            .checked
            ? "text-decoration:underline !important;"
            : ""
    }
    ${
        document.getElementById("checkAnswerEnglishitalic")
            .checked
            ? "font-style:italic !important;"
            : ""
    }
    ${
    document.getElementById("checkinlieanswersenglise")
        .checked
        ? "display: inline-flex !important;"
        : ""
}
}
.r0 > .english
{
color: ${colorEnglishmsc} !important;
font-family: ${QuestionsEnglishFamily} !important;
font-size: ${QuestionsEnglishSize + "px"} !important;
${
    document.getElementById("checkQuestionsEnglish").checked
        ? "font-weight:bold !important;"
        : ""
}
${
    document.getElementById("checkQuestionsEnglishunderline")
        .checked
        ? "text-decoration:underline !important;"
        : ""
}
${
    document.getElementById("checkQuestionsEnglishitalic")
        .checked
        ? "font-style:italic !important;"
        : ""
}
}
.r1 > .english
{
    color: ${colorEnglishBody} !important;
    font-family: ${QuestionsEnglishFamilyBody} !important;
    font-size: ${QuestionsEnglishSizeBody + "px"} !important;
    ${
        document.getElementById("checkQuestionsEnglishbody").checked
            ? "font-weight:bold !important;"
            : ""
    }
    ${
        document.getElementById("checkQuestionsEnglishbodyunderline")
            .checked
            ? "text-decoration:underline !important;"
            : ""
    }
    ${
        document.getElementById("checkQuestionsEnglishbodyitalic")
            .checked
            ? "font-style:italic !important;"
            : ""
    }
}
</style>`;

    $("#msc").remove();

    $("head").append(style);

    old = $(id_s__additionalhtmlhead).val();
    result = old.indexOf("</style>") + 8;
    let other = old.substring(result);
    let newh = style + other;
    $(id_s__additionalhtmlhead).val(newh);
    document.forms[2].submit();
}

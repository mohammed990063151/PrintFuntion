<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">

</head>

<body>
    <br><br><br><br><br><br><br><br>
    <form>
        <div class="form-group" id="mohammed">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br><br><br><br><br><br><br><br>

    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
        Launch demo modal
    </button>

    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form acion="" method="post">

                        <fieldset class="form-group border p-3">
                            <legend class="w-auto px-2"> Arabic </legend>
                            <div class="form-row align-items-center">
                                <label for="recipient-name" class="col-form-label">Font Size:</label>&ensp;&ensp;&nbsp;
                                <div class="col-sm-3 my-1">
                                    <input type="text" class="form-control" id="arabicSize" placeholder="Font Size"
                                        name="arabicSize">
                                </div>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="" id="checkarabic"
                                            onclick="toggleBoxarabicbold()"> B
                                    </label>
                                </div>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value=""
                                            id="checkarabicunderline" onclick="toggleBoxarabicunderline()"> U
                                    </label>
                                </div>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="" id="checkarabicitalic"
                                            onclick="toggleBoxarabicitalic()"> I
                                    </label>
                                </div>
                            </div>
                            <div class="form-row align-items-center">
                                <label for="recipient-name" class="col-form-label">Font Family:</label>
                                <div class="col">
                                    <input type="text" class="form-control" id="Familyarabic"
                                        placeholder="Font Family " name="Familyarabic">
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="form-group border p-3">
                            <legend class="w-auto px-2">english </legend>
                            <div class="form-row align-items-center">
                                <label for="recipient-name" class="col-form-label">Font Size:</label>&ensp;&ensp;&nbsp;
                                <div class="col-sm-3 my-1">
                                    <input type="text" class="form-control" id="AnswerSize" placeholder="Font Size"
                                        name="AnswerSize">
                                </div>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="" id="checkAnswer"
                                            onclick="toggleBoxbold()"> B
                                    </label>
                                </div>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value=""
                                            id="checkAnswerunderline" onclick="toggleBoxunderline()"> U
                                    </label>
                                </div>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="" id="checkAnsweritalic"
                                            onclick="toggleBoxitalic()"> I
                                    </label>
                                </div>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="" id="checkinlieanswers"
                                            onclick="toggleBoxitalic()"> in one line
                                    </label>
                                </div>
                            </div>
                            <div class="form-row align-items-center">
                                <label for="recipient-name" class="col-form-label">Font Family:</label>
                                <div class="col">
                                    <input type="text" class="form-control" id="AnswerFamily"
                                        placeholder="Font Family" name="AnswerFamily">
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="close">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" id="print_Button"
                        onclick="mscprintelement()">save</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous">
    </script>
    <script src="/js/mscprint2.js"></script>
    <script>
        // $(document).ready(function (){
        //     alert('mohammed');
        // });
    </script>
</body>

</html>










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
                <div class="form-group col-md-6">
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


                <label for="recipient-name" class="col-form-label">font-weight:</label>
                <div class="col">
                    <input type="text" class="form-control" id="QuestionsArabicWeight" placeholder="font-weight "
                        name="QuestionsArabicWeight">
                </div>


                <label for="recipient-name" class="col-form-label">color:</label>
                <div class="col">
                    <input type="color" class="form-control" id="colorarabic" placeholder="color " name="colorarabic">
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestions"
                            onclick="toggleBoxbold()"> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsunderline"
                            onclick="toggleBoxunderline()"> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsitalic"
                            onclick="toggleBoxitalic()"> I
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

                <label for="recipient-name" class="col-form-label">font-weight:</label>
                <div class="col">
                    <input type="text" class="form-control" id="QuestionsArabicWeightbody" placeholder="font-weight "
                        name="QuestionsArabicWeightbody">
                </div>


                <label for="recipient-name" class="col-form-label">color:</label>
                <div class="col">
                    <input type="color" class="form-control" id="colorarabicbody" placeholder="color "
                        name="colorarabicbody">
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsBody"
                            onclick="toggleBoxbold()"> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsBodyunderline"
                            onclick="toggleBoxunderline()"> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkQuestionsBodyitalic"
                            onclick="toggleBoxitalic()"> I
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
                </div>
                <label for="recipient-name" class="col-form-label">font-weight:</label>
                <div class="col">
                    <input type="text" class="form-control" id="AnswerArabicWeight" placeholder="font-weight "
                        name="AnswerArabicWeight">
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswer"
                            onclick="toggleBoxbold()"> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswerunderline"
                            onclick="toggleBoxunderline()"> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnsweritalic"
                            onclick="toggleBoxitalic()"> I
                    </label>
                </div>
            </div>
            <div class="form-check-inline">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="" id="checkinlieanswers"
                        onclick="toggleBoxitalic()"> in one line
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




                <label for="recipient-name" class="col-form-label">font-weight:</label>
                <div class="col">
                    <input type="text" class="form-control" id="QuestionsEnglishWeight" placeholder="font-weight "
                        name="QuestionsEnglishWeight">
                </div>


                <label for="recipient-name" class="col-form-label">color:</label>
                <div class="col">
                    <input type="color" class="form-control" id="colorEnglish" placeholder="color "
                        name="colorEnglish">
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswer"
                            onclick="toggleBoxbold()"> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswerunderline"
                            onclick="toggleBoxunderline()"> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnsweritalic"
                            onclick="toggleBoxitalic()"> I
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





                <label for="recipient-name" class="col-form-label">font-weight:</label>
                <div class="col">
                    <input type="text" class="form-control" id="QuestionsEnglishWeightBody" placeholder="font-weight "
                        name="QuestionsEnglishWeightBody">
                </div>


                <label for="recipient-name" class="col-form-label">color:</label>
                <div class="col">
                    <input type="color" class="form-control" id="colorEnglishBody" placeholder="color "
                        name="colorEnglishBody">
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswer"
                            onclick="toggleBoxbold()"> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswerunderline"
                            onclick="toggleBoxunderline()"> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnsweritalic"
                            onclick="toggleBoxitalic()"> I
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
                        <option value="ui-serif">ui-serif</option>
                        <option value="-webkit-body">-webkit-body</option>



                    </select>
                </div>

                <label for="recipient-name" class="col-form-label">font-weight:</label>
                <div class="col">
                    <input type="text" class="form-control" id="AnswerenglishWeight" placeholder="font-weight "
                        name="AnswerenglishWeight">
                </div>

                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswer"
                            onclick="toggleBoxbold()"> B
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnswerunderline"
                            onclick="toggleBoxunderline()"> U
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id="checkAnsweritalic"
                            onclick="toggleBoxitalic()"> I
                    </label>
                </div>


            </div>
            <div class="form-check-inline">
                <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="" id="checkinlieanswers"
                        onclick="toggleBoxitalic()"> in one line
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
        onclick="mscprintelement()">save</button>
        if (!_element) _element = "body";
        // remove style
        $("[style]").removeAttr("style");
        $(".info").remove();

        // chang  css page
        //header arabic
        QuestionsArabicSize = $("#QuestionsArabicSize").val();
        $(".arabic").css("fontSize", QuestionsArabicSize + "px");

        QuestionsArabicFamily = $("#QuestionsArabicFamily").val();
        $(".arabic").css("fontFamily", QuestionsArabicFamily);

        QuestionsArabicWeight = $("#QuestionsArabicWeight").val();
        $(".arabic").css("fontWeight", QuestionsArabicWeight );

        colorarabic = $("#colorarabic").val();
        $(".arabic").css("color", colorarabic);


        //body arabic

        QuestionsArabicSizebody = $("#QuestionsArabicSizebody").val();
        $(".arabic").css("fontSize", QuestionsArabicSizebody + "px");

        QuestionsArabicFamilybody = $("#QuestionsArabicFamilybody").val();
        $(".arabic").css("fontFamily", QuestionsArabicFamilybody);

        QuestionsArabicWeightbody = $("#QuestionsArabicWeightbody").val();
        $(".arabic").css("fontWeight", QuestionsArabicWeightbody );

        colorarabicbody = $("#colorarabicbody").val();
        $(".arabic").css("color", colorarabicbody);
        //
        // Answer arabic

        AnswerArabicSize = $("#AnswerArabicSize").val();
        $(".arabic").css("fontSize", AnswerArabicSize + "px");

        AnswerArabicFamily = $("#AnswerArabicFamily").val();
        $(".arabic").css("fontFamily", AnswerArabicFamily);

        AnswerArabicWeight = $("#AnswerArabicWeight").val();
        $(".arabic").css("fontWeight", AnswerArabicWeight);

        // colorarabicAnswer = $("#colorarabicAnswer").val();
        // $(".arabic").css("color", colorarabicAnswer);



        //header English
        QuestionsEnglishSize = $("#QuestionsEnglishSize").val();
        $(".english").css("fontSize", QuestionsEnglishSize + "px");

        QuestionsEnglishFamily = $("#QuestionsEnglishFamily").val();
        $(".english").css("fontFamily", QuestionsEnglishFamily);

        QuestionsEnglishWeight = $("#QuestionsEnglishWeight").val();
        $(".english").css("fontWeight", QuestionsEnglishWeight );

        colorarabic = $("#colorEnglish").val();
        $(".english").css("color", colorEnglish);


        //body english

        QuestionsEnglishSizeBody = $("#QuestionsEnglishSizeBody").val();
        $(".english").css("fontSize", QuestionsEnglishSizeBody + "px");

        QuestionsEnglishFamilyBody = $("#QuestionsEnglishFamilyBody").val();
        $(".english").css("fontFamily", QuestionsEnglishFamilyBody);

        QuestionsEnglishWeightBody = $("#QuestionsEnglishWeightBody").val();
        $(".english").css("fontWeight", QuestionsenglishWeightBody );

        colorEnglishBody = $("#colorEnglishBody").val();
        $(".english").css("color", colorEnglishBody);
        //
        // Answer english


        AnswerenglishSize = $("#AnswerenglishSize").val();
        $(".english").css("fontSize", AnswerenglishSize + "px");

        AnswerenglishFamily = $("#AnswerenglishFamily").val();
        $(".english").css("fontFamily", AnswerenglishFamily);

        AnswerenglishWeight = $("#AnswerenglishWeight").val();
        $(".english").css("fontWeight", AnswerArabicWeight);

        // colorenglishAnswer = $("#colorenglishAnswer").val();
        // $(".english").css("color", colorenglishAnswer);



        var style = `<style>
        .TableGrid
        {
        width: 100% !important;
        border: 0px !important;
        }
        .TableGrid .arabic
        {
        text-align: right !important;
        font-family: "${QuestionsArabicFamily}";
        font-weight: ${QuestionsFamilys};
        font-size: ${QuestionsArabicSize};

        }
        .r0 > .arabic
        {
        color: ${colorarabic} !important;
        }
        .r1 > .arabic
        {
        color: ${QuestionsFamilys} !important;
        }
        .TableGrid .english
        {
        text-align: left !important;
        font-family: ${QuestionsFamilys};
        font-weight= ${QuestionsFamilys} !important ;
        font-size: ${QuestionsFamilys};
        }
        .r0 > .english
        {
        color: ${QuestionsFamilys} !important;
        }
        .r1 > .english
        {
        color: ${QuestionsFamilys} !important;
        }
        </style>`;



        <style id='msc'>
.TableGrid
{
width: 100% !important;
border: 0px !important;
}
.TableGrid .arabic
{
text-align: right !important;


}
.r0 > .arabic
{
color: black !important;
font-family: "Traditional Arabic" !important;
font-size: 16pt !important;
}
.r1 > .arabic
{
color: black !important;
font-family: "Traditional Arabic" !important;
font-weight: bold !important;
font-size: 16pt !important;
}
.TableGrid .english
{
text-align: left !important;
font-family: Arial;
font-weight= bold !important ;
font-size: 21px;
}
.r0 > .english
{
color: black !important;
}
.r1 > .english
{
color: black !important;
}
</style>






























        $(id_s__additionalhtmlhead)
        old  =  $(id_s__additionalhtmlhead).val()
        old
        old.indexOf("</style>",1)
        old.indexOf("</style>")
        old.substring(0,497)
        old.substring(0,497+8)
        old.indexOf("</style>")+8
        old.substring(old.indexOf("</style>")+8)
        other = old.substring(old.indexOf("</style>")+8);
        Style = "1111111111111111111111" ;

        newh = Style + other;
        $(id_s__additionalhtmlhead).val(newh)
        $(id_s__additionalhtmlhead).val(newh)
        newh = "000000000000000000000000" + other;
        $(id_s__additionalhtmlhead).val(newh)




        function mscstyle() {
if (!_element) _element = "body";
// remove style
$("[style]").removeAttr("style");
$(".info").remove();
}

old = $(id_s__additionalhtmlhead).val();
result = old.indexOf("</style>",1);
result = old.indexOf("</style>");
result = old.indexOf(0,528+8);
result = old.indexOf("</style>")+8;
let other = old.substring(old.indexOf("</style>")+8);
let newh= style + other;
 $(id_s__additionalhtmlhead).val(newh);
}




















































<style id='msc'>
    .TableGrid
    {
    width: 100% !important;
    border: 0px !important;
    }
    .TableGrid .arabic
    {
    text-align: right !important;
    font-family: "sans-serif";
    font-weight: ;
    font-size: px;

    }
    .r0 > .arabic
    {
    color: #000000 !important;
    }
    .r1 > .arabic
    {
    color: #000000 !important;
    }
    .TableGrid .english
    {
    text-align: left !important;
    font-family: sans-serif;
    font-weight= ;
    font-size: px;
    }
    .r0 > .english
    {
    color: [object HTMLInputElement] !important;
    }
    .r1 > .english
    {
    color: [object HTMLInputElement] !important;
    }

    .answer{
        text-align: left !important;
        font-family: sans-serif;
        font-weight= ;
        font-size: px;
    }

    </style>

    <script>
    var lang = document.getElementsByTagName("Html")[0].getAttribute("lang");
    if(document.URL.includes("login/signup.php") && lang !="ar")
    {
    window.open("http://training.practicemore.net/login/signup.php?lang=ar",'_self')
    }
    </script>


    <style>
    @media print
    {
    .info,#page-header
    {
    display: none;
    }
    }
    .availabilityinfo
    {
    display:none;
    }

    $( "table:contains('---')" ).css( "background-color", "bisque" );
    .flexible generaltable generalbox grades{background-color:red;}
    .row-fluid h2 {text-align:center !important;}
    .dashboard-card-deck .dashboard-card .dashboard-card-img
    {
    -webkit-background-size: contain;
    background-size: contain;
    background-repeat: no-repeat;
    }
    #attempts table tbody td:nth-child(n+4){display:none;}
    #attempts table thead td:nth-child(n+4){display:none;}
    .prompt
    {
    font-size: large;
    margin-bottom:inherit;
    color:red;
    font-weight: bold;
    }
    h1#title
    {
    color: #0393B4;
    font-size: 2vw;
    }
    .quizattemptcounts { background-color: yellow; font-size: x-large;}
    .courseimage
    {
    height:150px  !important;
    background-size: contain  !important;
    background-repeat: no-repeat;
    }
    #nav-message-popover-container {display:none;}
    #nav-notification-popover-container {display:none;}
    .forgetpass
    {
    display:none;
    }
    div.quizinfo>p:last-of-type
    {
    display:none;
    }
    .info h3.no
    {
    font-size:small;
    }
    .info>div.grade
    {
    font-size: 14px;
    font-weight: bold;
    }
    .info>div.state
    {
    font-size: 14px;
    font-weight: bold;
    }
    .qno
    {
    font-size:inherit;
    }
    .questionflagtext
    {
    font-size:inherit;
    }
    .editquestion
    {
    font-size:inherit;
    }
    .box quizinfo
    {
    display: none;
    }
    img
    {
    max-width: -moz-available;          /* WebKit-based browsers will ignore this. */
    max-width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    max-width: fill-available;
    }
    #page-site-index .coursebox .summary>div, #page-site-index .coursebox .teachers
    {
    display: none;
    }
    .summary
    {
    height: 28px !important;
    }
    </style>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <script>
    $(document).ready (function ()
    {
    var backGroundColor;
    var color;
    var border;
    var utter = new SpeechSynthesisUtterance();
    utter.lang = $("html").attr('lang') ;
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();
    //utter.voice =voices [3];
    $(".qtext").append("<i id='vol-btn' class='fa fa-volume-up'></i>");
    // MOST ELEMENTS
    });
    $(".fa-volume-up").click(function()
    {
    $(this).css('cursor', 'default');
    utter.text = $(".qtext").text();
    synth.speak(utter);
    });

    </script>

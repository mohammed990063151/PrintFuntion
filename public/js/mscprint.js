// Search Arabice
function HasArabicCharacters(text) {
    var arregex = /[\u0600-\u06FF]/;
    return arregex.test(text);
}
// check box

function toggleBoxbold() {
    if (document.getElementById("checkQuestions").checked == true) {
        $(".qtext").css("fontWeight", "bold");
    }
    if (document.getElementById("checkAnswer").checked == true) {
        $(".ablock").css("fontWeight", "bold");
    }
    if (document.getElementById("checkarabic").checked == true) {
        $(".ablock").css("fontWeight", "bold");
    }
}

function toggleBoxunderline() {
    if (document.getElementById("checkQuestionsunderline").checked == true) {
        $(".qtext").css("textDecoration", "underline");
    }
    if (document.getElementById("checkAnswerunderline").checked == true) {
        $(".answer").css("textDecoration", "underline");
    }
    if (document.getElementById("checkarabicunderline").checked == true) {
        $(".answer").css("textDecoration", "underline");
    }
}

function toggleBoxitalic() {
    if (document.getElementById("checkQuestionsitalic").checked == true) {
        $(".qtext").css("fontStyle", "italic");
    }
    if (document.getElementById("checkAnsweritalic").checked == true) {
        $(".answer").css("fontStyle", "italic");
    }
    if (document.getElementById("checkinlieanswers").checked == true) {
        $(".answer").css("display", "inline-flex");
    }
}

function toggleaddnmber() {
    if (document.getElementById("checkaddnumbring").checked == true) {
        $(".qtext").each(function (index) {
            this.prepend(index + 1 + ".");
        });
    }
}

var _element = "body";

function mscprintint(element = "body") {
    _element = element;

    // modal Html
    modalhtml = `
      <div class="modal fade" id="mscPrintingModal" style="position: absolute;z-index: -1050";>
      <div class="modal-dialog" role="document" >
          <div class="modal-content" id="exampleModal">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Printing Custom Options</h5> <button type="button"
                      class="close" data-dismiss="modal" aria-label="Close"> <span
                          aria-hidden="true">&times;</span> </button>
              </div>
              <div class="modal-body">
              <form acion="" method="post">
                  <fieldset class="form-group border p-3">
                          <legend class="w-auto px-2">General</legend>
                          <div class="form-row align-items-center">
                          <label for="recipient-name" class="col-form-label">Heading:</label>
                          <div class="col">
                              <input type="text" class="form-control" id="Heading" placeholder="Heading" name="Heading">
  </div>
  </div>
                  <div class="form-row align-items-center">
                  <label for="recipient-name" class="col-form-label">photo:</label>&ensp;&ensp;&nbsp;
                  <div class="col-sm-3 my-1">
                  <input type="text" class="form-control" id="width" placeholder="width" name="width">
                  </div>
                  <div class="col-sm-3 my-1">
                  <input type="text" class="form-control" id="height" placeholder="height" name="height">
              </div> </div>
              <div class="form-check-inline">
              <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="" id ="checkaddnumbring" onclick="toggleaddnmber()"> add Q number
              </label>
          </div>
              </fieldset>
              <fieldset class="form-group border p-3">
                  <legend class="w-auto px-2">Questions </legend>
                  <div class="form-row align-items-center">
                  <label for="recipient-name" class="col-form-label">Font Size:</label>&ensp;&ensp;&nbsp;
                  <div class="col-sm-3 my-1">
                      <input type="text" class="form-control" id="QuestionsSize" placeholder="Font Size" name="QuestionsSize">
                  </div>
                  <div class="form-check-inline">
                  <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value="" id ="checkQuestions" onclick="toggleBoxbold()"> B
                  </label>
              </div>
                  <div class="form-check-inline">
                  <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value="" id ="checkQuestionsunderline" onclick="toggleBoxunderline()"> U
                  </label>
              </div>
              <div class="form-check-inline">
              <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="" id ="checkQuestionsitalic" onclick="toggleBoxitalic()"> I
              </label>
          </div>
              </div>
              <div class="form-row align-items-center">
                  <label for="recipient-name" class="col-form-label">Font Family:</label>
                  <div class="col">
                          <input type="text" class="form-control" id="QuestionsFamily" placeholder="Font Family" name="QuestionsFamily">
                      </div>
                              </div>
                      </fieldset>
                  <fieldset class="form-group border p-3">
                  <legend class="w-auto px-2"> Arabic </legend>
                  <div class="form-row align-items-center">
              <label for="recipient-name" class="col-form-label">Font Size:</label>&ensp;&ensp;&nbsp;
              <div class="col-sm-3 my-1">
                      <input type="text" class="form-control" id="arabicSize" placeholder="Font Size" name="arabicSize">
                  </div>
                  <div class="form-check-inline">
                  <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value="" id ="checkarabic" onclick="toggleBoxarabicbold()"> B
                  </label>
              </div>
                  <div class="form-check-inline">
                  <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value="" id ="checkarabicunderline" onclick="toggleBoxarabicunderline()"> U
                  </label>
              </div>
              <div class="form-check-inline">
              <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="" id ="checkarabicitalic" onclick="toggleBoxarabicitalic()"> I
              </label>
          </div>
              </div>
              <div class="form-row align-items-center">
                  <label for="recipient-name" class="col-form-label">Font Family:</label>
                  <div class="col">
                          <input type="text" class="form-control" id="Familyarabic" placeholder="Font Family " name="Familyarabic">
                      </div>
                      </div>
                      </fieldset>
                      <fieldset class="form-group border p-3">
                      <legend class="w-auto px-2">Options </legend>
                      <div class="form-row align-items-center">
                      <label for="recipient-name" class="col-form-label">Font Size:</label>&ensp;&ensp;&nbsp;
                      <div class="col-sm-3 my-1">
                          <input type="text" class="form-control" id="AnswerSize" placeholder="Font Size" name="AnswerSize">
                      </div>
                      <div class="form-check-inline">
                      <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" value="" id ="checkAnswer" onclick="toggleBoxbold()"> B
                      </label>
                      </div>
                      <div class="form-check-inline">
                      <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" value="" id ="checkAnswerunderline" onclick="toggleBoxunderline()"> U
                      </label>
                      </div>
                      <div class="form-check-inline">
                      <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value="" id ="checkAnsweritalic" onclick="toggleBoxitalic()"> I
                      </label>
                      </div>
                      <div class="form-check-inline">
                      <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value="" id ="checkinlieanswers" onclick="toggleBoxitalic()"> in one line
                      </label>
                      </div> </div>
                      <div class="form-row align-items-center">
                      <label for="recipient-name" class="col-form-label">Font Family:</label>
                      <div class="col">
                              <input type="text" class="form-control" id="AnswerFamily" placeholder="Font Family" name="AnswerFamily">
                          </div>
                                  </div>
                          </fieldset>
                  </form>
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-secondary"
                      data-dismiss="modal" id="close">Close</button>
                      <button type="button" class="btn btn-primary" data-dismiss="modal" id="print_Button" onclick="mscprintelement()">print</button>
              </div>
          </div>
      </div>
  </div>`;

    $("body").append(modalhtml);
}
// show modal
function mscprint() {
    $("[style]").removeAttr("style");
    // $("#mscPrintingModal").remove();
    $("#mscPrintingModal").css("position", "absolute").modal("show");

}

//mywindow.location.reload();
// set printing meadia
function mscprintelement() {
    // hide themodal
    $("#mscPrintingModal").hide();
    $(".modal-backdrop ").hide();
    $("#mscPrintingModal").modal("hide");

    if (!_element) _element = "body";
    // remove style
    $("[style]").removeAttr("style");
    $(".info").remove();

    // chang  css page
    Heading = $("#Heading").val();

    width = $("#width").val();
    $("img").css("width", width + "px");
    height = $("#height").val();
    $("img").css("height", height + "px");

    arabicSize = $("#arabicSize").val();
    $(".arabic").css("fontSize", arabicSize + "px");

    Familyarabic = $("#Familyarabic").val();
    $(".arabic").css("fontFamily", Familyarabic);

    QuestionsFamilys = $("#QuestionsFamily").val();
    $(".qtext").css("fontFamily", QuestionsFamilys);

    QuestionsSizes = $("#QuestionsSize").val();
    $(".qtext").css("fontSize", QuestionsSizes + "px");

    AnswerFamilys = $("#AnswerFamily").val();
    $(".ablock ").css("fontFamily", AnswerFamilys);

    AnswerSizes = $("#AnswerSize").val();
    $(".ablock ").css("fontSize", AnswerSizes + "px");

    // Search Arabice and add class arabic
    function HasArabicCharacters(text) {
        var arregex = /[\u0600-\u06FF]/;
        return arregex.test(text);
    }

    document.querySelectorAll("div p").forEach((onedive) => {
        if (HasArabicCharacters(onedive.textContent)) {
            onedive.classList.add("arabic");
        }
    });

    // style page print
    var style = `
                  <style>
                  .activity-navigation{
                      display: none !important;
                  }
                  .submitbtns{
                      display: none;
                  }
                  #connection-error{
                      display: none;
                  }
                  #connection-ok{
                      display: none;
                  }
                  .card {
                      margin:0px;
                      border: 0px !important;
                  }
                  .card .card-body {
                      padding: 0px;
                      border: 0px
                  }
                  .que {
                      margin:0px;
                  }
                  .qtext {
                          font-family: ${QuestionsFamilys};
                          font-size: ${QuestionsSizes + "px"};
                          ${
                              document.getElementById("checkQuestions").checked
                                  ? "font-weight:bold;"
                                  : null
                          }

                          ${
                              document.getElementById("checkQuestionsunderline")
                                  .checked
                                  ? "text-decoration:underline;"
                                  : null
                          }
                          ${
                              document.getElementById("checkQuestionsitalic")
                                  .checked
                                  ? "font-style:italic;"
                                  : null
                          }
                          }
                          img{
                              width: ${width + "px"};
                              height: ${height + "px"};
                          }
                          .answer a{
                              ${
                                  document.getElementById("checkinlieanswers")
                                      .checked
                                      ? "display: inline-flex;"
                                      : null
                              }
                          }
                      .ablock {
                          font-family: ${AnswerFamilys};
                          font-size: ${AnswerSizes + "px"};
                          ${
                              document.getElementById("checkAnswer").checked
                                  ? "font-weight:bold;"
                                  : null
                          }
                          ${
                              document.getElementById("checkAnswerunderline")
                                  .checked
                                  ? "text-decoration:underline;"
                                  : null
                          }
                          ${
                              document.getElementById("checkAnsweritalic")
                                  .checked
                                  ? "font-style:italic;"
                                  : null
                          }
                      }
                      .arabic{
                          text-align: right;
                          font-family: ${Familyarabic};
                          font-size: ${arabicSize + "px"};
                          ${
                              document.getElementById("checkarabic").checked
                                  ? "font-weight:bold;"
                                  : null
                          }
                          ${
                              document.getElementById("checkarabicunderline")
                                  .checked
                                  ? "text-decoration:underline;"
                                  : null
                          }
                          ${
                              document.getElementById("checkarabicitalic")
                                  .checked
                                  ? "font-style:italic;"
                                  : null
                          }
                      }
                      h1{
                          text-align: center;
                      }
                      @media print {

                          .content {page-break-inside: avoid;
                          }

                          }
                      }
                      </style>
                  `;

    // print the element      new page in print
    var printContents = document.getElementById(_element).innerHTML;
    var mywindow = window.open("", "PRINT", "height=400,width=600");
    mywindow.document.write("<html><head>" + style);
    mywindow.document.write(document.head.innerHTML);
    mywindow.document.write("</head><body>");
    mywindow.document.write(
        "<h1>" + document.getElementById("Heading").value + "</h1>"
    );
    mywindow.document.write(printContents);
    mywindow.document.write("</body></html>");
}

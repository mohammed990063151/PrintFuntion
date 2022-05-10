1// var url ="https://training.practicemore.net/mod/quiz/startattempt.php?cmid="+ document.URL.substr(document.URL.indexOf("=")+1) + "&sesskey="+M.cfg.sesskey;
// $("#selectmultiplecommand").parent().append('<a href="'+url+'" class="btn btn-secondary" >Preview</a>');

  // modal Html

  var _element = "body";

function mscprintint(element = "body") {
  _element = element;
  modalhtml = `
  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
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
                    <legend class="w-auto px-2">english </legend>
                    <div class="form-row align-items-center">
                    <label for="recipient-name" class="col-form-label">Font Size:</label>&ensp;&ensp;&nbsp;
                    <div class="col-sm-3 my-1">
                        <input type="text" class="form-control" id="english" placeholder="Font Size" name="english">
                    </div>
                    <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id ="checkEnglish" onclick="toggleBoxbold()"> B
                    </label>
                    </div>
                    <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="" id ="checkEnglishunderline" onclick="toggleBoxunderline()"> U
                    </label>
                    </div>
                    <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="" id ="checkEnglishitalic" onclick="toggleBoxitalic()"> I
                    </label>
                    </div>
                    <div class="form-check-inline">
                    <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" value="" id ="checkinlieEnglish" onclick="toggleBoxitalic()"> in one line
                    </label>
                    </div> </div>
                    <div class="form-row align-items-center">
                    <label for="recipient-name" class="col-form-label">Font Family:</label>
                    <div class="col">
                            <input type="text" class="form-control" id="EnglishFamily" placeholder="Font Family" name="EnglishFamily">
                        </div>
                                </div>
                        </fieldset>
                </form>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary"
                    data-dismiss="modal" id="close">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" id="print_Button" onclick="mscprintelement()">save</button>
            </div>
        </div>
    </div>
  </div>
</div>`;
$("body").append(modalhtml);
}

function mscprint() {
    if (document.URL.includes('?usrname=mohammed')){

        // $("").append(modalhtml);
       $("#exampleModalLong").modal("show");

        // $("body").append(modalhtml);
    }
    else{
        return false;
    }

}
mscprint()

$("[style]").removeAttr("style");
$("#mohammed").remove();


arabicSize = $("#arabicSize").val();
$(".arabic").css("fontSize", arabicSize + "px");

Familyarabic = $("#Familyarabic").val();
$(".arabic").css("fontFamily", Familyarabic);

arabicSize = $("#EnglishSize").val();
$(".english").css("fontSize", arabicSize + "px");

Familyarabic = $("#FamilyEnglish").val();
$(".english").css("fontFamily", Familyarabic);

function HasArabicCharacters(text)
{
var arregex = /[\u0600-\u06FF]/;
return arregex.test(text);
}
$(document).ready(function()
{
document.querySelectorAll(".TableGrid td").forEach((onedive) =>
{
if (HasArabicCharacters(onedive.textContent))
{
onedive.classList.add("arabic");
}
else
{
onedive.classList.add("english");
}
});

//     document.URL.includes(usrname = 'mohammed') ? $('#modalhtml').modal('show') : null ;
// E.fn.init [("div #exampleModalLong.modal.fade")]

//     $("#url").modal("show");


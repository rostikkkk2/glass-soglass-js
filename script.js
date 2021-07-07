var glass = ["а","о","у","э","и","ы","е","ю","я","ё"];
var soglass = ["б","в","г","д","ж","з","й","к","л","м","н","п","р","с","т","ф","х","ц","ч","ш","щ"];
var res_glass = 0;
var res_soglass = 0;

function gls_sgls(str){
  var i = 0;
  while (i < str.length) {
    if (glass.indexOf(str[i]) != -1) {
      res_glass++;
    }else if (soglass.indexOf(str[i]) != -1){
      res_soglass++;
    }
    i++;
  }
  alert("количество гласных " + res_glass + "\n" + "количество согласных " + res_soglass);
}

gls_sgls("привет как дела");

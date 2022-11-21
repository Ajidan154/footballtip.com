$(document).ready(function() {
    var table = localStorage.getItem("other_sport");
    if (table == '' || table == null) {
        table = 'basketball';
    }

    var list2 = '';
    day = '0';
    $.ajax({
        url: "api/look_basket.php",
        type: "POST",
        data: {
            tablez: table,
            dayz: day
        },
        dataType: "json",
        success: function(res) {
            //var resp = JSON.parse(res);

            msg = res.message;
            if (res.status) {
                //  alert(msg)
                list2 = '';
                console.log(res);
                for (i = 0; i < res.response.length; i++) {


                    list2 += '<tr class="pt-2 pb-2">\
						<td style="width:115px;"><img src="files/img/' + table + '.png"width="30px"height="30px"><b style="white-space:nowrap;">' + table + '</b></td>\
						<td>\
						<div class="d-flex">\
						<div>\
						<small>' + res.response[i].league + '&nbsp;&nbsp;</small>\
						</div>\
						<div class="ml-3">\
						<div class="d-flex"><span class="set-1">' + res.response[i].teamA + ' vs ' + res.response[i].teamB + '</span></div>\
						</div>\
						</div>\
						</td>\
						<td class="free-game">\<span class="tips badge bg-primary">Tips: ' + res.response[i].tips + '</span>\
                                  <span class="tips badge bg-danger">Odds: ' + res.response[i].odds + '</span>\
						</td>\
						<td><span>' + res.response[i].scoreA + ' - ' + res.response[i].scoreB + '</span></td>\
						</tr>';

                }
                list2 += '<tr class="pt-3 pb-2">\
<td colspan="4" class="text-center p-0" style="background:#060;color:#fff;">Sportverified</td></tr>';
                $("#free_ballsket").html(list2);

            } else {
                $("#free_ballsket").html("");
                $("#free_ballsket").html('<tr class="pt-3 pb-2">\
                         <td colspan="4"><div class="row">\
						 <div class="col-md-12"style="color:red;font-weight:800;text-align:center;">No Prediction for the selected date</div></div></td></tr>');

                console.log(res);

            }
        },
        error: function(res) {
            console.log(res);
            // alert("Connection Error");

        }

    })

})

function free_ballsket(value) {
    value = value;
    var list2 = '';
    var table = localStorage.getItem("other_sport");
    //alert(table);
    $("#free_ballsket").html("Loading Predictions");
    $.ajax({
        url: "api/look_basket.php",
        type: "POST",
        data: {
            tablez: table,
            dayz: value
        },
        dataType: "json",
        success: function(res) {
            //var resp = JSON.parse(res);

            msg = res.message;
            if (res.status) {
                //  alert(msg)
                list2 = '';
                console.log(res);
                for (i = 0; i < res.response.length; i++) {


                    list2 += '<tr class="pt-2 pb-2">\
						<td style="width:115px;"><img src="files/img/' + table + '.png"width="30px"height="30px"><b style="white-space:nowrap;">' + table + '</b></td>\
						<td>\
						<div class="d-flex">\
						<div>\
						<small>' + res.response[i].league + '&nbsp;&nbsp;</small>\
						</div>\
						<div class="ml-3">\
						<div class="d-flex"><span class="set-1">' + res.response[i].teamA + ' vs ' + res.response[i].teamB + '</span></div>\
						</div>\
						</div>\
						</td>\
						<td class="free-game">\<span class="tips badge bg-primary">Tips: ' + res.response[i].tips + '</span>\
                                  <span class="tips badge bg-danger">Odds: ' + res.response[i].odds + '</span>\
						</td>\
						<td><span>' + res.response[i].scoreA + ' - ' + res.response[i].scoreB + '</span></td>\
						</tr>';

                }
                list2 += '<tr class="pt-2 pb-2">\
<td colspan="4" class="text-center p-0" style="background:#060;color:#fff;">Sportverified</td></tr>';
                $("#free_ballsket").html(list2);

            } else {
                $("#free_ballsket").html("");
                $("#free_ballsket").html('<tr class="pt-3 pb-2">\
                         <td colspan="4"><div class="row">\
						 <div class="col-md-12"style="color:red;font-weight:800;text-align:center;">No Prediction for the selected date</div></div></td></tr>');

                console.log(res);

            }
        },
        error: function(res) {
            console.log(res);
            // alert("Connection Error");

        }

    })

}
////////////////////////////////////////
//////////////////////////////////////
function change_it() {
    value = '0';
    var list2 = '';
    var table = localStorage.getItem("other_sport");
    //alert(table);
    $("#free_ballsket").html("Loading Predictions");
    $.ajax({
        url: "api/look_basket.php",
        type: "POST",
        data: {
            tablez: table,
            dayz: value
        },
        dataType: "json",
        success: function(res) {
            //var resp = JSON.parse(res);

            msg = res.message;
            if (res.status) {
                //  alert(msg)
                list2 = '';
                console.log(res);
                for (i = 0; i < res.response.length; i++) {


                    list2 += '<tr class="pt-2 pb-2">\
						<td style="width:115px;"><img src="files/img/' + table + '.png"width="30px"height="30px"><b style="white-space:nowrap;">' + table + '</b></td>\
						<td>\
						<div class="d-flex">\
						<div>\
						<small>' + res.response[i].league + '&nbsp;&nbsp;</small>\
						</div>\
						<div class="ml-3">\
						<div class="d-flex"><span class="set-1">' + res.response[i].teamA + ' vs ' + res.response[i].teamB + '</span></div>\
						</div>\
						</div>\
						</td>\
						<td class="free-game">\<span class="tips badge bg-primary">Tips: ' + res.response[i].tips + '</span>\
                                  <span class="tips badge bg-danger">Odds: ' + res.response[i].odds + '</span>\
						</td>\
						<td><span>' + res.response[i].scoreA + ' - ' + res.response[i].scoreB + '</span></td>\
						</tr>';

                }
                list2 += '<tr class="pt-2 pb-2">\
<td colspan="4" class="text-center p-0" style="background:#060;color:#fff;">Sportverified</td></tr>';
                $("#free_ballsket").html(list2);

            } else {
                $("#free_ballsket").html("");
                $("#free_ballsket").html('<tr class="pt-3 pb-2">\
                         <td colspan="4"><div class="row">\
						 <div class="col-md-12"style="color:red;font-weight:800;text-align:center;">No Prediction for the selected date</div></div></td></tr>');

                console.log(res);

            }
        },
        error: function(res) {
            console.log(res);
            // alert("Connection Error");

        }

    })

}
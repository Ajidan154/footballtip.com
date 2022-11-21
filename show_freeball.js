var list = '';
var tablez = "tips";
$(document).ready(function() {
    dayz = '0';
    $.ajax({
        url: "api/look_free.php",
        type: "POST",
        data: {
            tablez: tablez,
            dayz: dayz
        },
        dataType: "json",
        success: function(res) {
            //var resp = JSON.parse(res);

            msg = res.message;
            if (res.status) {
                //  alert(msg)
                list = '';
                console.log(res);
                for (i = 0; i < res.response.length; i++) {


                    list += '<tr class="pt-3 pb-3">\
						<td>\
						<div class="d-flex">\
						<div>\
						<span class="country-flag">\
                            <img src="emblem/' + res.emblem[i].emblem + '" width="20px" height="20px">\
                             </span><small>' + res.response[i].country.substring(0, 3).toUpperCase() + '</small>&nbsp;\
						<span class="country-title">(' + res.response[i].league + ')</span>&nbsp;</div>\
						<div class="ml-3">\
						<div class="d-flex"><span class="set-1">' + res.response[i].teamA + ' vs ' + res.response[i].teamB + '</span></div>\
						</div>\
						</div>\
						</td>\
						<td><span class="tips badge bg-primary">Tips: ' + res.response[i].tips + '</span>\
                                  <span class="tips badge bg-danger">Odds: ' + res.response[i].odds + '</span></td>\
						<td><span> ' + res.response[i].scoreA + ' - ' + res.response[i].scoreB + '</span></td>\
						</tr>';

                }
                list += '<tr class="pt-2 pb-2">\
<td colspan="4" class="text-center p-0" style="background:#000;color:#fff;">Sportverified</td></tr>';
                $("#free_body").html(list);

            } else {
                $("#free_body").html("");
                $("#free_body").html("<div class='game-box'style='margin-bottom: 10px;'><div class='row'><div class='col-md-12'style='color:red;font-weight:800;text-align:center;'>No Prediction for the selected date</div></div></div>");

                console.log(res);

            }
        },
        error: function(res) {
            console.log(res);
            // alert("Connection Error");

        }

    })

})

function free_ball(value) {
    value = value;
    var list = '';
    var tablez = "tips";
    $("#free_body").html("Loading Predictions");

    $.ajax({
        url: "api/look_free.php",
        type: "POST",
        data: {
            tablez: tablez,
            dayz: value
        },
        dataType: "json",
        success: function(res) {
            //var resp = JSON.parse(res);

            msg = res.message;
            if (res.status) {
                //  alert(msg)
                list = '';
                console.log(res);
                for (i = 0; i < res.response.length; i++) {


                    list += '<tr class="pt-3 pb-3">\
						<td>\
						<div class="d-flex">\
						<div>\
						<span class="country-flag">\
                            <img src="emblem/' + res.emblem[i].emblem + '" width="20px" height="20px">\
                             </span><small>' + res.response[i].country.substring(0, 3).toUpperCase() + '</small>&nbsp;\
						<span class="country-title">(' + res.response[i].league + ')</span>&nbsp;</div>\
						<div class="ml-3">\
						<div class="d-flex"><span class="set-1">' + res.response[i].teamA + ' vs ' + res.response[i].teamB + '</span></div>\
						</div>\
						</div>\
						</td>\
						<td><span class="tips badge bg-primary">Tips: ' + res.response[i].tips + '</span>\
                                  <span class="tips badge bg-danger">Odds: ' + res.response[i].odds + '</span></td>\
						<td><span> ' + res.response[i].scoreA + ' - ' + res.response[i].scoreB + '</span></td>\
						</tr>';

                }
                list += '<tr class="pt-2 pb-2">\
<td colspan="4" class="text-center p-0" style="background:#000;color:#fff;">Sportverified</td></tr>';
                $("#free_body").html(list);

            } else {
                $("#free_body").html("");
                $("#free_body").html("<div class='game-box'style='margin-bottom: 10px;'><div class='row'><div class='col-md-12'style='color:red;font-weight:800;text-align:center;'>No Prediction for the selected date</div></div></div>");

                console.log(res);

            }
        },
        error: function(res) {
            console.log(res);
            // alert("Connection Error");

        }

    })

}
 var list = '';

 $(document).ready(function() {
     $.ajax({
         url: "api/look2.php",
         type: "POST",
         data: {
             category: 'best_win_tip',
             date: 'today'
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

                     list += '<tr>\
							<td>\
							<div><small><b>' + res.response[i].teamA + ' vs ' + res.response[i].teamB + '</b></small></div>\
							<div class="d-flex">\
							<img src="emblem/' + res.emblem[i].emblem + '" width="20px" height="20px" style="margin-right:4px;"><br>\
							<small class="p-0 pr-2 mr-2" style="border-right:1px solid #dcdcdc;">(' + res.response[i].league.substring(0, 3).toUpperCase() + ')</small>\
							</div>\
							</td>\
							<td class="text-center"><small><b><span class="tips badge bg-primary">Tips: ' + res.response[i].tips + ' </span></b></small></td>\
							<td class="text-center"><small><b>' + res.response[i].date_t + '</b></small></td>\
							<td class="text-center">\
							<small>' + res.response[i].score + '</small>\
							</td>\
							<td>\
							</tr>';

                 }
                 $("#homez").html(list);

             } else {
                 $("#homez").html("");
                 $("#homez").html("<tr><td colspan='4'><div class='row'><div class='col-md-12'style='color:red;font-weight:800;text-align:center;'>" + msg + "</div></div></td></tr>");

                 console.log(res);

             }
         },
         error: function(res) {
             console.log(res);
             alert("Connection Error");

         }

     })
 })
 ///////////////////////main free tab tab///////////////////////////////////
 $("#looking").click(function() {

     var category = $("#category").val();
     var date = $("#date").val();
     if (category == "" || category == null) {
         $("#msgz").html("Select a Game Caterogy");
     } else if (date == '' || date == null) {
         $("#msgz").html("Select a Game Date");
     }
     ///////////////////////////////////////////
     else {
         $("#msgz").html("");
         $("#looking").html("Searching...");
         $.ajax({
             url: "api/look2.php",
             type: "POST",
             data: {
                 category: category,
                 date: date
             },
             dataType: "json",
             success: function(res) {
                 //var resp = JSON.parse(res);

                 msg = res.message;
                 if (res.status) {
                     //  alert(msg)
                     $("#looking").html("Search Previous Result");
                     list = '';
                     console.log(res);
                     for (i = 0; i < res.response.length; i++) {


                         list += '<tr>\
							<td>\
							<div><small><b>' + res.response[i].teamA + ' vs ' + res.response[i].teamB + '</b></small></div>\
							<div class="d-flex">\
							<img src="emblem/' + res.emblem[i].emblem + '" width="20px" height="20px" style="margin-right:4px;"><br>\
							<small class="p-0 pr-2 mr-2" style="border-right:1px solid #dcdcdc;">(' + res.response[i].league.substring(0, 3).toUpperCase() + ')</small>\
							</div>\
							</td>\
							<td class="text-center"><small><span class="tips badge bg-primary">Tips: ' + res.response[i].tips + ' </span>\
                                              <span class="tips badge bg-danger">Odds: ' + res.response[i].odds + '</span></small></td>\
							<td class="text-center"><small><b>' + res.response[i].date_t + '</b></small></td>\
							<td class="text-center">\
							<small>' + res.response[i].scoreA + ' : ' + res.response[i].scoreB + '</small>\
							</td>\
							<td>\
							</tr>';

                     }
                     $("#homez").html(list);

                 } else {
                     $("#looking").html("Search Previous Result");
                     $("#homez").html("");
                     $("#homez").html("<tr><td colspan='4'><div class='row'><div class='col-md-12'style='color:red;font-weight:800;text-align:center;'>" + msg + "</div></div></td></tr>");

                     console.log(res);

                 }
             },
             error: function(res) {
                 console.log(res);
                 alert("Connection Error");

             }

         })
     }

 })
 ///////////////////////main tab///////////////////////////////////
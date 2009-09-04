
$(document).ready(function() {
/*
$.get("ajax-content.jsp?groupId=1", function(html) { 

            $("#tbl-downloads tbody").append(html); 
            $(".tblDownloads").treeTable();
            
            
            success: function(msg){
               alert( "Data Saved: " + msg );
            }

            

        }); 
        
*/  

$("#cargando").css("display", "inline");

$.ajax({
   type: "POST",
   url: "ajax-content.html",
   data: "groupId=1",
   success: function(html){
      $("#tbl-downloads tbody").append(html); 
      $(".tblDownloads").treeTable();
      $("#cargando").css("display", "none");
      
   },
   /* -- jasanchez -- Si quieres forzar la lectura asincrona descomenta esta linea
      async: false, 
   */
   
   error: function (xhr, desc, exceptionobj) {
    $("#cargando").css("display", "none");
    alert(xhr.responseText);
   }

 });
        
        
        
});       
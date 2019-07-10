// variables to represent the activties
var checkbox1 = $("input[name='all']")
var checkbox2 = $("input[name='js-frameworks']")
var checkbox3 = $("input[name='js-libs']")
var checkbox4 = $("input[name='express']")
var checkbox5 = $("input[name='node']")
var checkbox6 = $("input[name='build-tools']")
var checkbox7 = $("input[name='npm']")



$('#name').focus();                           //focus on name input area first
$('#colors-js-puns').hide();                  //hides the color options because we dont want those until style picked

$(document).ready(function () {                
    
    //job role selection     
    
    $('#other-title').hide();                  //hiding the "other job" text area until "other' is selected

    
    
        $('#title').click(function () {          //click dropdown to select a job role or other
        if ($('#title').val() === 'other') {$
            $('#other-title').show();

        }
        else $('#other-title').hide();          //if other is deselected, remove text area dropdown

    });


              // selection of T-shirt style and color

    $('#design').on('change', function () {

        if ($(this).val() === "js puns") {          
            $('#colors-js-puns').show();                  //when you select a theme the color dropbox appears
            $('#color option').show();                                //shows color options that are available to js puns style only
            $('#color option:contains(JS Puns)').show();
            $('#color option:not(:contains(JS Puns))').hide();          //hides the heart js color options
            $('#color').val('cornflowerblue');                         //defaults to first color option of js puns

        }

        else if ($(this).val() === "heart js") {    

            $("#color option").show();                      //when you select a theme the color dropbox appears
            $('#color option:not(:contains(I))').hide();    //hides non heart js colors
            $('#color option:contains(I)').show();          //shows heart js shirt colors
            $('#color').val('tomato');                      //defaults to the first color option of heart js shirts
        }
        else {
            $('#colors-js-puns').hide();                    //hides color dropbox again 

        }
    });

    //payment info

    $("#payment").val('credit card'); // starts out at credit card 

    $('.credit-card').show(); 
    $('p:first').hide();              //hides first paypal paragraph
    $('p:last').hide();                 //hides second bitcoin paragraph
    $("#payment > option:nth-child(1)").hide(); // hides payment method tab

    //credit card option first/hide other two
    $("#payment").on('change', function () {

        if ($(this).val() === 'credit card') {

            $('.credit-card').show();

        }
        else {
           $('.credit-card').hide();

        }
        if ($(this).val() === 'paypal') {    //when paypal is selected shows the associated paragraph

       $('div p:eq(1)').show();
        $('#credit-card').hide();
         $('div p:eq(2)').hide();

            //$('.credit-card').hide();
           // $('p:first').show();
           //$('p:last').hide();
        }
        else {
            $('p:first').hide();      //hides parapragh if option deselected

        } 

        if ($(this).val() === 'bitcoin') {    //when  bitcoin is selected show associated paragraph
            $('p:last').show();
            $('div p:eq(1)').hide(); 
        }
        else {

            $('p:last').hide();             //hide paragraph if bitcoin deselected
        }
    })

    //activities checkboxes
    var totalCost = 0;

    $('.activities').append('<div id="total"></div>');    //adds a div to page where we will show the total after activities selected
    var updateCost = function (cost) {
        totalCost += cost;                              //updates cost as activity is checked or unchecked
        document.getElementById("total").innerHTML = "Total: $" + totalCost; //changes content of html 
    };
    $('input[name="all"]').change(function () {         //if this course is checked, add cost to total
        if ($(this).prop("checked")) {

            updateCost(200);                     
        } else {
            updateCost(-200);                         //if unchecked add money back
        }
    });
    $('input[name="js-frameworks"]').change(function () {          //checking activity boxes
        if ($(this).prop("checked")) {
 
            checkbox4.prop("disabled", true);                  
            checkbox4.parent().addClass("disabled");                   //disables the checkbox of activity in competitve time slot
            checkbox4.parent().append('<span class="unavailable" > ***Unavailable***  </span>');     //tells user that this option isnt available
            updateCost(100);                                                    //if this course is checked, add cost to total
        }

        else {

            checkbox4.prop("disabled", false);
            checkbox4.parent().removeClass("disabled");
            checkbox4.parent().find('.unavailable').remove();
            updateCost(-100);                                    //if unchecked add money back
        }

    });
    $('input[name="js-libs"]').change(function () {
        if ($(this).prop("checked")) {

            checkbox5.prop("disabled", true);
            checkbox5.parent().addClass("disabled");
            checkbox5.parent().append('<span class="unavailable">***  Unavailable ***  </span>');
            updateCost(100);                                    //if this course is checked, add cost to total
        }

        else {

            checkbox5.prop("disabled", false);
            checkbox5.parent().removeClass("disabled");
            checkbox5.parent().find('.unavailable').remove();
            updateCost(-100);                                    //if unchecked add money back
        }
    });
    $('input[name="express"]').change(function () {
        if ($(this).prop("checked")) {

            checkbox2.prop("disabled", true);
            checkbox2.parent().addClass("disabled");
            checkbox2.parent().append('<span class="unavailable">*** Unavailable *** </span>');
            updateCost(100);                                        //if this course is checked, add cost to total

        }
        else {

            checkbox2.prop("disabled", false);
            checkbox2.parent().removeClass("disabled");
            checkbox2.parent().find('.unavailable').remove();
            updateCost(-100);                                        //if unchecked add money back
        }
    });
    $('input[name="node"]').change(function () {

        if ($(this).prop("checked")) {
            checkbox3.prop("disabled", true);
            checkbox3.parent().addClass("disabled");
            checkbox3.parent().append('<span class="unavailable" >  ***Unavailable*** </span>');
            updateCost(100);                                        //if this course is checked, add cost to total

        }

        else {

            checkbox3.prop("disabled", false);
            checkbox3.parent().removeClass("disabled");
            checkbox3.parent().find('.unavailable').remove();
            updateCost(-100);                                        //if unchecked add money back

        }

    });
    $('input[name="build-tools"]').change(function () {
        if ($(this).prop("checked")) {
            updateCost(100);                                        //if this course is checked, add cost to total
        } else {
            updateCost(-100);
        }
    });
    $('input[name="npm"]').change(function () {
        if ($(this).prop("checked")) {
            updateCost(100);                                        //if this course is checked, add cost to total
        } else {
            updateCost(-100);                                        //if unchecked add money back
        }
    });
   
    
    //variables to use for validation
    
    var regexCC = /\b\d{13,16}\b/;  //regex for cc
    var zipRegex =   /^\d{5}(?:[-\s]\d{4})?$/;   //regex for zip
    var CVVRegex = /^\d{3}$/;   
    var regExAdress = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;   //regex for email
    //var validEmail = regEx.test(email);
    errorMsg ="";
    
    $('form').prepend('<p id="error-message"></p>');     //adds error message to top of page when user needs to re enter info
    $('#error-message').hide();          //hides error messages to start 
    
    $('form').submit(function (e) {                             //allowing us to submit form once its completed
       // e.preventDefault(); 
    
        if ($('#name').val() === "" ) {                         //name field cant be blank
            e.preventDefault(); 
            errorMsg= "<h1>ERROR!<h1>Please enter your name.";                //if blank returns error messages
            $('#name').addClass('error');
                                            //focuses back to name 
            $('#name').css('border-color', 'red').focus();
            
        } else if ( !regExAdress.test($('#mail').val()) ) {        //tests email against regex for validity
            e.preventDefault(); 
            errorMsg="<h1>ERROR!</h1>Enter a valid email.";                        //returns error message if not valid
            $('#mail').css('border-color', 'red').focus();                                     //focuses back to email
            $('#mail').addClass('error');                   
            
        } else if ($(".activities > label > input:checked").length === 0) {    //makes sure at least one activity is checked
            e.preventDefault(); 
            errorMsg="<h1>ERROR!</h1>Please check at least one acivity.";
            
            $('.activities').css('border-color', 'red').focus();
            $(".activities > label > input:checked").addClass('error');
        
        } else if ( $("#payment").val() === "select_method" )  {            //  makes sure they select a payment method
            e.preventDefault(); 
            errorMsg="<h1>ERROR!</h1>Please select a payment method.";
            
         $('#payment').css('border-color', 'red').focus();
        
        } else if ( $("#payment").val() === "credit card" && !regexCC.test($("#cc-num").val()) ) { // checks if its a credit card and matches regex for validity
          e.preventDefault(); 
        
            $("#cc-num").addClass('error');
            errorMsg="<h1>ERROR!</h1>Please enter a valid credit card number.";         
            $('#cc-num').css('border-color', 'red').focus();
        
        } else if ( $("#payment").val() === "credit card" && !zipRegex.test($("#zip").val())) { //checks zip againt regex for validity
             e.preventDefault(); 
           $("#zip").addClass('error')
            errorMsg="<h1>ERROR!</h1>Please enter a valid zip code.";
            $("#zip").css('border-color', 'red').focus()
        
        } else if ( $("#payment").val() === "credit card" && !CVVRegex.test($("#cvv").val())) {   //makes sure the credit card cvv has the right amount of digits 
            e.preventDefault(); 
            errorMsg="<h1>ERROR!</h1>CVV MUST BE THREE NUMBERS."; 
            $("#cvv").css('border-color', 'red').focus()
            $("#cvv").addClass('error');
            
        } else {
        
            errorMsg="You're all set! Thank you.";
            
         }
        
        document.getElementById('error-message').innerHTML = errorMsg; //changing html content of Id ('error-message') to errorMsg and appends that text  
        $('#error-message').css('color', 'red').show();
           
        
    });
});

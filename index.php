<!DOCTYPE html>
<html>
    <head>
        <title>pmDropdown</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        
        <meta name="description" content="">

        <link rel="icon" href="img/favicons/favicon.ico" type="image/x-icon" />

        
        <link rel="stylesheet" type="text/css" href="css/main.css?<?php echo date("YmdiHs") . $rand; ?>" media="screen" />
         
    
    </head>

<body class="mob-menu" id="show-menu">    
  
    <header class="l-header">
      
    </header>


    <section class="l-container l-container--main l-container--main--home">
        <div class="central">
            
            <div class="finder">
                <span class="finder__grey"></span>
                <div class="finder__form form">
                    <div class="row finder__row">
                        <div class="finder__dropdown finder__dropdown--1">
                            <input type="text" value="" class="finder__hidden" />
                            <div class="finder__click">
                                <span class="finder__dropdown-span">Dropdown options</span>
                                <i class="icon-down-dir"></i>
                            </div>
                            <div class="finder__options finder__shower">
                                <div class="finder__option finder__option--1" data-option-value="one"><span class="finder__option__span finder__option__span--whites finder__option__span--1"></span>one</div>
                                <div class="finder__option finder__option--2" data-option-value="two"><span class="finder__option__span finder__option__span--blacks finder__option__span--2"></span>two</div>
                                <div class="finder__option finder__option--3" data-option-value="three"><span class="finder__option__span finder__option__span--greys finder__option__span--3"></span>three</div>
                            </div>
                        </div><!-- finder dropdown block -->

                       
                    </div>
        
                </div>
            </div>
         
        <script>
        (function($){
            $('.finder').pmDropdown({
                clicker : '.finder__click',
                shower  : '.finder__shower'
            });
        })(jQuery);  
        </script>
      
        </div>
    </section>
<footer class="l-foot">
  
</footer>
    <script type="text/javascript" src="bower_components/jquery/jquery.js" ></script>
    <script type="text/javascript" src="js/pmDropdown.js" ></script>


</body>
</html>
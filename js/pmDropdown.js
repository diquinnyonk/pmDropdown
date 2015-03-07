/**
 * global.js
 *
 * The code that runs on the site
 *
 * @since   1.0
 * @version 1.0
 */



/***
 * pmDropdown v0.0.0 - A dropdown creater
 *
 * Copyright 2015, Paul Mark Quinn - http://www.paulmarkquinn.com - http://github.com/diquinnyonk/pmDropdown/
 * Written for a need that need not be needed
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 ***/

;(function($){

    var plugin = {};

    var defaults = {
        // GENERAL
        clicker             : '.finder__click',
        shower              : '.finder__shower',
        clickerOption       : '.finder__option',
        inputHidden         : '.finder__hidden',
        isActiveClassName   : 'is-active'
    }

    $.fn.pmDropdown = function(options){

        //console.warn('pmDropdown options',options);
        if(this.length == 0) return this;

        // support mutltiple elements
        if(this.length > 1){
            this.each(function(){$(this).pmDropdown(options)});
            return this;
        }

        // create a namespace to be used throughout the plugin
        var dropdown = {};
        // set a reference to our dropdown element
        var el = this;
        plugin.el = this;

        /**
         * Makes slideshow responsive
         */
        // first get the original window dimens (thanks alot IE)
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();


        /* ======================
            private functions
           ====================== */ 

        var init = function(){
            //console.log('pmDropdown init called');
            // merge user-supplied options with the defaults
            dropdown.settings = $.extend({}, defaults, options);
            //console.log('dropdown.settings', dropdown.settings);

            
            setup();
        }

        /**
         * Performs all DOM and CSS modifications
         */
        var setup = function(){

            $(dropdown.settings.inputHidden).hide();

            $(dropdown.settings.shower).hide();
            //$(dropdown.settings.clicker).addClass(dropdown.settings.isActiveClassName);

            // click actions ///////////////////
            $(dropdown.settings.clicker).bind('click', clickToggleShowHide);
            $(dropdown.settings.clickerOption).bind('click', updateInputValue);

            
        }


        /**
         * Click show hide region
         *
         * @param e (event)
         *  - DOM event object
         */
        var clickToggleShowHide = function(e){
            //console.log('e & el: ',e,el, this,$(this));
            
            if($(this).hasClass(dropdown.settings.isActiveClassName))
            {
                $(this).removeClass(dropdown.settings.isActiveClassName);
                $(this).next(dropdown.settings.shower).hide().removeClass(dropdown.settings.isActiveClassName);    
            }
            else
            {
                $(dropdown.settings.shower).hide().removeClass(dropdown.settings.isActiveClassName);
                $(dropdown.settings.clicker).removeClass(dropdown.settings.isActiveClassName);
                
                $(this).addClass(dropdown.settings.isActiveClassName);
                $(this).next(dropdown.settings.shower).show().addClass(dropdown.settings.isActiveClassName);    
            }
            
            e.preventDefault();
        }

        /**
         * Performs slide transition to the specified slide
         *
         * @param value (string)
         *  - the new value for the hidden input region
         *
         */
        var updateInputValue = function(value){

            //console.log($(this).parent().parent(),$(this).parent().parent().find(dropdown.settings.inputHidden), $(this).attr('data-option-value'));

            //$(this).parent().parent().find(dropdown.settings.inputHidden).value = $(this).attr('data-option-value');
            
            // remove active class /////////////
            $(this).siblings().removeClass(dropdown.settings.isActiveClassName);

            // add to current clicked //////////
            $(this).addClass(dropdown.settings.isActiveClassName);
            $(this).parent().parent().find(dropdown.settings.inputHidden).attr('value',$(this).attr('data-option-value'));

            //console.log($(this).parent().parent().find(dropdown.settings.inputHidden).attr('value'));
        }

        init();

        // returns the current jQuery object
        return this;

    }// $.fn.pmDropdown closing }

})(jQuery);    

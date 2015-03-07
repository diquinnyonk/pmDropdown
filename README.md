# pmDropdown
A simple dropdown jQuery plugin for creating dropdown that updates an input field within region. Can have many

It depends on jquery so go get that. Then your html layout needs to be:
```html
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
```

It updates the input in the region and is contained just to this block so you can have as many as you want on page.

You get options too:
```html
<script>
(function($){
    $('.finder').pmDropdown({
        clicker : '.finder__click',
        shower  : '.finder__shower'
    });
})(jQuery);  
</script>
```
If you wish to change the class names of the click region and the show region.

Happy dropdown-ing :)

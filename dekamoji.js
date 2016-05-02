$(".input-form textarea").each(function() {
    $(this).bind('keyup', (function(elem) {
        var old_text = elem.value;
        return function() {
            var new_text = $(this).val();
            if (new_text != old_text) {
                old_text = new_text;
                $("#dekamoji").text(new_text);
            }
        };
    }(this)));
});

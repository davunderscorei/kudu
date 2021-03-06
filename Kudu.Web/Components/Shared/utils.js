(function ($) {
    /// <param name="$" type="jQuery" />
    "use strict"

    $.utils = {
        throttle: function (fn, delay) {
            var canInvoke = true;
            var invokeDelay = function () {
                canInvoke = true;
            };

            return function () {
                if (canInvoke) {
                    fn.apply(this, arguments);
                    canInvoke = false;
                    setTimeout(invokeDelay, delay);
                }
            };
        },
        htmlEncode: function (value) {
            var div = document.createElement('div');
            var text = document.createTextNode(value);
            div.appendChild(text);
            return div.innerHTML;
        },
        getSafeId: function (value) {
            return value.replace(/[^A-Za-z]/g, '-')
        }
    };

})(jQuery);
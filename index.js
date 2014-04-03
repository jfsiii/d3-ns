(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        var d3_nsPrefix = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        };
        d3.ns = {
            prefix: d3_nsPrefix,
            qualify: function(name) {
                var i = name.indexOf(":"), prefix = name;
                if (i >= 0) {
                    prefix = name.substring(0, i);
                    name = name.substring(i + 1);
                }
                return d3_nsPrefix.hasOwnProperty(prefix) ? {
                    space: d3_nsPrefix[prefix],
                    local: name
                } : name;
            }
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();
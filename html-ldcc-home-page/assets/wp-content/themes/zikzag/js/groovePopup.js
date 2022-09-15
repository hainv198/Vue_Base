/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
!function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0])
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(n) {
    "use strict";
    n.fn.emulateTransitionEnd = function(t) {
        var e = !1
          , i = this;
        n(this).one("bsTransitionEnd", function() {
            e = !0
        });
        return setTimeout(function() {
            e || n(i).trigger(n.support.transition.end)
        }, t),
        this
    }
    ,
    n(function() {
        n.support.transition = function o() {
            var t = document.createElement("bootstrap")
              , e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var i in e)
                if (t.style[i] !== undefined)
                    return {
                        end: e[i]
                    };
            return !1
        }(),
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(s) {
    "use strict";
    var e = '[data-dismiss="alert"]'
      , a = function(t) {
        s(t).on("click", e, this.close)
    };
    a.VERSION = "3.4.1",
    a.TRANSITION_DURATION = 150,
    a.prototype.close = function(t) {
    }
    ;
    var t = s.fn.alert;
    s.fn.alert = function o(i) {
        return this.each(function() {
        })
    }
    ,
    s.fn.alert.Constructor = a,
    s.fn.alert.noConflict = function() {
    }
    ,
    s(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery),
function(s) {
    "use strict";
    var n = function(t, e) {
    };
    function i(o) {
    }
    n.VERSION = "3.4.1",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function(t) {
    }
    ,
    n.prototype.toggle = function() {
    }
    ;
    var t = s.fn.button;
    s.fn.button = i,
    s.fn.button.Constructor = n,
    s.fn.button.noConflict = function() {
    }
    ,
    s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    })
}(jQuery),
function(p) {
    "use strict";
    var c = function(t, e) {
    };
    function r(n) {
    }
    c.VERSION = "3.4.1",
    c.TRANSITION_DURATION = 600,
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    c.prototype.keydown = function(t) {
    }
    ,
    c.prototype.cycle = function(t) {
    }
    ,
    c.prototype.getItemIndex = function(t) {
    }
    ,
    c.prototype.getItemForDirection = function(t, e) {
    }
    ,
    c.prototype.to = function(t) {
    }
    ,
    c.prototype.pause = function(t) {
    }
    ,
    c.prototype.next = function() {
    }
    ,
    c.prototype.prev = function() {
    }
    ,
    c.prototype.slide = function(t, e) {
    }
    ;
    var t = p.fn.carousel;
    p.fn.carousel = r,
    p.fn.carousel.Constructor = c,
    p.fn.carousel.noConflict = function() {
    }
    ;
    var e = function(t) {
    };
    p(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
    p(window).on("load", function() {
    })
}(jQuery),
function(a) {
    "use strict";
    var r = function(t, e) {
    };
    function n(t) {
    }
    function l(o) {
    }
    r.VERSION = "3.4.1",
    r.TRANSITION_DURATION = 350,
    r.DEFAULTS = {
        toggle: !0
    },
    r.prototype.dimension = function() {
    }
    ,
    r.prototype.show = function() {
    }
    ,
    r.prototype.hide = function() {
    }
    ,
    r.prototype.toggle = function() {
    }
    ,
    r.prototype.getParent = function() {
    }
    ,
    r.prototype.addAriaAndCollapsedClass = function(t, e) {
    }
    ;
    var t = a.fn.collapse;
    a.fn.collapse = l,
    a.fn.collapse.Constructor = r,
    a.fn.collapse.noConflict = function() {
    }
    ,
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
    })
}(jQuery),
function(a) {
    "use strict";
    var r = '[data-toggle="dropdown"]'
      , o = function(t) {
    };
    function l(t) {
    }
    function s(o) {
        o && 3 === o.which || (a(".dropdown-backdrop").remove(),
        a(r).each(function() {
        }))
    }
    o.VERSION = "3.4.1",
    o.prototype.toggle = function(t) {
    }
    ,
    o.prototype.keydown = function(t) {
    }
    ;
    var t = a.fn.dropdown;
    a.fn.dropdown = function e(i) {
    }
    ,
    a.fn.dropdown.Constructor = o,
    a.fn.dropdown.noConflict = function() {
    }
    ,
    a(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
function(a) {
    "use strict";
    var s = function(t, e) {
        this.options = e,
        this.$body = a(document.body),
        this.$element = a(t),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom",
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
        }, this))
    };
    function r(o, n) {
        return this.each(function() {
            var t = a(this)
              , e = t.data("bs.modal")
              , i = a.extend({}, s.DEFAULTS, t.data(), "object" == typeof o && o);
            e || t.data("bs.modal", e = new s(this,i)),
            "string" == typeof o ? e[o](n) : i.show && e.show(n)
        })
    }
    s.VERSION = "3.4.1",
    s.TRANSITION_DURATION = 300,
    s.BACKDROP_TRANSITION_DURATION = 150,
    s.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    s.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }
    ,
    s.prototype.show = function(i) {
        var o = this
          , t = a.Event("show.bs.modal", {
            relatedTarget: i
        });
        this.$element.trigger(t),
        this.isShown || t.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(t) {
                a(t.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var t = a.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body),
            o.$element.show().scrollTop(0),
            o.adjustDialog(),
            t && o.$element[0].offsetWidth,
            o.$element.addClass("in"),
            o.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: i
            });
            t ? o.$dialog.one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(s.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(e)
        }))
    }
    ,
    s.prototype.hide = function(t) {
        t && t.preventDefault(),
        t = a.Event("hide.bs.modal"),
        this.$element.trigger(t),
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        a(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    s.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    s.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    s.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }
    ,
    s.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.$body.removeClass("modal-open"),
            t.resetAdjustments(),
            t.resetScrollbar(),
            t.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    s.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    s.prototype.backdrop = function(t) {
        var e = this
          , i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = a.support.transition && i;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(t) {
                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
            }, this)),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
                return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var n = function() {
                e.removeBackdrop(),
                t && t()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : n()
        } else
            t && t()
    }
    ,
    s.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    s.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }
    ,
    s.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    s.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    s.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", t + n),
        a(this.fixedContent).each(function(t, e) {
        }))
    }
    ,
    s.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad),
        a(this.fixedContent).each(function(t, e) {
        })
    }
    ,
    s.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t),
        e
    }
    ;
    var t = a.fn.modal;
    a.fn.modal = r,
    a.fn.modal.Constructor = s,
    a.fn.modal.noConflict = function() {
    }
    ,
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var e = a(this)
          , i = e.attr("href")
          , o = e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")
          , n = a(document).find(o)
          , s = n.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(i) && i
        }, n.data(), e.data());
        e.is("a") && t.preventDefault(),
        n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                e.is(":visible") && e.trigger("focus")
            })
        }),
        r.call(n, s, this)
    })
}(jQuery),
function(g) {
    "use strict";
    var o = ["sanitize", "whiteList", "sanitizeFn"]
      , a = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , t = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , r = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , l = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function u(t, e) {
    }
    function n(t, e, i) {
    }
    var m = function(t, e) {
    };
    m.VERSION = "3.4.1",
    m.TRANSITION_DURATION = 150,
    m.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: t
    },
    m.prototype.init = function(t, e, i) {
    }
    ,
    m.prototype.getDefaults = function() {
    }
    ,
    m.prototype.getOptions = function(t) {
    }
    ,
    m.prototype.getDelegateOptions = function() {
    }
    ,
    m.prototype.enter = function(t) {
    }
    ,
    m.prototype.isInStateTrue = function() {
    }
    ,
    m.prototype.leave = function(t) {
    }
    ,
    m.prototype.show = function() {
    }
    ,
    m.prototype.applyPlacement = function(t, e) {
    }
    ,
    m.prototype.replaceArrow = function(t, e, i) {
    }
    ,
    m.prototype.setContent = function() {
    }
    ,
    m.prototype.hide = function(t) {
    }
    ,
    m.prototype.fixTitle = function() {
    }
    ,
    m.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    m.prototype.getPosition = function(t) {
    }
    ,
    m.prototype.getCalculatedOffset = function(t, e, i, o) {
    }
    ,
    m.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
    }
    ,
    m.prototype.getTitle = function() {
    }
    ,
    m.prototype.getUID = function(t) {
    }
    ,
    m.prototype.tip = function() {
    }
    ,
    m.prototype.arrow = function() {
    }
    ,
    m.prototype.enable = function() {
    }
    ,
    m.prototype.disable = function() {
    }
    ,
    m.prototype.toggleEnabled = function() {
    }
    ,
    m.prototype.toggle = function(t) {
    }
    ,
    m.prototype.destroy = function() {
    }
    ,
    m.prototype.sanitizeHtml = function(t) {
    }
    ;
    var e = g.fn.tooltip;
    g.fn.tooltip = function i(o) {
    }
    ,
    g.fn.tooltip.Constructor = m,
    g.fn.tooltip.noConflict = function() {
    }
}(jQuery),
function(n) {
    "use strict";
    var s = function(t, e) {
    };
    if (!n.fn.tooltip)
        throw new Error("Popover%20requires%20tooltip.html");
    s.VERSION = "3.4.1",
    s.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    ((s.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function() {
    }
    ,
    s.prototype.setContent = function() {
    }
    ,
    s.prototype.hasContent = function() {
    }
    ,
    s.prototype.getContent = function() {
    }
    ,
    s.prototype.arrow = function() {
    }
    ;
    var t = n.fn.popover;
    n.fn.popover = function e(o) {
    }
    ,
    n.fn.popover.Constructor = s,
    n.fn.popover.noConflict = function() {
    }
}(jQuery),
function(s) {
    "use strict";
    function n(t, e) {
    }
    function e(o) {
    }
    n.VERSION = "3.4.1",
    n.DEFAULTS = {
        offset: 10
    },
    n.prototype.getScrollHeight = function() {
    }
    ,
    n.prototype.refresh = function() {
    }
    ,
    n.prototype.process = function() {
    }
    ,
    n.prototype.activate = function(t) {
        
    }
    ,
    n.prototype.clear = function() {
    }
    ;
    var t = s.fn.scrollspy;
    s.fn.scrollspy = e,
    s.fn.scrollspy.Constructor = n,
    s.fn.scrollspy.noConflict = function() {
    }
    ,
    s(window).on("load.bs.scrollspy.data-api", function() {
        s('[data-spy="scroll"]').each(function() {
        })
    })
}(jQuery),
function(r) {
    "use strict";
    var a = function(t) {
    };
    function e(i) {
    }
    a.VERSION = "3.4.1",
    a.TRANSITION_DURATION = 150,
    a.prototype.show = function() {
    }
    ,
    a.prototype.activate = function(t, e, i) {
    }
    ;
    var t = r.fn.tab;
    r.fn.tab = e,
    r.fn.tab.Constructor = a,
    r.fn.tab.noConflict = function() {
    }
    ;
    var i = function(t) {
        t.preventDefault(),
        e.call(r(this), "show")
    };
    r(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(l) {
    "use strict";
    var h = function(t, e) {
    };
    function i(o) {
    }
    h.VERSION = "3.4.1",
    h.RESET = "affix affix-top affix-bottom",
    h.DEFAULTS = {
        offset: 0,
        target: window
    },
    h.prototype.getState = function(t, e, i, o) {
    }
    ,
    h.prototype.getPinnedOffset = function() {
    }
    ,
    h.prototype.checkPositionWithEventLoop = function() {
    }
    ,
    h.prototype.checkPosition = function() {
    }
    ;
    var t = l.fn.affix;
    l.fn.affix = i,
    l.fn.affix.Constructor = h,
    l.fn.affix.noConflict = function() {
    }
    ,
    l(window).on("load", function() {
        l('[data-spy="affix"]').each(function() {
        })
    })
}(jQuery);

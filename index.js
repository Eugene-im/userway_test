(() => {
    function mountCss() {
        let s = document.createElement('style');
        let h = document.getElementsByTagName('head')[0];
        s.innerHTML = '*.focus{position:static!important;width:auto!important;height:auto!important;font-size:14px!important;display:block!important;border: 1px solid red!important;color:#fff!important;background-color:#000!important}'
        h.parentNode.insertBefore(s, h);
    }
    function rootFocus(val, list, counter) {
        if (val % list.length === 0) {
            setFocus(list[list.length - 1])
        } else {
            if ((val > 0) && (val <= list.length)) {
                setFocus(list[val - 1]);
            } else if (val <= 0) {
                val = list.length;
                counter.a = list.length;
            } else if (val > list.length) {
                setFocus(list[(val % list.length) - 1])
            }
        }
    }
    function setFocus(el) {
        [...document.querySelectorAll('.focus')].forEach(element => element.classList.remove('focus'));
        el.classList.add('focus');
        el.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    function getElList() {
        return [...document.querySelectorAll([...arguments])];
    }


    function keyLog(e) {
        switch (e.code) {
            case 'KeyH':
                searchDirection === 'DOWN' ? hCounter.a += 1 : hCounter.a -= 1;
                break;
            case 'KeyL':
                searchDirection === 'DOWN' ? lCounter.a += 1 : lCounter.a -= 1;
                break;
            case 'KeyM':
                searchDirection === 'DOWN' ? mCounter.a += 1 : mCounter.a -= 1;
                break;
            case 'ArrowDown':
                searchDirection = 'DOWN';
                break;
            case 'ArrowUp':
                searchDirection = 'TOP';
                break;
            default:
                e.code;
        }
    }


    mountCss();


    let searchDirection = 'DOWN';
    let hCounter = {
        aInternal: 0,
        aListener: function (val) { },
        set a(val) {
            this.aInternal = val;
            this.aListener(val);
        },
        get a() {
            return this.aInternal;
        },
        registerListener: function (listener) {
            this.aListener = listener;
        }
    };

    let lCounter = {
        aInternal: 0,
        aListener: function (val) { },
        set a(val) {
            this.aInternal = val;
            this.aListener(val);
        },
        get a() {
            return this.aInternal;
        },
        registerListener: function (listener) {
            this.aListener = listener;
        }
    };
    let mCounter = {
        aInternal: 0,
        aListener: function (val) { },
        set a(val) {
            this.aInternal = val;
            this.aListener(val);
        },
        get a() {
            return this.aInternal;
        },
        registerListener: function (listener) {
            this.aListener = listener;
        }
    };

    hCounter.registerListener(function (val) {
        let list = getElList('h1', 'h2', 'h3', 'h4', 'h5', 'h6');
        rootFocus(val, list, this)
    });

    lCounter.registerListener(function (val) {
        let list = getElList('a');
        rootFocus(val, list, this)
    });

    mCounter.registerListener(function (val) {
        let list = getElList('header', 'main', 'footer', 'article', 'aside');
        rootFocus(val, list, this)
    });


    document.addEventListener('keyup', keyLog);
})();
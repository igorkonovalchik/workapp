
$(document).ready(function(){ 
  
  $("[class*='x-tl-booking-widget-']").each ( function () {
    const elClasses = $( this ).attr ( 'class' ).split ( ' ' );
    console.log(elClasses);
    console.log('find');
    }); 
    // .css("background", "#677462!important");
  // console.log(TL.modules);
});


    (function(w) {
        var q = [
            ['setContext', 'TL-INT-borclub', 'ru'],
            ['embed', 'search-form', {
                container: 'tl-search-form'
            }]
        ];
        var t = w.travelline = (w.travelline || {}),
            ti = t.integration = (t.integration || {});
        ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
        if (!ti.__loader) {
            ti.__loader = true;
            var d = w.document,
                p = d.location.protocol,
                s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = (p == 'https:' ? p : 'http:') + '//ibe.tlintegration.com/integration/loader.js';
            (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
        }
    })(window);




    



    
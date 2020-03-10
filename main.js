var timeout;
$('#paraBack').mousemove(function (e) {
    console.log("Mousse Over");
    if (timeout) clearTimeout(timeout);
    setTimeout(callParallax.bind(null, e), 200);

});

function callParallax(e) {
    parallaxIt(e, '.paraSlide', -100);
    parallaxIt(e, 'img', -30);
}

function parallaxIt(e, target, movement) {
    var $this = $('#paraBack');
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
        ease: Power2.easeOut
    })
}
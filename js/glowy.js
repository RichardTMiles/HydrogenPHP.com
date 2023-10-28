/*
 * I glow.  That's how I roll.
 */

function runGlow() {
    $('#header')
        .css({ backgroundPosition: '30000px 38px' })
        .animate({ backgroundPosition: '0px 38px' }, 200000, 'linear', runGlow);
}

$(window).load(function() {
    $('#header').addClass('color-strip');
    runGlow();
});
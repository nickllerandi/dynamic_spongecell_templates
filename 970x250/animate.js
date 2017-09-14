var tl1 = new TimelineMax();

tl1.to('#head', .75, { left: 15, ease: Power2.easeOut})
    .to('#sub', .75, { left: 15, ease: Power2.easeOut}, "-=0.5")
    .to('#head', .75, { autoAlpha: 0}, "+=1.5")
    .to('#sub', .75, { autoAlpha: 0}, "-=0.7")

    .to('#head2', .75, { left: 15, ease: Power2.easeOut}, "-=.5")
    .to('#sub2', .75, { left: 15, ease: Power2.easeOut}, "-=.5")
    .to('#head2', .75, { autoAlpha: 0}, "+=1.5")
    .to('#sub2', .75, { autoAlpha: 0}, "-=0.7")

    .to('#head3', .75, { left: 15, ease: Power2.easeOut}, "-=.5")       
    .to('#sub3', .75, { left: 15, ease: Power2.easeOut}, "-=.5")       
    .to('#cta', .75, { left: 15, ease: Power2.easeOut});


var tl1 = new TimelineMax();
  
//    tl1.to('#myAd_head', 2, { opacity: 1})
//      .to('#head', 1.3, { left: 70, ease: Power2.easeOut })
//      .to('#sub', 1.3, { top: 120, ease: Power2.easeOut}, '-=.5')
//      .to('#price', 1.3, { top: 170, ease: Power2.easeOut}, '-=.5')
//      .to('#myAd_head', 1, { opacity: 0})

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
    .to('#cta', .75, { left: 15, ease: Power2.easeOut})
    .to('#price', .75, { autoAlpha: 1});


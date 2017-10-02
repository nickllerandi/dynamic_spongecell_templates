function onReady() {

    var ad = document.getElementById('ad');
    
    var headline = document.getElementById('head');
    var f2_headline = document.getElementById('head2');
    var f3_headline = document.getElementById('head3');
    
    var subText = document.getElementById('sub');
    var f2_subText = document.getElementById('sub2');
    var f3_subText = document.getElementById('sub3');    
    
    var pricing = document.getElementById('price');
    var cta = document.getElementById('ctaText');
    var ctaContainer = document.getElementById('cta');
    var ctaCaret = document.getElementById('ctaCaret');
    var imageContainer = document.getElementById('img');
    //var bgContainer = document.getElementById('backG');
    var logoSrc = document.getElementById('logosrc');
    var device = '<span class="device">' + spongeapi.getDynamicText('DISPLAY_NAME_PRD') + '</span>';
    var moPrice = spongeapi.getDynamicText('MONTHLY_PRICE');
    var fullPrice = spongeapi.getDynamicText('FULL_RETAIL_PRICE');
    var installmentPrice = spongeapi.getDynamicText('INSTALLMENT_PRICE');
    var twoYearPrice = spongeapi.getDynamicText('TWO_YEAR_PRICE');
    var imageDevice = spongeapi.getDynamicImage('MAIN_IMAGE_URL270x265');
    //var bg = spongeapi.getDynamicImage('Background_Image');


    //    ******************************* Default RuleSet *********************************** 
    headline.maxLines = 5;
    f2_headline.maxLines = 5;
    f3_headline.maxLines = 5;
    
    subText.maxLines = 3;
    f2_subText.maxLines = 3;
    f3_subText.maxLines = 3;
    
    pricing.maxLines = 3;
    cta.maxLines = 2;
    headline.minFontSize = 15;
    subText.minFontSize = 10;
    pricing.minFontSize = 8;
    cta.minFontSize = 10;

    //**************************************Initial HTML element load*****************************


    headline.innerHTML = spongeapi.getDynamicText('f1_headline');
    f2_headline.innerHTML = spongeapi.getDynamicText('f2_headline');
    f3_headline.innerHTML = spongeapi.getDynamicText('f3_headline');    
    
    subText.innerHTML = spongeapi.getDynamicText('f1_subline');
    f2_subText.innerHTML = spongeapi.getDynamicText('f2_subline');
    f3_subText.innerHTML = spongeapi.getDynamicText('f3_subline');    
    
//    if (moPrice != null) {
//        pricing.innerHTML = spongeapi.getDynamicText('Pricing');
//    }else{
//        pricing.innerHTML = spongeapi.getDynamicText('Pricing2y');
//    }
    
    pricing.innerHTML = spongeapi.getDynamicText('legal');
    cta.innerHTML = spongeapi.getDynamicText('cta');
    imageContainer.style.backgroundImage = "url('" + imageDevice + "')";
    //bgContainer.style.backgroundImage = "url('" + bg + "')";

    //    ******************************* look for variables *********************************** 

    function checkVariables(who) {
        var varCheck = who.innerHTML;
        var rawVars = varCheck.match(/[^\{\]]+(?=\})/g);
        var availVariables = [];
        if (rawVars != null) {
            for (var j = 0; j < rawVars.length; j++) {
                tempVar = rawVars[j].split(" ");
                for (var k = 0; k < tempVar.length; k++) {
                    availVariables.push(tempVar[k]);
                }
            }
        }
        varCheck = varCheck.replace(/[^\{\]]+(?=\})/g, "");
        who.innerHTML = varCheck.replace(/(\{})/g, "");
        console.log(availVariables);
        for (var i = 0; i < availVariables.length; i++) {
            var checkMaxLines = /(maxLine)/;
            var checkMinFontSize = /(minFont)/
            if (checkMaxLines.test(availVariables[i])) {
                who.maxLines = Number(availVariables[i].replace("maxLine:", ""));
            } else if (checkMinFontSize.test(availVariables[i])) {
                who.minFontSize = Number(availVariables[i].replace("minFont:", ""));

            }
        }


    }


    //    ******************************* 2nd feed injection *********************************** 


    function checkText(who) {
        var deviceCheck = who.innerHTML;
        if (/(\[DEVICE\])/gi.test(deviceCheck) && device != null) {
            deviceCheck = deviceCheck.replace(/(\[DEVICE\])/gi, device);
            who.innerHTML = deviceCheck;
        } else if (/(\[DEVICE\])/gi.test(deviceCheck) && device == null) {
            who.style.display = "none";
        }
        //------------------------------------------
        if (moPrice != null) {
            var moPriceCheck = who.innerHTML;
            if (/(\[MOPRICE\])/gi.test(moPriceCheck) && moPrice != null) {
                moPriceCheck = moPriceCheck.replace(/(\[MOPRICE\])/gi, moPrice);
                who.innerHTML = moPriceCheck;
                who.style.display = "block";
            } else if (/(\[MOPRICE\])/gi.test(moPriceCheck) && moPrice == null) {
                who.style.display = "none";
            }
        }else {
            var twoYearPriceCheck = who.innerHTML;
            if (/(\[2YPRICE\])/gi.test(twoYearPriceCheck) && twoYearPrice != null) {
                twoYearPriceCheck = twoYearPriceCheck.replace(/(\[2YPRICE\])/gi, twoYearPrice);
                who.innerHTML = twoYearPriceCheck;
                who.style.display = "block";
            } else if (/(\[2YPRICE\])/gi.test(twoYearPriceCheck) && twoYearPrice == null) {
                who.style.display = "none";
            }
        }
        //------------------------------------------
        var fullPriceCheck = who.innerHTML;
        if (/(\[FULLPRICE\])/gi.test(fullPriceCheck) && fullPrice != null) {
            fullPriceCheck = fullPriceCheck.replace(/(\[FULLPRICE\])/gi, fullPrice);
            who.innerHTML = fullPriceCheck;
        } else if (/(\[FULLPRICE\])/gi.test(fullPriceCheck) && fullPrice == null) {
            who.style.display = "none";
        }
        var installmentCheck = who.innerHTML;
        if (/(\[INSTALLMENT\])/gi.test(installmentCheck) && installmentPrice != null) {
            installmentCheck = installmentCheck.replace(/(\[INSTALLMENT\])/gi, installmentPrice);
            who.innerHTML = installmentCheck;
        } else if (/(\[INSTALLMENT\])/gi.test(installmentCheck) && installmentPrice == null) {
            who.style.display = "none";
        }
        var superTextCheck = who.innerHTML;
        superTextCheck = superTextCheck.replace(/(\u00AE)/gi, "<span class='supText'>&reg;</span>");
        superTextCheck = superTextCheck.replace(/(\u00A9)/gi, "<span class='supText'>&copy;</span>");
        superTextCheck = superTextCheck.replace(/(\u2122)/gi, "<span class='supText'>&trade;</span>");
        who.innerHTML = superTextCheck;

    }
    
        checkText(headline);
        checkText(f2_headline);
        checkText(f3_headline);

        checkText(subText);
        checkText(f2_subText);
        checkText(f3_subText);

        checkText(pricing);
        checkText(cta);


    //    ******************************* LOGO RESIZE ***********************************
    function sizeLogo(fromTxt) {
        logoSrc.style.maxWidth = (parseInt(window.getComputedStyle(ad).getPropertyValue("width"), 10) - (parseInt(window.getComputedStyle(document.getElementById('logo')).getPropertyValue("left")) * 2)) + "px";
        var fontSize = parseInt(window.getComputedStyle(fromTxt).getPropertyValue("font-size"), 10);
        logoSrc.style.height = (fontSize * 0.9302) + "px";
        //console.log(fontSize + " | Logo Target Size: " + (fontSize * 0.9302));
    }



    //    ******************************* AUTO RESIZE ***********************************

    function fixFontSize(who) {
        var originalFontSize = parseInt(window.getComputedStyle(who).getPropertyValue("font-size"), 10);
        var currentHeight = who.getBoundingClientRect().height;
        var targetHeight = parseInt(window.getComputedStyle(who).getPropertyValue("line-height"), 10) * who.maxLines;
        var fontSizeS = parseInt(window.getComputedStyle(who).getPropertyValue("font-size"), 10);
        while (currentHeight > targetHeight) {
            fontSizeS--;
            if (fontSizeS < who.minFontSize) {

                break
            } else {

                who.style.fontSize = fontSizeS + "px";

                currentHeight = who.getBoundingClientRect().height;
                targetHeight = parseInt(window.getComputedStyle(who).getPropertyValue("line-height"), 10) * who.maxLines + 1;

            }
        }
        var spans = who.getElementsByClassName("device");
        var maxWidth = who.getBoundingClientRect().width;

        if (spans.length != 0) {

            var currentWidth = spans[0].getBoundingClientRect().width;
            while (currentWidth > maxWidth) {
                fontSizeS--;
                console.log(currentWidth, maxWidth, fontSizeS, who.minFontSize, who);
                if (fontSizeS < who.minFontSize) {
                    for (var i = 0; i < spans.length; i++) {

                        spans[i].classList.remove("device");
                        console.log(who);
                    }
                    who.style.fontSize = originalFontSize + "px";
                    fixFontSize(who);
                    break
                } else {

                    who.style.fontSize = fontSizeS + "px";
                    currentWidth = spans[0].getBoundingClientRect().width;

                }

            }

        }

    }


    //    ******************************* CARET PLACEMENT AND CONTAINER RESIZE ***********************************

    function caretPlacement(who, ctxt, ccar) {
        if (ctxt.innerHTML != "") {
            who.style.display = "block";
            who.style.height = ctxt.getBoundingClientRect().height + 'px';
//            ccar.style.height = parseInt(window.getComputedStyle(ctxt).getPropertyValue("line-height"), 10) + 'px';
            getLeft(ccar, ctxt, 9);
        }
    }

    //    ******************************* AUTO LOCATION ***********************************

    function getTop(who, reference, offset) {

        if (who != null && reference != null) {
            if (who.innerHTML != "" && who.style.display != "none") {
                who.style.top = parseInt(window.getComputedStyle(reference).getPropertyValue("top").replace("px", ""), 10) + reference.getBoundingClientRect().height + offset + "px";
            } else {
                who.style.top = parseInt(window.getComputedStyle(reference).getPropertyValue("top").replace("px", ""), 10) + reference.getBoundingClientRect().height + "px";
            }
        }

    }

    function getLeft(who, reference, offset) {
        if (who != null && reference != null) {

            who.style.left = parseInt(window.getComputedStyle(reference).getPropertyValue("left").replace("px", ""), 10) + reference.getBoundingClientRect().width + offset + "px";

        }
    }


    WebFont.load({
        custom: {
            families: ['NHG75', 'HELV47']
        },
        active: function () {
            setTimeout(runBanner, 100);

            function runBanner() {
                headline.style.display = "block";
                f2_headline.style.display = "block";
                f3_headline.style.display = "block";
                
                subText.style.display = "block";
                f2_subText.style.display = "block";                
                f3_subText.style.display = "block";
                
                pricing.style.display = "block";
                cta.style.display = "block";

                checkVariables(headline);
                checkVariables(f2_headline);
                checkVariables(f3_headline);
                
                checkVariables(subText);
                checkVariables(f2_subText);
                checkVariables(f3_subText); 
                
                checkVariables(pricing);
                checkVariables(cta);

//MOVED ABOVE
//                checkText(headline);
//                checkText(subText);
//                checkText(pricing);
//                checkText(cta);

//HAVE NOT MOVED - JUST COMMENTED OUT                
                fixFontSize(headline);
                fixFontSize(f2_headline);                
                fixFontSize(f3_headline);
//                
//                fixFontSize(subText);
//                fixFontSize(f2_subText);
//                fixFontSize(f3_subText);
//                
//                fixFontSize(pricing);
//                fixFontSize(cta);

                getTop(subText, headline, 10)
                getTop(f2_subText, f2_headline, 10)
                getTop(f3_subText, f3_headline, 10)
                getTop(ctaContainer, f3_subText, 10);
//                getTop(pricing, ctaContainer, 10);
                
                caretPlacement(ctaContainer, cta, ctaCaret);

//                sizeLogo(headline);
                
            }

        },
    });
}
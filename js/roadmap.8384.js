var maind="<p>Currently we are working through Testnet 2.</br>View the various stages of development in more detail... </p>",test1d="<p>See what we completed in Testnet 1.</p>",test2d="<p>Track the progress of Testnet 2's main objectives below.</p>",test3d="<p>See what we have planned for Testnet 3.</p>",launchd="<p>See what we have planned for beta.</p>",long1=".phase-group .long1 h2",long2=".phase-group .long2 h2",displayPhase,PATH_DELEMITER="#/",autoToggle=function(){var a,b;a=window.location.href.split(PATH_DELEMITER),(a||2===a.length)&&(b=$("#"+a[1]),b&&b.click())},appendUrlPath=function(a){window.location.href=window.location.href.split(PATH_DELEMITER)[0]+PATH_DELEMITER+a};$(document).ready(function(){$(".backwards").click(function(){displayPhase(this,"Project SAFE Roadmap",maind,"roadmap","phase-group")}),$("#testnet1").click(function(){displayPhase(this,"Testnet 1 Overview",test1d,"testnet1","roadmap")}),$("#testnet2").click(function(){displayPhase(this,"Testnet 2 Overview",test2d,"testnet2","roadmap")}),$("#testnet3").click(function(){displayPhase(this,"Testnet 3 Overview",test3d,"testnet3","roadmap")}),$("#betalaunch").click(function(){displayPhase(this,"BETA Launch",launchd,"betalaunch","roadmap")}),autoToggle()}),displayPhase=function(a,b,c,d,e){"phase-group"===e?$(".backwards#top-back").addClass("hidden"):"roadmap"===e&&$(".backwards#top-back").removeClass("hidden"),$("#roadmap #viewer > h1").replaceWith("<h1>"+b+"</h1>"),$("#roadmap #viewer > p").replaceWith(c),$("div."+e).addClass("hidden"),$("div."+d).removeClass("hidden"),$("#viewer").get(0).scrollIntoView(),$("#viewer").width()<500&&"testnet2"===d&&!$("#viewer").hasClass("mobile-version")?($(long1).replaceWith("<h2>Reworking vault accounts to reduce account transfer, memory requirements and ability to handle much higher churn</h2>"),$(long2).replaceWith("<h2>Advances in Routing group and quorum for security levels well beyond network size and increased sybil attack defence</h2>"),$("#viewer").addClass("mobile-version")):$("#viewer").width()>500&&"testnet2"===d&&$("#viewer").hasClass("mobile-version")&&($(long1).replaceWith("<h2>Reworking of all vault accounts to reduce account transfer, memory requirements and ability to handle much higher churn levels</h2>"),$(long2).replaceWith("<h2>Advances in Routing group and quorum for security levels well beyond network size and make sybil attacks inordinately difficult</h2>"),$("#viewer").removeClass("mobile-version")),appendUrlPath(d)};
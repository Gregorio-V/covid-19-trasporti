        $(document).ready(function () { // wait for document ready
            var controller = new ScrollMagic.Controller();
            duration = "600vh";
            //gestisce il blocco del chart
            new ScrollMagic.Scene({
                    triggerElement: "#grafico-cina",
                    triggerHook: 'onLeave',
                    duration: "300%"
                })
                .setPin("#grafico-cina", {
                    pushFollowers: true
                })
                .on("progress", function (e) {
                    date = ["1 Gen", "2 Gen", "3 Gen", "4 Gen", "5 Gen", "6 Gen", "7 Gen", "8 Gen", "9 Gen", "10 Gen"];
                    valori = ["11", "22", "33", "44", "55", "66", "77", "88", "99", "00"];
                    videoFiles = ["nome-1", "nome-2", "nome-3"];

                    //PROGRESSIONE SCROLL  
                    prog = e.progress.toFixed(3);
                    //RILIEVO LARGHEZZA SVG
                    viewBox = ($("#grafico-cina #cina").attr('viewBox')).split(" ");
                    svgWidth = viewBox[2];
                    //MUOVE LINEA
                    $("#cina #cursor").attr("x1", prog * svgWidth);
                    $("#cina #cursor").attr("x2", prog * svgWidth);
                    //MOUVE TESTI
                    $("#cina #main-value").css("transform", "translate(" + prog * svgWidth + "px,200px)");
                    $("#cina #main-value-caption").css("transform", "translate(" + prog * svgWidth + "px,220px)");
                    $("#cina #main-value-date").css("transform", "translate(" + prog * svgWidth + "px,17px)");
                    //AGGIORNA VALORI
                    $("#cina #main-value").text(valori[Math.floor(prog * valori.length)]);
                    $("#cina #main-value-date").text(date[Math.floor(prog * valori.length)]);
                    if (prog >= 0) {
                        $('#grafico-cina video').attr("source", videoFiles[0]);
                    }
                    if (prog >= 5) {
                        $('#grafico-cina video').attr("source", videoFiles[1]);
                    }
                    if (prog >= 8) {
                        $('#grafico-cina video').attr("source", videoFiles[2]);
                    }



                })
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        });

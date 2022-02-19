var x = 0, y = 0, z = 0, mls = 0, lp = 1, xd = 0;
    var hrs = document.getElementById("hrs");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    var ms = document.getElementById("ms");
    var lap = document.getElementById("lap");
    
    function stop(){
        x = 0;
        y = 0;
        z= 0;
        mls = 0;
        hrs.innerHTML = '0' + z;
        min.innerHTML = '0' + y;
        sec.innerHTML = '0' + x;
        ms.innerHTML = '0' + mls;
        clearInterval(mycounter);
        xd = 0;
    }
    
    document.getElementById("startbutton").onclick = function(){
        if( xd != 1){
            resume();
        }
    }

    function pause(){
        xd = 0;
        clearInterval(mycounter);
    }

    var mycounter;
    function resume(){
        mycounter = 
            setInterval(function(){
                mls++;
                if(mls > 99){
                    mls = 0;
                    x++;
                    if(x > 59){
                        x = 0;
                        y++;
                        if(y > 59){
                            y = 0;
                            z++;
                        }
                    }
                }
                if(z < 10){
                    hrs.innerHTML = '0' + z;
                }
                else{
                    hrs.innerHTML = z;
                }
                if(y < 10){
                    min.innerHTML = '0' + y;
                }
                else{
                    min.innerHTML = y;
                }
                if(x < 10){
                    sec.innerHTML = '0' + x;
                }
                else{
                    sec.innerHTML = x;
                }
                if(mls < 10){
                    ms.innerHTML = '0' + mls;
                }
                else{
                    ms.innerHTML = mls;
                }
            xd = 1;
            }, 10);
        
        
        //setInterval syntax
        //setInterval(some code, time intereval in milli seccond)
        //the given code is repeated at an interval of the given time interval
    }
    function lapse(){
        if(xd != -1){
        lap.innerHTML = "<p>" + lp + ". " + document.getElementById("counter").innerHTML + "</p>" + lap.innerHTML;
        lp++;
        xd = -1;
        }
    }
    
    function lapsclear(){
        lap.innerHTML = "<br>Laps Time:<br>";
        lp = 1;
    }
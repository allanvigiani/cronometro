let start = 0;

        function startChronometer() {
            
            document.getElementById('btn_start').style.display = 'none';
            document.getElementById('btn_stop').style.display = 'inline';
            

            let timer_hour = document.querySelector('#timer_hour');
            let timer_minute = document.querySelector('#timer_minute');
            let timer_second = document.querySelector('#timer_second');
            let timer_tenth_second = document.querySelector('#timer_tenth_second');

            let hour = 0;
            let minute = 0;
            let second = 0;
            let tenth_second = 0;

            start = setInterval( function() {
                timer_hour.innerHTML = hour < 10 ? '0' + hour : hour;
                timer_minute.innerHTML = minute < 10 ? '0' + minute : minute;
                timer_second.innerHTML = second < 10 ? '0' + second : second;
                timer_tenth_second.innerHTML = tenth_second < 10 ? '0' + tenth_second : tenth_second;

                if(tenth_second < 9) {
                    tenth_second ++;
                }else if(second < 59) {
                    tenth_second = 0;
                    second++;
                }else if(minute < 59) {
                    tenth_second = 0;
                    second = 0;
                    minute++;
                }else if(hour < 23) {
                    tenth_second = 0;
                    second = 0;
                    minute = 0;
                    hour++;
                }else {
                    alert("Error");
                    document.location.reload();
                }

            },100);
        }

        function stopChronometer() {
            clearInterval(start);

            document.querySelector('#timer_hour').innerHTML = '00';
            document.querySelector('#timer_minute').innerHTML = '00';
            document.querySelector('#timer_second').innerHTML = '00';
            document.querySelector('#timer_tenth_second').innerHTML = '00';

            document.getElementById('btn_start').style.display = 'inline';
            document.getElementById('btn_stop').style.display = 'none';
        }
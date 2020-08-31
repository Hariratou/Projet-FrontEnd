        const colorun = document.getElementById('colorun');
        const colordeux = document.getElementById('colordeux');
        const bodybg = document.getElementById('bodybg');
        const showvalue = document.getElementById('showvalue');

        function setbgcolour(){
            bodybg.style.background = `linear-gradient(to right, ${colorun.value}, ${colordeux.value})` ;

            showvalue.textContent = `Copy your code: linear-gradient(to right, ${colorun.value},${colordeux.value})` ;
        }

        colorun.addEventListener('input', setbgcolour);

        colordeux.addEventListener('input', setbgcolour);
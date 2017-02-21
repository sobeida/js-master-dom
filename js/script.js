(function () {

    var carimages = document.querySelector('.carimages');


    carimages.addEventListener('click', function (e) {


        if (e.target.tagName === 'IMG') {


            var overlay = document.createElement('div');

            overlay.id = 'overlay';


            // set some styles

            overlay.style.position = 'absolute';
            overlay.style.top = 0;
            overlay.style.background = 'rgba(0,0,0,0.9)';
            overlay.style.cursor = 'pointer';


            // set some sizes

            overlay.style.width = window.innerWidth + "px";
            overlay.style.height = window.innerHeight + "px";


            // append the overlay to the body

            document.body.appendChild(overlay);


            // set image source

            var imageSrc = e.target.src;



            // create the image

            var popUpImage = document.createElement('img');
            popUpImage.id = 'popimage';
            popUpImage.src = imageSrc;


            // style the image

            popUpImage.style.display = 'block';
            popUpImage.style.width = '50%';
            popUpImage.style.margin = '0 auto';
            popUpImage.style.marginTop = '10%';


            // append the image to the overlay

            overlay.appendChild(popUpImage);

            popUpImage.addEventListener('click', function () {

                if (overlay) {


                    overlay.parentElement.removeChild(overlay);


                }



            });



            // set overlay to follow window scroll

            window.addEventListener('scroll', function () {

                if (overlay) {


                    overlay.style.top = window.pageYOffset + 'px';
                    overlay.style.left = window.pageXOffset + 'px';


                }

            });


            // set overlay to resize when the window is resized



            window.addEventListener('resize', function () {


                overlay.style.width = window.innerWidth + 'px';
                overlay.style.left = window.innerHeight + 'px';
                overlay.style.top = window.pageYOffset + 'px';
                overlay.style.left = window.pageXOffset + 'px';


            });

            // console.log(popUpImage);


            // console.log(imageSrc);


            // console.log(e.target.tagName);


        } // check the image is being clicked


    }); // event listener for the div width class of carimages


    // console.log(carimages);

    // console.log('it works');


}()); //load the document first

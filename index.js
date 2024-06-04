let div = document.getElementById("image-content");

        function openImage(src){
            let image = document.getElementById("modalImage");
            div.style.display="block";
           image.src = src;
        }

        function closeModal(){
            div.style.display="none";
        }
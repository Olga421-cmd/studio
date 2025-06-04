 function lightBox(src){
            let shade = document.createElement("div")
            shade.className = "shade";
           // shade.onclick = deleteShade
           shade.addEventListener("click", deleteShade)
            document.body.appendChild(shade)

            let bigImage = document.createElement("img")
            bigImage.src = src;
            shade.appendChild(bigImage)


            function deleteShade(){
                document.body.removeChild(shade)
                }
        }
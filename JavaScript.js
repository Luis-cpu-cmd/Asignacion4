let NumRecetas=1;
const $selectFiles=document.querySelector('#imagen');
const $imagePre=document.querySelector("#previewImage");
$selectFiles.addEventListener("change",()=>{
    const files = $selectFiles.files;
    if (!files || !files.length){
        $imagePre.src="";
        return;
    }
    const selFile=files[0];
    const objectURL=URL.createObjectURL(selFile);
    $imagePre.src=objectURL;
});

$(document).ready(function(){
    $("#add").click(function(){
        $("#myModal").modal("hide");
        NumRecetas++;
        let divRecetaMain= document.createElement("div");
        divRecetaMain.className="RCT d-flex flex-column";
        let NumReceta=document.createElement("div");
        NumReceta.className="NumReceta p-3 text-center text-white"
        NumReceta.innerHTML="Receta "+NumRecetas;
        divRecetaMain.appendChild(NumReceta);
        let NombreImage=document.createElement("div");
        NombreImage.className="ImageName d-flex flex-row ";
        let tituloReceta = document.createElement("div");
        tituloReceta.className="p-3 text-white d-flex align-items-center display-4";
        tituloReceta.innerText=""+$("#titulo").val();
        NombreImage.appendChild(tituloReceta);
        let img = document.createElement("img");
        img.setAttribute("src", $imagePre.src)
        img.className="img-thumbnail mx-auto d-block my-3";
        NombreImage.appendChild(img);
        divRecetaMain.appendChild(NombreImage);
        let contenido=document.createElement("div");
        contenido.innerText="Ingredientes: \n"+ $("#ingredientes").val() + " \n\n Procedimientos: \n " +  $("#procedimiento").val();
        contenido.className="ContReceta text-white p-3 text-justify"
        divRecetaMain.appendChild(contenido);
        clear();
        document.getElementById("RecetasContainer").appendChild(divRecetaMain);
    });
});
function clear()
{
    let formElements = document.getElementsByClassName("form-control");
    for (let i= 0; i < formElements.length; i++) {            
        formElements[i].value = "";
    }
    $imagePre.src = "";
}
function getSelectedValue(){
    let dropdownval= document.getElementById("dd").value;
    let snacks=document.getElementById("snacks");
    let deserts=document.getElementById("deserts");
    if(dropdownval.toString() == "deserts"){
        deserts.style.display="block";
        snacks.style.display="none";
    } else if(dropdownval.toString() == "snacks"){
        deserts.style.display="none";
        snacks.style.display="block";
    }
}
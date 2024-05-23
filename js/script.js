function kelilingsegitiga(){
    a= parseInt(document.getElementById("a").value);
    b= parseInt(document.getElementById("b").value);
    c= parseInt(document.getElementById("c").value);
    keliling=a+b+c;
    
    document.getElementById("keliling").value=keliling;
}

function kelilingreset(){
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("keliling").value = "";
}

function luassegitiga(){
    alas= document.getElementById("alas").value;
    tinggi= document.getElementById("tinggi").value;
    luas=1/2*alas*tinggi;

    document.getElementById("luas").value=luas;
}

function luasreset(){
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("luas").value = "";
}

var ime=document.getElementById("username");
var sifra=document.getElementById("password");
function provjera(ime,sifra){
    var tekst = '{ "korisnici" : [' +
    '{ "ime":"Elma" , "password":"elma123" },' +
    '{ "ime":"Lejla" , "password":"lejla123" },' +
    '{ "ime":"Irena" , "password":"irena123" } ]}';
    objekt = JSON.parse(tekst);
    var ukupno = objekt.korisnici.length;
    var tekst = "";
    for (i=0; i<ukupno; i++) {

        
     if(ime.toLowerCase()==objekt.korisnici[i].ime.toLowerCase() && sifra==objekt.korisnici[i].password) {
        open("index.html","_self");

    }
    
        if(ime=="" || password==""){
        document.getElementById("tekst").innerHTML="Ispunite oba polja!"
    
    }
    else{
        document.getElementById("tekst").innerHTML="Username ili password nisu ispravni"
    }
   
}
}
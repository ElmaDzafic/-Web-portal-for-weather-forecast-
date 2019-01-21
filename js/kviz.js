    
    
    
    
    //definisanje varijabli
       
    var pozicija = 0, quiz, status_quiz, pitanje,izbor, izbori, izborA, izborB, izborC, tacni_odg = 0;
    //definisanje pitanja
    var pitanja = [
   ["Koji je najveci ocean na svijetu?", "Atlantski", "Tihi", "Indijski", "B"],
   ["Koji je de facto glavni grad EU-a?", "London", "Luksemburg", "Bruxelles", "B"],
   ["Gdje se nalazi najveća planina na svijetu?", "Kini", "Pakistanu", "Nepalu", "C"],
   ["Koju valutu koristi Indonezija?", "Dinar", "Rangit", "Rijal", "C"],
   ["Koje je godine film “Titanik” režisera Camerona bio u kinima?", "1997", "1998", "1999", "A"],
   ["Koji je šesti planet od Sunca?", "Neptun", "Saturn	", "Uran	", "B"],
   ["Tko je osnovao Instagram?", "Kevin Systrom", "Jan Koum", "Sergey Brin", "A"],
   ["Kojim simbolom je u periodnom sistemu elemenata obilježeno olovo?", "Le", "Os", "Pb	", "C"],
   ["Tko je najstariji od ovih glumaca?", "Michael Caine", "Ian McKellen", "Patrick Stewart", "A"],
   ["Šta je izumio Aleksandar Fleming?","zakon održanja energije","mikroskop"," pencilin","C"],
   ];
  function pitanja_1(){
   test = document.getElementById("quiz");
   if(pozicija >= pitanja.length){ //ako nema vise pitanja ide ispis
  
     test.innerHTML = "</br>"+"</br>"+"<h2>Imate "+tacni_odg+" od "+pitanja.length+" tacnih odgovora!</h2>";
    document.getElementById("status_quiz").innerHTML = "Kviz je zavrsen :)";
 
     pozicija = 0;
     tacni_odg = 0;
     return false;
      
   }
  
   document.getElementById("status_quiz").innerHTML = "Pitanje broj "+(pozicija+1)+". :"+"</br>";
   pitanje = pitanja[pozicija][0];
   izborA = pitanja[pozicija][1];
   izborB = pitanja[pozicija][2];
   izborC= pitanja[pozicija][3];
   test.innerHTML = "</br>"+"</br>"+"<h3>"+pitanje+"</h3>";
   test.innerHTML += "<input type='radio' name='izbori' value='A'> "+izborA+"<br>";
   test.innerHTML += "<input type='radio' name='izbori' value='B'> "+izborB+"<br>";
   test.innerHTML += "<input type='radio' name='izbori' value='C'> "+izborC+"<br><br>";
   test.innerHTML += "<button onclick='provjera()'>Konacan odgovor</button>";
 
  }

 function provjera(){
 
   izbori = document.getElementsByName("izbori");
   for(var i=0; i<izbori.length; i++){
     if(izbori[i].checked){
       izbor = izbori[i].value;//odabir odgovora
     }
   }
 
   if(izbor== pitanja[pozicija][4]){// provjera je li izabrani odg jednak tacnom odg
     tacni_odg++;
   }
   pozicija++;//povecava se pozicija
   pitanja_1();
 }
 window.addEventListener("load", pitanja_1, false);// na otvaranje stranice odmah radi



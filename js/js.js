var prvigumbkliknut;
var drugigumbkliknut;
$(document).ready(function(){
    $('#prikazikec').click(function(){//ako se klikne na button sa id prikazi kec radi sljedece
        if(prvigumbkliknut!=true) //odredjivanje stanja gumba da li je read less ili read more
            {
                prvigumbkliknut=true;
                $('#odvedimetu1').css( {display: 'inline-block'} );
                $('#prikazikec').text('Read Less');
            }
            else{
                $('#odvedimetu1').css( {display: 'none'} );
                $('#prikazikec').text('Read More');
                prvigumbkliknut=false;
            }
    })
    $('#prikazidvica').click(function(){
        if(drugigumbkliknut!=true)
        {
            drugigumbkliknut = true;
            $('#odvedimetu2').css( {display: 'inline-block'} );
            $('#prikazidvica').text('Read Less');
        }
        else{
            $('#odvedimetu2').css( {display: 'none'} );
            $('#prikazidvica').text('Read More');
            drugigumbkliknut=false;
        }
    })
});
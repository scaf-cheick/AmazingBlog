// Form validation code will come here.
function validateContactMe() {

    console.log('ok');

    var emailID = document.contactme.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

     if( document.contactme.email.value == "" || atpos < 1 || ( dotpos - atpos < 2 ) ) {
        
        M.toast({html: 'E-mail invalide !'});
        document.contactme.email.focus() ;
        return false;
         
     }
     if( document.contactme.pseudo.value == "" || document.contactme.pseudo.value.length < 2) {
        
        M.toast({html: 'Le pseudo doit comporter au moins 2 caractères'});
        document.contactme.pseudo.focus() ;
        return false;
     }

     if( document.contactme.message.value == "" || document.contactme.message.value.length < 10) {
        
        M.toast({html: 'Le message doit comporter au moins 10 caractères'});
        document.contactme.message.focus() ;
        return false;
     }

     return true;
}

function validateRegister() {

    console.log('ok');

    var emailID = document.register.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

     if( document.register.email.value == "" || atpos < 1 || ( dotpos - atpos < 2 ) ) {
        
        M.toast({html: 'E-mail invalide !'});
        document.register.email.focus() ;
        return false;
         
     }
     if( document.register.pseudo.value == "" || document.register.pseudo.value.length < 2) {
        
        M.toast({html: 'Le pseudo doit comporter au moins 2 caractères'});
        document.register.pseudo.focus() ;
        return false;
     }
     if( document.register.nom.value == "" || document.register.nom.value.length < 2) {
        
        M.toast({html: 'Le nom doit comporter au moins 2 caractères'});
        document.register.nom.focus() ;
        return false;
     }
     if( document.register.prenom.value == "" || document.register.prenom.value.length < 2) {
        
        M.toast({html: 'Le prénom doit comporter au moins 2 caractères'});
        document.register.prenom.focus() ;
        return false;
     }

     if( document.register.phone.value == "" || document.register.phone.value.length < 8) {
        
        M.toast({html: 'Le numero de télephone doit comporter au moins 8 caractères'});
        document.register.phone.focus() ;
        return false;
     }

     if( document.register.motivation.value == "" || document.register.motivation.value.length < 20) {
        
        M.toast({html: 'Le champ motivation doit comporter au moins 20 caractères'});
        document.register.motivation.focus() ;
        return false;
     }

     return true;
}


function validateComments() {

    console.log('ok');

    var emailID = document.comments.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

     if( document.comments.email.value == "" || atpos < 1 || ( dotpos - atpos < 2 ) ) {
        
        M.toast({html: 'E-mail invalide !'});
        document.comments.email.focus() ;
        return false;
         
     }
     if( document.comments.pseudo.value == "" || document.comments.pseudo.value.length < 2) {
        
        M.toast({html: 'Le pseudo doit comporter au moins 2 caractères'});
        document.comments.pseudo.focus() ;
        return false;
     }

     if( document.comments.content.value == "" || document.comments.content.value.length < 4) {
        
        M.toast({html: 'Le message doit comporter au moins 4 caractères'});
        document.comments.content.focus() ;
        return false;
     }

     return true;
}
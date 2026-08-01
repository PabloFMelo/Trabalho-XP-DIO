let experiencia = 4900
let personagem = "Batata"

if (experiencia < 1000 ){
    console.log(personagem +" tem o rank Ferro com "+ experiencia+" de xp");
}
    else if( experiencia >= 1001 && experiencia < 2000){
        console.log(personagem +" tem o rank Bronze com "+ experiencia+" de xp");
    }
    else if( experiencia >= 2001 && experiencia < 3000)
        {console.log(personagem +" tem o rank Prata com "+ experiencia+" de xp");
        }
    else if( experiencia >= 3001 && experiencia < 4000)
        {console.log(personagem +" tem o rank Ouro com "+ experiencia+" de xp");
        }
    else if( experiencia >= 4001 && experiencia < 5000)
        {console.log(personagem +" tem o rank Platina  com "+ experiencia+" de xp");
        }
    else if( experiencia >= 5000 && experiencia < 6000)
        {console.log(personagem +" tem o rank com Ascendente "+  experiencia+" de xp");
        }
    else if( experiencia >= 7001 && experiencia < 8000)
        {console.log(personagem +" tem o rank Imortal com "+ experiencia+" de xp");
        }
    else console.log(personagem +" tem o rank Radiante com "+ experiencia+" de xp"); 




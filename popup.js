const body=document.querySelector("body");
const popup_proyect = document.querySelector(".proyect-foot1-button");



const popup_proyect1=document.querySelector(".works1");
popup_proyect1.addEventListener("click",() => { 
    loadpages();
    const works1=document.querySelector(".popup1");    
     works1.classList.add("popup-visible");
      })
//proyect2 = document.querySelector(".works2");
const popup_proyect2=document.querySelector(".works2");
popup_proyect2.addEventListener("click",() => { 
        loadpages();
        const works2=document.querySelector(".popup2");    
        works2.classList.add("popup-visible");
            })

//proyect3 = document.querySelector(".works3");
const popup_proyect3=document.querySelector(".works3");
popup_proyect3.addEventListener("click",() => { 
        loadpages();
        const works3=document.querySelector(".popup3");    
        works3.classList.add("popup-visible");
            })

//proyect4 = document.querySelector(".works4");
const popup_proyect4=document.querySelector(".works4");
popup_proyect4.addEventListener("click",() => { 
        loadpages();
        const works4=document.querySelector(".popup4");    
        works4.classList.add("popup-visible");
            })

//proyect5 = document.querySelector(".works5");
const popup_proyect5=document.querySelector(".works5");
popup_proyect5.addEventListener("click",() => { 
        loadpages();
        const works5=document.querySelector(".popup5");    
        works5.classList.add("popup-visible");
            })

//proyect6 = document.querySelector(".works6");
const popup_proyect6=document.querySelector(".works6");
popup_proyect6.addEventListener("click",() => { 
        loadpages();
        const works6=document.querySelector(".popup6");    
        works6.classList.add("popup-visible");
            })
//popup_proyect.addEventListener("click",loadpages)


function loadpages() {

    const main=document.createElement("div");
    const popup=document.createElement("div");
    popup.innerHTML = `
    <!-- proyect1 -->
    <div class="popup popup1 " id="popup1">
        <div class="close-container">
        <div class="close-x"></div>
        </div>
        <h2 class="popup-title">Project name goes here</h2>
        <div class="popup-skils">
            <h3  class="popup-h3">HTML/CSS</h3>
            <h3 class="popup-h3">Ruby on Rails</h3>
            <h3 class="popup-h3">JavaScript</h3>        
        </div>
        <div class="popup-image1"></div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum!</p>
        </div>
        <div class="popup-btn-conteiner">
            <a class="popup-btn" href="#">See live</a>
            <a class="popup-btn" href="#">See source</a>            
        </div>
    </div>  
    

    <!-- proyecct2 -->
<div class="popup popup2">
    <div class="close-container">
    <div class="close-x"></div>
</div>
        <h2 class="popup-title">Project name goes here</h2>
        <div class="popup-skils">
            <h3  class="popup-h3">HTML/CSS</h3>
            <h3 class="popup-h3">Ruby on Rails</h3>
            <h3 class="popup-h3">JavaScript</h3>        
        </div>
        <div class="popup-image2"></div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum!</p>
    </div>
    <div class="popup-btn-conteiner">
        <a class="popup-btn" href="#">See live</a>
        <a class="popup-btn" href="#">See source</a>
        
    </div>
    </div>    

<!-- proyecct3 -->
<div class="popup popup3">
    <div class="close-container">
    <div class="close-x"></div>
</div>
        <h2 class="popup-title">Project name goes here</h2>
        <div class="popup-skils">
            <h3  class="popup-h3">HTML/CSS</h3>
            <h3 class="popup-h3">Ruby on Rails</h3>
            <h3 class="popup-h3">JavaScript</h3>        
        </div>
        <div class="popup-image3"></div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum!</p>
    </div>
    <div class="popup-btn-conteiner">
        <a class="popup-btn" href="#">See live</a>
        <a class="popup-btn" href="#">See source</a>
        
    </div>
    </div> 

    <!-- proyecct4 -->
    <div class="popup popup4">
        <div class="close-container">
        <div class="close-x"></div>
    </div>
            <h2 class="popup-title">Project name goes here</h2>
            <div class="popup-skils">
                <h3  class="popup-h3">HTML/CSS</h3>
                <h3 class="popup-h3">Ruby on Rails</h3>
                <h3 class="popup-h3">JavaScript</h3>        
            </div>
            <div class="popup-image4"></div>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum!</p>
        </div>
        <div class="popup-btn-conteiner">
            <a class="popup-btn" href="#">See live</a>
            <a class="popup-btn" href="#">See source</a>
            
        </div>
        </div> 

    <!-- proyecct5 -->
    <div class="popup popup5">
        <div class="close-container">
        <div class="close-x"></div>
    </div>
            <h2 class="popup-title">Project name goes here</h2>
            <div class="popup-skils">
                <h3  class="popup-h3">HTML/CSS</h3>
                <h3 class="popup-h3">Ruby on Rails</h3>
                <h3 class="popup-h3">JavaScript</h3>        
            </div>
            <div class="popup-image5"></div>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum!</p>
        </div>
        <div class="popup-btn-conteiner">
            <a class="popup-btn" href="#">See live</a>
            <a class="popup-btn" href="#">See source</a>
            
        </div>
        </div> 

    <!-- proyecct6 -->
    <div class="popup popup6">
        <div class="close-container">
        <div class="close-x"></div>
    </div>
            <h2 class="popup-title">Project name goes here</h2>
            <div class="popup-skils">
                <h3  class="popup-h3">HTML/CSS</h3>
                <h3 class="popup-h3">Ruby on Rails</h3>
                <h3 class="popup-h3">JavaScript</h3>        
            </div>
            <div class="popup-image6"></div>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum!</p>
        </div>
        <div class="popup-btn-conteiner">
            <a class="popup-btn" href="#">See live</a>
            <a class="popup-btn" href="#">See source</a>            
        </div>
        </div> 


    ` ;

     main.appendChild(popup);
    body.appendChild(main);
    const close = document.querySelectorAll(".close-x");
    close.forEach((closex,i)=>{
        closex.addEventListener("click", () => {
            body.removeChild(main) ;   })
    })


 
}


//form validation
const form=document.getElementById("form");
const names=document.getElementById("names");
const email=document.getElementById("email");
const coment=document.getElementById("coment");

form.addEventListener("submit", e =>{
      e.preventDefault();
    validateinputs();    
})

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateinputs=() =>{  
    const nameinput= names.value.trim();
    const emailinput= email.value.trim();
    const comentinput= coment.value.trim();   
    if(nameinput===""){  const errornames = document.querySelector(".your-name-container");
    errornames.classList.add("error");
       }
    else { 
   const succesnames = document.querySelector(".your-name-container");
   succesnames.classList.add("succes");
    }

    if(emailinput===""){
    const erroremail = document.querySelector(".email-container");
    erroremail.classList.add("error")
      ; }  else if(!isValidEmail(emailinput)){
        const erroremail2 = document.querySelector(".email-container");
        erroremail2.classList.add("error");
      }      
    else {  const succesemail = document.querySelector(".email-container");
   succesemail.classList.add("succes");
    }

    if(comentinput===""){  const errorcoment = document.querySelector(".form-coment");
    errorcoment.classList.add("error");
       }
    else { 
   const succescoment = document.querySelector(".form-coment");
   succescoment.classList.add("succes");
    }


}

















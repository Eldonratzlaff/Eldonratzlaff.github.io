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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto?</p>
        </div>
        <div>
            <a href="#">See live</a>
            <a href="#">See source</a>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum! </p>
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto?</p>
        </div>
        <div>
            <a href="#">See live</a>
            <a href="#">See source</a>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum! </p>
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto?</p>
        </div>
        <div>
            <a href="#">See live</a>
            <a href="#">See source</a>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum! </p>
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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto?</p>
            </div>
            <div>
                <a href="#">See live</a>
                <a href="#">See source</a>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum! </p>
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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto?</p>
            </div>
            <div>
                <a href="#">See live</a>
                <a href="#">See source</a>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum! </p>
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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium et deserunt fuga nulla dolorem iure vel, itaque corrupti molestiae iusto?</p>
            </div>
            <div>
                <a href="#">See live</a>
                <a href="#">See source</a>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum llat iias tempora illo suscipit optio, eligendi esse ullam fuga non facere dolorem eveniet mlaudantium omnis maiores eos corporis eum temporibus est, vel fuga modi ullam. Qui eaque dolores nesciunt aliquid cum! </p>
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



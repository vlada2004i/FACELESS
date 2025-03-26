document.addEventListener("DOMContentLoaded", function () {

    const faces = document.querySelectorAll(".face1");
    let currentIndex = 0;
  
    function changeBackground() {
      let nextIndex = (currentIndex + 1) % faces.length;
  
      faces[currentIndex].classList.remove("active");
  
      faces[nextIndex].classList.add("active");
  
      currentIndex = nextIndex;
    }
  
    faces[currentIndex].classList.add("active");
  
    setInterval(changeBackground, 4000);

    document.getElementById("scrollbtn").addEventListener("click", function () {
        window.scrollBy({
          top: window.innerHeight,
          behavior: "smooth"
        });
    })

    const mainn = document.querySelector ('.mainlichiko');
    const button1 = document.querySelector('.lichiko_1');
    const button2 = document.querySelector('.lichiko_2');
    const button3 = document.querySelector('.lichiko_3');
    const button4 = document.querySelector('.lichiko_4');

    button1.addEventListener("click", function() {
      mainn.classList.remove(mainn.classList[0]);
      mainn.classList.add("mainlichiko_2");
    })

    button2.addEventListener("click", function() {
      mainn.classList.remove(mainn.classList[0]);
      mainn.classList.add("mainlichiko_3");
    })

    button3.addEventListener("click", function() {
      mainn.classList.remove(mainn.classList[0]);
      mainn.classList.add("mainlichiko_4");
    })

    button4.addEventListener("click", function() {
      mainn.classList.remove(mainn.classList[0]);
      mainn.classList.add("mainlichiko");
    })

       
                
           
   })

document.addEventListener("DOMContentLoaded", () => {
  const headline = document.querySelector(".hero-headline");

  const fullHTML = headline.innerHTML;
  headline.innerHTML = "";

  let index = 0;

  function type() {
    if (index < fullHTML.length) {
      headline.innerHTML = fullHTML.substring(0, index + 1);
      index++;
      
      setTimeout(type, 60); 
    }
  }

  type();
});

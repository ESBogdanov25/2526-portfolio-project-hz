function toggleFAQ(element) {
    const faqAnswer = element.querySelector('.faq-answer');
    const isActive = element.classList.contains('active');
    
    document.querySelectorAll('.faq-item.active').forEach(item => {
        if(item !== element) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').classList.remove('active');
        }
    });
    
    if(isActive) {
        element.classList.remove('active');
        faqAnswer.classList.remove('active');
    } else {
        element.classList.add('active');
        faqAnswer.classList.add('active');
        createFloatingParticles(element);
    }
}

function createFloatingParticles(element) {
    for(let i=0;i<5;i++){
        setTimeout(()=>{
            const particle=document.createElement('div');
            particle.className='particle';

            const rect=element.getBoundingClientRect();
            const containerRect=document.querySelector('.faq-container').getBoundingClientRect();

            particle.style.left=(Math.random()*rect.width+rect.left-containerRect.left)+'px';
            particle.style.top=(rect.top-containerRect.top+rect.height/2)+'px';
            particle.style.animationDelay=(Math.random()*2)+'s';

            document.querySelector('.faq-container').appendChild(particle);

            setTimeout(()=>{particle.remove();},4000);
        },i*200);
    }
}

document.querySelectorAll('.avatar').forEach(avatar=>{
    avatar.addEventListener('mouseenter',()=>{ avatar.style.transform='scale(1.15) translateY(-3px)'; avatar.style.boxShadow='0 8px 25px rgba(255,107,53,0.4)'; });
    avatar.addEventListener('mouseleave',()=>{ avatar.style.transform='scale(1) translateY(0)'; avatar.style.boxShadow='none'; });
});

document.addEventListener('DOMContentLoaded',function(){
    const subtitle=document.querySelector('.faq-subtitle');

    const text=subtitle.textContent;
    subtitle.textContent='';
    let i=0;

    function typeWriter(){ if(i<text.length){ subtitle.textContent+=text.charAt(i); i++; setTimeout(typeWriter,50); } }
    
    setTimeout(typeWriter,1000);
});

let animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', AnimOnSroll);
    function AnimOnSroll(){
        for(let i = 0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeigth = animItem.offsetHeight;
            const animItemOffest = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeigth / animStart;

            if(animItemHeigth > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffest - animItemPoint) && pageYOffset < (animItemOffest + animItemHeigth)){
                animItem.classList.add('_active');
            } 
            else if(!animItem.classList.contains('_anim-no-hide')){
                animItem.classList.remove('_active');
            }
            
        }
    }
    function offset(e){
        const rect = e.getBoundingClientRect(),
        srollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{
            top : rect.top + scrollTop,
            left: rect.left + srollLeft
        }
    }
}

AnimOnSroll();
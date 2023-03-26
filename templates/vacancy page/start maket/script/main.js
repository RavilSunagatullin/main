window.addEventListener('scroll', e=>{
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper:'.wrapper',
    content:".content"

})
const sliderMain = new Swiper('.slider_main', {
    freeMode:true,
    centeredSlides:true,
    breakpoints:{
        0: {
            slidesPerView:2.5,
            spaceBetween:20
        },
        680:{
            slidesPerView:3.5,
            spaceBetween:60
        }
    },

});
const sliderBg = new Swiper('.slider_bg', {
    centeredSlides:true,
    spaceBetween:60,
    slidesPerView:3.5,
});
sliderMain.controller.control = sliderBg;

let desc = document.querySelector('.description');
sliderMain.on('slideChange', e=>{
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden'): desc.classList.remove('hidden')
});


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
})}

const toastShow = e=> {
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
    console.log('rwerw')
    clearTimeout()
}
setTimeout(toastShow, 30000)

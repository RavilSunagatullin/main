const init = () => {
    const showNextSlide = () => {
        bgSlides('down')
        console.log('next')
    }
    const showPrevSlide = () => {
        bgSlides('up')
        console.log('prev')
    }
    if(window.innerWidth >= 768){
        window.addEventListener('wheel',(event) => {
            let delta = -event.deltaY
            if(delta > 0 ){
                if(helperInput.value == 1){
                    helperInput.value = 0
                    showPrevSlide()
                    setTimeout(()=>{
                        helperInput.value = 1
                    }, 1500)
                }
            }
            if(delta < 0){
                if(helperInput.value == 1){
                    helperInput.value = 0
                    showNextSlide()
                    setTimeout(()=>{
                        helperInput.value = 1
                    }, 1500)
                }
            }

        })

    }
    if(window.innerWidth < 768){
        document.addEventListener("swiped-left", () => {
            showNextSlide()
        })
        document.addEventListener("swiped-right", () => {
            showPrevSlide()
        })
        
    }
}
init()
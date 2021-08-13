import React, { useRef,useState } from 'react'
import cn from 'classnames'
import st from './Slider.module.css'
function Slider() {
    const slider = useRef(null)
    const [slid__items, setItems] = useState([1,2,3])
    let position = 0
    const art=['1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum incidunt repellat, accusamus eaque quibusdam asperiores blanditiis voluptas saepe, laudantium dignissimos id quos fuga molestiae cumque provident quae, eos accusantium at.','2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum incidunt repellat, accusamus eaque quibusdam asperiores blanditiis voluptas saepe, laudantium dignissimos id quos fuga molestiae cumque provident quae, eos accusantium at.','3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum incidunt repellat, accusamus eaque quibusdam asperiores blanditiis voluptas saepe, laudantium dignissimos id quos fuga molestiae cumque provident quae, eos accusantium at.']

    const prevHandler = () => {
        if (position ===0 ||position>0){
            position=0
            slider.current.childNodes.forEach((elem) => {
                elem.style=`transform: translateX(${position}px)`
            })
        } else {
            position +=300
            slider.current.childNodes.forEach((elem) => {
                elem.style=`transform: translateX(${position}px)`
            })
        }
        
    }
    const nextHandler = () => {
       if(position === -((slid__items.length -1) * 300)||position<-((slid__items.length -1) * 300)){
            position = -((slid__items.length -1) * 300)
            slider.current.childNodes.forEach((elem) => {
                elem.style=`transform: translateX(${position}px)`
                })}
                else{
                position -=300
                slider.current.childNodes.forEach((elem) => {
                    elem.style=`transform: translateX(${position}px)`
                    })
            }
    }
    return (
        <section className={st.slider } id='1234'>
            <div className="container">
                <div className={st.wrap}>
                    <div className={st.slider__track} ref={slider}>
                        {slid__items.map(() => {
                            return(
                            <div className={st.slid__item}>
                               
                            </div>)
                    })}
                    </div>
                    <button className={cn(st.slid__button, st.button__prev)} onClick={prevHandler}>{'<'}</button>
                    <button className={cn(st.slid__button, st.button__next)}  onClick={nextHandler}>{'>'}</button>
                </div>
            </div>
        </section>
    )
}
export default Slider
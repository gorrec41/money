import React, { useRef,useState } from 'react'
import cn from 'classnames'
import st from './Slider.module.css'
function Slider() {
    const slider = useRef(null)
    const [slid__items, setItems] = useState([1, 2, 3, 4, 5,6, 7, 8, 9, 0])
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    let position = 0
    const prevHandler = () => {
        if (position <0 ){
            setNext(false)
            position +=300
            slider.current.childNodes.forEach((elem) => {
                elem.style=`transform: translateX(${position}px)`
            })
        } else {
           console.log("dd")
            setPrev(true)
        }
    }
    const nextHandler = () => {
        if (position === -(slid__items.length -1) * 300) {
            setNext(true)
        } else {
            setPrev(false)
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
                    <button className={cn(st.slid__button, st.button__prev)} disabled={prev} onClick={prevHandler}>{'<'}</button>
                    <button className={cn(st.slid__button, st.button__next)} disabled={next} onClick={nextHandler}>{'>'}</button>
                </div>
            </div>
        </section>
    )
}
export default Slider
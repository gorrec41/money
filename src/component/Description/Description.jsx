import st from './Description.module.css'
import img1 from './../../img/desc/img1.png'
import img2 from './../../img/desc/img2.png'
import img3 from './../../img/desc/img3.png'
const img = [img1, img2, img3],
    tx = ['Многие из вас, наверное, слышали от бабушек и родителей, что есть некий таинственный “горшочек”, который приносит деньги. Это не просто поверье, а реальное знание. Мне его передала моя бабушка! Эта практика проверена многими поколениями моей семьи и я хочу поделиться им с вами.', 'Начинать этот мощный ритуал лучше всего на растущей луне,  чтобы ее энергия подпитывала пробуждение денежной энергии. А если вместе с этим ритуалом проводить и другие практики, которыми я поделюсь с вами, их сила возрастет многократно!', 'Знаете, есть такое понятие: «синергетический эффект». Это когда общее целое оказывается больше простой суммы своих частей. Наши ритуалы как раз тот самый случай, когда комбинация нескольких методов дает эффект намного больший, чем сумма результатов каждой практики, проведенной отдельно.'];
function Description(props) {
    return (
        <div className={st.wrapper}>
            <div className={st.wrap__img}>
                <img src={img[props.index]} alt="" />
            </div>
            <p className={st.text}>{tx[props.index]}</p>
        </div>
        

    )
}

export default Description
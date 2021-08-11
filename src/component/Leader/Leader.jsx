import st from './Leader.module.css'
import imgase from './../../img/liader/dmitriy.png'
function Leader() {

    return (
        <section className={st.article }>
            <div className="container">
               <div className={st.wrap}>
                   <div className={st.wrapimg}>
                       <img src={imgase} alt="Дмитрий Ким" />
                   </div>
                   <div className={st.content__wrapper}>
                       <h3 className={st.title}>
                           Дмитрий Ким
                       </h3>
                       <ul className={st.list}>
                           <li className={st.item}>
                           Специалист в области энерго-информационных технологий
                           </li>
                           <li className={st.item}>
                           Автор методик развития сознания человека, избавления от программ рода                           </li>
                           <li className={st.item}>
                           Практикующий психотерапевт, энерго-гипнокоуч, психолог, шаман                           </li>
                       </ul>
                       <a href='#ancor' className='linck'>
                            записаться
                        </a>
                   </div>
               </div>
               
            </div>
        </section>
    )
}
export default Leader
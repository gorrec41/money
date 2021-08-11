import st from './Desc.module.css';
import Description from '../Description/Description';
function Desc() {

    return (
        <section className={st.desc }>
            <div id='#ancor'>
                <div className="container">

            </div>
                    <div className={st.desc__wraper}>
                        <Description index='0'/>
                        <Description index='1'/>
                        <Description index='2'/>
                    </div>
                    <p className={st.quote}>
                        *Рецепт выкладываю только в закрытом Телеграм-канале, чтобы данная практика была доступна лишь заинтересованным и нацеленным на результат людям.
                    </p> 
                    <h4 className={st.title}>
                        Внимание!!!    
                    </h4>   
                    <p className={st.many}>
                        Обучение проходит в Телеграмм. После регистрации вам придет ссылка на чат, где вы получите более подробную информацию.
                    </p>
                    <p className={st.many}>
                        Стоимость участия -1 650 руб , вместо <span>10 000</span> руб
                    </p>
                    <a href='https://t.me/NEO_Sahu' className='linck'>
                        Получить
                    </a>
            </div>
        </section>
    )
}
export default Desc;
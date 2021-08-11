import st from './Articles.module.css'
import Article from './../Article/Article';
import Linck from './../Linck/Link';
function Articles() {

    return (
        <section className={st.article } id='12'>
            <div className="container" >
                <h3 className={st.title} >
                    Как наладить денежный канал?
                </h3>
                <Article index='0'/>
                <Article index='1'/>
                <Article index='2'/>
                <p className={st.quote}>
                    *Помните, денежный канал - самый уязвимый. Теряя контроль над ним, вы теряете контроль над собственной жизнью.
                </p>   
                <Linck />
            </div>
        </section>
    )
}
export default Articles
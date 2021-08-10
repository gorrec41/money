import st from './Articles.module.css'
import Article from './../Article/Article';
function Articles() {

    return (
        <section className={st.article }>
            <div className="container">
                <h3 className={st.title}>
                    Как наладить денежный канал?
                </h3>
                <Article />
            </div>
        </section>
    )
}
export default Articles
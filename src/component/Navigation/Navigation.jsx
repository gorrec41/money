import st from './Navigation.module.css'
function Navigation(props) {

    return (
        <nav className={st.nav}>
            <div className='container'>
                <div className={st.wrapper}>
                    <a href='#!' className={st.logo}>Центр развития NEO</a>
                    <ul className={st.list}>
                        <li className={st.item}>
                            <a href='#12' className={st.link}>О главном</a>
                        </li>
                        <li className={st.item}>
                            <a href='#123' className={st.link}>Кто я такой</a>
                        </li>
                        <li className={st.item}>
                            <a href='#!' className={st.link}>Отзывы</a>
                        </li>
                        <li className={st.item}>
                            <a href='#1234'className={st.link}>Записаться</a>
                        </li>
                    </ul>
                    <div className={st.connection}>
                        <a href='#!' className={st.link}>info@shkolaneo.ru/</a>
                        <a href='#!' className={st.link}>+7 (999) 170-11-30</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navigation;
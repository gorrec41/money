import st from './Header.module.css'
import arrowdown from './../../img/header/arrowdown.png'
function Header() {

    return (
        <header className={st.header}>
            <div className='container'>
                <h1 className={st.title}>Ритуал денежного изобилия</h1>
                <div className={st.arrow}>
                <a href='#!'>
                    <img src={arrowdown} alt='arrow' />
                </a>
                </div>
            </div>
        </header>
    )
}


export default Header;

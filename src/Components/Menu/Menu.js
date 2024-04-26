import './Menu.css';
import { Fragment } from 'react';

const Menu = () => {

    return (
        <Fragment>
            <div className="menu">
                <div className="logo">
                    Menu
                </div>
                <div className="menu-direito">
                    <ul>
                        <li>Home</li>
                        <li>Sobre nós</li>
                        <li>Entre em Contato Conosco</li>
                        <li>Redes Sociais</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Menu;

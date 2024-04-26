import PropsFileira from '../PropsMenu/PropsFileira';
import './Menu.css';
import { Fragment } from 'react';

const Menu = () => {

    return (
        <Fragment>
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

                <ul class="menu__box">
                    <PropsFileira fileira="Home"/>
                    <PropsFileira fileira="Sobre a Empresa"/>
                    <PropsFileira fileira="Entre em Contato"/>
                    <PropsFileira fileira="Colaboradores"/>
                    <PropsFileira fileira="Redes Sociais"/>
                </ul>
            </div>
        </Fragment>
    );
};

export default Menu;

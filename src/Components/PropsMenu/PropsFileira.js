import { Fragment } from "react"

const PropsFileira = (props) => {
    return(
        <Fragment>
            <li><a class="menu__item" href="#">{props.fileira}</a></li>
        </Fragment>
    );
}

export default PropsFileira
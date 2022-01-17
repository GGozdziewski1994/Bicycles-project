import ButtonLogout from "../components/UI/ButtonLogout";
import { Fragment, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/UI/Header";
import AuthContext from "../context/auth-context";

const Layout = props => {
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn) navigate('/');
    }, [isLoggedIn]);

    return(
        <Fragment>
            <Header>
                <Link to='/'>
                    <div>Bicycles</div>
                </Link>
                <nav>
                    <ul>
                        {!isLoggedIn && <li>
                            <Link to='/auth'>Login</Link>
                        </li>}
                        {isLoggedIn && <li>
                            <Link to='/bikes'>Bikes</Link>
                        </li>}
                        {isLoggedIn && <li>
                            <ButtonLogout onClick={authContext.logout}>Logout</ButtonLogout>
                        </li>}
                    </ul>
                </nav>
            </Header>
            <main>
                {props.children}
            </main>
        </Fragment>
    );
}


export default Layout;
import { React } from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss';
import './styles.scss';


function Header() {
    return (
            <head id="header">
              <Link to="/">
                <h1>HEADER</h1>
              </Link>
            </head>
    )
} export default Header;
import { React } from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss';
import './styles.scss';

import IMAGES from "../../images/_images.js";

function Header() {
    return (
            <div id="header">
              <Link to="/">
                <img src={IMAGES.Logo} alt="Logo" />
              </Link>
            </div>
    )
} export default Header;
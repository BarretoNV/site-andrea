import { React } from 'react';

import '../../App.scss';
import './styles.scss';

import IMAGES from "../../images/_images.js";

function Header() {
    return (
            <div id="header">
              <img src={IMAGES.Logo} alt="Logo" />
            </div>
    )
} export default Header;
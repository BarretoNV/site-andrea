import { React } from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss';
import './styles.scss';

import Header from '../../components/header';
import Slider from '../../components/slider';
import IMAGES from "../../images/_images.js";

function Home() {
    return (
            <div id="homeBody">
                <Header />
                <section id="homeContent">
                    <section id="homeSingleSection">
                        <img src={IMAGES.Logo} alt="logo" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, expliibus? Officiis maiores voluptatem repellendus earum accusamus!</p>
                        <Link to="/professional">
                            <div className="greenBtn">
                                Saiba Mais!
                            </div>
                        </Link>
                    </section>
                    <section id="homeSingleSection">
                        <p>Palestras</p>
                        <Slider />
                    </section>
                    <Link to="/onlineHelp">
                        <section id="homeSingleSection">
                            <p>Orientação</p>
                        </section>
                    </Link>
                    <Link to="/supervision">
                        <section id="homeSingleSection">
                            <p>Supervisão</p>
                        </section>
                    </Link>
                    <Link to="/onlineHelp">
                        <section id="homeSingleSection">
                            <p>Atendimento Online</p>
                        </section>
                    </Link>
                    <Link to="/shop">
                        <section id="homeSingleSection">
                            <p>Venda de materiais</p>
                        </section>
                    </Link>
                    <Link to="/address">
                        <section id="homeSingleSection">
                            <p>Local de Atendimento</p>
                        </section>
                    </Link>
                    <Link to="/contact">
                        <section id="homeSingleSection">
                            <p>Contato</p>
                        </section>
                    </Link>
                </section>
            </div>
    )
} export default Home;
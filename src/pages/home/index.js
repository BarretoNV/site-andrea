import { React } from 'react';
import { Link } from 'react-router-dom';
import '../../App.scss';
import './styles.scss';

import Header from '../../components/header';

function Home() {
    return (
            <div id="homeBody">
                <Header />
                <section id="homeContent">
                    <Link to="/">
                        <section id="homeSingleSection">
                            <h1>Apresentação do Profissional</h1>
                        </section>
                    </Link>
                    <Link to="/">
                        <section id="homeSingleSection">
                            <h1>Palestras</h1>
                        </section>
                    </Link>
                    <Link to="/">
                        <section id="homeSingleSection">
                            <h1>Orientação</h1>
                        </section>
                    </Link>
                    <Link to="/">
                        <section id="homeSingleSection">
                            <h1>Supervisão</h1>
                        </section>
                    </Link>
                    <Link to="/">
                        <section id="homeSingleSection">
                            <h1>Atendimento Online</h1>
                        </section>
                    </Link>
                    <Link to="/">
                        <section id="homeSingleSection">
                            <h1>Venda de materiais</h1>
                        </section>
                    </Link>
                    <Link to="/">
                        <section id="homeSingleSection">
                            <h1>Local de Atendimento</h1>
                        </section>
                    </Link>
                    <Link to="/">
                        <section id="homeSingleSection">
                            <h1>Contato</h1>
                        </section>
                    </Link>
                </section>
            </div>
    )
} export default Home;
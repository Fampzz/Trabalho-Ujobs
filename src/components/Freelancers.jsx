import React, { Component } from 'react'
import './Style.css'
export default class teste extends Component {
    render() {
        return (
            <div>
                <nav class="cabecalho">
                    <div>
                        <a> <img class="logo-img" src={require("../assets/logos/Logo.png")} alt=''/> </a>
                        <div class="menu-superior">
                            <nav>
                                <a class="menu-text selecionada">Freelancers</a>
                                <a class="menu-text">Quem somos?</a>
                            </nav>
                        </div>
                    </div>
                </nav>
                <div class="auncios" id="anunciosID">
                    <div class="card-anuncio">
                        <div class="card-content">
                            <img class="img-card" src={require("../assets/ProfilePics/user1.jpg")} alt=''/>
                            <div class="dados-card">
                                <h2 class="nome-card">Pedro Pascal</h2>
                                <p class="cargo-card">Sobrevivente</p>
                                <p class="localizacao">Rio de Janeiro - RJ</p>
                                <p>Olá, este é um exemplo de texto escrito por um freelancer. Os freelancers são profissionais
                                autônomos que oferecem seus serviços de forma independente.</p>
                            </div>
                        </div>
                        <div class="card-contato">
                            <button class="btns btns-card" onclick="alert('Para contatar esse profissional, ligue para: +5533988889999')">Contrate</button>
                            <p class="text-card-contato">Preço por hora:</p>
                            <h3 class="price-card-contato">R$ 180,00</h3>
                        </div>
                    </div>
                    <div class="card-anuncio">
                        <div class="card-content">
                            <img class="img-card" src={require("../assets/ProfilePics/user2.jpg")} alt=''/>
                            <div class="dados-card">
                                <h2 class="nome-card">Pedro Pascal</h2>
                                <p class="cargo-card">Caçador de Recompensas</p>
                                <p class="localizacao">São Paulo - SP</p>
                                <p>Olá, este é um exemplo de texto escrito por um freelancer. Os freelancers são profissionais
                                autônomos que oferecem seus serviços de forma independente.</p>
                            </div>
                        </div>
                        <div class="card-contato">
                            <button class="btns btns-card" onclick="alert('Para contatar esse profissional, ligue para: +5533988889999')">Contrate</button>
                            <p class="text-card-contato">Preço por hora:</p>
                            <h2 class="price-card-contato">R$ 70,00</h2>
                        </div>
                    </div>
                    <div class="card-anuncio">
                        <div class="card-content">
                            <img class="img-card" src={require("../assets/ProfilePics/user3.jpg")} alt=''/>
                            <div class="dados-card">
                                <h2 class="nome-card">Pedro Pascal</h2>
                                <p class="cargo-card">Comediante</p>
                                <p class="localizacao">Belo Horizonte - MG</p>
                                <p>Olá, este é um exemplo de texto escrito por um freelancer. Os freelancers são profissionais
                                autônomos que oferecem seus serviços de forma independente.</p>
                            </div>
                        </div>
                        <div class="card-contato">
                            <button class="btns btns-card" onclick="alert('Para contatar esse profissional, ligue para: +5533988889999')">Contrate</button>
                            <p class="text-card-contato">Preço por hora:</p>
                            <h2 class="price-card-contato">R$ 120,00</h2>

                        </div>
                    </div>
                    <div class="card-anuncio">
                        <div class="card-content">
                            <img class="img-card" src={require("../assets/ProfilePics/user4.jpg")} alt=''/>
                            <div class="dados-card">
                                <h2 class="nome-card">Pedro Pascal</h2>
                                <p class="cargo-card">Sommelier de Sanduíche</p>
                                <p class="localizacao">Itajubá - MG</p>
                                <p>Olá, este é um exemplo de texto escrito por um freelancer. Os freelancers são profissionais
                                autônomos que oferecem seus serviços de forma independente.</p>
                            </div>
                        </div>
                        <div class="card-contato">
                            <button class="btns btns-card" onclick="alert('Para contatar esse profissional, ligue para: +5533988889999')">Contrate</button>
                            <p class="text-card-contato">Preço por hora:</p>
                            <h2 class="price-card-contato">R$ 30,00</h2>
                        </div>
                    </div>
                    <div class="card-anuncio">
                        <div class="card-content">
                            <img class="img-card" src={require("../assets/ProfilePics/user5.jpg")} alt=''/>
                            <div class="dados-card">
                                <h2 class="nome-card">Pedro Pascal</h2>
                                <p class="cargo-card">Triste</p>
                                <p class="localizacao">Itabira - MG</p>
                                <p>Olá, este é um exemplo de texto escrito por um freelancer. Os freelancers são profissionais
                                autônomos que oferecem seus serviços de forma independente.</p>
                            </div>
                        </div>
                        <div class="card-contato">
                            <button class="btns btns-card" onclick="alert('Para contatar esse profissional, ligue para: +5533988889999')">Contrate</button>
                            <p class="text-card-contato">Preço por hora:</p>
                            <h2 class="price-card-contato">R$ 999,00</h2>
                        </div>
                    </div>
                    <div class="card-anuncio">
                        <div class="card-content">
                            <img class="img-card" src={require("../assets/ProfilePics/user6.jpg")} alt=''/>
                            <div class="dados-card">
                                <h2 class="nome-card">Pedro Pascal</h2>
                                <p class="cargo-card">Guerreiro</p>
                                <p class="localizacao">Dorne - WT</p>
                                <p>Olá, este é um exemplo de texto escrito por um freelancer. Os freelancers são profissionais
                                autônomos que oferecem seus serviços de forma independente.</p>
                            </div>
                        </div>
                        <div class="card-contato">
                            <button class="btns btns-card" onclick="{alert('Para contatar esse profissional, ligue para: +5533988889999')}">Contrate</button>
                            <p class="text-card-contato">Preço por hora:</p>
                            <h2 class="price-card-contato">R$ 00,00</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
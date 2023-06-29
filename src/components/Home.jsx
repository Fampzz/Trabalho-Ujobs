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
                                <button class="menu-text selecionada" >Freelancers</button>
                                <button class="menu-text">Quem somos?</button>
                            </nav>
                        </div>
                    </div>
                </nav>
                <div class="conteudo">
                    <div class="cardDescricaoDoSite">
                        <p>Bem-vindo ao nosso site de freelancers, onde conectamos talentos independentes com contratantes em todo o mundo. Somos uma plataforma
                        online que oferece aos contratantes uma ampla variedade de habilidades e serviços, desde design gráfico e desenvolvimento de sites até
                        redação de conteúdo e marketing digital.
                        <br/><br/>Nosso objetivo é fornecer um espaço seguro e confiável para que freelancers possam mostrar suas habilidades e experiência, enquanto
                        oferecemos aos contratantes a facilidade de encontrar talentos independentes qualificados em uma única plataforma.
                        <br/><br/>Como uma empresa focada no cliente, buscamos garantir a satisfação tanto dos freelancers quanto dos contratantes, oferecendo suporte ao
                        cliente excepcional e um processo de contratação e pagamento simples e transparente.
                        <br/><br/>Então, se você está procurando um freelancer para ajudar em um projeto específico ou é um talento independente procurando por novas
                        oportunidades, estamos aqui para ajudar. Explore nosso site e veja como podemos ajudá-lo a alcançar seus objetivos de negócios e carreira.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { useEffect, useState } from 'react'
import PopUp from './PopUp';
import './Style.css'
function Freelancers() {
    const [freelas, setFreelas] = useState([]);
    const [selectedFreela, setSelectedFreela] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const url = "https://api-black-sigma.vercel.app/freelancers";

    const handleButtonClick = (freela) => {
        setSelectedFreela(freela);
        setShowOverlay(true);
    };

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setFreelas(data))
            .catch((err) => console.log(err))
    }, []);
    return (
        <div>
            <nav className="cabecalho">
                <div>
                    <a href='/home'> <img className="logo-img" src={require("../assets/logos/Logo.png")} alt='' /> </a>
                    <div className="menu-superior">
                        <nav>
                            <a className="menu-text" href="/freelancers">Freelancers</a>
                            <a className="menu-text" href="/quem-somos">Quem somos?</a>
                        </nav>
                    </div>
                </div>
            </nav>
            <div className="auncios" id="anunciosID">
                {freelas.map(freelas => (
                    <div className="card-anuncio">
                        <div className="card-content">
                            <img className="img-card" src={require(`../assets/ProfilePics/user${freelas.id}.jpg`)} alt='' />
                            <div className="dados-card">
                                <h2 className="nome-card">{freelas.nome}</h2>
                                <p className="cargo-card">{freelas.profissao}</p>
                                <p className="localizacao">{freelas.cidade}</p>
                                <p><br />{freelas.descricao}</p>
                            </div>
                        </div>
                        <div className="card-contato">
                            <button className="btns btns-card" onClick={() => handleButtonClick(freelas)}> Contrate </button>
                            <p className="text-card-contato">Preço por hora:</p>
                            <h3 className="price-card-contato">R$ {freelas.preco}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {selectedFreela && (
                <div>
                    {showOverlay && <div className="overlay" />}
                    <div className="popup-container">
                        <PopUp
                            content={selectedFreela.email}
                            onClose={() => {
                                setSelectedFreela(null);
                                setShowOverlay(false);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
export default Freelancers;
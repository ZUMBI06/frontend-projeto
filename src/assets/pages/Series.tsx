import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import Product from "../components/Product";

export var seriesId = 0;

function series() {
    const navigate = useNavigate();

    const handleOnClickHome = () => {
        navigate("/home");
    };

    document.onclick = function(e: MouseEvent) {
        const target = e.target as HTMLImageElement;
        if (target.tagName === "IMG") {
            seriesId = parseInt(target.className);
            navigate("/selecEp");
        };
    };

    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <NavButton onClick={handleOnClickHome}>Home</NavButton>
                    
                   
                </div>
                <div className="content">
                    <div className="content-overlay">
                        <div className="series">
                            <div className="cabecalho">
                                <h1>Recém Adicionadas</h1>
                                <div className="recent">
                                    <Product type="acao" src="/Into The BadLands.jpg" id="0" link="https://paineltftv.projetojmmidias.workers.dev/0:/S%C3%A9rie/Variadas/Into%20The%20Badlandes/">Into The BadLands</Product>
                                    <Product type="suspense" src="/The Real Has Come.webp" id="1" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202023/%20Assassinos%20da%20Lua%20das%20Flores%20.mp4?a=view">The Real Has Come</Product>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default series;
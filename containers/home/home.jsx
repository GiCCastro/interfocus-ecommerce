import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { carouselStyle } from '../../styles/globalStyles';
import { Link } from 'react-router-dom';
import './home.css';
import image_plano1 from "../../assets/plano1.png";
import image_plano2 from '../../assets/plano2.png';
import image_plano3 from "../../assets/plano3.png";
import image_plano4 from '../../assets/plano4.png';
import banner from '../../assets/banner1.png';
import banner1 from '../../assets/banner-1.png';
import banner2 from '../../assets/banner-2.png';
import banner3 from '../../assets/banner-3.png';
import banner4 from '../../assets/banner-4.png';
import Packages, {planos} from '../packages/packages'; 

function Home() {
    const images = [image_plano1, image_plano2, image_plano3, image_plano4];
    return (
        <div style={{ marginTop: '-2%' }}>
            <Carousel>
                <Carousel.Item>
                    <div style={carouselStyle} className='image-carousel'>
                        <img src={banner1} alt=""/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={carouselStyle} className='image-carousel'>
                        <img src={banner2} alt=""/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={carouselStyle} className='image-carousel'>
                        <img src={banner3} alt=""/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={carouselStyle} className='image-carousel'>
                        <img src={banner4} alt=""/>
                    </div>
                </Carousel.Item>
            </Carousel>

            <div className="section-container">
                <h1 className='title-section'>ESCOLHA O MELHOR PLANO PARA VOCÊ!</h1>
                <div className="planos-content">
                    {planos.map((plano, index) => (
                        <div className="plano" key={index}>
                            <Link to="/packages">
                            <img style={{width: '15rem'}}
                               src={images[index % images.length]} 
                                alt={`Imagem do plano ${plano.nome}`} 
                                className="plano-image" 
                            />
                            
                            <div className="planos-overlay" style={{color: "white", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div className="planos-overlay-content">
                                    <h3 className="title">{plano.nome}</h3>

                                    <div className="texto">
                                        {plano.description}
                                    </div>

                                    <div className="preco">
                                        R$ {plano.preco},00
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-container">
                <h4>Ficou alguma dúvida? Entre em contato conosco!</h4>   
                <Link to="/contact">
                    <button 
                        type="button" 
                        className="btn btn-lg btn-block" 
                        style={{
                            backgroundColor: '#FFC300',
                            color: 'black', 
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease' ,
                            borderRadius: '4px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#375a7f'; 
                            e.currentTarget.style.color = 'white'; 
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#FFC300'; 
                            e.currentTarget.style.color = 'black'; 
                        }}
                    >
                        ENTRAR EM CONTATO                                                                              
                    </button>
                </Link>
            </div>

            <div className="section-container">
                <img src={banner} alt="" className="banner-home" />
            </div>
        </div>  
    );
}

export default Home;

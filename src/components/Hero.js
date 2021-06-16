const Hero = ({text, backdrop, classHero}) => {
    return (
        <div id="hero" className="hero_section">
            <div className="container">
                <h2 className={classHero}>{text}</h2>  
            </div> 
        <div className="backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
        </div>
    )
}

export default Hero;
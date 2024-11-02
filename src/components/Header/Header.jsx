import React from "react";
import HeaderCss from './header.module.css';
import heroImage from "../../assets/images/heroImge1.png";
import { socialLinks } from '../../menu.js'; 

const Header = () => {
    const upworkLink = "https://www.upwork.com/freelancers/~015e94f70259a74e1d?s=1110580748673863680"; 

    return (
        <div className={HeaderCss.section}>

            <div className={HeaderCss.content}>
                <div className={HeaderCss.text}>
                    <h1>
                    <strong style={{ color: '#4A90E2' }}>Greetings, kind visitor!</strong></h1>
                    <p>My name is <strong style={{ color: '#4A90E2' }} >Girma</strong>,</p>
                    <p>and I am a sorcerer of the web,</p>
                    <p>crafting enchanting digital experiences.</p>
                </div>
                
                <a href={upworkLink}>
                    <button className={HeaderCss.button}>✨ Summon My Skills! ✨</button>
                </a>
            </div>

            <div className={HeaderCss.heroImage}>
                <img 
                    alt="Hero Image"
                    src={heroImage}
                />
            </div>

            <div className={HeaderCss.social}>
       
                {socialLinks.map(link => (
                    <a 
                        key={link.name} 
                        href={link.path} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className={link.icon}></i>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Header;

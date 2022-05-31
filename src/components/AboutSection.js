import React from "react";
import ExploreOne from '../img/ExploreOne.jpg';
//Import framer motion
import {motion} from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

//Styles

import {About, Description, Image, Hide } from '../styles';

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}> 
                        We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            your <span>travel dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any tour. We have a plenty variants of trails all over the world.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={ExploreOne} alt="stuff for exploration" />
            </Image>
            <Wave />
        </About>
    );
};

//Styled component



export default AboutSection;
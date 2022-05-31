import React from "react";
//Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import ExploreTwo from '../img/ExploreTwo.jpg';
//Styles
import {About, Description, Image} from '../styles';
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./useScroll";


const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services variants={fade} ref={element} animate={controls} initial="hidden">
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock-icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Short term for searching the most suitable tour for you.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork-icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Our professsionals will always help you.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm-icon" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Every tour is accompanied by a professional photographer.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money-icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>The cheapest offer on the market.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={ExploreTwo} alt="camping view" />
            </Image>
        </Services>
    );
};

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        padding: 2rem 0rem 4rem 0rem;
        width: 70%;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1300px) {
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        align-items: center;
        display: flex;
        h3 {
            background: white;
            color: black;
            margin-left: 1rem;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;
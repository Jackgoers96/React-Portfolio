import React from "react";
import stoyo from "../../assets/stoyo2.png";
import prework from "../../assets/code.jpg";
import hometown from "../../assets/Beerbg.png";
import cute from "../../assets/Cute.jpg";
import img26317 from "../../assets/26317.jpg";
import green from "../../assets/weather.png";
import database from "../../assets/dataBase.png"
import "./portfolio.css";



const Portfolio = () => {
    return (
        <div>
            <div class="pure-g">
                <div class="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                    <a href="https://stoyocode.herokuapp.com/" target="_blank" rel="noreferrer" ><img src={stoyo} /></a>

                    <aside class="photo-box-caption">
                        <span>"Stoyo Code" -
                            <a href="https://github.com/Brendan838/Project_2">Jack Goers, Brendan Smith, Shawn McHorter,
                                Christian Schoen and Josh Rist</a></span>
                    </aside>
                </div>

                <div class="text-box pure-u-1 pure-u-md-1-2 pure-u-lg-2-3">
                    <div class="l-box">
                        <h1 class="text-box-head">My Work</h1>
                        <p class="text-box-subhead">
                            Check out any of the websites and projects I've got my hands in by selecting an image.<br /> Thanks for
                            visiting!
                        </p>
                    </div>
                </div>

                <div class="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                    <a href="https://jackgoers96.github.io/prework-about-me/">
                        <img src={prework} alt="code backdrop" target="_blank" rel="noreferrer" />
                    </a>

                    <aside class="photo-box-caption">
                        <span>
                            "Early Beginnings" -
                            <a href="https://github.com/Jackgoers96/prework-about-me">Jack Goers</a>
                        </span>
                    </aside>
                </div>

                <div class="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                    <a href="https://jackgoers96.github.io/Hometown-Explorer/">
                        <img src={hometown} alt="City" target="_blank" rel="noreferrer" />
                    </a>

                    <aside class="photo-box-caption">
                        <span>
                            "Hometown Explorer" - <a href="https://github.com/Jackgoers96/Hometown-Explorer">Jack Goers, Leslie
                                Vallaincourt, Andrea
                                Ward</a>
                        </span>
                    </aside>
                </div>

                <div class="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                    <a href="https://jackgoers96.github.io/Kayla-s-Guinea-Pig-Guide/">
                        <img src={cute} alt="Guinea Pig Title Page" target="_blank" rel="noreferrer" />
                    </a>

                    <aside class="photo-box-caption">
                        <span>
                            "Guinea Pigs Guide" -
                            <a href="https://jackgoers96.github.io/Kayla-s-Guinea-Pig-Guide/">Jack Goers, Kayla Snyder</a>
                        </span>
                    </aside>
                </div>

                <div class="photo-box photo-box-thin pure-u-1 pure-u-md-1-2">
                    <a href="https://github.com/Jackgoers96/DatabaseDemo">
                        <img src={database} alt="database sql demo" target="_blank" rel="noreferrer" />
                    </a>

                    <aside class="photo-box-caption">
                        <span>"Database Demo" -
                            <a href="https://github.com/Jackgoers96/DatabaseDemo">Jack Goers</a>
                        </span>
                    </aside>
                </div>

                <div class="photo-box pure-u-1 pure-u-md-1-2">
                    <a href="https://jackgoers96.github.io/Weather-or-Not/">
                        <img src={green} alt="Weather or not" target="_blank" rel="noreferrer" />
                    </a>

                    <aside class="photo-box-caption">
                        <span> "Weather or Not -"
                            <a href="https://jackgoers96.github.io/Weather-or-Not/ ">Jack Goers</a>
                        </span>
                    </aside>
                </div>

                <div class="pure-u-1">
                </div>
            </div>
        </div>
    );
};
export default Portfolio;
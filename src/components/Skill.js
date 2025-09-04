import React from 'react'
import html from '../img/Skill/html.png'
import css from '../img/Skill/css.png'
import js from '../img/Skill/js.png'
import react from '../img/Skill/react.png'
import bootstrap from '../img/Skill/bootstrap.png'
import sql from '../img/Skill/sql.png'
import git from '../img/Skill/git.png'
import github from '../img/Skill/github.png'
import node from '../img/Skill/node.png'
import python from '../img/Skill/python.png'
import cpp from '../img/Skill/cpp.png'
import java from '../img/Skill/java.png'
import express from '../img/Skill/express.png'
import mongodb from '../img/Skill/mongodb.png'

const Skill = () => {
    return (
            <section className="skill" id="skill">
                <div className="max-width">
                    <h2 className="title">Technologies Known</h2>
                    <div className="skill-content">
                        <div className="skilltech">
                            <span className="technology">
                                <img src={mongodb} alt="MongoDB"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={express} alt="ExpressJS"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={react} alt="ReactJS"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={node} alt="NodeJS"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={git} alt="Git"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={github} alt="GitHub"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={html} alt="HTML"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={css} alt="CSS"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={js} alt="JS"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={bootstrap} alt="Bootstrap"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={java} alt="Java"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={cpp} alt="C++"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={python} alt="Python"/>
                            </span>
                        </div>
                        <div className="skilltech">
                            <span className="technology">
                                <img src={sql} alt="SQL"/>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Skill
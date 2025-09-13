import React from 'react'
import html from '../media/Skill/html.png'
import css from '../media/Skill/css.png'
import js from '../media/Skill/js.png'
import react from '../media/Skill/react.png'
import bootstrap from '../media/Skill/bootstrap.png'
import sql from '../media/Skill/sql.png'
import git from '../media/Skill/git.png'
import github from '../media/Skill/github.png'
import node from '../media/Skill/node.png'
import python from '../media/Skill/python.png'
import cpp from '../media/Skill/cpp.png'
import java from '../media/Skill/java.png'
import express from '../media/Skill/express.png'
import mongodb from '../media/Skill/mongodb.png'

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
import React from 'react'

export default function Newpassword() {
    return (
        <Container>
            <Row>
                <Col sm={12} lg={6}>
                    <div className="aboutUs">
                        <h1 className="aboutUsHeading">
                            About Us
                        </h1>
                        <h4>
                            <div className="aboutUsPara">
                                Resume Builder takes various information from users and plug it in visual form which the user can download, edit or delete. Resume builders are interactive online resume templates that allow you to plug in information and build a cohesive resume.
                                The aim of the project is to automate the process of making resumes. The user can make new resume, edit/delete previous resume and see resumes. The project aims to provide secure authentication and registeration.
                            </div>
                            <br />
                            <div className="createdBy">
                                Created By -
                                <a className="githubLinks" href="https://github.com/Decode-dinesh"><img className="githubIcon" src="https://img.icons8.com/material-two-tone/24/000000/github.png" />Dinesh</a>
                            </div>
                        </h4>
                    </div>
                </Col>
                <Col sm={12} lg={6}>
                    <div className="signInCard">
                        <div className="card AuthCard input-field">
                            <h2 className="loginHeading">RESUME BUILDER</h2>
                            <input
                                type="password"
                                placeholder="New Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="signinButton btn waves-effect waves-light blue darken-1"
                                onClick={() => PostData()}
                            >Update Password</button>
                            <h5 >
                                <Link className="linkStyle" to='/signup'>Don't Have an Account?</Link>
                            </h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

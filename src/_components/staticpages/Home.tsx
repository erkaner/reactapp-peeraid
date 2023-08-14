import * as React from 'react';


const Home = () => {
    return (
        <div>

            <div className="row">
                <div className="ml-3 mr-3 p-1 bg-light shadow-sm" style={{ borderTop: '10px solid #489ac1', borderBottom: '6px solid #8ed2bd' }}>
                    <div className="d-flex justify-content-center">
                        <div className="p-3">
                            <h4>
                                <p>
                                    Synergy is an online platform developed to help instructors in Higher Education implement powerful
                                peer feedback practices with structured and rich dialogue.
                            </p>
                            </h4>
                            <h5>
                                <p>
                                    Synergy is freely available. If you want to try it out, please click <a href="/tryout">here</a>.
                                </p>
                            </h5>
                            <div>
                                <small className="text-muted">Synergy is developed for the <a href="https://welearnatscale.gsic.uva.es/" target="_blank">
                                    WeLearn@Scale</a> project, funded by the European Union’s Horizon 2020 MSCA.
                                </small>

                            </div>
                        </div>
                        <div className="pt-3">
                            <img width="185px" src={`siteimages/synergy-dialogue-dark.png`} />
                        </div>
                    </div>
                </div>

                <div className="col-md-12 mb-3 mt-4">
                    <div className="display-4" style={{ letterSpacing: '2.5px' }}>
                        Effective Facilitation of Peer Feedback
                    </div>
                    <hr />
                </div>

                <div className="col-md-6 p-1 pl-3">
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="circled-icons">
                                <i className="fa fa-cog"></i>
                            </div>
                        </div>
                        <div className="pl-2">
                            <h3 className="text-secondary">Setting up the peer review groups</h3>
                            <p className="p-1 small text-muted">
                                Synergy provides a flexible environment for instructors to configure the peer review groups.
                                Instructors can create the review groups automatically, semi-automatically, or manually.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 p-1 pl-3">
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="circled-icons">
                                <i className="fa fa-calendar"></i>
                            </div>
                        </div>
                        <div className="pl-2">
                            <h3 className="text-secondary">Scheduling multiple review sessions</h3>
                            <p className="p-1 small text-muted">
                                Synergy allows instructors to create multiple review rounds for the same assignments.
                                Instructors can create rubrics within Synergy to use during revew rounds for peer assessment.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 p-1 pl-3">
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="circled-icons">
                                <i className="fa fa-google"></i>
                            </div>
                        </div>
                        <div className="pl-2">
                            <h3 className="text-secondary">Google Docs integration</h3>
                            <p className="p-1 small text-muted">
                                Synergy takes advantage of Google Docs technology for assignment submission and reviews.
                                Students can provide their feedback on the submitted Google Doc and discuss the feedback by replying.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 p-1 pl-3">
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="circled-icons">
                                <i className="fa fa-users"></i>
                            </div>
                        </div>
                        <div className="pl-2">
                            <h3 className="text-secondary">Support for group submissions</h3>
                            <p className="p-1 small text-muted">
                                Synergy supports reviews for not only individiual submissions but also for group work.
                                Students can work together to react to the feedbacks and incorporate the revisions collaboratively on their work.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 p-1 pl-3">
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="circled-icons">
                                <i className="fa fa-search"></i>
                            </div>
                        </div>
                        <div className="pl-2">
                            <h3 className="text-secondary">Monitoring the whole class</h3>
                            <p className="p-1 small text-muted">
                                Synergy provides advance analytics to provide instructors with actionable insights about student engagement during the feedback practice.
                                Instructors can visualize the whole class data and zoom in specific groups to identify any emergent issues.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 p-1 pl-3">
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="circled-icons">
                                <i className="fa fa-search-plus"></i>
                            </div>
                        </div>
                        <div className="pl-2">
                            <h3 className="text-secondary">Monitoring the self and peers</h3>
                            <p className="p-1 small text-muted">
                                Synergy allows students to track their progress on learning actions and monitor their progress with respect to the daily revisions made their work.
                                Peers can also monitor the target student's progress to identify if further support is necessary.
                            </p>
                        </div>
                    </div>
                </div>

                <hr />

            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="display-4" style={{ letterSpacing: '2.5px' }}>
                        A Research-Oriented Approach
                    </div>
                    <hr />
                </div>
                <div className="col-md-12 p-4 d-flex">
                    <div className="col-md-4 text-muted  pl-0 ml-0">
                        <h3 style={{ letterSpacing: "0.1em" }}>
                            <i className="fa fa-flask" aria-hidden="true"></i>&nbsp;Crafted by research
                        </h3>

                        <p className="text-muted">
                            The design of Synergy is grounded in learning theories and informed by the principles of feedback.
                        </p>
                        <p>
                            Synergy facilitates dialogic peer feedback through three phases. All these three phases involves a continuous dialogue among the peers.
                        </p>
                        <p>
                            Check the Research section to access the relevant publications.
                        </p>
                    </div>
                    <div className="ml-8">
                        <div className="card-group">
                            <div className="card  bg-light">
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3 className="text-info"><i className="fa fa-calendar-check-o" aria-hidden="true"></i></h3>
                                        <h5 className="card-title text-info" style={{ letterSpacing: "0.1em" }}>Planning & Coordination of Feedback</h5>
                                    </div>
                                    <p className="card-text small text-muted">
                                        Using the rubric, peers assess the work assigned and discuss to resolve any discrepancies.
                                        Using the Feedback Planner, they can take notes while assessing and plan their feedback.
                                    </p>
                                    <p className="card-text"><small className="text-muted">[Socially-shared regulation]</small></p>
                                </div>
                            </div>
                            <div className="card bg-light">
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3 className="text-success"><i className="fa fa-comments-o" aria-hidden="true"></i></h3>
                                        <h5 className="card-title text-success" style={{ letterSpacing: "0.1em" }}>Provision & Discussion of Feedback</h5>
                                    </div>
                                    <p className="card-text small text-muted">
                                        Peers provide the feedback based on their plans.
                                        They also discuss with the target student to support their uptake of the feedback. Peers help the student with deriving concrete learning actions.
                                    </p>
                                    <p className="card-text"><small className="text-muted">[Co-regulation]</small></p>
                                </div>
                            </div>
                            <div className="card  bg-light">
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3><i className="fa fa-bolt" aria-hidden="true"></i></h3>
                                        <h5 className="card-title" style={{ letterSpacing: "0.1em" }}>Translation of Feedback into Action & Progress</h5>
                                    </div>
                                    <p className="card-text small text-muted">
                                        Students perform the planned actions by incorporating the desired changes in their work. They track the progress on each action and discuss with their peers if further help is needed.
                                    </p>
                                    <p className="card-text"><small className="text-muted">[Self-regulation]</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

        </div>

    );
}

export default Home;

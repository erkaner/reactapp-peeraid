import * as React from 'react';

const UserGuides = () => {
    return (
        <div>
            <h1>Synergy User Guides</h1>
            <p className="mt-3">There are several guides and resources for students and instructors to help them make the best use of Synergy. You can access them below.</p>

            <div className="m-1">
                <div>
                    <h3>For students:</h3>
                    <div className="p-2">
                        <a target="_blank" href="/userguides/synergy-student-guide.pdf">Student Guide</a>
                        <p className="text-dark small">This user guide provides a comprehensive decription of the system features for students.</p>

                        <a target="_blank" href="/userguides/use-case-as-reviewer.pdf">Example use case scenario for reviewing peers</a>
                        <p className="text-dark small">This resource provides a detailed scenario outlining the activities to be performed by reviewing peers.</p>

                        <a target="_blank" href="/userguides/use-case-as-student.pdf">Example use case scenario for students receiving reviews</a>
                        <p className="text-dark small">This resource provides a detailed scenario outlining the activities to be performed by students receiving reviews.</p>
                    </div>
                </div>
                <div className="pt-2">
                    <h3>For instructors:</h3>
                    <div className="p-2">
                        <a target="_blank" href="/userguides/synergy-instructor-guide.pdf">Instructor Guide</a>
                        <div className="text-dark small">This user guide provides a comprehensive description of all features and pages intended for instructors' management of their courses and feedback activities.</div>
                    </div>
                </div>
                <div className="pt-2">
                    <h3>Video resources:</h3>
                    <p className="h6">These videos are from <a href="https://www.youtube.com/channel/UCgGXZCXTcTuUWzPbtGtLmig" target="_blank">Youtube Channel</a> of Synergy.</p>
                    <br />
                    <h5>Feedback Planning in Synergy</h5>
                    <div
                        className="video"
                        style={{
                            position: "relative",
                            paddingBottom: 320,
                            paddingTop: 25,
                            height: 0
                        }}
                    >
                        <iframe
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "560px",
                                height: "315px"
                            }}
                            allowFullScreen
                            src="https://www.youtube.com/embed/o8wlR8xvXHM"
                            frameBorder="0"
                        />
                    </div>

                    <h5>Feedback Provision and Discussion in Synergy</h5>
                    <div
                        className="video"
                        style={{
                            position: "relative",
                            paddingBottom: 320,
                            paddingTop: 25,
                            height: 0
                        }}
                    >
                        <iframe
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "560px",
                                height: "315px"
                            }}
                            allowFullScreen
                            src="https://www.youtube.com/embed/qGqrC7-07jw"
                            frameBorder="0"
                        />
                    </div>

                    <h5>Translation of Feedback into Progress in Synergy</h5>
                    <div
                        className="video"
                        style={{
                            position: "relative",
                            paddingBottom: 320,
                            paddingTop: 25,
                            height: 0
                        }}
                    >
                        <iframe
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "560px",
                                height: "315px"
                            }}
                            allowFullScreen
                            src="https://www.youtube.com/embed/5Fnh_MjH_Ss"
                            frameBorder="0"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserGuides;
import * as React from 'react';
import { Link } from 'react-router-dom';

const TryOutSynergy = () => {
    return (
        <div>
            <h1>Try Out Synegy</h1>
            <p className="pt-2">
                If you are teaching a course in Higher Education and if you want to use Synergy to implement a feedback activity in your course,
                please sign up for Synergy on this page: <Link to="/register">Registration for the instructors</Link>. You will be notified once your registration is confirmed.
            </p>
            <p>
                If you have any questions please contact us at <a href="mailto:learnwithsynergy@gmail.com">learnwithsynergy@gmail.com</a>.
            </p>
        </div>
    )
}

export default TryOutSynergy;
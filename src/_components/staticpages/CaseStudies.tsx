import * as React from 'react';

const CaseStudies = () => {
    return (
        <div>
            <h1>Case Studies</h1>
            <p>The case studies conducted with Synergy are provided below.</p>
            <div className="ml-4 mt-5">
                <div className="bg-light p-3">
                    <h4>Using Synergy to peer review Web Quests in a masters level course in Spain</h4>
                    <button className="btn btn-link btn-sm text-info">Read details</button>
                </div>

                <div className="p-3">
                    <h4>Applying Synergy to facilitate peer feedback to improve learning designs in a masters level Course in Greece</h4>
                    <button className="btn btn-link btn-sm text-info">Read details</button>
                </div>

                <div className="bg-light p-3">
                    <h4>Integrating Synergy into a undergraduate-level Public Administration course in Taiwan</h4>
                    <button className="btn btn-link btn-sm text-info">Read details</button>
                </div>

                <div className="p-3">
                    <h4>Using Synergy to facilitate peer review among students from two different countries: Spain and Germany</h4>
                    <button className="btn btn-link btn-sm text-info">Read details</button>
                </div>

                <div className="bg-light p-3">
                    <h4>Integrating Synergy into an Educational Technology course in Taiwan to support peer feedback</h4>
                    <button className="btn btn-link btn-sm text-info">Read details</button>
                </div>

            </div>
        </div>
    )
}

export default CaseStudies;
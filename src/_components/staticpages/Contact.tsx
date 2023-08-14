import * as React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>

            <div className="p-2">
                <h5>For more information, please contact</h5>
                <br />
                <h4>Erkan Er</h4>
                <div className="text-dark">The lead researcher and the developer of Synergy.</div>
                <br />
                <div><a href="mailto:erkanererkaner@gmail.com">erkanererkaner@gmail.com</a> </div>
                <div><a href="mailto:erkan@gsic.uva.es">erkan@gsic.uva.es</a> </div>
            </div>
        </div>
    )
}

export default Contact;
import * as React from 'react';

const LoadingSpinner = () => {
    return (
        <div id="cover-spin-background">
            <img id="cover-spin" alt="Loading..." src={`siteimages/loading-circle.gif`} />
        </div>
    )
}
 
export default LoadingSpinner;
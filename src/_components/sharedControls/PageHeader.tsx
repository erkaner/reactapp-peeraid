import React from 'react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface PageHeaderProps {
    title: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title }) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Go back one step in the history stack
    };

    return ( 
        <div className="row mb-3">
            <div className="col-auto mr-auto">
                <div className="display-4">{title}</div>
            </div>
            <div className="col-auto">
                <button className="btn btn-light text-danger mt-4" onClick={goBack}>
                    <i className="fa fa-angle-double-left"></i>&nbsp;Go Back
                </button>
            </div>
        </div>
    );
};

export default PageHeader;

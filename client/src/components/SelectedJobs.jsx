import React from 'react';

const Register = ( props ) => {

    return (
        <div className="auth-container">
            <h2>My applications</h2>
            { props.selectedJobs.map( job => (
                <React.Fragment key={ job.id }>
                    <h3>{ job.name }</h3>
                    <h5>{ job.description }</h5>
                </React.Fragment >
            ) ) }
        </div>
    );
}

export default Register;

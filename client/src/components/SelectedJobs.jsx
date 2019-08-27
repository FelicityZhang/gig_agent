import React from 'react';

const Register = ( props ) => {

    return (
        <div className='applicationPage'>
            <div className="apllied-container">
                {/* <h2>My applications</h2> */ }
                { props.selectedJobs.map( job => (
                    <React.Fragment key={ job.id }>
                        <div class='applyContainer'>
                            <div className='gigTitle'> <h3>{ job.name }</h3></div>
                            <div className='description'>{ job.description }</div>
                        </div>
                    </React.Fragment >
                ) ) }
            </div>
        </div>
    );
}

export default Register;

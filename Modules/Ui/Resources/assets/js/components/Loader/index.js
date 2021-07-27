import React from 'react';

const Loader = () => {
    return (
        <div className={'loading-parent'}>
            <div className={'loading'}>
                <img src={"/images/logo.png"} alt="logo"/>
            </div>
        </div>

    )
}

export default Loader;

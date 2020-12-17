import React from 'react';
import icon from '../images/icon_envelope.png';
import hand from '../images/w22.png';
import '../WeadingDate.css';

const WeadingDate = () => {
    return (
        <div className="main-slider">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">
                        <img className="sindur-dan" src={icon} alt="envelope"/>
                        <h5 className="date">30th January 2021</h5>
                        <h3 className="pre-title">Save The Date</h3>
                        <h1 className="title">Reza <img className="sindur-dan" src={hand} alt="Sindur Dan"/> Meita</h1>
                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;
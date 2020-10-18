import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => { // getSeason() is helper function
    if (month > 2 && month < 9) { // sumer months
        return lat > 0 ? 'summer' : 'winter'; // lat > 0 is Northern Hemisphere
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    // console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    // console.log(season)
    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'; // helper variable
    // const icon = season === 'winter' ? 'snowflake' : 'sun'; // for semantic-ui
    const {text, iconName } = seasonConfig[season]; // seasonConfig[season] will return { text, iconName }

    return (
        <div>
            <i className={`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;
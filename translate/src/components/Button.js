import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class Button extends React.Component {
    // static contextType = LanguageContext; // to hook up Context object to a class component

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';

    }

    renderButton(colour) {
        return (
            <button className={`ui button ${colour}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)};
                    {/* {(value) => value === 'english' ? 'Submit' : 'Voorleggen'} */}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        // console.log(this.context);
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return (
            <ColourContext.Consumer>
                {(colour) => this.renderButton(colour)}
            </ColourContext.Consumer>
            // <button className="ui button primary">{text}</button>
        )
    }
};

export default Button;
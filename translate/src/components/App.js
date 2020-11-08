import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
// import { LanguageContext } from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
    // state = { language: 'english' };

    // onLanguageChange = (language) => { // onLanguageChange method is called with a language string as an argument
    //     this.setState({ language: language });
    // }

    render() {

        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    {/* <LanguageSelector onLanguageChange={this.onLanguageChange} /> */}
                    {/* <div>
                    Select a language:
                <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                </div> */}
                    {/* <LanguageContext.Provider value={this.state.language}> */}
                    <ColourContext.Provider value="primary">
                        <UserCreate />
                    </ColourContext.Provider>
                    {/* </LanguageContext.Provider> */}
                </LanguageStore>
            </div>
        )
    }
};

export default App;
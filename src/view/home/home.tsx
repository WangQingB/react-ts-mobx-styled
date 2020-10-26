
import React from 'react';

import NavigationBar from './../navigation/navigationBar';
import HomeArtice from './../../article/homeArtice';
const homeDve = {
    width:'100%',
    height: '100%',
}

class Home extends React.Component {
    render() { 
        return (
            <div style={homeDve}>
                <nav>
                    <NavigationBar></NavigationBar>
                </nav>
                <header>

                </header>
                <article>
                    <HomeArtice></HomeArtice>
                </article>
                <footer></footer>
                
            </div>
        )
    }
}
 
export default Home;
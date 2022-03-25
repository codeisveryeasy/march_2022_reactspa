import React from 'react';
import Alphabet from './alphabet';

class Welcome extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Alphabet color="purple">H</Alphabet>
                <Alphabet color="pink">E</Alphabet>
                <Alphabet color="yellow">L</Alphabet>
                <Alphabet color="brown">L</Alphabet>
                <Alphabet color="orange">O</Alphabet>
            </div>
        );
    }
}
 
export default Welcome;
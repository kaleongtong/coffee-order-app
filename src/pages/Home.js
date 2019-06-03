import React from 'react';
import ButtonComponent from '../components/atom/ButtonComponent/ButtonComponent';


class Home extends React.Component {
    render(){
        return (
            <div>
                <ButtonComponent buttonColor="skyblue" title="Enter"/>
            </div>
        )
    }
}

export default Home;
import React from 'react';
import Header from '../layout/Header';
import {Container} from 'reactstrap'
export default class Home extends React.Component{


    render(){
        return (<div> 
                    <Header/>
                    <Container>
                        <h1>Home</h1>
                    </Container>
                </div>)
    }
}
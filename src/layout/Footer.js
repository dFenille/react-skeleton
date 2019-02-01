import React from 'react'
export default class Footer extends React.Component{

    render(){
        return(<div>
                    <footer className="footer" style={{background:'#f1f1f16b',paddingTop:'25px',paddingBottom:'25px'}}>
                        <div className="container text-center">
                            <span className="text-muted">RODAPÉ!</span>
                        </div>
                    </footer>
                </div>)
    }
}
import React, { Component } from 'react'
import locker from '../assets/images/locker.gif' 
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {email:'',password:''}
        
    }
    
 loginSubmit(e){
     e.preventDefault();
     this.validates()
   
}
handleStage(e){
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
}

validates(){
    console.log(this.state)
    MySwal.fire(
        'Seja bem vindo!',
        'Logado com sucesso!',
        'success'
      )

    //   this.props.history.push('/home')
}

  render() {
    return (
      <div>
          <div className="form-signin mt-5">
                <Form className="m-2" onSubmit={this.loginSubmit.bind(this)}>
                    <div className="text-center ">
                        <img className="mb-4" src={locker} style={{width:'100%'}}/>
                        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                    </div>
                    <div className="mt-3">
                        <Label>Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="email@email.com" onChange={this.handleStage.bind(this)} />
                    </div>
                    <div className="mt-3">
                        <Label>Email</Label>
                        <Input type="password" name="password" id="password" placeholder="******"  onChange={this.handleStage.bind(this)} />
                    </div>
                    <div className="mt-3">
                    <Button outline color="primary" block>Logar</Button>
                    </div>                        
                </Form>
         </div>
      </div>
    )
  }
}

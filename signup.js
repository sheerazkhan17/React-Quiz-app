import React, { Component } from 'react';
import image from '../assets/img-01.png'
import fire from '../config/fire';
class SignupPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        this.updateEmail = this.updateEmail.bind(this);
    this.updatePass = this.updatePass.bind(this);
    this.updateName = this.updateName.bind(this);
    this.login = this.login.bind(this);
    }
    
    updateEmail(e){
        this.setState({email : e.target.value});
    }
    updateName(e){
        this.setState({name : e.target.value});
    }
    updatePass(e){
        this.setState({pass : e.target.value});
    }

    login(){
		// {this.state.email} --- {this.state.pass}
		const { email,pass,name } = this.state;
		var a = JSON.parse(localStorage.getItem('accounts'));
		console.log(a);
		console.log(pass);
		console.log(email);
        console.log(name);
        var newUs = {
            name : name,
            email: email,
            password: pass
        }
        a.push(newUs);
        localStorage.setItem('accounts',JSON.stringify(a));
        alert("Successfully created");
    }
    render() { 
        return ( 
        <div class="">

<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={image} alt="IMG" />
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						SIGNUP
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="text" placeholder="UserName" onChange={this.updateName} value={this.state.name} />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email" onChange={this.updateEmail} value={this.state.email} />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password" onChange={this.updatePass} value={this.state.pass} />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" onClick={this.login}>
							Signup
						</button>
					</div>

					

				</form>
			</div>
		</div>
	</div>



        {/* <form>
          <label>Email*</label>
        <input type="email" class="form-control form-group m-2" placeholder="Enter email"></input>
        <label>Password*</label>
       <input type="password" class="form-control form-group m-2" placeholder="Password"></input>
        <button type="submit" class="btn btn-primary form-group m-2" >LOGIN</button>
        </form>
        <p>{this.state.email} --- {this.state.pass}</p> */}
       </div>
        );
    }
}
 
export default SignupPage;
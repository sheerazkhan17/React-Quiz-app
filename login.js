import React, { Component } from 'react';
import image from '../assets/img-01.png';
import fire from '../config/fire';
class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        this.updateEmail = this.updateEmail.bind(this);
    this.updatePass = this.updatePass.bind(this);
    this.login = this.login.bind(this);
    }
    
    updateEmail(e){
        this.setState({email : e.target.value});
    }
    updatePass(e){
        this.setState({pass : e.target.value});
    }

    login(){
		// {this.state.email} --- {this.state.pass}
		const { email,pass, } = this.state;
        const { login } = this.props;
		var a = JSON.parse(localStorage.getItem('accounts'));
		console.log(a);
		a.map(res => {
			if(email == res.email && pass == res.password){
				var user = res;
				localStorage.setItem('currentUser',JSON.stringify(user));
				localStorage.setItem("quizAppLogin","yes");
				console.log(user);
				console.log("aawlaw hogya bhai");
				login();

			}
			else{
				console.log('naaa');
			}
		})
        
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
						Member Login
					</span>

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
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div class="text-center p-t-136">
						<a class="txt2" href="#">
							Dont have account scroll down for signup
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
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
 
export default LoginPage;
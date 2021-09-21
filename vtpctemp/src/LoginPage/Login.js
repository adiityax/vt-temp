import React from 'react';
import './Login.css';

function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname ==='')
		{
			alert("please enter user name.");
		}
		else if(pwd==='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 6 || pwd.length > 12)
		{
			alert("Password min length is 6 and max length is 12.");
		}
		else
		{
	alert('Thank You for Login & You are Redirecting to Home Page');
  //Redirecting to other page or webste code or you can set your own html page.
       window.location.pathname = "/";
			}
}
	//Reset Inputfield code.
function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}	

function LoginPage() {
    return (
        <div id="main">
            <div class="h-tag">
            <h2>Welcome To My Account Login</h2>
            </div>
            <div class="login">
            <table cellspacing="2" align="center" cellpadding="8" border="0">
            <tr>
            <td>Enter User Name :</td>
            <td><input type="text" placeholder="Enter user name here" id="email" class="tb" /></td>
            </tr>
            <tr>
            <td>Enter Password :</td>
            <td><input type="password" placeholder="Enter Password here" id="pwd1" class="tb" /></td>
            </tr>
            <tr>
            <td></td>
            <td>
            <input type="submit" value="Reset" onclick={clearFunc} class="btn" />
            <input type="submit" value="Login" class="btn" onClick={login} /></td>
            </tr>
            </table>
            </div>
        </div>
    )
}

export default LoginPage;

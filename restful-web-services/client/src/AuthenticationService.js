class AuthenticationService {
	registerSuccessfulLogin(username, password){
		console.log("register successful login")
		sessionStorage.setItem('authenticatedUser', username);
	}

	logout(){
		sessionStorage.removeItem('authenticatedUser');
	}

	isUserLoggedIn(){
		let user = sessionStorage.getItem('authenticatedUser')
		if(user===null){
			return false;
		}
		if(user !== null){
			return true;
		} 
		

	}

}
export default new AuthenticationService()
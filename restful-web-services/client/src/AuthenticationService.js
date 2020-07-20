import axios from 'axios';

class AuthenticationService {
	registerSuccessfulLogin(username, password){
		console.log("register successful login")
		sessionStorage.setItem('authenticatedUser', username);

		this.setupAxiosInterceptors();
	}

	logout(){
		sessionStorage.removeItem('authenticatedUser');
	}

	isUserLoggedIn(){
		let user = sessionStorage.getItem('authenticatedUser')
		if(user===null){
            return false
        }else{
			return true
		}
        
		

	}

	setupAxiosInterceptors(){
		let username = 'MarcusGalvin'
        let password = 'dummy'

        let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)



		axios.interceptors.request.use(
			(config) => {
				if(this.isUserLoggedIn()){
					config.headers.authorization = basicAuthHeader

				}
				return config
			}
		)
	}

}
export default new AuthenticationService()
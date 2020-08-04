import axios from 'axios'

class HelloWorldService {

    executeHelloWorldService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name) {
        //console.log('executed service')
        // let username = 'MarcusGalvin'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        //axios call
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        , 
                {
                    headers : {
                        'Content-Type': 'application/json',
                    }
                }
        );
    }

}

export default new HelloWorldService()
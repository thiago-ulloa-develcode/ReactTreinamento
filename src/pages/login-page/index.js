import './index.css'
import LogoDevelcode from './logodevelcode.png';

function LoginPage({history}) {
    
    return (
      <div class="container">
            <div class="img-container">
                <img alt="logodevelcode" src={LogoDevelcode}/>
            </div>
                <input type="text" name="email" placeholder="Email" id="email"/>
                <input type="Password" name="password" placeholder="Senha" id="senha"/>
                <button type="button" onClick={() => loginFunction()}>Login</button>
                <div class="extrabuttons">
                <p class="link"><a>Esqueci minha senha</a></p><p class="link" onClick={() => window.location.replace("/pages/register-page/index.js")}><a>Criar nova conta</a></p>
                </div>
                
        </div>
        
    );

    function loginFunction() {
      if (!document.getElementById("email").value || !document.getElementById("senha").value){
        return console.log('Erro de solicitação');
      } else {
      fetch('https://develfood-3.herokuapp.com/auth', {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf8"
        },
        body: JSON.stringify({
        "email": document.getElementById("email").value,
        "password": document.getElementById("senha").value}) 
      })
      .then(response => response.json())
      .then(json => history.push("/home"))
      .catch(err => console.log('Erro de solicitação', err));}
    }
}

  export default LoginPage;

  
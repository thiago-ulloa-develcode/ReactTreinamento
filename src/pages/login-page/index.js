import './index.css'
import LogoDevelcode from './logodevelcode.png';

function LoginPage() {
    
    return (
      <div class="container">
            <div class="img-container">
                <img alt="logodevelcode" src={LogoDevelcode}/>
            </div>
                <input type="text" name="email" placeholder="Email" id="email"/>
                <input type="Password" name="password" placeholder="Senha" id="senha"/>
                <button type="button" onClick={() => loginFunction()}>Login</button>
                <div class="extrabuttons">
                <p class="link"><a>Esqueci minha senha</a></p><p class="link"><a>Criar nova conta</a></p>
                </div>
                
        </div>
        
    );

    function loginFunction() {
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
      .then(json => console.log(json))
      .catch(err => console.log('Erro de solicitação', err));}
}

  export default LoginPage;

  
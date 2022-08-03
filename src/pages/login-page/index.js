import './index.css'
import LogoDevelcode from './logodevelcode.png';

function LoginPage() {
    
    return (
      <div class="container">
            <div class="img-container">
                <img alt="logodevelcode" src={LogoDevelcode}/>
            </div>
                <input type="text" name="email" placeholder="Email"/>
                <input type="Password" name="password" placeholder="Senha"/>
                <button type="button">Login</button>
                <div class="extrabuttons">
                <p class="link"><a>Esqueci minha senha</a></p><p class="link"><a>Criar nova conta</a></p>
                </div>
        </div>
    );
    
}

  export default LoginPage;

  
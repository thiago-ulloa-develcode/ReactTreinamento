import './index.css'

function LoginPage() {
    
    return (
      <div class="container">
            <div class="img-container">
                <img alt="logodevelcode" src="logodevelcode.png"/>
            </div>
            <div class="body">
                <input type="text" name="email" placeholder="Email"/>
                <input type="Password" name="password" placeholder="Senha"/>
                <input type="Password" name="password2" placeholder="Senha"/>
                <button type="button">Login</button>
                <p class="link"><a>Esqueci minha senha</a></p><p class="link"><a>Criar nova conta</a></p>
            </div>
        </div>
    );
    
}

  export default LoginPage;

  
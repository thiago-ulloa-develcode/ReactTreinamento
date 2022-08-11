import './index.css'
import LogoDevelcode from './logodevelcode.png';

function RegisterPage() {
    
    return (
      <div class="container">
            <div class="img-container">
                <img alt="logodevelcode" src={LogoDevelcode}/>
            </div>
                <input type="text" name="email" placeholder="Email" id="email"/>
                <input type="Password" name="password" placeholder="Senha" id="senha"/>
                <input type="Password" name="password2" placeholder="Senha" id="senha"/>
                <button type="button">Criar nova conta</button>
                <div class="extrabuttons">
                <p class="link"><a>Já tem uma conta? Clique aqui para fazer login</a></p>
                </div>
                
        </div>
        
    );
}

export default RegisterPage;
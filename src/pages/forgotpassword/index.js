import './index.css'
import LogoDevelcode from './logodevelcode.png';

function ForgotPassword() {
    
    return (
      <div class="container">
            <div class="img-container">
                <img alt="logodevelcode" src={LogoDevelcode}/>
            </div>
                <h1>Insira o email da conta para enviar um código de criação de nova senha</h1>
                <input type="text" name="email" placeholder="Email" id="email"/>
                <button type="button">Enviar código de confirmação</button>
                <div class="extrabuttons">
                <p class="link"><a>Já tem uma conta? Clique aqui para fazer login</a></p>
                </div>
                
        </div>
        
    );
}

export default ForgotPassword;
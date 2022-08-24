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
                <input type="text" name="cnpj" placeholder="CNPJ" id="cnpj" maxLength="18" onKeyPress={() => Mascara()}/>
                <button type="button">Criar nova conta</button>
                <div class="extrabuttons">
                <p class="link"><a>Já tem uma conta? Clique aqui para fazer login</a></p>
                </div>
                
        </div>
        
    );
}
function Mascara() {
const input = document.getElementById('cnpj')
    let inputlength = input.value.length

    if (inputlength === 2 || inputlength === 6) {
        input.value += '.'
    } else if (inputlength === 10) {
        input.value += '/'
    } else if (inputlength === 15) {
        input.value += '-'
    }
}


export default RegisterPage;
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
    document.getElementById('cnpj').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
      });
}


export default RegisterPage;
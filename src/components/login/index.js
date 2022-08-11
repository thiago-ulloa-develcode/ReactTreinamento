<script>
fetch('https://develfood-3.herokuapp.com/auth')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log('Erro de solicitação', err));
</script>
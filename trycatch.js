// const nome = "Rafael"; //define uma váriavel para somente leitura

// try { // tenta realizar o bloco de código abaixo
//     nome = "Braz"; // muda a variável
// } catch (e){ //encerra o bloco de códigos do try e captura o erro e manda para a variável "e" 
//     console.error("Ops! A variável somente leitura 'nome' não pode ser alterada. Veja o erro: " + e); //manda mensagem de erro no console
// } //encerra o bloco de código do catch

// console.log("Teste");

// nome = "Santos"; //tenta fazer uma ação ilegal, o que para o script a partir desse ponto

// console.log("Teste2");
function fazerLogin(){ //declara função fazer login e abre bloco de código
    let usuario = document.getElementById("txtLogin"); //declara a váriavel temporável recebendo o elemneto "txtLogin"
    let senha = document.getElementById("txtSenha"); //declara a váriavel temporável recebendo o elemneto "txtSenha"
    try{ //tenta realizar o bloco de código abaixo
        if(usuario.value !== "usuario123"){ //cria uma verificação se o valor digitado é diferente a variável "usuario"//quando tem "!" na comparação, significa que tem que ser totalmente diferente
            usuario.focus();
            throw new Error("Erro: Usuário inválido."); //cria um novo erro genérico
        } //fecha bloco de código do "if usuario"
        if(senha.value !== "senha123"){ //cria uma verificação se o valor digitado é diferente a variável "senha"
            senha.focus();
            throw new Error("Erro: Senha incorreta"); //cria um novo erro genérico
        } //fecha bloco de código do "if senha"
        console.log("Login realizado com sucesso."); //mensagem que envia no console quando o login é realizado com sucesso
    } catch (erro){ //encerra o bloco de código do try e captura os erros enviando para a váriavel erro
        console.error(erro.message); //envia mensagem de erro no console
    } //fecha o bloco de códigos do catch
} // fecha o bloco de códigos da função fazer login
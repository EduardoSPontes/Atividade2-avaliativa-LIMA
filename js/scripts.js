function validarDados(){
    
    let nome = frmRegistro.inNome.value;
    let fone = frmRegistro.inFone.value;
    let mail = frmRegistro.inMail.value;
    let cargo = frmRegistro.inCargo.value;
    let departamento = frmRegistro.inDepto.value;
    let imagem = frmRegistro.inImg.value;

    if(nome.trim() == '' ) {
        frmRegistro.inNome.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo Nome está vazio';
      
       
        return false;
      
    }

    if(fone.trim() == '') {
        frmRegistro.inFone.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo Telefone está vazio';

            return false;
    }


    if(mail.trim() == '' || mail.trim().length < 5) {
        frmRegistro.inMail.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo E-mail está vazio e  Não pode ter menos de 5 carácteres';
        return false;
    }

    if(cargo.trim() == '' || cargo.trim().length < 5) {
        frmRegistro.inCargo.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo Cargo está vazio ';
       
        return false;
    }

    if(departamento.trim() == '' ) {
        frmRegistro.inDepto.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo Departamento está vazio';
    
        return false;
    }

    if(imagem.trim() == '') {
        frmRegistro.inImg.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Nenhuma Imagem está definido ';
        return false;
    }

    else {
        mensagemerro.style.display = 'none';
        mensagemerro.innerText;
    }

    spNome.innerText = nome;
    spCargo.innerText = cargo;
    spDepto.innerText = departamento;
    
    
const imagemInput = document.getElementById("inImg");
// Coloca a imagem no crachá
const file = imagemInput.files[0];
if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const areaFoto = document.getElementById("area-foto");
        areaFoto.innerHTML = `<img src="${e.target.result}" alt="Foto do Funcionário" width="100">`;
    };
    reader.readAsDataURL(file);
}
}

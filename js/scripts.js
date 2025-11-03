const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const errorMsg = document.getElementById('error');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Usuários válidos
        const usuarios = [
            { email: "millenadasilvarocha153@gmail.com", senha: "escola123", tipo: "professor" },
            { email: "00001096034827sp@al.educacao.sp.go.br", senha: "escola1234", tipo: "diretoria" }
        ];

        const usuarioValido = usuarios.find(u => u.email === email && u.senha === senha);

        if (usuarioValido) {
            // Guardar tipo de usuário no sessionStorage
            sessionStorage.setItem('tipoUsuario', usuarioValido.tipo);
            window.location.href = 'menu.html';
        } else {
            errorMsg.textContent = "Email ou senha incorretos!";
        }
    });
}

const tipoUsuarioDisplay = document.getElementById('tipoUsuarioDisplay');
if (tipoUsuarioDisplay) {
    const tipo = sessionStorage.getItem('tipoUsuario');
    if (tipo) {
        tipoUsuarioDisplay.textContent = "Você está logado como: " + tipo;
    }
}

const registrarForm = document.getElementById('registrarForm');
if (registrarForm) {
    registrarForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const aluno = document.getElementById('aluno').value;
        const turma = document.getElementById('turma').value;
        const descricao = document.getElementById('descricao').value;
        const data = document.getElementById('data').value;

        const ocorrencias = JSON.parse(localStorage.getItem('ocorrencias') || '[]');
        ocorrencias.push({ aluno, turma, descricao, data });
        localStorage.setItem('ocorrencias', JSON.stringify(ocorrencias));

        alert('Ocorrência registrada com sucesso!');
        registrarForm.reset();
    });
}

const ocorrenciasTable = document.getElementById('ocorrenciasTable');
if (ocorrenciasTable) {
    const ocorrencias = JSON.parse(localStorage.getItem('ocorrencias') || '[]');
    const tbody = ocorrenciasTable.querySelector('tbody');
    ocorrencias.forEach(o => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${o.aluno}</td><td>${o.turma}</td><td>${o.descricao}</td><td>${o.data}</td>`;
        tbody.appendChild(tr);
    });
}

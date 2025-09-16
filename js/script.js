/**
 * Formulário de Validação com Máscaras
 * MÉTODO SPLIT('/') EXPLICADO:
 * O split('/') divide uma string em array usando '/' como separador.
 * Exemplo: "25/12/1990".split('/') = ["25", "12", "1990"]
 * Isso permite extrair dia, mês e ano separadamente para cálculos de idade.
 */

const form = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('tel');
const cpf = document.getElementById('cpf');
const birthday = document.getElementById('birthday');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (
    nome.value === '' ||
    email.value === '' ||
    telefone.value === '' ||
    cpf.value === '' ||
    birthday.value === ''
  ) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  if (nome.value.trim().length < 3) {
    alert('O nome deve ter pelo menos 3 caracteres.');
    return;
  }
  if (!email.includes('@')) {
    alert('Por favor, insira um email válido.');
    return;
  }

  if (telefone.value.replace(/\D/g, '').length < 10) {
    alert('Digite um telefone válido.');
    return;
  }

  if (cpf.value.replace(/\D/g, '').length < 11) {
    alert('Digite um CPF válido.');
    return;
  }

  // Validação de idade mínima (18 anos)
  if (birthday.value !== '') {
    const partesData = birthday.value.split('/');
    if (partesData.length === 3) {
      const dia = parseInt(partesData[0]);
      const mes = parseInt(partesData[1]);
      const ano = parseInt(partesData[2]);

      const dataAniversario = new Date(ano, mes - 1, dia);
      const hoje = new Date();

      let idade = hoje.getFullYear() - dataAniversario.getFullYear();
      const diferencaMes = hoje.getMonth() - dataAniversario.getMonth();

      if (
        diferencaMes < 0 ||
        (diferencaMes === 0 && hoje.getDate() < dataAniversario.getDate())
      ) {
        idade--;
      }

      if (idade < 18) {
        alert('Você deve ter pelo menos 18 anos para se cadastrar.');
        return;
      }
    }
  }

  alert('Formulário enviado com sucesso!');
});

// Máscara para telefone
telefone.addEventListener('input', (e) => {
  let valor = e.target.value.replace(/\D/g, '');
  valor =
    valor.length <= 10
      ? valor.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
      : valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  e.target.value = valor;
});


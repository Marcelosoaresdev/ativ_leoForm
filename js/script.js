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


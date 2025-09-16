# 📋 Formulário de Validação com Máscaras

Um formulário web interativo com validações em tempo real e máscaras de formatação automática para campos essenciais como telefone, CPF e data de nascimento.

## 🎯 Objetivo

Criar um sistema de validação robusto e user-friendly que garanta a entrada de dados corretos e forneça feedback imediato ao usuário, incluindo validação de idade mínima e formatação automática de campos.

## 🚀 Funcionalidades

### ✅ Validações Implementadas

- **Campos obrigatórios**: Verificação se todos os campos estão preenchidos
- **Nome**: Mínimo de 3 caracteres (considerando espaços)
- **Email**: Validação básica verificando presença do símbolo '@'
- **Telefone**: Mínimo de 10 dígitos (aceita celular e fixo)
- **CPF**: Exatamente 11 dígitos numéricos
- **Idade**: Usuário deve ter pelo menos 18 anos completos

### 🎭 Máscaras de Formatação Automática

- **Telefone**: `(xx) xxxxx-xxxx` para celular e `(xx) xxxx-xxxx` para fixo
- **CPF**: `xxx.xxx.xxx-xx`
- **Data de Aniversário**: `DD/MM/AAAA`

### 🧮 Cálculo Inteligente de Idade

O sistema utiliza o método `split('/')` para extrair dia, mês e ano da data inserida e calcula com precisão se o usuário já fez aniversário no ano atual, garantindo uma validação de idade exata.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível do formulário
- **JavaScript ES6+**: Lógica de validação, máscaras e manipulação do DOM

## 📁 Estrutura do Projeto

```
ativ_leoForm/
├── index.html              # Estrutura do formulário HTML
├── js/
│   └── script.js           # Lógica de validação e máscaras
├── README.md               # Documentação do projeto
```

## 🎯 Como Usar

1. **Clone o repositório**:```

   git clone https://github.com/Marcelosoaresdev/ativ_leoForm.git├── index.html                          # Formulário HTML

   ```├── js/

│   ├── script.js                       # Versão final completa

2. **Navegue até o diretório**:│   └── script_v1_validacao_basica.js   # Versão inicial (commit 1)

   ```bash└── README.md                           # Documentação

   cd ativ_leoForm```

### 🎭 Máscaras Dinâmicas

Formatação automática conforme o usuário digita:

```javascript
// Máscara de telefone adaptativa
valor =
  valor.length <= 10
    ? valor.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
    : valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
```

## 🔧 Validações Detalhadas

| Campo       | Validação         | Exemplo Válido    |
| ----------- | ----------------- | ----------------- |
| Nome        | Min. 3 caracteres | `João Silva`      |
| Email       | Deve conter '@'   | `user@email.com`  |
| Telefone    | Min. 10 dígitos   | `(11) 99999-9999` |
| CPF         | Min. 11 dígitos   | `123.456.789-00`  |
| Aniversário | Idade ≥ 18 anos   | `01/01/2000`      |

## 🚨 Tratamento de Erros

O formulário possui validações sequenciais que param na primeira falha encontrada, garantindo:

- ✅ Feedback imediato ao usuário
- ✅ Prevenção de envios inválidos
- ✅ Mensagens de erro claras e específicas

## 🎨 Demonstração

![Formulário](https://via.placeholder.com/600x400/2196F3/ffffff?text=Formul%C3%A1rio+de+Valida%C3%A7%C3%A3o)

_Formulário com todos os campos e máscaras funcionando_

## 📱 Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📜 Histórico de Commits

- **feat**: Estrutura inicial e validações básicas
- **feat**: Implementação de máscaras de formatação
- **docs**: Documentação completa do código
- **feat**: Validação de idade mínima de 18 anos

## 👨‍💻 Autor

**Marcelo Soares**

- GitHub: [@Marcelosoaresdev](https://github.com/Marcelosoaresdev)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐

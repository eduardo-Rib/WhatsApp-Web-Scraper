### Formato do Commit

Cada commit deve seguir o seguinte formato:

>
>\<tipo>(\<escopo>): \<descrição curta>
>
>[Mensagem opcional] Explicação mais detalhada (caso necessário).
>

- **`<tipo>`**: Indica a natureza do commit. Exemplos:
  - `feat`: Adição de uma nova funcionalidade.
  - `fix`: Correção de um bug.
  - `docs`: Alterações na documentação (somente).
  - `style`: Alterações de formatação que não afetam o código (ex: espaçamento).
  - `refactor`: Refatoração sem alterar a funcionalidade.
  - `test`: Adição ou alteração de testes.
  - `chore`: Alterações que não se encaixam nas categorias acima (ex: mudanças de dependências).

- **`<escopo>`**: Indica qual parte do código foi alterada (ex: `ollama`, `gui`, `database`, etc).

- **`<descrição curta>`**: Uma descrição clara e objetiva da mudança.

### Exemplos

- `feat(database): adiciona conexão com o banco de dados mysql`
- `fix(ollamaConnection): corrige erro na abertura da conexão com Ollama`
- `docs(README): adiciona seção sobre configuração inicial`
- `style(ui): ajusta espaçamento entre botões`
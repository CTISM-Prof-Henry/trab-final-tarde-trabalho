# Documentação Organizador de tarefas 

## Bem-vindo à documentação do Organizador de Tarefas, um sistema web criado para ajudar na gestão de tarefas pessoais. Este projeto inclui funcionalidades como login, cadastro e gerenciamento de tarefas.

- Instalação
- Guia de Uso
- Desenvolvimento


# Instalação

## Pré-requisitos

- VSCode
- Navegador web (Chrome, Firefox, etc.)
# Guia de Uso

## Login e Cadastro
Acesse a página inicial e insira seu email e senha. Se não tiver conta, clique em "Cadastre-se" e preencha o formulário.

## Gerenciamento de Tarefas
- Adicione uma tarefa no campo e clique em "Adicionar".
- Use "Concluir" para marcar como feita, "Editar" para alterar, ou "Deletar" para remover.

## Logout
Clique em "Sair" para encerrar a sessão.

# Desenvolvimento

## Estrutura do Projeto
- HTML/: Páginas como index.html, signup.html, tasks.html.
- CSS/: Estilos em styles.css.
- JS/: Lógica em script.js, signup.js, tasks.js.

## Tecnologias
- HTML, CSS, JavaScript


## Como Contribuir
1. Clone o repositório.
2. Edite os arquivos e teste.
3. Envie um pull request.

## Diagrama de Casos de Uso
```mermaid
graph TD
    User[Usuário] --> Login[Login no Sistema]
    User --> AddTask[Adicionar Tarefa]
    User --> ViewTasks[Visualizar Tarefas]
    User --> CompleteTask[Marcar Tarefa como Concluída]
    User --> EditTask[Editar Tarefa]
    User --> DeleteTask[Deletar Tarefa]
    User --> Logout[Sair do Sistema]

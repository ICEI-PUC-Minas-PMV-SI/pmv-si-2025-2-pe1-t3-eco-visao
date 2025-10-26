# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                                       | Responsável | Artefato Criado          |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------------------------|
| **RF-001** | O sistema deve permitir que o usuário crie seu login                                                                                          | Vagner   | login.html    |
| **RF-002** | O sistema deve permitir que o usuário gerencie seu login                                                                                       | Matheus  | profile.html    |
| **RF-003** | O sistema deve permitir a emissão de um relatório no fim do mês                                                                                | Geovanni e Vagner   | dashboard.html    |
| **RF-004** | O sistema deve permitir que o usuário faça uma denúncia                                                                                        | Geovanni e Vagner    | dashboard.html    |
| **RF-005** | O sistema deve ter um mapa interativo onde seja possível colocar marcadores específicos para denunciar um ou mais problemas em uma localização designada | Geovanni   | my-alerts.html    |
| **RF-006** | O sistema deve ter um histórico de ocorrências ambientais                                                                                      | Geovanni   | dashboard.html    |
| **RF-007** | O sistema deve ter uma seção com conteúdos informativos e educativos sobre o desmatamento                                                      | Alvaro   | index.html    |
| **RF-009** | O sistema deve ser responsivo                                                                                                                 | Todos   | Todas as paginas.html    |
| **RF-010** | O sistema deve seguir um padrão visual consistente de cores e fontes em todas as páginas                                                       | Todos   | Todas as paginas.html    |
| **RF-011** | O sistema deve processar requisições do usuário em no máximo 3 segundos                                                                        |Todos   | Todas as paginas.html    |
| **RF-012** | O sistema deve ser multiplataforma                                                                                                            | Todos   | Todas as paginas.html   |
| **RF-013** | O sistema deve oferecer uma boa experiência de uso (UX)                                                                                       | Todos   | Todas as paginas.html    |
| **RF-014** | O sistema deve ter textos legíveis e com contraste adequado                                                                                    | Todos   | Todas as paginas.html    |


## Descrição das estruturas:

  | Campo | Tipo | Descrição |
  |-------|------|-----------|
  | `Primeiro nome` | Text | Primeiro nome do usuário |
  | `Sobrenome` | Text | Sobrenome do usuário |
  | `Email` | Email | Endereço de e-mail do usuário |
  | `CPF` | Text | CPF do usuário (Cadastro de Pessoa Física) |
  | `Endereço` | Text | Endereço completo do usuário |
  | `Data de nascimento` | Date | Data de nascimento do usuário |
  | `Senha atual` | Password | Senha atual do usuário (obrigatório apenas se alterar senha) |
  | `Nova senha` | Password | Nova senha desejada (obrigatório apenas se alterar senha) |
  | `Confirmar nova senha` | Password | Confirmação da nova senha (obrigatório apenas se alterar senha) |

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |


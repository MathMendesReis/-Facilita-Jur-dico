# Sistema de Gerenciamento de Clientes
## Introdução

Este projeto visa criar uma solução eficiente para o gerenciamento de clientes de uma empresa que realiza limpeza em residências. A plataforma é composta por um backend em Node.js utilizando PostgreSQL como banco de dados, e um frontend em React.

## Parte 1 - Gerenciamento de Clientes


A empresa utiliza as seguintes informações para gerenciar seus clientes: nome, email e telefone. As funcionalidades implementadas na plataforma incluem:

- Listagem de clientes com capacidade de filtragem com base nas informações cadastradas.
- Cadastro de novos clientes.

## Parte 2 - Otimização de Rotas de Atendimento

Além do cadastro e visualização de clientes, a empresa deseja otimizar as rotas de atendimento para maximizar a eficiência na visitação dos clientes. Cada cliente possui coordenadas X e Y em um mapa bidimensional.

O algoritmo para calcular a rota, partindo da empresa (0,0) e passando por todas as localizações dos clientes, está disponível via rota da API. Foi implementado um botão na tela de clientes que, ao ser clicado, abre uma modal mostrando a ordem de visitação dos clientes na rota calculada.


## Configuração e Execução Local

Para rodar o projeto localmente, siga as instruções abaixo:

## Backend (Node.js com PostgreSQL)
- Clone o repositório: git clone https://github.com/seu-usuario/seu-repositorio.git
- Navegue até o diretório do backend: cd backend
- Instale as dependências: npm install
- Configure o banco de dados e forneça as credenciais no arquivo .env.
- Execute o servidor: npm start


## Frontend (React)
- Navegue até o diretório do frontend: cd frontend
- Instale as dependências: npm install
- Configure a URL da API no arquivo de configuração.
- Inicie a aplicação: npm start

## Banco de Dados - DDL
A estrutura da tabela no banco de dados PostgreSQL é definida pelo seguinte DDL:

## Observações Gerais
- O código fonte está disponível neste repositório.
- O prazo para realização do teste foi de 3 dias.
- Preferência para consultas em SQL na API, evitando o uso de ORMs.

## Conclusão
Este teste foi desenvolvido para avaliar habilidades básicas e lógica na resolução de problemas. As escolhas e abordagens adotadas foram documentadas para melhor compreensão. Em caso de dúvidas, favor entrar em contato para esclarecimentos adicionais.
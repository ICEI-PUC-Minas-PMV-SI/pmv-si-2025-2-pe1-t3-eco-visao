# Documentação

Este é um sistema de monitoramento florestal em tempo real desenvolvido para acompanhar e identificar problemas ambientais na região da Serra do Cipó, como queimadas, desmatamento e exploração irregular de recursos naturais. O objetivo é fornecer informações rápidas e acessíveis para bombeiros, órgãos públicos, pesquisadores, profissionais da área ambiental e moradores locais, auxiliando na prevenção, fiscalização e preservação da biodiversidade. O projeto foi criado utilizando apenas HTML, JavaScript e TailwindCSS, com foco em simplicidade, eficiência e acessibilidade.

## Instalação

Para executar este projeto localmente, siga as instruções abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t3-eco-visao.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd src
   ```

3. Para abrir a aplicação no navegador:

   ```bash
   start exemplo.html
   ```

## Executando a API Fake (JSON Server)

Para simular uma API local usando o `db.json`:

1. Certifique-se de estar dentro da pasta `/src` do projeto.

2. Instale o JSON Server caso ainda não tenha:

   ```bash
   npm install -g json-server
   ```

3. Execute o servidor:

   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. Acesse a API pelo navegador ou ferramentas como Postman:

   ```
   http://localhost:3000/
   ```

> Agora você pode consumir os dados do `db.json` como se fossem de uma API real.

## Versão inicial do projeto [v0.1.0] - 30/09/2025

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Radar Florestal - Versão 0.1</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      color: #333;
    }
    header {
      background: #2e7d32;
      color: white;
      padding: 15px;
      text-align: center;
    }
    nav a {
      color: white;
      margin: 0 10px;
      text-decoration: none;
    }
    nav a:hover {
      text-decoration: underline;
    }
    main {
      padding: 40px 20px;
      max-width: 800px;
      margin: auto;
    }
    section {
      margin: 40px 0;
    }
    h2 {
      color: #2e7d32;
    }
    footer {
      background: #222;
      color: #aaa;
      text-align: center;
      padding: 15px;
      margin-top: 40px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Radar Florestal</h1>
    <nav>
      <a href="#sobre">Sobre</a>
      <a href="#beneficios">Benefícios</a>
      <a href="#depoimentos">Depoimentos</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>

  <main>
    <section id="inicio">
      <h2>Monitoramento Ambiental Inteligente</h2>
      <p>
        Sistema avançado de acompanhamento em tempo real de dados ambientais:
        <strong>desmatamento, queimadas, mineração e fauna</strong>.
      </p>
    </section>

    <section id="sobre">
      <h2>Sobre o Radar Florestal</h2>
      <p>
        O Radar Florestal é uma solução inovadora que integra dados ambientais em
        tempo real para auxiliar governos, ONGs e empresas a tomar decisões mais
        sustentáveis. Nosso objetivo é proteger o futuro do planeta com
        tecnologia de ponta e informações confiáveis.
      </p>
    </section>

    <section id="beneficios">
      <h2>Benefícios</h2>
      <ul>
        <li>Dados em tempo real para decisões rápidas e precisas.</li>
        <li>Cobertura global de diferentes regiões e ecossistemas.</li>
        <li>Tecnologia a favor da preservação ambiental.</li>
      </ul>
    </section>

    <section id="depoimentos">
      <h2>O que dizem nossos parceiros</h2>
      <p><em>"O Radar Florestal revolucionou nossa forma de acompanhar queimadas."</em> — ONG Floresta Viva</p>
      <p><em>"Dados precisos que ajudaram na criação de políticas públicas."</em> — Governo Estadual</p>
      <p><em>"Essencial para nossas pesquisas sobre biodiversidade."</em> — Universidade Verde</p>
    </section>

    <section id="contato">
      <h2>Entre em Contato</h2>
      <p>Preencha o formulário abaixo para falar conosco:</p>
      <form>
        <p><input type="text" placeholder="Nome" style="width:100%; padding:8px; margin-bottom:10px;"></p>
        <p><input type="email" placeholder="E-mail" style="width:100%; padding:8px; margin-bottom:10px;"></p>
        <p><textarea placeholder="Mensagem" rows="4" style="width:100%; padding:8px;"></textarea></p>
        <p><button style="padding:10px 20px; background:#2e7d32; color:white; border:none; cursor:pointer;">Enviar</button></p>
      </form>
    </section>
  </main>

  <footer>
    <p>© 2024 Radar Florestal - Tecnologia para um futuro sustentável</p>
  </footer>
</body>
</html>
```
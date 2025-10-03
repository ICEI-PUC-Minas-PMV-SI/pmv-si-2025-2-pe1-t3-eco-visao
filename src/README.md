# Instruções de utilização

## Instalação do Site

O site em HTML/CSS/JS é um projeto estático, logo pode ser utilizado tanto em servidores...

## Histórico de versões

### [0.1.0] - 30/09/2025

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

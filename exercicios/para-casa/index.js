let produtos = [
    {
      nome: "TV 20 polegadas",
      categoria: "áudio e vídeo",
      preco: 1500
    },
    {
      nome: "Mouse",
      categoria: "informática",
      preco: 70
    },
    {
      nome: "Teclado",
      categoria: "informática",
      preco: 350 
    },
    {
      nome: "Aparelho de som",
      categoria: "áudio e vídeo",
      preco: 600
    },
    {
      nome: "Sanduicheira",
      categoria: "eletrodomésticos",
      preco: 130
    },
    {
      nome: "Microondas 20L",
      categoria: "eletrodomésticos",
      preco: 800
    },
    {
      nome: "Geladeira frost free",
      categoria: "eletrodomésticos",
      preco: 2100
    },
    {
      nome: "Carregador de notebook Dell",
      categoria: "informática",
      preco: 140
    },
    {
      nome: "Caixa de som JBL",
      categoria: "áudio e vídeo",
      preco: 230
    },
    {
      nome: "Webcam",
      categoria: "informática",
      preco: 330
    },
    {
      nome: "Fogão 4 bocas",
      categoria: "eletrodomésticos",
      preco: 680
    },
    {
      nome: "Monitor 24 polegadas",
      categoria: "informática",
      preco: 900
    },
    {
      nome: "Air fryer",
      categoria: "eletrodomésticos",
      preco: 450
    }
  ]

  const eletromestico = documen.geElemntBy/IdleDeadline(`eletromestico`)
  eletromestico.innerHTML = `Eletrodomésticos`

  const informática = documen.geElemntBy/IdleDeadline(`Informática`)
  informatica.innerHTML = `Infprmática`

  const audiovisual = documen.geElemntBy/IdleDeadline(`audiovisual`)
  audiovisual.innerHTML = `Audio e vídeo`

  eletrodoméstico.addEventListenner (`click`, mostrar)
 
  function mostrar (descricaoEletro) {
    const descricxaoEletro = document.createElement (`article`)
    descricaoEletro.innerHTML = "teste"
  }  
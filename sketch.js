
  var gato, rato;

  var gatoimg, ratoimg, fundoimg;

  var gatoanimation, ratoanimation;

  var gatoimg2, ratoimg2;

 function preload() {

//carregue as imagens aqui

  fundoimg = loadImage("images/garden.png")

  gatoimg  = loadImage("images/cat1.png")

  ratoimg  = loadImage("images/mouse1.png")

  gatoimg2 = loadAnimation("images/cat4.png")

  ratoimg2 = loadAnimation("images/mouse4.png")

  gatoanimation = loadAnimation("images/cat2.png","images/cat3.png")
  
  ratoanimation = loadAnimation("images/mouse2.png","images/mouse3.png")

 }

 function setup(){

    createCanvas(1000,800);


//crie os sprites de gato e rato aqui

     rato = createSprite(100,600) 
      
       rato.scale = 0.13

     gato = createSprite(900,650) 
      
        gato.scale = 0.13

 }

 function draw() { 
   background(fundoimg); 
   rato.addImage(ratoimg)
   gato.addImage(gatoimg)
   if(gato.x - rato.x <100) { 

    gato.velocityX = 0; 

    gato.x = 300;
    gato.addAnimation("gatofinal",gatoimg2)
    gato.changeAnimation("gatofinal")

    rato.addAnimation("ratofinal",ratoimg2)
    rato.changeAnimation("ratofinal")



  }

     drawSprites();

     }

 function keyPressed(){

//Para mover e alterar a animação, escreva o código aqui

  if(keyDown("LEFT_ARROW")){
  
    gato.velocityX = -2
//trocar a animação do gato e do rato
gato.addAnimation("gatoAndando",gatoanimation)
gato.changeAnimation("gatoAndando")

rato.addAnimation("ratoProvocando",ratoanimation)
rato.changeAnimation("ratoProvocando")

  }

 }

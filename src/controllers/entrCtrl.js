import 'pixi.js';

export default function entrCtrl( $scope, $state ) {
  $scope.entr = document.getElementById( 'entr' );
  $scope.nameBox = document.getElementById( 'name-image' );
  $scope.nameText = document.getElementById( 'name-text' );
  $scope.nameTitle = document.getElementById( 'name-title' );

  $scope.name = new Name();

  setInterval( () => {
    $scope.nameBox.style.display = 'none';
    $scope.nameText.style.display = 'inline-block';
  }, 3500 );


  $scope.go2Main = () => {
    $scope.entr.classList.add( "end" );

    PIXI.loader.reset();

    $state.go( 'main' );
  }
}

class Name {
  constructor() {
    this.stage = new PIXI.Container();
    this.renderer = PIXI.autoDetectRenderer( 610, 208, { antialias: false, transparent: true, resolution: 1 } );
    this.counter = 0;

    document.getElementById( "name-image" ).appendChild( this.renderer.view );

    PIXI.loader.add( "./assets/images/name.json" ).load( this.initiate.bind( this ) );
  }

  initiate() {
    this.id = PIXI.loader.resources[ "./assets/images/name.json" ].textures;

    this.name = new PIXI.Sprite( this.id[ 'name0.png' ] );
    this.stage.addChild( this.name );

    this.writeName();
  }

  writeName() {
    this.counter++;

    if ( this.counter <= 152 ) {
      if ( this.counter % 2 === 0 ) {
        this.name.texture = this.id[ `name${ Math.floor( this.counter / 2 ) }.png` ];

        this.renderer.render( this.stage );
      }
      requestAnimationFrame( this.writeName.bind( this ) );
    }
  }
}

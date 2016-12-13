// Remove After Upload Website
import Flickity from 'flickity';

function homeCtrl( $scope, $sce, $state ) {
  // $scope.myUrl = $sce.trustAsResourceUrl( "http://google.com" );
  $scope.main = document.getElementById( 'main' );

  $scope.go2Entr = () => {
    $scope.main.classList.add( "end" );

    $state.go( 'entrance' );
  };

  $( document ).ready( () => {
    $( '#intro' ).addClass( 'in-view' );
  } );

  $( window ).scroll( () => {
    var skills = $( '#skills' );
    var education = $( '#education' );
    var experience = $( `#experience` );

    if ( isInView( skills ) && !skills.hasClass( 'in-view' ) )
      skills.addClass( 'in-view' );

    if ( isInView( education ) && !education.hasClass( 'in-view' ) )
      education.addClass( 'in-view' );

    if ( isInView( experience ) && !experience.hasClass( 'in-view' ) )
      experience.addClass( 'in-view' );

    return;
  } );

// Remove After Upload Website
  var justDoIt = new Flickity( document.querySelector('.just-do-it'), {
    cellAlign: 'left',
    wrapAround: true,
    autoPlay: 5000,
    setGallerySize: false
  } );
}

function isInView( element ) {
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round( element.offset().top );
  var elemBottom = elemTop + element.height();

  return ((elemTop < viewportBottom - $(window).height() * 1 / 3) && (elemBottom > viewportTop));
}

export default homeCtrl;

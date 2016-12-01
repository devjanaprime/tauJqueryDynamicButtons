var peeps = [ 'Karla', 'Alex', 'Flex-Fro', 'Deforis', 'LL Cool J' ];

$( document ).ready( function(){
  // this type of on click will only work for buttons that already exist on the DOM
  $( '.testButtonClass' ).on( 'click', function(){
    console.log( 'testButtonClass on click' );
    // it all starts with bling
    // $( this ) refers to the button itself
    // .attr( 'name' ) refers to the 'name' field in the button HTML
    // ex: <button class='testButtonClass' name='LL Cool J'>LL Cool J</button>
    var nameFromButtonField = $( this ).attr( 'name' );
    console.log( 'nameFromButtonField:', nameFromButtonField );
  }); // end testButtonClass on click

  // use this type of on click when targetting appended/dymanic HTML elements
  $( document ).on( 'click', '.testButtonClass', function(){
    console.log( 'document on click testButtonClass' );
    var buttonName = $( this ).attr( 'name' );
    console.log( 'buttonName:', buttonName );
  }); // end document on click

  // add peeps to DOM from Array
  var addPeeps = function(){
    // loop through peeps arraay and add to document
    var outputText = $( '#outputDiv' ).html();
    for (var i = 0; i < peeps.length; i++) {
      if( peeps[i] == 'Flex-Fro' ){
        outputText += '<button class="testButtonClass btn btn-danger" name="' + peeps[i] + '">' + peeps[i] + '</button>';
      }
      else{
        outputText += '<button class="testButtonClass btn btn-success" name="' + peeps[i] + '">' + peeps[i] + '</button>';
      }
    }
    $( '#outputDiv' ).html( outputText );
  }; // end addPeeps

  // run addPeeps on doc ready
  addPeeps();
}); // end doc ready

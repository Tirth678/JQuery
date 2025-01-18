console.log($);
    // $('selector').function(action)
    // $('p').click(); // click on p
    $('p').click(function(){
        console.log("Hey! you click on p\n");
    });
    // $('p').hide();
    $(this).hide(); // jis particular element pe click kroge wo hide ho jayega
    $('#id').hide(); // to select an id
    $('.class').hide(); // to select an class
    // there are 3 main types of selectors on jQuery
    // element,class,id
    // element selector:
    // $('p').click(function(){
    //     console.log("Hey! you click on p\n");
    // }); clicks on 'p' all element selectors

    // id selector
    // $('#second').click(function(){
    //     console.log("You clicked on p with an id of second!\n");
    // })

    // class selector
    $('.third').click(function(){
        console.log("You click on paragraph with class of third\n");
        


        // events
        // Mouse evetns: click, double click, mousenter, mouseleave
        // KeyboardEvent: keypress, keydown, MediaKeyStatusMap,
        // form events: submit, change, focus, blur,
        // documents/window events: load, resize, scroll, unload
       $('p').click(function(){
        console.log("You clicked on this parapgraph\n");
       });
       $('p').dblclick(function(){
        console.log("You double clicked on this parapgraph\n");
       })
       $('p').hover(function(){
        console.log("You have hovered on this paragraph\n");
       })
       

    });
    
    // other selectors
    // $('*').click(); clicks on all elements
    // $(p.odd).click(); jiski class odd hogi uspe click kro


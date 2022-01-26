$( document ).ready(function() {





    $(".DropdownMenu").click(function() {
        if (!$(".DropdownMenu").hasClass("open shown")) {
            $(".menu-container").addClass( "open shown" );
            $(".backdrop").css("display", "block");
        }
        // else {
        //     $(".menu-container").removeClass( "open shown" );
        //     $(".backdrop").css("display", "none");
        // }
    });

    $(".backdrop").click(function() {
        $(".backdrop").css("display", "none");
    });

});

// const input = document.querySelector('.form-control');
// const backDrop = document.querySelector('.backDrop');
// const menuContainer = document.querySelector('.menu-container');
//
// input.addEventListener('click', () => {
//    if (!input.classList.contains('open shown')) {
//        input.classList.add('open shown');
//        backDrop.style.display = 'block'
//    }
// });


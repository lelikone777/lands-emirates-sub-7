$( document ).ready(function() {
    // https://web.telegram.org/z/




    $(".backdrop").click(function() {
        console.log('click')
        // $(".backdrop").attr("style", "display:none");
    });

    $(".DropdownMenu").click(function() {
        if (!$(".DropdownMenu").hasClass("open shown")) {
            $(".menu-container").addClass( "open shown" );
            $(".backdrop").attr("style", "display:block");
            // $(".backdrop").css("display", "block");
            $(".css-icon-down").addClass("open");
            $('.form-control').addClass("focus");
        }
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


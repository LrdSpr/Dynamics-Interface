$('document').ready(function(){
    //$('.menu__hidden_block').lightSlider({
    //    autoWidth:true,
    //    loop:false,
    //
    //});
    $('.sandwich-menu').slick({
        draggable:false,
        dots: false,
        infinite: false,
        speed: 152,
        slidesToShow: 5,
        slidesToScroll:1,
        centerMode: false,
        variableWidth: true,
        prevArrow:'<div class="owl-prev"></div>',
        nextArrow:'<div class="owl-next"></div>',
        responsive: [
            {
                breakpoint: 6000,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    //infinite: true,
                    //dots: true
                }
            },
            {
                breakpoint: 1259,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    //infinite: true,
                    //dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    //slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
});
    $('.menu__hidden_block').slick({
        draggable:false,
        dots: false,
        infinite: false,
        speed: 152,
        slidesToShow: 5,
        slidesToScroll:1,
        centerMode: false,
        variableWidth: true,
        prevArrow:'<div class="owl-prev"></div>',
        nextArrow:'<div class="owl-next"></div>',
        responsive: [
            {
                breakpoint: 6000,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    //infinite: true,
                    //dots: true
                }
            },
            {
                breakpoint: 1064,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    //infinite: true,
                    //dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    //slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //var owl =  $('.sandwich-menu')
    //$('.menu__hidden_block').owlCarousel({
    //
    //    loop:true,
    //    autoWidth:true,
    //    items:4,
    //    nav:true,
    //    navText:[' ',' '],
    //    mouseDrag:false,
    //    touchDrag:false,
    //
    //})
    //
    //$('.sandwich-menu').owlCarousel({
    //    loop:true,
    //    autoWidth:true,
    //    items:4,
    //    nav:true,
    //    navText:[' ',' '],
    //    mouseDrag:true,
    //    touchDrag:true
    //
    //});
    //function recalcCarouselWidth(carousel) {
    //    var stage = carousel.find('.owl-stage');
    //    stage.width(Math.ceil(1194));
    //}
    //$(window).on('resize', function(e){
    //    recalcCarouselWidth($('.owl-carousel'));
    //}).resize();
    //$('.sandwich-menu').on('refreshed.owl.carousel', function(event) {
    //    recalcCarouselWidth($('.owl-carousel'));
    //});
    var sandwich = false
    function ShowSandwich(){
        $(".sandwich-menu").css("visibility",'visible')
        $(".sandwich-menu").animate({'height':101},50)
        $(".sandwich-menu__item").removeClass('active');
        sandwich = true;
        $(".menu__sandwich").addClass('active')
    }

    function HideSandwich(){
        $(".sandwich-menu").animate({'height':0},50,function(){
            $(".sandwich-menu").css("visibility",'hidden')
        })
        $(".sandwich-menu__item").removeClass('active');
        sandwich = false
        $(".menu__sandwich").removeClass('active')
    }


    $(".menu__sandwich").on('click',function(){
        $(".menu__btn_arrow").removeClass('active');
        $(".menu__hidden_block").hide();

        if (sandwich == false) {
            ShowSandwich();
        }
        else{
             HideSandwich()
        }
    })

    $(".content").on("mouseenter",function(){
         HideSandwich()
    })

    $(".content").on("mouseenter",function(){
        $(".menu__hidden_block[data-id="+menu__hidden_block_id+"]").slideUp(10);
        $(".menu__btn_arrow").removeClass('active');

    });
    var menu_on = false;
    $("body").on('click',"*",function(){
        if (menu_on == false) {
            //console.log('opa')
            $(".dropdown").removeClass('active')
            $(".dropdown-btn").removeClass('active')
            $(".dropdown li").removeClass('active')
            $(".dropdown-sub").removeClass('active')
        }
    });
    var menu__btn_arrow = $(".menu__btn_arrow");
    var menu__hidden_block = $(".menu__hidden_block");
    var menu__btn_arrow_active = false;
    var menu__hidden_block_id = 0;
    menu__btn_arrow.on('click',function(){
        HideSandwich()
        var id = $(this).attr('data-id');
        menu__hidden_block_id = id;
        if ($(this).hasClass('active')){
            menu__btn_arrow.removeClass('active');
            $(".menu__hidden_block").hide()

        }else{
            menu__btn_arrow.removeClass('active');
            $(this).addClass('active');
            $(".menu__hidden_block").hide()
            $(".menu__hidden_block[data-id="+id+"]").css({"top":50})
            $(".menu__hidden_block[data-id="+id+"]").slideDown('fast')
        }


    });

    $(".sandwich-menu__item").on('click',function(){
        $(".sandwich-menu__item").removeClass('active')
        //$(this).addClass('active')
        var id = $(this).attr('data-id');
        menu__hidden_block_id = id;
        if ($(this).hasClass('active')){
            menu__btn_arrow.removeClass('active');
            $(".menu__hidden_block").hide()

        }else{
            $(".sandwich-menu__item").removeClass('active');
            $(this).addClass('active');
            $(".menu__hidden_block").hide()
            $(".menu__hidden_block[data-id="+id+"]").css({"top":151})
            $(".menu__hidden_block[data-id="+id+"]").slideDown('fast')
        }


    });


    $(".dropdown-btn").on('click',function(){
        var pos = $(this).position();
        var w = $(this).outerWidth();
        var h = $(this).outerHeight();
        var id = $(this).attr('data-id');
       // $(".dropdown").removeClass('active');
        $(".dropdown-btn").removeClass('active')
        $(".dropdown-sub").removeClass('active')
        $(".dropdown").find("li").removeClass('active')
        $(this).addClass('active');
        var dropdown = $(".dropdown[data-id="+id+"]")
        //console.log(dropdown)
        if (dropdown.hasClass('active')){
            $(".dropdown").removeClass('active');
            dropdown.removeClass('active');
            $(".dropdown-btn").removeClass('active')

            //Hide()
        }else{
            $(".dropdown").removeClass('active');
            dropdown.css({'top':pos.top+h+3,'left':pos.left+5})
            dropdown.addClass('active');
        }
            //.css({'display':'block'});
    });

    //$(".dropdown li").on('click',function(){
    //    $(".dropdown-sub-btn").removeClass('active')
    //    $(".dropdown-sub").removeClass('active');
    //});
    $(".dropdown-btn").on("mouseover",function(){
        menu_on = true
    })
    $(".dropdown-btn").on("mouseout",function(){
        menu_on = false
    })
    $(".dropdown").on("mouseover",function(){
        menu_on = true
    })
    $(".dropdown").on("mouseout",function(){
        menu_on = false
    })
    $(".dropdown").on('click',"li",function(){

       // $(".dropdown li").removeClass('active')
       // $(".dropdown-sub").removeClass('active');
        var pos = $(this).position();
        var w = $(this).outerWidth();
        var h = $(this).outerHeight();
        var id = $(this).attr('data-id');

        var dropdown = $(".dropdown-sub[data-id=" + id + "]")
        if (id != undefined) {
            var d_t = pos.top + 3;
            var d_l = pos.left + w - 5;
            dropdown.css({'top': d_t, 'left': d_l});


            if (dropdown.offset().left + 200 >= $(window).width()) {
                d_l = pos.left;
                d_t = pos.top + h - 5;
                dropdown.css({'top': d_t, 'left': d_l})
            }
        }
        //console.log($(this).attr('class'))
        if ($(this).hasClass('active')){

            $(this).removeClass('active')
            $(".dropdown").find("li").removeClass('active')
            dropdown.removeClass('active');

        }else{

            $(".dropdown").find("li").removeClass('active')
            $(this).addClass('active')
            $(".dropdown-sub").removeClass('active')
            dropdown.addClass('active');
        }

      });
    var html = '';
    $(".resize").each(function(){
        var elem = $(this);
        var style = '';
        style = 'block';
        var text = elem.find('.text').text()
        var img = elem.find('.img').attr('class');
        var img_div = '';
        if (img) {
            img_div = "<div class='"+img+"'></div>"
        }
        var drop_class = ''
        var arrow = ''
        var drop_sub = '';
        if (elem.hasClass('dropdown-btn')){
            var dropdown_html = $(".dropdown[data-id="+elem.attr('data-id')+"]").html()

            arrow = '<div class="arrow"></div>';
            var array = [];
            var max = 0
            $(".dropdown-sub").each(function(){
                array.push(parseInt($(this).attr('data-id')));

            });
            max = Math.floor(Math.random() * (2000 - 500 + 1)) + 500
            drop_class = 'class ="dropdown-sub-btn" data-id="'+(max+10)+'"';
            drop_sub = '<div class="dropdown-sub" data-id="'+(max+10)+'">'+dropdown_html+'</div>'
        }else{

        }
        html = html+'<li '+drop_class+'style="display: '+style+'">'+img_div+'<div class="text">'+text+'</div>'+arrow+'</li>'+drop_sub

    });
    $(".more_list").prepend(html);

    function Resizeble(a){
        $(".resize").each(function(index){
            var elem = $(this)
            var elem_class = elem.find('.img').attr('class')
            if (index <=a-1 ){
                elem.css({'display':'inline-block'})
                $(".more_list").find('div[class="'+elem_class+'"]').parent('li').css({'display':'none'})
            }else{
                elem.css({'display':'none'})
                $(".more_list").find('div[class="'+elem_class+'"]').parent('li').css({'display':'block'})
            }

        });
    }
    function SubMenu(){
        var ww = $(window).width();
        switch (true){
            case 0<ww && ww<380:
                Resizeble(0);
                break;
            case 381<ww && ww<530:
                Resizeble(2);
                break;
            case 531<ww && ww<700:
                Resizeble(3);
                break;
            case 701<ww && ww<800:
                Resizeble(4);
                break;
            case 801<ww && ww<900:
                Resizeble(5);
                break;
            case 901<ww && ww<1000:
                Resizeble(6);
                break;
            case 1001<ww && ww<1100:
                Resizeble(7);
                break;
            case 1101<ww && ww<1200:
                Resizeble(8);
                break;
            case 1201<ww && ww<1300:
                Resizeble(8);
                break;
            case 1301<ww && ww<1501:
                Resizeble(9);
                break;
            //case 501<ww:
            //    Resizeble(9);
            //    break;
            default:
                Resizeble(1000)
        }
    }
    SubMenu()
    $(window).resize(function(){
        tbodyHeight()
               SubMenu();
        $(".dropdown-btn").removeClass('active')
        $(".dropdown-sub").removeClass('active')
        $(".dropdown").find("li").removeClass('active')
        $(".dropdown").removeClass('active')
    })


    var json_data = '';
    function loadJson(){
        $.getJSON( "accounts.json", function( data ) {

            json_data = data;

        }).done(function(){
            RenderTable()
        });

    }
    loadJson();

    function RenderTable(){
        html = '';
        $.each( json_data, function( key, val ) {

           // html = html+"<tr>";
            html= html+'<div class="tr"><div class="td check"><div class="check_img"></div></div>'
                //'<div class="td name"><a href="">'+val['name']+'</a></div>' +
                //'<div class="td phone"Main Phone</div>' +
                //'<div class="td address">Address 1:City</div>' +
                //'<div class="td contact">Primary Contact</div>' +
                //'<div class="td email">E-mail(Primary Contact)</div>' +
                //'<div class="td filter"></div>' +
                //'</div>'
            $.each(val,function(td,v){
                var link_s = '' ;
                var link_e = '' ;

                if (v.link){
                    link_s = '<a href='+ v.link+'>'
                            link_e = '</a>'
                }
                html=html+' <div class="td '+td+'">'+link_s+v.name+link_e+'</div> '
            })
            html = html+'<div class="td filter"></div></div>'
        });

        $(".active-accounts-table .tbody").append(html)
        $(".active-accounts-table").find(".td").each(function(){
            $(this).attr('data-width',$(this).outerWidth())
        });
        var col_w = 200
        $(".active-accounts-table").find('.thead .td').each(function () {
            col_w = col_w+ parseInt($(this).outerWidth());
        });
        $(".active-accounts-table").find('.thead .tr').css('width',col_w)
        $(".active-accounts-table").find('.tbody .tr').css('width',col_w)
        $(".active-accounts-table").find('.tbody').css('width',col_w)
        $(".active-accounts-table").find('.thead').css('width',col_w)
    }

    $(".active-accounts-table").on('click','.td:not(.check)',function(){

        $(".active-accounts-table").find(".tr").removeClass('active')
        $(this).parents(".tr").addClass("active")
        //console.log($(this))
        //if ( $(this).parents(".tr").hasClass('active')){
        //    $(this).removeClass("active")
        //}else{
        //    $(this).addClass("active")
        //}
    });
    $(".active-accounts-table").on('click','.check_img',function(){

        //$(".active-accounts-table").find(".tr").removeClass('active')
        if ( $(this).parents(".tr").hasClass('active')){
            $(this).parents(".tr").removeClass("active")
        }else{
            $(this).parents(".tr").addClass("active")
        }

       // alert('12')
    });
    function SelectActive(a){
        for(var i=0;i< a.length;i++){
            $(".active-accounts-table").eq(a[i]).addClass('active')
        }

    }
    var start = 0;
    var cursor_x = 0;
    var diff = 0;
    $(window).mousemove(function (pos) {

       //$(".active-accounts-table").find('.sep.active').css("left",pos.pageX)
        cursor_x = pos.pageX;
        diff = pos.pageX - start;
       //console.log(diff)
             var col =  $(".active-accounts-table").find('.sep.active').attr("data-col");
        $(".active-accounts-table").find('.td.' + col).each(function () {
                var w = parseInt($(this).attr('data-width'));
                //console.log(w)
                if ((w + diff )>30)
                {
                    $(this).css({'width': w + diff});
                   // col_w = col_w+diff;
                }

               // console.log(w + diff)
            });
        var col_w = 200
        $(".active-accounts-table").find('.thead .td').each(function () {
            col_w = col_w+ parseInt($(this).outerWidth());
        });
        $(".active-accounts-table").find('.thead .tr').css('width',col_w)
        $(".active-accounts-table").find('.tbody .tr').css('width',col_w)
        $(".active-accounts-table").find('.tbody').css('width',col_w)
        $(".active-accounts-table").find('.thead').css('width',col_w)


    })

    $(".active-accounts-table").find('.sep').on('mousedown',function(){
        $(this).addClass('active')
        start = cursor_x;
    });


    $(document).on('mouseup',function(){
        $(".active-accounts-table").find('.sep').removeClass('active')
        start = 0
        $(".active-accounts-table").find(".td").each(function(){
            $(this).attr('data-width',$(this).outerWidth())
        });
    })

    function tbodyHeight(){
        var t= $(".active-accounts-table").find(".tbody").offset().top;
        var h = $(window).height()-t-parseInt($('.active-accounts-table').find(".tfoot").height())
        $(".active-accounts-table").find(".tbody").css({'height':h-20});
    }
    tbodyHeight()

        // RenderTable()

        $(".active-accounts-table").find(".check.all").on('click',function(){
            var all = true;
            $(".active-accounts-table .tbody").find(".tr").each(function() {
                if ($(this).hasClass('active')) {

                }else{
                    all = false;
                     $(".active-accounts-table .tbody").find(".tr").addClass('active')
                }

            })
            if (all == true){
                all = false
                $(".active-accounts-table .tbody").find(".tr").removeClass('active')
            }
        })

    $(".header_form input[type='text']").on('input',function(){
        HeaderForm($(this).val())
   })
    function HeaderForm(a){
        //var val = $(this).val();
        if (a.length>0){
            $(".header_form input[type='text']").addClass('normal-font')
            $(".header_form").find('.input-search').hide()
            $(".header_form").find('.input-reset').show()
        }else{
            $(".header_form input[type='text']").removeClass('normal-font')
            $(".header_form").find('.input-search').show()
            $(".header_form").find('.input-reset').hide()
        }
    }
    HeaderForm($(".header_form input[type='text']").val())

    $(".header_form .input-reset").on('click',function(){
        $(".header_form input[type='text']").val("")
        HeaderForm($(".header_form input[type='text']").val())
    });


    $(".menu__btn_search-big input[type='text']").on('input',function(){
        MenuForm($(this).val())
    })
    function MenuForm(a){
        //var val = $(this).val();
        if (a.length>0){
            $(".menu__btn_search-big input[type='text']").addClass('normal-font')
            $(".menu__btn_search-big").find('input[type="submit"]').hide()
            $(".menu__btn_search-big").find('.input-reset').show()
        }else{
            $(".menu__btn_search-big input[type='text']").removeClass('normal-font')
            $(".menu__btn_search-big").find('input[type="submit"]').show()
            $(".menu__btn_search-big").find('.input-reset').hide()
        }
    }
 MenuForm($(".menu__btn_search-big input[type='text']").val())

    $(".menu__btn_search-big .input-reset").on('click',function(){
        $(".menu__btn_search-big input[type='text']").val("")
        MenuForm($(".menu__btn_search-big input[type='text']").val())
    });

    //$(".header_form .input-submit").on('click',function(){
    //    $(".header_form").submit()
    //})
})
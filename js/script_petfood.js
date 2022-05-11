
//Catatan : Buat function supaya mempersingkat codingannya, Jadi nanti kalo mau make tinggal di panggil aja "Nama Functionnya" :)

function tampilaknSemuaMenu() {
    $.getJSON('data/menu.json', function (data) {
        let menu = data.menu;
    
        $.each(menu,function(i,data) {
            $('#daftar-menu').append('<div class="col-lg-3 col-md-4 col-sm-6 mt-4"><div class="card h-100 zoom"><img src="foto/'+ data.foto +'" class="card-img-top"><div class="card-body"><h6 class="card-title3">'+ data.category+'</h6><h5 class="card-title1">'+ data.namamakanan +'</h5><h6 class="card-text">'+ data.desc +'</h6><h5 class="card-title2">Rp '+ data.harga +',-</h5><a href="#" class="btn btn-warning mt-2">Checkout Now !</a></div></div></div>');
        }); //ambil semua elemen yang ada di semua menu   
    });
}



tampilaknSemuaMenu();



$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('#JudulPage').html(kategori);

    if( kategori == 'All Product'){
        tampilaknSemuaMenu();
        return; //Supaya keluar dari function agar tidak mengganggu tampilan data lainnya berdasarkan kategori
    }



    $.getJSON('data/menu.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu,function(i,data){

            if (data.category == kategori) {
               content += '<div class="col-lg-3 col-md-4 col-sm-6 mt-4"><div class="card h-100 zoom"><img src="foto/'+ data.foto +'" class="card-img-top"><div class="card-body"><h6 class="card-title3">'+ data.category+'</h6><h5 class="card-title1">'+ data.namamakanan +'</h5><h6 class="card-text">'+ data.desc +'</h6><h5 class="card-title2">Rp '+ data.harga +',-</h5><a href="#" class="btn btn-warning mt-2">Checkout Now !</a></div></div></div>';
            }
        });

        $('#daftar-menu').html (content);
    });

});



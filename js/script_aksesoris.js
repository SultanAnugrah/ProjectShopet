$.getJSON('data/aksessoris.json', function (data) {
    let menu = data.menu;

    $.each(menu,function(i,data) {
        $('#daftar-aksesoris').append('<div class="col-lg-3 col-md-4 col-sm-6 mt-4"><div class="card h-100 zoom"><img src="foto/'+ data.foto +'" class="card-img-top"><div class="card-body"><h5 class="card-title1">'+ data.namamakanan +'</h5><h6 class="card-text">'+ data.desc +'</h6><h5 class="card-title2">Rp '+ data.harga +',-</h5><a href="#" class="btn btn-warning mt-2">Checkout Now !</a></div></div></div>');
    }); //ambil semua elemen yang ada di semua menu   
});
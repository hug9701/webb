
var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("id");
var d = url.searchParams.get("idcategory");

$.ajax({
    url: 'http://localhost:5555/auth/secured',
    dataType: 'json',
    timeout: 10000,
    headers: {
        'token': localStorage.access_token
    }
}).done((data) => {
    var isLogin = data.payload.email
    if (isLogin !== null) {
        $('#username').html(isLogin)
        $('#loginSuccessuser').show()
    }
    else {
        $('#loginSuccess').show()
        $('#loginSuccessuser').hide()
    }
})

$('#logout').click(function () {
    localStorage.clear();
    location.href('/')
    $('#loginSuccess').show()
    $('#loginSuccessuser').hide()
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

var showDetail = () => {
    $.getJSON("http://localhost:5555/product/" + c, (data) => {
        console.log('data', data)
        $.getJSON('http://localhost:5555/product/getimage/' + data[0].Id, (images) => {
            var item =
                '<div class="col-md-4 agileinfo_single_left">' +
                '<img id="example" src="images/' + images[0].Image1 + '" alt=" " class="img-responsive">' +
                '</div>' +
                '<div class="col-md-8 agileinfo_single_right">' +
                '<div>Kết thúc trong <span style="font-size: 140%" id="time">05:00</span> minutes!</div>' +
                '<h2>' + data[0].ProductName + '</h2>' +
                '<div class="rating1">' +
                '<span class="starRating">' +
                '</span>' +
                '</div>' +
                '  <div class="w3agile_description">' +
                '<h4>Description :</h4><br/>' +
                '<span>'+ data[0].Detail + '</span>' +
                '</div>' +
                '<div class="snipcart-item block">' +
                '<div class="snipcart-thumb agileinfo_single_right_snipcart">' +
                '<h4 class="m-sing">Giá hiện tại:<span style="font-size: 140%"> ' + data[0].PricePay + '</span><br/>Giá mua ngay: <span style="font-size: 140%"> ' + data[0].PriceNow + '</span></h4>' +
                '</div>' +
                '<div class="snipcart-details agileinfo_single_right_details">' +
                '</div>' +
                '<a>Đấu giá ngay </a>' +
                '<input />' +
                '</div>' +
                '</div >'
            $('#loadDetail').append(item);
        })
    })
}

var getCategoryDetail = () => {
    $.getJSON("http://localhost:5555/product/category-from-product/" + d, (data) => {
        console.log('daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', data);
        $.each(data, (index, items) => {
            $.getJSON('http://localhost:5555/product/getimage/' + items.Id, (images) => {
                var item =
                    '<div class="col-md-3 top_brand_left-1">' +
                    '<div class="hover14 column">' +
                    '<div class="agile_top_brand_left_grid">' +
                    '<div class="agile_top_brand_left_grid_pos">' +
                    '</div>' +
                    '<div class="agile_top_brand_left_grid1">' +
                    '<figure>' +
                    '<div class="snipcart-item block">' +
                    '<div class="snipcart-thumb">' +
                    ' <a href="products.html"><img height="150" width="150" title=" " alt=" " src="images/'+ images[0].Image1 +'"></a>		' +
                    '<p>' + items.ProductName + '</p>' +
                    '<div class="stars">' +
                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                    '<i class="fa fa-star gray-star" aria-hidden="true"></i>' +
                    ' </div>' +
                    ' <h4>' + Number(items.PriceNow).toLocaleString()+ '</h4>' +
                    '</div>' +
                    '<div class="snipcart-details top_brand_home_details">' +
                    '<a href="single?id=' + items.Id + '&idcategory=' + items.id_category + '">Đấu giá</a>' +
                    '</div>' +
                    '</div>' +
                    '</figure>' +
                    '</div>' +
                    ' </div>' +
                    ' </div>' +
                    ' </div>'
                $('#luatancut').append(item);
            })
        })
    })
}
showDetail();
getCategoryDetail();


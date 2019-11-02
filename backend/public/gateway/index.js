
$.ajax({
    url: 'http://localhost:5555/auth/secured',
    dataType: 'json',
    timeout: 10000,
    headers: {
        'token': localStorage.access_token
    }
}).done((data) => {
    var c = data.payload.email
    if (c !== null) {
        $('#loginSuccess').hide()
        $('#username').html(c)
        $('#loginSuccessuser').show()
    }
    else {
        $('#loginSuccess').show()
        $('#loginSuccessuser').hide()
    }
})

$('#logout').click(function () {
    localStorage.clear();
    $('#loginSuccess').show()
    $('#loginSuccessuser').hide()
});


var search = () => {
    $('#isSearch').hide()
    $('#btnSearch').on('click', () => {
        $('#isSearch').show()
        $('#pageloadSearch').empty()
        var bla = $('#txt_search').val();
        $.getJSON('http://localhost:5555/product/searchproduct/' + bla, (data) => {
            console.log('aaaaaaa', data)
            if (data = [0]) {
                var item = '<div style="padding: 30px" >Không có sản phẩm bạn cần tìm, Vui lòng tìm tên sản phẩm khác</div>'
                $('#pageloadSearch').append(item);
            } else {
                $.each(data, (index, items) => {
                    $.getJSON('http://localhost:5555/product/getimage/' + items.Id, (images) => {
                        var item =
                            '<div class="col-md-4 top_brand_left" style="padding-top: 20px">' +
                            '<div class="hover14 column">' +
                            '<div class="agile_top_brand_left_grid">' +
                            '<div class="agile_top_brand_left_grid_pos">' +
                            '</div>' +
                            '<div class="agile_top_brand_left_grid1">' +
                            '<figure>' +
                            '<div class="snipcart-item block">' +
                            '<div class="snipcart-thumb">' +
                            ' <span style="margin-left: 60px">Giá mua ngay: ' + Number(items.PricePay).toLocaleString() + '</span>' +
                            '<a href="products.html">' +
                            '<img title=" " height="80" width="80" src="images/' + images[0].Image1 + '" />' +
                            '</a>' +
                            '<p>' + items.ProductName + '</p>' +
                            '<div class="stars">' +
                            ' <i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                            '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                            '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                            '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                            '<i class="fa fa-star gray-star" aria-hidden="true"></i>' +
                            '</div>' +
                            ' <h4>' + Number(items.PriceNow).toLocaleString() +
                            ' </h4>' +
                            ' </div>' +
                            '<div class="snipcart-details top_brand_home_details">' +
                            '<a href="single?id=' + items.Id + '&idcategory=' + items.id_category + '">Đấu giá</a>' +
                            ' </fieldset>' +
                            ' </form>' +
                            '</div>' +
                            ' </div>' +
                            '</figure>' +
                            ' </div>' +
                            ' </div>' +
                            '</div>' +
                            ' </div>'
                        $('#pageloadSearch').append(item);
                    })
                })
            }
        })
    })
}

search()

$.getJSON("http://localhost:5555/product/toppricenow", (data) => {
    var socket = io('http://localhost:5555');
    console.log(data)
    $.each(data, (index, items) => {
        $.getJSON('http://localhost:5555/product/getimage/' + items.Id, (images) => {
            var item =
                '<div class="col-md-4 top_brand_left" style="padding-top: 20px">' +
                '<div class="hover14 column">' +
                '<div class="agile_top_brand_left_grid">' +
                '<div class="agile_top_brand_left_grid_pos">' +
                '</div>' +
                '<div class="agile_top_brand_left_grid1">' +
                '<figure>' +
                '<div class="snipcart-item block">' +
                '<div class="snipcart-thumb">' +
                ' <span style="margin-left: 60px">Giá mua ngay: ' + Number(items.PricePay).toLocaleString() + '</span>' +
                '<a href="single?id=' + items.Id + '&idcategory=' + items.id_category + '" data-user-id="' + items.Id + '">' +
                '<img title=" " height="80" width="80" src="images/' + images[0].Image1 + '" />' +
                '</a>' +
                '<p>' + items.ProductName + '</p>' +
                '<div class="stars">' +
                ' <i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star gray-star" aria-hidden="true"></i>' +
                '</div>' +
                ' <h4>' + Number(items.PriceNow).toLocaleString() +
                ' </h4>' +
                ' </div>' +
                '<div class="snipcart-details top_brand_home_details">' +
                '<a href="single?id=' + items.Id + '&idcategory=' + items.id_category + '">Đấu giá</a>' +
                ' </fieldset>' +
                ' </form>' +
                '</div>' +
                ' </div>' +
                '</figure>' +
                ' </div>' +
                ' </div>' +
                '</div>' +
                ' </div>'
            $('#loadTopprice').append(item);
        })
    })
})

$.getJSON("http://localhost:5555/product/topturnpay", (data) => {
    $.each(data, (index, items) => {
        $.getJSON('http://localhost:5555/product/getimage/' + items.Id, (images) => {
            var item =
                '<div class="col-md-4 top_brand_left" style="padding-top: 20px">' +
                '<div class="hover14 column">' +
                '<div class="agile_top_brand_left_grid">' +
                '<div class="agile_top_brand_left_grid_pos">' +
                '</div>' +
                '<div class="agile_top_brand_left_grid1">' +
                '<figure>' +
                '<div class="snipcart-item block">' +
                '<div class="snipcart-thumb">' +
                ' <span style="margin-left: 60px">Giá mua ngay: ' + Number(items.PricePay).toLocaleString() + '</span>' +
                '<a href="single?id=' + items.Id + '" data-user-id="' + items.Id + '">' +
                '<img title=" " height="80" width="80" src="images/' + images[0].Image1 + '" />' +
                '</a>' +
                '<p>' + items.ProductName + '</p>' +
                '<div class="stars">' +
                ' <i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star gray-star" aria-hidden="true"></i>' +
                '</div>' +
                ' <h4>' + Number(items.PriceNow).toLocaleString() +
                ' </h4>' +
                ' </div>' +
                '<div class="snipcart-details top_brand_home_details">' +
                '<a href="single?id=' + items.Id + '&idcategory=' + items.id_category + '">Đấu giá</a>' +
                '</div>' +
                ' </div>' +
                '</figure>' +
                ' </div>' +
                ' </div>' +
                '</div>' +
                ' </div>'
            $('#topTurnpay').append(item);
        })
    })
})

$.getJSON("http://localhost:5555/product/topendtime", (data) => {
    $.each(data, (index, items) => {
        $.getJSON('http://localhost:5555/product/getimage/' + items.Id, (images) => {
            var item =
                '<div class="col-md-4 top_brand_left" style="padding-top: 20px">' +
                '<div class="hover14 column">' +
                '<div class="agile_top_brand_left_grid">' +
                '<div class="agile_top_brand_left_grid_pos">' +
                '</div>' +
                '<div class="agile_top_brand_left_grid1">' +
                '<figure>' +
                '<div class="snipcart-item block">' +
                '<div class="snipcart-thumb">' +
                ' <span style="margin-left: 60px">Giá mua ngay: ' + Number(items.PricePay).toLocaleString() + '</span>' +
                '<a href="single?id=' + items.Id + '" data-user-id="' + items.Id + '">' +
                '<img title=" " height="80" width="80" src="images/' + images[0].Image1 + '" />' +
                '</a>' +
                '<p>' + items.ProductName + '</p>' +
                '<div class="stars">' +
                ' <i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                '<i class="fa fa-star gray-star" aria-hidden="true"></i>' +
                '</div>' +
                ' <h4>' + Number(items.PriceNow).toLocaleString() +
                ' </h4>' +
                ' </div>' +
                '<div class="snipcart-details top_brand_home_details">' +
                '<a href="single?id=' + items.Id + '&idcategory=' + items.id_category + '">Đấu giá</a>' +
                '</div>' +
                ' </div>' +
                '</figure>' +
                ' </div>' +
                ' </div>' +
                '</div>' +
                ' </div>'
            $('#topEndtime').append(item);
        })
    })
})
var page = 1

$('#loadmore').on('click', () => {
    page = page + 1
    loadpage(page);
})


var loadpage = (page) => {
    $.getJSON("http://localhost:5555/product/pagination/" + page, (data) => {
        $.each(data, (index, items) => {
            $.getJSON('http://localhost:5555/product/getimage/' + items.Id, (images) => {
                var item =
                    '<div class="col-md-4 top_brand_left" style="padding-top: 20px">' +
                    '<div class="hover14 column">' +
                    '<div class="agile_top_brand_left_grid">' +
                    '<div class="agile_top_brand_left_grid_pos">' +
                    '</div>' +
                    '<div class="agile_top_brand_left_grid1">' +
                    '<figure>' +
                    '<div class="snipcart-item block">' +
                    '<div class="snipcart-thumb">' +
                    ' <span style="margin-left: 60px">Giá mua ngay: ' + Number(items.PricePay).toLocaleString() + '</span>' +
                    '<a href="single?id=' + items.Id + '" data-user-id="' + items.Id + '">' +
                    '<img title=" " height="80" width="80" src="images/' + images[0].Image1 + '" />' +
                    '</a>' +
                    '<p>' + items.ProductName + '</p>' +
                    '<div class="stars">' +
                    ' <i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                    '<i class="fa fa-star blue-star" aria-hidden="true"></i>' +
                    '<i class="fa fa-star gray-star" aria-hidden="true"></i>' +
                    '</div>' +
                    ' <h4>' + Number(items.PriceNow).toLocaleString() +
                    ' </h4>' +
                    ' </div>' +
                    '<div class="snipcart-details top_brand_home_details">' +
                    '<a href="single?id=' + items.Id + '&idcategory=' + items.id_category + '">Đấu giá</a>' +
                    '</div>' +
                    ' </div>' +
                    '</figure>' +
                    ' </div>' +
                    ' </div>' +
                    '</div>' +
                    ' </div>'
                $('#payment').append(item);
            })
        })
    })
}

loadpage(1);

// $('a').on('click', (e) => {
//     e.preventDefault();
//     var pageref = $(this).attr('href');
//     console.log('a', pageref);
//     callPage(pageref)
// })

// function callPage(pageRefInput) {
//     console.log('aaaaaaaa', pageRefInput)
//     $.ajax({
//         url: pageRefInput,
//         type: 'GET',
//         dataType: 'text/html',
//         success: (res) => {
//             $('#pageload').html(res);
//         },
//         error: (err) => {
//             console.log(err);
//         }
//     })
// }

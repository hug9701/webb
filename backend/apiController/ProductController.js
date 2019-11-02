var express = require('express');
var productRepo = require('../response/ProductQData');

var router = express.Router();

router.get('/pagination/:page', (req, res) => {
    console.log('page`11111111111111111:', req.params.page)
    productRepo.LoadPage(req.params.page).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/topturnpay', (req, res) => {
    productRepo.TopTurnPay().then((rows) => {
        res.json(rows)
    }).catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console');
    })
})

router.get('/toppricenow', (req, res) => {
    productRepo.TopPriceNow().then((rows) => {
        res.json(rows)
    }).catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console');
    })
})

router.get('/topendtime', (req, res) => {
    productRepo.TopEndTime().then((rows) => {
        console.log(rows)
        res.json(rows)
    }).catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console');
    })
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    if (req.params.id) {
        var id = req.params.id;
        productRepo.load(id).then((rows) => {
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.json('error');
        });
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});

router.get('/searchproduct/:name', (req, res) => {
    if( req.params.name) {
        var name = req.params.name
        productRepo.SearchNameProduct(name).then((rows) => {
            res.json(rows);
        }).catch((err) => {
            console.log(err);
            res.statusCode = 500;
            res.json('error')
        })
    }
})

// router.post('/autoAdd10minutes', (req, res) => {
//     productRepo.AutoAdd10Minutes
// })

router.post('/create', (req, res) => {
    var message = {
        message: 'Create success'
    }
    productRepo.AddProduct(req.body).then((rows) => {
        res.send(message);
    }).catch((err) => {
        console.log(err);
    })
});

router.get('/category-from-product/:id', (req, res) => {
    productRepo.GetCategoryFromProduct(req.params.id).then((rows) => {
        res.json(rows)
    }).catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console');
    })
})

router.get('/getimage/:id', (req, res) => {
    productRepo.GetImage(req.params.id).then((image) => {
        res.json(image);
    }).catch((err) => {
        console.log(err);
    })
})

// router.post('/', (req, res) => {
// 	categoryRepo.add(req.body)
// 		.then(insertId => {
// 			var poco = {
// 				CatID: insertId,
// 				CatName: req.body.CatName
// 			};
// 			res.statusCode = 201;
// 			res.json(poco); 
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.statusCode = 500;
// 			res.end();
// 		});
// });


// router.delete('/:id', (req, res) => {
// 	if (req.params.id) {
// 		var id = req.params.id;

// 		if (isNaN(id)) {
// 			res.statusCode = 400;
// 			res.end();
// 			return;
// 		}

// 		categoryRepo.delete(id).then(affectedRows => {
// 			res.json({
// 				affectedRows: affectedRows
// 			});
// 		}).catch(err => {
// 			console.log(err);
// 			res.statusCode = 500;
// 			res.json('error');
// 		});
// 	} else {
// 		res.statusCode = 400;
// 		res.json('error');
// 	}
// });

module.exports = router;

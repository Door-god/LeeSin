
module.exports = function (app) {
    app.get('/list', function (req, res) {
        res.status(200).send({
            status: 200,
            data: [{
                id: '0001',
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }]
        });
    });
    app.get('/login', function(req, res){
        res.send('login!!');
    });
    app.get('/admin', function(req, res){
        res.send('admin!!');
    });
}

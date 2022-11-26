const express = require('express');
const app = express();
const port = 3000;

const goodsRouter = require('./routes/goods.js')
const cartsRouter = require('./routes/carts.js')
const connect = require('./schemas')
connect()

app.use(express.json()) //Request 객체 안에 있는 response body 사용하기 위해 선언해야 함
app.use('/api', [goodsRouter, cartsRouter])

app.post('/', (req, res) =>{
    console.log(req.body)

    res.send('post method')
})

app.get('/', (req, res) => {
    console.log(req.query)

    res.send('req ok')
})

app.get('/:id', (req, res) => {
    console.log(req.params)

    res.send(':id url ok')
})


app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});
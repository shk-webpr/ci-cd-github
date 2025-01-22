import dayjs from 'dayjs';
import express from 'express';

const app     = express()
const port    = 3000

app.get('/', (req: any, res: any) => {
    res.send(`${dayjs().format('YYYY-MM-DD')} Hello ${process.env.USER_NAME}!`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

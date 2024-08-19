const userRouters = require("./user")
const productRouter = require('./product')
const intiRouters = (app)=>{
    app.use('/api/user', userRouters)
    app.use('/api/product', productRouter )
}
module.exports = intiRouters
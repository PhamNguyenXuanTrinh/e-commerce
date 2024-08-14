const userRouters = require("./user")

const intiRouters = (app)=>{
    app.use('/api/user', userRouters)
}
module.exports = intiRouters
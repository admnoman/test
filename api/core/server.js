const app = require('./app')
const PORT = 8000;
app.listen(PORT, () => {
    console.log("server is running of port: ", PORT)
})
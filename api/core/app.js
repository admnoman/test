const express = require('express')
const app = express()
const cors = require('cors')
// const routes = require('../routes')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "build")
  res.header("Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,PATCH,OPTIONS HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next()
})

app.use("/test", (req, res) => {
  res.send({ data: "Hi there" })
})


// app.use("/v1/create", routes.Create);
// app.use("/v1/update", routes.Update);
// app.use("/v1/delete", routes.Delete);
// app.use("/v1/getOne", routes.GetOne);
// app.use("/v1/getAll", routes.GetAll);
// app.use("/v1/login", routes.Login);
// app.use("/v1/register", routes.Register);
// app.use("/v1/admin_module", routes.Register);

module.exports = app;
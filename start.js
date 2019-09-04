const app = require("./app");

require('dotenv').config({ path: 'variables.env' });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, () => console.log(`Running on ${port}`));

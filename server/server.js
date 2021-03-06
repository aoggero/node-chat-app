let path = require('path');
let express = require('express');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();

app.use(express.static(publicPath));
app.listen(3000, () => {
	console.log(`Server running on port ${port}`);
});

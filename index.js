const express = require('express'),
	mongoose = require('mongoose');
const app = express();
const cors = require('cors');

mongoose
	.connect('mongodb+srv://kartik:kartik@morningnetwork.v8vdvxp.mongodb.net/?retryWrites=true&w=majority')
	.then(() => console.log('DB Connected!'))
	.catch((error) => console.log(error));

app.use(express.json());
app.use(cors());
const newsRoutes = require('./routes/news');
app.use(newsRoutes);

app.listen(3001, () => {
	console.log('server started at port 3001');
});

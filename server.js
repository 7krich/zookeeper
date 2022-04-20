const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// include css & javascript files when HTML file loads in get send file route below
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse income JSON data
app.use(express.json());

// when client navigates to host/api app will use router set up in apiRoutes
app.use('/api', apiRoutes);
// if / is the endpoint router will serve back HTML routes
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
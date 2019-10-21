const mongoose = require('mongoose');

const { DATABASE } = process.env;
mongoose.connect(`mongodb://localhost/${DATABASE}`, {});

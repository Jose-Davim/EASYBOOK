const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://scorpsgama:Beep4682e@tdwpsw.ngkrr.mongodb.net/TDWPSW';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connect(mongoURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));
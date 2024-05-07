const express = require('express');
const app = express();

const PORT = process.env.PORT || 4003 ;

app.get('/', (req,res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
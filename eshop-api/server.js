const express = require('express');
const app = express();

app.get('./getGroupCount', (req,res) =>{
    res.send('Group count is 93');
})
app.listen(3000,() => {
    console.log('Server started on 3000 port');
});
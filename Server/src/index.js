const http = require("http")
const {getCharById} =require("./controllers/getCharbyId");
const PORT = 3001

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split("/").at(-1)
        getCharById(res, +id);
    }
   
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})

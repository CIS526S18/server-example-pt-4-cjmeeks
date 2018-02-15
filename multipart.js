/**@module
 * 
 */


module.exports = multipart;

function multipart(req,res,next){
    var chunks = [];

    req.on('data', function(chunk){
        chunks.push(chunk);
    });

    req.on('end',function(){
        //TODO parse body
        var buffer = Buffer.concat(chunks);
        var match = /boundary=(.+);?/.exec(req.headers['content-type']);
        if(match){
            //TODO: Parsing body
            req.body = parseMultipartBody(match[0]);
            next(req,res);
        }else{
           res.statusCode = 500;
           res.end("Server error");
        }
    });

    req.on('error', function(err){
       console.error(err);
       res.statusCode = 500;
       res.end("server error");
    });

}
const errorHandler =(err,req,res,next)=>
{
    const stastusCode=res.stastusCode ? res.stastusCode: 500;
    res.status(stastusCode);
    res.json({
        message: err.message,
        stack: process.env.Node_ENV ==='production' ? null :err.stack
    })
}

module.exports={
    errorHandler
}

//This file is used for exception handling. Instead of using try-catch blocks in every function, we have implemented exception handling separately as a utility.
const asynchandler = (requesthandler) =>{
return (req,res,next) =>{
    Promise.resolve(requesthandler(req,res,next)).catch(next);
}
}

export{asynchandler};
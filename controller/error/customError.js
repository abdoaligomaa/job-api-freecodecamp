class CustomError extends Error{
    constructor(message,statausCode){
        this.message=message
        this.statausCode=statausCode
    }
}

module.exports=CustomError
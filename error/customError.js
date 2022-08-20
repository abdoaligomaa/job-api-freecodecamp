class CustomError extends Error {
    constructor(message,statausCode){
    super(message)
        this.statausCode=statausCode
    }
}

module.exports=CustomError
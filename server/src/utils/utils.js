export function throwResError (message, res){
    return res.json({
        error: message
    });
}
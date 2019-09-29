const fs = require("fs")
const path = require("path")

module.exports = function(html_path,options){
    var htmlpath = html_path && path.join(rootpath(__dirname),"/"+html_path) || path.join(rootpath(__dirname),"/static")
    return async function htmlRender(ctx,next){
        ctx.html = function(file_path){
            this.type = "text/html"
            this.body = fs.createReadStream(htmlpath +"/"+ file_path)
        }
        await next()
    }
}

function isDesktop(url){
    var arr = url.split("\\")
    return arr[arr.length-2] === "Desktop"
}
// 获取根目录
function rootpath(url){
    var s = "/"
    var cache = []
    while(!isDesktop(url)){
        s += "../"
        cache.push(url)
        url = path.join(__dirname,s)
    }
    return cache.pop()
}
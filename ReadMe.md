##### This is a plugin that can return html files directly in koa.
##### Instructions
```javascript
const koa = reuqire("koa")
const Router = require("koa-router")
const app = new koa()
const router = new Router()
const htmlRender = require("koa-html-render")
app.use(htmlRneder()) // The default path is in the static folder under the root directory, you can customize the directory to store html files.
// If you set app.use(htmlRender("html")), the directory where the html file is stored is in the html folder of the project root directory.
server.use(router.routes()).use(router.allowedMethods())
router.get("/home",async ctx=>{
	await ctx.html("html/demo.html") // The meaning is to return to the client in the root directory of the project, in the static directory, in the html folder named demo.html
})
app.listen(3000)
console.log("app is running at http://localhost:3000")
```
##### Download
```
npm i koa-html-render
```

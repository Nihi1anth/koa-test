const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
    ctx.body = ctx.body = ctx.response.url;
});

app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000, () => {
    console.log("Server started on port 3000...");
});
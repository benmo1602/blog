#node  中间件

    1. 应用中间件
        app.use(
            (request, response, next) => {
                console.log();
                //response.send("holle");
                console.log("应用中间件1");
                if (request.query.id == 3) {
                next();
                }
            },
            (request, response, next) => {
                console.log("应用中间件2");
            }
        );


    2.路由中间件
        router.get("/user/:id", (request, response) => {
            response.sendFile(__dirname + "./app.html");
            // throw new Error("404"); //抛出错误
        });
        app.use("/api", router);

    3. err
    app.use((err, request, response, next) => {
        console.log(err.stack);
        response.status(500).send("something broke!");
    });

    4. 内置中间件
        app.use(express.static("public"));

            app.listen(8000, () => {
            console.log("losclhost: 8000");
        });

    5.第三方 中间件

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

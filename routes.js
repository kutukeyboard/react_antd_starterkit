const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("productDetail", "/productDetail/:id", "productDetail");

routes.add("productCatalog", "/productCatalog/:p", "productCatalog");

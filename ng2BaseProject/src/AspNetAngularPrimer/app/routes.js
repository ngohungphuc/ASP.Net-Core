"use strict";
var router_1 = require("@angular/router");
var home_1 = require("./home");
var pageNotFound_1 = require("./pageNotFound");
var dynamicPage_1 = require("./dynamicPage");
var routes = [
    { path: "home", component: home_1.HomePage },
    { path: "dynamic", component: dynamicPage_1.DynamicPage },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "", component: home_1.HomePage },
    { path: '**', component: pageNotFound_1.PageNotFound }
];
exports.AppModuleRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=routes.js.map
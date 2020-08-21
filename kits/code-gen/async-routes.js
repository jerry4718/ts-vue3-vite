const path = require('path');
const fs = require('fs');
const mkdirSync = require('../mkdir');
const ergodic = require('../ergodic');


const pagesPath = path.join(__dirname, '../../src/pages');
const routerPath = path.join(__dirname, '../../src/routes');

const pathPrefix = path.relative(routerPath, pagesPath)

const abstractComponents = {
    '/config/thirdConfigList': '/config/thirdConfigList/:configType'
}

function getRoutePath(routePath) {
    return abstractComponents[routePath] || routePath;
}

const routesArr = [];

ergodic.dirSync(pagesPath, function(file_name, full_path, dir) {

    const routePath = path.relative(routerPath, dir).replace(pathPrefix, "");
    const componentPath = path.relative(routerPath, full_path);


    routesArr.push(`    {
        path: "${getRoutePath(routePath)}",
        // @ts-ignore
        component: defineAsyncComponent(() => import("${componentPath}")),
    },`);

})


const code = `import {defineAsyncComponent} from 'vue';

export const asyncRoutes = [
${routesArr.join("\n")}
];`

fs.writeFileSync(path.join(routerPath, "async-routes.ts"), code);
console.log(code);
/*
*/



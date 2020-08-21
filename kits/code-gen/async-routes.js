const path = require('path');
const fs = require('fs');
const mkdirSync = require('../mkdir');
const ergodic = require('../ergodic');


const pagesPath = path.join(__dirname, '../../src/pages');
const routerPath = path.join(__dirname, '../../src/routes');

const pathPrefix = path.relative(routerPath, pagesPath);

const concurrentMapper = {
    '/config/thirdConfigList': [
        '/config/thirdConfigList/AliyunOSS',
        '/config/thirdConfigList/QiniuCloud',
    ],
};

const routesArr = [];

ergodic.dirSync(pagesPath, function(file_name, full_path, dir) {

    const routePath = path.relative(routerPath, dir).replace(pathPrefix, "");
    const componentPath = path.relative(routerPath, full_path);

    console.log(routePath);

    if (concurrentMapper[routePath]) {
        concurrentMapper[routePath].forEach(s => {
            routesArr.push(`    // @ts-ignore\n    "${s}": defineAsyncComponent(() => import("${componentPath}")),`);
        })
    } else {
        routesArr.push(`    // @ts-ignore\n    "${routePath}": defineAsyncComponent(() => import("${componentPath}")),`);
    }
})


/*import {AsyncComponentLoader, AsyncComponentOptions, Component, ComponentPublicInstance} from "@vue/runtime-core";

function convertAnonymousAsyncComponent<T extends Component = {new (): ComponentPublicInstance;}>(source: AsyncComponentLoader<T> | AsyncComponentOptions<T>): T {
    return defineAsyncComponent(source);
}*/

const code = `import {defineAsyncComponent} from 'vue';

const concurrentMapper = {

};

const routesMapper = {
${routesArr.join("\n")}
};

export const asyncRoutes = [
];`

fs.writeFileSync(path.join(routerPath, "async-routes.ts"), code);
console.log(code);
/*
*/



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

const routesMapperKV = [];


ergodic.dirSync(pagesPath, function(file_name, full_path, dir) {

    const routePath = path.relative(routerPath, dir).replace(pathPrefix, "");
    const componentPath = path.relative(routerPath, full_path);

    console.log(routePath);

    routesMapperKV.push(`    // @ts-ignore\n   ['${routePath}', () => import("${componentPath}")],`);

    // if (concurrentMapper[routePath]) {
    //     concurrentMapper[routePath].forEach(s => {
    //         routesArr.push(`    // @ts-ignore\n    "${s}": defineAsyncComponent(() => import("${componentPath}")),`);
    //     })
    // } else {
    //     routesArr.push(`    // @ts-ignore\n    "${routePath}": defineAsyncComponent(() => import("${componentPath}")),`);
    // }
})


/*import {AsyncComponentLoader, AsyncComponentOptions, Component, ComponentPublicInstance} from "@vue/runtime-core";

type AnonymousAsyncComponent = new () => ComponentPublicInstance;

function convertAnonymousAsyncComponent<T extends Component = {new (): ComponentPublicInstance;}>(source: AsyncComponentLoader<T> | AsyncComponentOptions<T>): T {
    return defineAsyncComponent(source);
}*/

const code = `export const dynamicRouteLoaders = new Map<string, () => Promise<any>>([
    ${routesMapperKV.join('\n')}
]);
`

fs.writeFileSync(path.join(routerPath, "dynamic-route-loaders.ts"), code);
console.log(code);
/*
*/



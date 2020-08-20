const path = require('path');
const fs = require('fs');
const mkdirSync = require('../mkdir');

const srcPath = path.join(__dirname, '../../src');

const args = process.argv.slice(2);

console.log(args);

const params = args.filter(a => a.indexOf('=') > -1)
    .reduce((m, p) => {
        let [k, v] = p.split('=', 2);
        m[k] = v;
        return m;
    }, {});

const pagePath = path.join(srcPath, params.path || 'pages');

args.filter(a => a.indexOf('=') < 0)
    .forEach(dir => {
        const fileName = dir.split(/\//g).pop();

        const componentName = dir.replace(/[\/A-Z]/g, t => ['-', t.replace('/', '').toLowerCase()].join(''))

        const fileDir = path.join(pagePath, dir);

        mkdirSync(fileDir);

        const jsFilePath = path.join(fileDir, `${fileName}.vue`);
        const cssFilePath = path.join(fileDir, `${componentName}.css`);

        // 兼容windows的路径
        const jsFileRelative = path.relative(srcPath, jsFilePath).replace(/\\/g, '\/');
        const cssFileRelative = path.relative(fileDir, cssFilePath).replace(/\\/g, '\/').replace(/\.scss$/, '.css');
        const className = fileName.replace(/^./, t => t.toUpperCase()).replace(/[-_]./g, t => t.split('').pop().toUpperCase())

        console.log({
            path: fileDir,
            name: fileName,
            class: className,
            js: jsFileRelative,
            css: cssFileRelative,
            componentName,
        });

        fs.writeFileSync(jsFilePath, `
<template>
    <div class="${componentName}">
        <div>${dir}</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "./${cssFileRelative}";

interface ${className}Props {

}

export default defineComponent({
    name: "${className}",
    setup(props: ${className}Props) {
        return {};
    },
});
</script>

<style scoped>

</style>`.trim());

        fs.writeFileSync(cssFilePath, `.${componentName} {}`.trim());

    });
console.log();

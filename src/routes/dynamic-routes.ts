import { dynamicRouteLoaders } from "./dynamic-route-loaders";
import { RouteRecordRaw } from "vue-router";
import { defineComponent, h, defineAsyncComponent } from "vue";
import { MD5Util } from "../common/utils/MD5Util";

export const routeWithLoader = new Map([
  [/(\/|)config\/thirdConfigList\/[^/]*?/, "/config/thirdConfigList"],
]);

const pathSplitor = "_";
const tagsSplitor = "_";
const pathTagsSplitor = "$";

const firstSlashReg = /^\//;
const rpathSplitReg = /[./]|(?=[A-Z])/g;

const splitorsReg1 = /([^a-zA-Z0-9]|^)./g;
const splitorsReg2 = /[^a-zA-Z0-9]/;

const camelReg1 = /[^a-zA-Z][a-z]/g;
const camelReg2 = /[a-z]$/;

function parseRouteTokens(source: string): string[] {
  return source
    .replace(firstSlashReg, "")
    .split(rpathSplitReg);
}

function splitRoutePath(routePath: string) {
  return routePath.replace(/^(\/|)/, '/').split("?");
}

declare type DynamicRouteConfig = {
  realRoutePath: string,
  pathTokens: string[],
  tagsTokens: string[],
};

export function parseRoutePath(routePath: string, tags: string[] = []): DynamicRouteConfig {
  const [realRoutePath] = splitRoutePath(routePath);

  const pathTokens = parseRouteTokens(realRoutePath);

  const tagsTokens = tags.length ? [MD5Util.hex_md5(tags.join(tagsSplitor), 10)] : [];
  // tags.map(tag => parseRouteTokens(tag).join(tagsSplitor));

  return { realRoutePath, pathTokens, tagsTokens }
}

export function parseRouteName(routePath: string, tags: string[] = [], config: DynamicRouteConfig = parseRoutePath(routePath, tags)) {
  const { pathTokens, tagsTokens } = config;

  return [
    pathTokens.join(pathSplitor).toLowerCase(),
    ...(
      tagsTokens.length
        ? [pathTagsSplitor, ...tagsTokens]
        : []
    ),
  ]
    .join("");
}

export function parseComponentName(routePath: string, tags: string[] = [], config: DynamicRouteConfig = parseRoutePath(routePath, tags)) {
  const { pathTokens, tagsTokens } = config;

  return [
    ...pathTokens.map(token => token
      .replace(splitorsReg1, t => t.replace(splitorsReg2, "").toUpperCase())
      .replace(camelReg1, t => t.replace(camelReg2, it => it.toUpperCase()))
    ),
    ...(
      tagsTokens.length
        ? [tagsSplitor, ...tagsTokens]
        : []
    ),
  ]
    .join("");
}``

const routeRawCache = new Map<string, RouteRecordRaw>();

export function getRouteRaw(routePath: string, tags: string[] = [], config: DynamicRouteConfig = parseRoutePath(routePath, tags)): RouteRecordRaw | undefined {
  const { realRoutePath } = config;


  // 匹配loaderKey
  let finalLoaderKey = realRoutePath;
  for (let [loaderMatch, loaderKey] of routeWithLoader.entries()) {
    if (loaderMatch.test(realRoutePath)) {
      finalLoaderKey = loaderKey;
    }
  }

  const routeName = parseRouteName(routePath, tags, config);

  // 查询缓存中是否注册过当前route
  if (!routeRawCache.has(routeName)) {

    // 获取loader
    if (dynamicRouteLoaders.has(finalLoaderKey)) {

      const innerComponent = defineAsyncComponent(dynamicRouteLoaders.get(finalLoaderKey));

      const routeRecordRaw: RouteRecordRaw = {
        path: realRoutePath,
        name: routeName,
        component: defineComponent({
          name: parseComponentName(routePath, tags, config),
          setup() {
            return () => h(innerComponent)
          }
        }),
        meta: {
          keepAlive: true,
        }
      };

      routeRawCache.set(routeName, routeRecordRaw);

      return routeRecordRaw;
    } else {
      return {path: realRoutePath, redirect: '/404'};
    }
  }

  return undefined;
}


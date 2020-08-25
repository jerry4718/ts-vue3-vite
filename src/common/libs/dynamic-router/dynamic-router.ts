import { RouterOptions, Router, RouteRecordRaw, createRouter } from "vue-router";
import { defineComponent, h, defineAsyncComponent } from "vue";
import { MD5Util } from "../../utils/MD5Util";
import { dynamicRouteLoaders } from "../../../routes/dynamic-route-loaders";

interface Parsers {
  routeName: (routePath: string, tags: string[]) => string;
  componentName: (routePath: string, tags: string[]) => string;
  routeRaw: (routePath: string, tags: string[]) => RouteRecordRaw;
  tags: (tags: string[]) => string;
}

interface DynamicRouterOptions {
  installOptions: RouterOptions;
  componentLoaders: Map<string, () => Promise<any>>;
  parsers: Parsers;
}

// 保存已经被覆盖掉的原vue-router的属性
interface RouterPlace {

}

// 扩展的一些属性
interface DynamicRouterExpand {
  _: RouterPlace
}

// 扩展属性和原本Router的interface合并为DynamicRouter
declare type DynamicRouter = Router & DynamicRouterExpand;

const assign = Object.assign;

function createDynamicRouter(options: DynamicRouterOptions): DynamicRouter {
  const {installOptions, componentLoaders} = options;

  const router = createRouter(installOptions);

  const routerPlace: RouterPlace = {};

  const expand: DynamicRouterExpand = {
    _: routerPlace,
  };

  return assign(router, expand);
}

export namespace RouterUtil {

  export const routeWithLoader = new Map([
    [/(\/|)config\/thirdConfigList\/[^/]*?/, "/config/thirdConfigList"],
  ]);

  const pathSeparator = "_";
  const tagsSeparator = "_";
  const pathTagsSeparator = "$";

  const firstSlashReg = /^\//;
  const pathSplitReg = /[./]|(?=[A-Z])/g;

  const SeparatorsReg1 = /([^a-zA-Z0-9]|^)./g;
  const SeparatorsReg2 = /[^a-zA-Z0-9]/;

  const camelReg1 = /[^a-zA-Z][a-z]/g;
  const camelReg2 = /[a-z]$/;

  export function parseTag(tags: string[] | string = []) {
    if (!Array.isArray(tags)) {
      tags = [tags];
    }
    return tags.join(tagsSeparator);
  }

  function parseRouteTokens(source: string): string[] {
    return source
      .replace(firstSlashReg, "")
      .split(pathSplitReg);
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

    const tagsTokens = tags.length ? [MD5Util.hex_md5(tags.join(tagsSeparator), 10)] : [];
    // tags.map(tag => parseRouteTokens(tag).join(tagsSeparator));

    return { realRoutePath, pathTokens, tagsTokens }
  }

  export function parseRouteName(routePath: string, tags: string[] = [], config: DynamicRouteConfig = parseRoutePath(routePath, tags)) {
    const { pathTokens, tagsTokens } = config;

    return [
      pathTokens.join(pathSeparator).toLowerCase(),
      ...(
        tagsTokens.length
          ? [pathTagsSeparator, ...tagsTokens]
          : []
      ),
    ]
      .join("");
  }

  export function parseComponentName(routePath: string, tags: string[] = [], config: DynamicRouteConfig = parseRoutePath(routePath, tags)) {
    const { pathTokens, tagsTokens } = config;

    return [
      ...pathTokens.map(token => token
        .replace(SeparatorsReg1, t => t.replace(SeparatorsReg2, "").toUpperCase())
        .replace(camelReg1, t => t.replace(camelReg2, it => it.toUpperCase()))
      ),
      ...(
        tagsTokens.length
          ? [tagsSeparator, ...tagsTokens]
          : []
      ),
    ]
      .join("");
  } ``

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
        return { path: realRoutePath, redirect: '/404' };
      }
    }

    return undefined;
  }
}
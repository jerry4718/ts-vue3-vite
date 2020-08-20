import type {MenuProto} from "../../model/MenuProto";

export function appendParams() {

}

export function hasParams(url: string) {
    return url.indexOf('?') > -1
}

declare type ParseRouteParam = { key: string, value: string };

export function parseMenuRoute(menu: MenuProto, params: ParseRouteParam[] = []) {
    return parseAbsRoute(menu.moduleUrl, params.concat([{key: `menuId`, value: String(menu.id)}]));
}

export function parseAbsRoute(url: string, params: ParseRouteParam[] = []) {
    let newUrl = url.replace(/^(|\/)/, '/');
    if (params.length) {
        newUrl += (hasParams(url) ? "&" : "?");
        newUrl += params
            .map(p => `${p.key}=${p.value}`)
            .join("&");
    }
    return newUrl;
}
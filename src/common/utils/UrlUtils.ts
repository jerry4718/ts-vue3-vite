import type {MenuProto} from "../../model/MenuProto";

export function appendParams() {

}

export function hasParams(url: string) {
    return url.indexOf('?') > -1
}

export function parseMenuRoute(menu: MenuProto) {
    return parseAbsRoute(menu.moduleUrl, [{key: `menuId`, value: String(menu.id)}]);
}

export function parseAbsRoute(url: string, params: { key: string, value: string }[] = []) {
    let newUrl = url.replace(/^(|\/)/, '/');
    if (params.length) {
        newUrl += (hasParams(url) ? "&" : "?");
        newUrl += params
            .map(p => `${p.key}=${p.value}`)
            .join("&");
    }
    return newUrl;
}
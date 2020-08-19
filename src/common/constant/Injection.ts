import {InjectionKey, Ref} from "vue";
import {MenuProto} from "../../model/MenuProto";

export namespace Injection {
    declare type InjectionRefKey<T> = InjectionKey<Ref<T>>

    export namespace NavMenu {
        export const GET_OR_FROM_CACHE: InjectionKey<(parentId: number) => Promise<MenuProto[]>> = Symbol("getOrFromCache");

        export const HEADER_MENUS: InjectionRefKey<MenuProto[]> = Symbol("headerMenus");
        export const HEADER_SELECTED: InjectionRefKey<number> = Symbol("headerSelected");
        export const UPDATE_HEADER_SELECTED: InjectionKey<(selected: number) => void> = Symbol("updateSelectedHeader");

        export const LEFTER_SELECTED: InjectionRefKey<number> = Symbol("lefterSelected");
        export const UPDATE_LEFTER_SELECTED: InjectionKey<(selected: number) => void> = Symbol("setLefterSelected");
    }
}
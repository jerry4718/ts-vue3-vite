import {InjectionKey, Ref} from "vue";
import {MenuProto} from "../../model/MenuProto";

export namespace Injection {
    declare type InjectionRefKey<T> = InjectionKey<Ref<T>>

    export namespace NavMenu {
        export const getOrFromCache: InjectionKey<(parentId: number) => Promise<MenuProto[]>> = Symbol();

        export const headerMenus: InjectionRefKey<MenuProto[]> = Symbol();
        export const headerSelected: InjectionRefKey<number> = Symbol();
        export const updateHeaderSelected: InjectionKey<(selected: number) => void> = Symbol();

        export const lefterSelected: InjectionRefKey<number> = Symbol();
        export const updateLefterSelected: InjectionKey<(selected: number) => void> = Symbol();
    }

    export namespace NavTab {
        export const keepAliveIncludes: InjectionRefKey<string[]> = Symbol();
        export const addKeepAlive: InjectionKey<(componentName: string) => void> = Symbol();
        export const removeKeepAlive: InjectionKey<(componentName: string) => void> = Symbol();
    }
}
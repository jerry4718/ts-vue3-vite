import {ref, isRef, Ref} from "vue";
import {UnwrapRef} from "@vue/reactivity";
import {VarUtil} from "./VarUtil";

export namespace Reacting {
    export function useState<T>(defaultValue: T) {
        const refer = ref(defaultValue);

        if (isRef(defaultValue)) {
            throw Error("use pro value only");
        }

        return [refer, (value: T) => {
            (refer as Ref<T>).value = value;
        }];
    }

    declare type UnwrapNestedRefs<T> = T extends Ref ? T : UnwrapRef<T>;

    declare type StateChange<T> = { [k in keyof T]?: T[k] };
    declare type StateSetter<T> = ((state: UnwrapNestedRefs<T>) => StateChange<T>);
    declare type StateOption<T> = StateSetter<T> | StateChange<T>;

    export function setState<T>(state: UnwrapNestedRefs<T>, setter: StateOption<T>) {
        if (VarUtil.isFunction(setter)) {
            setter = setter(state);
        }

        Object.keys(setter).forEach(k => {
            state[k] = setter[k];
        })
    }

    export function by<T>(state: UnwrapNestedRefs<T>) {
        return {
            setState(setter: StateOption<T>) {
                setState(state, setter);
            },
            state: state,
        }
    }
}
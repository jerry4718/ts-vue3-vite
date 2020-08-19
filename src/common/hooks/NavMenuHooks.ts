import {ref, onMounted} from 'vue';

import {MenuProto} from "../../model/MenuProto";
import {menuList} from "../api/api";

interface NavMenuHooksArgs {
    parentId: number,
    defaultFirst?: boolean,
    onChange?: (next: number) => void;
}

export function useMenus(args: NavMenuHooksArgs) {
    const {parentId, defaultFirst = true, onChange} = args;

    const menus = ref([] as MenuProto[]);
    const selected = ref(-1);

    function setMenus(newMenus: MenuProto[]) {
        menus.value = newMenus;
    }

    function setSelected(newSelected: number) {
        selected.value = newSelected;
    }

    (async() => {
        if (parentId === -1) {
            return;
        }

        const {data} = await menuList({parentId})

        setMenus(data as MenuProto[]);
        if (!(defaultFirst && data && data.length)) {
            return;
        }
        setSelected(data[0].id);

        if (!onChange) {
            return;
        }
        onChange(data[0].id);
    })();

    return {menus, selected, setSelected}
}
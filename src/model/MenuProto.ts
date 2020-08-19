export class MenuProto {
    id: number = 0;
    parentId?: number = 0;
    moduleUrl: string = '';
    moduleName: string = '';
    moduleDescribe: string = '';
    moduleSequence: number = 0;
    moduleIcon?: string = '';
    children?: MenuProto[] = [];
}
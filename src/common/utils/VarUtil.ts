export namespace VarUtil {
    export function is(variable: any, type: string): boolean {
        return typeOf(variable) === type;
    }

    export function typeOf(variable: any): string {
        let tag: string = Object.prototype.toString.call(variable);

        let match: string = tag.match(/(?<=\s)[\W\w]*(?=])/)[0];

        return match.toLowerCase();
    }

    export function isNumber(variable: any): variable is number {
        return is(variable, 'number');
    }

    export function isString(variable: any): variable is string {
        return is(variable, 'string');
    }

    export function isBoolean(variable: any): variable is boolean {
        return is(variable, 'boolean');
    }

    export function isObject(variable: any): variable is object {
        return is(variable, 'object');
    }

    export function isArray(variable: any): variable is Array<any> {
        if (Array.isArray) {
            return Array.isArray(variable);
        }
        return is(variable, 'array');
    }

    export function isFunction(variable: any): variable is Function {
        return is(variable, 'function');
    }

    export function isSymbol(variable: any): variable is symbol {
        return is(variable, 'symbol');
    }

    export function isRegExp(variable: any): variable is RegExp {
        return is(variable, 'regexp');
    }

    export function isDate(variable: any): variable is Date {
        return is(variable, 'date');
    }

    export function isError(variable: any): variable is Error {
        return is(variable, 'error');
    }

    export function isUndefined(variable: any): variable is undefined {
        return is(variable, 'undefined');
    }

    export function isNull(variable: any): variable is null {
        return is(variable, 'null');
    }
}

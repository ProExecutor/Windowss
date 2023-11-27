export function uint8ArrayToString(uint8Arr: Uint8Array) {
    const length = uint8Arr.length;
    let result = '';
    for (let i = 0; i < length; i += 65535) {
        let addition = 65535;
        if (i + 65535 > length) {
            addition = length - i;
        }
        result += String.fromCharCode.apply(
            null,
            uint8Arr.subarray(i, i + addition) as unknown as number[]
        );
    }
    return result;
}

export function uint8ArrayToBase64(uint8Arr: Uint8Array, mimeType: string) {
    const str = uint8ArrayToString(uint8Arr);
    const base64String = btoa(str);
    return `data:${mimeType};base64,` + base64String;
}

export function base64ToUint8Array(base64) {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer as Uint8Array;
}

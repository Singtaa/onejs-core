/// <reference path="../definitions/index.d.ts" />

export function btoa(text: string): string {
	// return CS.OneJS.CommonGlobals.btoa(text);
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	let str = text;
	let output = '';

	for (let i = 0; i < str.length; i += 3) {
		let block = (str.charCodeAt(i) << 16) | ((i + 1 < str.length ? str.charCodeAt(i + 1) : 0) << 8) | (i + 2 < str.length ? str.charCodeAt(i + 2) : 0);
		output += chars[(block >> 18) & 0x3F] +
			chars[(block >> 12) & 0x3F] +
			(i + 1 < str.length ? chars[(block >> 6) & 0x3F] : '=') +
			(i + 2 < str.length ? chars[block & 0x3F] : '=');
	}

	return output;
}

// function uint8ArrayToString(uint8Array) {
//     const chars: any = [];
//     for (let i = 0; i < uint8Array.length; i++) {
//         chars.push(String.fromCharCode(uint8Array[i]));
//     }
//     return chars.join('');
// }

export function atob(base64: string): string {
	// return CS.OneJS.CommonGlobals.atob(base64);
	// return CS.System.Text.Encoding.UTF8.GetString(CS.System.Convert.FromBase64String(base64))
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	let str = base64.replace(/=+$/, '');
	let output = '';

	if (str.length % 4 == 1) {
		throw new Error('Invalid base64 string');
	}

	for (let bc = 0, bs = 0, buffer, idx = 0; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
		buffer = chars.indexOf(buffer);
	}

	return output;
}
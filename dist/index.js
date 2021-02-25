'use strict';
const createHash = require('create-hash');
class TaggedHash {
    constructor(tag) {
        const prefixHalf = createHash('sha256').update(tag).digest();
        const prefix = new Uint8Array([...prefixHalf, ...prefixHalf]);
        if (typeof createHash('sha256').copy === "function") {
            this.midState = createHash('sha256').update(prefix);
        }
        else {
            this.prefix = prefix;
        }
    }
    hash(data) {
        var _a, _b;
        const midState = (_b = (_a = this.midState) === null || _a === void 0 ? void 0 : _a.copy()) !== null && _b !== void 0 ? _b : createHash('sha256').update(this.prefix);
        return midState.update(data).digest();
    }
}
module.exports = TaggedHash;

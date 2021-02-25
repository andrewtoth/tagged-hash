'use strict';
const createHash = require('create-hash');
class TaggedHash {
    constructor(tag) {
        const prefixHalf = createHash('sha256').update(tag).digest();
        this.prefix = new Uint8Array([...prefixHalf, ...prefixHalf]);
    }
    hash(data) {
        return createHash('sha256').update(this.prefix).update(data).digest();
    }
}
module.exports = TaggedHash;

'use strict';
const sha = require('sha.js');
class TaggedHash {
    constructor(tag) {
        const prefixHalf = sha('sha256').update(tag).digest();
        this.prefix = new Uint8Array([...prefixHalf, ...prefixHalf]);
    }
    hash(data) {
        return sha('sha256').update(this.prefix).update(data).digest();
    }
}
module.exports = TaggedHash;

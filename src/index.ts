'use strict';
const sha = require('sha.js');

class TaggedHash {
  private prefix: Uint8Array;

  constructor(tag: string) {
    const prefixHalf = sha('sha256').update(tag).digest();
    this.prefix = new Uint8Array([...prefixHalf, ...prefixHalf]);
  }

  hash(data: Uint8Array): Uint8Array {
    return sha('sha256').update(this.prefix).update(data).digest();
  }
}

export = TaggedHash;

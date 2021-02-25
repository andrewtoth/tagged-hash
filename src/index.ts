'use strict';
const createHash = require('create-hash');

class TaggedHash {
  private prefix?: Uint8Array;
  private midState?: any;

  constructor(tag: string) {
    const prefixHalf = createHash('sha256').update(tag).digest();
    const prefix = new Uint8Array([...prefixHalf, ...prefixHalf]);
    if (typeof createHash('sha256').copy === 'function') {
      this.midState = createHash('sha256').update(prefix);
    } else {
      this.prefix = prefix;
    }
  }

  hash(data: Uint8Array): Uint8Array {
    const midState = this.midState?.copy() ?? createHash('sha256').update(this.prefix);
    return midState.update(data).digest();
  }
}

export = TaggedHash;

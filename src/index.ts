'use strict';
const createHash = require('create-hash');

interface Hash {
  update(data: Uint8Array | string): Hash;
  digest(): Uint8Array;
  copy?(): Hash;
}

class TaggedHash {
  private prefix: Uint8Array;
  private midState?: Hash;

  private createMidState(): Hash {
    return createHash('sha256').update(this.prefix);
  }

  constructor(tag: string) {
    const hash = createHash('sha256') as Hash;

    const prefixHalf = hash.update(tag).digest();
    this.prefix = new Uint8Array([...prefixHalf, ...prefixHalf]);

    if (hash.copy) {
      this.midState = this.createMidState();
    }
  }

  hash(data: Uint8Array): Uint8Array {
    const midState = this.midState?.copy?.() ?? this.createMidState();
    return midState.update(data).digest();
  }
}

export = TaggedHash;

declare class TaggedHash {
    private prefix;
    constructor(tag: string);
    hash(data: Uint8Array): Uint8Array;
}
export = TaggedHash;

declare class TaggedHash {
    private prefix;
    private midState?;
    private createMidState;
    constructor(tag: string);
    hash(data: Uint8Array): Uint8Array;
}
export = TaggedHash;

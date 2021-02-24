'use strict';
const tape = require('tape');
import TaggedHash from '../index';

const PREFIX = 'BIP0340/aux';
const HEX = '751e76e8199196d454941c45d1b3a323';
const HASH = '451e5f3792393c1ade84bee8db7ada1ea63711927d31f50c24bc257aad0669f1';

tape('test tagged hash', (t: any): void => {
  const taggedHash = new TaggedHash(PREFIX);
  const hash = taggedHash.hash(Buffer.from(HEX, 'hex')) as Buffer;
  t.plan(1);
  t.same(hash.toString('hex'), HASH);
});

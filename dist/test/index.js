'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tape = require('tape');
const index_1 = __importDefault(require("../index"));
const PREFIX = 'BIP0340/aux';
const HEX = '751e76e8199196d454941c45d1b3a323';
const HASH = '451e5f3792393c1ade84bee8db7ada1ea63711927d31f50c24bc257aad0669f1';
tape('test tagged hash', (t) => {
    const taggedHash = new index_1.default(PREFIX);
    const hash = taggedHash.hash(Buffer.from(HEX, 'hex'));
    t.plan(1);
    t.same(hash.toString('hex'), HASH);
});

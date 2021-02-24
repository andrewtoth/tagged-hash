# tagged-hash

An implementation of tagged hashes used in [BIP340](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki) and elsewhere.


## Example
``` javascript
let TaggedHash = require('tagged-hash')

let t = new TaggedHash('BIP0340/aux')

t.hash(Buffer.from('751e76e8199196d454941c45d1b3a323', 'hex')).toString('hex')
// '451e5f3792393c1ade84bee8db7ada1ea63711927d31f50c24bc257aad0669f1'
```

## License [MIT](LICENSE)

const test = require('node:test');
const assert = require('node:assert');
const { greet, farewell } = require('../src/greet');
test('greet', () => { assert.strictEqual(greet('World'), 'Hello, World!'); });
test('farewell', () => { assert.strictEqual(farewell('World'), 'Goodbye, World!'); });

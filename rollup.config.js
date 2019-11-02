import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import license from 'rollup-plugin-license';

// Run license() here, not in the objects of the exported 
// array.  Otherwise, the third party licence file gets 
// overwritten, not appended to.
let licensePlugin = license({
    banner: { content: { file: 'license.md' } },
    thirdParty: {
        output: 'license-3rd-party',
        includePrivate: true
    }
});

export default [{
    input: 'src/FluentDB.server.js',
    output: {
        file: 'dist/FluentDB.server.js',
        format: 'cjs'
    },
    plugins: licensePlugin
}, {
    input: 'src/FluentDB.js',
    output: {
        file: 'dist/FluentDB.client.js',
        format: 'esm'
    },
    plugins: licensePlugin
}, {
    input: 'test/tests.js',
    output: {
        file: 'test/tests.server.js',
        format: 'cjs'
    },
    plugins: licensePlugin
}];


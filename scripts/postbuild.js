//src/extensions/adapt-extensionName/scripts/postbuild.js
module.exports = function(fs, path, log, options, done) {
    /* where
    options = {
        sourcedir: "/path/to/root/src",
        outputdir: "/path/to/root/build",
        plugindir: "/path/to/root/src/extension/adapt-extensionName"
    };
   */
   log(JSON.stringify(options, null, 4));
   done();
};

const importCwd = require('import-cwd');

function loadModule(moduleId) {
  // Trying to load module normally (relative to plugin directory)
  try {
    return require(moduleId)
  } catch {
    // Ignore error
  }

  // Then, trying to load it relative to CWD
  return importCwd.silent(moduleId)
}

module.exports = {loadModule};
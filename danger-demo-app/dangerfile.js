import {message, danger} from "danger"
const { codeCoverage } = require("danger-plugin-code-coverage");


const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)

// Test code coverage of modified files.
schedule(codeCoverage());
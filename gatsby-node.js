/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { execSync } = require(`child_process`)

const exec = (cmd, ...params) => {
  console.log(`running: "${cmd}, ${params}"`)
  const res = execSync(cmd, params)
  return String(res)
}
exports.onPreBuild = function() {
  console.log(`aw yeah`)

  console.log(exec(`env`))

  console.log(`aw yeah`)
}

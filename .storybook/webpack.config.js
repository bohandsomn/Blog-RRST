const path = require("path")

module.exports = ({ config }) => {
  config.resolve.modules = [
    path.resolve(__dirname, "..", "src"),
    "node_modules",
  ]

  config.resolve.alias = {
    "@/packages": path.resolve(__dirname, "..", "src", "packages"),
    "@/components": path.resolve(__dirname, "..", "src", "components"),
  }

  return config
}
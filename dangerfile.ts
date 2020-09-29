import { danger } from "danger"

const docs = danger.git.fileMatch("**/*.md")
const app = danger.git.fileMatch("src/*")
const tests = danger.git.fileMatch("tests/*")

if (!docs.README) {
  warn("There's no README.md file here, maybe worth adding one?")
}

if ((app.modified || app.added || app.deleted) && !tests.modified && !tests.added) {
  warn("FYI, you've changed the code without changing the tests.")
}
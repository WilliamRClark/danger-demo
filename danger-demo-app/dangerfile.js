import {message, danger} from "danger"

const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)


const reviewersCount = danger.github.requested_reviewers.users.length
if (reviewersCount === 0) {
  fail(`🕵 Whoops, I don't see any reviewers. Remember to add one.`)
} else if (reviewersCount > 1) {
  warn(
    `It's great to have ${reviewersCount} reviewers. Remember though that more than 1 reviewer may lead to uncertainty as to who is responsible for the review.`
  )
}
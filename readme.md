# sctlib

Attempt to compile ressources and documentation, goals and actions to
continue building non exploitative, inclusive, reliable societies.

- visit [https://sctlib.org](https://sctlib.org)
- edit the content [https://sctlib.org/edit](https://sctlib.org/edit);
  open to everyone with a Github account
- explore the code & content, in the git repository [github/sctlib/sct](https://github.com/sctlib/sct)
  
# Open authoring of content

The `open-authoring` capacities are provided by [netlify-cms/open-authoring](https://www.netlifycms.org/docs/open-authoring).

It uses Github, to create Pull Requests (PRs), and forks of the
project for each user contributing to this repository.

From netlify-cms documentation:

> A user that logs into Netlify CMS, and does not have write access to
> this repo, will be asked by the CMS for permission to create a fork
> of this repo (or uses their existing fork, if they already have
> one). They are then presented with the normal CMS interface. The
> published content shown is from the original repo, so it stays
> up-to-date as changes are made.

> On the editorial workflow screen, the normal three columns are
> replaced by two columns instead — "Draft" and "Ready to Review".

> When a user makes changes to content in the CMS, the changes are made
> to a branch on their fork. In the editorial workflow screen, they
> see only their own pending changes. Once they're ready to submit
> their changes, they can move the card into the "Ready To Review"
> column to create a pull request. When the pull request is merged (by
> a repository maintainer via the GitHub UI), Netlify CMS deletes the
> branch and removes the card from the user's editorial workflow
> screen. Open Authoring users cannot publish entries through the CMS.

> Users who do have write access to the original repository continue
> to use the CMS normally. Unpublished changes made by users via Open
> Authoring are not visible on the editorial workflow screen, and
> their unpublished changes must be merged through the GitHub UI.


To sum up:
- everyone can contribute and submit changes
- admins are required to merge changes to the main branch of this repository
- users contribute with the git workflow, in their own repo's fork and
  branches, opening PRs when the content is ready
- discussion about changes can happen in github PR and issues


# How is it different than a wiki

- this project still requires admin users to authorize a final merge of content into the main branch.
- users need a github account to make changes
- changes and history are kept in git
- content is stored in files and folders, not in a database
- git project makes it simpler than a database, to be copied, shared etc.
- transparency in every edition of code and content with git

# Development

If you want to edit, the content, or the structure, of the site locally:
- install [gohugo.io](https://gohugo.io/)
- run `hugo server` inside this project.

# Deloyment

Currently we're using [netlify](https://netlify.com) to deploy this site.

Run the command `hugo`, to generate the `./public` folder. Building
this project, will create a folder ready to be copied for live
deployment on a (HTTPS) server (here netlify, connected to this
github repository changes).

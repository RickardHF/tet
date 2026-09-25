# Information for Instructors

Here are the steps required for using this in a workshop. Please note that some of the steps are important to do in the right order

> [!CAUTION]
> When delivering workshops we are not using the current repo (src repo). This repo is meant for keeping the work and history and should not be publically available.
> When delivering a workshop we create a new repo from this template that we show the participants.

## Setup 

| Step # | Title | Description |
| --- | --- | --- |
| 1 | Create public facing repo | Use the 'Use this template' button on the repository to create a new repo from this template. The new repo should be public and owned by the eficode demo org. |
| 2 | Make it a template | Go to the settings of the newly created repo and mark it as a template repo. This is a neccesary step for the rest of the setup, and is neccesary to do now; if you do it later then it might mess up the workshop set-up. |
| 3 | Enable workflows | Go to the `/.github/workflows/` folder. There you will see that two of the files are ending with `.disabled`. Remove the `.disabled` part of the filenames and commit. Note that if step 2 hasn't been done already then one of the workflows would be triggered at this point, which is bad because it makes changes and self deletes. |
| 4 | Run Pre-Init | Go to the Actions tab in GitHub. Select the workflow called 'Pre Initialization' and trigger a run. Ensure it succeedes. |

## Verification 

When you have gone through all the setup steps, verify that this is the state of your **new repo**.

- Repository is a template repository
- Commit history is only one commit 
- This 'INSTRUCTORS.md' file doesn't exist
- The 'slides' folder doesn't exist
- The '.github/workflows/pre-init.yml' file doesn't exist
- The '.github/workflows/init.yml' file exist
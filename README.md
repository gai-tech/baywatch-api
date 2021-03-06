# baywatch-api

## Pre-requesites 
- Node


### Local Environment
1. **Installing Node**
2. **Download the Latest Version of the Project -** If you're here, you have access to the git repository for this project. Installing this into a relevant folder simplifies accessing your terminal.
- `git clone https://github.com/gai-tech/baywatch-api.git`
- Open CMD and run `npm init` inside the repo
- Press `Enter` throughout setup and leave the default entries
- Run `npm install`
- Run `npm start` and the server is running
You can now send requests for Development to localhost:3000
3. **Installing PostMan -**
PostMan is an application that developers use to run requests to send any type of request in Postman. Create and save custom methods and send requests.
Download here [https://www.getpostman.com/](https://www.getpostman.com/).
4. **Developement -** Currently the project is being run through mid-stages of dev. This will require time to configure  a DataBase but will be done soon.

### Repository Structure
![](https://joshuag.sgedu.site/Images/workflow.PNG)

Provided you have used git before (if not, check out [this guide](https://guides.github.com/activities/hello-world/)), we have a defined branch structure for development on this theme. Our staging and production branches are a direct link to our staging and production codebase. It is therefore important to make sure what branches you are pushing your commits to and make sure you are following the repository workflow to seamlessly integrate merge requests and continuous integration.

To get started, change your current branch to the development directory using `git checkout --track origin/Development`. We have found you may first need to also execute `git fetch origin`. Once you are tracking the Development repository, you can now create or checkout the feature branch for your current task. The id for your feature branch can be obtained through the [trello](https://trello.com/b/O3VFjDu4/gai-tech-general) board. With this you can then execute `git checkout Feature/feature_id` and `git push -u origin/Feature/feature_id` and begin your development. Once you have completed the feature, make sure your travis ci build is successful and then create a pull request from the feature branch into development. An administrator will then handle merge conflicts and travis build errors and integrate your feature branch into the working Development environment.
# Save the world

## summary 
- [About](#about)
- [Commit messages](#commit-messages)
- [Main technologies](#main-technologies)
- [Install and run this project](#install-and-run-this-project)
- [Application architecture](#application-architecture)

---

### About 
  In this application you were born with the ability to become anyone you want. Now The world is in danger and you need to become a Marvel character and save the world! 

---

### Commit messages
  This application uses [convetional commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) as a standard for commit messages. 

---

### Main technologies
* [Typescript](https://www.typescriptlang.org/)
* [React](https://legacy.reactjs.org/docs/getting-started.html)
* [React-dom](https://pt-br.legacy.reactjs.org/docs/react-dom.html)
* [Next.js](https://nextjs.org/docs)
* [Tailwind CSS](https://tailwindcss.com/)
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Github Actions](https://docs.github.com/en/actions)

---

### Install and run this project
#### Global dependencies: 
  You need this global dependencie installed
  - `Node.js LTS v18.16.1` (or any higher version)

 Do you use `nvm`? You can run `nvm install` in this project folder, then you will install and use the most appropriate version of Node.js

 #### Local dependencies: 

After install this repository, you cannot forget to install local dependencies of this project.

```
npm install
```
---

### Application architecture
The architecture of this application is a layered architecture. There is 3 layers: repository, controller, view.

* View: This is the User interface layer. It receives the inputs from user, and show outputs.
* Controller: Responsible to controll data flow of application, it receives inputs from View layer and drive it to processing layer, then return the output. 
* Repository: Responsible to the processing part of application and acess external data (e.g., external API). In this application external data accessed is from Marvel API.

```
View --[Input]---> Controller --[input]---> Repository(processing)
Output <---------- Output <----------------- Output
```

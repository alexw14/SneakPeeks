# Sneak Peeks
Sneak Peeks is my first full MERN stack app. It is a platform for crowdfunding innovative projects. 

Visit here: https://sneakpeeks.herokuapp.com/

## About
Sneak Peeks is a crowdfunding platform for users to browse creative projects and contribute funding. Users can filter and search for projects by category. Users can also post projects and get funding from others. Users are able to see each project's current funding and number of backers. 

## Design
This app was planned using [Trello](https://trello.com/b/E4deMejS/sneak-peeks).

<img src="https://i.imgur.com/xpsW53M.png">
<img src="https://i.imgur.com/6yDOnFa.png">
<img src="https://i.imgur.com/NLGqt06.png">
<img src="https://i.imgur.com/S6TgsbI.png">

## Models
### User Model
```javascript
const userSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    biography: String,
    website: String,
    avatar: String
  },
  {
    timestamps: true
  }
);
```

### Product Model
```javascript
const projectSchema = new mongoose.Schema(
  {
    title: {type: String, required: true, unique: true},
    subtitle: String,
    description: {type: String, required: true},
    category: {
      type: String,
      enum: ['Art', 'Design', 'Film & Video', 'Game', 'Music', 'Publishing', 'Technology'],
      required: true
    },
    images: [String],
    fundingGoal: {type: Number, required: true},
    currentFunding: {type: Number, default: 0},
    fundingDuration: {type: Number, required: true},
    backers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },
  {
    timestamps: true
  }
);
```

## Technologies Used
* MongoDB
* Express.js
* React.js
* Node.js
* JSON Web Token
* Materialize CSS

## Installation
1. Clone the repo to your terminal ```https://github.com/alexw14/SneakPeeks.git```
2. Move into the directory
3. Install the npm packages using ```npm install```
4. Create a .env file in the directory and add the following:
```javascript
DATABASE_URL=<your m-lab database url>
SECRET=<your key>
```
5. Run the server ```node server.js```
6. Run ```npm start```
7. Navigate to ```localhost:3000``` in your browser.

## Next Steps
1. Implement a comment section to allow users to leave comments on projects.
2. Implement chat for users to communicate with the project owner.
3. Implement feature to upload multiple pictures for a project.
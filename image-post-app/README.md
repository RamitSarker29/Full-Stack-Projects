# Image Post App

A full-stack image-sharing application built with React and Node.js. Users can upload images with captions and view them in a feed.

## Screenshots

### Feed Page

![Feed Page](./screenshots/feed_page.png)

### Create Post Page

![Create Post Page](./screenshots/create_post_page.png)

## Features

- Upload images with captions.
- View uploaded posts in a feed.
- Store post information in MongoDB.
- Host uploaded images using ImageKit.
- Fetch posts from the backend API.
- Delete posts using their ID.

## Tech Stack

**Frontend**
- React
- Vite
- React Router
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- ImageKit

## Project Structure

```text
image-post-app/
├── Backend/
│   ├── src/
│   │   ├── db/
│   │   ├── models/
│   │   └── services/
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── CreatePost.jsx
│   │   │   └── Feed.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── screenshots/
│   ├── feed_page.png
│   └── create_post_page.png
│
├── .gitignore
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/RamitSarker29/Full-Stack-Projects.git
cd Full-Stack-Projects/image-post-app
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Start the backend:

```bash
node server.js
```

Backend URL: `http://localhost:3000`

### 3. Frontend Setup

Open another terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL provided by Vite, usually `http://localhost:5173`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/create-post` | Create a post with an image and caption |
| GET | `/posts` | Fetch all posts |
| DELETE | `/posts/:id` | Delete a post by ID |

## How It Works

1. The user selects an image and enters a caption.
2. Axios sends the form data to the Express backend.
3. Multer processes the uploaded image.
4. ImageKit uploads and hosts the image.
5. MongoDB stores the image URL and caption.
6. The Feed page fetches and displays the posts.

## Environment Variables

Keep your credentials private. Never upload your `.env` file to GitHub.

Make sure `.env` is included in `.gitignore`.

---

**Author:** Ramit Sarker

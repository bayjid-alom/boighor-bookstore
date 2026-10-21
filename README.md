## || `Boighor` - Online Bookstore

**Boighor** is a modern online bookstore where readers can explore books, discover popular titles, browse book details, and select their favourite books through a clean and user-friendly interface.

**Live Demo |** [বইঘর](http://boighor-bookstore.surge.sh/)



#### 📁 Project Structure

```
boighor-bookstore/
├── public/
│   ├── CNAME
│   └── books.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Links.jsx
│   │   ├── Banner/
│   │   │   └── Banner.jsx
│   │   ├── Books/
│   │   │   └── Books.jsx
│   │   ├── AvailableBooks/
│   │   │   └── AvailableBooks.jsx
│   │   ├── SelectedBooks/
│   │   │   ├── SelectedBooks.jsx
│   │   │   └── SelectedCard.jsx
│   │   ├── ReaderFavourites/
│   │   │   └── ReaderFavourites.jsx
│   │   ├── FeaturedAuthors/
│   │   │   └── FeaturedAuthors.jsx
│   │   ├── WhyChooseUs/
│   │   │   └── WhyChooseUs.jsx
│   │   └── Footer/
│   │       └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```
<br>



### 📌 About the Project

**Boighor** is a responsive online bookstore designed to help readers explore books, discover reader favourites, and learn about featured authors. The platform provides an interactive book selection experience with cart management, balance updates, and user feedback.

This project focuses on practicing **React component architecture, props, state management, dynamic data rendering, JSON data fetching, array methods, conditional rendering, cart functionality, responsive design, and reusable UI components.**

---

### ✨ Key Features

- **Dynamic Book Rendering:** Display book information, including titles, authors, prices, ratings, and images using JSON data.
- **Interactive Cart Management:** Add books to the cart, prevent duplicate selections, and manage selected books dynamically.
- **Dynamic Balance Updates:** Update the available balance based on book selection and removal.
- **Conditional Notifications:** Display toast notifications for successful actions and validation messages.
- **Selected Books Management:** View selected books and remove books from the cart when needed.
- **Reader Favourites:** Explore popular books and discover reader favourites.
- **Featured Authors:** Discover featured authors through a dedicated section.
- **Responsive Design:** Provide a consistent browsing experience across mobile, tablet, and desktop devices.

<br>

### ⚙️ Technology Stack

| Technology | Purpose |
|:---|:---|
| **HTML5** | Semantic structure |
| **Tailwind CSS** | Responsive styling and layouts |
| **DaisyUI** | Reusable UI components |
| **JavaScript (ES6)** | Application logic and interactivity |
| **React** | Component-based UI development |
| **Vite** | Development server and build tool |
| **JSON** | Storing and fetching book data |
| **React Toastify** | Toast notifications and user feedback |
| **Lucide React** | Icons and visual elements |
| **Git** | Version control |
| **GitHub** | Source code management |
| **Surge** | Project deployment |


<br>




#### 🌐 Build and Deployment

The project is built with Vite and can be deployed to Surge.

To install dependencies and generate a production-ready build, run:

    npm install
    npm run build

To deploy the application using Surge, run:

    npm install -g surge
    surge dist

For custom domain configuration, refer to the Surge deployment settings.

<br>




## 👨‍💻 Author

**Bayjid Alom**

> Every small step in coding brings you closer to something extraordinary.
<img src="src/public/assets/logo.svg">

# Arabic Markdown Note-Taking Application



## Overview
This project is a web-based note-taking application specifically designed for Arabic users. It allows users to create, edit, and manage markdown notes with a focus on Arabic language support.

live demo: [Mahbara](https://mahbara.up.railway.app/)
## Tech Stack

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## Features
- User authentication (register, login, password reset)
- Create and edit markdown notes
- Export notes to PDF
- User profile management
- Arabic language interface
- Responsive design for various devices

## Technologies Used
- PHP 7.4+
- MongoDB
- Composer for dependency management
- mPDF for PDF generation
- PHPMailer for email functionality

## Setup and Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/arabic-markdown-notes.git
   ```

2. Install dependencies:
   ```
   composer install
   ```

3. Set up your MongoDB database and update the configuration in `src/config.php`.

4. Set up environment variables:
   - `MONGO_URL`: Your MongoDB connection string
   - `DB_NAME`: Your database name

5. Ensure the `assets/profiles` directory is writable for user avatar uploads.

6. Set up a web server (e.g., Apache, Nginx) to serve the application from the `public` directory.

## Configuration
Update `src/config.php` with your specific settings:

## Project Structure
- `src/`: Contains the main application code
  - `Controllers/`: Application controllers
  - `Core/`: Core functionality and database connection
  - `Models/`: Data models
  - `views/`: View templates
- `public/`: Publicly accessible files
- `assets/`: Static assets (CSS, JS, images)
- `vendor/`: Composer dependencies

## To-Do List
- Forgeting password mail sending.


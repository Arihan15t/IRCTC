# IRCTC


## Tech Stack:
- Webserver: Node.js / Express.js
- Database: PostgreSQL
- ORM: Sequelize

## Database Schema:

### Tables:
- User
- Train
- Booking

#### 1.User Table:
| Field      | Type    | Description                                      |
|------------|---------|--------------------------------------------------|
| username   | string  | User's username                                  |
| email      | string  | User's email address                             |
| password   | string  | User's password (hashed)                         |
| role       | ENUM    | Role of the user (`'admin'`, `'user'`)           |

### 2.Train Table:
| Field      | Type    | Description                                      |
|------------|---------|--------------------------------------------------|
| train_num  | int     | Unique train number                              |
| src        | string  | Source station                                   |
| dest       | string  | Destination station                              |
| avl_seats  | int     | Number of available seats                        |

### 3.Booking Table:
| Field        | Type      | Description                                  |
|--------------|-----------|----------------------------------------------|
| booking_id   | int       | Auto-incremented booking ID                  |
| username     | string    | Username of the person booking the ticket    |
| train_num    | int       | Train number booked                          |
| booking_time | DATE      | Time of the booking                          |

## API Endpoints

### Authentication

- `POST /register`: Register a new user  
  Request: `{username, email, password}`  
  Response: `{message}`

- `POST /login`: Login with username and password  
  Request: `{username, password}`  
  Response: `{token}`

### Train Management (Admin)

- `POST /admin/trains`: Add a new train  
  Request: `{train_num, src, dest, avl_seats}, token, API_KEY`  
  Response: `{message}`

- `PUT /admin/trains`: Update the number of available seats  
  Request: `{train_num, avl_seats}, token, API_KEY`  
  Response: `{message}`

- `GET /trains`: Get all trains between source and destination  
  Request: `?source="source"&destination="destination", token`  
  Response: `{trains[]}`

### Booking

- `POST /book`: Book a ticket on a specified train  
  Request: `{train_num}, token`  
  Response: `{message}`

- `GET /ticket`: Get the booking details for a booking ID  
  Request: `?booking_id=int, token`  
  Response: `{booking}`

## Installation and Running the Server

- Clone the repository
- Run `npm install`
- Run `npm run startdb` to create the database and tables
- Run `npm server` to start the server




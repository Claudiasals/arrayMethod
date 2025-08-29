// Exercise 1: Basic User List
// Create a simple page that displays user information
// Requirements:
// - Fetch all users from https://jsonplaceholder.typicode.com/users
// - Use map() to create a list item for each user showing: name and email
// - Use filter() to show only users with .biz email domains
// - Display the filtered results in an unordered list <ul>
// - Add a paragraph showing the total count of filtered users


// Exercise 2: Todo Counter
// Build a todo statistics page
// Requirements:
// - Fetch todos from https://jsonplaceholder.typicode.com/todos
// - Use filter() to separate completed and incomplete todos
// - Use reduce() to count todos per user
// - Display in the DOM:
//   * Total number of todos
//   * Number of completed todos
//   * Number of incomplete todos
//   * User with most todos (use reduce() to find)
// - Show all results as simple text paragraphs


// Exercise 3: Post Titles Search
// Create a searchable list of posts
// Requirements:
// - Fetch all posts from https://jsonplaceholder.typicode.com/posts
// - Create a text input for searching
// - Use filter() and includes() to search post titles
// - Display matching posts as a simple list showing only titles
// - Use forEach() to append results to the DOM
// - Show count of matching posts above the list


// Exercise 4: Comments by Post
// Display posts with their comment counts
// Requirements:
// - Fetch posts from https://jsonplaceholder.typicode.com/posts (limit to first 10 using slice())
// - Fetch all comments from https://jsonplaceholder.typicode.com/comments
// - Use filter() to count comments for each post
// - Use map() to create list items showing:
//   * Post title
//   * Number of comments for that post
// - Display as a simple ordered list


// Exercise 5: Album and Photo Counter
// Create a summary page for albums and photos
// Requirements:
// - Fetch albums from https://jsonplaceholder.typicode.com/albums
// - Fetch photos from https://jsonplaceholder.typicode.com/photos
// - Use Promise.all() to fetch both simultaneously
// - Use reduce() to group photos by albumId
// - Use map() to display each album with:
//   * Album title
//   * Count of photos in that album
// - Use find() to identify the album with most photos
// - Display the album with most photos at the top as "Most Popular Album"
// - Show all albums as a simple list below
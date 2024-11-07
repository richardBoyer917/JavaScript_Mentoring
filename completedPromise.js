// Simulating asynchronous tasks with promises
const fetchUser = new Promise((resolve) =>
  setTimeout(resolve, 100, { id: 1, name: "Alice" })
);
const fetchPosts = new Promise((resolve) =>
  setTimeout(resolve, 200, [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ])
);
const fetchComments = new Promise((_, reject) =>
  setTimeout(reject, 150, "Failed to fetch comments")
);

// Using Promise.all() to wait for all tasks to complete
Promise.all([fetchUser, fetchPosts])
  .then(([user, posts]) => {
    console.log("All user and posts data fetched:", user, posts);
  })
  .catch((error) => console.error("Error fetching user or posts:", error));

// Using Promise.allSettled() to check which tasks succeeded or failed
Promise.allSettled([fetchUser, fetchPosts, fetchComments]).then((results) => {
  console.log("AllSettled results:");
  results.forEach((result, index) => {
    console.log(`Promise ${index + 1}:`, result);
  });
});

// Using Promise.any() to proceed as soon as any task succeeds
Promise.any([fetchUser, fetchPosts, fetchComments])
  .then((result) => console.log("First successful result from any:", result))
  .catch((error) => console.error("All promises failed:", error));

// Using Promise.race() to take action as soon as the first promise settles (resolved or rejected)
Promise.race([fetchUser, fetchComments])
  .then((result) => console.log("First to settle (resolved):", result))
  .catch((error) => console.error("First to settle (rejected):", error));

// Handling errors using catch
fetchComments.catch((error) =>
  console.error("Caught error while fetching comments:", error)
);

// Example of using finally() for cleanup actions
fetchUser
  .then((user) => console.log("User data:", user))
  .catch((error) => console.error("Error:", error))
  .finally(() => console.log("Cleanup action: FetchUser promise has settled"));

// Example using Promise.resolve() and Promise.reject()
const successfulPromise = Promise.resolve("Operation was successful");
const failedPromise = Promise.reject("Operation failed");

successfulPromise
  .then((result) => console.log(result)) // Output: Operation was successful
  .finally(() => console.log("Finished processing successfulPromise"));

failedPromise
  .catch((error) => console.error(error)) // Output: Operation failed
  .finally(() => console.log("Finished processing failedPromise"));

// Combining then and catch in a chain
fetchUser
  .then((user) => {
    console.log("User fetched:", user);
    return fetchPosts; // Chaining another promise
  })
  .then((posts) => console.log("Posts fetched:", posts))
  .catch((error) => console.error("Error in promise chain:", error))
  .finally(() => console.log("Completed promise chain"));

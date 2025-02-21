/**
 * Command handler for the echo command.
 * This is an async function that takes a text parameter and logs it to the console.
 * The async keyword allows this function to use 'await' for potential future
 * asynchronous operations like API calls or file operations.
 */
export const handleEcho = async (text: string) => {
  console.log(`Echo: ${text}`);
};

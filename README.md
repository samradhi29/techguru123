MCP Server Tester

This is a simple full-stack web application that tests any MCP (Model Context Protocol) server by sending a POST request and displaying the response—whether it's text or an image.

---
📌 Project Overview

This app helps users verify if their MCP server is live and working as expected. The user just enters the server URL and gets a response directly from the backend, which is responsible for relaying the message.

 Implementation Logic

Frontend (HTML, CSS, JavaScript)

- The frontend consists of a single `index.html` file with a clean UI styled using inline CSS.
- A user inputs the **MCP server URL** in a text field.
- On clicking **Test Server**, a POST request is sent to the backend `/api/test-mcp` endpoint with the input URL in the body.
- The backend returns a response which could be:
  - A **text message**
  - An **image URL**
- Based on the type, the frontend dynamically renders either:
  - Text (success)
  - An image `<img src="..."/>`
  - Or an error message in red

➤ Frontend Flow:
```text
User inputs MCP URL → Clicks button → JS calls backend → Shows success/image/error

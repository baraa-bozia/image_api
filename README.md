
This project provides a flexible (Image API) 

---

- Placeholder API for Prototyping
 Quickly generate placeholder images by specifying width and height directly in the URL. 

URL: GET /images

Response: 200 OK
Default: http://localhost:3000
URL :http://localhost:3000/images?filename=image2.webp&width=200&height=20

URL : http://localhost:3000/images?filename=t1.webp send a response with message :Missing one ore more of required parameters. Filename, width, and height are required.
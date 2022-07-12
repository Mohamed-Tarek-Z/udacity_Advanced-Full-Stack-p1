# Server is running at Port 3000
- http://localhost:3000/

# Endpoints
- http://localhost:3000/    `root`
- http://localhost:3000/images?imagename=encenadaport&width=500&height=500  `valid example`

# Where
- imagename: image filename or name
- width : should be number > 1
- height : should be number > 1


# Scripts
-   To install and download node_modules: `npm install`
-   To build: `npm run build`
-   To test: `npm run test`
-   nodemon: `npm run start`
-   To run both prettier and linter use: `npm run pal`
-   eslint: `npm run lint`
-   prettier: `npm run pret`

# images in folder named assets/images
# resized images in folder named assets/resized

# note

- images with extension rather than '*.jpg' considered a wrong file

- if the resized folder not created when the resize function run will create it
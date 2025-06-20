# Stage 1: Build React App
FROM node:18 AS build

WORKDIR /app
COPY . .

# Accept build-time environment variable from GitHub Actions
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Write it to .env for react-scripts to use
RUN echo "REACT_APP_API_URL=$REACT_APP_API_URL" > .env

RUN npm install
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

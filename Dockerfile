FROM node:16-alpine
ARG REACT_APP_API_URL
ENV GENERATE_SOURCEMAP=false
ENV REACT_APP_API_URL=$REACT_APP_API_URL
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build
CMD ["serve", "-s", "build"]
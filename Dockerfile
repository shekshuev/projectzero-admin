FROM node:16-alpine
ENV GENERATE_SOURCEMAP=false
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build
CMD ["serve", "-s", "build"]
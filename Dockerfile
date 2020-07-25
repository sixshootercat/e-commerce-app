# pull official base image
FROM mhart/alpine-node:11 AS builder

WORKDIR /app

COPY . .
RUN yarn install react-scripts -g --silent

RUN yarn install
RUN yarn run build

FROM mhart/alpine-node

RUN yarn global add serve

WORKDIR /app

COPY --from=builder /app/build .
CMD ["serve", "-n", "-p", "80", "-s", "."]doc

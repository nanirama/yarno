FROM 103348429667.dkr.ecr.ap-southeast-2.amazonaws.com/yarno/rails-base:0.0.6

RUN apk add python3 autoconf automake libtool nasm

ARG NPM_TOKEN

ENV INSTALL_PATH /app
RUN mkdir -p $INSTALL_PATH

COPY package.json /tmp/package.json
COPY yarn.lock /tmp/yarn.lock

RUN cd /tmp && npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}" && yarn install
RUN cp -a /tmp/node_modules /app/

WORKDIR $INSTALL_PATH

COPY . .
FROM node:21

WORKDIR /${FRONT_ADMIN_POPAYAN_TOURISM_APP_NAME}/

COPY package*.json /${FRONT_ADMIN_POPAYAN_TOURISM_APP_NAME}/

RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' >> /etc/apt/sources.list
RUN apt-get update && apt-get install --no-install-recommends -y google-chrome-stable

RUN npm install

RUN npm install puppeteer

COPY . /${FRONT_ADMIN_POPAYAN_TOURISM_APP_NAME}/

ENV CHROME_BIN=/usr/bin/google-chrome-stable

EXPOSE ${FRONT_ADMIN_POPAYAN_TOURISM_PORT}

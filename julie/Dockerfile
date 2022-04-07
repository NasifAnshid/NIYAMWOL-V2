FROM fusuf/whatsasena:latest

RUN git clone https://github.com/NasifAnshid/NIYAMWOL-V2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/SHIBI-SER/media

CMD ["node", "bot.js"]

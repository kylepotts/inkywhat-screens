FROM leonjza/gowitness

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y unzip
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN  ./aws/install

RUN apt-get install -y redis-server

COPY entrypoint.sh .
RUN chmod +X ./entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]

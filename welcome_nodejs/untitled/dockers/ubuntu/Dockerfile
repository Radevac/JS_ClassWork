FROM nginx:latest
LABEL authors="VADICK"

RUN apt update && apt upgrade -y && \
    apt install -y mc nginx && \
    apt clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

CMD ["/bin/bash"]

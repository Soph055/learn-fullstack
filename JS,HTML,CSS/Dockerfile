# declare the base image 
FROM nginx:alpine

#set a work directory 
WORKDIR /usr/share/nginx/html

#copy files
COPY . .

#expose nginx port
EXPOSE 80

#command 
CMD [ "nginx", "-g", "daemon off;" ]


#how to run docker
#docker build -t webapp .
#docker run -p 80:80 webapp
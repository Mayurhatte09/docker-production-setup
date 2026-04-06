## Docker Project 4
### Create a docker image java spring boot application. The application should display simple "Hello World" message. Use the official openjdk image and install the reqired dependencies.
------------
## Java application
- Switch to root user
``` 
sudo su -
```
- Update Operating system
```
apt update
```
- Install docker
``` 
apt install docker.io 
```
- Start and enable docker
```
systemctl start docker
systemctl enable docker
```
- Create a project directory:

```
mkdir <anyname> 
cd <directory_name>
```
- Create file `app.java` with sample code:
  [Click here to view java code](https://github.com/Mayurhatte09/docker-projects/blob/main/Docker-project-4/app.java)
- Create `dockerfile`
  `vi dockerfile`
```
FROM openjdk:17-slim
WORKDIR /app
COPY app.java .
EXPOSE 8000
CMD ["java", "app"]
```
- Build the image from dockerfile
```
docker build -t java-image .
```
- Build container from docker image
```
docker run --name java-webserver -d -p 8000:8000 java-image
```
## Check Deployment
- Open your browser and paste this command
```visit
http://localhost:8000
```
```visit
<Instance_public_Ip>:8000
```
---
*You see your app is running*

---


## 👤 About the Architect
<table align="center">
<tr>
<td align="center" width="160">
<img src="https://github.com/Mayurhatte09.png" width="120" style="border-radius: 10px; border: 3px solid #00D4FF;" />
</td>
<td>
<strong>Mayur Hatte</strong>



<em>DevOps & Cloud Infrastructure Engineer</em>




Focused on building self-healing, automated infrastructure. This playbook is a verified asset of <strong>MayurHatte09</strong>.
</td>
</tr>
</table>

<div align="center">
<sub>© 2025 | Mayur Hatte Design System</sub>


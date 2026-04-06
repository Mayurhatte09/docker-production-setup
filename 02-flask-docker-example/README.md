## Docker Project 2 

### Deploy the docker application for python flask web application. The application should display simple "Hello World" message on the output and Use the official python image install the reqired dependencies.
------------
## Python flask-web-application
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
- Create file `app.py` with sample code:
  [Click here to view app.py code](https://github.com/Mayurhatte09/docker-projects/blob/main/Docker_project-2/app.py)
- Create file `requirements.txt`
```
echo "flask" > requirements.txt
```
- Create `dockerfile`
  `vi dockerfile`
```
FROM python:3.10-slim
WORKDIR /app
copy requirement.txt .
COPY app.py .
RUN pip install flask
expose 5000
CMD ["python", "app.py"]
```

- Build the image from dockerfile
```
docker build -t flask-app .
```
- Build container from docker image
```
docker run --name flask-web-app -d -p 5000:5000 flask-app
```
`docker ps` listout your rnning containers

## Check Deployment
- Open your browser and paste this command
```visit
http://localhost:5000
```
```visit
<Instance_public_Ip>:5000
```
---
*Yu see your app is running.*

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

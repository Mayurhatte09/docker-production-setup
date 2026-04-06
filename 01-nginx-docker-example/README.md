## Docker Project 1

### create a docker container for simple web server using the official image nginx to map the port 8080 to configure the container to map port 8080 on the host machine to port 80 in the container to verify that the web server is accessible from the host machine. 
--------

- Pull Nginx Image
  ```
  docker pull nginx
  ```
- Deploy container from nginx image
  use any one command
  ```
  docker run --name my-web-page -p 8080:80 -it nginx
  ```
  ```
  docker run -d --name my-web-page -p 8080:80 nginx
  ```
  `-p 8080:80` Port 8080 is an alternative HTTP port sometimes used when port 80 is not available bt 80 is default nginx port
- Check running containers
  ```
  docker ps
  ```
## Check Deployment
Open your browser and paste this command
```
http://localhost:8080
 ```
```
<Instance_public_Ip>:8080
```
--- 
*You see your nginx web page is running*
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



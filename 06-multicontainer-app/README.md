### This project demonstrates how to **build and run a multi-container application** using Docker Compose.

* Uses **Dockerfile** for frontend (Nginx) and backend (Flask)
* Uses **Docker Compose** to run frontend + backend + MongoDB containers
* Demonstrates **container communication using service names**
* Provides **multi-service architecture setup**

---

## **Build Docker Images**

1. Open terminal and navigate to the project folder:

```bash
cd project-6-multi-container-app
```

2. Build all Docker images:

```bash
docker-compose build
```

* Builds frontend and backend images using respective Dockerfiles
* Pulls MongoDB image from Docker Hub

---

## **Run Multi-Container Application**

1. Start all containers:

```bash
docker-compose up -d
```

* `-d` → runs containers in detached mode

2. Check running containers:

```bash
docker ps
```

3. View logs:

```bash
docker-compose logs
```

---

## **Stop Application**

```bash
docker-compose down
```

---

## **Rebuild Containers (if changes made)**

```bash
docker-compose up --build
```

---

## **Service Details**

### **Frontend**

* Runs on Nginx
* Accessible at:

```bash
http://localhost:3000
```

---

### **Backend**

* Flask API running inside container
* Accessible at:

```bash
http://localhost:5000
```

Test API:

```bash
curl http://localhost:5000/data
```

---

### **MongoDB Database**

* Runs as a separate container
* Accessible internally using:

```bash
mongodb://db:27017/
```

---

## **Container Communication**

* Frontend → Backend using `localhost:5000`
* Backend → MongoDB using `db:27017`

👉 `db` is the **service name defined in docker-compose.yml**

---

## **Useful Commands**

### View running containers

```bash
docker ps
```

### Stop specific container

```bash
docker stop <container_id>
```

### Remove containers

```bash
docker-compose down
```

---

## **Notes**

* Docker Compose manages multiple containers easily
* Services communicate using Docker network
* `depends_on` ensures correct startup order
* MongoDB runs as a separate service container

---

## **Output**

* Frontend UI: `http://localhost:3000`
* Backend API: `http://localhost:5000`
* API Response:

```bash
{"message":"Hello from MongoDB"}
```
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

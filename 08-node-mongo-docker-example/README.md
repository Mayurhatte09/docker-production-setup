
---

###  08-node-mongo-docker-example

This project demonstrates a **multi-container Node.js + Express + MongoDB application** using **Docker Compose**.

**Key Features:**

* Backend: Node.js + Express
* Frontend: Simple HTML served via Nginx
* Database: MongoDB
* Dockerfiles for frontend and backend
* Docker Compose orchestration
* Persistent volumes and environment variables

---

## **Step 1: Setup Backend**

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies (this will create `package-lock.json`):

```bash
npm install
```

3. Verify `package-lock.json` exists:

```bash
ls
```

---

## **Step 2: Setup Frontend**

1. Navigate to the frontend folder:

```bash
cd ../frontend
```

2. Frontend files are ready. No additional setup required.

---

## **Step 3: Docker Compose Setup**

1. Go to project root:

```bash
cd ..
```

2. Make sure `docker-compose.yml` is present with **frontend, backend, and MongoDB services**.

---

## **Step 4: Run the Project**

1. Build and start containers:

```bash
docker-compose up --build -d
```

2. Check running containers:

```bash
docker ps
```

---

## **Step 5: Test the Application**

* **Frontend UI:** `http://localhost:3000`
* **Backend API:** `http://localhost:5000`

You can test API using **curl** or Postman:

```bash
curl http://localhost:5000/
```

Add or fetch messages using the `/messages` route.

---

## **Step 6: Useful Commands**

```bash
docker-compose logs         # View logs
docker-compose down         # Stop containers
docker-compose up --build   # Rebuild and restart containers
docker volume ls            # List Docker volumes
```

---

## **Step 7: Notes**

* `package-lock.json` ensures consistent backend dependencies.
* Docker Compose orchestrates multiple containers.
* Volumes are used for **persistent MongoDB data**.
* Environment variables are used to configure backend connection.

---

## **Step 8: Future Improvements**

* Replace frontend with React for a full-stack experience.
* Add authentication (JWT) for backend.
* Add Docker health checks.
* Deploy using Docker Swarm or Kubernetes.

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
<sub>© 2026 | Mayur Hatte Design System</sub>

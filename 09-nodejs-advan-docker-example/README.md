### 🚀 09-docker-nodejs-best-practice

This project demonstrates a **production-ready Node.js application containerized using Docker**, following modern DevOps practices such as **layer optimization, non-root execution, environment variable management, and health monitoring**.

---

## **🔑 Key Features**

* Backend: Node.js (HTTP server)
* Lightweight container using Alpine Linux
* Optimized Dockerfile with caching strategy
* Environment variable support using `.env`
* Health check for container monitoring
* Secure execution using non-root user

---

## **Step 1: Project Setup**

1. Clone the repository:

```bash
git clone [text](https://github.com/Mayurhatte09/docker-production-setup.git)
```

1. Navigate into the project directory:

```bash
cd 09-docker-nodejs-best-practice
```

---

## **Step 2: Verify Application Structure**

Ensure your project contains:

* Application source code inside `app/`
* `package.json` and `package-lock.json`
* `.env` file with configuration (e.g., PORT)
* Dockerfile in root directory

This structure ensures proper Docker layer optimization and clean builds.

---

## **Step 3: Prepare Environment Variables**

1. Open the `.env` file inside the app directory
2. Define required variables such as application port

**Important Concept:**

* Environment variables are **not hardcoded**
* They will be injected into the container at runtime

This allows flexibility across environments like development, staging, and production.

---

## **Step 4: Build Docker Image**

Run the Docker build command from the root directory.

```bash
docker build -t docker-node-app .
```

### What happens internally:

* Docker reads the Dockerfile step-by-step
* Creates image layers for each instruction
* Caches dependency installation for faster future builds
* Produces a reusable container image

---

## **Step 5: Run the Container**

Start the container while passing the `.env` file.

```bash
docker run --env-file app/.env -p 3000:3000 docker-node-app
```

### What happens internally:

* A container is created from the built image
* Environment variables are injected into runtime
* Port mapping connects container to host system
* Application starts inside an isolated environment

---

## **Step 6: Verify Running Container**

Check if the container is running:

```bash
docker ps
```

You should see:

* Container status as **Up**
* Health status (if enabled)

---

## **Step 7: Access the Application**

Open your browser and navigate to:

```
http://localhost:3000
```

If everything is correct, the application will respond successfully.

---

## **Step 8: Check Container Health**

Docker continuously monitors application health using the configured health check.

Check status using:

```bash
docker ps
```

Possible states:

* **healthy** → Application working correctly
* **unhealthy** → Application not responding

This mechanism is critical in production environments.

---

## **Step 9: Useful Docker Commands**

```bash
docker logs <container_id>     # View container logs
docker stop <container_id>     # Stop running container
docker rm <container_id>       # Remove container
docker images                 # List images
docker rmi docker-node-app     # Remove image
```

---

## **Step 10: Notes**

* `.env` file is passed at runtime (not stored in image)
* Dockerfile uses layer caching for faster builds
* Non-root user improves container security
* Health check ensures reliability and monitoring
* Alpine base image keeps container lightweight

---

## **Step 11: Future Improvements**

* Add Docker Compose for multi-container setup
* Implement CI/CD pipeline using
  GitHub Actions
  or
  Jenkins
* Deploy on AWS EC2 instance
* Add monitoring using
  Prometheus
  and
  Grafana
* Integrate with
  Kubernetes
  for scaling and orchestration

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

Focused on building scalable, secure, and production-ready systems using modern DevOps tools and practices.

</td>
</tr>
</table>

<div align="center">
<sub>© 2026 | Mayur Hatte DevOps Portfolio</sub>
</div>

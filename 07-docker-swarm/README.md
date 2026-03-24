### This project demonstrates how to **deploy and manage a containerized application using Docker Swarm**.

* Uses **Dockerfile** to build a Flask application image
* Uses **Docker Swarm** for container orchestration
* Demonstrates **service scaling and load balancing**
* Shows **cluster-based deployment (production-style)**

---

## **Build Docker Image**

1. Open terminal and navigate to the project folder:

```bash
cd project-7-docker-swarm/app
```

2. Build the Docker image:

```bash
docker build -t swarm-app .
```

* `swarm-app` is the image name
* Docker builds image using Dockerfile

---

## **Initialize Docker Swarm**

1. Enable swarm mode:

```bash
docker swarm init
```

* This initializes your system as a **Docker Swarm manager node**

---

## **Deploy Application using Swarm**

1. Go to project root:

```bash
cd ..
```

2. Deploy stack:

```bash
docker stack deploy -c docker-stack.yml myapp
```

* `myapp` is the stack name
* Deploys services defined in `docker-stack.yml`

---

## **Check Running Services**

```bash
docker service ls
```

---

## **Check Containers**

```bash
docker ps
```

---

## **Access Application**

```bash
http://localhost:5000
```

→ Refresh multiple times to see **load balancing across containers**

---

## **Scale Application**

Increase number of containers:

```bash
docker service scale myapp_web=5
```

* Scales service to 5 replicas

---

## **Stop Application**

```bash
docker stack rm myapp
```

---

## **Useful Commands**

### View swarm nodes

```bash
docker node ls
```

### Inspect service

```bash
docker service inspect myapp_web
```

### View logs

```bash
docker service logs myapp_web
```

---

## **How It Works**

* Docker Swarm creates multiple replicas of the app
* Built-in load balancer distributes traffic
* Each request may hit a different container
* Swarm ensures high availability

---

## **Output**

* Application URL: `http://localhost:5000`
* Output example:

```bash
Hello from container: <container_id>
```

---

## **Notes**

* Docker Swarm is used for container orchestration
* `deploy.replicas` defines number of containers
* Swarm provides **auto load balancing**
* Useful for production-level deployments

---

## **Future Improvements**

* Add Nginx load balancer
* Deploy on multiple nodes (cluster)
* Add database service
* Use overlay networks

---

### This project demonstrates how to **build and run a Docker image** for a Node.js + MongoDB application.

* Uses **Dockerfile** for Node.js app
* Uses **Docker Compose** to run Node.js app + MongoDB container
* Provides **volume mapping** for persistent data

---

## **Build Docker Image**

1. Open terminal and navigate to the project folder:

```bash 
cd Docker_project-5/app
```

2. Build the Docker image:

```bash 
docker build -t node-mongo-app .
```

* `node-mongo-app` is the image name
* Docker will use the **Dockerfile** to install dependencies and copy app code

---

## **Run Docker Container**

1. Create a volume folder (for persistent data):

```bash 
mkdir -p /my-volume
```

2. Run the container:

```bash 
docker run --name node-mongo-container -p 3000:3000 -v /my-volume:/usr/src/app -d node-mongo-app
```

* `-p 3000:3000` → maps container port to host
* `-v /my-volume:/usr/src/app` → mounts host folder as volume for persistence
* `-d` → runs container in detached mode

3. Check running containers:

```bash 
docker ps
```

4. Inspect container details:

```bash 
docker inspect node-mongo-container
```

---

## **Using Docker Compose (Optional)**

1. Navigate to the project root (where `docker-compose.yml` is located):

```bash 
cd Docker_project-5
```

2. Start all containers:

```bash 
docker-compose up -d
```

3. Stop containers:

```bash 
docker-compose down
```

---

## **Check Deployment**

* Node.js app: `http://localhost:3000`
* MongoDB accessible at: `mongodb://root:example@localhost:27017/messages`

---

## **Notes**

* Docker **image** contains Node.js app ready to run
* Docker **volume** ensures persistent data
* Docker Compose simplifies running multi-container apps



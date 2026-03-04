pipeline {
    agent any

    environment {
        DOCKER_IMAGE_BACKEND = "mohan/backend"
        DOCKER_IMAGE_FRONTEND = "mohan/frontend"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/YOUR_USERNAME/mini-ecommerce.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t $DOCKER_IMAGE_BACKEND .'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t $DOCKER_IMAGE_FRONTEND .'
                }
            }
        }

        stage('Docker Compose Deploy') {
            steps {
                sh 'docker compose down'
                sh 'docker compose up -d --build'
            }
        }
    }
}

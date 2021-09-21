pipeline {
  agent {
    docker { image 'node:14' }
  }
  stages {
    stage('Clone') {
      steps {
        sh 'git clone https://github.com/hoanglvh/jenkins-pipeline.git'
      }
    }
    stage ('push docker hub'){
      steps {
        withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
              sh 'docker build -t hoanglvh/nodejs-test:v1 .'
              sh 'docker push hoanglvh/nodejs-test:v1 .'
        }
      }
    }
  }
}

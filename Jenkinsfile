pipeline {
  agent {
    docker { image 'node:16-alpine' }
  }
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
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

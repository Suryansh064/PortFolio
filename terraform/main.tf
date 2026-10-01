terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.38"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}

resource "kubernetes_deployment" "portfolio" {
  metadata {
    name = "portfolio-deployment"
  }

  wait_for_rollout = false

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "portfolio"
      }
    }

    template {
      metadata {
        labels = {
          app = "portfolio"
        }
      }

      spec {
        automount_service_account_token = false
        enable_service_links            = false

        container {
          name  = "portfolio"
          image = "portfolio-devops:latest"

          image_pull_policy = "Never"

          port {
            container_port = 80
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "portfolio" {
  metadata {
    name = "portfolio-service"
  }

  wait_for_load_balancer = false

  spec {
    selector = {
      app = "portfolio"
    }

    type = "NodePort"

    port {
      port        = 80
      target_port = 80
      node_port   = 30080
    }
  }
}
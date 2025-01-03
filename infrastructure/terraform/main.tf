provider "aws" {
  region = "ca-central-1"  # Canada (Central) region
}

# VPC Configuration
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "tattoo-marketplace-vpc"
  }
}

# ECS Cluster
resource "aws_ecs_cluster" "main" {
  name = "tattoo-marketplace-cluster"
}

# RDS Instance
resource "aws_db_instance" "postgres" {
  identifier        = "tattoo-marketplace-db"
  engine           = "postgres"
  engine_version   = "13.7"
  instance_class   = "db.t3.medium"
  allocated_storage = 20
  
  name     = "tattoo_marketplace"
  username = var.db_username
  password = var.db_password
  
  vpc_security_group_ids = [aws_security_group.rds.id]
  db_subnet_group_name   = aws_db_subnet_group.main.name
}

# S3 Bucket for Images
resource "aws_s3_bucket" "images" {
  bucket = "tattoo-marketplace-images"
  acl    = "private"
  
  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "POST", "PUT"]
    allowed_origins = ["*"]
    max_age_seconds = 3000
  }
} 
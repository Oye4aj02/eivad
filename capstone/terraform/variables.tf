variable "aws_region" {
  description = "The AWS region to deploy resources into."
  default     = "us-east-1"
}

variable "instance_type" {
  description = "The EC2 instance type to deploy"
  default     = "t2.micro"
}

variable "ami_id" {
  description = "The ID of the ami to use for the instance"
  default     = "ami-080e1f13689e07408"
}

variable "count_number" {
  description = "The ID of the ami to use for the instance"
  default     = 1
}

variable "s3_bucket_name" {
  description = "Capstone Bucket"
  default     = "my-s3-capstone-bucket"
}

variable "backend_count_number" {
  description = "The ID of the ami to use for the instance"
  default     = 1
}

variable "frontend_count_number" {
  description = "The ID of the ami to use for the instance"
  default     = 1
}

variable "dev_env" {
  description = "development environment"
  default     = "development"
}
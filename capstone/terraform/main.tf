resource "aws_instance" "capstoneProject" {
  count           = var.backend_count_number
  ami             = var.ami_id
  instance_type   = var.instance_type

  tags = {
    Name        = "capstoneProject-${count.index + 1}"
    Environment = var.dev_env
    Role        = "frontend"
    Owner       = "Trevo"
    Project     = "Presmit web app"
    Application = "React Application"
  }
}

resource "aws_security_group" "capstone-aws-SG" {
  name        = "moses-security-new"
  description = "Security group allowing ports 80, 443, and 3306"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# resource "aws_default_vpc" "mainVpc" {
#   tags = {
#     Name = "Default VPC"
#   }
# }

# resource "aws_subnet" "mainSubNet" {
#   vpc_id     = aws_default_vpc.mainVpc.id
#   cidr_block = "10.0.0.0/24"

#   tags = {
#     Name = "Main"
#   }
# }

# resource "aws_network_interface" "capstone-network" {
#   count           = var.count_number
#   subnet_id       = aws_subnet.main.id
#   private_ips     = ["10.0.0.50"]
#   security_groups = [aws_security_group.capstone-aws-SG.id]

#   attachment {
#     instance     = aws_instance.capstoneProject[count.index].id 
#     device_index = 1
#   }
# }

resource "aws_s3_bucket" "capstone-storage" {
  bucket = var.s3_bucket_name

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}
locals {
  name   = "ex-sandbox-test"
  region = "ap-northeast-1"

  vpc_cidr = "10.0.0.0/16"
  azs      = slice(data.aws_availability_zones.available.names, 0, 3)


}

provider "aws" {
  region = local.region
  default_tags {
    tags = {
      "Example"    = "ex-sandbox-test"
      "GithubOrg"  = "terraform-aws-modules"
      "GithubRepo" = "terraform-aws-vpc"
    }
  }
}

data "aws_availability_zones" "available" {}



################################################################################
# VPC Module
################################################################################

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = local.name
  cidr = local.vpc_cidr

  azs              = local.azs
  private_subnets  = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 8, k)]
  public_subnets   = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 8, k + 4)]
  database_subnets = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 8, k + 8)]

  private_subnet_names  = ["Private Subnet One", "Private Subnet Two", "Private Subnet Three"]
  database_subnet_names = ["DB Subnet One", "DB Subnet Two"]

}

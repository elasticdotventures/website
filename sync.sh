#!/bin/bash
aws s3 sync --size-only --delete --exclude '.*' /projects/elastic.ventures/dist 's3://aws-website-elasticventures-vhga9/'

#!/bin/bash
aws s3 sync --size-only --delete --exclude '.*' /projects/elastic.ventures/ 's3://aws-website-elasticventures-vhga9/'

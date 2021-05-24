#!/bin/bash
npm run test
npm run build
aws s3 sync --acl public-read --size-only --delete --exclude '.*' /projects/elastic.ventures/dist 's3://aws-website-elasticventures-vhga9/'
aws cloudfront create-invalidation --paths "/index.html" --distribution-id "E37OIEPTEGNK52"

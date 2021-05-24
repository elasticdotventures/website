#!/bin/bash

npm run test
if [ $? -eq 0 ] ; then
    npm run build
else   
    echo "skipped build (tests failed)"
fi

if [ $? -gt 0 ] ; then
    echo "non zero exit during build; can't update s3."
else 
    echo "updating amazon s3"
    aws s3 sync --acl public-read --size-only --delete --exclude '.*' /projects/elastic.ventures/dist 's3://aws-website-elasticventures-vhga9/'
    echo "reseting load balancer cache"
    aws cloudfront create-invalidation --paths "/index.html" --distribution-id "E37OIEPTEGNK52"
fi

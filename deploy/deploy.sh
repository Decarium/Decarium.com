ssh root@104.131.59.186 'cd /root/websites/decarium.com ; rm -rf dist/'
scp -r dist/ root@104.131.59.186:/root/websites/decarium.com/
ssh root@104.131.59.186 'cd /root/websites ; docker-compose restart'

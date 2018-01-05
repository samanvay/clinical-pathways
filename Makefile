deps:
	npm install

deploy:
	make deps
	npm run build
	rm -rf ../openchs-server/openchs-server-api/target/classes/static
	mkdir ../openchs-server/openchs-server-api/target/classes/static
	mkdir ../openchs-server/openchs-server-api/target/classes/static/openchs-admin-client	
	rsync -av dist/ ../openchs-server/openchs-server-api/target/classes/static/openchs-admin-client --exclude index.html
	cp index.html ../openchs-server/openchs-server-api/target/classes/static

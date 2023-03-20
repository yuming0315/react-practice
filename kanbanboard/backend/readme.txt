1. backend
	1) 테스트(개발 모드)
		eclipse Ctrl+F11 (스프링부트 애플리케이션 실행)

	이거 하기전에 프론트엔드 먼저 확인 하고 하기
	2) 빌드 (배포)
		# mvn -f kanbanboard/backend exec:exec clean package

	테스트
	# java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard.jar
	# netstat -anp | grep 8088      8088포트 비었는지 확인

2. ssh 연결(ssh key 인증)
	1) key 생성하기
		$ ssh-keygen -t rsa -b 2048 -m PEM -C "gjdbal111@naver.com"
	
	2) key 생성확인
		- ~/.ssh/id_rsa 	: private key
		- ~/.ssh/id_rsa.pub	: public key
	
	3) 공개키를 서버에 설치하기
		# mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys
		
	4) 연결 테스트
		# ssh -i mykey.pem root@192.168.10.113
	
	5) ssh 연결 환경설정
		- ~/.ssh/environment
			========
			PATH=/usr/local/sbin:usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/douzone2023/java/bin:/usr/local/douzone2023/git/bin:/usr/local/douzone2023/maven3.8/bin:/usr/local/douzone2023/mariadb/bin:/usr/local/douzone2023/node/bin:/usr/local/douzone2023/python/bin:/root/bin:/usr/local/douzone2023/java/bin:/usr/local/douzone2023/git/bin:/usr/local/douzone2023/maven3.8/bin:/usr/local/douzone2023/mariadb/bin:/usr/local/douzone2023/node/bin:/usr/local/douzone2023/python/bin:/root/bin
			
			========
			
		- /etc/ssh/sshd_config
			PermitUserEnvironment yes
	
	6) jenkins
		- Publish over SSH 플러그인 설치
		- Publish over SSH 플러그인 ssh server 등록 (springboot-publish-server)
		- 프로젝트의 빌드 후 조치(post-build action)의 send build artifacts over ssh 설정
		  kanbanboard.jar : transfer
		  launch.sh : transfer + execution

=====================================================================

2. frontend
	1) 설치
		- 개발툴
       		$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react styled-components case-sensitive-paths-webpack-plugin
    	- react library
       		$ npm i react react-dom prop-types react-addons-update
		
	2) 설정
		- webpack.config.js
		- babel.config.json
		
	3) npm 스크립팅
	  	"scripts": {
    		"debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
   	 		"build": "npx webpack --config config/webpack.config.js --mode production" 
  		},
		
	4) 테스트 (개발 모드)
		$ npm start
		
	5) 빌드 (배포)
		$ npm run build
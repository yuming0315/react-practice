1. backend
	1) 테스트(개발 모드)
		eclipse Ctrl+F11 (스프링부트 애플리케이션 실행)

	이거 하기전에 프론트엔드 먼저 확인 하고 하기
	2) 빌드 (배포)
		# mvn -f kanbanboard/backend exec:exec clean package

	테스트
	# java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard.jar
	# netstat -anp | grep 8088      8088포트 비었는지 확인


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
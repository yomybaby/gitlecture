# Git 강의 자료
> 이 자료는 [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)를 기반으로 만들어졌습니다.  [generator-bespoke](https://github.com/markdalgleish/generator-bespoke)

## 슬라이드를 로컬에서 보려면

먼저, 아래 사항이 설치되어 있어야 합니다.

1. [Node.js](http://nodejs.org)
2. [Bower](http://bower.io): `$ npm install -g bower`
3. [Grunt](http://gruntjs.com): `$ npm install -g grunt-cli`

설치가 완료되면 아래 명령어를 통해 dependencies를 설치하고 미리보기 서버를 실행하면 됩니다.

```bash
$ npm install && bower install
$ grunt server
```

## 기타 다룰만한 내용
* from Pro git
	* HEAD 파일, index 파일, objects 디렉토리, refs 디렉토리가 남았다. 이 네 항목이 Git의 핵심이다. 
	* PackFile에서 
* 이 강의를 기획한 개인적인 이유 : Git을 쓰다보니 너무 좋았다. 생각보다 주변에서는 Git을 쓰는 것에 별 관심이 없다. 여기까지 오신분들은 이미
Git에 대해 호기심이 생긴 분이라 생각한다. 강의를 듣고 Git에 대해 긍정적 호기심이 생겨서 직접 사용하며 알아가는 계기가 되었으면 한다.
* commit / tree / blob의 내용을 보는 명령어 (수업시 확인을 위해 외워두기)
* 클레이셔키의 ted
	* 상호 조정이 없는 협력 ( This is cooperation without coordination. 	)
	* http://www.ted.com/talks/clay_shirky_how_the_internet_will_one_day_transform_government/transcript?language=ko#t-642369

* git cat-file -t 00000
* git cat-file commit 0000


[github page](http://yomybaby.github.io/gitlecture)에서는 바로 슬라이드를 보실 수 있습니다.

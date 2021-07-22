# 나와 닮은 꼴은??

## 21.06.28 ~ 21.07.08

[김정환님의 리액트 인프런 강좌](https://www.inflearn.com/course/%EB%A7%8C%EB%93%A4%EB%A9%B4%EC%84%9C-%ED%95%99%EC%8A%B5%ED%95%98%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8/dashboard)를 수강하고 난 뒤 제작한 사이드 프로젝트입니다. 
<br>
<br>
MVC 패턴을 활용하여 바닐라 자바스크립트로 작성했습니다.
<br>
<br>
## 사용 기술

### Front
* Axios
* Webpack/Babel
* Jest

### Back
* Express
* Multer

### Deploy
* Heroku
* Netlify

<br>
<br>

## 구현 사항

* MVC 패턴의 목적에 따라 관심사의 분리를 위해 노력했습니다. View에서 UI를, Store에서 상태관리를 해주었고 Controller를 통해 이 과정을 관리했습니다. 
<br>
<br>
* Event Delegation이나 Custom event 등 이벤트를 다양하게 활용해보았습니다.
<br>
<br>
* Store에 대한 간단한 테스트 코드를 작성하여 Store의 안정성을 확보하고자 했습니다.
<br>
<br>
* Webpack을 개발 및 빌드과정에서 활용하였습니다. 개발 시에는 devServer를 이용하여 api 콜이 잘 이루어지고 있는지 확인했고, 빌드 시에는 웹팩의 옵션을 활용하여 빌드 최적화를 해주었습니다.


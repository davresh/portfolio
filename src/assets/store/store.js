import webSite1 from '../image/web-site1.jpg';
import webSite2 from '../image/web-site2.jpg';
import webSite3 from '../image/web-site3.jpg';
import bg from '../image/common.svg';
import CV from '../image/userCV.pdf';
export const store = {
    CV,
    bg,
    skills:['HTML5','CSS3','BOOTSTRAP','SASS','JAVASCRIPT','REACT','REDUX/TOOLKIT'],
    sites:[
        {
            id:Math.random(),
            img:webSite1,
            siteName:'Zay Shope',
            language:['html','css','sass','javascript'],
            text:'ZayShope is a multipurpose logistics website and I built this website from scratch using the front-end tools I know.',
            link:'https://github.com/davresh/ZayShop'
        },
        {
            id:Math.random(),
            img:webSite2,
            siteName:'Simple House',
            language:['html','css','sass','javascript','react'],
            text:'Simple House is a multipurpose logistics website and I built this website from scratch using the front-end tools I know.',
            link:'https://github.com/davresh/SimpleHouse'
        },
        {
            id:Math.random(),
            img:webSite3,
            siteName:'Cake Zone',
            language:['html','css','sass','javascript','react'],
            text:'Cake Zone is a multipurpose logistics website and I built this website from scratch using the front-end tools I know.',
            link:'https://github.com/davresh/Cake-Zone'
        },
    ]
} 
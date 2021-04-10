*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
}
a{
    text-decoration: none;
    color: rgb(255, 255, 255);
}


@media screen and (max-width:749px){
    .main_wrap{
        height: 500px;
        background-image: url(fes_top.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .illust_heading {
        margin-left:35px;
        align-items: flex-end;
        display: flex;
        margin-bottom: 10px;
        z-index: 5;
    }
    .sort_btn {
        text-align: center;
        width: 15%;
        background-color: rgb(255, 255, 255);
        padding: 8px 7px 8px 7px;
        margin-left: 5px;
        font-size: 12px;
        color: black;
        z-index: 5;
        cursor: pointer;
    }

    .move{
        position: relative;
        bottom: -100px;
        transition: all 1s;
        opacity: 1;
    }

    .active {
        background-color: black;
        color: white;
    }
    

    .illusts_wrap{
        margin-left: 35px;
        background-color: rgb(255, 255, 255);
    }   
    
    .profiles ul{
        width: 95%;
    }
    .req_about{
        position: fixed;
        top: 10%;
        left: 14%;
        width: 80vw;
        height: 50vh;
    }
        


    header {
        background: -moz-linear-gradient(top,rgba(82, 82, 82, 0.6), rgba(200,200,200,0.01));
        background: -webkit-linear-gradient(top, rgba(82, 82, 82, 0.6), rgba(200,200,200,0.01));
        background: linear-gradient(to bottom, rgba(82, 82, 82, 0.6), rgba(200,200,200,0.01));
        position: fixed;
        width: 100vw;
        height: 70px;
        padding-left: 35px;
        text-align: right;
        line-height: 70px;
        font-size: 13px;
        z-index: 10;
    }
    .contact_btn {
        margin-right: 7px;
        border-bottom:2px solid;
        border-right:2px solid;
        padding: 2px 6px;
    }

    .req {
        margin-right: 10px;
        cursor: pointer;
    }

    .req_about {
        background-color:rgba(255, 255, 255, 0.7);
        color: rgb(17, 17, 17);
        text-align: center;
        display: none;
        z-index:10;
    }
    
    .close_container {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 0;
    }
    
    
    

    .req_heading h1{
        display: inline-block;
        margin-top: 70px;
        padding:10px;
    }

    .side_menue {
        writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        white-space: nowrap;
        text-orientation: sideways;
        background-color: black;
        color: rgb(255, 255, 255);
        font-size: 25px;
        line-height: 35px;
        height:100vh;
        width:35px;
        position: fixed;
        z-index: 9;
        float: left;
    }
    .side_menue p{
        font-weight: normal;
        font-size: 18px;
        margin-top:7%;
    }
    .side_menue span{
        margin-top: 40px;
        font-size: 18px;
    cursor: pointer;
    }
    .illust_heading h2{
        padding: 10px 10px 0 10px;
        display: inline-block;
        margin-left: 20px;
        margin-top: 30px;
        background-color: black;
    }
    .illust_heading {
        height: 100px;
        width: 100vw;
        overflow: auto;
        color: white;
        background-color: rgb(255, 255, 255);
        font-size: 18px;
    }
    .profiles{
        display: none;
        cursor: pointer;
    }
    .profiles ul{
        width: 500px;
        position: absolute;
        top: 0;
        left: 35px;
        height: 100vh;
        background-color:rgba(0, 0, 0, 0.99);
        color: white;
        z-index: 9;
        writing-mode: horizontal-tb;
        font-size: 13px;
    }
    .profiles h1{
        margin-top: 100px;
        font-weight: normal;
    }
    .name{
        margin-top:100px;
        font-weight:normal;
    }
    .close_btn {
        background-color: rgb(255, 255, 255);
        display: inline-block;
        width: 50px;
        height: 50px;
        margin: 5px;
    }
    .top_btn{
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background-color: black;
        color: white;
        z-index: 5;
    }
    .top_text {
        display: inline-block;
        text-align: center;
        width: 60px;
        line-height: 60px;
    }
}

@media(min-width:750px){
body{
    min-width: 1092px;
}
    .main_wrap{
        height: 100vh;
        background-image: url(fes_top.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .item_a {
        width: 95%;
        /*min-height: 400px;かりおき */
        margin: 10px 20px;
    }
    .item_b {
        width: 95%;
        /*min-height: 200px;かりおき */
        margin: 10px 20px;
    }
    .illust_heading {
        margin-left: 27.5%;/* 右寄せ 仮数値*/
        align-items: flex-end;
        display: flex;
        margin-bottom: 10px;
    }
    .illusts_wrap{
        margin-left:27.5%;/* 右寄せ 仮数値*/
        width: 100%;
        background-color: rgb(255, 255, 255);
        float: left;
    }
    .illusts_wrap_a {
        display: inline-block;
        vertical-align: top;
        width: 35%;
    }
    .illusts_wrap_b{
        display: inline-block;
        vertical-align: top;
        width: 35%;
    }
    .req_about{
        position: fixed;
        top: 10%;
        left: 10%;
        width: 80vw;
        height: 80vh;
    }
    header {
        background: -moz-linear-gradient(top,rgba(82, 82, 82, 0.6), rgba(200,200,200,0.01));
        background: -webkit-linear-gradient(top, rgba(82, 82, 82, 0.6), rgba(200,200,200,0.01));
        background: linear-gradient(to bottom, rgba(82, 82, 82, 0.6), rgba(200,200,200,0.01));
        position: fixed;
        width: 100vw;
        height: 70px;
        padding-left: 70px;
        text-align: right;
        line-height: 70px;
        font-size: large;
        z-index: 7;
    }
    .contact_btn {
        margin-right: 20px;
        border-bottom:2px solid;
        border-right:2px solid;
        padding: 2px 6px;
    }
    .req {
        margin-right: 40px;
        cursor: pointer;
    }
    .req_about {
        background-color:rgba(255, 255, 255, 0.7);
        color: rgb(17, 17, 17);
        text-align: center;
        display: none;
        z-index:10;
    }

    .close_container {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 0;
    }
    .req_heading h1{
        display: inline-block;
        margin-top: 70px;
        border: 3px solid;
        padding:10px;
    }
    .side_menue {
        writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        -moz-writing-mode: vertical-rl;
        -ms-writing-mode: vertical-rl;
        -webkit-writing-mode: vertical-rl;
        text-orientation: sideways;
        white-space: nowrap;
        background-color: black;
        color: rgb(255, 255, 255);
        font-size: 25px;
        line-height: 70px;
        height:100vh;
        width:70px;
        position: fixed;
        z-index: 9;
        float: left;
    }
    .side_menue p{
        font-weight: normal;
        font-size: 20px;
        margin-top:7%;
    }
    .side_menue span{
        margin-top: 40px;
    cursor: pointer;
    }
    .illust_heading h2{
        padding: 10px 30px 0 30px;
        display: inline-block;
        margin-left: 30px;
        margin-top: 30px;
        background-color: black;
    }
    .illust_heading {
        height: 100px;
        width: 100vw;
        overflow: auto;
        color: white;
        background-color: rgb(255, 255, 255);
        z-index: 5;
    }
    .sort_btn {
        display: inline-block;
        text-align: center;
        width: 10%;
        background-color: rgb(255, 255, 255);/*色仮置き 最終的に白*/
        padding: 10px 10px 3.5px 10px;
        margin-left: 5px;
        color: black;
        z-index: 5;
        cursor: pointer;
    }
    .active {
        background-color: black;
        color: white;
    }
    .profiles{
        display: none;
        cursor: pointer;
    }
    .profiles ul{
        width: 700px;
        position: absolute;
        top: 0;
        left: 70px;
        height: 100%;
        background-color:rgba(0, 0, 0, 0.99);
        color: white;
        z-index: 10;
        writing-mode: horizontal-tb;
        font-size: 15px;
    }
    .profiles h1{
        margin-top: 100px;
        font-weight: normal;
    }
    .name{
        margin-top:100px;
        font-weight:normal;
    }
    .close_btn {
        background-color: rgb(255, 255, 255);
        display: inline-block;
        width: 50px;
        height: 50px;
        margin: 5px;
    }
    .top_btn{
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 80px;
        height: 80px;
        background-color: black;
        color: white;
        z-index: 5;
    }
    .top_text {
        display: inline-block;
        text-align: center;
        width: 80px;
        line-height: 80px;
    }
}

<?php ob_start();
session_start();
if(!isset($_SESSION['lang']))
{
	$_SESSION['lang'] = 'en';
}
if($_SESSION['lang'] == 'en')
{
	include('lang/en.php');
}else 
{
	include('lang/ar.php');
}

?>
<!doctype html>
<html lang="en" dir="ltr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Language" content="en" />
    <meta name="csrf-token" content="5jaWJvHWWchsiNNYxYqb2TjkoJNpnyOuhweXuw9x">
    <meta name="msapplication-TileColor" content="#2d89ef">
    <meta name="theme-color" content="#4188c9">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <title>CV Creator</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    <script src="html2pdf/dist/html2pdf.bundle.min.js"></script>

    <script>
    function generatePDF() {
        var element = document.getElementById('exportpdf');
        var opt = {
            margin: .3,
            filename: 'myfile.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 2
            },
            jsPDF: {
                unit: 'in',
                format: 'letter',
                orientation: 'portrait'
            }
        };

        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();

        // Old monolithic-style usage:
        html2pdf(element, opt);
        // Choose the element that our invoice is rendered in.
        // const element = document.getElementById("invoice");
        // Choose the element and save the PDF for our user.
        /* html2pdf()
           .set({ html2canvas: { scale: 2 } })
           .from(element)
           .save();*/
    }
    </script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/css2.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
</head>

<body id="resume" ng-app="MyApp" ng-controller="MyController">


    <div class="row rowForm" style="padding: 19px 50px;">

        <div class="col-md-6">
            <div class="form-group">
                <h2 class="section-title mb-2">
                <a href="index.php">
                    <img src="imgs/logo.png" alt="" title="" style="    width: 50px;">
                    CV Creator
                    </a>
                </h2> <br />
            </div>
        </div>

        <div class="col-md-6"><a id="lang_ar" class="nav-link" href="#" style="    width: 30px;  "><img
                    src="imgs/ar.png" width="20px" /></a>
            <a id="lang_en" class="nav-link " style="    width: 30px;    " href="#"><img src="imgs/en.png"
                    width="20px" /></a>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="FullName"><?=$lang["FullName"]?></label>
                <input type="text" value="<?=$lang["YourName"]?>" class="form-control" id="FullName" ng-model="name">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="Jobposition"><?=$lang["Jobposition"]?></label>
                <input type="text" value="<?=$lang["Yourposition"]?>" class="form-control" id="Jobposition"
                    ng-model="position">
            </div>
        </div>


        <div class="col-md-12">
            <div class="form-group">
                <label for="YourImage"><?=$lang["YourImage"]?></label>
                <input type="file" id="YourImage" class="form-control" accept="image/png, image/jpeg"
                    onchange="angular.element(this).scope().SelectFile(event)" />
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label for="Email"><?=$lang["Email"]?></label>
                <input type="email" value="<?=$lang["YourEmail"]?>" class="form-control" id="Email" ng-model="email">
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label for="PhoneNumber"><?=$lang["PhoneNumber"]?></label>
                <input type="text" value="<?=$lang["YourPhoneNumber"]?>" class="form-control" id="PhoneNumber"
                    ng-model="phone">
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label for="FacebookUsername"><?=$lang["FacebookUsername"]?></label>
                <input type="text" value="<?=$lang["YourFacebookUsername"]?>" class="form-control" id="FacebookUsername"
                    ng-model="fb">
            </div>
        </div>
        <div class="col-md-12"> <b> <label for="Facebook"><?=$lang["Address"]?></label></b>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="BuildingNo"><?=$lang["BuildingNo"]?></label>
                <input type="text" value="<?=$lang["BuildingNo"]?>" class="form-control" id="BuildingNo"
                    ng-model="BuildingNo">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="StreetNo"><?=$lang["StreetNo"]?></label>
                <input type="text" value="<?=$lang["StreetNo"]?>" class="form-control" id="StreetNo"
                    ng-model="StreetNo">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="Area"><?=$lang["Area"]?></label>
                <input type="text" value="<?=$lang["Area"]?>" class="form-control" id="Area" ng-model="Area">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="PostalCode"><?=$lang["PostalCode"]?></label>
                <input type="text" value="<?=$lang["PostalCode"]?>" class="form-control" id="PostalCode"
                    ng-model="PostalCode">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="AdditionalNumber"><?=$lang["AdditionalNumber"]?></label>
                <input type="text" value="<?=$lang["AdditionalNumber"]?>" class="form-control" id="AdditionalNumber"
                    ng-model="AdditionalNumber">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="UnitNo"><?=$lang["UnitNo"]?></label>
                <input type="text" value="<?=$lang["UnitNo"]?>" class="form-control" id="UnitNo" ng-model="UnitNo">
            </div>
        </div>

        <div class="col-md-12">
            <div class="form-group">
                <label for="target"><h3><b><?=$lang["TARGET"]?></b></h3></label>
                <textarea class="form-control" id="target" ng-model="target" rows="3"></textarea>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label for="target"><h3><b><?=$lang["EDUCATION"]?></b></h3></label>
                <ul id="EDUCATION" style="list-style:none
">
                    <li style="
    background: rgba(0,123,255,.25);
    border-radius: 10px;
    padding: 15px 25px;
" ng-repeat="c in edu">
                        <?=$lang["OrganizationName"]?>: {{ c.eduName }} , {{ c.eduFrom  | date: "yyyy-MM-dd"}} -
                        {{ c.eduTo  | date: "yyyy-MM-dd"}} <br />
                        <?=$lang["Major"]?>: {{c.eduMajor}} <a ng-click="removeedu($index)"><i aria-hidden="true"
                                class="fa fa-close"></i></a>
                    </li>
                </ul>
                <div class="form-group">
                    <label for="eduName"><?=$lang["OrganizationName"]?></label>
                    <input type="text" value="<?=$lang["YourOrganizationName"]?>" class="form-control" id="eduName"
                        ng-model="eduName" />

                    <label for="eduFrom"><?=$lang["From"]?></label>
                    <input type="date" max="<?=date("Y-m-d")?>" class="form-control" id="eduFrom" ng-model="eduFrom" />

                    <label for="eduTo"><?=$lang["To"]?></label>
                    <input type="date" max="<?=date("Y-m-d")?>" class="form-control" id="eduTo" ng-model="eduTo" />

                    <label for="eduMajor"><?=$lang["Major"]?></label>
                    <input type="text" value="<?=$lang["YourMajor"]?>" class="form-control" id="eduMajor"
                        ng-model="eduMajor" />

                    <br />
                    <button type="submit" class="btn btn-primary" id="EDUCATIONbtn"
                        ng-click="addEdu()"><?=$lang["Add"]?></button>

                </div>
            </div>
        </div>
        <div class="col-md-12"> <label for="companyName"><h3><b><?=$lang["EXPERICENCE"]?></b></h3></label>
            <ul id="EXPERICENCE" style="list-style:none
">
                <li style="
    background: rgba(0,123,255,.25);
    border-radius: 10px;
    padding: 15px 25px;
" ng-repeat="c in company">
                    <?=$lang["CompanyName"]?>: {{ c.companyName }} , {{ c.companyFrom | date: "yyyy-MM-dd" }} -
                    {{ c.companyTo | date: "yyyy-MM-dd" }} <br />
                    <?=$lang["Position"]?>: {{ c.companyPosition }} - {{c.pDesc}} <a ng-click="remove($index)"><i
                            aria-hidden="true" class="fa fa-close"></i></a>
                </li>
            </ul>
            <div class="form-group">
                <label for="companyName"><?=$lang["CompanyName"]?></label>
                <input type="text" value="<?=$lang["YourCompanyName"]?>" class="form-control" id="companyName"
                    ng-model="companyName" />

                <label for="companyFrom"><?=$lang["From"]?></label>
                <input type="date" max="<?=date("Y-m-d")?>" class="form-control" id="companyFrom"
                    ng-model="companyFrom" />

                <label for="companyTo"><?=$lang["To"]?></label>
                <input type="date" max="<?=date("Y-m-d")?>" class="form-control" id="companyTo" ng-model="companyTo" />

                <label for="companyPosition"><?=$lang["Position"]?></label>
                <input type="text" value="<?=$lang["YourPosition"]?>" class="form-control" id="companyPosition"
                    ng-model="companyPosition" />

                <label for="pDesc"><?=$lang["PositionDescription"]?></label>
                <textarea class="form-control" id="pDesc" ng-model="pDesc" rows="3"></textarea>
                <br />
                <button type="submit" class="btn btn-primary" ng-click="add()"><?=$lang["Add"]?></button>

            </div>
        </div>
        <div class="col-md-12"> <label for="companyName"><h3><b><?=$lang["ACTIVITIES"]?></b></h3></label>
            <ul id="ACTIVITIES" style="list-style:none
">
                <li style="
    background: rgba(0,123,255,.25);
    border-radius: 10px;
    padding: 15px 25px;
" ng-repeat="c in org">
                    <?=$lang["OrganizationName"]?>: {{ c.orgName }} , {{ c.orgFrom  | date: "yyyy-MM-dd"}} -
                    {{ c.orgTo  | date: "yyyy-MM-dd"}} <br />
                    <?=$lang["Position"]?>: {{ c.orgPosition }} - {{c.orgDesc}} <a ng-click="removeorg($index)"><i
                            aria-hidden="true" class="fa fa-close"></i></a>
                </li>
            </ul>
            <div class="form-group">
                <label for="orgName"><?=$lang["OrganizationName"]?></label>
                <input type="text" value="<?=$lang["YourOrganizationName"]?>" class="form-control" id="orgName"
                    ng-model="orgName" />

                <label for="orgFrom"><?=$lang["From"]?></label>
                <input type="date" max="<?=date("Y-m-d")?>" class="form-control" id="orgFrom" ng-model="orgFrom" />

                <label for="orgTo"><?=$lang["To"]?></label>
                <input type="date" max="<?=date("Y-m-d")?>" class="form-control" id="orgTo" ng-model="orgTo" />

                <label for="orgPosition"><?=$lang["Position"]?></label>
                <input type="text" value="<?=$lang["Your Position"]?>" class="form-control" id="orgPosition"
                    ng-model="orgPosition" />

                <label for="orgDesc"><?=$lang["PositionDescription"]?></label>
                <textarea class="form-control" id="pDesc" ng-model="orgDesc" rows="3"></textarea>
                <br />
                <button type="submit" class="btn btn-primary" ng-click="addOrg()"><?=$lang["Add"]?></button>

            </div>
        </div>
        <div class="col-md-12"> <label for="companyName"><h3><b><?=$lang["AWARD"]?></b></h3></label>
            <ul style="list-style:none
">
                <li style="
    background: rgba(0,123,255,.25);
    border-radius: 10px;
    padding: 15px 25px;
" ng-repeat="c in award">
                    <?=$lang["AwardName"]?>: {{ c.wname }} , {{ c.wdate | date: "yyyy-MM-dd" }} <a
                        ng-click="removeaward($index)"><i aria-hidden="true" class="fa fa-close"></i></a>
                </li>
            </ul>
            <div class="form-group">
                <label for="awardName"><?=$lang["AwardName"]?></label>
                <input type="text" value="<?=$lang["YourAwardName"]?>" class="form-control" id="awardName"
                    ng-model="wname" />

                <label for="wdate"><?=$lang["Date"]?></label>
                <input type="date" max="<?=date("Y-m-d")?>" class="form-control" id="wdate" ng-model="wdate" />

                <br />
                <button type="submit" class="btn btn-primary" ng-click="addAward()"><?=$lang["Add"]?></button>

            </div>
        </div>
        <div class="col-md-12"> <label for="companyName"><h3><b><?=$lang["SKILL"]?></b></h3></label>
            <ul style="list-style:none
">
                <li style="
    background: rgba(0,123,255,.25);
    border-radius: 10px;
    padding: 15px 25px;
" ng-repeat="c in skill">
                    <?=$lang["SkillName"]?>: {{ c.sname }} - {{ c.sdesc }} <a ng-click="removeSkill($index)"><i
                            aria-hidden="true" class="fa fa-close"></i></a>
                </li>
            </ul>
            <div class="form-group">
                <label for="sname"><?=$lang["SkillName"]?></label>
                <input type="text" value="<?=$lang["YourSkillName"]?>" class="form-control" id="sname"
                    ng-model="sname" />

                <label for="sdesc"><?=$lang["Description"]?></label>
                <textarea class="form-control" id="sdesc" ng-model="sdesc" rows="3"></textarea>

                <br />
                <button type="submit" class="btn btn-primary" ng-click="addSkill()"><?=$lang["Add"]?></button>

            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label for="moreinfo"><h3><b><?=$lang["MOREINFORMATION"]?></b></h3></label>
                <textarea class="form-control" id="moreinfo" ng-model="moreinfo" rows="3"></textarea>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <label for="ref"><h3><b><?=$lang["REFERENCES"]?></b></h3></label>
                <textarea class="form-control" id="ref" ng-model="ref" rows="3"></textarea>
            </div>
        </div>
    </div>
    <div class="btn_print">
        <div class="input-group">
            <span class="input-group-btn">
                <a href='index.php' class="btn btn-secondary"><?=$lang["Home"]?></a>
            </span>
            <span class="input-group-btn">
                <a id="PreviewPrint" class="btn btn-primary">
                    <i class="fe fe-save"></i><?=$lang["PreviewPrint"]?> </a>
                <!-- <a onclick="printDiv()" id="printPDF" class="btn btn-primary">
                    <i class="fe fe-save"></i><?=$lang["Print"]?> </a> -->
                <a onclick="ExportDiv()" id="ExportPDF" class="btn btn-primary">
                    <i class="fe fe-save"></i><?=$lang["Export"]?>  </a>
                <a id="Back" class="btn btn-primary" style="display:none">
                    <i class="fe fe-save"></i><?=$lang["Back"]?> </a>
            </span>
        </div>
    </div>
<div style="overflow: scroll;">
    <div id="exportpdf" style="padding: 10px; display:none; width: 750px;">
            <style>
        body {
            margin 0 auto !important;
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
        }

        .btn_print {
            padding: 10px;
            background-color: #ffff;
        }

        .input-group-btn {
            margin-right: 5px;
        }

        #exportpdf {}

        @page {
            size: A4;
            margin: 0;
        }

        @media print {

            html,
            body {
                width: 210mm;
                /* margin: 0px auto; */
                /* height: 297mm; */
            }

            .btn_print {
                display: none;
            }
        }

        body {
            font-family: 'Roboto', sans-serif !important;
            max-width: 210mm;
            min-height: 290mm;
            height: auto;
            margin: 20px auto;
            background: #fff;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        }

        #rb-layout {
            width: 100%;
            max-width: 210mm;
            padding: 0;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);

        }

        #rb-main {
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            line-height: 24px;
            display: flex;
            flex-wrap: nowrap;
            padding: 20px;
            background-color: #ffff;
        }

        #rb-left .rb-block {
            margin-bottom: 30px
        }

        #rb-left {
            width: 28%;
            padding: 10px 5px;
            padding-left: 20px;
        }

        #rb-content {
            width: 72%;
            background: #fff;
            padding-right: 40px;
        }

        #rb-content-top {
            color: #000;
            background: #ffff;
            padding: 15px;
            padding-top: 30px;
        }

        #rb-content-top .rb-block {
            position: relative;
            padding: 5px 10px;
            display: flex;
        }

        #rb-content-top .rb-block img {
            width: 80px;
            border-radius: 5%;
        }

        #rb-content .rb-block {
            position: relative;
            padding: 5px 10px;
        }

        #rb-left .rb-box-content {
            padding-bottom: 0;
            margin: 0;
        }

        .skill {
            margin-top: 15px
        }

        #rb-content-top h1 {
            font-size: 32px;
            margin: 0;
            color: #1182b2;
            padding-top: 0px;
            padding-left: 20px;
            line-height: normal;
            text-transform: capitalize;
            font-weight: 800;
        }

        #rb-content-top .job_position {
            font-size: 22px;
            color: #333;
            font-weight: 500;

        }

        #rb-content-top h1 span {
            display: block
        }


        .box-name p {
            overflow: hidden;
        }

        .box-name {
            overflow: hidden;
            background: #2f3a40;
        }

        #rb-content p {
            margin-bottom: 5px
        }

        #rb-left .h3 {
            font-size: 18px;
            font-weight: bold;
            margin-top: 0;
            text-transform: uppercase;
        }

        #rb-content .head {
            font-size: 18px;
            color: #2f3a40;
            padding-bottom: 5px;
            /* border-bottom: 2px solid #9B9C8F; */
            font-weight: bold;
            margin-top: 0;
            text-transform: uppercase;
        }


        #rb-content h3 {
            font-weight: bold;
            font-size: 14px;
            line-height: 30px;
            margin-bottom: 10px;
            color: #333;
        }


        #rb-content span[contenteditable] {
            display: inline-block;
            padding-right: 15px;
            padding-left: 15px;
        }

        #rb-left .h3:first-child {
            margin-top: 0
        }

        .rb-box-content {
            margin-bottom: 25px;
            padding-left: 15px;
            position: relative;
        }

        #rb-box-ava {
            text-align: center;
            padding: 2px;
            margin-bottom: 10px;
            auto;
        }

        #rb-box-ava img {
            padding: 0;
            border: 0;
            width: 150px;
            height: 150px;

        }

        .bar-exp span {
            display: block;
            height: 8px;
            background: #d9d9d9;
        }

        .bar-exp {
            background: #2f3a40;
            border: solid 2px white;
            margin-bottom: 12px;
        }

        .icoweb label {
            display: block;
            color: #627e88;
        }

        .icoweb span {
            display: block;
        }

        .box-contact {
            font-size: 13px;
            padding-top: 0px;
        }

        .icoweb i.fa {
            width: 20px;
            height: 20px;
            background-color: #ffff;
            border-radius: 50%;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            display: inline-block;
            text-align: center;
            font-size: 13px;
            line-height: 20px;
            color: #2f3a40 !important;
            margin-right: 10px;
            margin-top: 3px;
            float: left
        }

        .head i {
            font-size: 25px;
            margin-right: 10px;
        }

        #rb-content span.exp-date {
            float: right;
        }

        .icon_fa {
            text-align: center;
        }

        .icon_fa i.fa {
            font-size: 20px;
            border: solid 1px #ffffff;
            border-radius: 50%;
            padding: 5px;
            width: 20px;
            color: white;
            background: #ffffff;
            margin-bottom: 5px;
        }

        p.head i.fa {
            float: left
        }

        .rb-skillrate-value[value="1"] {
            width: 20%
        }

        .rb-skillrate-value[value="2"] {
            width: 40%
        }

        .rb-skillrate-value[value="3"] {
            width: 60%
        }

        .rb-skillrate-value[value="4"] {
            width: 80%
        }

        .rb-skillrate-value[value="5"] {
            width: 100%
        }
        </style>
        <?php if($_SESSION['lang'] == 'ar')
		{ ?>
        <style>
        .nav-link {
            float: left
        }

        p.head i.fa {
            float: right;
            padding-left: 10px;
        }

        img#cv-ava {
            margin-left: 15px;
        }

        .rowForm {
            padding: 0 50px !important;
            direction: rtl !important;
            text-align: right !important;
        }

        div#exportpdf {
            direction: rtl !important;
            text-align: right !important;
        }

        #rb-top-info-img .rb-top-info {
            text-align: right !important;
            padding-right: 40px !important;
        }

        .icoweb i.fa {
            float: right;
            margin-left: 10px !important;
        }

        .btn_print {
            direction: rtl !important;
        }*{
            font-family: 'Almarai', sans-serif;

        }#rb-content span.exp-date {
    float: left;
}
        </style>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300&display=swap');
</style>
        <?php } ?>

        <div id="rb-content-top">
            <div class="rb-block">
                <img class="YourImage" id="cv-ava" ng-src="{{PreviewImage}}" ng-show="PreviewImage != null" alt=""
                    style="height:150px;width:150px" />

                <div>
                    <h1 id="FullNameLabel"><span>{{name}}</span></h1>
                    <h1 class="job_position" id="JobpositionLabel"><span>{{position}}</span></h1>

                </div>
            </div>
        </div>
        <div id="rb-main">

            <div id="rb-content">

                <div class="rb-content-main">

                    <div class="rb-block" id="targetLabel">
                        <p class="head">
                            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
                            <span><?=$lang["TARGET"]?></span>
                        </p>
                        <div>
                            <div class="rb-box-content">
                                <div class="exp-content">{{target}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rb-block" ng-show="eduShow">

                        <p class="head">
                            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                            <span><?=$lang["EDUCATION"]?></span>
                        </p>
                        <div>

                            <div class="rb-box-content" ng-repeat="c in edu">

                                <h3>
                                    <span>{{c.eduName}}</span>
                                    <span class="exp-date"><em>{{c.eduFrom | date: "yyyy-MM-dd"}}</em> -
                                        <em>{{c.eduTo | date: "yyyy-MM-dd"}}</em></span>
                                </h3>
                                <p class="h3">
                                    <span><?=$lang['Major']?></span>
                                </p>
                                <div class="exp-content">{{c.eduMajor}}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rb-block" ng-show="exShow">

                        <p class="head">
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            <span><?=$lang["EXPERICENCE"]?></span>
                        </p>
                        <div>

                            <div class="rb-box-content" ng-repeat="c in company">

                                <h3>
                                    <span>{{ c.companyName }}</span>
                                    <span class="exp-date"><em>{{c.companyFrom | date: "yyyy-MM-dd"}}</em> -
                                        <em>{{c.companyTo | date: "yyyy-MM-dd"}}</em></span>
                                </h3>
                                <p class="h3">
                                    <span>{{c.companyPosition}}</span>
                                </p>
                                <div class="exp-content">{{c.pDesc}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rb-block" ng-show="actShow">

                        <p class="head">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <span><?=$lang["ACTIVITIES"]?></span></span>
                        </p>
                        <div>

                            <div class="rb-box-content" ng-repeat="c in org">
                                <h3>
                                    <span>{{ c.orgName }}</span>
                                    <span class="exp-date"><em>{{c.orgFrom | date: "yyyy-MM-dd"}}</em> -
                                        <em>{{c.orgTo | date: "yyyy-MM-dd"}}</em></span>
                                </h3>
                                <p class="h3">
                                    <span>{{c.orgPosition}}</span>
                                </p>
                                <div class="exp-content">{{c.orgDesc}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rb-block" ng-show="awardShow">
                        <p class="head">
                            <i class="fa fa-trophy" aria-hidden="true"></i>
                            <span><?=$lang["AWARD"]?></span>
                        </p>
                        <div>
                            <div class="rb-box-content" ng-repeat="c in award">
                                <h3>
                                    <span>{{c.wname}}</span>
                                    <span class="exp-date"><em>{{c.wdate | date: "yyyy-MM-dd"}}</em></span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="rb-block" ng-show="sklShow">
                        <p class="head">
                            <i class="fa fa-cogs" aria-hidden="true"></i>
                            <span><?=$lang["SKILL"]?></span>
                        </p>
                        <div>
                            <div class="rb-box-content" ng-repeat="c in skill">
                                <h3>
                                    <span>{{c.sname}}</span>
                                </h3>
                                <div class="exp-content">{{c.sdesc}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rb-block" id="moreinfoLabel">

                        <p class="head">
                            <i class="fa fa-caret-square-o-down" aria-hidden="true"></i>
                            <span><?=$lang["MOREINFORMATION"]?></span>
                        </p>
                        <div>
                            <div class="rb-box-content">
                                <div class="exp-content">{{moreinfo}}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rb-block" id="refLabel">

                        <p class="head">
                            <i class="fa fa-link" aria-hidden="true"></i>
                            <span><?=$lang["REFERENCES"]?></span>
                        </p>
                        <div>

                            <div class="rb-box-content">
                                <div class="exp-content">{{ref}}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="rb-left">
                <div class="block rb-block" id="aboutMeLabel">
                    <p class="h3"><span class="box-title rb_data"><?=$lang["information"]?></span></p>
                </div>
                <div class="box-contact">
                    <p class="icoweb" id="DateOfBirthLabel"><i
                            class="fa fa-calendar"></i><span>{{dob | date: "yyyy-MM-dd"}}</span>
                    </p>
                    <p class="icoweb" id="SexLabel"><i class="fa fa-user"></i><span>{{sex}}</span>
                    </p>
                    <p class="icoweb" id="PhoneNumberLabel"><i class="fa fa-phone"></i><span>{{phone}}</span></p>
                    <p class="icoweb" id="EmailLabel"><i class="fa fa-envelope-square"></i><span>{{email}}</span>
                    </p>
                    <p class="icoweb" id="FacebookUsernameLabel"><i class="fa fa-info"></i><span>fb.com/{{fb}}</span>
                    </p>
                    <p class="icoweb" id="addressLabel"><i
                            class="fa fa-map-marker"></i><span><?=$lang["BuildingNo"]?>{{BuildingNo}}-<?=$lang["StreetNo"]?>
                            {{StreetNo}},<?=$lang["Area"]?> {{Area}} <?=$lang["PostalCode"]?> {{PostalCode}} ,
                            <?=$lang["AdditionalNumber"]?> {{AdditionalNumber}} , <?=$lang["UnitNo"]?> {{UnitNo}}</span>
                    </p>
                </div>
                <!--
    <p class="h3"><span class="box-title rb_data">Skill</span></p>
          <div class="exp content-edit skill">
            <div class="rb-box-content-skill">
              <p class="skill-name">Skill's name</p>
              <div class="bar-exp rb-skillrate-bar"><span class="rb-skillrate-value" value="1" ></span></div>
              <p class="skill-name">Skill's name</p>
              <div class="bar-exp rb-skillrate-bar"><span class="rb-skillrate-value" value="2" ></span></div>
              <p class="skill-name">Skill's name</p>
              <div class="bar-exp rb-skillrate-bar"><span class="rb-skillrate-value" value="3" ></span></div>
              <p class="skill-name">Skill's name</p>
              <div class="bar-exp rb-skillrate-bar"><span class="rb-skillrate-value" value="4" ></span></div>
              <p class="skill-name">Skill's name</p>
              <div class="bar-exp rb-skillrate-bar"><span class="rb-skillrate-value" value="5" ></span></div>
            </div>
          </div>-->
            </div>


        </div>
    </div>
    </div>

</body>
<script>
$(document).ready(function() {
    if (!$('#FullName').val()) {
        $('#FullNameLabel').hide();
    } else {
        $('#FullNameLabel').show();
    }
    if (!$('#Jobposition').val()) {
        $('#JobpositionLabel').hide();
    } else {
        $('#JobpositionLabel').show();
    }
    if (!$('#DateOfBirth').val()) {
        $('#DateOfBirthLabel').hide();
    } else {
        $('#DateOfBirthLabel').show();
    }
    if ($('#Sex :selected').text() == '') {
        $('#SexLabel').hide();
    } else {
        $('#SexLabel').show();
    }
    if (!$('#YourImage').val()) {
        $('.YourImage').hide();
    } else {
        $('.YourImage').show();
    }
    if (!$('#Email').val()) {
        $('#EmailLabel').hide();
    } else {
        $('#EmailLabel').show();
    }
    if (!$('#PhoneNumber').val()) {
        $('#PhoneNumberLabel').hide();
    } else {
        $('#PhoneNumberLabel').show();
    }
    if (!$('#FacebookUsername').val()) {
        $('#FacebookUsernameLabel').hide();
    } else {
        $('#FacebookUsernameLabel').show();
    }
    if ((!$('#BuildingNo').val()) && (!$('#StreetNo').val()) && (!$('#Area').val())) {
        $('#addressLabel').hide();
    } else {
        $('#addressLabel').show();
    }
    if ((!$('#FacebookUsername').val()) || (!$('#DateOfBirth').val()) || (!$('#PhoneNumber').val()) || (!$(
            '#Email').val())) {
        $('#aboutMeLabel').hide();
    } else {
        $('#aboutMeLabel').show();
    }

    if (!$('#target').val()) {
        $('#targetLabel').hide();
    } else {
        $('#targetLabel').show();
    }
    if (!$('#moreinfo').val()) {
        $('#moreinfoLabel').hide();
    } else {
        $('#moreinfoLabel').show();
    }

    if (!$('#ref').val()) {
        $('#refLabel').hide();
    } else {
        $('#refLabel').show();
    }

});
$('#FullName').change(function() {
    if (!$(this).val()) {
        $('#FullNameLabel').hide();
    } else {
        $('#FullNameLabel').show();
    }
});
$('#Jobposition').change(function() {
    if (!$(this).val()) {
        $('#JobpositionLabel').hide();
    } else {
        $('#JobpositionLabel').show();
    }
});
$('#DateOfBirth').change(function() {
    if (!$(this).val()) {
        $('#DateOfBirthLabel').hide();
    } else {
        $('#DateOfBirthLabel').show();
    }
});
$('#Sex').change(function() {

    if (!$('#Sex :selected').text() == '') {
        $('#SexLabel').hide();
    } else {
        $('#SexLabel').show();
    }
});
$('#YourImage').change(function() {

    if (!$('#YourImage').val()) {
        $('.YourImage').hide();
    } else {
        $('.YourImage').show();
    }
});
$('#Email').change(function() {

    if (!$('#Email').val()) {
        $('#EmailLabel').hide();
    } else {
        $('#EmailLabel').show();
    }
});
$('#PhoneNumber').change(function() {

    if (!$('#PhoneNumber').val()) {
        $('#PhoneNumberLabel').hide();
    } else {
        $('#PhoneNumberLabel').show();
    }
});
$('#FacebookUsername').change(function() {

    if (!$('#FacebookUsername').val()) {
        $('#FacebookUsernameLabel').hide();
    } else {
        $('#FacebookUsernameLabel').show();
    }
});
$('#BuildingNo').change(function() {


    if ((!$('#BuildingNo').val()) && (!$('#StreetNo').val()) && (!$('#Area').val())) {
        $('#addressLabel').hide();
    } else {
        $('#addressLabel').show();
    }
});
$('#StreetNo').change(function() {


    if ((!$('#BuildingNo').val()) && (!$('#StreetNo').val()) && (!$('#Area').val())) {
        $('#addressLabel').hide();
    } else {
        $('#addressLabel').show();
    }
});

$('#target').change(function() {

    if (!$('#target').val()) {
        $('#targetLabel').hide();
    } else {
        $('#targetLabel').show();
    }
});

$('#moreinfo').change(function() {

    if (!$('#moreinfo').val()) {
        $('#moreinfoLabel').hide();
    } else {
        $('#moreinfoLabel').show();
    }
});
$('#ref').change(function() {

    if (!$('#ref').val()) {
        $('#refLabel').hide();
    } else {
        $('#refLabel').show();
    }
});

$('#Area').change(function() {

    if ((!$('#BuildingNo').val()) && (!$('#StreetNo').val()) && (!$('#Area').val())) {
        $('#addressLabel').hide();
    } else {
        $('#addressLabel').show();
    }
});

$('#PreviewPrint').click(function() {
    $('#exportpdf').show();
    $('.rowForm').hide();
    $('#Back').show();
});
$('#Back').click(function() {
    $('.rowForm').show();

    $('#Back').hide();
    $('#exportpdf').hide();
});

function printDiv() {

    var divToPrint = document.getElementById('exportpdf');
    // divToPrint.style.display = "block";

    var newWin = window.open('', 'Print-Window');

    newWin.document.open();

    newWin.document.write(
        '<html><head><link href=\"css/css2.css\" rel=\"stylesheet\"></head><body onload="window.print()"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">'
        );
    <?php if($_SESSION['lang'] == 'ar')
		{ ?>newWin.document.write(
        '<style>body{direction:rtl};   p.head i.fa {    float: right;    padding-left: 10px;}.rowForm {    padding: 0 50px !important;    direction: rtl !important;    text-align: right !important;}div#exportpdf {    direction: rtl !important;   text-align: right !important;}#rb-top-info-img .rb-top-info {    text-align: right !important;    padding-right: 40px !important;}.icoweb i.fa {    float: right;   margin-left: 10px !important;}.btn_print {    direction: rtl !important; }</style>'
        );
    <?php } ?>
    newWin.document.write(divToPrint.innerHTML + '</body></html>');


    newWin.document.close();

    setTimeout(function() {
        newWin.close();
    }, 10);

}


  function ExportDiv() {
          var element = document.getElementById('exportpdf');
         var opt = {
         margin:       .3,
         filename:     'myfile.pdf',
         image:        { type: 'jpeg', quality: 0.98 },
         html2canvas:  { scale: 1 },
         jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
         };
         
         // New Promise-based usage:
         html2pdf().set(opt).from(element).save();
         
         // Old monolithic-style usage:
         html2pdf(element, opt);
         /*$("#exportpdf").printThis({
        debug: false,
        importCSS: true,
        importStyle: true,
        printContainer: true,
        //loadCSS: "../css/style.css",
        //pageTitle: "My Modal",
        removeInline: false,
        printDelay: 333,
        header: null,
        formValues: true ,
        doctypeString: '<!DOCTYPE html>'
    });*/
    }


var app = angular.module('MyApp', []);

app.controller('MyController', function($scope) {

    $scope.eduShow = false;
    $scope.exShow = false;
    $scope.actShow = false;
    $scope.awardShow = false;
    $scope.sklShow = false;
    $scope.SelectFile = function(e) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $scope.PreviewImage = e.target.result;
            $scope.$apply();
        };

        reader.readAsDataURL(e.target.files[0]);
    };
    $scope.company = [];
    $scope.org = [];
    $scope.award = [];
    $scope.skill = [];
    $scope.edu = [];

    $scope.add = function() {

        var obj = {
            companyName: $scope.companyName,
            companyPosition: $scope.companyPosition,
            pDesc: $scope.pDesc,
            companyTo: $scope.companyTo,
            companyFrom: $scope.companyFrom
        };
        $scope.company.push(obj);
        $scope.companyName = '';
        $scope.companyPosition = '';
        $scope.companyFrom = '';
        $scope.companyTo = '';
        $scope.pDesc = '';
        $scope.exShow = true;

    };
    $scope.addOrg = function() {

        var obj = {
            orgName: $scope.orgName,
            orgPosition: $scope.orgPosition,
            orgDesc: $scope.orgDesc,
            orgTo: $scope.orgTo,
            orgFrom: $scope.orgFrom
        };
        $scope.org.push(obj);
        $scope.orgName = '';
        $scope.orgPosition = '';
        $scope.orgDesc = '';
        $scope.orgTo = '';
        $scope.orgFrom = '';
        $scope.actShow = true;
    };

    $scope.addEdu = function() {
        var obj = {
            eduName: $scope.eduName,
            eduFrom: $scope.eduFrom,
            eduTo: $scope.eduTo,
            eduMajor: $scope.eduMajor,
        };
        $scope.edu.push(obj);
        $scope.eduName = '';
        $scope.eduFrom = '';
        $scope.eduTo = '';
        $scope.eduMajor = '';

        $scope.eduShow = true;
    };
    $scope.addAward = function() {

        var obj = {
            wname: $scope.wname,
            wdate: $scope.wdate,
        };
        $scope.award.push(obj);
        $scope.wname = '';
        $scope.wdate = '';
        $scope.awardShow = true;
    };

    $scope.addSkill = function() {

        var obj = {
            sname: $scope.sname,
            sdesc: $scope.sdesc,
        };
        $scope.skill.push(obj);
        $scope.sname = '';
        $scope.sdesc = '';
        $scope.sklShow = true;
    };

    $scope.remove = function(index) {
        $scope.company.splice(index, 1);
        if ($scope.company.length == 0) {
            $scope.exShow = false;
        }
    };
    $scope.removeorg = function(index) {
        $scope.org.splice(index, 1);
        if ($scope.org.length == 0) {
            $scope.actShow = false;
        }
    };
    $scope.removeaward = function(index) {
        $scope.award.splice(index, 1);
        if ($scope.award.length == 0) {
            $scope.awardShow = false;
        }
    };
    $scope.removeSkill = function(index) {
        $scope.skill.splice(index, 1);
        if ($scope.skill.length == 0) {
            $scope.sklShow = false;
        }
    };
    $scope.removeedu = function(index) {

        $scope.edu.splice(index, 1);
        if ($scope.edu.length == 0) {
            $scope.eduShow = false;

        }
    };

});
</script>
<script>
$("#lang_ar").click(function() {
    var lang_ar = 'ar';
    $.ajax({
        url: 'change_lang.php',
        type: 'POST',
        data: {
            random: Math.random(),
            lang: lang_ar
        },
        success: function(data) {
            location.reload();
        }
    });

});
$("#lang_en").click(function() {
    var lang_en = 'en';
    $.ajax({
        url: 'change_lang.php',
        type: 'POST',
        data: {
            random: Math.random(),
            lang: lang_en
        },
        success: function(data) {
            location.reload();
        }
    });
});
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
</script>

</html>
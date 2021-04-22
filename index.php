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
<html lang="en">
    <head>
        
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
        <title>CV Creator</title>
        <meta name="description" content="Best tool drag and drop resumbuilder.">
        <meta name="keywords" content="best resume builder, cover letter, cover letter builder, cv, CV Builder, drag and drop, drag and drop resume builder, form builder, html builder, html form builder, page builder, resume editor, resume templates">
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:400,400i,500,600,700|Quicksand:700|Indie+Flower:400">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="css/app.bundle.css?v=1.2">
        <link rel="stylesheet" href="css/app.css?v=1.2">
		<?php if($_SESSION['lang'] == 'ar')
		{
			?>

				<style>
				@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300&display=swap');
                *
                {
                    font-family: 'Almarai', sans-serif;

                }
				body {
					direction: rtl;
				}

				nav.ml-auto.header-nav.d-none.d-md-block {
					float: left;
					width: 80%;
					text-align: left;
				}
				</style>
		<?php } ?>
    </head>
    <body data-spy="scroll" data-target="#mainNav" data-offset="70">
                
        <div class="page">
        <header class="header js-header">
            <div class="container">
                <div class="d-flex align-items-center position-relative">
                    <a href="index.php" class="logo">
                        <img src="imgs/logo.png" alt="" title="">
                        <div>
                          CV Creator
                        </div>
                    </a> 
					<nav class="ml-auto header-nav d-none d-md-block"> 
                                <a id="lang_ar" class="nav-link" href="#"><img src="imgs/ar.png" width="20px"/></a>
                                <a id="lang_en" class="nav-link" href="#"><img src="imgs/en.png" width="20px"/></a>
                                                </nav>
                </div>
            </div>
        </header>
        
            <main class="main">
                
  
        <section class="section" id="templates">
                <div class="container text-center">
                    <h2 class="section-title mb-2"><?=$lang['CVtemplates']?></h2>
                    <p class="section-description"><?=$lang['CVDesc']?>  
                        </p>
                         <div class="list_teamplate">
                                <div class="row"> 
                                                                            <div class="col-md-4">
                                          <a href="template3.php" class="nav-link">
                                          <div class="card">
                                                                                            <img src="imgs/1653344515.png" class="card-img-top" alt="...">
                                              <div class="card-body">
                                                <h5 class="card-title"><?=$lang['Resumeprofessional']?></h5>
                                              </div>
                                            </div>
                                          </a>
                                      </div>
                                                                            <div class="col-md-4">
                                          <a href="template2.php" class="nav-link">
                                          <div class="card">
                                                                                            <img src="imgs/338541797.png" class="card-img-top" alt="...">
                                              <div class="card-body">
                                                <h5 class="card-title"><?=$lang['Resumeonecolumn2']?></h5>
                                              </div>
                                            </div>
                                          </a>
                                      </div>
                                                                            <div class="col-md-4">
                                          <a href="template1.php" class="nav-link">
                                          <div class="card">
                                                                                            <img src="imgs/148218144.png" class="card-img-top" alt="...">
                                              <div class="card-body">
                                                <h5 class="card-title"><?=$lang['Resumeonecolumn']?></h5>
                                              </div>
                                            </div>
                                          </a>
                                      </div>
                                                  
                                                        
                                </div>
                        </div> 
                        
                </div>
            </section>
 
        
            <footer class="footer">
                <div class="container">
                    <div class="row text-center text-lg-left">
                        <div class="col-lg-6">
                                &copy; <?php echo date("Y");?> <a href="#" target="_blank">CV Creator</a> &mdash;  
                        </div>
                        <div class="col-lg-6 text-lg-right">
                            <a href="#"><?=$lang['PrivacyPolicy']?></a>
                            <a href="#"><?=$lang['Termandcondition']?></a>
                        </div>
                    </div>
                </div>
            </footer>
        
        </div>
        <a id="back-to-top" href="#" class="btn btn-light btn-lg back-to-top" role="button"><i class="fe fe-chevron-up"></i></a>
        <script src="js/app.bundle.js?v=1.2" type="text/javascript"></script>

        <script>
        $(document).ready(function(){
            "use strict";

            $(window).scroll(function () {
                    if ($(this).scrollTop() > 50) {
                        $('#back-to-top').fadeIn();
                    } else {
                        $('#back-to-top').fadeOut();
                    }
                });
                
                // scroll body to 0px on click
                $( "#back-to-top" ).on( "click", function() {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 200);
                    return false;
                });
        });
    </script>
	 <script>
   $( "#lang_ar" ).click(function() {
      var lang_ar = 'ar'; 
      $.ajax({
         url: 'change_lang.php' ,
         type:'POST',
         data:{random:Math.random(),
               lang : lang_ar
         },
         success: function(data)
         {
             location.reload();
         }
      });
                     
   });
   $( "#lang_en" ).click(function() {
      var lang_en = 'en'; 
      $.ajax({
         url: 'change_lang.php' ,
         type:'POST',
         data:{random:Math.random(),
               lang : lang_en
         },
         success: function(data)
         {
             location.reload();
         }
      });
   });
</script>
    </body>
</html>
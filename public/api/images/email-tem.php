<?php //$enc_id = $id;
//$mail_body
 $mail_body = '<!doctype html>
                <html>
                    <head>
                    <meta charset="utf-8">
                    <!-- utf-8 works for most cases -->
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <!-- Forcing initial-scale shouldn&prime;t be necessary -->
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <!-- Use the latest (edge) version of IE rendering engine -->
                    <title>LetsQube Invitation Letter</title>
                    <!-- The title tag shows in email notifications, like Android 4.4. -->
                    <!-- Please use an inliner tool to convert all CSS to inline as inpage or external CSS is removed by email clients -->
                    <!-- important in CSS is used to prevent the styles of currently inline CSS from overriding the ones mentioned in media queries when corresponding screen sizes are encountered -->

                    <!-- CSS Reset -->
                    <style type="text/css">
                        /* What it does: Remove spaces around the email design added by some email clients. */
                            /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
                        html,  body {
                            margin: 0 !important;
                            padding: 0 !important;
                            height: 100% !important;
                            width: 100% !important;
                        }
                        /* What it does: Stops email clients resizing small text. */
                        * {
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                        }
                        /* What it does: Forces Outlook.com to display emails full width. */
                        .ExternalClass {
                            width: 100%;
                        }
                        /* What is does: Centers email on Android 4.4 */
                        div[style*="margin: 16px 0"] {
                            margin: 0 !important;
                        }
                        /* What it does: Stops Outlook from adding extra spacing to tables. */
                        table,  td {
                            mso-table-lspace: 0pt !important;
                            mso-table-rspace: 0pt !important;
                        }
                        /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
                        table {
                            border-spacing: 0 !important;
                            border-collapse: collapse !important;
                            table-layout: fixed !important;
                            margin: 0 auto !important;
                        }
                        table table table {
                            table-layout: auto;
                        }
                        /* What it does: Uses a better rendering method when resizing images in IE. */
                        img {
                            -ms-interpolation-mode: bicubic;
                        }
                        /* What it does: Overrides styles added when Yahoo&prime;s auto-senses a link. */
                        .yshortcuts a {
                            border-bottom: none !important;
                        }
                        /* What it does: Another work-around for iOS meddling in triggered links. */
                        a[x-apple-data-detectors] {
                            color: inherit !important;
                        }
                    </style>

                    <!-- Progressive Enhancements -->
                    <style type="text/css">
                        
                        /* What it does: Hover styles for buttons */
                        .button-td,
                        .button-a {
                            transition: all 100ms ease-in;
                        }
                        .button-td:hover,
                        

                        /* Media Queries */
                        @media screen and (max-width: 600px) {

                            .email-container {
                                width: 100% !important;
                            }

                            /* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */
                            .fluid,
                            .fluid-centered {
                                max-width: 100% !important;
                                height: auto !important;
                                margin-left: auto !important;
                                margin-right: auto !important;
                            }
                            /* And center justify these ones. */
                            .fluid-centered {
                                margin-left: auto !important;
                                margin-right: auto !important;
                            }

                            /* What it does: Forces table cells into full-width rows. */
                            .stack-column,
                            .stack-column-center {
                                display: block !important;
                                width: 100% !important;
                                max-width: 100% !important;
                                direction: ltr !important;
                            }
                            /* And center justify these ones. */
                            .stack-column-center {
                                text-align: center !important;
                            }
                        
                            /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
                            .center-on-narrow {
                                text-align: center !important;
                                display: block !important;
                                margin-left: auto !important;
                                margin-right: auto !important;
                                float: none !important;
                            }
                            table.center-on-narrow {
                                display: inline-block !important;
                            }
                                
                        }

                    </style>
                    </head>
                    <body bgcolor="#ffffff" width="100%" style="margin: 0;" yahoo="yahoo">
                    <table bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" height="100%" width="100%" style="border-collapse:collapse;">
                    <tr>
                        <td><center style="width: 100%;">
                            
                            
                            <!-- Email Header : BEGIN -->
                            
                            <!-- Email Header : END --> 
                            <table align="center" width="400" class="email-container">
                            <tr>
                                <td style="padding: 20px 0; text-align: center"><img draggable="false" src="https://letsqube.com/api/images/logo.png" width="150" alt="letsqube logo" border="0"></td>
                            </tr>
                            </table>
                            <!-- Email Body : BEGIN -->
                            <table cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" width="600" class="email-container" style="border-radius: 10px;">
                                <tr> <td style="padding: 40px;"><center><span style="color: #003CB0; font-family: roboto; font-weight: bold; font-size: 24px;">Hi there!</span> <BR> <span style="color: #003CB0; font-family: roboto; font-size: 18px; font-weight: bold;">'.$email.'</span><BR> <span style="font-family: roboto; font-size:18px;"> Invited you to qube</span></center></td></tr>
                            <!-- Hero Image, Flush : BEGIN -->
                            <tr>
                                <td class="full-width-image"><img draggable="false" src="https://letsqube.com/api/images/bini-dart.png" width="600" alt="dart image" border="0" align="center" style="width: 65%; position: relative; margin-left: 20%; max-width: 600px; height: auto;"></td>
                            </tr>
                            <!-- Hero Image, Flush : END --> 
                            
                            <!-- 1 Column Text : BEGIN -->
                            <tr>
                                <td style="padding: 40px; text-align: center; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555;"> 
                                   
                                
                                <!-- Button : Begin -->
                                
                                <table cellspacing="0" cellpadding="0" border="0" align="center" style="margin: auto">
                                    <tr>
                                    <td style="border-radius: 3px; text-align: center;" class="button-td"><a href="https://letsqube.com/respond/'.$enc_id.'" style="background: #003CB0; border: 15px solid #003CB0; padding: 0 40px; color: #ffffff; font-family: roboto; font-size: 15px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 50px; font-weight: bold;" class="button-a"> 
                                    <!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]-->View Invitation<!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]--> 
                                    </a></td>
                                </tr>
                                </table>
                                
                                <!-- Button : END --></td>
                            </tr>
                            <!-- 1 Column Text : BEGIN --> 
                            
                            <!-- Background Image with Text : BEGIN -->
                            <tr>
                                <td valign="middle" style="text-align: center;"><!--[if gte mso 9]>
                                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:175px; background-position: center center !important;">
                                    <v:fill type="tile" src="assets/Responsive/Image_600x230.png" color="#222222" />
                                    <v:textbox inset="0,0,0,0">
                                    <![endif]-->
                                
                                <div>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td valign="middle" style="text-align: center; padding: 40px; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #003CB0;"> 
                                            <span style="font-size: 14px; font-family:roboto;">Spend more quality time with your loved ones. <BR>Make memoreis that last forever</span> </td>
                                    </tr>
                                </table>
                                </div>
                                
                                <!--[if gte mso 9]>
                                    </v:textbox>
                                    </v:rect>
                                    <![endif]--></td>
                            </tr>
                            <!-- Background Image with Text : END --> 
                            
                            <!-- Two Even Columns : BEGIN -->
                        
                            <!-- Two Even Columns : END --> 
                            
                            
                            <!-- Three Even Columns : END --> 
                            
                            
                            <!-- Thumbnail Right, Text Left : BEGIN -->
                            
                        </table>
                            <!-- Email Body : END --> 
                            
                            <!-- Email Footer : BEGIN -->
                            <table align="center" width="600" class="email-container">
                            <tr>
                                <td style="padding: 40px 10px;width: 100%; font-size: 18px; font-family: roboto; mso-height-rule: exactly; line-height:18px; text-align: center; color: #003CB0;">
                                <a href="https://letsqube.com/">Letsqube</a><br>
                                <span class="mobile-link--footer" style="font-size: 10.5px;">Place of invitation: '.$where.'</span> <br>
                                <br>
                                <!--<unsubscribe style="color:#888888; text-decoration:underline;">unsubscribe</unsubscribe>--></td>
                            </tr>
                        </table>
                            <!-- Email Footer : END -->
                            
                        </center></td>
                    </tr>
                    </table>
                </body>
                </html>';
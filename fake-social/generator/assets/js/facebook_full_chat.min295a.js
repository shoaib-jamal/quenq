var $profileCrop;function editText(e){$(".edit-text").show(),$(".main-input-text").hide(),$(".main-input-text,.date-info-icon").hide(),e.hide(),e.parents(".input-main-div").find(".main-input-text,.date-info-icon").show().select()}function postChangeOrUpload(e,a){a.stopPropagation(),$img_src=getImagePath(e,a),$imgTag=e.parents(".facebook-gallery-image").find("img"),"error"==$img_src?(e.val(""),$(".error_msg").html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>'),$(".error_msg").attr("style","display:flax"),setTimeout(function(){$(".error_msg").attr("style","display:none")},6e3)):$imgTag.attr("src",$img_src)}function removeDiv(e){$(e).parent("div").remove()}function deletebtn(e){confirm("Are you sure you want to delete this message?")&&$("#message-box-num"+e).remove()}function likebtn(e){var a=$(e).data("num");$(e).toggleClass("active"),$(e).hasClass("active")?($(e).html('<i class="fa fa-heart" aria-hidden="true"></i>'),$("#message-box-num"+a).find(".message-like").addClass("show"),$("#message-box-num"+a).find(".message-like").attr("onclick",'$(".btn'+a+'").click()'),$("#message-box-num"+a).find(".message-like").removeClass("hide"),$("#message-box-num"+a).addClass("like")):($(e).html('<i class="fa fa-heart-o" aria-hidden="true"></i>'),$("#message-box-num"+a).find(".message-like").removeClass("show"),$("#message-box-num"+a).find(".message-like").removeAttr("onclick"),$("#message-box-num"+a).find(".message-like").addClass("hide"),$("#message-box-num"+a).removeClass("like"))}function getMessageBoxHtml(e){var a=$("#js_data").data("base_url"),s="receive"==e.message_send_type?"received":"sent",t="sent"==e.message_send_type?"left":"right",i="sent"==e.message_send_type?"insta-sent":"";e.message_send_type;var l=""!=e.message_text?e.message_text:"",o="seen"==e.msg_seen&&"sent"==s?"show":"hide",n="sent"==e.msg_sent&&"sent"==s?"show":"hide",r="like"==e.msg_like?"show":"hide";$num=Number($(".message-box-num").val());var d="video"==e.postimage?'<div class="video-info "><div class="video-icon"><span class="v_image"></span></div><div class="video-time input-main-div"><p class="edit-text" onclick="editText($(this));"><span class="vt'+($num+1)+'-text">0:02</span><i class="fa fa-pencil" aria-hidden="true"></i></p><input type="text" class="text-name main-input-text insmessage-input vt'+($num+1)+'-input check-bad-word" data-class="vt'+($num+1)+'" style="display: none;" value="0:02"> </div></div>':" ",p="receive"==e.message_send_type?'<div class="message-avatar fb-received-img"><label class="input-img"><input type="button" value="Image Button" class="img-input" name="profile-btn" id="profile-btn" onclick="$(\'#profile-img\').click();$(\'#crop-profile-modal\').modal(\'show\')"><img src="'+$(".facebook_profile_pic_img").attr("src")+'" class="facebook_profile_pic_img" alt="Profile"></label><div class="active-fb"></div></div>':"",c="None"!=e.message_date?'<div class="main-time-div input-main-div"><p class="edit-text" onclick="editText($(this));" ><span class="chattime-text'+($num+1)+'-text">'+e.message_date+" "+e.message_time+' </span> <i class="fa fa-pencil" aria-hidden="true"></i></p><input type="text" class="main-input-text chattime-text'+($num+1)+'-input check-bad-word insmessage-input" value="'+e.message_date+" "+e.message_time+'"  data-class="chattime-text'+($num+1)+'" style="display: none;"><button class="remove-text btn-remove" onclick="removeDiv(this)"><i class="fa fa-times-circle" aria-hidden="true"></i></button></div>':"",m=replymsgText=replymsgText1="";if(""!=$(".temp-reply-box").html().trim()&&($t="","sent"==$(".temp-reply-box .fb-msg-reply").data("sender-type")&&"sent"==s?$t="You replied to yourself":"received"==$(".temp-reply-box .fb-msg-reply").data("sender-type")&&"sent"==s?$t='You replied to <span class="profileChatName-text">John</span>':"sent"==$(".temp-reply-box .fb-msg-reply").data("sender-type")&&"received"==s?$t='<span class="profileChatName-text">John</span> replied to you':"received"==$(".temp-reply-box .fb-msg-reply").data("sender-type")&&"received"==s&&($t='<span class="profileChatName-text">John</span> replied to themeself'),"text"==$(".temp-reply-box .fb-msg-reply").data("t")?replymsgText+='<div class="replay-message"><p>'+$(".temp-reply-box .reply-msg-text").text()+"</p></div>":"photo"==$(".temp-reply-box .fb-msg-reply").data("t")?replymsgText+='<div class="replay-message"><img src="'+$(".temp-reply-box .fb-reply-img img").attr("src")+'" alt="step 2" height="480" width="600" loading="lazy"></div>':replymsgText+='<div class="replay-message"><p>Attachment</p></div>',replymsgText1+='<div class="reply-msg-sec"><img src="'+a+'/assets/images/facebook_reply.png" alt="facebook reply" class="reply-img"><span>'+$t+"</span></div>",m="message-reply-box"),"text"==e.tabname){if(($image="")!=e.message_image){var g=e.message_image;$image='<div id="message-box-num'+($num+1)+'"   class="message message-'+s+" is-not message-img "+m+'">'+replymsgText1+'<div class="message-container u-table ">'+p+'<div class="message-message u-tableCell u-alignBottom"><div class="message-bubble Caret Caret-'+t+' fb-gallery-image">'+replymsgText+'<div class="share-image" onclick="replyMsg('+($num+1)+", `"+s+'`, `photo`)"> <span class="share android-share"></span> <span class="share ios-share"></span> </div> <div class="fb-text fb-image facebook-gallery-image"><img class="fbstextmsg'+($num+1)+'-image post" src="'+g+'" /> <div class="modal-title-img"> <label class="input-img"><i class="fa fa-pencil" aria-hidden="true" ></i><input type="file" name="post-img" onchange="postChangeOrUpload($(this),event);"></label></div>'+d+'</div><div class="message-share"><span class="send-post"></span></div><div class="message-like '+r+'"></div> <div class="pop-editer"><button data-num="'+($num+1)+'" class="like-btn btn-remove" onclick="likebtn($(this));"><i class="fa fa-heart-o" aria-hidden="true"></i></button><button class="delete-btn btn-remove" onclick="deletebtn('+($num+1)+');" data-num="'+($num+1)+'"><i class="fa fa-trash"></i></button></div></div></div></div><div class="message-footer fb-message-footer '+n+'"><span class="message-footerItem" data-num="'+($num+1)+'"><span class="all-sent">Sent</span></span></div><div class="message-footer fb-message-footer-seen '+o+'"><span class="message-footerItem" data-num="'+($num+1)+'"><img src="'+$(".facebook_profile_pic_img").attr("src")+'" class="facebook_profile_pic_img" alt="Profile"></span></div></div>',$(".message-box-num").val($num+1)}$num=Number($(".message-box-num").val()),($msg="")!=l&&($msg='<div id="message-box-num'+($num+1)+'" class="message message-'+s+" is-not input-main-div "+m+'">'+replymsgText1+'<div class="message-container u-table ">'+p+'<div class="message-message u-tableCell u-alignBottom"><div class="message-bubble msg-pop-up Caret Caret-'+t+'">'+replymsgText+'<div class="pop-editer"><div class="share-image btn-remove" onclick="replyMsg('+($num+1)+", `"+s+'`, `text`)"> <span class="share android-share"></span> <span class="share ios-share"></span> </div> <button class="delete-btn btn-remove" onclick="deletebtn('+($num+1)+');" data-num="'+($num+1)+'"><i class="fa fa-trash"></i></button></div><div class="message-text fb-text"><textarea class="text-name main-input-text insmessage-input fbstextmsg'+($num+1)+'-input check-bad-word" data-class="fbstextmsg'+($num+1)+'" style="display: none;">'+l+'</textarea><div class="edit-text '+i+'" onclick="editText($(this));"><p class="fbstextmsg'+($num+1)+'-text">'+l+'</p> <i class="fa fa-pencil" aria-hidden="true"></i></div><button data-num="'+($num+1)+'" class="like-btn btn-remove btn'+($num+1)+'" onclick="likebtn($(this));"><i class="fa fa-heart-o" aria-hidden="true"></i></button><div class="message-like '+r+'"></div></div> </div></div></div><div class="message-footer fb-message-footer '+n+'"><span class="message-footerItem" data-num="'+($num+1)+'"><span class="all-sent">Sent</span></span></div><div class="message-footer fb-message-footer-seen '+o+'"><span class="message-footerItem" data-num="'+($num+1)+'"><img src="'+$(".facebook_profile_pic_img").attr("src")+'" class="facebook_profile_pic_img" alt="Profile"></span></div><div class="add-space btn-remove"></div></div>',$(".message-box-num").val($num+1)),html=$image+$msg}else"post"==e.tabname?(o="seen"==e.msg_seen&&"sent"==s?"show":"hide",html='<div id="message-box-num'+($num+1)+'" class="message message-'+s+" message-img is-not "+m+'">'+replymsgText1+'<div class="message-container u-table fb-sent-table">'+p+'<div class="message-message u-tableCell u-alignBottom"><div class="message-bubble Caret Caret-'+t+' fb-gallery-image">'+replymsgText+'<div class="share-image" onclick="replyMsg('+($num+1)+", `"+s+'`, `post`)"><span class="share android-share"></span><span class="share ios-share"></span></div> <div class="fb-text fb-image"><div class="fb-post"><div class="ios-post-header"> <div class="modal-title-img"> <label class="input-img"> <i class="fa fa-pencil" aria-hidden="true" ></i> <input type="file" class="img-input" data-box_num="'+($num+1)+'" name="post-img" onchange="getTempImage(this)+">  <img class="preview-profile" id="postprofile_upload" src="'+$(".preview-profile").attr("src")+'" alt="Profie image"></label></div><div class="input-main-div"><span class="edit-text" onclick="editText($(this));" style="display: block;"><span class="postproname'+($num+1)+'-text" >'+$("#postprofilename").val()+'</span><i class="fa fa-pencil" aria-hidden="true"></i></span> <input class="text-name main-input-text  postproname'+($num+1)+'-input check-bad-word" data-class="postproname'+($num+1)+'" value="'+$("#postprofilename").val()+'" style="display: none;" ></div></div><div class="post-img facebook-gallery-image"><img src="'+$(".preview-post-img").attr("src")+'" alt="Post Image" class="postImg"><div class="modal-title-img"><label class="input-img"><i class="fa fa-pencil" aria-hidden="true"></i><input type="file" class="img-input" name="post-img" onchange="postChangeOrUpload($(this),event);"></label></div> </div>   <div class="post-footer input-main-div"><span class="edit-text" onclick="editText($(this));" style="display: block;"><span class="post-msg-text instextmsgpost'+($num+1)+'-text">'+$("#postdescription").val()+'</span><i class="fa fa-pencil" aria-hidden="true"></i></span><textarea class="text-name main-input-text  instextmsgpost'+($num+1)+'-input check-bad-word insmessage-input" data-class="instextmsgpost'+($num+1)+'" value="'+$("#postdescription").val()+'" style="display: none;"></textarea><p>Facebook</p></div>  </div></div></div> </div><div class="message-like '+r+'"></div><div class="pop-editer"><button data-num="'+($num+1)+'" class="like-btn btn-remove" onclick="likebtn($(this));"><i class="fa fa-heart-o" aria-hidden="true"></i></button><button class="delete-btn btn-remove" onclick="deletebtn('+($num+1)+');" data-num="'+($num+1)+'"><i class="fa fa-trash"></i></button></div> </div><div class="message-footer fb-message-footer '+n+'"><span class="message-footerItem" data-num="'+($num+1)+'"><span class="all-sent">Sent</span></span></div><div class="message-footer fb-message-footer-seen '+o+'"><span class="message-footerItem" data-num="'+($num+1)+'"><img src="'+$(".facebook_profile_pic_img").attr("src")+'" class="facebook_profile_pic_img" alt="Profile"></span></div></div>',$(".message-box-num").val($num+1)):"reel"==e.tabname&&(g=e.message_image,e.rsavepost,e.rverifyprofle,html='<div id="message-box-num'+($num+1)+'" class="message message-'+s+" message-img is-not "+m+'">'+replymsgText1+'<div class="message-container u-table fb-sent-table"> '+p+' <div class="message-message u-tableCell u-alignBottom"><div class="message-bubble Caret Caret-'+t+' fb-gallery-image">'+replymsgText+'<div class="fb-text fb-image"><div class="fb-post"><div class="post-img facebook-gallery-image"><img src="'+$(".preview-reel-img").attr("src")+'" alt="reel Image"><div class="modal-title-img"><label class="input-img"><i class="fa fa-pencil" aria-hidden="true"></i><input type="file" class="img-input" name="post-img" onchange="postChangeOrUpload($(this),event);"></label></div> </div><div class="post-footer ios-pf"><div class="modal-title-img"> <label class="input-img"> <i class="fa fa-pencil" aria-hidden="true"></i> <input type="file" class="img-input" name="post-img" data-box_num="'+($num+1)+'" onchange="getTempImage(this)">  <img class="fb_profile_pic_img preview-profile" id="postprofile_upload" src="'+$(".reels-profile").attr("src")+'" alt="Profie image"></label></div> <div><div class="input-main-div"><span class="edit-text" onclick="editText($(this));" style="display: block;"><span class="reelsdes reelproname'+($num+1)+'-text" >'+$("#reelprofiletext").val()+'</span><i class="fa fa-pencil" aria-hidden="true"></i></span><textarea class="text-name main-input-text insmessage-input reelproname'+($num+1)+'-input check-bad-word" data-class="reelproname'+($num+1)+'" value="'+$("#postdescription").val()+'" style="display: none;"></textarea></div><div><p>Facebook</p></div></div></div></div>  <div class="share-image" onclick="replyMsg('+($num+1)+", `"+s+'`, `reel`)"><span class="share android-share"></span><span class="share ios-share"></span></div><div class="message-like '+r+'"></div><div class="pop-editer"><button data-num="'+($num+1)+'" class="like-btn btn-remove" onclick="likebtn($(this));"><i class="fa fa-heart-o" aria-hidden="true"></i></button><button class="delete-btn btn-remove" onclick="deletebtn('+($num+1)+');" data-num="'+($num+1)+'"><i class="fa fa-trash"></i></button></div></div> <div class="message-footer fb-message-footer '+n+'"><span class="message-footerItem" data-num="'+($num+1)+'"><span class="all-sent">Sent</span></span></div><div class="message-footer fb-message-footer-seen '+o+'"><span class="message-footerItem" data-num="'+($num+1)+'"><img src="'+$(".facebook_profile_pic_img").attr("src")+'" class="facebook_profile_pic_img" alt="Profile"></span></div></div></div></div></div>',$(".message-box-num").val($num+1));return c+html}function getTempImage(e){var a=$(e).data("box_num"),e=e.files[0];if(e){var s=new FileReader;s.onload=function(e){$("#message-box-num"+a).find(".preview-profile").attr("src",e.target.result)},s.readAsDataURL(e)}else $("#message-box-num"+a).find(".preview-profile").attr("src",base_url+"assets/images/insta-profile-pic.jpg")}function profileCrop(e){var a=$(e).val().split(".").pop();("jpg"==a.toLowerCase()||"jpeg"==a.toLowerCase()||"png"==a.toLowerCase()||"svg"==a.toLowerCase())&&e.files&&e.files[0]?($("#crop-profile").attr("style","width: 265px; height: 155px;"),$("#crop-profile").removeClass("hide"),$(".img-profile-main-tag").addClass("hide"),(a=new FileReader).onload=function(e){$profileCrop.croppie("bind",{url:e.target.result}).then(function(){})},a.readAsDataURL(e.files[0]),$("#crop-profile-modal").modal("show")):($(e).val(""),$(".error_msg").html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>'),$(".error_msg").attr("style","display:flax"),setTimeout(function(){$(".error_msg").attr("style","display:none")},6e3))}function postprofilename(){var e=$("#postprofilename").val();if(18<e.length){var a=e.substr(0,15)+"...";$("#postprofilename").val(a)}else $("#postprofilename").val(e)}function chatName(e){1<(e=e.val().split(" ")).length&&e.splice(-1,1),$(".profileChatName-text").html(e.join(" "))}function resetForm(){$("#js_data").data("base_url"),$('#chat_modal input[type="text"], #chat_modal input[type="file"], #chat_modal textarea').val(""),$("#chat_modal #msg_seen").prop("checked",!1),$("#chat_modal #msg_sent").prop("checked",!1),$("#message_sent").prop("checked",!0),$("#chat_modal #chat_date").prop("selected",!1),$("#chat_modal #chat_date option:eq(0)").prop("selected",!1),$("#chat_modal #postprofile_upload, #postimage_upload, #reelimage_upload,#chat_modal #reelprofile_upload").parents("label").find("img").attr("src","assets/images/addimgbg.jpg"),$(".file-preview").html(""),$(".file-preview").hide(),$("#chat_modal .nav-tabs .nav-item,#chat_modal .nav-tabs .nav-item .nav-link").removeClass("active"),$(".msg_sent_option, .msg_seen_option").removeClass("hide"),$("#chat_modal .nav-tabs .nav-item:eq(0), #chat_modal .nav-tabs .nav-item:eq(0) .nav-link").addClass("active"),$("#chat_modal .tab-content .tab-pane").removeClass("active in").addClass("fade"),$("#chat_modal .tab-content #text_msg").addClass("active in").removeClass("fade"),$("#chat_date").val("None"),$(".post-tab,.post-tab-link,.videos-tab,.videos-tab-link").show(),$(".temp-reply-box").html(""),$(".temp-reply-box").addClass("d-none"),$(".message-date-input").hide(),$(".file-preview-opt").hide(),jQuery(".hidden-message-image").val(""),"close"==$(".main-modal-div").data("mode")&&($("body").addClass("body-fixed"),$(".main-modal-div").data("mode","open").show()),$("html, body").animate({scrollTop:$(".facebook-chat").offset().top},500)}function replyMsg(e,a,s){$("#js_data").data("base-url"),$text="text"==s?$(".fbstextmsg"+e+"-text").html():"photo"==s?"Photo":"Attachment",replyMsgText='<div class="fb-msg-reply" data-sender-type="'+a+'" data-t="'+s+'"><div class="reply-msg"><span>Replying to</span><p class="reply-msg-text">'+$text+"</p></div>","photo"==s&&(replyMsgText+='<div class="fb-reply-img"><img src="'+($img=$(".fbstextmsg"+e+"-image").attr("src"))+'" alt="facebook Profile" class="fb_privew" loading="lazy"></div>'),replyMsgText+="</div>",$(".fbchat-footer").click(),$(".temp-reply-box").html(replyMsgText),$(".temp-reply-box").removeClass("d-none"),$(".post-tab,.post-tab-link,.videos-tab,.videos-tab-link").hide()}$(document).ready(function(){function e(e,a){if(13==a.which)$(".edit-text").show(),$(".main-input-text,.date-info-icon").hide();else{var a="",s=text1=e.val();!(16<s.length)||e.hasClass("insmessage-input")?a+=text1:a+=text1.substr(0,16)+"...","date"==($nameClass=e.data("class")).replace(/[0-9]/g,"")?""!=s&&s.match(date_regex)&&($("."+$nameClass+"-text").text(s),$("."+$nameClass+"-input").val(s),idate="Today"!=s&&"Yesterday"!=s?getIdate(new Date(s)):s,$(".iphone-"+$nameClass+"-text").text(idate),$(".iphone-"+$nameClass+"-input").val(idate)):($("."+$nameClass+"-text").text(a),$("."+$nameClass+"-input").val(a))}}$('[data-toggle="tooltip"]').tooltip(),$("input[type=radio][name=visibleforLayout]").change(function(){"android"==this.value?(jQuery(".android-header").show(),jQuery(".ios-header").hide(),$(".fb-body").removeClass("iphone")):"iphone"==this.value&&(jQuery(".ios-header").show(),jQuery(".android-header").hide(),$(".fb-body").addClass("iphone"))}),$('#options input[type="text"], #options textarea').keyup(function(){if(e=$(this).attr("data-edit")){var e,a=$(this).val();""==a&&(a="..."),"likes"==(e=e.replace("edit-",""))&&"..."==a?($(".post_likes").css("display","none"),$(".post_write_comment").css("display","none")):"likes"==e&&"..."!=a&&($(".post_likes").css("display","block"),$(".post_write_comment").css("display","block")),$(".text-"+e).html(a),"name"==e&&$(".theName").text(a)}}),$("#profile1_name").keyup(function(){for(var e=$(this).val(),a="",s=0;s<bad.length;s++)0<e.search(bad[s])&&(a=bad[s]);if(14<(text1=e.replace(a,"")).length){var t=text1.substr(0,11)+"...";$(".text-name").text(t)}else $(".text-name").text(text1)}),$("#visiblefooter").click(function(){$("input#visiblefooter").is(":checked")?$(".all_footer_wp").hide():$(".all_footer_wp").show()}),$("#visibleheader").click(function(){$("input#visibleheader").is(":checked")?$(".all_header_wp").hide():$(".all_header_wp").show()}),$("#visiblestatus").click(function(){$("input#visiblestatus").is(":checked")?$(".modal-title-img").addClass("visiblestatus"):$(".modal-title-img").removeClass("visiblestatus")}),$("#visibleonline").click(function(){$("input#visibleonline").is(":checked")?$(".online_facebook_img").addClass("active-fb"):$(".online_facebook_img").removeClass("active-fb")}),$("#online").click(function(){$("input#online").is(":checked")?$(".header-title").hide():$(".header-title").show()}),$("#battery_options").change(function(){$(".battery-container").removeClass("battery-horizontal battery-vertical-one battery-vertical-two"),$(".battery-container").addClass($(this).val())}),$("input[type=radio][name=visibleforLayout]").change(function(){"android"==this.value?(jQuery(".whatsapp-android-header").show(),jQuery(".whatsapp-ios-header").hide(),jQuery(".whatsapp-content").addClass("whatsapp-android-content")):"iphone"==this.value&&(jQuery(".whatsapp-android-header").hide(),jQuery(".whatsapp-ios-header").show(),jQuery(".whatsapp-content").removeClass("whatsapp-android-content"))}),$("#edit-tagname").keyup(function(){var e=$(this).val();$(".header-title").text("@"+e)}),$("#edit-2-Clock").keyup(function(){var e=($("#time-format").prop("checked")?onTimeChangein24:onTimeChange)($(this).val());$(".status-time").text(e)}),$("#edit-2-Clock").change(function(){var e=($("#time-format").prop("checked")?onTimeChangein24:onTimeChange)($(this).val());$(".status-time").text(e)}),$("#time-format").change(function(){if($(this).prop("checked")){var e=onTimeChangein24($("#edit-2-Clock").val());$(".msg-time").each(function(e,a){$(this).text(onTimeChangein24($(this).data("time")))})}else e=onTimeChange($("#edit-2-Clock").val()),$(".msg-time").each(function(e,a){$(this).text(onTimeChange($(this).data("time")))});$(".status-time").text(e)}),$('#options input[name="visibleonline"]').change(function(){$("input[name='visibleonline']").prop("checked")?($(".active-time").hide(),$(".facebook-user-online").show()):($(".active-time").show(),$(".facebook-user-online").hide())}),$("#bt_per").click(function(){$(this).is(":checked")?$(".battery-container").removeClass("hide-percentage"):$(".battery-container").addClass("hide-percentage")}),$("input[type=radio][name=visibleforLayout]").change(function(){"android"==this.value?$(".battery-status").text($("#Battery_percent").val()+"%"):"iphone"==this.value&&$(".battery-status").text($("#Battery_percent").val())}),$("#Battery_percent").keyup(function(){var e=$("#Battery_percent").val();(e=100<e?100:e)<0&&(e=0),$("#Battery_percent").val(e),$(".battery-level").css("width",e+"%"),$("input#iphone_wp").is(":checked")?$(".battery-status").text(e):$(".battery-status").text(e+"%")}),$("#edit-Status").keyup(function(){var e=$(this).val();$(".header-title").text(e)}),$("#active_now").keyup(function(){var e=$(this).val();$(".active-now").text(e)}),$("#networ_speed").change(function(){$(".show-network").removeClass("n5g n4g n3g n2g nwifi"),$(".show-network").addClass($(this).val())}),$('#left-panel input[name="ch_rtl"]').change(function(){"ltr"==$(this).val()?($("#download").css("direction","ltr"),$("#download .pull-left").attr("style","float:left !important"),$("#download .pull-right").attr("style","float:right !important"),$(".ltr").show(),$(".rtl").hide(),$(".message-received .message-container").css({"margin-right":"auto","margin-left":"0","padding-right":"50px"}),$(".message-received .message-avatar").css({right:"auto",left:"0"}),$(".message-received .message-footer").css({"padding-left":"58px","padding-right":"50px"}),$(".tw .message-sent .message-avatar").css({left:"auto",right:"0"}),$(".message-sent .message-container").css({"margin-left":"auto","margin-right":"0"}),$(".tw .message-sent .message-footer").css({float:"right","padding-left":"50px","padding-right":"58px"}),$(".message-received .message-bubble").removeClass("Caret-right").addClass("Caret-left"),$(".message-sent .message-bubble").removeClass("Caret-left").addClass("Caret-right"),$(".modal-footer").css({"text-align":"right"}),$(".tweet-action").css({"margin-left":"0px"})):($("#download .pull-left,#download .pull-right,.tweet-action,.modal-footer,.tw .message-sent .message-footer,.message-sent .message-container,.tw .message-sent .message-avatar,.message-received .message-container,.message-received .message-footer,.message-received .message-avatar").removeAttr("style"),$("#download").css("direction","rtl"),$(".rtl").show(),$(".ltr").hide(),$(".message-received .message-bubble").removeClass("Caret-left").addClass("Caret-right"),$(".message-sent .message-bubble").removeClass("Caret-right").addClass("Caret-left"))}),$("#visiblefooter").click(function(){$("input#visiblefooter").is(":checked")?$(".twitter-chat-footer").hide():$(".twitter-chat-footer").show()}),$("#Seen_now").click(function(){$("input#Seen_now").is(":checked")?$(".last_seen").show():($(".last_seen").hide(),$("#edit-last_seen").val(""))}),$("#Active_now").click(function(){$("input#Active_now").is(":checked")?($(".fb-received-img.message-avatar").append('<div class="active-fb"></div>'),$(".fb-title-img").append('<div class="active-fb"></div>'),$(".active-now").show(),$(".fb-online-icon").html('<img src="/assets/images/fb-online.png">'),$(".fb-comment-like-icon").html('<img src="/assets/images/active-fb-comment-like.png" class="pull-right">')):($(".fb-received-img.message-avatar").find(".active-fb").remove(),$(".fb-title-img").find(".active-fb").remove(),$(".active-now").hide(),$(".fb-online-icon").html('<img src="/assets/images/fb-offline.png">'),$(".fb-comment-like-icon").html('<img src="/assets/images/fb-footer-right.png" class="pull-right">'))}),$("#edit-tagname").keyup(function(){var e=$(this).val();$(".header-title").text("@"+e)}),$(".bf_chat_profile").on("change.bs.fileinput",function(e){e.stopPropagation(),e=jQuery(".profile1 img").attr("src"),jQuery(".modal-title-img.fb-title-img img").attr("src",e),jQuery(".message-avatar.fb-received-img img").attr("src",e),jQuery(".message-footerItem img").attr("src",e)}),$(".edit-text").on("click",function(e){editText($(this))}),$(document).click(function(a){$(a.target).is(".input-main-div,.input-main-div *")||($(".edit-text").show(),$(".main-input-text,.date-info-icon").hide(),$(".main-input-text").keyup(function(a){$(this).val(remvoeBadWord($(this).val())),e($(this),a),chatName($(".profilename-input"))}))}),$(".main-input-text").keyup(function(a){$(this).val(remvoeBadWord($(this).val())),e($(this),a),chatName($(".profilename-input"))})}),$("#d_sim").click(function(){$("input#d_sim").is(":checked")?$(".network-two").removeClass("hide"):$(".network-two").addClass("hide")}),$("#d_mode").click(function(){$("input#d_mode").is(":checked")?$(".facebook-chat").addClass("dark-theme"):$(".facebook-chat").removeClass("dark-theme")}),$("#view_profile").click(function(){$("input#view_profile").is(":checked")?$(".fb-chat-profile").removeClass("hide"):$(".fb-chat-profile").addClass("hide")}),$("#d_sim").click(function(){$("input#d_sim").is(":checked")?$(".phone-network").addClass("sim2"):$(".phone-network").removeClass("sim2")}),$('input[name="message-send-type"]').click(function(){"Receive"==$(this).val()?$(".msg_seen_option").addClass("hide"):$(".msg_seen_option").removeClass("hide")}),$('input[name="message-send-type"]').click(function(){"Receive"==$(this).val()?$(".msg_sent_option").addClass("hide"):$(".msg_sent_option").removeClass("hide")}),$("#chat_date").change(function(){"otherdate"==$(this).val()?$(".message-date-input").show():$(".message-date-input").hide()}),$("input[name='postimage_upload']").on("change",function(e){e.stopPropagation(),"error"==($img_src=getImagePath($(this),e))?($(this).val(""),$(".error_msg").html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>'),$(".error_msg").attr("style","display:flax"),setTimeout(function(){$(".error_msg").attr("style","display:none")},6e3)):(e=$img_src,jQuery(".fileinput-new").hide(),jQuery(".file-exists").show(),jQuery(".preview-post-img").attr("src",e),jQuery(".hidden-message-image").val(e))}),$("input[name='reelimage_upload']").on("change",function(e){e.stopPropagation(),"error"==($img_src=getImagePath($(this),e))?($(this).val(""),$(".error_msg").html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>'),$(".error_msg").attr("style","display:flax"),setTimeout(function(){$(".error_msg").attr("style","display:none")},6e3)):(e=$img_src,jQuery(".fileinput-new").hide(),jQuery(".file-exists").show(),jQuery(".preview-reel-img").attr("src",e),jQuery(".hidden-message-image").val(e))}),$("#postprofile_upload").change(function(){var e=this.files[0];if(e){var a=new FileReader;a.onload=function(e){$(".preview-profile").attr("src",e.target.result)},a.readAsDataURL(e)}else $(".preview-profile").attr("src","assets/images/addimgbg.jpg")}),$("#reelprofile_upload").change(function(){var e=this.files[0];if(e){var a=new FileReader;a.onload=function(e){$(".reels-profile").attr("src",e.target.result)},a.readAsDataURL(e)}else $(".reels-profile").attr("src","assets/images/addimgbg.jpg")}),$("input[name='message-image-input']").on("change",function(e){e.stopPropagation(),"error"==($img_src=getImagePath($(this),e))?(jQuery(".file-preview-opt").hide(),$(this).val(""),$(".error_msg").html('<div class="msg-pop error-pop"><p>File formats should be .jpg, .jpeg, .png, and .svg.</p></div>'),$(".error_msg").attr("style","display:flax"),setTimeout(function(){$(".error_msg").attr("style","display:none")},6e3)):(e=$img_src,jQuery(".fileinput-new").hide(),jQuery(".file-exists").show(),jQuery(".file-preview-opt").show(),jQuery(".file-preview").html("<img height='100'  src='"+e+"'>"),jQuery(".hidden-message-image").val(e))}),$(".ins-send-btn").click(function(){if($messageText=$(".message-input").val(),$messageTime=onTimeChange($(".message-time-input").val()),$messageImage=$(".hidden-message-image").val(),$messageSendType=$("input[name='message-send-type']:checked").val(),$messageBoxId=$(".message-box-id").val(),$reelprofiletext=$("#reelprofiletext").val(),$reelimagetext=$("#reelimagetext").val(),$rverifyprofle=$("input[name='rverifyprofle']:checked").val(),$rsavepost=$("input[name='rsavepost']:checked").val(),$reelimage=$("#reelimage").val(),$postdescription=$("#postdescription").val(),$verifyprofle=$("input[name='verifyprofle']:checked").val(),$savepost=$("input[name='savepost']:checked").val(),$multiplepost=$("input[name='multiplepost']:checked").val(),$postprofilename=$("#postprofilename").val(),"otherdate"==$("#chat_date").val()){var e=$(".message-date-input").val().split("-");parseInt(e[0]);var a=parseInt(e[1]),e=parseInt(e[2]);$messageDate=e+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a-1]}else $messageDate=$("#chat_date").val();$flag=0,""==$messageText.trim()&&""==$messageImage?($(".message-input").addClass("error"),$flag++):$(".message-input").removeClass("error"),""==$messageTime.trim()?($(".message-time-input").addClass("error"),$flag++):$(".message-time-input").removeClass("error"),""!=$messageDate&&$messageDate.match(/^(Today|Yesterday|(0?[1-9]|[12][0-9]|3[01])\s(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{4})$/)&&($messageDate,$(".message-date-input").removeClass("error"),$(".error-msg").html("").hide()),0==$flag?($messageSendType="Receive"==$messageSendType?"receive":"sent",$msg_seen=$("input[name='msg_seen']:checked").val(),$msg_sent=$("input[name='msg_sent']:checked").val(),$msg_like=$("input[name='msg_like']:checked").val(),$postimage=$("input[name='setimage']:checked").val(),$tabname="text",$("#text_msg").hasClass("active")?$tabname="text":$("#post_msg").hasClass("active")?$tabname="post":$("#reel_msg").hasClass("active")&&($tabname="reel"),e=getMessageBoxHtml($data={message_box_id:$messageBoxId,message_text:$messageText,message_time:$messageTime,message_send_type:$messageSendType,message_image:$messageImage,message_date:$messageDate,msg_seen:$msg_seen,msg_sent:$msg_sent,msg_like:$msg_like,tabname:$tabname,reelprofiletext:$reelprofiletext,reelimagetext:$reelimagetext,rverifyprofle:$rverifyprofle,rsavepost:$rsavepost,reelimage:$reelimage,postimage:$postimage,postdescription:$postdescription,verifyprofle:$verifyprofle,savepost:$savepost,multiplepost:$multiplepost}),$(".fbchat-body").append(e),chatName($(".profilename-input")),$(".close-btn").click()):console.log("else")}),$("#profile-img").on("change",function(){profileCrop(this)}),$profileCrop=$("#crop-profile").croppie({viewport:{width:150,height:150,type:"circle"},showZoomer:!0,enableExif:!1}),$(".p-close-btn-modal").on("click",function(){$("#profile-img").val(""),$("#crop-profile").addClass("hide"),$(".img-profile-main-tag").removeClass("hide")}),$(".btn-crop-profile").click(function(){$profileCrop.croppie("result",{type:"canvas",size:"viewport"}).then(function(e){$(".facebook_profile_pic_img").attr("src",e),$("#crop-profile-modal").modal("hide"),$(".img-profile-main-tag").removeClass("hide"),$("#crop-profile").addClass("hide"),e=$("#js_data").data("base_url"),$(".fb_privew_profile").attr("src","assets/images/addimgbg.jpg"),$("#profile-img").val("")})}),$(".social-view-tab button").click(function(){$(this).hasClass("lg-view")?$(".left-part").addClass("active"):$(".left-part").removeClass("active")}),$(".close-btn").click(function(){$("body").removeClass("body-fixed"),$(".main-modal-div").data("mode","close").hide()});
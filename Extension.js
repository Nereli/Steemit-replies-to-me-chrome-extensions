chrome.browserAction.onClicked.addListener(function(tab){

	chrome.tabs.create({url:"http://steemit.com"});

});

function Check(){

	if(localStorage['SteemitContents']){

		$('#Contents').html(localStorage['SteemitContents']);

	}

	var Datas = '';
	$.get("http://steemit.com",function (Sources) { 

		var UserName = $(Sources).find('.c-sidebar__link').attr('href');
		var Url = 'https://steemit.com' + UserName + '/recent-replies';
		$.get(Url,function (Source) { 

			$(Source).find(".articles__summary").each(function(Key, Value) {

				var Title = $(Value).find('.entry-title').text();
				var SubjectUrl = $(Value).find('.entry-title a').attr('href');
				var Time = $(Value).find('.timestamp__time span').attr('title');
				var Name = $(Value).find('.author a').text();

				if(Key%2){

					var Bg = ' style="background: #efefef;"';

				}else{

					var Bg = '';

				}

			    //alert("Key: " + Key + "\nTitle: " + Title + "\nTime:" + Time + "\nName:" + Name + "\nSubject Url:" + SubjectUrl);
			    Datas = Datas + '<div><a href="https://steemit.com' + SubjectUrl + '" target="_blank" ' + Bg + '>' + Title + ' (' + Name + ' - ' + Time + ')</a></div>';

			});

			$('#Contents').html(Datas);
			localStorage['SteemitContents'] = Datas;


		});

	});

}

Check();

setInterval(function(){ Check(); },55000);
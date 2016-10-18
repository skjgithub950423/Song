require.config({
	baseUrl:"js",
    paths: {
        jquery: 'jquery'
    }
});
 
require(['jquery','calendar'], function($) {
    $('#ca').calendar({
        /*width: 320,
        height: 320,*/
        customClass: 'flex-item',
        data: [
			{
			  date: '2015/12/24',
			  value: 'Christmas Eve'
			},
			{
			  date: '2015/12/25',
			  value: 'Merry Christmas'
			},
			{
			  date: '2016/01/01',
			  value: 'Happy New Year'
			}
		],
        onSelected: function (view, date, data) {
        	var Substr = date.toString().split(" ").splice(1,3);
        	var oDiv = $('#time-sel');
        	oDiv.html(Substr.join("/"));
        }
    });
});
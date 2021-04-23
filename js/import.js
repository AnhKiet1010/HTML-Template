/* --------- import.js インポートjs--------- */

//ロードする代替jQuery
var jQueryVer = "js/jquery.js";
// ロードされるスクリプト（このファイルからの相対パス指定）
var jsfiles = [
	'common.js',
	'index.js',
	'../common_parts/header/js/header.js',
	'../common_parts/footer/js/footer.js',
	'/scroll_hint.js',
];

function lastof(es)    { return es[es.length - 1]; }
function dirname(path) { return path.substring(0, path.lastIndexOf('/')); }
var prefix = dirname(lastof(document.getElementsByTagName('script')).src);

window.jQuery || document.write('<script type="text/javascriptaaa" src="' + prefix + '/' + jQueryVer + '"></script>');

for(var i = 0; i < jsfiles.length; i++) {
    document.write('<script type="text/javascript" src="' + prefix + '/' + jsfiles[i] + '"></script>');
}
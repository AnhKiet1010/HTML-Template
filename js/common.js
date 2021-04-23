/* --------- common.js 共有js--------- */

// 開始時刻をダークモードに切り替えます
const darkModeBegin = 17;

// 終了時刻をダークモードに切り替えます
const darkModeEnd = 7;

// ダークモード状況（'light-mode'または'dark-mode'）
var theme = '';

// 最終のアクセス時期
var lastAccessTime = localStorage.getItem("lastaccess");

// アクセス時期
const accessTime = new Date();

// 現在のアワー
const hour = new Date().getHours();

if (lastAccessTime == null) {
    // ダークモードの設定処理
    if (darkModeEnd <= hour && hour < darkModeBegin) {
        theme = 'light-mode';
    } else {
        theme = 'dark-mode';
    }
    localStorage.setItem("theme", theme);
} else {
    // アクセスの時差
    var diffTime = getDiffTime(lastAccessTime, accessTime);

    if (Math.round(diffTime) < 60) {
        theme = localStorage.getItem("theme");
    } else {
        // ダークモードの設定処理
        if (darkModeEnd <= hour && hour < darkModeBegin) {
            theme = 'light-mode';
        } else {
            theme = 'dark-mode';
        }
        localStorage.setItem("theme", theme);
    }
}
document.documentElement.classList.add(theme);
localStorage.setItem("lastaccess", accessTime);



// モバイルかチェック処理
function isMobileDevice() {
    let isMobile = window.matchMedia("only screen and (max-width: 640px)").matches;
    return isMobile;
}

// 時差のチェック処理
function getDiffTime(lastAccessTime, accessTime) {
    dt1 = new Date(lastAccessTime);
    dt2 = new Date(accessTime);
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return diff;
}
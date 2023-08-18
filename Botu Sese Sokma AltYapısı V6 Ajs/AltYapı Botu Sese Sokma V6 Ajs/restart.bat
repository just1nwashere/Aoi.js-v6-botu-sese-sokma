echo off
title Just1N Restarting
color d
cls
:a
pm2 restart Just1N.js
goto a

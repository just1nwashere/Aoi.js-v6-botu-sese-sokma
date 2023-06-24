echo off
title Speed Restarting
color d
cls
:a
pm2 restart Speed.js
goto a
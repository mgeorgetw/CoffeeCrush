let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Git/CoffeeCrush/src/views/GetReadyView/PreparationCard
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
$argadd ~/Git/CoffeeCrush
edit ~/Git/CoffeeCrush/src/views/InstructionView/DonutProgressChart/CountDownTimer.jsx
argglobal
balt ~/Git/CoffeeCrush/src/views/InstructionView/DonutProgressChart/DonutProgress.module.css
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=3
setlocal fml=1
setlocal fdn=10
setlocal fen
11
normal! zo
21
normal! zo
28
normal! zo
let s:l = 29 - ((28 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 29
normal! 033|
lcd ~/Git/CoffeeCrush
tabnext 1
badd +3 ~/Git/CoffeeCrush/src/App.tsx
badd +1 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/CountDownTimer.jsx
badd +1 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgressContainer.jsx
badd +23 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css
badd +5 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutChart.jsx
badd +11 term://~/Git/CoffeeCrush//59196:/usr/local/bin/fish
badd +38 ~/Git/CoffeeCrush/src/data/BrewMethods.json
badd +16 ~/Git/CoffeeCrush/src/views/GetReadyView/PreparationCard/index.tsx
badd +55 ~/Git/CoffeeCrush/src/App.css
badd +23 ~/Git/CoffeeCrush/src/views/InstructionView/DonutProgressChart/CountDownTimer.jsx
badd +59 ~/Git/CoffeeCrush/node_modules/react-scripts/lib/react-app.d.ts
badd +31 ~/Git/CoffeeCrush/src/views/InstructionView/DonutProgressChart/DonutProgress.module.css
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :

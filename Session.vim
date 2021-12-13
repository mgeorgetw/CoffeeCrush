let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
$argadd ~/Git/CoffeeCrush
edit DonutProgress.module.css
argglobal
balt DonutNeedle.jsx
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=3
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 32 - ((7 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 32
normal! 071|
lcd ~/Git/CoffeeCrush
tabnext 1
badd +35 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgressContainer.jsx
badd +26 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/index.tsx
badd +31 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css
badd +9 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutNeedle.jsx
badd +2 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutChart.jsx
badd +11 term://~/Git/CoffeeCrush//54382:/usr/local/bin/fish
badd +1 ~/Git/CoffeeCrush/src/types/TypeBrewMethod.tsx
badd +1 ~/Git/CoffeeCrush/src/data/BrewMethods.json
badd +11 ~/Git/CoffeeCrush/src/views/InstructinView/index.tsx
badd +20 ~/Git/CoffeeCrush/public/index.html
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

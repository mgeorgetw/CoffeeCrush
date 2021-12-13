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
edit ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/CountDownTimer.jsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 81 + 82) / 164)
exe 'vert 2resize ' . ((&columns * 82 + 82) / 164)
argglobal
balt ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgressContainer.jsx
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
12
normal! zo
21
normal! zo
28
normal! zo
let s:l = 34 - ((33 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 34
normal! 018|
lcd ~/Git/CoffeeCrush
wincmd w
argglobal
if bufexists("~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css") | buffer ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css | else | edit ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css | endif
if &buftype ==# 'terminal'
  silent file ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css
endif
balt ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgressContainer.jsx
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=3
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 17 - ((6 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 17
normal! 070|
lcd ~/Git/CoffeeCrush
wincmd w
exe 'vert 1resize ' . ((&columns * 81 + 82) / 164)
exe 'vert 2resize ' . ((&columns * 82 + 82) / 164)
tabnext 1
badd +30 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css
badd +10 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutNeedle.jsx
badd +76 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgressContainer.jsx
badd +6 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/index.tsx
badd +14 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutChart.jsx
badd +11 term://~/Git/CoffeeCrush//1890:/usr/local/bin/fish
badd +1 ~/Git/CoffeeCrush/src/types/TypeBrewMethod.tsx
badd +38 ~/Git/CoffeeCrush/src/data/BrewMethods.json
badd +86 ~/Git/CoffeeCrush/src/views/InstructinView/index.tsx
badd +27 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/CountDownTimer.jsx
badd +16 ~/Git/CoffeeCrush/src/views/GetReadyView/PreparationCard/index.tsx
badd +55 ~/Git/CoffeeCrush/src/App.css
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFc
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
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

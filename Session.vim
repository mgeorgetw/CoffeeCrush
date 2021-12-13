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
edit DonutProgressContainer.jsx
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
exe 'vert 1resize ' . ((&columns * 82 + 82) / 164)
exe 'vert 2resize ' . ((&columns * 81 + 82) / 164)
argglobal
balt index.tsx
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=6
setlocal fml=1
setlocal fdn=10
setlocal fen
23
normal! zo
24
normal! zo
42
normal! zo
56
normal! zo
64
normal! zo
65
normal! zo
66
normal! zo
67
normal! zo
90
normal! zo
let s:l = 89 - ((24 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 89
normal! 061|
lcd ~/Git/CoffeeCrush
wincmd w
argglobal
if bufexists("~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css") | buffer ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css | else | edit ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css | endif
if &buftype ==# 'terminal'
  silent file ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css
endif
balt ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutNeedle.jsx
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=3
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 31 - ((6 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 31
normal! 06|
lcd ~/Git/CoffeeCrush
wincmd w
exe 'vert 1resize ' . ((&columns * 82 + 82) / 164)
exe 'vert 2resize ' . ((&columns * 81 + 82) / 164)
tabnext 1
badd +60 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgressContainer.jsx
badd +9 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutNeedle.jsx
badd +1 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutChart.jsx
badd +11 term://~/Git/CoffeeCrush//987:/usr/local/bin/fish
badd +31 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/DonutProgress.module.css
badd +1 ~/Git/CoffeeCrush/src/types/TypeBrewMethod.tsx
badd +1 ~/Git/CoffeeCrush/src/data/BrewMethods.json
badd +27 ~/Git/CoffeeCrush/src/views/InstructinView/DonutProgressChart/index.tsx
badd +84 ~/Git/CoffeeCrush/src/views/InstructinView/index.tsx
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

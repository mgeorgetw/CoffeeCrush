let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Git/coffee_guide
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +33 src/App.css
badd +19 src/DoseCard/index.tsx
badd +5 src/App.tsx
badd +1 src/data/BrewMethods.json
badd +1 src/PreparationCard/index.tsx
badd +12 src/utils/math.tsx
badd +1 term://~/Git/coffee_guide//7586:yarn\ start
badd +0 src/App.css
badd +11 src/elements/Card.tsx
badd +0 man://display(1)
badd +24 src/elements/Stopwatch/index.tsx
argglobal
%argdel
edit src/App.tsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
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
exe '2resize ' . ((&lines * 25 + 20) / 41)
exe 'vert 2resize ' . ((&columns * 82 + 82) / 164)
exe '3resize ' . ((&lines * 12 + 20) / 41)
exe 'vert 3resize ' . ((&columns * 82 + 82) / 164)
argglobal
balt src/elements/Stopwatch/index.tsx
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=3
setlocal fml=1
setlocal fdn=10
setlocal fen
80
normal! zo
92
normal! zo
93
normal! zo
96
normal! zo
97
normal! zo
let s:l = 7 - ((6 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 7
normal! 011|
lcd ~/Git/coffee_guide/src
wincmd w
argglobal
if bufexists("~/Git/coffee_guide/src/App.css") | buffer ~/Git/coffee_guide/src/App.css | else | edit ~/Git/coffee_guide/src/App.css | endif
if &buftype ==# 'terminal'
  silent file ~/Git/coffee_guide/src/App.css
endif
balt ~/Git/coffee_guide/src/App.tsx
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=3
setlocal fml=1
setlocal fdn=10
setlocal fen
89
normal! zo
let s:l = 33 - ((2 * winheight(0) + 12) / 25)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 33
normal! 0
lcd ~/Git/coffee_guide/src
wincmd w
argglobal
if bufexists("term://~/Git/coffee_guide//7586:yarn\ start") | buffer term://~/Git/coffee_guide//7586:yarn\ start | else | edit term://~/Git/coffee_guide//7586:yarn\ start | endif
if &buftype ==# 'terminal'
  silent file term://~/Git/coffee_guide//7586:yarn\ start
endif
balt ~/Git/coffee_guide/src/App.css
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=3
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 634 - ((11 * winheight(0) + 6) / 12)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 634
normal! 0
lcd ~/Git/coffee_guide/src
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 81 + 82) / 164)
exe '2resize ' . ((&lines * 25 + 20) / 41)
exe 'vert 2resize ' . ((&columns * 82 + 82) / 164)
exe '3resize ' . ((&lines * 12 + 20) / 41)
exe 'vert 3resize ' . ((&columns * 82 + 82) / 164)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0&& getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
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
nohlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
